export const IMMIGRATION_API_BASE_URL =
  import.meta.env.VITE_IMMIGRATION_API_URL ||
  "https://api-immigration.vercel.app";

let localVisaRecords = [];
let localAdmins = [];

export const getLocalVisaRecords = () => localVisaRecords;
export const getLocalAdmins = () => localAdmins;

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
  return localAdmins;
};

export const addAdmin = async (data) => {
  const newAdmin = { ...data, id: Date.now() };
  localAdmins.push(newAdmin);
  return newAdmin;
};

export const deleteAdmin = async (id) => {
  localAdmins = localAdmins.filter((r) => r.id !== id);
};

export const authenticateAdmin = async (username, password) => {
  try {
    const response = await fetch(`${IMMIGRATION_API_BASE_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || "Failed to authenticate");
  }
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
