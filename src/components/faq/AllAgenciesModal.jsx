import React, { useState, useMemo } from "react";
import "./AllAgenciesModal.css";

const AGENCIES_DATA = [
  {
    id: "ica",
    code: "ICA",
    name: "Immigration & Checkpoints Authority",
    category: "Statutory Boards",
    desc: "Passports, Identity Cards, Visas, Passes & Border Clearances.",
    isCurrent: true,
  },
  {
    id: "cpf",
    code: "CPF",
    name: "Central Provident Fund Board",
    category: "Statutory Boards",
    desc: "Retirement savings, healthcare, housing and investment schemes.",
  },
  {
    id: "hdb",
    code: "HDB",
    name: "Housing & Development Board",
    category: "Statutory Boards",
    desc: "Public housing, flat applications, grants and lease renewals.",
  },
  {
    id: "iras",
    code: "IRAS",
    name: "Inland Revenue Authority of Singapore",
    category: "Statutory Boards",
    desc: "Individual income tax, corporate tax, GST, property tax & grants.",
  },
  {
    id: "singpass",
    code: "Singpass",
    name: "National Digital Identity",
    category: "Public Services",
    desc: "Secure login, Myinfo, digital IC and government transactions.",
  },
  {
    id: "lifesg",
    code: "LifeSG",
    name: "LifeSG Government Services",
    category: "Public Services",
    desc: "Birth registration, baby bonus, parenting and senior services.",
  },
  {
    id: "mha",
    code: "MHA",
    name: "Ministry of Home Affairs",
    category: "Ministries",
    desc: "Home Team departments ensuring safety, security and emergency response.",
  },
  {
    id: "moh",
    code: "MOH",
    name: "Ministry of Health",
    category: "Ministries",
    desc: "Healthcare subsidies, MediShield, CHAS, vaccinations and hospital care.",
  },
  {
    id: "moe",
    code: "MOE",
    name: "Ministry of Education",
    category: "Ministries",
    desc: "Schools, admissions, national exams, financial assistance and scholarships.",
  },
  {
    id: "mom",
    code: "MOM",
    name: "Ministry of Manpower",
    category: "Ministries",
    desc: "Employment passes, work permits, labor rights, and workplace safety.",
  },
  {
    id: "msf",
    code: "MSF",
    name: "Ministry of Social and Family Development",
    category: "Ministries",
    desc: "Social support, disability schemes, family strengthening and ComCare.",
  },
  {
    id: "activesg",
    code: "ActiveSG",
    name: "Sport Singapore",
    category: "Statutory Boards",
    desc: "Sports facilities booking, active lifestyle programmes and memberships.",
  },
  {
    id: "aic",
    code: "AIC",
    name: "Agency for Integrated Care",
    category: "Healthcare & Community",
    desc: "Eldercare services, caregiver grants, Silver Generation and home care.",
  },
  {
    id: "sla",
    code: "SLA",
    name: "Singapore Land Authority",
    category: "Statutory Boards",
    desc: "Land titles, state properties, OneMap and spatial data services.",
  },
  {
    id: "scdf",
    code: "SCDF",
    name: "Singapore Civil Defence Force",
    category: "Public Services",
    desc: "Fire safety, ambulance, emergency medical services and rescue operations.",
  },
  {
    id: "scamshield",
    code: "ScamShield",
    name: "National Anti-Scam Team",
    category: "Public Services",
    desc: "Scam blocking, spoof detection and reporting suspicious activities.",
  },
  {
    id: "skillsfuture",
    code: "SkillsFuture",
    name: "SkillsFuture Singapore",
    category: "Statutory Boards",
    desc: "Lifelong learning, course credits, training subsidies and career transitions.",
  },
  {
    id: "wsg",
    code: "WSG",
    name: "Workforce Singapore",
    category: "Statutory Boards",
    desc: "Career matching, job fairs, employment support and career conversion.",
  },
];

const CATEGORIES = ["All", "Ministries", "Statutory Boards", "Public Services", "Healthcare & Community"];

