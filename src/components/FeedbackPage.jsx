import React, { useState, useRef } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import SiteFooter from "./SiteFooter";
import "./FeedbackPage.css";

// Exact ID card icon as in the official Singapore ICA screenshot
const IdCardIcon = () => (
  <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
    <rect width="44" height="32" rx="4" fill="#15243b" />
    <circle cx="12" cy="11" r="3.5" fill="#ffffff" />
    <path d="M6.5 22C6.5 18.5 9 17 12 17C15 17 17.5 18.5 17.5 22" fill="#ffffff" />
    <rect x="22" y="9" width="16" height="2.5" rx="1.25" fill="#ffffff" />
    <rect x="22" y="15" width="16" height="2.5" rx="1.25" fill="#ffffff" />
    <rect x="22" y="21" width="10" height="2.5" rx="1.25" fill="#ffffff" />
  </svg>
);

const DocApplicationIcon = () => (
  <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
    <rect width="44" height="32" rx="4" fill="#15243b" />
    <path d="M14 8H30V24H14V8Z" fill="#ffffff" fillOpacity="0.2" />
    <rect x="12" y="7" width="20" height="18" rx="2" stroke="#ffffff" strokeWidth="2" fill="none" />
    <line x1="16" y1="12" x2="28" y2="12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="16" x2="28" y2="16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="20" x2="24" y2="20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const TravelIcon = () => (
  <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
    <rect width="44" height="32" rx="4" fill="#15243b" />
    <path d="M22 8L27 15H33L29 18L31 24L22 20L13 24L15 18L11 15H17L22 8Z" fill="#ffffff" />
  </svg>
);

const StudentPassIcon = () => (
  <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
    <rect width="44" height="32" rx="4" fill="#15243b" />
    <path d="M22 8L10 14L22 20L34 14L22 8Z" fill="#ffffff" />
    <path d="M14 16.5V22C14 24.5 17.5 25.5 22 25.5C26.5 25.5 30 24.5 30 22V16.5" stroke="#ffffff" strokeWidth="1.8" fill="none" />
    <line x1="33" y1="14" x2="33" y2="23" stroke="#ffffff" strokeWidth="1.8" />
  </svg>
);

const ServiceFeedbackIcon = () => (
  <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
    <rect width="44" height="32" rx="4" fill="#15243b" />
    <path d="M12 9H32C33.1 9 34 9.9 34 11V21C34 22.1 33.1 23 32 23H17L12 27V11C12 9.9 12.9 9 14 9Z" fill="#ffffff" />
    <circle cx="18" cy="16" r="1.5" fill="#15243b" />
    <circle cx="23" cy="16" r="1.5" fill="#15243b" />
    <circle cx="28" cy="16" r="1.5" fill="#15243b" />
  </svg>
);

const OffenderIcon = () => (
  <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
    <rect width="44" height="32" rx="4" fill="#15243b" />
    <path d="M22 6L32 10V16C32 22 27.5 26 22 27C16.5 26 12 22 12 16V10L22 6Z" stroke="#ffffff" strokeWidth="2" fill="none" />
    <line x1="22" y1="12" x2="22" y2="17" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    <circle cx="22" cy="21" r="1.2" fill="#ffffff" />
  </svg>
);

const OthersIcon = () => (
  <svg width="44" height="32" viewBox="0 0 44 32" fill="none">
    <rect width="44" height="32" rx="4" fill="#15243b" />
    <circle cx="22" cy="16" r="9" stroke="#ffffff" strokeWidth="2" fill="none" />
    <path d="M19.5 13.5C19.5 12 20.5 11 22 11C23.5 11 24.5 12 24.5 13.5C24.5 15 23 15.5 22 16.5V18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    <circle cx="22" cy="21.5" r="1.2" fill="#ffffff" />
  </svg>
);

