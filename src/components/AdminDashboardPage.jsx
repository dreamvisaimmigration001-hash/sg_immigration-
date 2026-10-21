import React, { useState, useEffect, useMemo } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import {
  getAllVisaRecords,
  getLocalVisaRecords,
  addVisaRecord,
  updateVisaRecord,
  deleteVisaRecord,
  clearAllVisaRecords,
  resetVisaRecords,
  getAllAdmins,
  getLocalAdmins,
  addAdmin,
  deleteAdmin,
  authenticateAdmin,
  isAuthorizedAdminId,
  IMMIGRATION_API_BASE_URL,
} from "../services/immigrationApi";
import {
  LayoutDashboard,
  Users,
  FileCheck2,
  Clock,
  PlusCircle,
  Search,
  Filter,
  Trash2,
  Edit3,
  ShieldCheck,
  Building2,
  RefreshCw,
  Sparkles,
  Download,
  Calendar,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  XCircle,
  MapPin,
  FileText,
  Lock,
  User,
  UserCheck,
  UserPlus,
  LogIn,
  LogOut,
  ArrowRight,
  ShieldAlert,
  Key,
  Zap,
} from "lucide-react";
import "./AdminDashboardPage.css";

const IMMIGRATION_AUTH_KEY = "ica_immigration_admin_authenticated";

export const COUNTRIES_LIST = [
  "MALAYSIAN",
  "INDIAN",
  "CHINESE",
  "INDONESIAN",
  "BANGLADESHI",
  "FILIPINO",
  "VIETNAMESE",
  "THAI",
  "BURMESE (MYANMAR)",
  "SINGAPOREAN",
  "BRITISH (UNITED KINGDOM)",
  "AMERICAN (UNITED STATES)",
  "AUSTRALIAN",
  "CANADIAN",
  "GERMAN",
  "FRENCH",
  "JAPANESE",
  "KOREAN (SOUTH KOREA)",
  "PAKISTANI",
  "SRI LANKAN",
  "NEPALESE",
  "TAIWANESE",
  "HONG KONG SAR",
  "NEW ZEALANDER",
  "EMIRATI (UAE)",
  "SAUDI",
  "CAMBODIAN",
  "LAOTIAN",
  "BRUNEIAN",
  "RUSSIAN",
  "BRAZILIAN",
  "SOUTH AFRICAN",
  "OTHER / FOREIGN NATIONAL",
];

export const PASS_TYPES_LIST = [
  "Social Visit Pass / Multiple Journey Entry Visa",
  "Employment Pass / Work Pass Entry Approval",
  "S Pass / Direct Entry Clearance",
  "Student's Pass / In-Principle Approval (IPA)",
  "Long-Term Visit Pass (LTVP)",
  "Permanent Resident Entry Permit (REP)",
  "Short-Term Visit Pass Extension",
  "Diplomatic / Official Entry Clearance",
];

export const APPOINTMENT_TIME_SLOTS = [
  "08:30 AM (Singapore Standard Time, GMT+8)",
  "09:00 AM (Singapore Standard Time, GMT+8)",
  "09:30 AM (Singapore Standard Time, GMT+8)",
  "10:00 AM (Singapore Standard Time, GMT+8)",
  "10:30 AM (Singapore Standard Time, GMT+8)",
  "11:00 AM (Singapore Standard Time, GMT+8)",
  "11:30 AM (Singapore Standard Time, GMT+8)",
  "12:00 PM (Singapore Standard Time, GMT+8)",
  "02:00 PM (Singapore Standard Time, GMT+8)",
  "02:30 PM (Singapore Standard Time, GMT+8)",
  "03:00 PM (Singapore Standard Time, GMT+8)",
  "03:30 PM (Singapore Standard Time, GMT+8)",
  "04:00 PM (Singapore Standard Time, GMT+8)",
  "04:30 PM (Singapore Standard Time, GMT+8)",
  "05:00 PM (Singapore Standard Time, GMT+8)",
];

export function formatDateToICAFormat(dateString) {
  if (!dateString) return "";
  try {
    const parts = dateString.split("-");
    if (parts.length !== 3) return dateString;
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    const d = new Date(year, month - 1, day);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dayStr = String(day).padStart(2, "0");
    const monthStr = months[month - 1];
    const dayName = days[d.getDay()];
    return `${dayStr} ${monthStr} ${year} (${dayName})`;
  } catch {
    return dateString;
  }
}

