import React from "react";

export const faqCategoriesList = [
  {
    id: "all",
    label: "All topics",
    subtopics: [],
  },
  {
    id: "citizenship-pr-ltvp",
    label: "Apply for Citizenship/ Permanent Residence/ Long Term Visit Pass",
    subtopics: ["Appeals", "General", "Citizenship", "Permanent Residence (PR)", "LTVP/LTVP+"],
  },
  {
    id: "stp",
    label: "Student's Pass (STP)",
    subtopics: ["General", "Application", "Digital STP", "Payment", "Short Course", "Loss of Valid Student's Pass Card", "Update Passport Details For STP Holder"],
  },
  {
    id: "cof",
    label: "Completion of Formalities (COF)",
    subtopics: ["LTVP/ LTVP+", "Student's Pass", "Citizenship", "PR", "General"],
  },
  {
    id: "pr-rep",
    label: "PR and Re-Entry Permit Related Matters",
    subtopics: ["Apply for/ Renew/ Transfer Re-Entry Permit (REP)", "Renunciation of PR", "Certificate of Identity", "Appointment"],
  },
  {
    id: "birth-death",
    label: "Birth and Death Registration",
    subtopics: ["Birth Registration Process", "Death Registration Process", "General", "Stillbirth Registration Process", "Double-Barrelled Race", "Change of Particulars", "Extract", "Verification of Digital Certificate"],
  },
  {
    id: "visa",
    label: "Visa",
    subtopics: ["General", "Application", "Visa Validity", "Entry", "Payment", "Application Outcome", "Processing Time"],
  },
  {
    id: "abtc",
    label: "APEC Business Travel Card (ABTC)",
    subtopics: ["General", "Application", "Collection", "Payment", "Cancellation of Card", "Eligibility", "Technical Enquiries"],
  },
  {
    id: "citizenship-matters",
    label: "Singapore Citizenship Related Matters",
    subtopics: ["Renunciation of Singapore Citizenship", "Oath-Taking for Minors", "Confirmation of Singapore Citizenship Status", "Right of Entry (ROE)", "Loss of Citizenship Certificate"],
  },
  {
    id: "sgac-epass",
    label: "SG Arrival Card (SGAC) and Electronic Visit Pass (e-Pass)",
    subtopics: ["General", "Electronic Visit Pass (e-Pass)", "Technical Assistance"],
  },
  {
    id: "travellers",
    label: "Travellers",
    subtopics: ["General", "Entry", "GST Enquiries", "Exit"],
  },
  {
    id: "cargo",
    label: "Cargo Clearance",
    subtopics: ["General", "Import", "Paperless Clearance for Conventional Cargo", "Export"],
  },
  {
    id: "qr-clearance",
    label: "QR Code Clearance",
    subtopics: ["General", "Before your trip", "Immigration Clearance"],
  },
  {
    id: "stvp",
    label: "Short-Term Visit Pass (STVP)",
    subtopics: ["General", "Extension of STVP"],
  },
  {
    id: "ic",
    label: "Identity Card (IC)",
    subtopics: ["General", "Re-registration at 30/55 years old", "Change of Address", "Loss of IC"],
  },
  {
    id: "passport",
    label: "Passport",
    subtopics: ["General", "Passport Renewal", "Passport Collection", "Damaged/Lost Passport"],
  },
  {
    id: "auto-clearance",
    label: "Automated Clearance",
    subtopics: ["Motorbikes Lane", "Passenger Hall"],
  },
];

export default function FAQCategories({
  selectedCategory,
  onSelectCategory,
  expandedCategory,
  onToggleCategory,
  onSelectSubtopic,
}) {
  return (
    <aside className="askgov-topics-card-sidebar" aria-label="FAQ Topics">
      <div className="askgov-topics-card-header">
        <h2 className="askgov-topics-card-title">Topics</h2>
      </div>

      <div className="askgov-topics-scroll-container">
        <div className="askgov-topics-list">
          {faqCategoriesList.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const isExpanded = expandedCategory === cat.id;
            const hasSubtopics = cat.subtopics && cat.subtopics.length > 0;

            return (
              <div key={cat.id} className="askgov-topic-group">
                <button
                  type="button"
                  className={`askgov-topic-item-btn ${isSelected ? "selected" : ""}`}
                  onClick={() => {
                    onSelectCategory(cat.id);
                    if (hasSubtopics) onToggleCategory(cat.id);
                  }}
                >
                  <span className="askgov-topic-label">{cat.label}</span>
                  {hasSubtopics && (
                    <svg
                      className={`askgov-topic-chevron ${isExpanded ? "rotated" : ""}`}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  )}
                </button>

                {hasSubtopics && isExpanded && (
                  <ul className="askgov-subtopics-list">
                    {cat.subtopics.map((sub, sIdx) => (
                      <li key={sIdx}>
                        <button
                          type="button"
                          className="askgov-subtopic-btn"
                          onClick={() => onSelectSubtopic(cat.id, sub)}
                        >
                          {sub}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
