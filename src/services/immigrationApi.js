export const IMMIGRATION_API_BASE_URL =
  import.meta.env.VITE_IMMIGRATION_API_URL ||
  "https://api-immigration.vercel.app";

const VISAS_STORAGE_KEY = "ica_immigration_visas_store";
const ADMINS_STORAGE_KEY = "ica_immigration_admins_store";

export const DEFAULT_ADMINS = [];

let localVisaRecords = [];

/**
 * Normalizes any visa object or FormData into a complete, consistent visa record object.
 * Provides both camelCase and snake_case / backend aliases so UI components and endpoints work seamlessly.
 */
export function normalizeVisaRecord(data, explicitId = null) {
  if (!data) return null;
  const record = {};

  if (data instanceof FormData) {
    for (const [key, value] of data.entries()) {
      record[key] = value;
    }
  } else if (typeof data === "object") {
    Object.assign(record, data);
  }

  const id =
    explicitId ||
    record.id ||
    record._id ||
    `visa_${Date.now()}_${Math.floor(100000 + Math.random() * 900000)}`;

  const visaRef = (
    record.visaRef ||
    record.visaGrantNumber ||
    record.grantNumber ||
    ""
  ).toString().trim();

  const tdNum = (
    record.tdNum ||
    record.documentNumber ||
    record.passportNumber ||
    ""
  ).toString().trim();

  const applicantName = (
    record.applicantName ||
    record.fullName ||
    record.name ||
    ""
  ).toString().trim();

  const dob = record.dob || record.dateOfBirth || "";
  const nationality = (record.nationality || "").toString().trim();
  const visaStatus = (
    record.visaStatus ||
    record.status ||
    "APPROVED"
  ).toString().trim();
  const issueDate =
    record.issueDate ||
    record.visaGrantDate ||
    new Date().toLocaleDateString("en-SG", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  const expiryDate = record.expiryDate || record.visaExpiryDate || "";
  const applicationDate =
    record.applicationDate ||
    new Date().toLocaleDateString("en-SG", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  const visaClassSubclass = record.visaClassSubclass || "FA / 600";
  const visaType = record.visaType || "Visitor";
  const entriesAllowed = record.entriesAllowed || "Multiple";
  const mustNotArriveAfter = record.mustNotArriveAfter || "";
  const periodOfStay = record.periodOfStay || "30 Days";
  const document = record.document || record.documents || null;
  const documentName =
    record.documentName ||
    (record.document instanceof File ? record.document.name : "");

  return {
    ...record,
    id,
    _id: id,
    visaRef,
    visaGrantNumber: visaRef,
    tdNum,
    documentNumber: tdNum,
    applicantName,
    fullName: applicantName,
    dob,
    dateOfBirth: dob,
    nationality,
    visaStatus,
    status: visaStatus,
    issueDate,
    visaGrantDate: issueDate,
    expiryDate,
    visaExpiryDate: expiryDate,
    applicationDate,
    visaClassSubclass,
    visaType,
    entriesAllowed,
    mustNotArriveAfter,
    periodOfStay,
    document,
    documentName,
  };
}

export const getLocalVisaRecords = () => {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(VISAS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Filter out broken / empty records
          const valid = parsed
            .map((r) => normalizeVisaRecord(r))
            .filter((r) => r && (r.applicantName || r.visaRef || r.tdNum));
          localVisaRecords = valid;
          return valid;
        }
      }
    } catch (e) {
      console.warn("Failed to read localVisaRecords from storage", e);
    }
  }
  return localVisaRecords.filter((r) => r && (r.applicantName || r.visaRef || r.tdNum));
};

export const saveLocalVisaRecords = (records) => {
  const clean = Array.isArray(records)
    ? records
        .map((r) => normalizeVisaRecord(r))
        .filter((r) => r && (r.applicantName || r.visaRef || r.tdNum))
    : [];
  localVisaRecords = clean;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(VISAS_STORAGE_KEY, JSON.stringify(clean));
    } catch (e) {
      console.warn("Failed to save localVisaRecords to storage", e);
    }
  }
  return clean;
};

