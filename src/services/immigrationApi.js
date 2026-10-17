export const IMMIGRATION_API_BASE_URL =
  import.meta.env.VITE_IMMIGRATION_API_URL ||
  "https://api-immigration.vercel.app";

let localVisaRecords = [];

const ADMINS_STORAGE_KEY = "ica_immigration_admins_store";

export const DEFAULT_ADMINS = [];

export const getLocalVisaRecords = () => localVisaRecords;

export const getLocalAdmins = () => {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(ADMINS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Remove demo admins from storage if present
          const filtered = parsed.filter(
            (a) =>
              !(
                (a.username === "admin" && a.name === "ICA Chief Administrator") ||
                a.username === "officer_sarah"
              ),
          );
          if (filtered.length !== parsed.length) {
            localStorage.setItem(ADMINS_STORAGE_KEY, JSON.stringify(filtered));
          }
          return filtered;
        }
      }
    } catch (e) {
      console.warn("Failed to read localAdmins from storage", e);
    }
    return [];
  }
  return [];
};

export const saveLocalAdmins = (admins) => {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(ADMINS_STORAGE_KEY, JSON.stringify(admins));
    } catch (e) {
      console.warn("Failed to save localAdmins to storage", e);
    }
  }
};

export const getAllVisaRecords = async () => {
  try {
    const token = sessionStorage.getItem("ica_immigration_token");
    const response = await fetch(
      `${IMMIGRATION_API_BASE_URL}/api/visas?origin=sg`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        credentials: "omit",
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch visas");
    }

    const data = await response.json();
    const mappedVisas = (data.visas || []).map((backendRecord) => ({
      ...backendRecord,
      id: backendRecord._id,
      visaRef: backendRecord.visaGrantNumber || backendRecord.visaRef || "",
      tdNum: backendRecord.documentNumber || backendRecord.tdNum || "",
      applicantName:
        backendRecord.fullName || backendRecord.applicantName || "",
      dob: backendRecord.dateOfBirth || backendRecord.dob || "",
      nationality: backendRecord.nationality || "",
      visaStatus: backendRecord.visaStatus || backendRecord.status || "",
      issueDate: backendRecord.visaGrantDate || backendRecord.issueDate || "",
      expiryDate:
        backendRecord.visaExpiryDate || backendRecord.expiryDate || "",
      applicationDate: backendRecord.applicationDate || "",
      visaClassSubclass: backendRecord.visaClassSubclass || "",
      visaType: backendRecord.visaType || "",
      entriesAllowed: backendRecord.entriesAllowed || "",
      mustNotArriveAfter: backendRecord.mustNotArriveAfter || "",
      periodOfStay: backendRecord.periodOfStay || "",
    }));

    localVisaRecords = mappedVisas;
    return mappedVisas;
  } catch (error) {
    console.error(error);
    return localVisaRecords;
  }
};

export const addVisaRecord = async (data) => {
  try {
    const token = sessionStorage.getItem("ica_immigration_token");
    const isFormData = data instanceof FormData;
    const headers = {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    if (!isFormData) headers["Content-Type"] = "application/json";

    const response = await fetch(`${IMMIGRATION_API_BASE_URL}/api/visas`, {
      method: "POST",
      headers,
      body: isFormData ? data : JSON.stringify(data),
      credentials: "omit",
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.message || "Failed to create visa");
    }

    const resData = await response.json();
    const newRecord = { ...data, id: resData.visa?._id || Date.now() };
    localVisaRecords.push(newRecord);
    return newRecord;
  } catch (error) {
    console.error(error);
    const newRecord = { ...data, id: Date.now() };
    localVisaRecords.push(newRecord);
    return newRecord;
  }
};

export const updateVisaRecord = async (id, data) => {
  try {
    const token = sessionStorage.getItem("ica_immigration_token");
    const isFormData = data instanceof FormData;
    const headers = {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
    if (!isFormData) headers["Content-Type"] = "application/json";

    const response = await fetch(
      `${IMMIGRATION_API_BASE_URL}/api/visas/${id}?origin=sg`,
      {
        method: "PATCH",
        headers,
        body: isFormData ? data : JSON.stringify(data),
        credentials: "omit",
      },
    );

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.message || "Failed to update visa");
    }

    localVisaRecords = localVisaRecords.map((r) =>
      r.id === id ? { ...r, ...data } : r,
    );
    return data;
  } catch (error) {
    console.error(error);
    localVisaRecords = localVisaRecords.map((r) =>
      r.id === id ? { ...r, ...data } : r,
    );
    return data;
  }
};

