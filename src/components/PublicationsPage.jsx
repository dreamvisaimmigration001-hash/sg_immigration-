import React, { useState, useEffect } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import keesingImg from "../assets/keesing_passport_story.jpg";
import annual2025Img from "../assets/ica_annual_2025_cover.jpg";
import annual2024Img from "../assets/ica_annual_2024_cover.jpg";
import annual2023Img from "../assets/ica_annual_2023_cover.jpg";
import annual2022Img from "../assets/ica_annual_2022_cover.jpg";
import annual2021Img from "../assets/ica_annual_2021_cover.png";
import annual2020Img from "../assets/ica_annual_2020_cover.png";
import "./PublicationsPage.css";

// Authentic ICA Annuals Dataset matching screenshot
const ICA_ANNUALS_DATA = [
  {
    id: "annual-2025",
    year: "2025",
    tagLabel: "ICA Annual 2025",
    theme: "Securing Our Borders Safeguarding Our Home",
    coverImg: annual2025Img,
    summary:
      "2025 marked a defining year in ICA’s transformation journey, as we advanced smarter checkpoint operations, reimagined service delivery, and strengthened the capabilities of our workforce. ICA continues to innovate to safeguard Singapore’s borders and meet future challenges.",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica-annual-report-2025.pdf?sfvrsn=dbaf766_3",
  },
  {
    id: "annual-2024",
    year: "2024",
    tagLabel: "ICA Annual 2024",
    theme: "Securing Our Borders Safeguarding Our Home",
    coverImg: annual2024Img,
    summary:
      "The past year has been pivotal for ICA, as we achieved significant milestones in our transformation journey. We have redefined our border clearance and enhanced our services through an integrated services centre. Discover how ICA developed new capabilities to meet evolving challenges and forge a safer, more secure Singapore.",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica-annual-report-2024.pdf?sfvrsn=d2c70cd6_1",
  },
  {
    id: "annual-2023",
    year: "2023",
    tagLabel: "ICA Annual 2023",
    theme: "Securing Our Borders Safeguarding Our Home",
    coverImg: annual2023Img,
    summary:
      "Progress with the New Clearance Concept and the Services Centre Next-Generation, providing state-of-the-art border infrastructure keeping Singapore safe and connected.",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica-annual-2023.pdf?sfvrsn=6d374e88_2",
  },
  {
    id: "annual-2022",
    year: "2022",
    tagLabel: "ICA Annual 2022 and Commemorative Book",
    theme: "ICA20 – Remembering Our Past, Securing Our Future",
    coverImg: annual2022Img,
    summary:
      "Commemorating 20 years of ICA guardianship. Showcases key historical milestones, post-pandemic full border reopening operations, and strategic initiatives for future-ready security.",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica-annual-2022-and-commemorative-book.pdf?sfvrsn=7799124e_4",
  },
  {
    id: "annual-2021",
    year: "2021",
    tagLabel: "ICA Annual 2021",
    theme: "Securing Our Borders Safeguarding Our Home",
    coverImg: annual2021Img,
    summary:
      "Demonstrates ICA's operational resilience and adaptability amid prolonged global disruptions, accelerating digital transformation across border checkpoints and services centres.",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica-annual_2021.pdf?sfvrsn=e7636a5c_4",
  },
  {
    id: "annual-2020",
    year: "2020",
    tagLabel: "ICA Annual 2020",
    theme: "Securing Our Borders Safeguarding Our Home",
    coverImg: annual2020Img,
    summary:
      "Chronicles frontline border defense, the rapid deployment of the electronic Singapore Arrival Card (SGAC), and multi-modal iris & facial contactless border clearance systems.",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica-annual_2020.pdf?sfvrsn=b6adeaab_10",
  },
];

