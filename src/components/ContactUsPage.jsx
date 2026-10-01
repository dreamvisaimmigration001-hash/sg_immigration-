import React, { useState } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import FAQSection from "./faq/FAQSection";
import "./ContactUsPage.css";

export default function ContactUsPage({
  onNavigateToCheckpoints,
  onNavigateToStatus,
  onNavigateHome,
  onNavigateToFaqs,
  onNavigateToFeedback,
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
  const [showFaqView, setShowFaqView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState({
    online: true,
    phone: true,
    location: true,
  });

  // Modal states
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  // Form submission states
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Form inputs
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    email: "",
    category: "General Enquiry",
    subject: "",
    message: "",
  });

  const searchSuggestions = [
    { label: "Enquire Visa Application Status", category: "Visa", action: "status" },
    { label: "ICA Services Centre Operating Hours & Location", category: "Location", action: "location" },
    { label: "ICA Call Centre Hotline & Contact Number", category: "Phone", action: "phone" },
    { label: "Submit Feedback or Report Immigration Offender", category: "Feedback", action: "feedback" },
    { label: "Check Land, Air & Sea Checkpoints", category: "Checkpoints", action: "checkpoints" },
  ];

  const filteredSuggestions = searchQuery.trim()
    ? searchSuggestions.filter((s) =>
      s.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : searchSuggestions;

  const toggleAccordion = (section) => {
    setActiveAccordion((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleSuggestionClick = (item) => {
    setSearchQuery(item.label);
    setShowSuggestions(false);
    if (item.action === "status") {
      onNavigateToStatus();
    } else if (item.action === "checkpoints") {
      onNavigateToCheckpoints();
    } else if (item.action === "feedback") {
      setIsFeedbackModalOpen(true);
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    setTimeout(() => {
      // Auto reset after 4 seconds
    }, 4000);
  };

  if (showFaqView) {
    return (
      <div className="site-wrapper askgov-page-view">
        <FAQSection
          onNavigateContact={() => {
            setShowFaqView(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
        <ScrollToTop />
      </div>
    );
  }

  return (
    <div className="site-wrapper contact-us-page-wrapper">
      {/* Singapore Government Masthead */}
      <GovMasthead />

      {/* Official Header */}
      <SiteHeader
        searchQuery=""
        setSearchQuery={() => { }}
        totalMatches={0}
        isSearching={false}
        activeView="contactus"
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
          if (view === "checkstatus" && onNavigateToStatus) return onNavigateToStatus();
          if (view === "feedback" && onNavigateToFeedback) return onNavigateToFeedback();
          if (view === "askgov" && onNavigateToFaqs) return onNavigateToFaqs();
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

      <div id="page-content">
        <div className="main-body">
          <div className="page-content">
            {/* Breadcrumbs */}
            <div className="bread-crumb-wrapper">
              <div className="bread-crumb-wrapper__content">
                <div className="container">
                  <ul className="my-bread-crumbs-content">
                    <li>
                      <a
                        href="#checkpoints"
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigateToCheckpoints();
                        }}
                      >
                        Home
                      </a>
                    </li>
                    <li className="crumb-separator" aria-hidden="true">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </li>
                    <li>
                      <span>Contact Us</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Horizontal e-Services list */}
            <EServicesBar
              activeView="contactus"
              onSelectService={(serviceId) => {
                if (serviceId === "checkstatus") {
                  onNavigateToStatus();
                } else {
                  onNavigateToCheckpoints();
                }
              }}
            />

            {/* Main Contact Us Container */}
            <div className="container container--no-padding">
              {/* Feedback Search & FAQ Section - Pixel accurate to official ICA design */}
              <div className="feedback-search-wrapper">
                <div className="feedback-header">
                  <h2>Contact Us</h2>
                </div>

                <div className="feedback-search-grid">
                  <div className="feedback-search-main">
                    <p className="feedback-lead-text">
                      You may find the answers you need in our website.
                      <br />
                      Try our search box below before contacting us.
                    </p>

                    <div className="feedback-search-input-group">
                      <label className="sr-only" htmlFor="feedbackSearch">
                        Search ICA Website
                      </label>
                      <input
                        className="feedback-search-input"
                        id="feedbackSearch"
                        type="text"
                        placeholder="Search ICA Website"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setShowSuggestions(true);
                        }}
                        onFocus={() => setShowSuggestions(true)}
                      />
                      <button
                        className="btn-feedback-search"
                        type="button"
                        onClick={() => setShowSuggestions(!showSuggestions)}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        </svg>
                        <span>Search</span>
                      </button>

                      {/* Dropdown Suggestions */}
                      {showSuggestions && (
                        <div className="feedback-suggestions-dropdown">
                          <ul>
                            {filteredSuggestions.map((item, idx) => (
                              <li key={idx} onClick={() => handleSuggestionClick(item)}>
                                <span className="cat-badge">{item.category}</span>
                                <span>{item.label}</span>
                              </li>
                            ))}
                          </ul>
                          <a
                            href="#"
                            className="view-all-results"
                            onClick={(e) => {
                              e.preventDefault();
                              setShowSuggestions(false);
                            }}
                          >
                            Close suggestions
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="feedback-search-faq">
                    <p className="faq-lead-text">
                      Alternatively, check out our
                      <br />
                      <strong>Frequently Asked Questions (FAQs)</strong>.
                    </p>
                    <button
                      type="button"
                      className="btn-browse-faqs"
                      onClick={() => {
                        if (onNavigateToFaqs) {
                          onNavigateToFaqs();
                        } else {
                          setShowFaqView(true);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                    >
                      <span>Browse FAQs</span>
                      <span className="faq-arrow-icon">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Contact Us Tables / Accordions */}
              <div className="contact-us">
                {/* 1. ONLINE SECTION */}
                <h3 className="contact-section-header">
                  <svg className="contact-cat-icon" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#910048" strokeWidth="2.2">
                    <rect x="3" y="4" width="18" height="12" rx="1.5" />
                    <path d="M1 19h22" strokeLinecap="round" strokeWidth="2.5" />
                  </svg>
                  <span>Online</span>
                </h3>

                <div className="k-table-wrap">
                  <table className="greyBlue k-table">
                    <tbody>
                      <tr className="accordion-header" onClick={() => toggleAccordion("online")}>
                        <th data-role="resizable">
                          <div className="accordion-header__title">
                            <span>ICA Feedback Form</span>
                            <span className={`accordion-chevron ${activeAccordion.online ? "open" : ""}`}>▲</span>
                          </div>
                        </th>
                      </tr>
                      {activeAccordion.online && (
                        <tr className="accordion-content">
                          <td>
                            <p>
                              Please complete the{" "}
                              <a
                                href="#feedback-form"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setIsFeedbackModalOpen(true);
                                }}
                              >
                                enquiry form
                              </a>{" "}
                              in English. You may also use this form to seek technical assistance on our e-Services and
                              provide information against Immigration Offenders (illegal immigrant, overstayer,
                              suspected marriage of convenience) and their related activities.
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* 2. PHONE SECTION */}
                <h3 className="contact-section-header">
                  <svg className="contact-cat-icon" width="28" height="28" viewBox="0 0 24 24" fill="#910048">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  <span>Phone</span>
                </h3>

                <div className="k-table-wrap">
                  <table className="grey k-table">
                    <tbody>
                      <tr className="accordion-header" onClick={() => toggleAccordion("phone")}>
                        <th data-role="resizable">
                          <div className="accordion-header__title">
                            <span>ICA Call Centre</span>
                            <span className={`accordion-chevron ${activeAccordion.phone ? "open" : ""}`}>▲</span>
                          </div>
                        </th>
                      </tr>
                      {activeAccordion.phone && (
                        <tr className="accordion-content">
                          <td>
                            <p>
                              For enquiries relating to ICA products and services. Includes an informational 24-hour
                              automated answering service.
                            </p>
                            <p style={{ marginTop: "0.5rem" }}>
                              Tel: 6391 6100
                            </p>
                            <p style={{ marginTop: "0.5rem" }}>
                              <strong>Operating Hours </strong>
                              <br />
                              Mondays to Fridays: 8.00 am to 5.30 pm
                              <br />
                              Closed on Saturdays, Sundays and Public Holidays
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* 3. LOCATION SECTION */}
                <h3 className="contact-section-header">
                  <svg className="contact-cat-icon" width="28" height="28" viewBox="0 0 24 24" fill="#910048">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>Location</span>
                </h3>

                <div className="k-table-wrap">
                  <table className="greyBlue k-table">
                    <tbody>
                      <tr className="accordion-header" onClick={() => toggleAccordion("location")}>
                        <th data-role="resizable">
                          <div className="accordion-header__title">
                            <span>ICA Services Centre & Checkpoints</span>
                            <span className={`accordion-chevron ${activeAccordion.location ? "open" : ""}`}>▼</span>
                          </div>
                        </th>
                      </tr>
                      {activeAccordion.location && (
                        <tr className="accordion-content">
                          <td>
                            <div className="location-table-row">
                              <div className="location-col">
                                <h4 style={{ color: "#141b4d", marginBottom: "0.5rem", fontWeight: 700 }}>
                                  ICA Services Centre
                                </h4>
                                <div className="ica-notice-box">
                                  <span>Members of the public are strongly encouraged to use ICA's e-Services available at </span>
                                  <a
                                    href="https://eservices.ica.gov.sg/icsbip"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    MyICA
                                  </a>
                                  .
                                </div>
                                <p>
                                  Immigration &amp; Checkpoints Authority
                                  <br />
                                  ICA Services Centre
                                  <br />
                                  2 Crawford Street
                                  <br />
                                  Singapore 207218
                                </p>
                                <p style={{ marginTop: "0.5rem" }}>
                                  (next to Lavender MRT.{" "}
                                  <a
                                    href="#map"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setIsMapModalOpen(true);
                                    }}
                                  >
                                    View map
                                  </a>
                                  )
                                </p>
                                <p style={{ marginTop: "0.75rem" }}>
                                  <strong>Operating Hours </strong>
                                  <br />
                                  Mondays to Fridays: 8.00 am to 4.30 pm
                                  <br />
                                  Closed on Saturdays, Sundays and Public Holidays
                                </p>
                                <br />
                                <p style={{ marginTop: "0.75rem" }}>
                                  Please plan your visit to ICA accordingly.
                                  <br />
                                  <strong>Note:</strong> You can refer to <a href="https://www.ica.gov.sg/visit-ica">Visiting the ICA Services Centre</a> page for more information.
                                </p>
                              </div>

                              <div className="location-col" style={{ borderLeft: "1px solid #e2e8f0", paddingLeft: "1.5rem" }}>

                                <p>
                                  Refer to{" "}
                                  <a
                                    href="#checkpoints"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      onNavigateToCheckpoints();
                                    }}
                                  >
                                    contact details of our checkpoints
                                  </a>
                                  .
                                </p>

                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
          if (view === "feedback" && onNavigateToFeedback) return onNavigateToFeedback();
          if (view === "checkpoints" && onNavigateToCheckpoints) return onNavigateToCheckpoints();
          if (view === "checkstatus" && onNavigateToStatus) return onNavigateToStatus();
          if (view === "askgov" && onNavigateToFaqs) return onNavigateToFaqs();
          if (view === "reach" && onNavigateToReach) return onNavigateToReach();
          window.location.hash = "#" + view;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* MODAL 2: Online Feedback Form */}
      {isFeedbackModalOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsFeedbackModalOpen(false)}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="contact-modal-header">
              <h3>📝 ICA Online Enquiry & Feedback Form</h3>
              <button className="btn-close-modal" onClick={() => setIsFeedbackModalOpen(false)}>
                &times;
              </button>
            </div>
            <div className="contact-modal-body">
              {feedbackSubmitted ? (
                <div className="success-banner">
                  <h4>✅ Enquiry Submitted Successfully</h4>
                  <p>Thank you for contacting ICA. Your ticket reference is <strong>ICA-FB-{Math.floor(100000 + Math.random() * 900000)}</strong>.</p>
                  <p style={{ fontSize: "0.9rem" }}>We will respond to your enquiry via email within 3 working days.</p>
                  <button
                    type="button"
                    className="btn-primary-action"
                    style={{ marginTop: "1rem" }}
                    onClick={() => {
                      setFeedbackSubmitted(false);
                      setIsFeedbackModalOpen(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFeedbackSubmit}>
                  <div className="form-group-contact">
                    <label>Category *</label>
                    <select
                      value={feedbackData.category}
                      onChange={(e) => setFeedbackData({ ...feedbackData, category: e.target.value })}
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Visa & Visit Pass Queries">Visa & Visit Pass Queries</option>
                      <option value="Passport & IC Queries">Passport & IC Queries</option>
                      <option value="e-Services Technical Support">e-Services Technical Support</option>
                      <option value="Report Immigration Offender (Tip-off)">Report Immigration Offender (Confidential)</option>
                    </select>
                  </div>

                  <div className="form-row-two">
                    <div className="form-group-contact">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={feedbackData.name}
                        onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group-contact">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={feedbackData.email}
                        onChange={(e) => setFeedbackData({ ...feedbackData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group-contact">
                    <label>Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="Brief subject of your query"
                      value={feedbackData.subject}
                      onChange={(e) => setFeedbackData({ ...feedbackData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group-contact">
                    <label>Message / Details *</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Provide detailed description of your query or tip-off..."
                      value={feedbackData.message}
                      onChange={(e) => setFeedbackData({ ...feedbackData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.75rem", marginTop: "1rem" }}>
                    <button
                      type="button"
                      className="btn-secondary-action"
                      onClick={() => setIsFeedbackModalOpen(false)}
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary-action">
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 4: Location Map */}
      {isMapModalOpen && (
        <div className="contact-modal-overlay" onClick={() => setIsMapModalOpen(false)}>
          <div className="contact-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="contact-modal-header">
              <h3>📍 ICA Services Centre Location</h3>
              <button className="btn-close-modal" onClick={() => setIsMapModalOpen(false)}>
                &times;
              </button>
            </div>
            <div className="contact-modal-body">
              <div style={{ background: "#e2e8f0", height: "260px", borderRadius: "8px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "#334155", textAlign: "center", padding: "1rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🗺️</div>
                <h4 style={{ fontWeight: 700 }}>ICA Services Centre (Lavender)</h4>
                <p style={{ fontSize: "0.9rem" }}>2 Crawford Street, Singapore 207218</p>
                <p style={{ fontSize: "0.85rem", color: "#64748b" }}>MRT: Lavender Station (EW11) - Exit A</p>
                <a
                  href="https://www.onemap.gov.sg/?lat=1.3072199&lng=103.86350838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-book-slot"
                  style={{ marginTop: "0.75rem" }}
                >
                  Open in OneMap Singapore ↗
                </a>
              </div>
              <div style={{ marginTop: "1rem", textAlign: "right" }}>
                <button
                  type="button"
                  className="btn-secondary-action"
                  onClick={() => setIsMapModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
