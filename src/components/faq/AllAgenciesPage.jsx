import React, { useState, useMemo } from "react";
import GovMasthead from "../GovMasthead";
import "./AllAgenciesPage.css";

// Comprehensive list of Government Organisations matching AskGov official directory & screenshot
export const GOV_ORGANISATIONS = [
  {
    id: "activesg",
    name: "ActiveSG",
    logoType: "activesg",
  },
  {
    id: "aic",
    name: "Agency for Integrated Care",
    logoType: "aic",
  },
  {
    id: "ahpedia",
    name: "AHPedia",
    logoType: "ahpedia",
  },
  {
    id: "aitong",
    name: "Ai Tong School",
    logoText: "ATS",
    badgeBg: "#fef2f2",
    badgeColor: "#dc2626",
    logoType: "crest-round",
  },
  {
    id: "ahpc",
    name: "Allied Health Professions Council (AHPC)",
    logoType: "ahpc",
  },
  {
    id: "anchorgreen",
    name: "Anchor Green Primary School",
    logoText: "AGPS",
    badgeBg: "#f0fdfa",
    badgeColor: "#0f766e",
    logoType: "crest-round",
  },
  {
    id: "andersonpri",
    name: "Anderson Primary School",
    logoText: "APS",
    badgeBg: "#eff6ff",
    badgeColor: "#1d4ed8",
    logoType: "crest-round",
  },
  {
    id: "andersonsec",
    name: "Anderson Secondary School",
    logoText: "AND",
    badgeBg: "#fefce8",
    badgeColor: "#15803d",
    logoType: "crest-shield",
  },
  {
    id: "acsbr",
    name: "Anglo-Chinese School (Barker Road)",
    logoText: "ACS",
    badgeBg: "#fef2f2",
    badgeColor: "#991b1b",
    logoType: "crest-shield",
  },
  {
    id: "ago",
    name: "Auditor-General's Office (AGO)",
    logoText: "AGO",
    badgeBg: "#f8fafc",
    badgeColor: "#334155",
    logoType: "crest-round",
  },
  {
    id: "bartley",
    name: "Bartley Secondary School",
    logoText: "BSS",
    badgeBg: "#eff6ff",
    badgeColor: "#1e40af",
    logoType: "crest-shield",
  },
  {
    id: "bizsg",
    name: "BizSG",
    logoType: "bizsg",
  },
  {
    id: "bedokgreen",
    name: "Bedok Green Primary School",
    logoText: "BGPS",
    badgeBg: "#f0fdf4",
    badgeColor: "#15803d",
    logoType: "crest-round",
  },
  {
    id: "bca",
    name: "Building and Construction Authority (BCA)",
    logoType: "bca",
  },
  {
    id: "bukitbatok",
    name: "Bukit Batok Secondary School",
    logoText: "BBSS",
    badgeBg: "#eff6ff",
    badgeColor: "#2563eb",
    logoType: "crest-shield",
  },
  {
    id: "bpghs",
    name: "Bukit Panjang Govt. High School",
    logoText: "BPGHS",
    badgeBg: "#fffbeb",
    badgeColor: "#b45309",
    logoType: "crest-shield",
  },
  {
    id: "cag",
    name: "Changi Airport Group (CAG)",
    logoType: "cag",
  },
  {
    id: "catholichigh",
    name: "Catholic High School",
    logoText: "CHS",
    badgeBg: "#eff6ff",
    badgeColor: "#1e3a8a",
    logoType: "crest-shield",
  },
  {
    id: "cjc",
    name: "Catholic Junior College (CJC)",
    logoText: "CJC",
    badgeBg: "#eff6ff",
    badgeColor: "#1d4ed8",
    logoType: "crest-shield",
  },
  {
    id: "cedargirls",
    name: "Cedar Girls' Secondary School",
    logoText: "CGSS",
    badgeBg: "#eff6ff",
    badgeColor: "#1e40af",
    logoType: "crest-shield",
  },
  {
    id: "cpf",
    name: "Central Provident Fund Board (CPF)",
    logoType: "cpf",
  },
  {
    id: "caas",
    name: "Civil Aviation Authority of Singapore (CAAS)",
    logoType: "caas",
  },
  {
    id: "clementipri",
    name: "Clementi Primary School",
    logoText: "CPS",
    badgeBg: "#fef2f2",
    badgeColor: "#dc2626",
    logoType: "crest-round",
  },
  {
    id: "corppass",
    name: "CorpPass",
    logoType: "corppass",
  },
  {
    id: "crescent",
    name: "Crescent Girls' School",
    logoText: "CGS",
    badgeBg: "#eff6ff",
    badgeColor: "#0284c7",
    logoType: "crest-shield",
  },
  {
    id: "ecda",
    name: "Early Childhood Development Agency (ECDA)",
    logoType: "ecda",
  },
  {
    id: "eastspring",
    name: "East Spring Primary School",
    logoText: "ESPS",
    badgeBg: "#f0fdf4",
    badgeColor: "#16a34a",
    logoType: "crest-round",
  },
  {
    id: "edb",
    name: "Economic Development Board (EDB)",
    logoType: "edb",
  },
  {
    id: "edgefield",
    name: "Edgefield Secondary School",
    logoText: "EFSS",
    badgeBg: "#eff6ff",
    badgeColor: "#2563eb",
    logoType: "crest-shield",
  },
  {
    id: "eld",
    name: "Elections Department (ELD)",
    logoText: "ELD",
    badgeBg: "#f8fafc",
    badgeColor: "#334155",
    logoType: "crest-round",
  },
  {
    id: "ema",
    name: "Energy Market Authority (EMA)",
    logoType: "ema",
  },
  {
    id: "enterprise",
    name: "Enterprise Singapore",
    logoType: "enterprise",
  },
  {
    id: "erp",
    name: "ERP 2.0 (LTA)",
    logoType: "erp",
  },
  {
    id: "fairfield",
    name: "Fairfield Methodist School",
    logoText: "FMSS",
    badgeBg: "#eff6ff",
    badgeColor: "#1e3a8a",
    logoType: "crest-shield",
  },
  {
    id: "govsg",
    name: "Gov.sg",
    logoType: "govsg",
  },
  {
    id: "hdb",
    name: "Housing & Development Board (HDB)",
    logoType: "hdb",
  },
  {
    id: "healthiersg",
    name: "Healthier SG (MOH)",
    logoType: "healthiersg",
  },
  {
    id: "hpb",
    name: "Health Promotion Board (HPB)",
    logoType: "hpb",
  },
  {
    id: "hsa",
    name: "Health Sciences Authority (HSA)",
    logoType: "hsa",
  },
  {
    id: "hwachong",
    name: "Hwa Chong Institution (HCI)",
    logoText: "HCI",
    badgeBg: "#fffbeb",
    badgeColor: "#d97706",
    logoType: "crest-shield",
  },
  {
    id: "ica",
    name: "Immigration & Checkpoints Authority",
    logoType: "ica",
    isICA: true,
  },
  {
    id: "imda",
    name: "Infocomm Media Development Authority (IMDA)",
    logoType: "imda",
  },
  {
    id: "iras",
    name: "Inland Revenue Authority of Singapore (IRAS)",
    logoType: "iras",
  },
  {
    id: "ipos",
    name: "Intellectual Property Office of Singapore (IPOS)",
    logoType: "ipos",
  },
  {
    id: "jtc",
    name: "JTC Corporation",
    logoType: "jtc",
  },
  {
    id: "lta",
    name: "Land Transport Authority (LTA)",
    logoType: "lta",
  },
  {
    id: "lifesg",
    name: "LifeSG",
    logoType: "lifesg",
  },
  {
    id: "marisstella",
    name: "Maris Stella High School",
    logoText: "MSHS",
    badgeBg: "#eff6ff",
    badgeColor: "#1e40af",
    logoType: "crest-shield",
  },
  {
    id: "mindef",
    name: "Ministry of Defence (MINDEF)",
    logoType: "mindef",
  },
  {
    id: "moe",
    name: "Ministry of Education (MOE)",
    logoType: "moe",
  },
  {
    id: "mof",
    name: "Ministry of Finance (MOF)",
    logoType: "mof",
  },
  {
    id: "mfa",
    name: "Ministry of Foreign Affairs (MFA)",
    logoType: "mfa",
  },
  {
    id: "moh",
    name: "Ministry of Health (MOH)",
    logoType: "moh",
  },
  {
    id: "mha",
    name: "Ministry of Home Affairs (MHA)",
    logoType: "mha",
  },
  {
    id: "mom",
    name: "Ministry of Manpower (MOM)",
    logoType: "mom",
  },
  {
    id: "msf",
    name: "Ministry of Social and Family Development (MSF)",
    logoType: "msf",
  },
  {
    id: "mti",
    name: "Ministry of Trade and Industry (MTI)",
    logoType: "mti",
  },
  {
    id: "mot",
    name: "Ministry of Transport (MOT)",
    logoType: "mot",
  },
  {
    id: "mas",
    name: "Monetary Authority of Singapore (MAS)",
    logoType: "mas",
  },
  {
    id: "nan-hua",
    name: "Nan Hua High School",
    logoText: "NHHS",
    badgeBg: "#eff6ff",
    badgeColor: "#0284c7",
    logoType: "crest-shield",
  },
  {
    id: "nea",
    name: "National Environment Agency (NEA)",
    logoType: "nea",
  },
  {
    id: "nlb",
    name: "National Library Board (NLB)",
    logoType: "nlb",
  },
  {
    id: "nparks",
    name: "National Parks Board (NParks)",
    logoType: "nparks",
  },
  {
    id: "parentsgateway",
    name: "Parents Gateway",
    logoType: "parentsgateway",
  },
  {
    id: "parkingsg",
    name: "Parking.sg",
    logoType: "parkingsg",
  },
  {
    id: "pa",
    name: "People's Association (PA)",
    logoType: "pa",
  },
  {
    id: "pub",
    name: "PUB, Singapore's National Water Agency",
    logoType: "pub",
  },
  {
    id: "rafflesgirls",
    name: "Raffles Girls' School (RGS)",
    logoText: "RGS",
    badgeBg: "#eff6ff",
    badgeColor: "#1e3a8a",
    logoType: "crest-shield",
  },
  {
    id: "rafflesinst",
    name: "Raffles Institution (RI)",
    logoText: "RI",
    badgeBg: "#f0fdf4",
    badgeColor: "#14532d",
    logoType: "crest-shield",
  },
  {
    id: "redeemsg",
    name: "RedeemSG",
    logoType: "redeemsg",
  },
  {
    id: "scamshield",
    name: "ScamShield",
    logoType: "scamshield",
  },
  {
    id: "scdf",
    name: "Singapore Civil Defence Force (SCDF)",
    logoType: "scdf",
  },
  {
    id: "sgcourts",
    name: "Singapore Courts (SG Courts)",
    logoType: "sgcourts",
  },
  {
    id: "customs",
    name: "Singapore Customs",
    logoType: "customs",
  },
  {
    id: "sla",
    name: "Singapore Land Authority (SLA)",
    logoType: "sla",
  },
  {
    id: "snb",
    name: "Singapore Nursing Board (SNB)",
    logoType: "snb",
  },
  {
    id: "spc",
    name: "Singapore Pharmacy Council (SPC)",
    logoType: "spc",
  },
  {
    id: "spf",
    name: "Singapore Police Force (SPF)",
    logoType: "spf",
  },
  {
    id: "sps",
    name: "Singapore Prison Service",
    logoType: "sps",
  },
  {
    id: "stb",
    name: "Singapore Tourism Board (STB)",
    logoType: "stb",
  },
  {
    id: "svc",
    name: "Singapore Veterinary Council (SVC)",
    logoType: "svc",
  },
  {
    id: "singpass",
    name: "Singpass",
    logoType: "singpass",
  },
  {
    id: "skillsfuture",
    name: "SkillsFuture",
    logoType: "skillsfuture",
  },
  {
    id: "jobseeker",
    name: "SkillsFuture Jobseeker Support Scheme",
    logoType: "jobseeker",
  },
  {
    id: "stpatricks",
    name: "St. Patrick's School",
    logoType: "stpatricks",
  },
  {
    id: "string",
    name: "String",
    logoType: "string",
  },
  {
    id: "swisscottage",
    name: "Swiss Cottage Secondary School",
    logoType: "swisscottage",
  },
  {
    id: "teckghee",
    name: "Teck Ghee Primary School",
    logoType: "teckghee",
  },
  {
    id: "toteboard",
    name: "Tote Board",
    logoType: "toteboard",
  },
  {
    id: "tcmpb",
    name: "Traditional Chinese Medicine Practitioners Board (TCMPB)",
    logoType: "tcmpb",
  },
  {
    id: "ura",
    name: "Urban Redevelopment Authority (URA)",
    logoType: "ura",
  },
  {
    id: "victoriasec",
    name: "Victoria School",
    logoText: "VS",
    badgeBg: "#eff6ff",
    badgeColor: "#1e3a8a",
    logoType: "crest-shield",
  },
  {
    id: "westwood",
    name: "Westwood Primary School",
    logoType: "westwood",
  },
  {
    id: "wizgov",
    name: "WizGov",
    logoType: "wizgov",
  },
  {
    id: "wsg",
    name: "Workforce Singapore (WSG)",
    logoType: "wsg",
  },
  {
    id: "yishunsec",
    name: "Yishun Secondary School",
    logoText: "YSS",
    badgeBg: "#f0fdf4",
    badgeColor: "#15803d",
    logoType: "crest-round",
  },
  {
    id: "zhenghua",
    name: "Zhenghua Secondary School",
    logoText: "ZSS",
    badgeBg: "#eff6ff",
    badgeColor: "#0284c7",
    logoType: "crest-shield",
  },
];