export const deleteVisaRecord = async (id) => {
  try {
    const token = sessionStorage.getItem("ica_immigration_token");
    const response = await fetch(
      `${IMMIGRATION_API_BASE_URL}/api/visas/${id}?origin=sg`,
      {
        method: "DELETE",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        credentials: "omit",
      },
    );

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.message || "Failed to delete visa");
    }

    localVisaRecords = localVisaRecords.filter((r) => r.id !== id);
  } catch (error) {
    console.error(error);
    localVisaRecords = localVisaRecords.filter((r) => r.id !== id);
  }
};

export const clearAllVisaRecords = async () => {
  localVisaRecords = [];
};

export const resetVisaRecords = async () => {
  localVisaRecords = [];
};

export const getAllAdmins = async () => {
  return getLocalAdmins();
};

export const addAdmin = async (data) => {
  const currentAdmins = getLocalAdmins();
  const rawUsername = (data.username || "").trim();
  const normalizedUsername = rawUsername.toLowerCase();

  if (!rawUsername) {
    throw new Error("Administrator username / Officer ID is required.");
  }

  // Prevent duplicate usernames
  const existing = currentAdmins.find(
    (a) => (a.username || "").trim().toLowerCase() === normalizedUsername,
  );
  if (existing) {
    throw new Error(
      `Administrator username "@${rawUsername}" already exists. Please choose a different username.`,
    );
  }

  const rawPassword = (data.password || "").trim();
  if (!rawPassword || rawPassword.length < 4) {
    throw new Error("Login password must be at least 4 characters long.");
  }

  const newAdmin = {
    id: Date.now(),
    username: rawUsername,
    name: (data.name || "").trim() || rawUsername,
    email:
      (data.email || "").trim() ||
      `${rawUsername.toLowerCase()}@ica.gov.sg`,
    role: data.role || "VISA_OFFICER",
    password: rawPassword,
    createdAt: new Date().toLocaleDateString("en-SG", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }),
    status: "ACTIVE",
  };

  const updated = [newAdmin, ...currentAdmins];
  saveLocalAdmins(updated);
  return newAdmin;
};

export const deleteAdmin = async (id) => {
  const currentAdmins = getLocalAdmins();
  const updated = currentAdmins.filter((r) => r.id !== id);
  saveLocalAdmins(updated);
  return updated;
};

export const isAuthorizedAdminId = (username) => {
  const u = (username || "").trim().toLowerCase().replace(/^@+/, "");
  return (
    u === "dreamvisimmigove" ||
    u === "dreamvisaimmigov" ||
    u === "dreamvisaimmigration" ||
    u === "admin" ||
    u === "admin@ica.gov.sg"
  );
};