export const upsertLocalVisaRecord = (rawRecord) => {
  const norm = normalizeVisaRecord(rawRecord);
  if (!norm) return getLocalVisaRecords();

  const current = getLocalVisaRecords();
  const idStr = String(norm.id || norm._id);
  const existingIdx = current.findIndex(
    (r) =>
      String(r.id) === idStr ||
      String(r._id) === idStr ||
      (norm.visaRef && r.visaRef && r.visaRef.toLowerCase() === norm.visaRef.toLowerCase()),
  );

  let updated;
  if (existingIdx >= 0) {
    updated = [...current];
    updated[existingIdx] = { ...updated[existingIdx], ...norm };
  } else {
    updated = [norm, ...current];
  }
  return saveLocalVisaRecords(updated);
};

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
  const localList = getLocalVisaRecords();
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
      if (response.status === 401) {
        sessionStorage.removeItem("ica_immigration_token");
        sessionStorage.removeItem("ica_immigration_admin_authenticated");
      }
      throw new Error(`Failed to fetch visas: ${response.status}`);
    }

    const data = await response.json();
    const remoteVisas = (data.visas || [])
      .map((backendRecord) => normalizeVisaRecord(backendRecord, backendRecord._id))
      .filter(Boolean);

    // Merge remote and local records
    const map = new Map();
    remoteVisas.forEach((r) => {
      const key = String(r.id || r.visaRef || r.tdNum);
      map.set(key, r);
    });
    localList.forEach((r) => {
      const key = String(r.id || r.visaRef || r.tdNum);
      if (!map.has(key)) {
        map.set(key, r);
      }
    });

    const merged = Array.from(map.values()).filter(
      (r) => r.applicantName || r.visaRef || r.tdNum,
    );
    saveLocalVisaRecords(merged);
    return merged;
  } catch (error) {
    console.warn("getAllVisaRecords remote fetch skipped/failed, using local records:", error);
    return getLocalVisaRecords();
  }
};

export const addVisaRecord = async (data) => {
  const normalized = normalizeVisaRecord(data);
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
      if (response.status === 401) {
        sessionStorage.removeItem("ica_immigration_token");
        sessionStorage.removeItem("ica_immigration_admin_authenticated");
      }
      throw new Error(err.message || "Failed to create visa on server");
    }

    const resData = await response.json();
    const backendVisa = resData.visa || resData.data || resData;
    const finalRecord = normalizeVisaRecord(
      {
        ...normalized,
        ...(backendVisa && typeof backendVisa === "object" ? backendVisa : {}),
      },
      backendVisa?._id || normalized.id,
    );
    upsertLocalVisaRecord(finalRecord);
    return finalRecord;
  } catch (error) {
    console.error("Remote addVisaRecord failed:", error);
    throw error;
  }
};

export const updateVisaRecord = async (id, data) => {
  const normalized = normalizeVisaRecord(data, id);
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
      throw new Error(err.message || "Failed to update visa on server");
    }

    const resData = await response.json();
    const backendVisa = resData.visa || resData.data || resData;
    const finalRecord = normalizeVisaRecord(
      {
        ...normalized,
        ...(backendVisa && typeof backendVisa === "object" ? backendVisa : {}),
      },
      id,
    );
    upsertLocalVisaRecord(finalRecord);
    return finalRecord;
  } catch (error) {
    console.error("Remote updateVisaRecord failed:", error);
    throw error;
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
      throw new Error(err.message || "Failed to delete visa on server");
    }
  } catch (error) {
    console.error("Remote deleteVisaRecord failed:", error);
    throw error;
  }

  const current = getLocalVisaRecords();
  const updated = current.filter(
    (r) => String(r.id) !== String(id) && String(r._id) !== String(id),
  );
  saveLocalVisaRecords(updated);
  return updated;
};

export const clearAllVisaRecords = async () => {
  saveLocalVisaRecords([]);
  return [];
};

export const resetVisaRecords = async () => {
  saveLocalVisaRecords([]);
  return [];
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
  const inputIdentifier = rawInput.replace(/^@+/, "");
  const inputPass = (password || "").trim();

  if (!inputIdentifier || !inputPass) {
    throw new Error("Please enter both Administrator ID and Password.");
  }

  try {
    const response = await fetch(`${IMMIGRATION_API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: inputIdentifier,
        password: inputPass,
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(data.message || "Invalid credentials");
    }

    return {
      success: true,
      token: data.token,
      user: data.user,
      username: data.user?.username || inputIdentifier,
      name: data.user?.username || "DreamVisa Administrator",
      role: data.user?.role || "SUPER_ADMIN",
      ...data,
    };
  } catch (error) {
    throw new Error(error.message || "Failed to authenticate");
  }
};

export const searchVisaStatus = async (
  referenceNumber,
  searchType = "visaGrantNumber",
) => {
  const cleanQuery = (referenceNumber || "").trim();

  if (!cleanQuery) {
    throw new Error(
      searchType === "passport"
        ? "Please enter your Passport / Document Number."
        : "Please enter your Visa Reference Number.",
    );
  }

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
          referenceNumber: cleanQuery,
          origin: "sg",
        }),
        credentials: "omit",
      },
    );

    if (response.ok) {
      const data = await response.json();
      return normalizeVisaRecord(data, data._id);
    }

    if (response.status === 404) {
      throw new Error(
        searchType === "passport"
          ? "No visa record found with the provided Passport / Document Number."
          : "No visa record found with the provided Reference Number.",
      );
    }

    const err = await response.json().catch(() => ({}));
    throw new Error(err.message || "Failed to fetch visa status.");
  } catch (error) {
    throw error;
  }
};