export default function AllAgenciesModal({ isOpen, onClose, onSelectAgency }) {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const filtered = useMemo(() => {
    return AGENCIES_DATA.filter((a) => {
      const matchCat = selectedCat === "All" || a.category === selectedCat;
      const matchSearch =
        !search.trim() ||
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.code.toLowerCase().includes(search.toLowerCase()) ||
        a.desc.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, selectedCat]);

  if (!isOpen) return null;

  return (
    <div className="all-agencies-overlay" onClick={onClose}>
      <div className="all-agencies-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="all-agencies-header">
          <div className="all-agencies-title-wrap">
            <div className="all-agencies-logo-badge">
              <svg width="24" height="22" viewBox="0 0 24 22" fill="none">
                <path fill="#111827" d="M16.58 5.532c-.19-.065-.386-.121-.567-.172a9.566 9.566 0 0 0-1.283-.225 8.876 8.876 0 0 0-.945-.047h-.416A9.146 9.146 0 0 0 7.15 7.92a9.022 9.022 0 0 0-2.485 6.33v.307a.42.42 0 0 1-.36.438.43.43 0 0 1-.206-.02 12.46 12.46 0 0 1-3.983-2.341.42.42 0 0 1 .396-.703c.826.23 1.7.236 2.528.017a.282.282 0 0 0 .17-.397 7.63 7.63 0 0 1 1.731-9.577A7.742 7.742 0 0 1 10.3.151a7.772 7.772 0 0 1 3.412.966 7.713 7.713 0 0 1 2.618 2.38c.316.462.578.96.781 1.48a.423.423 0 0 1-.292.573.43.43 0 0 1-.24-.01v-.008Z" />
                <path fill="#0056c6" d="M20.833 17.954a.293.293 0 0 1-.184-.163.283.283 0 0 1 .008-.244 7.77 7.77 0 0 0 .353-6.944 7.873 7.873 0 0 0-2.152-2.87 8.016 8.016 0 0 0-3.216-1.636 8.079 8.079 0 0 0-4.783.272 7.956 7.956 0 0 0-3.76 2.926 7.756 7.756 0 0 0-.984 6.885 7.841 7.841 0 0 0 1.883 3.049 7.986 7.986 0 0 0 3.057 1.912c2.163.747 4.489.913 6.738.481a12.976 12.976 0 0 0 6.061-2.942.435.435 0 0 0 .093-.53.44.44 0 0 0-.502-.214 4.985 4.985 0 0 1-2.612.018Z" />
              </svg>
              <span className="all-agencies-logo-text">askgov</span>
            </div>
            <h3 className="all-agencies-title">Government Agencies Directory</h3>
            <p className="all-agencies-subtitle">
              Browse official answers and FAQs across all Singapore government agencies.
            </p>
          </div>
          <button
            type="button"
            className="all-agencies-close-btn"
            onClick={onClose}
            aria-label="Close agencies directory"
          >
            ✕
          </button>
        </div>

        {/* Search & Categories */}
        <div className="all-agencies-controls">
          <div className="all-agencies-search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="all-agencies-search-input"
              placeholder="Search agency by name, acronym or service..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            {search && (
              <button
                type="button"
                className="all-agencies-search-clear"
                onClick={() => setSearch("")}
              >
                ✕
              </button>
            )}
          </div>

          <div className="all-agencies-tabs-row">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`all-agencies-tab-btn ${selectedCat === cat ? "active" : ""}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Agency Grid */}
        <div className="all-agencies-grid">
          {filtered.length > 0 ? (
            filtered.map((agency) => (
              <div
                key={agency.id}
                className={`all-agencies-card ${agency.isCurrent ? "is-current-agency" : ""}`}
                onClick={() => {
                  if (onSelectAgency) onSelectAgency(agency);
                  onClose();
                }}
              >
                <div className="all-agencies-card-top">
                  <div className="all-agencies-avatar-badge">
                    {agency.code.slice(0, 3)}
                  </div>
                  {agency.isCurrent && (
                    <span className="all-agencies-current-pill">Current Agency</span>
                  )}
                </div>

                <div className="all-agencies-card-info">
                  <h4 className="all-agencies-card-name">{agency.name}</h4>
                  <span className="all-agencies-card-category">{agency.category}</span>
                  <p className="all-agencies-card-desc">{agency.desc}</p>
                </div>

                <div className="all-agencies-card-footer">
                  <span className="all-agencies-view-link">
                    {agency.isCurrent ? "View ICA FAQs" : `Explore ${agency.code} FAQs`} ↗
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="all-agencies-empty">
              <span>No government agencies found matching "{search}"</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