export default function AdminDashboardPage({
  onNavigate,
  onNavigateHome,
  onNavigateToCheckStatus,
  onNavigateToCheckpoints,
  onNavigateToContact,
  onNavigateToFeedback,
  onNavigateToFaqs,
  onNavigateToReach,
  ...props
}) {
  // Authentication State (Restricted to authorized account: dreamvisimmigove)
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      const isAuth = sessionStorage.getItem(IMMIGRATION_AUTH_KEY) === "true";
      const user = sessionStorage.getItem("ica_immigration_user") || "";
      const token = sessionStorage.getItem("ica_immigration_token") || "";
      if (token && token.startsWith("ica_auth_")) {
        sessionStorage.removeItem(IMMIGRATION_AUTH_KEY);
        sessionStorage.removeItem("ica_immigration_user");
        sessionStorage.removeItem("ica_immigration_token");
        return false;
      }
      if (isAuth && user && !isAuthorizedAdminId(user)) {
        sessionStorage.removeItem(IMMIGRATION_AUTH_KEY);
        sessionStorage.removeItem("ica_immigration_user");
        sessionStorage.removeItem("ica_immigration_token");
        return false;
      }
      return isAuth;
    }
    return false;
  });

  const [currentAdminUser, setCurrentAdminUser] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        sessionStorage.getItem("ica_immigration_user") || "DREAMVISIMMIGOVE"
      );
    }
    return "DREAMVISIMMIGOVE";
  });

  // Login Form Credentials State (Empty by default for secure entry)
  const [adminUserId, setAdminUserId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isSubmittingLogin, setIsSubmittingLogin] = useState(false);

  // Tab State: "visas" | "admins"
  const [activeTab, setActiveTab] = useState("visas");

  // Visa Records State
  const [records, setRecords] = useState(() => getLocalVisaRecords() || []);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [viewingRecord, setViewingRecord] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Admin Management State
  const [admins, setAdmins] = useState(() => getLocalAdmins() || []);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [adminFormData, setAdminFormData] = useState({
    username: "",
    name: "",
    password: "",
    role: "VISA_OFFICER",
    email: "",
  });
  const [adminFormError, setAdminFormError] = useState("");

  const generateRandomVisaRef = () => {
    const randomYear = 2026;
    const randomDigits = Math.floor(100000 + Math.random() * 900000);
    return `V-${randomYear}-${randomDigits}`;
  };

  // Visa Form Clean State Generator (Starts completely empty with clear placeholders)
  const getCleanFormState = () => ({
    visaRef: "",
    tdNum: "",
    applicantName: "",
    dob: "",
    country: "",
    visaType: "",
    visaClassSubclass: "",
    entriesAllowed: "Multiple",
    mustNotArriveAfter: "",
    periodOfStay: "",
    visaStatus: "APPROVED",
    applicationDate: new Date().toLocaleDateString("en-SG", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    issueDate: new Date().toLocaleDateString("en-SG", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    expiryDate: "",
    document: null,
    documentName: "",
  });

  const [formData, setFormData] = useState(getCleanFormState);
  const [formError, setFormError] = useState("");

  const loadData = async () => {
    try {
      // 1. Instantly populate from synchronous local cache
      const localList = getLocalVisaRecords();
      if (Array.isArray(localList)) setRecords(localList);

      const localAdmins = getLocalAdmins();
      if (Array.isArray(localAdmins)) setAdmins(localAdmins);

      // 2. Fetch remote update / merged records
      const remoteVisas = await getAllVisaRecords();
      if (Array.isArray(remoteVisas)) {
        setRecords(remoteVisas);
      }

      const remoteAdmins = await getAllAdmins();
      if (Array.isArray(remoteAdmins)) {
        setAdmins(remoteAdmins);
      }
    } catch (err) {
      console.warn("loadData error:", err);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Security verification: only dreamvisimmigove (or admin fallback) allowed in dashboard
    if (typeof window !== "undefined") {
      const user = sessionStorage.getItem("ica_immigration_user") || "";
      if (user && !isAuthorizedAdminId(user)) {
        sessionStorage.removeItem(IMMIGRATION_AUTH_KEY);
        sessionStorage.removeItem("ica_immigration_user");
        sessionStorage.removeItem("ica_immigration_token");
        setIsAdminLoggedIn(false);
        setLoginError(
          "Access Denied: Only administrator account 'dreamvisimmigove' is authorized to access the Admin Dashboard.",
        );
      }
    }
    document.title = isAdminLoggedIn
      ? "ICA Admin Dashboard | Immigration Visa Portal"
      : "Admin Login | Immigration Portal";
    loadData();
  }, [isAdminLoggedIn]);

  const showToast = (message, type = "success") => {
    setToastMessage({ message, type });
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Administrator Login Handler - Strict API Verification
  const handleAdminLoginSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoginError("");

    const trimmedId = (adminUserId || "").trim();
    const trimmedPass = (adminPassword || "").trim();

    if (!trimmedId || !trimmedPass) {
      setLoginError("Please enter both Administrator ID and Password.");
      return;
    }

    if (!isAuthorizedAdminId(trimmedId)) {
      setLoginError(
        "Access Denied: Only administrator account 'dreamvisimmigove' can access the Admin Dashboard.",
      );
      return;
    }

    setIsSubmittingLogin(true);

    try {
      const authenticated = await authenticateAdmin(trimmedId, trimmedPass);

      if (!authenticated) {
        setLoginError(
          "Access Denied: Invalid Administrator ID, Email, or Password.",
        );
        setIsSubmittingLogin(false);
        return;
      }

      sessionStorage.setItem(IMMIGRATION_AUTH_KEY, "true");
      if (authenticated.token) {
        sessionStorage.setItem("ica_immigration_token", authenticated.token);
      }
      sessionStorage.setItem(
        "ica_immigration_user",
        (authenticated.username || trimmedId).toUpperCase(),
      );
      setCurrentAdminUser((authenticated.username || trimmedId).toUpperCase());
      setIsAdminLoggedIn(true);
      showToast(
        `Welcome back, ${authenticated.name || authenticated.username || trimmedId}! Immigration Admin Dashboard unlocked.`,
        "success",
      );
      loadData();
    } catch (err) {
      setLoginError(
        err.message ||
        "Access Denied: Invalid Administrator ID, Email, or Password.",
      );
    } finally {
      setIsSubmittingLogin(false);
    }
  };

  const handleAdminLogout = () => {
    sessionStorage.removeItem(IMMIGRATION_AUTH_KEY);
    sessionStorage.removeItem("ica_immigration_user");
    sessionStorage.removeItem("ica_crm_user");
    sessionStorage.removeItem("ica_immigration_token");
    setIsAdminLoggedIn(false);
    setAdminUserId("");
    setAdminPassword("");
    setLoginError("");
    showToast("Signed out from Administrator session.", "info");
  };

  // Visa Modal Handlers (Ensures clean empty form on new visa creation)
  const handleOpenAddModal = () => {
    setEditingRecord(null);
    setFormError("");
    setFormData(getCleanFormState());
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (rec) => {
    setEditingRecord(rec);
    setFormError("");
    setFormData({
      ...rec,
      visaRef: rec.visaRef || rec.visaGrantNumber || "",
      tdNum: rec.tdNum || rec.documentNumber || "",
      applicantName: rec.applicantName || rec.fullName || "",
      dob: rec.dob || rec.dateOfBirth || "",
      country: Array.isArray(rec.country)
        ? rec.country[0]
        : Array.isArray(rec.nationality)
        ? rec.nationality[0]
        : rec.country || rec.nationality || "",
      visaClassSubclass: rec.visaClassSubclass || "FA / 600",
      visaType: rec.visaType || "Visitor",
      entriesAllowed: rec.entriesAllowed || "Multiple",
      mustNotArriveAfter: rec.mustNotArriveAfter || "",
      periodOfStay: rec.periodOfStay || "30 Days",
      visaStatus: rec.visaStatus || rec.status || "APPROVED",
      issueDate: rec.issueDate || rec.visaGrantDate || "",
      expiryDate: rec.expiryDate || rec.visaExpiryDate || "",
      applicationDate: rec.applicationDate || "",
      document: rec.document || null,
      documentName: rec.documentName || (rec.document ? "Attached Document" : (rec.documents && rec.documents.length > 0 ? "Attached Document" : "")),
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingRecord(null);
    setFormError("");
    setFormData(getCleanFormState());
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const cleanRef =
      formData.visaRef && formData.visaRef.trim()
        ? formData.visaRef.trim()
        : generateRandomVisaRef();
    const cleanTd = (formData.tdNum || "").trim();
    const cleanName = (formData.applicantName || "").trim();
    const cleanCountry = (formData.country || formData.nationality || "").trim();
    const hasDoc = Boolean(
      formData.document ||
      formData.documentName ||
      (editingRecord && (editingRecord.document || (editingRecord.documents && editingRecord.documents.length > 0) || editingRecord.documentName))
    );

    if (!cleanTd) {
      setFormError("Passport Number is required. Without adding a document and passport number, the visa cannot be verified.");
      return;
    }
    if (!hasDoc) {
      setFormError("Visa Document (PDF/Image) is required. Without adding a document and passport number, the visa cannot be verified.");
      return;
    }
    if (!cleanName) {
      setFormError("Client / Applicant Full Name is required.");
      return;
    }
    if (!cleanCountry) {
      setFormError("Country is required.");
      return;
    }

    try {
      const payload = new FormData();
      payload.set("visaGrantNumber", cleanRef);
      payload.set("documentNumber", cleanTd);
      payload.set("passportNumber", cleanTd);
      payload.set("fullName", cleanName);
      payload.set("dateOfBirth", formData.dob || "");
      payload.set("country", cleanCountry);
      payload.set("nationality", cleanCountry);
      payload.set("visaClassSubclass", formData.visaClassSubclass || "FA / 600");
      payload.set("visaType", formData.visaType || "Visitor");
      payload.set("entriesAllowed", formData.entriesAllowed || "Multiple");
      payload.set("mustNotArriveAfter", formData.mustNotArriveAfter || "");
      payload.set("periodOfStay", formData.periodOfStay || "30 Days");
      payload.set("visaStatus", formData.visaStatus || "APPROVED");
      payload.set("status", formData.visaStatus || "APPROVED");
      payload.set("visaGrantDate", formData.issueDate || "");
      payload.set("visaExpiryDate", formData.expiryDate || "");
      payload.set("applicationDate", formData.applicationDate || "");
      payload.set("applicationType", "visa");
      payload.set("origin", "sg");

      // Also set camelCase fields for universal frontend alignment
      payload.set("visaRef", cleanRef);
      payload.set("tdNum", cleanTd);
      payload.set("applicantName", cleanName);
      payload.set("dob", formData.dob || "");
      payload.set("issueDate", formData.issueDate || "");
      payload.set("expiryDate", formData.expiryDate || "");

      if (formData.document instanceof File) {
        payload.set("document", formData.document);
        payload.set("documentName", formData.document.name);
      } else if (formData.document) {
        payload.set("document", formData.document);
        if (formData.documentName) {
          payload.set("documentName", formData.documentName);
        }
      } else if (formData.documentName) {
        payload.set("documentName", formData.documentName);
      }

      if (editingRecord) {
        await updateVisaRecord(editingRecord.id || editingRecord._id, payload);
        showToast(`Record "${cleanRef}" updated successfully!`);
      } else {
        await addVisaRecord(payload);
        showToast(`New client visa record "${cleanRef}" registered!`);
      }

      // 1. Instant UI update & modal close (0ms latency)
      setRecords(getLocalVisaRecords());
      handleCloseModal();

      // 2. Refresh background sync
      await loadData();
    } catch (err) {
      setFormError(err.message || "Failed to save visa record.");
    }
  };

  const handleDeleteRecord = async (id, refNo) => {
    if (
      window.confirm(
        `Are you sure you want to delete client record "${refNo}"?`,
      )
    ) {
      try {
        await deleteVisaRecord(id, refNo);
        setRecords(getLocalVisaRecords());
        showToast(`Record "${refNo}" removed from database.`, "info");
        await loadData();
      } catch (err) {
        showToast(err.message || "Failed to delete visa record.", "error");
      }
    }
  };

  const handleClearAllRecords = async () => {
    if (records.length === 0) return;
    if (
      window.confirm(
        "Are you sure you want to clear all client visa records from the database?",
      )
    ) {
      try {
        await clearAllVisaRecords();
        setRecords([]);
        showToast("All client visa records cleared from database.", "info");
        await loadData();
      } catch (err) {
        showToast(err.message || "Failed to clear all records.", "error");
      }
    }
  };

  // Admin Management Handlers
  const handleOpenAddAdminModal = () => {
    setAdminFormError("");
    setAdminFormData({
      username: "",
      name: "",
      password: "",
      role: "VISA_OFFICER",
      email: "",
    });
    setIsAdminModalOpen(true);
  };

  const handleCloseAdminModal = () => {
    setIsAdminModalOpen(false);
    setAdminFormError("");
  };

  const handleAddAdminSubmit = async (e) => {
    e.preventDefault();
    setAdminFormError("");

    if (!adminFormData.username.trim()) {
      setAdminFormError("Administrator username is required.");
      return;
    }
    if (
      !adminFormData.password.trim() ||
      adminFormData.password.trim().length < 4
    ) {
      setAdminFormError("Password must be at least 4 characters long.");
      return;
    }

    try {
      const created = await addAdmin(adminFormData);
      setAdmins(getLocalAdmins());
      handleCloseAdminModal();
      setAdminFormData({
        username: "",
        name: "",
        password: "",
        role: "VISA_OFFICER",
        email: "",
      });
      showToast(
        `Administrator account "@${created.username}" successfully registered in the personnel directory.`,
        "success",
      );
      loadData();
    } catch (err) {
      setAdminFormError(err.message || "Failed to create administrator.");
    }
  };

  const handleDeleteAdmin = async (adminId, adminUsername) => {
    if (
      window.confirm(
        `Are you sure you want to remove administrator "${adminUsername}"?`,
      )
    ) {
      try {
        await deleteAdmin(adminId);
        setAdmins(getLocalAdmins());
        showToast(`Administrator "${adminUsername}" removed.`, "info");
        loadData();
      } catch (err) {
        alert(err.message || "Failed to delete administrator.");
      }
    }
  };

  // Export JSON
  const handleExportData = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(records, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute(
      "download",
      `ica_visa_clients_${new Date().toISOString().slice(0, 10)}.json`,
    );
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast("Exported all client visa records to JSON file.", "success");
  };

  // Filtered list computation
  const safeRecords = useMemo(() => {
    return (Array.isArray(records) ? records : []).filter(
      (r) =>
        r &&
        (r.applicantName ||
          r.fullName ||
          r.visaRef ||
          r.visaGrantNumber ||
          r.tdNum ||
          r.documentNumber),
    );
  }, [records]);

  const safeAdmins = Array.isArray(admins) ? admins : [];

  const filteredRecords = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return safeRecords.filter((r) => {
      const applicant = (r.applicantName || r.fullName || "").toLowerCase();
      const visaRef = (r.visaRef || r.visaGrantNumber || "").toLowerCase();
      const tdNum = (r.tdNum || r.documentNumber || "").toLowerCase();
      const country = (r.country || r.nationality || "").toLowerCase();
      const passType = (r.passType || r.visaType || "").toLowerCase();
      const queueNo = (r.queueNo || "").toLowerCase();

      const matchQuery =
        !q ||
        applicant.includes(q) ||
        visaRef.includes(q) ||
        tdNum.includes(q) ||
        country.includes(q) ||
        passType.includes(q) ||
        queueNo.includes(q);

      const status = (r.visaStatus || r.status || "").toUpperCase();
      const matchStatus =
        statusFilter === "ALL" ||
        (statusFilter === "APPROVED" && status === "APPROVED") ||
        (statusFilter === "PROCESSING" &&
          (status.includes("PROCESS") || status.includes("PEND"))) ||
        (statusFilter === "REJECTED" &&
          (status.includes("REJECT") || status.includes("UNSUCCESS")));

      return matchQuery && matchStatus;
    });
  }, [safeRecords, searchQuery, statusFilter]);

  // Statistics
  const totalCount = safeRecords.length;
  const approvedCount = safeRecords.filter((r) => {
    const status = (r.visaStatus || r.status || "").toUpperCase();
    return status === "APPROVED";
  }).length;
  const processingCount = safeRecords.filter((r) => {
    const status = (r.visaStatus || r.status || "").toUpperCase();
    return status.includes("PROCESS") || status.includes("PEND");
  }).length;
  const confirmedAppointments = safeRecords.filter((r) =>
    (r.appointmentStatus || "").toUpperCase().includes("CONFIRM"),
  ).length;

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VIEW 1: ADMIN LOGIN SCREEN
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  if (!isAdminLoggedIn) {
    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-container">
          <div className="admin-login-card crm-gate-card">
            {/* Header */}
            <div className="admin-login-header">
              <div className="admin-login-shield-badge">
                <ShieldCheck size={38} color="#ffffff" />
              </div>
              <h1 className="admin-login-title">
                Immigration Authority Portal Login
              </h1>
              <p className="admin-login-subtitle">
                Enter your authorized Administrator credentials to access client
                visa data and manage system admins.
              </p>
            </div>

            <div className="crm-login-body">
              {loginError && (
                <div className="admin-login-error">
                  <AlertCircle size={18} />
                  <span>{loginError}</span>
                </div>
              )}

              {/* Login Form */}
              <form
                onSubmit={handleAdminLoginSubmit}
                className="admin-credentials-form"
              >
                {/* Admin ID / Email */}
                <div className="admin-input-group">
                  <label htmlFor="adminIdInput" className="admin-input-label">
                    <span>Admin ID / Email</span>
                    <span className="required-star">*</span>
                  </label>
                  <div className="admin-input-with-icon">
                    <User size={18} className="field-lead-icon" />
                    <input
                      id="adminIdInput"
                      type="text"
                      className="admin-form-input"
                      placeholder="e.g. Enter id"
                      value={adminUserId}
                      onChange={(e) => setAdminUserId(e.target.value)}
                      autoComplete="username"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="admin-input-group">
                  <label htmlFor="adminPassInput" className="admin-input-label">
                    <span>Password</span>
                    <span className="required-star">*</span>
                  </label>
                  <div className="admin-input-with-icon">
                    <Lock size={18} className="field-lead-icon" />
                    <input
                      id="adminPassInput"
                      type={showPassword ? "text" : "password"}
                      className="admin-form-input"
                      placeholder="••••••••••••"
                      value={adminPassword}
                      onChange={(e) => setAdminPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle-btn"
                      onClick={() => setShowPassword(!showPassword)}
                      title={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="crm-verify-access-btn"
                  disabled={isSubmittingLogin}
                >
                  <LogIn size={18} />
                  <span>
                    {isSubmittingLogin
                      ? "Verifying..."
                      : "Sign In to Admin Dashboard"}
                  </span>
                  <ArrowRight size={18} />
                </button>
              </form>

              <div className="crm-gate-footer">
                <p className="crm-security-advisory">
                  🔒 Singapore Immigration & Checkpoints Authority Gateway.
                  Authorized Administrator account 'dreamvisimmigove' required.
                </p>
                <button
                  type="button"
                  className="admin-back-public-btn"
                  onClick={onNavigateToCheckStatus}
                >
                  ← Return to Public Visa Status Check
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // VIEW 2: AUTHENTICATED ADMIN DASHBOARD
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  return (
    <div className="admin-dashboard-container">
      <GovMasthead />

      {/* Admin Top Navigation Bar */}
      <header className="admin-topbar">
        <div className="admin-topbar-content">
          <div className="admin-brand">
            <div className="admin-brand-icon">
              <ShieldCheck size={26} color="#ffffff" />
            </div>
            <div className="admin-brand-text">
              <span className="admin-title">ICA ADMIN DASHBOARD</span>
              <span className="admin-subtitle">
                Logged in as <strong>{currentAdminUser}</strong>
              </span>
            </div>
          </div>

          <div className="admin-topbar-actions">
            {/* Tab Switchers */}
            <div className="admin-nav-tabs">
              <button
                type="button"
                className={`admin-nav-tab-btn ${activeTab === "visas" ? "active" : ""}`}
                onClick={() => setActiveTab("visas")}
              >
                <FileText size={16} />
                <span>Client Visas ({totalCount})</span>
              </button>
              <button
                type="button"
                className={`admin-nav-tab-btn ${activeTab === "admins" ? "active" : ""}`}
                onClick={() => setActiveTab("admins")}
              >
                <UserCheck size={16} />
                <span>Manage Admins ({admins.length})</span>
              </button>
            </div>

            <div className="admin-topbar-action-buttons">
              <button
                type="button"
                className="admin-btn-secondary"
                onClick={onNavigateToCheckStatus}
                title="Open Public Status Check"
              >
                <Search size={16} />
                <span>Public Check</span>
              </button>

              {activeTab === "visas" ? (
                <button
                  type="button"
                  className="admin-btn-primary"
                  onClick={handleOpenAddModal}
                >
                  <PlusCircle size={18} />
                  <span>+ Add Visa</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="admin-btn-primary"
                  onClick={handleOpenAddAdminModal}
                >
                  <UserPlus size={18} />
                  <span>+ Add Admin</span>
                </button>
              )}

              <button
                type="button"
                className="admin-btn-logout"
                onClick={handleAdminLogout}
                title="Sign Out"
              >
                <LogOut size={15} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Toast Notification */}
      {toastMessage && (
        <div className={`admin-toast-banner ${toastMessage.type}`}>
          <CheckCircle2 size={18} />
          <span>{toastMessage.message}</span>
        </div>
      )}

      <main className="admin-main">
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            TAB 1: CLIENT VISA DOCUMENTS MANAGEMENT
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {activeTab === "visas" && (
          <>
            {/* KPI / Metric Cards */}
            <section className="admin-stats-grid">
              <div className="admin-stat-card total">
                <div className="admin-stat-icon-wrapper blue">
                  <Users size={24} />
                </div>
                <div className="admin-stat-info">
                  <span className="admin-stat-label">
                    Total Registered Clients
                  </span>
                  <h2 className="admin-stat-value">{totalCount}</h2>
                  <span className="admin-stat-subtext">
                    Active database records
                  </span>
                </div>
              </div>

              <div className="admin-stat-card approved">
                <div className="admin-stat-icon-wrapper green">
                  <FileCheck2 size={24} />
                </div>
                <div className="admin-stat-info">
                  <span className="admin-stat-label">Approved Visas</span>
                  <h2 className="admin-stat-value">{approvedCount}</h2>
                  <span className="admin-stat-subtext">
                    Verified & Active clearance
                  </span>
                </div>
              </div>

              <div className="admin-stat-card processing">
                <div className="admin-stat-icon-wrapper amber">
                  <Clock size={24} />
                </div>
                <div className="admin-stat-info">
                  <span className="admin-stat-label">Under Assessment</span>
                  <h2 className="admin-stat-value">{processingCount}</h2>
                  <span className="admin-stat-subtext">
                    In-process applications
                  </span>
                </div>
              </div>

              <div className="admin-stat-card appointments">
                <div className="admin-stat-icon-wrapper purple">
                  <Calendar size={24} />
                </div>
                <div className="admin-stat-info">
                  <span className="admin-stat-label">
                    Confirmed Appointments
                  </span>
                  <h2 className="admin-stat-value">{confirmedAppointments}</h2>
                  <span className="admin-stat-subtext">
                    Scheduled at ICA Building
                  </span>
                </div>
              </div>
            </section>

            {/* Table Controls & Search Bar */}
            <section className="admin-table-container">
              <div className="admin-table-toolbar">
                <div className="admin-search-wrap">
                  <Search size={18} className="admin-search-icon" />
                  <input
                    type="text"
                    placeholder="Search by Client Name, Visa Ref, Passport No, Country..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="admin-search-input"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="admin-clear-search-btn"
                      onClick={() => setSearchQuery("")}
                    >
                      ✕
                    </button>
                  )}
                </div>

                <div className="admin-filter-tabs">
                  <button
                    type="button"
                    className={`admin-filter-tab ${statusFilter === "ALL" ? "active" : ""}`}
                    onClick={() => setStatusFilter("ALL")}
                  >
                    All ({totalCount})
                  </button>
                  <button
                    type="button"
                    className={`admin-filter-tab ${statusFilter === "APPROVED" ? "active" : ""}`}
                    onClick={() => setStatusFilter("APPROVED")}
                  >
                    Approved ({approvedCount})
                  </button>
                  <button
                    type="button"
                    className={`admin-filter-tab ${statusFilter === "PROCESSING" ? "active" : ""}`}
                    onClick={() => setStatusFilter("PROCESSING")}
                  >
                    Processing ({processingCount})
                  </button>
                </div>

                <div className="admin-extra-tools">
                  <button
                    type="button"
                    className="admin-tool-btn"
                    onClick={handleExportData}
                    title="Export Records to JSON"
                  >
                    <Download size={15} />
                    <span>Export</span>
                  </button>
                  {records.length > 0 && (
                    <button
                      type="button"
                      className="admin-tool-btn danger"
                      onClick={handleClearAllRecords}
                      title="Clear All Client Records"
                    >
                      <Trash2 size={15} />
                      <span>Clear All</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Records Table */}
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th className="th-client">Client / Applicant</th>
                      <th className="th-visaref">Visa Ref No</th>
                      <th className="th-passport">Passport No</th>
                      <th className="th-country">Country</th>
                      <th className="th-status">Visa Status</th>
                      <th className="th-actions">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRecords.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="admin-empty-state">
                          <AlertCircle size={32} color="#94a3b8" />
                          <p>No matching client visa records found.</p>
                          <button
                            type="button"
                            className="admin-btn-primary"
                            onClick={handleOpenAddModal}
                          >
                            Add First Record
                          </button>
                        </td>
                      </tr>
                    ) : (
                      filteredRecords.map((rec) => {
                        const statusVal =
                          rec.visaStatus || rec.status || "APPROVED";
                        const isAppr = statusVal.toUpperCase() === "APPROVED";
                        const isProc =
                          statusVal.toUpperCase().includes("PROCESS") ||
                          statusVal.toUpperCase().includes("PEND");

                        return (
                          <tr key={rec.id || rec._id}>
                            <td className="td-client">
                              <div className="admin-client-name-cell">
                                <span className="client-full-name">
                                  {rec.applicantName ||
                                    rec.fullName ||
                                    "Unnamed Client"}
                                </span>
                                <span className="client-app-date">
                                  App Date:{" "}
                                  {rec.applicationDate ||
                                    rec.issueDate ||
                                    "N/A"}
                                </span>
                              </div>
                            </td>
                            <td className="td-visaref">
                              <div className="admin-code-cell">
                                <span className="admin-badge visa-badge">
                                  {rec.visaRef || rec.visaGrantNumber || "N/A"}
                                </span>
                              </div>
                            </td>
                            <td className="td-passport">
                              <div className="admin-code-cell">
                                <span className="admin-badge td-badge">
                                  {rec.tdNum || rec.documentNumber || "N/A"}
                                </span>
                              </div>
                            </td>
                            <td className="td-country">
                              <div className="admin-pass-type-cell">
                                <span className="client-country">
                                  {rec.country || rec.nationality || "N/A"}
                                </span>
                              </div>
                            </td>
                            <td className="td-status">
                              <span
                                className={`admin-status-pill ${isAppr
                                  ? "status-approved"
                                  : isProc
                                    ? "status-processing"
                                    : "status-rejected"
                                  }`}
                              >
                                {statusVal}
                              </span>
                            </td>
                            <td className="td-actions">
                              <div className="admin-actions-cell">
                                <button
                                  type="button"
                                  className="admin-action-btn view"
                                  title="View Details Dossier"
                                  aria-label="View Details"
                                  onClick={() => setViewingRecord(rec)}
                                >
                                  <Eye size={15} />
                                </button>
                                <button
                                  type="button"
                                  className="admin-action-btn edit"
                                  title="Edit Visa Record"
                                  aria-label="Edit Record"
                                  onClick={() => handleOpenEditModal(rec)}
                                >
                                  <Edit3 size={15} />
                                </button>
                                <button
                                  type="button"
                                  className="admin-action-btn delete"
                                  title="Delete Record"
                                  aria-label="Delete Record"
                                  onClick={() =>
                                    handleDeleteRecord(
                                      rec._id || rec.id,
                                      rec.visaRef || rec.visaGrantNumber,
                                    )
                                  }
                                >
                                  <Trash2 size={15} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            TAB 2: ADMINISTRATORS MANAGEMENT
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {activeTab === "admins" && (
          <section className="admin-table-container">
            <div className="admin-section-hero">
              <div className="admin-hero-info">
                <h2>Administrator Accounts & Access Control</h2>
                <p>
                  Manage administrative officers and grant system access
                  privileges to authorized immigration personnel.
                </p>
              </div>
              <button
                type="button"
                className="admin-btn-primary large"
                onClick={handleOpenAddAdminModal}
              >
                <UserPlus size={18} />
                <span>+ Create New Administrator</span>
              </button>
            </div>

            <div className="admin-table-wrapper">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th className="th-admin-name">Administrator Name</th>
                    <th className="th-admin-user">Username</th>
                    <th className="th-admin-email">Official Email</th>
                    <th className="th-admin-role">Access Role</th>
                    <th className="th-admin-date">Date Added</th>
                    <th className="th-admin-status">Status</th>
                    <th className="th-actions">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="admin-empty-state">
                        <Users size={32} color="#94a3b8" />
                        <p>No additional administrators registered yet.</p>
                        <button
                          type="button"
                          className="admin-btn-primary"
                          onClick={handleOpenAddAdminModal}
                        >
                          + Create First Administrator
                        </button>
                      </td>
                    </tr>
                  ) : (
                    admins.map((adm) => {
                      const isSuper = (adm.role || "").includes("SUPER");

                      return (
                        <tr key={adm.id}>
                          <td className="td-admin-name">
                            <div className="admin-client-name-cell">
                              <span className="client-full-name">
                                {adm.name}
                              </span>
                            </div>
                          </td>
                          <td className="td-admin-user">
                            <code className="admin-username-tag">
                              @{adm.username}
                            </code>
                          </td>
                          <td className="td-admin-email">
                            <span className="admin-email-text">
                              {adm.email || `${adm.username}@ica.gov.sg`}
                            </span>
                          </td>
                          <td className="td-admin-role">
                            <span
                              className={`admin-role-badge ${isSuper ? "super" : "officer"}`}
                            >
                              <Key size={13} />
                              <span>
                                {adm.role === "SUPER_ADMIN"
                                  ? "Super Administrator"
                                  : "Visa Officer Admin"}
                              </span>
                            </span>
                          </td>
                          <td className="td-admin-date">
                            <span className="apt-date">
                              {adm.createdAt || "Active"}
                            </span>
                          </td>
                          <td className="td-admin-status">
                            <span className="admin-status-pill status-approved">
                              {adm.status || "ACTIVE"}
                            </span>
                          </td>
                          <td className="td-actions">
                            <div className="admin-actions-cell">
                              <button
                                type="button"
                                className="admin-action-btn delete"
                                title="Remove Administrator"
                                aria-label="Remove Administrator"
                                onClick={() =>
                                  handleDeleteAdmin(adm.id, adm.username)
                                }
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MODAL 1: ADD / EDIT VISA CLIENT RECORD
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {isModalOpen && (
        <div className="admin-modal-overlay" onClick={handleCloseModal}>
          <div
            className="admin-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-modal-header">
              <div className="admin-modal-title-wrap">
                <FileCheck2 size={22} color="#0052cc" />
                <h3>
                  {editingRecord
                    ? "Edit Client Visa Record"
                    : "Add New Client Visa Document"}
                </h3>
              </div>
              <button
                type="button"
                className="admin-modal-close-btn"
                onClick={handleCloseModal}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="admin-modal-form">
              {formError && (
                <div className="admin-form-alert error">
                  <AlertCircle size={16} />
                  <span>{formError}</span>
                </div>
              )}

              <div className="admin-form-grid">
                {/* Visa Reference Number */}
                <div className="admin-form-field">
                  <label>Visa Reference </label>
                  <input
                    type="text"
                    placeholder="(e.g. V-2026-XXXXXX)"
                    value={formData.visaRef || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, visaRef: e.target.value })
                    }
                  />
                </div>

                {/* Travel Document / Passport No */}
                <div className="admin-form-field">
                  <label>Passport Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter passport number"
                    value={formData.tdNum || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, tdNum: e.target.value })
                    }
                  />
                  <small style={{ fontSize: "11px", color: "#64748b" }}>
                    Required for visa verification
                  </small>
                </div>

                {/* Applicant Name */}
                <div className="admin-form-field">
                  <label>Client / Applicant Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter applicant full name"
                    value={formData.applicantName || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        applicantName: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Date of Birth with Calendar Picker */}
                <div className="admin-form-field">
                  <label>Date of Birth</label>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="date"
                      title="Select date of birth from calendar"
                      style={{
                        width: "44px",
                        padding: "8px 4px",
                        cursor: "pointer",
                        flexShrink: 0,
                      }}
                      onChange={(e) => {
                        if (e.target.value) {
                          const parts = e.target.value.split("-");
                          if (parts.length === 3) {
                            const months = [
                              "Jan",
                              "Feb",
                              "Mar",
                              "Apr",
                              "May",
                              "Jun",
                              "Jul",
                              "Aug",
                              "Sep",
                              "Oct",
                              "Nov",
                              "Dec",
                            ];
                            const day = parts[2];
                            const month = months[parseInt(parts[1], 10) - 1];
                            const year = parts[0];
                            setFormData({
                              ...formData,
                              dob: `${day} ${month} ${year}`,
                            });
                          }
                        }
                      }}
                    />
                    <input
                      type="text"
                      placeholder="DD Mon YYYY (e.g. 15 Aug 1995)"
                      value={formData.dob || ""}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dob: e.target.value,
                        })
                      }
                      style={{
                        flex: 1,
                      }}
                    />
                  </div>
                </div>

                {/* Country Input */}
                <div className="admin-form-field">
                  <label>Country *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter country"
                    value={formData.country || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        country: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Visa Class/Subclass */}

                {/* Visa Type */}
                <div className="admin-form-field">
                  <label>Visa Type</label>
                  <input
                    type="text"
                    placeholder="Enter visa type (e.g. Visitor, Work)"
                    value={formData.visaType || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, visaType: e.target.value })
                    }
                  />
                </div>








                {/* Visa Status */}
                <div className="admin-form-field">
                  <label>Visa Status</label>
                  <select
                    value={formData.visaStatus}
                    onChange={(e) =>
                      setFormData({ ...formData, visaStatus: e.target.value })
                    }
                  >
                    <option value="APPROVED">APPROVED (Verified Entry)</option>
                    <option value="IN PROCESSING">
                      IN PROCESSING (Assessment Pending)
                    </option>
                    <option value="REJECTED">REJECTED (Unsuccessful)</option>
                  </select>
                </div>

                {/* Document Upload */}
                <div className="admin-form-field span-2">
                  <label>Upload Visa Document (PDF/Image) *</label>
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setFormData({
                          ...formData,
                          document: e.target.files[0],
                          documentName: e.target.files[0].name,
                        });
                      }
                    }}
                  />
                  {(formData.documentName || (editingRecord && (editingRecord.documentName || editingRecord.document))) && (
                    <div style={{ fontSize: "12px", color: "#16a34a", marginTop: "4px" }}>
                      ✓ Attached: {formData.documentName || editingRecord?.documentName || "Document Attached"}
                    </div>
                  )}
                  <small style={{ fontSize: "11px", color: "#dc2626", display: "block", marginTop: "4px" }}>
                    * Required: Without adding a document and passport number, the visa cannot be verified.
                  </small>
                </div>
              </div>

              <div className="admin-modal-actions">
                <button
                  type="button"
                  className="admin-modal-btn cancel"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button type="submit" className="admin-modal-btn submit">
                  {editingRecord
                    ? "Save Record Changes"
                    : "Register Visa Document"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MODAL 1B: ADD NEW ADMINISTRATOR MODAL
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {isAdminModalOpen && (
        <div className="admin-modal-overlay" onClick={handleCloseAdminModal}>
          <div
            className="admin-modal-card admin-account-modal"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "540px" }}
          >
            <div className="admin-modal-header">
              <div className="admin-modal-title-wrap">
                <UserPlus size={22} color="#0052cc" />
                <h3>Create New Administrator Account</h3>
              </div>
              <button
                type="button"
                className="admin-modal-close-btn"
                onClick={handleCloseAdminModal}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddAdminSubmit} className="admin-modal-form">
              {adminFormError && (
                <div className="admin-form-alert error">
                  <AlertCircle size={16} />
                  <span>{adminFormError}</span>
                </div>
              )}

              <div
                className="admin-form-grid"
                style={{ gridTemplateColumns: "1fr" }}
              >
                {/* Username */}
                <div className="admin-form-field">
                  <label>
                    Username / Officer ID <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. officer_sarah or ica_tan"
                    value={adminFormData.username}
                    onChange={(e) =>
                      setAdminFormData({
                        ...adminFormData,
                        username: e.target.value.replace(/\s+/g, "_"),
                      })
                    }
                  />
                  <small style={{ color: "#64748b", marginTop: "2px", fontSize: "11.5px" }}>
                    Officer personnel record ID. Dashboard access is strictly reserved for the real administrator.
                  </small>
                </div>

                {/* Officer Name */}
                <div className="admin-form-field">
                  <label>
                    Officer Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Inspector Sarah Lim"
                    value={adminFormData.name}
                    onChange={(e) =>
                      setAdminFormData({
                        ...adminFormData,
                        name: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Email */}
                <div className="admin-form-field">
                  <label>Official Email</label>
                  <input
                    type="email"
                    placeholder="e.g. sarah_lim@ica.gov.sg"
                    value={adminFormData.email}
                    onChange={(e) =>
                      setAdminFormData({
                        ...adminFormData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Role */}
                <div className="admin-form-field">
                  <label>Access Privilege Role</label>
                  <select
                    value={adminFormData.role}
                    onChange={(e) =>
                      setAdminFormData({
                        ...adminFormData,
                        role: e.target.value,
                      })
                    }
                  >
                    <option value="VISA_OFFICER">
                      Visa Officer Admin (Manage Visa Records)
                    </option>
                    <option value="SUPER_ADMIN">
                      Super Administrator (Full System & User Control)
                    </option>
                  </select>
                </div>

                {/* Password */}
                <div className="admin-form-field">
                  <label>
                    Login Password <span className="req">*</span>
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="Minimum 4 characters"
                    value={adminFormData.password}
                    onChange={(e) =>
                      setAdminFormData({
                        ...adminFormData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="admin-modal-actions">
                <button
                  type="button"
                  className="admin-modal-btn cancel"
                  onClick={handleCloseAdminModal}
                >
                  Cancel
                </button>
                <button type="submit" className="admin-modal-btn submit">
                  Create Administrator
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MODAL 2: VIEW FULL CLIENT DOSSIER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {viewingRecord && (
        <div
          className="admin-modal-overlay"
          onClick={() => setViewingRecord(null)}
        >
          <div
            className="admin-modal-card view-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="admin-modal-header">
              <div className="admin-modal-title-wrap">
                <FileText size={22} color="#0052cc" />
                <h3>
                  Client Application Dossier: {viewingRecord.applicantName}
                </h3>
              </div>
              <button
                type="button"
                className="admin-modal-close-btn"
                onClick={() => setViewingRecord(null)}
              >
                ✕
              </button>
            </div>

            <div className="admin-view-body">
              <div className="view-grid">
                <div className="view-item">
                  <span className="view-label">Visa Reference / Grant No:</span>
                  <span className="view-value bold code">
                    {viewingRecord.visaRef || viewingRecord.visaGrantNumber || "N/A"}
                  </span>
                </div>
                <div className="view-item">
                  <span className="view-label">
                    Travel Document / Passport:
                  </span>
                  <span className="view-value bold code">
                    {viewingRecord.tdNum || viewingRecord.documentNumber}
                  </span>
                </div>
                <div className="view-item">
                  <span className="view-label">Applicant Name:</span>
                  <span className="view-value bold">
                    {viewingRecord.applicantName || viewingRecord.fullName}
                  </span>
                </div>
                {viewingRecord.dob && (
                  <div className="view-item">
                    <span className="view-label">Date of Birth:</span>
                    <span className="view-value bold">{viewingRecord.dob}</span>
                  </div>
                )}
                <div className="view-item">
                  <span className="view-label">Country:</span>
                  <span className="view-value">
                    {viewingRecord.country || viewingRecord.nationality || "N/A"}
                  </span>
                </div>
                <div className="view-item">
                  <span className="view-label">Visa Document:</span>
                  <span className="view-value">
                    {viewingRecord.documentName ||
                      (viewingRecord.document
                        ? "Uploaded Document"
                        : viewingRecord.documents && viewingRecord.documents.length > 0
                          ? "Attached Document"
                          : "No Document Attached")}
                  </span>
                </div>
              </div>
              <div className="view-item">
                <span className="view-label">Visa Type:</span>
                <span className="view-value">{viewingRecord.visaType || "N/A"}</span>
              </div>

              <div className="view-item">
                <span className="view-label">Must Not Arrive After:</span>
                <span className="view-value">
                  {viewingRecord.mustNotArriveAfter}
                </span>
              </div>
              <div className="view-item">
                <span className="view-label">Period of Stay:</span>
                <span className="view-value">
                  {viewingRecord.periodOfStay}
                </span>
              </div>
              <div className="view-item">
                <span className="view-label">Visa Status:</span>
                <span
                  className="view-value bold"
                  style={{
                    color:
                      viewingRecord.visaStatus === "APPROVED"
                        ? "#16a34a"
                        : "#ca8a04",
                  }}
                >
                  {viewingRecord.visaStatus}
                </span>
              </div>
            </div>
          </div>

          <div className="admin-modal-actions">
            <button
              type="button"
              className="admin-modal-btn cancel"
              onClick={() => setViewingRecord(null)}
            >
              Close
            </button>
            <button
              type="button"
              className="admin-modal-btn submit"
              onClick={() => {
                const rec = viewingRecord;
                setViewingRecord(null);
                handleOpenEditModal(rec);
              }}
            >
              Edit This Record
            </button>
          </div>
        </div>

      )
      }

      <SiteFooter
        onNavigateToCheckpoints={onNavigateToCheckpoints}
        onNavigateToContact={onNavigateToContact}
        onNavigateToFeedback={onNavigateToFeedback}
        onNavigateToFaqs={onNavigateToFaqs}
        onNavigateToReach={onNavigateToReach}
      />
    </div >

  );
}
