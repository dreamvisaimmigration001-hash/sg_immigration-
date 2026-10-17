import React from "react";

export const quickLinksData = [
  {
    id: "qr-clearance-ql",
    title: "QR code for immigration clearance",
    category: "qr-clearance",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#005ea6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
        <line x1="7" y1="7" x2="7.01" y2="7"></line>
        <line x1="17" y1="7" x2="17.01" y2="7"></line>
        <line x1="17" y1="17" x2="17.01" y2="17"></line>
        <line x1="7" y1="17" x2="7.01" y2="17"></line>
      </svg>
    ),
  },
  {
    id: "extend-stay",
    title: "Extend Stay in Singapore",
    category: "stvp",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <line x1="12" y1="14" x2="12" y2="18"></line>
        <line x1="10" y1="16" x2="14" y2="16"></line>
      </svg>
    ),
  },
  {
    id: "apply-visa",
    title: "Apply for Visa",
    category: "visa",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    ),
  },
  {
    id: "submit-sgac",
    title: "Submit Singapore Arrival Card (SGAC)",
    category: "sgac-epass",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
  },
  {
    id: "check-status",
    title: "Check Application Status",
    category: "all",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
  },
  {
    id: "change-address",
    title: "Change of Address in IC",
    category: "ic",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
  },
  {
    id: "apply-passport",
    title: "Apply for Singapore Passport",
    category: "passport",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <circle cx="12" cy="10" r="3"></circle>
        <line x1="8" y1="17" x2="16" y2="17"></line>
      </svg>
    ),
  },
  {
    id: "collect-passport",
    title: "Collect Singapore Passport",
    category: "passport",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
];

export default function QuickLinks() {
  return (
    <div className="faq-quicklinks-wrap">
      <h3 className="faq-section-subtitle">Quick links</h3>
      <div className="faq-quicklinks-grid">
        {quickLinksData.map((item) => (
          <div
            key={item.id}
            className="faq-ql-card not-clickable"
            role="presentation"
            aria-disabled="true"
            tabIndex={-1}
            style={{ cursor: "default", pointerEvents: "none" }}
          >
            <span className="faq-ql-title">{item.title}</span>
            <span className="faq-ql-icon" aria-hidden="true">
              {item.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