// Helper to render authentic agency badges matching the screenshot 1:1
const AgencyLogo = ({ agency }) => {
  // 1. Singapore Nursing Board (SNB)
  if (agency.logoType === "snb") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="34" height="30" viewBox="0 0 40 32" fill="none">
          <path d="M20 4L22 10H18L20 4Z" fill="#b48324" />
          <path d="M12 14C12 14 16 11 20 11C24 11 28 14 28 14C28 14 25 18 20 18C15 18 12 14 12 14Z" fill="#c99738" />
          <path d="M10 12C7 9 4 10 4 10C6 14 10 16 14 17" stroke="#b48324" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30 12C33 9 36 10 36 10C34 14 30 16 26 17" stroke="#b48324" strokeWidth="1.5" strokeLinecap="round" />
          <text x="20" y="27" fontSize="5" fontWeight="700" fill="#996e1b" textAnchor="middle" letterSpacing="0.5">SINGAPORE NURSING BOARD</text>
        </svg>
      </div>
    );
  }

  // 2. Singapore Pharmacy Council (SPC)
  if (agency.logoType === "spc") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="16" stroke="#7a1a2b" strokeWidth="2" fill="#fffafa" />
          <circle cx="18" cy="18" r="13" stroke="#7a1a2b" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
          <path d="M18 9V26M13 14H23M11 19L15 19M21 19L25 19" stroke="#7a1a2b" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11 19C11 21 13 22 13 22C13 22 15 21 15 19" fill="#7a1a2b" opacity="0.3" />
          <path d="M21 19C21 21 23 22 23 22C23 22 25 21 25 19" fill="#7a1a2b" opacity="0.3" />
        </svg>
      </div>
    );
  }

  // 3. Singapore Prison Service
  if (agency.logoType === "sps") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <polygon points="18,4 32,28 4,28" fill="#1e3a8a" stroke="#d97706" strokeWidth="1.5" />
          <circle cx="18" cy="18" r="6" fill="#fbbf24" />
          <path d="M16 16H20V21H16Z" fill="#1e3a8a" />
          <path d="M18 13L19.5 15H16.5Z" fill="#1e3a8a" />
        </svg>
      </div>
    );
  }

  // 4. Singapore Veterinary Council (SVC)
  if (agency.logoType === "svc") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="34" height="32" viewBox="0 0 42 36" fill="none">
          <path d="M8 12C8 8 13 8 15 11C17 14 13 16 11 18C9 20 9 24 13 24C16 24 17 21 17 21" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M18 10L23 24L28 10" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M37 13C35 10 32 10 30 13C28 16 28 20 30 23C32 26 35 25 37 22" stroke="#0d9488" strokeWidth="2.5" strokeLinecap="round" />
          <text x="22" y="32" fontSize="4.5" fontWeight="800" fill="#0f766e" textAnchor="middle">SINGAPORE VETERINARY COUNCIL</text>
        </svg>
      </div>
    );
  }

  // 5. Singpass
  if (agency.logoType === "singpass") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff", padding: "0" }}>
        <svg width="38" height="20" viewBox="0 0 68 28" fill="none">
          <text x="3" y="19" fontFamily="-apple-system, sans-serif" fontSize="17" fontWeight="900" fill="#e11d48" letterSpacing="-0.5">singpass</text>
        </svg>
      </div>
    );
  }

  // 6. SkillsFuture
  if (agency.logoType === "skillsfuture") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="36" height="24" viewBox="0 0 64 30" fill="none">
          <path d="M4 14C8 6 16 6 18 14C20 22 28 22 32 14" stroke="#e11d48" strokeWidth="2" strokeLinecap="round" />
          <text x="4" y="24" fontSize="9" fontWeight="800" fill="#b91c1c">SKILLS</text>
          <text x="32" y="24" fontSize="9" fontWeight="800" fill="#ea580c">future</text>
          <text x="56" y="16" fontSize="6.5" fontWeight="800" fill="#e11d48">SG</text>
        </svg>
      </div>
    );
  }

  // 7. SkillsFuture Jobseeker Support Scheme
  if (agency.logoType === "jobseeker") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <text x="2" y="12" fontSize="6.5" fontWeight="800" fill="#0284c7">my</text>
          <text x="2" y="20" fontSize="7" fontWeight="900" fill="#059669">careers</text>
          <text x="2" y="27" fontSize="7" fontWeight="900" fill="#0284c7">future</text>
        </svg>
      </div>
    );
  }

  // 8. St. Patrick's School
  if (agency.logoType === "stpatricks") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="30" height="32" viewBox="0 0 32 36" fill="none">
          <path d="M16 2L4 6V18C4 26 16 33 16 33C16 33 28 26 28 18V6L16 2Z" fill="#1e3a8a" />
          <path d="M16 8V24M8 14H24" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          <circle cx="16" cy="18" r="4" fill="#15803d" />
          <path d="M16 16L17 18H15L16 16Z" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  // 9. String
  if (agency.logoType === "string") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#1e293b", borderRadius: "8px" }}>
        <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
          <path d="M20 7C16 7 11 8 8 11C5 14 6 19 11 19C16 19 22 20 22 24C22 27 18 27 13 27" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
          <path d="M7 11C7 7 12 5 18 5" stroke="#34d399" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        </svg>
      </div>
    );
  }

  // 10. Swiss Cottage Secondary School
  if (agency.logoType === "swisscottage") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="30" height="32" viewBox="0 0 32 36" fill="none">
          <path d="M16 2L5 7V17C5 25 16 32 16 32C16 32 27 25 27 17V7L16 2Z" fill="#0f766e" />
          <path d="M10 12H22M10 16H22M10 20H22" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M16 7V25" stroke="#ffffff" strokeWidth="1.5" />
        </svg>
      </div>
    );
  }

  // 11. Teck Ghee Primary School
  if (agency.logoType === "teckghee") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="16" fill="#f0fdf4" stroke="#15803d" strokeWidth="1.5" />
          <path d="M18 12C18 12 13 7 9 10C5 13 9 18 18 19" fill="#15803d" />
          <path d="M18 12C18 12 23 7 27 10C31 13 27 18 18 19" fill="#15803d" />
          <path d="M18 18V28M12 28H24" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // 12. Tote Board
  if (agency.logoType === "toteboard") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="34" height="28" viewBox="0 0 54 36" fill="none">
          <text x="2" y="16" fontFamily="-apple-system, sans-serif" fontSize="16" fontWeight="900" fill="#0284c7" letterSpacing="-0.5">tote</text>
          <text x="2" y="30" fontFamily="-apple-system, sans-serif" fontSize="14" fontWeight="800" fill="#0f172a" letterSpacing="-0.5">board</text>
          <circle cx="28" cy="6" r="2.5" fill="#f59e0b" />
        </svg>
      </div>
    );
  }

  // 13. Traditional Chinese Medicine Practitioners Board (TCMPB)
  if (agency.logoType === "tcmpb") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="30" height="32" viewBox="0 0 32 38" fill="none">
          <rect x="2" y="2" width="28" height="34" rx="4" fill="#0f766e" />
          <rect x="5" y="5" width="22" height="28" rx="2" fill="#ffffff" />
          <text x="16" y="16" fontSize="10" fontWeight="900" fill="#0f766e" textAnchor="middle">中</text>
          <text x="16" y="27" fontSize="10" fontWeight="900" fill="#0f766e" textAnchor="middle">医</text>
        </svg>
      </div>
    );
  }

  // 14. Westwood Primary School
  if (agency.logoType === "westwood") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
          <path d="M18 4L24 13H12L18 4Z" fill="#15803d" />
          <path d="M18 10L26 20H10L18 10Z" fill="#16a34a" />
          <path d="M18 16L28 26H8L18 16Z" fill="#22c55e" />
          <rect x="16" y="26" width="4" height="4" fill="#78350f" />
          <text x="18" y="34" fontSize="4.5" fontWeight="800" fill="#15803d" textAnchor="middle">WESTWOOD</text>
        </svg>
      </div>
    );
  }

  // 15. WizGov
  if (agency.logoType === "wizgov") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#ffffff" }}>
        <svg width="34" height="28" viewBox="0 0 50 32" fill="none">
          <path d="M14 6L6 22H22L14 6Z" fill="#1e3a8a" />
          <ellipse cx="14" cy="22" rx="10" ry="3" fill="#1e40af" />
          <circle cx="14" cy="12" r="1.5" fill="#facc15" />
          <circle cx="11" cy="17" r="1.2" fill="#facc15" />
          <circle cx="17" cy="16" r="1.2" fill="#facc15" />
          <text x="25" y="21" fontSize="10" fontWeight="900" fill="#0f172a">WizGov</text>
        </svg>
      </div>
    );
  }

  // 16. ICA
  if (agency.logoType === "ica" || agency.isICA) {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#eff6ff", color: "#0056c6" }}>
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none">
          <path d="M12 2L3 6V12C3 18 7 23 12 25C17 23 21 18 21 12V6L12 2Z" fill="#0056c6" />
          <path d="M12 5L5 8.5V12C5 16 8 20 12 22C16 20 19 16 19 12V8.5L12 5Z" fill="#ffffff" />
          <text x="12" y="16" fontSize="7" fontWeight="900" fill="#0056c6" textAnchor="middle">ICA</text>
        </svg>
      </div>
    );
  }

  // 17. HDB
  if (agency.logoType === "hdb") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#fef2f2", color: "#dc2626" }}>
        <span style={{ fontSize: "12px", fontWeight: "900", color: "#dc2626" }}>HDB</span>
      </div>
    );
  }

  // 18. CPF
  if (agency.logoType === "cpf") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#f0fdf4", color: "#059669" }}>
        <span style={{ fontSize: "12px", fontWeight: "900", color: "#059669" }}>CPF</span>
      </div>
    );
  }

  // 19. IRAS
  if (agency.logoType === "iras") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#eff6ff", color: "#0369a1" }}>
        <span style={{ fontSize: "11px", fontWeight: "800", color: "#0369a1" }}>IRAS</span>
      </div>
    );
  }

  // 20. ActiveSG
  if (agency.logoType === "activesg") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#fef2f2", color: "#e11d48" }}>
        <span style={{ fontSize: "10px", fontWeight: "800", fontStyle: "italic" }}>ActiveSG</span>
      </div>
    );
  }

  // 21. AIC
  if (agency.logoType === "aic") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#fff7ed", color: "#ea580c" }}>
        <span style={{ fontSize: "11.5px", fontWeight: "800" }}>aic)))</span>
      </div>
    );
  }

  // 22. AHPC
  if (agency.logoType === "ahpc") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#f0fdfa", color: "#0d9488" }}>
        <span style={{ fontSize: "11px", fontWeight: "800" }}>AHPC</span>
      </div>
    );
  }

  // 23. AHPedia
  if (agency.logoType === "ahpedia") {
    return (
      <div className="gov-org-logo-wrap" style={{ background: "#eff6ff", color: "#0284c7" }}>
        <span style={{ fontSize: "9.5px", fontWeight: "700" }}>AHPedia</span>
      </div>
    );
  }

  // Generic crest shield
  if (agency.logoType === "crest-shield") {
    return (
      <div className="gov-org-logo-wrap crest-shield" style={{ background: agency.badgeBg || "#eff6ff", color: agency.badgeColor || "#1d4ed8" }}>
        <svg width="20" height="22" viewBox="0 0 24 26" fill="none">
          <path d="M12 2L3 6V12C3 18 7 23 12 25C17 23 21 18 21 12V6L12 2Z" fill="currentColor" opacity="0.9" />
          <path d="M12 5L5 8V12C5 16.5 8 20.5 12 22C16 20.5 19 16.5 19 12V8L12 5Z" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  // Generic crest round
  if (agency.logoType === "crest-round") {
    return (
      <div className="gov-org-logo-wrap crest-round" style={{ background: agency.badgeBg || "#f8fafc", color: agency.badgeColor || "#334155" }}>
        <div className="crest-inner-ring" style={{ borderColor: agency.badgeColor || "#334155" }}>
          <span>{(agency.logoText || agency.name).slice(0, 3)}</span>
        </div>
      </div>
    );
  }

  // Default clean badge
  return (
    <div
      className="gov-org-logo-wrap"
      style={{
        background: agency.badgeBg || "#eff6ff",
        color: agency.badgeColor || "#0056c6",
      }}
    >
      <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "-0.01em" }}>
        {agency.logoText || (agency.name.includes("(") ? agency.name.split("(")[1]?.replace(")", "") : agency.name.slice(0, 4))}
      </span>
    </div>
  );
};