export default function FeedbackPage({
  onNavigateHome,
  onNavigateContact,
  onNavigateStatus,
  onNavigateFaqs,
  onNavigateToCheckpoints,
  onNavigateToReach,
  onNavigateToVisionMissionValues,
  onNavigateToDocuments,
  onNavigateToEnterTransitDepart,
  onNavigateToReside,
  onNavigateToEServicesForms,
  onNavigateToOurPeople,
  onNavigateToAwardsAccolades,
  onNavigateToOurServiceCommitment,
  onNavigateToNewsroom,
  onNavigateToPublications,
  onNavigateToStatistics,
  onNavigateToPublicEducation,
  onNavigate,
}) {
  const [openSections, setOpenSections] = useState({
    passport: true,
    citizenship: true,
    passes: true,
    travel: true,
    others: true,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Singapore Passport");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    idNumber: "",
    subject: "",
    message: "",
  });

  const sectionRefs = {
    passport: useRef(null),
    citizenship: useRef(null),
    passes: useRef(null),
    travel: useRef(null),
    others: useRef(null),
  };

  const categories = [
    {
      id: "passport",
      title: "Singapore Passport and Identity Card",
      cards: [
        {
          id: "passport-card",
          title: "Singapore Passport",
          icon: <IdCardIcon />,
        },
        {
          id: "ic-card",
          title: "Singapore Identity Card",
          icon: <IdCardIcon />,
        },
      ],
    },
    {
      id: "citizenship",
      title: "Citizenship and Permanent Residence",
      cards: [
        {
          id: "citizenship-card",
          title: "Singapore Citizenship",
          icon: <DocApplicationIcon />,
        },
        {
          id: "pr-card",
          title: "Permanent Residence",
          icon: <DocApplicationIcon />,
        },
        {
          id: "rep-card",
          title: "Re-Entry Permit",
          icon: <DocApplicationIcon />,
        },
      ],
    },
    {
      id: "passes",
      title: "Long-Term Passes",
      cards: [
        {
          id: "ltvp-card",
          title: "Long-Term Visit Pass",
          icon: <DocApplicationIcon />,
        },
        {
          id: "student-card",
          title: "Student's Pass",
          icon: <StudentPassIcon />,
        },
      ],
    },
    {
      id: "travel",
      title: "Travel Information, Entry and Extension of Stay",
      cards: [
        {
          id: "sgac-card",
          title: "Travel Information (e.g. SG Arrival Card)",
          icon: <TravelIcon />,
        },
        {
          id: "visa-card",
          title: "Entry Visa",
          icon: <DocApplicationIcon />,
        },
        {
          id: "stvp-card",
          title: "Extension of Stay/Short-Term Visit Pass",
          icon: <DocApplicationIcon />,
        },
        {
          id: "abtc-card",
          title: "APEC Business Travel Card",
          icon: <IdCardIcon />,
        },
      ],
    },
    {
      id: "others",
      title: "Others",
      description:
        'For reporting or providing information against immigration offenders and related activities (illegal immigrant, overstayer, suspected marriage of convenience, etc), please select "Reporting of Immigration Offenders".',
      cards: [
        {
          id: "births-deaths-card",
          title: "Births and Deaths",
          icon: <DocApplicationIcon />,
        },
        {
          id: "service-feedback-card",
          title: "Service Feedback",
          icon: <ServiceFeedbackIcon />,
        },
        {
          id: "offenders-card",
          title: "Reporting of Immigration Offenders",
          icon: <OffenderIcon />,
        },
        {
          id: "lost-items-card",
          title: "Lost Items at Land Checkpoints",
          icon: <DocApplicationIcon />,
        },
        {
          id: "others-scams-card",
          title: "Others (e.g. Reporting of Scams Related to ICA Services/Facilities)",
          icon: <OthersIcon />,
        },
        {
          id: "qsm-card",
          title: "ICA Quality Service Manager (QSM)",
          icon: <DocApplicationIcon />,
        },
      ],
    },
  ];

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleScrollToSection = (sectionId) => {
    // Ensure section is open
    setOpenSections((prev) => ({ ...prev, [sectionId]: true }));
    const target = sectionRefs[sectionId]?.current;
    if (target) {
      const topOffset = target.offsetTop - 140;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const handleCardClick = (e, cardTitle) => {
    e.preventDefault();
    setSelectedCategory(cardTitle);
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedRef = "ICA-FB-" + Math.floor(100000 + Math.random() * 900000);
    setReferenceId(generatedRef);
    setIsSubmitted(true);
  };

  return (
    <div className="feedback-page-wrapper">
      {/* Singapore Government Masthead */}
      <GovMasthead />

      {/* Official Site Header */}
      <SiteHeader
        activeView="feedback"
        onNavigate={(view) => {
          if (onNavigate) {
            onNavigate(view);
            return;
          }
          if (view === "newsroom" && onNavigateToNewsroom) return onNavigateToNewsroom();
          if (view === "publications" && onNavigateToPublications) return onNavigateToPublications();
          if (view === "statistics" && onNavigateToStatistics) return onNavigateToStatistics();
          if (view === "public-education" && onNavigateToPublicEducation) return onNavigateToPublicEducation();
          if (view === "checkpoints" && onNavigateToCheckpoints) return onNavigateToCheckpoints();
          if (view === "contactus" && onNavigateContact) return onNavigateContact();
          if (view === "checkstatus" && onNavigateStatus) return onNavigateStatus();
          if (view === "askgov" && onNavigateFaqs) return onNavigateFaqs();
          if (view === "reach" && onNavigateToReach) return onNavigateToReach();
          if (view === "vision-mission-values" && onNavigateToVisionMissionValues) return onNavigateToVisionMissionValues();
          if (view === "documents" && onNavigateToDocuments) return onNavigateToDocuments();
          if (view === "enter-transit-depart" && onNavigateToEnterTransitDepart) return onNavigateToEnterTransitDepart();
          if (view === "reside" && onNavigateToReside) return onNavigateToReside();
          if (view === "eservicesandforms" && onNavigateToEServicesForms) return onNavigateToEServicesForms();
          if (view === "our-people" && onNavigateToOurPeople) return onNavigateToOurPeople();
          if (view === "awards-accolades" && onNavigateToAwardsAccolades) return onNavigateToAwardsAccolades();
          if (view === "our-service-commitment" && onNavigateToOurServiceCommitment) return onNavigateToOurServiceCommitment();
          window.location.hash = "#" + view;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <div className="feedback-page-main">
        {/* Breadcrumb banner */}
        <Breadcrumbs
          activeView="feedback"
          onNavigate={(view) => {
            if (onNavigate) return onNavigate(view);
            if (view === "checkpoints" && onNavigateToCheckpoints) return onNavigateToCheckpoints();
            window.location.hash = "#" + view;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        {/* e-Services bar */}
        <EServicesBar
          activeView="feedback"
          onSelectService={(serviceId) => {
            if (serviceId === "identity" || serviceId === "documents") {
              if (onNavigateToDocuments) onNavigateToDocuments();
              else if (onNavigate) onNavigate("documents");
              else window.location.hash = "#documents";
            } else if (serviceId === "eservicesandforms" || serviceId === "eservices") {
              if (onNavigateToEServicesForms) onNavigateToEServicesForms();
              else if (onNavigate) onNavigate("eservicesandforms");
              else window.location.hash = "#eservicesandforms";
            } else if (serviceId === "enter-transit-depart") {
              if (onNavigateToEnterTransitDepart) onNavigateToEnterTransitDepart();
              else if (onNavigate) onNavigate("enter-transit-depart");
              else window.location.hash = "#enter-transit-depart";
            } else if (serviceId === "reside") {
              if (onNavigateToReside) onNavigateToReside();
              else if (onNavigate) onNavigate("reside");
              else window.location.hash = "#reside";
            } else if (serviceId === "checkstatus") {
              if (onNavigateStatus) onNavigateStatus();
              else if (onNavigate) onNavigate("checkstatus");
              else window.location.hash = "#status";
            } else {
              if (onNavigateToCheckpoints) onNavigateToCheckpoints();
              else if (onNavigate) onNavigate("checkpoints");
              else window.location.hash = "#checkpoints";
            }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        {/* Main Content Container */}
        <div className="feedback-container">
          <div className="feedback-page-title-wrap">
            <h1 className="feedback-page-title">Feedback</h1>
          </div>

          <hr className="feedback-divider" />

          {/* Quicklinks Navigation (matching screenshot text links, non-clickable) */}
          <nav className="feedback-quicklinks-nav" aria-label="Feedback Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className="feedback-quicklink-btn not-clickable"
                disabled
                tabIndex={-1}
                style={{ pointerEvents: "none", cursor: "default" }}
              >
                {cat.title}
              </button>
            ))}
          </nav>

          {/* Intro & Instructions */}
          <div className="feedback-intro-text-block">
            <p className="feedback-intro-notice">
              Please complete all fields in the form in English and ensure all your submitted particulars are correct.
            </p>
            <p className="feedback-intro-sla">
              We target to respond to you within three working days. We will get in touch with you should we need a longer time to look into your feedback/enquiry.
            </p>
            <p className="feedback-choose-prompt">Please choose a category:</p>
          </div>

          {/* Category Accordions */}
          <div className="feedback-accordion-group">
            {categories.map((cat) => {
              const isOpen = openSections[cat.id];
              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  ref={sectionRefs[cat.id]}
                  className="feedback-accordion-item"
                >
                  <button
                    type="button"
                    className="feedback-accordion-header"
                    onClick={() => toggleSection(cat.id)}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className={`feedback-accordion-chevron ${isOpen ? "" : "collapsed"}`}
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                    <span>{cat.title}</span>
                  </button>

                  {isOpen && (
                    <div className="feedback-accordion-content">
                      {cat.description && (
                        <p className="feedback-accordion-desc">{cat.description}</p>
                      )}

                      <div className="feedback-cards-grid">
                        {cat.cards.map((card) => (
                          <a
                            key={card.id}
                            href="#feedback-form"
                            className="feedback-card-link"
                            onClick={(e) => handleCardClick(e, card.title)}
                          >
                            <div className="feedback-card-icon-wrap">{card.icon}</div>
                            <div className="feedback-card-title">{card.title}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top */}
      <ScrollToTop />

      {/* Official Footer */}
      <SiteFooter
        onNavigate={(view) => {
          if (onNavigate) {
            onNavigate(view);
            return;
          }
          if (view === "contactus" && onNavigateContact) return onNavigateContact();
          if (view === "checkpoints" && onNavigateToCheckpoints) return onNavigateToCheckpoints();
          if (view === "checkstatus" && onNavigateStatus) return onNavigateStatus();
          if (view === "askgov" && onNavigateFaqs) return onNavigateFaqs();
          if (view === "reach" && onNavigateToReach) return onNavigateToReach();
          window.location.hash = "#" + view;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* Feedback Submission Modal */}
      {isModalOpen && (
        <div className="fb-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="fb-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="fb-modal-header">
              <h3>📝 Feedback & Enquiry: {selectedCategory}</h3>
              <button
                type="button"
                className="fb-modal-close-btn"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
            </div>

            <div className="fb-modal-body">
              {isSubmitted ? (
                <div className="fb-success-banner">
                  <div className="fb-success-icon">✅</div>
                  <h4>Enquiry / Feedback Submitted</h4>
                  <p>Thank you for submitting your enquiry to the Immigration &amp; Checkpoints Authority.</p>
                  <div className="fb-ref-badge">Reference ID: {referenceId}</div>
                  <p style={{ fontSize: "0.875rem", color: "#64748b" }}>
                    An automated acknowledgment has been sent to <strong>{formData.email}</strong>. Our officers target to respond within 3 working days.
                  </p>
                  <button
                    type="button"
                    className="fb-btn-submit"
                    style={{ marginTop: "16px" }}
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="fb-form-group">
                    <label>Selected Category</label>
                    <input
                      type="text"
                      disabled
                      value={selectedCategory}
                      style={{ background: "#f8fafc", color: "#64748b" }}
                    />
                  </div>

                  <div className="fb-form-row">
                    <div className="fb-form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="As in NRIC / Passport"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="fb-form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="fb-form-row">
                    <div className="fb-form-group">
                      <label>Contact Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+65 9123 4567"
                        value={formData.contactNumber}
                        onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      />
                    </div>
                    <div className="fb-form-group">
                      <label>NRIC / FIN / Passport No. (Optional)</label>
                      <input
                        type="text"
                        placeholder="e.g. S1234567A"
                        value={formData.idNumber}
                        onChange={(e) => setFormData({ ...formData, idNumber: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="fb-form-group">
                    <label>Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="Summary of your feedback / enquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="fb-form-group">
                    <label>Message / Details *</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Please provide full details in English..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="fb-form-actions">
                    <button
                      type="button"
                      className="fb-btn-cancel"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="fb-btn-submit">
                      Submit Feedback
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