export default function PublicationsPage({
  onNavigateToCheckpoints,
  onNavigateToDocuments,
  onNavigateToEnterTransitDepart,
  onNavigateToReside,
  onNavigateToEServicesForms,
  onNavigateToFeedback,
  onNavigateToReach,
  onNavigateToOurPeople,
  onNavigateToVisionMissionValues,
  onNavigateToAwardsAccolades,
  onNavigateToOurServiceCommitment,
  onNavigateToNewsroom,
  onNavigateToStatistics,
  onNavigateToPublicEducation,
  onNavigateToCheckStatus,
  onNavigate,
}) {
  const [activeTab, setActiveTab] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes("annual")) return "annuals";
    return "publications";
  });

  const [isPublicationsAccordionOpen, setIsPublicationsAccordionOpen] = useState(true);

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("annual")) {
        setActiveTab("annuals");
      } else {
        setActiveTab("publications");
      }
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  const handleGlobalNavigate = (view) => {
    if (view === "checkpoints" && onNavigateToCheckpoints) onNavigateToCheckpoints();
    else if (view === "documents" && onNavigateToDocuments) onNavigateToDocuments();
    else if (view === "enter-transit-depart" && onNavigateToEnterTransitDepart) onNavigateToEnterTransitDepart();
    else if (view === "reside" && onNavigateToReside) onNavigateToReside();
    else if (view === "eservicesandforms" && onNavigateToEServicesForms) onNavigateToEServicesForms();
    else if (view === "feedback" && onNavigateToFeedback) onNavigateToFeedback();
    else if (view === "reach" && onNavigateToReach) onNavigateToReach();
    else if (view === "our-people" && onNavigateToOurPeople) onNavigateToOurPeople();
    else if (view === "vision-mission-values" && onNavigateToVisionMissionValues) onNavigateToVisionMissionValues();
    else if (view === "awards-accolades" && onNavigateToAwardsAccolades) onNavigateToAwardsAccolades();
    else if (view === "our-service-commitment" && onNavigateToOurServiceCommitment) onNavigateToOurServiceCommitment();
    else if (view === "newsroom" && onNavigateToNewsroom) onNavigateToNewsroom();
    else if (view === "statistics" && onNavigateToStatistics) onNavigateToStatistics();
    else if (view === "public-education" && onNavigateToPublicEducation) onNavigateToPublicEducation();
    else if (view === "checkstatus" && onNavigateToCheckStatus) onNavigateToCheckStatus();
    else if (onNavigate) onNavigate(view);
    else {
      window.location.hash = `#${view}`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    if (window.history.length > 1) {
      window.history.back();
    } else {
      handleGlobalNavigate("newsroom");
    }
  };

  const scrollToPublications = (e) => {
    e.preventDefault();
    const el = document.getElementById("publications-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="publications-wrapper">
      <GovMasthead />
      <SiteHeader
        activeView="publications"
        onNavigate={handleGlobalNavigate}
      />

      <Breadcrumbs
        activeView="publications"
        onNavigate={handleGlobalNavigate}
      />

      <EServicesBar
        activeView="publications"
        onSelectService={(serviceId) => {
          if (serviceId === "checkstatus") handleGlobalNavigate("checkstatus");
          else if (serviceId === "identity" || serviceId === "documents") handleGlobalNavigate("documents");
          else if (serviceId === "enter-transit-depart") handleGlobalNavigate("enter-transit-depart");
          else if (serviceId === "reside") handleGlobalNavigate("reside");
          else if (serviceId === "eservicesandforms" || serviceId === "eservices") handleGlobalNavigate("eservicesandforms");
          else handleGlobalNavigate("checkpoints");
        }}
      />

      <div className="publications-main" id="page-content">
        <div className="publications-container">

          {/* ================= VIEW 1: ICA | ICA ANNUALS (MATCHING USER SCREENSHOT) ================= */}
          {activeTab === "annuals" && (
            <div className="ica-annuals-page-view">
              {/* Top Header Row with Title and Back Link */}
              <div className="ica-annuals-header-row">
                <h1 className="ica-annuals-title">ICA | ICA Annuals</h1>
                <a
                  href="#back"
                  className="ica-annuals-back-btn"
                  onClick={handleBackClick}
                >
                  Back
                </a>
              </div>

              {/* Intro Text */}
              <p className="ica-annuals-intro">
                <strong>Browse through the ICA Annuals to get to know us better!</strong>
              </p>

              {/* Stacked Annual Cards */}
              <div className="ica-annuals-cards-list">
                {ICA_ANNUALS_DATA.map((annual) => (
                  <div key={annual.id} className="ica-annual-item-card">
                    {/* Top Gray Label */}
                    <div className="ica-annual-item-header">
                      {annual.tagLabel}
                    </div>

                    {/* Card Body: Thumbnail + Text */}
                    <div className="ica-annual-item-body">
                      <div className="ica-annual-item-thumb">
                        <a
                          href={annual.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ica-annual-item-thumb-link"
                          title={annual.theme}
                        >
                          <img
                            src={annual.coverImg}
                            alt={annual.theme}
                            className="ica-annual-item-img"
                          />
                        </a>
                      </div>

                      <div className="ica-annual-item-text">
                        <h2 className="ica-annual-item-headline">
                          <a
                            href={annual.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ica-annual-item-headline-link"
                          >
                            {annual.theme}
                          </a>
                        </h2>
                        <p className="ica-annual-item-desc">{annual.summary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= VIEW 2: PUBLICATIONS (MATCHING PREVIOUS USER SCREENSHOT) ================= */}
          {activeTab === "publications" && (
            <div className="publications-page-view">
              {/* Publications Title */}
              <h1 className="publications-main-heading">Publications</h1>
              <hr className="publications-top-divider" />

              {/* Quicklinks Nav text (Non-clickable) */}
              <div className="publications-quicklinks-row">
                <span
                  className="publications-quicklink not-clickable"
                  tabIndex={-1}
                  style={{ pointerEvents: "none", cursor: "default" }}
                >
                  Publications
                </span>
              </div>

              {/* Intro text */}
              <p className="publications-intro-text">
                Read on and be updated on topics that impact national registration and border security.
              </p>

              {/* Accordion Container */}
              <div className="publications-accordion-container" id="publications-section">
                {/* Accordion Toggle Header */}
                <div
                  className={`publications-accordion-header ${isPublicationsAccordionOpen ? "active" : ""}`}
                  onClick={() => setIsPublicationsAccordionOpen(!isPublicationsAccordionOpen)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setIsPublicationsAccordionOpen(!isPublicationsAccordionOpen);
                    }
                  }}
                  aria-expanded={isPublicationsAccordionOpen}
                >
                  <span className="accordion-caret-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`caret-svg ${isPublicationsAccordionOpen ? "open" : ""}`}
                    >
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </span>
                  <span className="accordion-heading-text">Publications</span>
                </div>

                {/* Card Content inside Accordion */}
                {isPublicationsAccordionOpen && (
                  <div className="publications-card-wrapper">
                    <div className="publication-card-exact">
                      {/* Left Thumbnail Image */}
                      <div className="publication-exact-thumb">
                        <img
                          src={keesingImg}
                          alt="Punching above its weight - The Singapore passport story"
                          className="publication-exact-img"
                        />
                      </div>

                      {/* Right Metadata Details */}
                      <div className="publication-exact-details">
                        <div className="pub-meta-row">
                          <strong>Author:</strong> Marvin Sim
                        </div>
                        <div className="pub-meta-row">
                          <strong>Title:</strong> Punching above its weight - The Singapore passport story
                        </div>
                        <div className="pub-meta-row">
                          <strong>Publication City:</strong> Amsterdam
                        </div>
                        <div className="pub-meta-row">
                          <strong>Publisher:</strong> Keesing Reference Systems B.V.
                        </div>
                        <div className="pub-meta-row">
                          <strong>Copyright:</strong> © 2018 Keesing Technologies. Reprinted by permission of the publisher. All rights reserved.
                        </div>
                        <div className="pub-meta-row">
                          <strong>Year:</strong> 2019
                        </div>
                        <div className="pub-meta-row">
                          <strong>Publication:</strong> Keesing Journal of Documents &amp; Identity, Annual Report Identity Management 2018-2019
                        </div>
                        <div className="pub-meta-row pub-summary-row">
                          <strong>Summary:</strong> The Singapore passport is one of the most sought after passports in the world. The Singapore passport story is a tale of continuous journey of improvement. Through ingenuous ideas and bold use of technology, the ICA has revolutionised the passport application and collection processes from a manual-based model into a seamless, secured and pleasurable one for all.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>

      <ScrollToTop />
      <SiteFooter onNavigate={handleGlobalNavigate} />
    </div>
  );
}