export default function AllAgenciesPage({ onBackToFaq }) {
  const [search, setSearch] = useState("");

  const filteredOrgs = useMemo(() => {
    if (!search.trim()) return GOV_ORGANISATIONS;
    const q = search.toLowerCase();
    return GOV_ORGANISATIONS.filter(
      (org) =>
        org.name.toLowerCase().includes(q) ||
        (org.logoText && org.logoText.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <div className="gov-orgs-page-wrapper">
      {/* 1. Official Singapore Government Masthead */}
      <GovMasthead />

      {/* 2. Official AskGov Sky-blue Header matching Screenshot */}
      <header className="gov-orgs-header-bar">
        <div className="gov-orgs-header-inner">
          <div
            className="gov-orgs-brand"
            onClick={onBackToFaq}
            style={{ cursor: "pointer" }}
            title="Return to ICA FAQs"
          >
            <svg
              className="gov-orgs-bubble-icon"
              width="26"
              height="25"
              viewBox="0 0 24 22"
              fill="none"
              aria-hidden="true"
            >
              <path
                fill="#111827"
                d="M16.58 5.532c-.19-.065-.386-.121-.567-.172a9.566 9.566 0 0 0-1.283-.225 8.876 8.876 0 0 0-.945-.047h-.416A9.146 9.146 0 0 0 7.15 7.92a9.022 9.022 0 0 0-2.485 6.33v.307a.42.42 0 0 1-.36.438.43.43 0 0 1-.206-.02 12.46 12.46 0 0 1-3.983-2.341.42.42 0 0 1 .396-.703c.826.23 1.7.236 2.528.017a.282.282 0 0 0 .17-.397 7.63 7.63 0 0 1 1.731-9.577A7.742 7.742 0 0 1 10.3.151a7.772 7.772 0 0 1 3.412.966 7.713 7.713 0 0 1 2.618 2.38c.316.462.578.96.781 1.48a.423.423 0 0 1-.292.573.43.43 0 0 1-.24-.01v-.008Z"
              />
              <path
                fill="#0056c6"
                d="M20.833 17.954a.293.293 0 0 1-.184-.163.283.283 0 0 1 .008-.244 7.77 7.77 0 0 0 .353-6.944 7.873 7.873 0 0 0-2.152-2.87 8.016 8.016 0 0 0-3.216-1.636 8.079 8.079 0 0 0-4.783.272 7.956 7.956 0 0 0-3.76 2.926 7.756 7.756 0 0 0-.984 6.885 7.841 7.841 0 0 0 1.883 3.049 7.986 7.986 0 0 0 3.057 1.912c2.163.747 4.489.913 6.738.481a12.976 12.976 0 0 0 6.061-2.942.435.435 0 0 0 .093-.53.44.44 0 0 0-.502-.214 4.985 4.985 0 0 1-2.612.018Z"
              />
            </svg>
            <span className="gov-orgs-brand-title">askgov</span>
          </div>

          <button
            type="button"
            className="gov-orgs-back-btn"
            onClick={onBackToFaq}
          >
            ← Back to ICA FAQs
          </button>
        </div>
      </header>

      {/* 3. Main Content Container matching screenshot */}
      <main className="gov-orgs-main-content">
        <div className="gov-orgs-title-block">
          <h1 className="gov-orgs-heading">Government Organisations</h1>
          <p className="gov-orgs-subheading">
            View questions and answers pertaining to the following public agencies:
          </p>
        </div>

        {/* 4. 3-Column Compact Grid of Agency Cards */}
        <div className="gov-orgs-cards-grid">
          {filteredOrgs.map((agency) => (
            <button
              key={agency.id}
              type="button"
              className={`gov-org-card ${agency.isICA ? "is-active-ica" : ""}`}
              onClick={onBackToFaq}
            >
              <div className="gov-org-card-left">
                <AgencyLogo agency={agency} />
              </div>
              <div className="gov-org-card-name">
                <span>{agency.name}</span>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
