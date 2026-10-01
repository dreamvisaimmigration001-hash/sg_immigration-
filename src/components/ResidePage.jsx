import React, { useState } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import "./ResidePage.css";

export default function ResidePage({
  onNavigateToCheckpoints,
  onNavigateToStatus,
  onNavigateToContact,
  onNavigateHome,
  onNavigateToFeedback,
  onNavigateToFaqs,
  onNavigateToReach,
  onNavigateToDocuments,
  onNavigateToEnterTransitDepart,
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
  const [openPanels, setOpenPanels] = useState({});

  const togglePanel = (panelKey) => {
    setOpenPanels((prev) => ({
      ...prev,
      [panelKey]: !prev[panelKey],
    }));
  };

  const handleSelectService = (id) => {
    if (id === "identity" || id === "documents") {
      if (onNavigateToDocuments) onNavigateToDocuments();
      else if (onNavigate) onNavigate("documents");
      else window.location.hash = "#documents";
    } else if (id === "checkstatus") {
      if (onNavigateToStatus) onNavigateToStatus();
      else if (onNavigate) onNavigate("checkstatus");
      else window.location.hash = "#status";
    } else if (id === "enter-transit-depart") {
      if (onNavigateToEnterTransitDepart) onNavigateToEnterTransitDepart();
      else if (onNavigate) onNavigate("enter-transit-depart");
      else window.location.hash = "#enter-transit-depart";
    } else if (id === "eservicesandforms" || id === "eservices") {
      if (onNavigateToEServicesForms) onNavigateToEServicesForms();
      else if (onNavigate) onNavigate("eservicesandforms");
      else window.location.hash = "#eservicesandforms";
    } else if (id === "reside") {
      // already here
    } else {
      if (onNavigateToCheckpoints) onNavigateToCheckpoints();
      else if (onNavigate) onNavigate("checkpoints");
      else window.location.hash = "#checkpoints";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-wrapper reside-page-wrapper">
      {/* Singapore Government Masthead */}
      <GovMasthead />

      {/* Official Header */}
      <SiteHeader
        searchQuery=""
        setSearchQuery={() => {}}
        totalMatches={0}
        isSearching={false}
        activeView="reside"
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
          if (view === "vision-mission-values" && onNavigateToVisionMissionValues) return onNavigateToVisionMissionValues();
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
            <Breadcrumbs
              activeView="reside"
              onNavigate={(view) => {
                if (view === "checkpoints") onNavigateToCheckpoints();
                if (view === "checkstatus") onNavigateToStatus();
                if (view === "contactus") onNavigateToContact();
              }}
            />

            {/* Horizontal e-Services Bar */}
            <EServicesBar
              activeView="reside"
              onSelectService={handleSelectService}
            />

            <div className="container container--no-padding">
              <div className="mega-menu-wrapper">
                <div id="Main_T042D2BA7001_Col01" className="sf_colsIn" data-sf-element="Mega Menu Content" data-placeholder-label="Mega Menu Content">
                  {/* Block 1 Desktop */}
                  <div className="mega-menu-content-full-width">
                    <div className="mega-menu-title">Reside, Study and Work in Singapore</div>
                    <div
                      className="mega-menu-entering-departing-image"
                      title="see-more"
                      style={{ backgroundImage: "url('/assets/images/reside-banner.png')" }}
                    ></div>

                    {/* Column 1: Singapore Citizenship */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Singapore Citizenship</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/reside/citizenship/apply">Becoming a Singapore Citizen</a>
                          </li>
                          <li>
                            <a href="/reside/citizenship/minor-oath-taking">Oath-taking for Minors</a>
                          </li>
                          <li>
                            <a href="/reside/citizenship/roe">Right of Entry (ROE)</a>
                          </li>
                          <li>
                            <a href="/reside/citizenship/confirmation">Confirmation of Citizenship Status</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 2: Permanent Residence */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Permanent Residence</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/reside/PR/apply">Becoming a Permanent Resident</a>
                          </li>
                          <li>
                            <a href="/reside/PR/apply-REP">Apply for/Renew Re-Entry Permit</a>
                          </li>
                          <li>
                            <a href="/reside/PR/transfer-REP">Transfer of Re-Entry Permit/Update Travel Document</a>
                          </li>
                          <li>
                            <a href="/PR/see-more/entry-permit-and-re-entry-permit-conditions-for-singapore-permanent-residents">Entry Permit and Re-Entry Permit Conditions for Singapore Permanent Residents</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 3: For Singapore Citizen - Non-Resident Couples */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">For Singapore Citizen - Non-Resident Couples</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/reside/pre-marriage-long-term-visit-pass-assessment">Pre-Marriage Long-Term Visit Pass Assessment</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 4: Long-Term Visit Pass */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Long-Term Visit Pass</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/reside/LTVP/apply">Becoming a Long-Term Visit Pass Holder</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* clearfix after every 4th item */}
                    <div className="clearfix"></div>
                  </div>

                  {/* Block 1 Mobile */}
                  <div className="mobile-nav-wrapper-2">
                    <div className="mobile-nav-content">
                      <div className="mobile-nav-title">Reside, Study and Work in Singapore</div>
                      <div
                        className="mega-menu-entering-departing-image mobile-banner"
                        title="see-more"
                        style={{ backgroundImage: "url('/assets/images/reside-banner.png')" }}
                      ></div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["citizenship"] ? "active" : ""}`}
                        onClick={() => togglePanel("citizenship")}
                      >
                        Singapore Citizenship
                      </div>
                      {openPanels["citizenship"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/reside/citizenship/apply">Becoming a Singapore Citizen</a>
                              </li>
                              <li>
                                <a href="/reside/citizenship/minor-oath-taking">Oath-taking for Minors</a>
                              </li>
                              <li>
                                <a href="/reside/citizenship/roe">Right of Entry (ROE)</a>
                              </li>
                              <li>
                                <a href="/reside/citizenship/confirmation">Confirmation of Citizenship Status</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["pr"] ? "active" : ""}`}
                        onClick={() => togglePanel("pr")}
                      >
                        Permanent Residence
                      </div>
                      {openPanels["pr"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/reside/PR/apply">Becoming a Permanent Resident</a>
                              </li>
                              <li>
                                <a href="/reside/PR/apply-REP">Apply for/Renew Re-Entry Permit</a>
                              </li>
                              <li>
                                <a href="/reside/PR/transfer-REP">Transfer of Re-Entry Permit/Update Travel Document</a>
                              </li>
                              <li>
                                <a href="/PR/see-more/entry-permit-and-re-entry-permit-conditions-for-singapore-permanent-residents">Entry Permit and Re-Entry Permit Conditions for Singapore Permanent Residents</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["couples"] ? "active" : ""}`}
                        onClick={() => togglePanel("couples")}
                      >
                        For Singapore Citizen - Non-Resident Couples
                      </div>
                      {openPanels["couples"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/reside/pre-marriage-long-term-visit-pass-assessment">Pre-Marriage Long-Term Visit Pass Assessment</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["ltvp"] ? "active" : ""}`}
                        onClick={() => togglePanel("ltvp")}
                      >
                        Long-Term Visit Pass
                      </div>
                      {openPanels["ltvp"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/reside/LTVP/apply">Becoming a Long-Term Visit Pass Holder</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Block 2 Desktop */}
                  <div className="mega-menu-content-full-width">
                    <div className="mega-menu-title"></div>

                    {/* Column 1: Student's Pass */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Student's Pass</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/reside/STP/apply">Becoming a Student's Pass Holder</a>
                          </li>
                          <li>
                            <a href="/reside/STP/sponsor">Sponsor Student's Pass</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 2: Appeal */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Appeal</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/reside/reside-appeals">Appeal for Singapore Citizenship/ Permanent Residence/ Long-Term Visit Pass Application</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 3: Work in Singapore */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Work in Singapore</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/redirect-links/mom-main-page">Go to Ministry of Manpower (MOM) Website</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* clearfix after every 4th item */}
                    <div className="clearfix"></div>
                  </div>

                  {/* Block 2 Mobile */}
                  <div className="mobile-nav-wrapper-2">
                    <div className="mobile-nav-content">
                      <div className="mobile-nav-title"></div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["stp"] ? "active" : ""}`}
                        onClick={() => togglePanel("stp")}
                      >
                        Student's Pass
                      </div>
                      {openPanels["stp"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/reside/STP/apply">Becoming a Student's Pass Holder</a>
                              </li>
                              <li>
                                <a href="/reside/STP/sponsor">Sponsor Student's Pass</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["appeals"] ? "active" : ""}`}
                        onClick={() => togglePanel("appeals")}
                      >
                        Appeal
                      </div>
                      {openPanels["appeals"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/reside/reside-appeals">Appeal for Singapore Citizenship/ Permanent Residence/ Long-Term Visit Pass Application</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["mom"] ? "active" : ""}`}
                        onClick={() => togglePanel("mom")}
                      >
                        Work in Singapore
                      </div>
                      {openPanels["mom"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/redirect-links/mom-main-page">Go to Ministry of Manpower (MOM) Website</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top */}
      <ScrollToTop />

      {/* Official Footer */}
      <SiteFooter
        onNavigate={(view) => {
          if (onNavigate) {
            onNavigate(view);
            return;
          }
          if (view === "checkpoints" && onNavigateToCheckpoints) return onNavigateToCheckpoints();
          if (view === "checkstatus" && onNavigateToStatus) return onNavigateToStatus();
          if (view === "contactus" && onNavigateToContact) return onNavigateToContact();
          if (view === "feedback" && onNavigateToFeedback) return onNavigateToFeedback();
          if (view === "reach" && onNavigateToReach) return onNavigateToReach();
          if (view === "documents" && onNavigateToDocuments) return onNavigateToDocuments();
          if (view === "enter-transit-depart" && onNavigateToEnterTransitDepart) return onNavigateToEnterTransitDepart();
          if (view === "faqs" || view === "askgov") {
            if (onNavigateToFaqs) return onNavigateToFaqs();
          }
          window.location.hash = "#" + view;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
