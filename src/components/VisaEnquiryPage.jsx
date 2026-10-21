import React, { useState } from "react";
import GovMasthead from "./GovMasthead";
import SiteFooter from "./SiteFooter";
import NavigateAwayModal from "./NavigateAwayModal";
import { searchVisaStatus } from "../services/immigrationApi";
import "./VisaEnquiryPage.css";

export default function VisaEnquiryPage({
  onNavigate,
  onNavigateHome,
  onNavigateToCheckpoints,
  onNavigateToManageVisa,
  onNavigateToContact,
  onNavigateToFeedback,
  onNavigateToFaqs,
  onNavigateToReach,
  ...props
}) {
  const [currentStep, setCurrentStep] = useState(1); // 1 = Application Details, 2 = Enquiry Results
  const [searchQuery, setSearchQuery] = useState("");
  const [inputError, setInputError] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const openLogoutDialog = () => setShowLogoutModal(true);
  const closeLogoutDialog = () => setShowLogoutModal(false);
  const setShowExitModal = setShowLogoutModal;

  // Errors
  const [captchaError, setCaptchaError] = useState("");

  // Result data for Step 2
  const [enquiryResult, setEnquiryResult] = useState(null);

  // Demo CAPTCHA click
  const handleCaptchaClick = () => {
    if (captchaVerified || captchaLoading) return;
    setCaptchaLoading(true);
    setCaptchaError("");
    setTimeout(() => {
      setCaptchaLoading(false);
      setCaptchaVerified(true);
    }, 750);
  };

  // Clear fields
  const handleClear = () => {
    setSearchQuery("");
    setInputError("");
    setCaptchaVerified(false);
    setCaptchaError("");
    setApiError("");
  };

  // Submit / Next
  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    const cleanQuery = searchQuery.trim();

    if (!cleanQuery) {
      setInputError("Please enter your Passport Number.");
      return;
    } else {
      setInputError("");
    }

    if (!captchaVerified) {
      setCaptchaError("Please verify that you are not a robot.");
      return;
    } else {
      setCaptchaError("");
    }

    setIsSubmitting(true);
    setApiError("");

    try {
      const resultData = await searchVisaStatus(cleanQuery, "passport");

      const cleanTd = (
        resultData.tdNum ||
        resultData.documentNumber ||
        resultData.passportNumber ||
        ""
      ).trim();
      const hasDocument = Boolean(
        resultData.document ||
        (Array.isArray(resultData.documents) && resultData.documents.length > 0) ||
        resultData.documentName ||
        resultData.documentUrl ||
        resultData.fileUrl
      );

      if (!cleanTd || !hasDocument) {
        setApiError(
          "Visa cannot be verified: Without both an added visa document and valid passport number, this visa cannot be verified.",
        );
        return;
      }

      setEnquiryResult(resultData);
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setApiError(
        err.message ||
        "Failed to retrieve status from Immigration API. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetEnquiry = () => {
    handleClear();
    setEnquiryResult(null);
    setCurrentStep(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="visa-page-wrapper">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          UPPER HEADER SECTION (Official Singapore Government & MyICA Header)
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div id="header">
        <GovMasthead />
        <div className="top-navigation-wrapper">
          <div className="sg-government">
            <nav className="navbar bg-white noborder ps-0 pt-0 pe-0 pb-0">
              <div className="top-navigation-logo-wrapper">
                <a
                  href="#home"
                  title="ICA"
                  aria-label="ICA"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigate) onNavigate("home");
                    else if (onNavigateToCheckpoints) onNavigateToCheckpoints();
                    window.location.hash = "#home";
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div className="sg-ica-logo">
                    <img
                      src="/assets/logo/ica_logo_new.svg"
                      alt="ICA"
                      className="sg-ica-logo-img"
                    />
                  </div>
                </a>
              </div>
            </nav>
          </div>

          <div className="sg-myica">
            <nav className="navbar navbar-dark navbar-expand-lg scrolling-navbar noborder pt-0 pe-0 pb-0 sg-myica-nav">
              <div className="navbar-brand justify-content-start me-1 mt-1">
                <div
                  className="row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "nowrap",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      flexWrap: "wrap",
                      minWidth: 0,
                    }}
                  >
                    <div className="sg-myica-icon-wrapper">
                      <a
                        href="#home"
                        title="ICA"
                        onClick={(e) => {
                          e.preventDefault();
                          if (onNavigateHome) onNavigateHome();
                          else if (onNavigate) onNavigate("home");
                          else if (onNavigateToCheckpoints) onNavigateToCheckpoints();
                        }}
                      >
                        <img
                          src="/ipsave/javax.faces.resource/images/new/home-icon.png.xhtml"
                          alt="Back to ICA website icon"
                          className="sg-myica-home-img"
                          onError={(e) => {
                            e.currentTarget.src =
                              "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='34' height='34' viewBox='0 0 24 24' fill='%23ffffff'><path d='M12 3L8 6.6V4H5v5.3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z'/></svg>";
                          }}
                        />
                        <span>ICA Website</span>
                      </a>
                    </div>
                    {onNavigateToManageVisa && (
                      <div className="sg-myica-icon-wrapper">
                        <a
                          href="#admin-dashboard"
                          title="Open ICA Admin Dashboard"
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigateToManageVisa();
                          }}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "5px",
                            color: "#ffffff",
                            textDecoration: "none",
                            fontSize: "12.5px",
                            fontWeight: "600",
                            padding: "4px 10px",
                            borderRadius: "5px",
                            backgroundColor: "#0052cc",
                            border: "1px solid #3b82f6",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                          </svg>
                          <span>Admin Dashboard</span>
                        </a>
                      </div>
                    )}
                  </div>
                  <div
                    className="sg-myica-icon-wrapper"
                    style={{ flexShrink: 0 }}
                  >
                    <form
                      id="sessionLogoutHeaderForm"
                      name="sessionLogoutHeaderForm"
                      method="post"
                      action="/ipsave/index.xhtml"
                      className="waves-effect waves-light"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        type="hidden"
                        name="sessionLogoutHeaderForm"
                        value="sessionLogoutHeaderForm"
                      />
                      <a
                        id="sessionLogoutHeaderForm:logoutBtn"
                        href="#logout"
                        onClick={(e) => {
                          e.preventDefault();
                          openLogoutDialog();
                        }}
                      >
                        <div className="sg-myica-icon-wrapper">
                          <svg
                            className="svg-inline--fa fa-sign-out-alt fa-w-16"
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="sign-out-alt"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                            />
                          </svg>
                          Logout
                        </div>
                      </a>
                      <input
                        type="hidden"
                        name="javax.faces.ViewState"
                        id="j_id1:javax.faces.ViewState:0"
                        value="7919887597845839842:8831548535020080499"
                        autoComplete="off"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </nav>
          </div>

          {/* Navigate Away Confirmation Modal */}
          <NavigateAwayModal
            isOpen={showLogoutModal}
            onStay={closeLogoutDialog}
            onLeave={() => {
              closeLogoutDialog();
              if (onNavigateToCheckpoints) onNavigateToCheckpoints();
            }}
          />
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          5. MAIN CONTENT
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <main className="visa-main-content">
        {/* 6. PAGE TITLE */}
        <h1 className="visa-page-title">Enquire for Application of Visa</h1>

        {/* 7. PROGRESS / STEP SECTION */}
        <div className="visa-stepper-wrap">
          {/* Labels Row */}
          <div className="visa-stepper-titles-row">
            <div
              className={`visa-stepper-title ${currentStep === 1
                ? "active"
                : currentStep > 1
                  ? "visited"
                  : "inactive"
                }`}
            >
              Application Details
            </div>
            <div
              className={`visa-stepper-title ${currentStep === 2 ? "active" : "inactive"}`}
            >
              Enquiry Results
            </div>
          </div>

          {/* Circles and Horizontal Dotted Line Row */}
          <div className="visa-stepper-circles-row">
            {/* Horizontal dotted connector line running between circles */}
            <div className="visa-stepper-dotted-line" aria-hidden="true" />

            {/* Left Circle: Step 1 */}
            <div className="visa-stepper-circle-col">
              <div
                className={`visa-stepper-circle ${currentStep === 1
                  ? "active"
                  : currentStep > 1
                    ? "visited"
                    : "inactive"
                  }`}
              >
                {/* Person avatar icon */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
            </div>

            {/* Right Circle: Step 2 */}
            <div className="visa-stepper-circle-col">
              <div
                className={`visa-stepper-circle ${currentStep === 2 ? "active" : "inactive"}`}
              >
                {/* Person avatar icon */}
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 1: Application Details Form */}
        {currentStep === 1 && (
          <form onSubmit={handleSubmit} noValidate>
            {/* 8. PARTICULARS OF APPLICANT */}
            <h2 className="visa-section-heading">Particulars of Applicant</h2>

            {/* Single Input Field for Reference No or Visa Document No */}
            <div className="visa-single-input-wrapper">
              <label htmlFor="searchQuery" className="visa-field-label">
                Enter Passport Number
              </label>
              <input
                id="searchQuery"
                name="searchQuery"
                type="text"
                autoComplete="off"
                maxLength={30}
                className={`visa-field-underline ${inputError ? "is-invalid" : ""}`}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (inputError) setInputError("");
                }}
              />
              {inputError && (
                <span
                  className="visa-field-error-msg"
                  style={{ display: "block", marginTop: "8px" }}
                >
                  {inputError}
                </span>
              )}
            </div>

            {/* 10. CAPTCHA AREA */}
            <div className="visa-captcha-section">
              <div
                className="visa-recaptcha-box"
                onClick={handleCaptchaClick}
                role="checkbox"
                aria-checked={captchaVerified}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === " " || e.key === "Enter") handleCaptchaClick();
                }}
              >
                <div className="visa-recaptcha-left">
                  <div
                    className={`visa-recaptcha-checkbox ${captchaVerified ? "checked" : ""}`}
                  >
                    {captchaLoading && (
                      <svg
                        className="visa-recaptcha-spinner-svg"
                        viewBox="0 0 28 28"
                        aria-hidden="true"
                      >
                        <circle
                          className="visa-recaptcha-spinner-circle"
                          cx="14"
                          cy="14"
                          r="10"
                          fill="none"
                          strokeWidth="2.8"
                        />
                      </svg>
                    )}
                    {captchaVerified && (
                      <svg
                        className="visa-recaptcha-checkmark-svg"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          className="visa-recaptcha-checkmark-path"
                          d="M 4.5 12 L 9.5 17 L 19.5 7"
                          fill="none"
                          stroke="#0f9d58"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="visa-recaptcha-label">I'm not a robot</span>
                </div>

                <div className="visa-recaptcha-right">
                  {/* Google reCAPTCHA authentic logo */}
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 48 48"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M24 8c-7.3 0-13.4 5-15.2 11.8L13 21c1.2-4.6 5.4-8 10.4-8 5 0 9.2 3.4 10.4 8l4.2-1.2C36.2 13 30.7 8 24 8z"
                      fill="#1c76d5"
                    />
                    <path
                      d="M24 40c7.3 0 13.4-5 15.2-11.8L35 27c-1.2 4.6-5.4 8-10.4 8-5 0-9.2-3.4-10.4-8l-4.2 1.2C11.8 35 17.3 40 24 40z"
                      fill="#757575"
                    />
                    <polygon points="12,14 4,21 15,24" fill="#1c76d5" />
                    <polygon points="36,34 44,27 33,24" fill="#757575" />
                  </svg>
                  <span className="visa-recaptcha-brand">reCAPTCHA</span>
                  <span className="visa-recaptcha-links">Privacy - Terms</span>
                </div>
              </div>

              {captchaError && (
                <span className="visa-field-error-msg">{captchaError}</span>
              )}
            </div>

            {apiError && (
              <div
                style={{
                  margin: "18px 0",
                  padding: "14px 18px",
                  backgroundColor: "#fff5f5",
                  color: "#b91c1c",
                  border: "1px solid #fecaca",
                  borderRadius: "8px",
                  fontSize: "14px",
                  lineHeight: "1.6",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                  }}
                >
                  <svg
                    style={{ flexShrink: 0, marginTop: "2px" }}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <div>
                    <div style={{ fontWeight: "700", marginBottom: "4px" }}>
                      Verification Notice
                    </div>
                    <div>{apiError}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Actions: Blue Pill Buttons matching Screenshot 2 layout (Left, Center, Right) */}
            <div className="visa-buttons-bar">
              <div className="visa-button-col-left">
                <button
                  type="button"
                  className="visa-pill-btn"
                  onClick={() => setShowExitModal(true)}
                  disabled={isSubmitting}
                >
                  Back to ICA Home
                </button>
              </div>

              <div className="visa-button-col-center">
                <button
                  type="button"
                  className="visa-pill-btn"
                  onClick={handleClear}
                  disabled={isSubmitting}
                >
                  Clear
                </button>
              </div>

              <div className="visa-button-col-right">
                <button
                  type="submit"
                  className="visa-pill-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Verifying..." : "Next"}
                </button>
              </div>
            </div>

            {/* Horizontal Divider Line */}
            <hr className="visa-advisory-divider" aria-hidden="true" />

            {/* Advisory / Disclaimer text */}
            <div className="visa-advisory-section">
              <p className="visa-advisory-line">
                To manage client visa documents, passports, or check records,
                visit the{" "}
                <a
                  href="#admin-dashboard"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToManageVisa) onNavigateToManageVisa();
                  }}
                  className="visa-advisory-link"
                  style={{
                    fontWeight: "700",
                    color: "#0052cc",
                    textDecoration: "underline",
                  }}
                >
                  ICA Admin Dashboard Portal
                </a>
                .
              </p>
              <p className="visa-advisory-line">
                If you encounter any problems with this eService, please{" "}
                <a
                  href="#feedback"
                  className="visa-advisory-link"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToFeedback) onNavigateToFeedback();
                    else if (onNavigateToContact) onNavigateToContact();
                    else if (onNavigate) onNavigate("feedback");
                  }}
                >
                  contact us
                </a>
                .
              </p>
              <p className="visa-advisory-line">
                Click on the buttons or links once only. Do not use the Back or
                Forward button on your browser as this may end your transaction.
              </p>
            </div>
          </form>
        )}

        {/* STEP 2: Enquiry Results & Confirmed Appointment Details */}
        {currentStep === 2 && enquiryResult && (
          <div className="visa-result-section">
            {/* Dynamic Status Banner */}
            {(() => {
              const isApproved =
                (enquiryResult.visaStatus || "").toUpperCase() === "APPROVED";
              const isProcessing =
                (enquiryResult.visaStatus || "")
                  .toUpperCase()
                  .includes("PROCESS") ||
                (enquiryResult.visaStatus || "")
                  .toUpperCase()
                  .includes("PENDING");

              if (isApproved) {
                return (
                  <div
                    className="visa-result-banner"
                    style={{
                      background:
                        "linear-gradient(135deg, #e8f5e9 0%, #f1f8e9 100%)",
                      borderColor: "#a5d6a7",
                      borderLeftColor: "#2e7d32",
                    }}
                  >
                    <div
                      className="visa-result-check-badge"
                      style={{ backgroundColor: "#2e7d32" }}
                    >
                      ✓
                    </div>
                    <div>
                      <h3
                        className="visa-result-title"
                        style={{ color: "#1b5e20" }}
                      >
                        APPLICATION APPROVED
                      </h3>
                      <p
                        className="visa-result-subtitle"
                        style={{ color: "#388e3c" }}
                      >
                        Your visa application is approved.
                      </p>
                    </div>
                  </div>
                );
              } else if (isProcessing) {
                return (
                  <div
                    className="visa-result-banner"
                    style={{
                      background:
                        "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
                      borderColor: "#fde68a",
                      borderLeftColor: "#d97706",
                    }}
                  >
                    <div
                      className="visa-result-check-badge"
                      style={{ backgroundColor: "#d97706" }}
                    >
                      ⏳
                    </div>
                    <div>
                      <h3
                        className="visa-result-title"
                        style={{ color: "#92400e" }}
                      >
                        APPLICATION IN PROCESSING
                      </h3>
                      <p
                        className="visa-result-subtitle"
                        style={{ color: "#b45309" }}
                      >
                        Your application is currently under assessment by the
                        Immigration & Checkpoints Authority.
                      </p>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    className="visa-result-banner"
                    style={{
                      background:
                        "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)",
                      borderColor: "#fecaca",
                      borderLeftColor: "#dc2626",
                    }}
                  >
                    <div
                      className="visa-result-check-badge"
                      style={{ backgroundColor: "#dc2626" }}
                    >
                      ✕
                    </div>
                    <div>
                      <h3
                        className="visa-result-title"
                        style={{ color: "#991b1b" }}
                      >
                        STATUS: {enquiryResult.visaStatus || "UNSUCCESSFUL"}
                      </h3>
                      <p
                        className="visa-result-subtitle"
                        style={{ color: "#b91c1c" }}
                      >
                        Please contact the Immigration & Checkpoints Authority
                        for further information.
                      </p>
                    </div>
                  </div>
                );
              }
            })()}

            {/* Visa Particulars Card */}
            <div className="visa-result-card">
              <h3 className="visa-result-card-title">
                Particulars of Applicant & Visa
              </h3>
              <div className="visa-result-grid">
                {enquiryResult.visaStatus && (
                  <div className="visa-result-item">
                    <span className="visa-result-label">Visa Status</span>
                    <span className="visa-result-val">
                      <span
                        className="visa-status-pill"
                        style={{
                          backgroundColor:
                            enquiryResult.visaStatus.toUpperCase() ===
                              "APPROVED"
                              ? "#e8f5e9"
                              : "#fff7ed",
                          color:
                            enquiryResult.visaStatus.toUpperCase() ===
                              "APPROVED"
                              ? "#2e7d32"
                              : "#c2410c",
                          borderColor:
                            enquiryResult.visaStatus.toUpperCase() ===
                              "APPROVED"
                              ? "#a5d6a7"
                              : "#ffedd5",
                        }}
                      >
                        {enquiryResult.visaStatus}
                      </span>
                    </span>
                  </div>
                )}
                {enquiryResult.visaType && (
                  <div className="visa-result-item">
                    <span className="visa-result-label">Visa Type</span>
                    <span className="visa-result-val">
                      {enquiryResult.visaType}
                    </span>
                  </div>
                )}

                {enquiryResult.tdNum && (
                  <div className="visa-result-item">
                    <span className="visa-result-label">
                      Travel Document Number
                    </span>
                    <span
                      className="visa-result-val"
                      style={{ fontWeight: 700 }}
                    >
                      {enquiryResult.tdNum}
                    </span>
                  </div>
                )}
                {enquiryResult.applicantName && (
                  <div className="visa-result-item">
                    <span className="visa-result-label">Applicant Name</span>
                    <span
                      className="visa-result-val"
                      style={{ fontWeight: 600 }}
                    >
                      {enquiryResult.applicantName}
                    </span>
                  </div>
                )}
                {(enquiryResult.country) && (
                  <div className="visa-result-item">
                    <span className="visa-result-label">Country</span>
                    <span className="visa-result-val">
                      {enquiryResult.country}
                    </span>
                  </div>
                )}
                {enquiryResult.issueDate && (
                  <div className="visa-result-item">
                    <span className="visa-result-label">Issue Date</span>
                    <span className="visa-result-val">
                      {enquiryResult.issueDate}
                    </span>
                  </div>
                )}
                {enquiryResult.expiryDate && (
                  <div className="visa-result-item">
                    <span className="visa-result-label">Expiry Date</span>
                    <span className="visa-result-val">
                      {enquiryResult.expiryDate}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Step 2 Actions */}
            <div
              className="visa-buttons-bar"
              style={{ flexWrap: "wrap", gap: "10px" }}
            >
              <button
                type="button"
                className="visa-pill-btn"
                onClick={handleResetEnquiry}
              >
                Back to Enquiry
              </button>

              {enquiryResult.documents && enquiryResult.documents.length > 0 && (
                <button
                  type="button"
                  className="visa-pill-btn"
                  onClick={() => {
                    const pdfDoc = enquiryResult.documents.find(
                      (doc) => doc.url && doc.url.toLowerCase().endsWith(".pdf")
                    ) || enquiryResult.documents[0];
                    if (pdfDoc && pdfDoc.url) {
                      window.open(pdfDoc.url, "_blank", "noopener,noreferrer");
                    }
                  }}
                >
                  📄 View / Download Document
                </button>
              )}
              <button
                type="button"
                className="visa-pill-btn"
                onClick={() => {
                  if (onNavigateToCheckpoints) onNavigateToCheckpoints();
                }}
              >
                Back to ICA Home
              </button>
            </div>

            {/* Horizontal Divider Line */}
            <hr className="visa-advisory-divider" aria-hidden="true" />

            {/* Advisory / Disclaimer text */}
            <div className="visa-advisory-section">
              <p className="visa-advisory-line">
                If you encounter any problems with this eService, please{" "}
                <a
                  href="#contact-us"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToContact) {
                      onNavigateToContact();
                    } else {
                      window.location.hash = "#contact-us";
                    }
                  }}
                  className="visa-advisory-link"
                >
                  contact us
                </a>
                .
              </p>
              <p className="visa-advisory-line">
                Click on the buttons or links once only. Do not use the Back or
                Forward button on your browser as this may end your transaction.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Official Singapore Government / ICA Site Footer */}
      <SiteFooter
        onNavigate={onNavigate}
        onNavigateHome={onNavigateHome}
        onNavigateToCheckpoints={onNavigateToCheckpoints}
        onNavigateToContact={onNavigateToContact}
        onNavigateToFeedback={onNavigateToFeedback}
        onNavigateToFaqs={onNavigateToFaqs}
        onNavigateToReach={onNavigateToReach}
        {...props}
      />
    </div>
  );
}
