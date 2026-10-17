import React, { useState, useRef } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import "./UserResearchPage.css";

export default function UserResearchPage({
  onNavigateToCheckpoints,
  onNavigateToStatus,
  onNavigateToContact,
  onNavigateHome,
  onNavigateToFeedback,
  onNavigateToFaqs,
  onNavigateToDocuments,
  onNavigateToEnterTransitDepart,
  onNavigateToReside,
  onNavigateToEServicesForms,
  onNavigateToOurPeople,
  onNavigateToAwardsAccolades,
  onNavigateToVisionMissionValues,
  onNavigateToOurServiceCommitment,
  onNavigateToNewsroom,
  onNavigateToPublications,
  onNavigateToStatistics,
  onNavigateToPublicEducation,
  onNavigateToJoinUs,
  onNavigateToScholarships,
  onNavigateToMeetOurOfficers,
  onNavigateToCareerFaqs,
  onNavigate,
}) {
  const [openSection0, setOpenSection0] = useState(true);
  const [openSection1, setOpenSection1] = useState(true);

  const section0Ref = useRef(null);
  const section1Ref = useRef(null);

  const gotoCollapseElement = (index) => {
    if (index === 0) {
      setOpenSection0(true);
      if (section0Ref.current) {
        section0Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else if (index === 1) {
      setOpenSection1(true);
      if (section1Ref.current) {
        section1Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleGlobalNavigate = (view) => {
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
    if (view === "contactus" && onNavigateToContact) return onNavigateToContact();
    if (view === "feedback" && onNavigateToFeedback) return onNavigateToFeedback();
    if (view === "askgov" && onNavigateToFaqs) return onNavigateToFaqs();
    if (view === "documents" && onNavigateToDocuments) return onNavigateToDocuments();
    if (view === "enter-transit-depart" && onNavigateToEnterTransitDepart) return onNavigateToEnterTransitDepart();
    if (view === "reside" && onNavigateToReside) return onNavigateToReside();
    if (view === "eservicesandforms" && onNavigateToEServicesForms) return onNavigateToEServicesForms();
    if (view === "our-people" && onNavigateToOurPeople) return onNavigateToOurPeople();
    if (view === "awards-accolades" && onNavigateToAwardsAccolades) return onNavigateToAwardsAccolades();
    if (view === "vision-mission-values" && onNavigateToVisionMissionValues) return onNavigateToVisionMissionValues();
    if (view === "our-service-commitment" && onNavigateToOurServiceCommitment) return onNavigateToOurServiceCommitment();
    if (view === "join-us" && onNavigateToJoinUs) return onNavigateToJoinUs();
    if (view === "scholarships" && onNavigateToScholarships) return onNavigateToScholarships();
    if (view === "meet-our-officers" && onNavigateToMeetOurOfficers) return onNavigateToMeetOurOfficers();
    if (view === "career-faqs" && onNavigateToCareerFaqs) return onNavigateToCareerFaqs();
    window.location.hash = "#" + view;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-wrapper user-research-page-wrapper">
      {/* Singapore Government Masthead */}
      <GovMasthead />

      {/* Official Header */}
      <SiteHeader
        searchQuery=""
        setSearchQuery={() => {}}
        totalMatches={0}
        isSearching={false}
        activeView="user-research"
        onNavigate={handleGlobalNavigate}
      />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content">
            {/* Breadcrumbs: Home > User Research */}
            <div>
              <div className="bread-crumb-wrapper">
                <div
                  id="Main_TEA44200C001_Col00"
                  className="sf_colsIn"
                  data-sf-element="Breadcrumbs"
                  data-placeholder-label="Breadcrumbs"
                >
                  <Breadcrumbs
                    activeView="user-research"
                    onNavigate={handleGlobalNavigate}
                  />
                </div>
              </div>
            </div>

            {/* Horizontal e-Services Bar */}
            <EServicesBar
              activeView="user-research"
              onSelectService={(serviceId) => {
                if (serviceId === "checkstatus") {
                  if (onNavigateToStatus) onNavigateToStatus();
                  else handleGlobalNavigate("checkstatus");
                } else if (serviceId === "identity" || serviceId === "documents") {
                  if (onNavigateToDocuments) onNavigateToDocuments();
                  else handleGlobalNavigate("documents");
                } else if (serviceId === "enter-transit-depart") {
                  if (onNavigateToEnterTransitDepart) onNavigateToEnterTransitDepart();
                  else handleGlobalNavigate("enter-transit-depart");
                } else if (serviceId === "reside") {
                  if (onNavigateToReside) onNavigateToReside();
                  else handleGlobalNavigate("reside");
                } else if (serviceId === "eservicesandforms") {
                  if (onNavigateToEServicesForms) onNavigateToEServicesForms();
                  else handleGlobalNavigate("eservicesandforms");
                }
              }}
            />

            <div className="container container--no-padding">
              {/* Page Title */}
              <h1 className="my-bread-crumbs-title">
                <span
                  id="Main_TEA44200C001_Col01"
                  className="sf_colsIn"
                  data-sf-element="Page Title"
                  data-placeholder-label="Page Title"
                >
                  <span>User Research</span>
                </span>
              </h1>

              <hr />

              {/* Quicklinks Nav (Non-clickable) */}
              <nav className="section-nav sticky" id="quicklinks-section" aria-label="Quicklinks">
                <button
                  type="button"
                  className="quicklinks-item not-clickable"
                  disabled
                  tabIndex={-1}
                  style={{ pointerEvents: "none", cursor: "default" }}
                  title="You Do Not Need to Be an Expert"
                >
                  You Do Not Need to Be an Expert
                </button>
                <button
                  type="button"
                  className="quicklinks-item not-clickable"
                  disabled
                  tabIndex={-1}
                  style={{ pointerEvents: "none", cursor: "default" }}
                  title="How It Works"
                >
                  How It Works
                </button>
              </nav>

              <div className="standard-content">
                {/* Banner linking to FormSG registration */}
                <div
                  id="Main_TEA44200C001_Col02"
                  className="sf_colsIn article"
                  data-placeholder-label="Standard Content"
                  data-sf-element="Standard Content"
                >
                  <a
                    href="https://form.gov.sg/61090d0741dbd20012310487"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="user-research-banner-link"
                    title="Join ICA Customer Experience Panel"
                  >
                    <img
                      src="/assets/ica_cx_panel_banner.png"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://www.ica.gov.sg/images/default-source/ica-images/contents/ica_cx_panel_banner_v2_lowres_1750x438.png?sfvrsn=7375290a_5";
                      }}
                      alt="Join ICA Customer Experience Panel"
                      title="Join ICA Customer Experience Panel"
                      className="user-research-banner-img"
                    />
                  </a>
                </div>

                {/* Section 1: You Do Not Need to Be an Expert */}
                <div className="collapse-wrapper" ref={section0Ref}>
                  <div
                    id="Main_TEA44200C001_Col03"
                    className="sf_colsIn"
                    data-sf-element="Accordion Title"
                    data-placeholder-label="Accordion Title"
                  >
                    <div
                      className={`collapse-title accordion ${openSection0 ? "active" : ""}`}
                      onClick={() => setOpenSection0(!openSection0)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpenSection0(!openSection0);
                        }
                      }}
                      aria-expanded={openSection0}
                    >
                      <div className="user-research-accordion-left">
                        <span
                          className={`user-research-accordion-chevron ${openSection0 ? "open" : "closed"}`}
                          aria-hidden="true"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15" />
                          </svg>
                        </span>
                        <span>You Do Not Need to Be an Expert</span>
                      </div>
                    </div>
                  </div>

                  {openSection0 && (
                    <div
                      id="Main_TEA44200C001_Col04"
                      className="sf_colsIn collapse-content panel show"
                      data-placeholder-label="Accordion Content"
                      data-sf-element="Accordion Content"
                    >
                      <p>
                        We want to hear from people with different backgrounds, experiences and levels of familiarity with ICA services.
                      </p>
                      <p>
                        Whether something is easy to use, difficult to understand or could simply work better, your experience can help us improve.
                      </p>
                      <p>
                        Join our Customer Experience Panel to share your feedback and ideas, helping us improve the website and our services for a better user experience.
                      </p>
                    </div>
                  )}
                </div>

                {/* Section 2: How It Works */}
                <div className="collapse-wrapper section-with-divider" ref={section1Ref}>
                  <div
                    id="Main_TEA44200C001_Col05"
                    className="sf_colsIn"
                    data-sf-element="Accordion Title"
                    data-placeholder-label="Accordion Title"
                  >
                    <div
                      className={`collapse-title accordion ${openSection1 ? "active" : ""}`}
                      onClick={() => setOpenSection1(!openSection1)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpenSection1(!openSection1);
                        }
                      }}
                      aria-expanded={openSection1}
                    >
                      <div className="user-research-accordion-left">
                        <span
                          className={`user-research-accordion-chevron ${openSection1 ? "open" : "closed"}`}
                          aria-hidden="true"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="18 15 12 9 6 15" />
                          </svg>
                        </span>
                        <span>How It Works</span>
                      </div>

                      <a
                        className="btn btn-main"
                        href="https://form.gov.sg/61090d0741dbd20012310487"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Register
                      </a>
                    </div>
                  </div>

                  {openSection1 && (
                    <div
                      id="Main_TEA44200C001_Col06"
                      className="sf_colsIn collapse-content panel show"
                      data-placeholder-label="Accordion Content"
                      data-sf-element="Accordion Content"
                    >
                      <p style={{ margin: "0", lineHeight: "1.65" }}>
                        Sign up by registering with us. We will contact you when a suitable research opportunity is available. You can decide each time whether you would like to participate.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AskGovWidget />
      <ScrollToTop />
      <SiteFooter onNavigate={handleGlobalNavigate} />
    </div>
  );
}
