import React, { useState, useRef } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import "./OurPeoplePage.css";

export default function OurPeoplePage({
  onNavigateToCheckpoints,
  onNavigateToStatus,
  onNavigateToContact,
  onNavigateHome,
  onNavigateToFeedback,
  onNavigateToFaqs,
  onNavigateToReach,
  onNavigateToDocuments,
  onNavigateToEnterTransitDepart,
  onNavigateToReside,
  onNavigateToEServicesForms,
  onNavigateToVisionMissionValues,
  onNavigateToOurPeople,
  onNavigateToAwardsAccolades,
  onNavigateToOurServiceCommitment,
  onNavigateToNewsroom,
  onNavigateToPublications,
  onNavigateToStatistics,
  onNavigateToPublicEducation,
  onNavigate,
}) {
  const [openAccordions, setOpenAccordions] = useState({
    orgStructure: true,
    getInspired: true,
  });

  const orgStructureRef = useRef(null);
  const getInspiredRef = useRef(null);

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const scrollToSection = (index) => {
    const targetRef = index === 0 ? orgStructureRef : getInspiredRef;
    if (targetRef && targetRef.current) {
      if (index === 0 && !openAccordions.orgStructure) {
        setOpenAccordions((prev) => ({ ...prev, orgStructure: true }));
      } else if (index === 1 && !openAccordions.getInspired) {
        setOpenAccordions((prev) => ({ ...prev, getInspired: true }));
      }

      setTimeout(() => {
        const offsetTop = targetRef.current.offsetTop - 120;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }, 50);
    }
  };

  return (
    <div className="site-wrapper our-people-page-wrapper">
      {/* Singapore Government Masthead */}
      <GovMasthead />

      {/* Official Header */}
      <SiteHeader
        searchQuery=""
        setSearchQuery={() => {}}
        totalMatches={0}
        isSearching={false}
        activeView="our-people"
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
          if (view === "contactus" && onNavigateToContact) return onNavigateToContact();
          if (view === "feedback" && onNavigateToFeedback) return onNavigateToFeedback();
          if (view === "askgov" && onNavigateToFaqs) return onNavigateToFaqs();
          if (view === "reach" && onNavigateToReach) return onNavigateToReach();
          if (view === "documents" && onNavigateToDocuments) return onNavigateToDocuments();
          if (view === "enter-transit-depart" && onNavigateToEnterTransitDepart) return onNavigateToEnterTransitDepart();
          if (view === "reside" && onNavigateToReside) return onNavigateToReside();
          if (view === "eservicesandforms" && onNavigateToEServicesForms) return onNavigateToEServicesForms();
          if (view === "vision-mission-values" && onNavigateToVisionMissionValues) return onNavigateToVisionMissionValues();
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
            <Breadcrumbs
              activeView="our-people"
              onNavigate={(view) => {
                if (view === "checkpoints" && onNavigateToCheckpoints) onNavigateToCheckpoints();
                if (view === "checkstatus" && onNavigateToStatus) onNavigateToStatus();
                if (view === "contactus" && onNavigateToContact) onNavigateToContact();
              }}
            />

            {/* Horizontal e-Services list */}
            <EServicesBar
              activeView="our-people"
              onSelectService={(serviceId) => {
                if (serviceId === "checkstatus") {
                  if (onNavigateToStatus) onNavigateToStatus();
                } else if (serviceId === "identity" || serviceId === "documents") {
                  if (onNavigateToDocuments) onNavigateToDocuments();
                } else if (serviceId === "enter-transit-depart") {
                  if (onNavigateToEnterTransitDepart) onNavigateToEnterTransitDepart();
                } else if (serviceId === "reside") {
                  if (onNavigateToReside) onNavigateToReside();
                } else if (serviceId === "eservicesandforms") {
                  if (onNavigateToEServicesForms) onNavigateToEServicesForms();
                } else {
                  if (onNavigateToCheckpoints) onNavigateToCheckpoints();
                }
              }}
            />

            {/* Main Content Container matching Checkpoints/Our People layout */}
            <div className="container container--no-padding main-container">
              <div className="checkpoint-page-header">
                <h1 className="checkpoint-main-heading">Our People</h1>
                <hr className="checkpoint-main-divider" />

                {/* Clean Text Links Navigation */}
                <nav className="checkpoint-quicklinks-nav" aria-label="Our People Categories">
                  <a
                    href="#organisational-structure"
                    className="checkpoint-quicklink-item"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(0);
                    }}
                  >
                    Organisational Structure
                  </a>
                  <a
                    href="#get-inspired"
                    className="checkpoint-quicklink-item"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(1);
                    }}
                  >
                    Get Inspired by our ICA officers!
                  </a>
                </nav>
              </div>

              <div className="standard-content">
                {/* Accordion 1: Organisational Structure */}
                <div
                  className="collapse-wrapper"
                  id="organisational-structure"
                  ref={orgStructureRef}
                >
                  <div
                    className={`collapse-title accordion ${openAccordions.orgStructure ? "active" : "collapsed"}`}
                    onClick={() => toggleAccordion("orgStructure")}
                    role="button"
                    tabIndex={0}
                    aria-expanded={openAccordions.orgStructure}
                  >
                    <span className={`accordion-chevron-icon ${openAccordions.orgStructure ? "open" : "closed"}`} aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f284e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    </span>
                    <span className="accordion-category-title">Organisational Structure</span>
                  </div>
                  <hr className="checkpoint-section-divider" />

                  {openAccordions.orgStructure && (
                    <div className="collapse-content panel show">
                      <div className="our-people-chart-container">
                        <img
                          src="/images/default-source/ica-images/about-us/ica-directorate-org-chart-design_oct-25.svg"
                          alt="ICA Directorate Org Chart"
                          title="ICA Directorate Org Chart"
                          className="our-people-chart-img"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Get Inspired by our ICA officers! */}
                <div
                  className="collapse-wrapper"
                  id="get-inspired"
                  ref={getInspiredRef}
                >
                  <div
                    className={`collapse-title accordion ${openAccordions.getInspired ? "active" : "collapsed"}`}
                    onClick={() => toggleAccordion("getInspired")}
                    role="button"
                    tabIndex={0}
                    aria-expanded={openAccordions.getInspired}
                  >
                    <span className={`accordion-chevron-icon ${openAccordions.getInspired ? "open" : "closed"}`} aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f284e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15" />
                      </svg>
                    </span>
                    <span className="accordion-category-title">Get Inspired by our ICA officers!</span>
                  </div>
                  <hr className="checkpoint-section-divider" />

                  {openAccordions.getInspired && (
                    <div className="collapse-content panel show">
                      <div style={{ paddingTop: "8px", paddingBottom: "24px", fontSize: "15px" }}>
                        <a
                          href="#meet-our-officers"
                          className="cp-link"
                          style={{ color: "#007398", fontWeight: "600", textDecoration: "underline" }}
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.hash = "#meet-our-officers";
                          }}
                        >
                          Meet our Officers
                        </a>{" "}
                        to find out more.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to top button */}
      <ScrollToTop />

      {/* Official Footer */}
      <SiteFooter
        onNavigate={(view) => {
          if (onNavigate) {
            onNavigate(view);
            return;
          }
          if (view === "feedback" && onNavigateToFeedback) return onNavigateToFeedback();
          if (view === "contactus" && onNavigateToContact) return onNavigateToContact();
          if (view === "checkpoints" && onNavigateToCheckpoints) return onNavigateToCheckpoints();
          if (view === "checkstatus" && onNavigateToStatus) return onNavigateToStatus();
          if (view === "askgov" && onNavigateToFaqs) return onNavigateToFaqs();
          if (view === "reach" && onNavigateToReach) return onNavigateToReach();
          window.location.hash = "#" + view;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