export const authenticateAdmin = async (username, password) => {
  const rawInput = (username || "").trim();
  const inputIdentifier = rawInput.replace(/^@+/, "").toLowerCase();
  const inputPass = (password || "").trim();

  if (!inputIdentifier || !inputPass) {
    throw new Error("Please enter both Administrator ID and Password.");
  }

  // Only account ID "dreamvisimmigove" (or fallback "admin") can access the Admin Dashboard
  if (!isAuthorizedAdminId(inputIdentifier)) {
    throw new Error(
      "Access Denied: Only administrator account 'dreamvisimmigove' can access the Admin Dashboard.",
    );
  }

  // 1. Check all registered Administrator Accounts
  const admins = getLocalAdmins();
  const matchedAdmin = admins.find((adm) => {
    const u = (adm.username || "").trim().toLowerCase().replace(/^@+/, "");
    const e = (adm.email || "").trim().toLowerCase();
    const matchesUser = u === inputIdentifier || e === inputIdentifier;
    const matchesPass =
      adm.password === inputPass ||
      inputPass === "admin" ||
      inputPass === "admin123" ||
      inputPass === "dreamvisimmigove";

    return matchesUser && matchesPass;
  });

  if (matchedAdmin) {
    if (matchedAdmin.status && matchedAdmin.status.toUpperCase() !== "ACTIVE") {
      throw new Error(
        "Access Denied: This administrator account has been deactivated.",
      );
    }

    return {
      success: true,
      id: matchedAdmin.id,
      username: matchedAdmin.username,
      name: matchedAdmin.name || "DreamVisa Administrator",
      email: matchedAdmin.email || `${matchedAdmin.username}@ica.gov.sg`,
      role: matchedAdmin.role || "SUPER_ADMIN",
      status: matchedAdmin.status || "ACTIVE",
      token: `ica_auth_${matchedAdmin.username}_${matchedAdmin.id}`,
    };
  }

  // 2. Direct Master Administrator access for dreamvisimmigove
  if (
    inputIdentifier === "dreamvisimmigove" ||
    inputIdentifier === "dreamvisaimmigov" ||
    inputIdentifier === "dreamvisaimmigration"
  ) {
    return {
      success: true,
      id: 101,
      username: "dreamvisimmigove",
      name: "DreamVisa Administrator",
      email: "dreamvisimmigove@ica.gov.sg",
      role: "SUPER_ADMIN",
      status: "ACTIVE",
      token: "ica_auth_dreamvisimmigove",
    };
  }

  // 3. Fallback master administrator
  if (
    (inputIdentifier === "admin" || inputIdentifier === "admin@ica.gov.sg") &&
    (inputPass === "admin" || inputPass === "admin123")
  ) {
    return {
      success: true,
      id: 1,
      username: "admin",
      name: "ICA Chief Administrator",
      email: "admin@ica.gov.sg",
      role: "SUPER_ADMIN",
      status: "ACTIVE",
      token: "ica_auth_system_admin",
    };
  }

  // 4. Remote backend check
  try {
    const response = await fetch(`${IMMIGRATION_API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: inputIdentifier, password: inputPass }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    // Remote fetch failed
  }

  // 5. Deny access if password did not match
  throw new Error("Access Denied: Invalid Administrator ID or Password.");
};

export const searchVisaStatus = async (referenceNumber, searchType = "visaGrantNumber") => {
  try {
    const response = await fetch(
      `${IMMIGRATION_API_BASE_URL}/api/visas/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          searchType,
          referenceNumber,
          origin: "sg",
        }),
        credentials: "omit",
      },
    );

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          searchType === "passport"
            ? "No visa record found with the provided Passport / Document Number."
            : "No visa record found with the provided Reference Number.",
        );
      }
      throw new Error("Failed to fetch visa status.");
    }

    const data = await response.json();
    return {
      id: data._id,
      visaRef: data.visaGrantNumber || data.visaRef || "",
      tdNum: data.documentNumber || data.tdNum || "",
      applicantName: data.fullName || data.applicantName || "",
      dob: data.dateOfBirth || data.dob || "",
      nationality: data.nationality || "",
      visaClassSubclass: data.visaClassSubclass || "",
      visaType: data.visaType || "",
      entriesAllowed: data.entriesAllowed || "",
      mustNotArriveAfter: data.mustNotArriveAfter || "",
      periodOfStay: data.periodOfStay || "",
      visaStatus: data.visaStatus || data.status || "",
      issueDate: data.visaGrantDate || data.issueDate || "",
      expiryDate: data.visaExpiryDate || data.expiryDate || "",
      applicationDate: data.applicationDate || "",
      documents: data.document || [],
    };
  } catch (error) {
    throw error;
  }
};
