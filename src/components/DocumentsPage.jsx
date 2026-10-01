import React, { useState } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import "./DocumentsPage.css";

export default function DocumentsPage({
  onNavigateToCheckpoints,
  onNavigateToStatus,
  onNavigateToContact,
  onNavigateHome,
  onNavigateToFeedback,
  onNavigateToFaqs,
  onNavigateToReach,
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
  const [openPanels, setOpenPanels] = useState({});

  const togglePanel = (panelKey) => {
    setOpenPanels((prev) => ({
      ...prev,
      [panelKey]: !prev[panelKey],
    }));
  };

  return (
    <div className="site-wrapper documents-page-wrapper">
      {/* Singapore Government Masthead */}
      <GovMasthead />

      {/* Official Header */}
      <SiteHeader
        searchQuery=""
        setSearchQuery={() => {}}
        totalMatches={0}
        isSearching={false}
        activeView="documents"
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
          if (view === "enter-transit-depart" && onNavigateToEnterTransitDepart) return onNavigateToEnterTransitDepart();
          if (view === "reside" && onNavigateToReside) return onNavigateToReside();
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
              activeView="documents"
              onNavigate={(view) => {
                if (onNavigate) return onNavigate(view);
                if (view === "checkpoints" && onNavigateToCheckpoints) return onNavigateToCheckpoints();
                if (view === "checkstatus" && onNavigateToStatus) return onNavigateToStatus();
                if (view === "contactus" && onNavigateToContact) return onNavigateToContact();
                window.location.hash = "#" + view;
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            {/* Horizontal e-Services list */}
            <EServicesBar
              activeView="identity"
              onSelectService={(serviceId) => {
                if (serviceId === "checkstatus") {
                  if (onNavigateToStatus) onNavigateToStatus();
                  else if (onNavigate) onNavigate("checkstatus");
                  else window.location.hash = "#status";
                } else if (serviceId === "identity" || serviceId === "documents") {
                  // already on documents page
                } else if (serviceId === "enter-transit-depart") {
                  if (onNavigateToEnterTransitDepart) onNavigateToEnterTransitDepart();
                  else if (onNavigate) onNavigate("enter-transit-depart");
                  else window.location.hash = "#enter-transit-depart";
                } else if (serviceId === "reside") {
                  if (onNavigateToReside) onNavigateToReside();
                  else if (onNavigate) onNavigate("reside");
                  else window.location.hash = "#reside";
                } else if (serviceId === "eservicesandforms" || serviceId === "eservices") {
                  if (onNavigateToEServicesForms) onNavigateToEServicesForms();
                  else if (onNavigate) onNavigate("eservicesandforms");
                  else window.location.hash = "#eservicesandforms";
                } else {
                  if (onNavigateToCheckpoints) onNavigateToCheckpoints();
                  else if (onNavigate) onNavigate("checkpoints");
                  else window.location.hash = "#checkpoints";
                }
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />

            <div className="container container--no-padding">
              <div className="mega-menu-wrapper">
                <div id="Main_T042D2BA7001_Col01" className="sf_colsIn" data-sf-element="Mega Menu Content" data-placeholder-label="Mega Menu Content">
                  {/* Block 1: Desktop View */}
                  <div className="mega-menu-content-full-width">
                    <div className="mega-menu-title">Identity Card, Passport and other Documents</div>

                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Identity Card</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="#/documents/ic/registration">Register for 15-year-olds</a>
                          </li>
                          <li>
                            <a href="#/documents/ic/re-registration">Re-Register for 30/55-year-olds</a>
                          </li>
                          <li>
                            <a href="#/documents/ic/loss">Report and Replace Lost IC</a>
                          </li>
                          <li>
                            <a href="#/documents/ic/update_particulars">Replace IC (Change IC Particulars/Damaged)</a>
                          </li>
                          <li>
                            <a href="#/documents/identity-cards/change-of-race">- Information on Change of Race</a>
                          </li>
                          <li>
                            <a href="#/documents/ic/update_residential_address">Change of Residential Address</a>
                          </li>
                          <li>
                            <a href="#/documents/ic/collect">Collect</a>
                          </li>
                          <li>
                            <a href="#/checkic">Check Validity</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Singapore Passport</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="#/documents/passport/apply">Apply</a>
                          </li>
                          <li>
                            <a href="#/documents/passport/collect">Collect</a>
                          </li>
                          <li>
                            <a href="#/documents/passport/damage">Report Damage</a>
                          </li>
                          <li>
                            <a href="#/documents/passport/loss">Report Loss</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Foreign Passport</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="#/reside/PR/transfer-REP/foreign-passport/report-loss">Report Loss</a>
                          </li>
                          <li>
                            <a href="#/reside/PR/apply-REP">Apply for/Renew Re-Entry Permit</a>
                          </li>
                          <li>
                            <a href="#/reside/PR/transfer-REP">Transfer Re-Entry Permit/Update Travel Document</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Other Documents</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="#/enter-depart/for-singapore-citizens/apec-business-travel-card">APEC Business Travel Card</a>
                          </li>
                          <li>
                            <a href="#/documents/coi/apply">Apply Certificate of Identity</a>
                          </li>
                          <li>
                            <a href="#/documents/coi/update_particulars">Change of Particulars for Certificate of Identity</a>
                          </li>
                          <li>
                            <a href="#/documents/citizencert/replacement">Loss or Damage of Citizenship Certificate</a>
                          </li>
                          <li>
                            <a href="#/reside/citizenship/roe">Right of Entry (ROE)</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                  </div>

                  {/* Block 1: Mobile View Accordion */}
                  <div className="mobile-nav-wrapper-2">
                    <div className="mobile-nav-content">
                      <div className="mobile-nav-title">Identity Card, Passport and other Documents</div>
                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["ic"] ? "active" : ""}`}
                        onClick={() => togglePanel("ic")}
                      >
                        Identity Card
                      </div>
                      <div className="panel" style={{ display: openPanels["ic"] ? "block" : "none" }}>
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="#/documents/ic/registration">Register for 15-year-olds</a>
                            </li>
                            <li>
                              <a href="#/documents/ic/re-registration">Re-Register for 30/55-year-olds</a>
                            </li>
                            <li>
                              <a href="#/documents/ic/loss">Report and Replace Lost IC</a>
                            </li>
                            <li>
                              <a href="#/documents/ic/update_particulars">Replace IC (Change IC Particulars/Damaged)</a>
                            </li>
                            <li>
                              <a href="#/documents/identity-cards/change-of-race">- Information on Change of Race</a>
                            </li>
                            <li>
                              <a href="#/documents/ic/update_residential_address">Change of Residential Address</a>
                            </li>
                            <li>
                              <a href="#/documents/ic/collect">Collect</a>
                            </li>
                            <li>
                              <a href="#/checkic">Check Validity</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["sg-passport"] ? "active" : ""}`}
                        onClick={() => togglePanel("sg-passport")}
                      >
                        Singapore Passport
                      </div>
                      <div className="panel" style={{ display: openPanels["sg-passport"] ? "block" : "none" }}>
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="#/documents/passport/apply">Apply</a>
                            </li>
                            <li>
                              <a href="#/documents/passport/collect">Collect</a>
                            </li>
                            <li>
                              <a href="#/documents/passport/damage">Report Damage</a>
                            </li>
                            <li>
                              <a href="#/documents/passport/loss">Report Loss</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["foreign-passport"] ? "active" : ""}`}
                        onClick={() => togglePanel("foreign-passport")}
                      >
                        Foreign Passport
                      </div>
                      <div className="panel" style={{ display: openPanels["foreign-passport"] ? "block" : "none" }}>
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="#/reside/PR/transfer-REP/foreign-passport/report-loss">Report Loss</a>
                            </li>
                            <li>
                              <a href="#/reside/PR/apply-REP">Apply for/Renew Re-Entry Permit</a>
                            </li>
                            <li>
                              <a href="#/reside/PR/transfer-REP">Transfer Re-Entry Permit/Update Travel Document</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["other-docs"] ? "active" : ""}`}
                        onClick={() => togglePanel("other-docs")}
                      >
                        Other Documents
                      </div>
                      <div className="panel" style={{ display: openPanels["other-docs"] ? "block" : "none" }}>
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="#/enter-depart/for-singapore-citizens/apec-business-travel-card">APEC Business Travel Card</a>
                            </li>
                            <li>
                              <a href="#/documents/coi/apply">Apply Certificate of Identity</a>
                            </li>
                            <li>
                              <a href="#/documents/coi/update_particulars">Change of Particulars for Certificate of Identity</a>
                            </li>
                            <li>
                              <a href="#/documents/citizencert/replacement">Loss or Damage of Citizenship Certificate</a>
                            </li>
                            <li>
                              <a href="#/reside/citizenship/roe">Right of Entry (ROE)</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Block 2: Desktop View */}
                  <div className="mega-menu-content-full-width">
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Birth Certificate</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="#/documents/birth/birth_registration">Register</a>
                          </li>
                          <li>
                            <a href="#/eservicesandforms/ecert/download-digital-birth-certificate">Download Digital Birth Certificate (for newborns only)</a>
                          </li>
                          <li>
                            <a href="#/documents/birth/apply_extract">Loss/Damage</a>
                          </li>
                          <li>
                            <a href="#/documents/birth/apply_extract">Apply for Birth Extract</a>
                          </li>
                          <li>
                            <a href="#/eservicesandforms/ecert/download-digital-birth-certificate-extract">Download Digital Birth Extract</a>
                          </li>
                          <li>
                            <a href="#/documents/birth/alter-child-name">Alteration of Child's Name</a>
                          </li>
                          <li>
                            <a href="#/eservicesandforms/ecert/verify-digital-birth-certificate">Verify Digital Birth Certificate</a>
                          </li>
                          <li>
                            <a href="#/eservicesandforms/ecert/verify-digital-birth-extract">Verify Digital Birth Extract</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Death Certificate</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="#/documents/death/death_registration">Register and Download Digital Death Certificate</a>
                          </li>
                          <li>
                            <a href="#/documents/death/apply_extract">Loss/Damage</a>
                          </li>
                          <li>
                            <a href="#/documents/death/apply_extract">Apply for Death Extract</a>
                          </li>
                          <li>
                            <a href="#/eservicesandforms/ecert/download-digital-death-extract">Download Digital Death Extract</a>
                          </li>
                          <li>
                            <a href="#/eservicesandforms/ecert/verify-digital-death-certificate">Verify Digital Death Certificate</a>
                          </li>
                          <li>
                            <a href="#/eservicesandforms/ecert/verify-digital-death-extract">Verify Digital Death Extract</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Stillbirth Certificate</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="#/documents/stillbirth-certificate/register-and-download-digital-stillbirth-certificate">Register and Download Digital Stillbirth Certificate</a>
                          </li>
                          <li>
                            <a href="#/eservicesandforms/ecert/verify-digital-stillbirth-certificate">Verify Digital Stillbirth Certificate</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                  </div>

                  {/* Block 2: Mobile View Accordion */}
                  <div className="mobile-nav-wrapper-2">
                    <div className="mobile-nav-content">
                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["birth"] ? "active" : ""}`}
                        onClick={() => togglePanel("birth")}
                      >
                        Birth Certificate
                      </div>
                      <div className="panel" style={{ display: openPanels["birth"] ? "block" : "none" }}>
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="#/documents/birth/birth_registration">Register</a>
                            </li>
                            <li>
                              <a href="#/eservicesandforms/ecert/download-digital-birth-certificate">Download Digital Birth Certificate (for newborns only)</a>
                            </li>
                            <li>
                              <a href="#/documents/birth/apply_extract">Loss/Damage</a>
                            </li>
                            <li>
                              <a href="#/documents/birth/apply_extract">Apply for Birth Extract</a>
                            </li>
                            <li>
                              <a href="#/eservicesandforms/ecert/download-digital-birth-certificate-extract">Download Digital Birth Extract</a>
                            </li>
                            <li>
                              <a href="#/documents/birth/alter-child-name">Alteration of Child's Name</a>
                            </li>
                            <li>
                              <a href="#/eservicesandforms/ecert/verify-digital-birth-certificate">Verify Digital Birth Certificate</a>
                            </li>
                            <li>
                              <a href="#/eservicesandforms/ecert/verify-digital-birth-extract">Verify Digital Birth Extract</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["death"] ? "active" : ""}`}
                        onClick={() => togglePanel("death")}
                      >
                        Death Certificate
                      </div>
                      <div className="panel" style={{ display: openPanels["death"] ? "block" : "none" }}>
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="#/documents/death/death_registration">Register and Download Digital Death Certificate</a>
                            </li>
                            <li>
                              <a href="#/documents/death/apply_extract">Loss/Damage</a>
                            </li>
                            <li>
                              <a href="#/documents/death/apply_extract">Apply for Death Extract</a>
                            </li>
                            <li>
                              <a href="#/eservicesandforms/ecert/download-digital-death-extract">Download Digital Death Extract</a>
                            </li>
                            <li>
                              <a href="#/eservicesandforms/ecert/verify-digital-death-certificate">Verify Digital Death Certificate</a>
                            </li>
                            <li>
                              <a href="#/eservicesandforms/ecert/verify-digital-death-extract">Verify Digital Death Extract</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["stillbirth"] ? "active" : ""}`}
                        onClick={() => togglePanel("stillbirth")}
                      >
                        Stillbirth Certificate
                      </div>
                      <div className="panel" style={{ display: openPanels["stillbirth"] ? "block" : "none" }}>
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="#/documents/stillbirth-certificate/register-and-download-digital-stillbirth-certificate">Register and Download Digital Stillbirth Certificate</a>
                            </li>
                            <li>
                              <a href="#/eservicesandforms/ecert/verify-digital-stillbirth-certificate">Verify Digital Stillbirth Certificate</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Block 3: Desktop View */}
                  <div className="mega-menu-content-full-width">
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Birth of Child in Singapore for Foreigners</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="#/reside/LTVP/apply/visitor-seeking-permission-to-give-birth-in-singapore">Delivering a Child in Singapore</a>
                          </li>
                          <li>
                            <a href="#/documents/birth/birth_registration">Register Birth</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Birth/Death that Occurred Overseas</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="#/enter-depart/for-singapore-citizens/child-born-overseas">Child Born Overseas</a>
                          </li>
                          <li>
                            <a href="#/documents/death/death_overseas">Report Death that Occurred Overseas</a>
                          </li>
                          <li>
                            <a href="#/enter-transit-depart/entering-singapore/what-you-can-bring/remaintransfer">Transfer of Remains for Cremation/Burial In Singapore</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Student's Pass</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="#/reside/STP/apply">Apply/Renew</a>
                          </li>
                          <li>
                            <a href="#/reside/STP/collect">Completion of Formalities &amp; Issuance</a>
                          </li>
                          <li>
                            <a href="#/reside/STP/change-address">Change of Local Address</a>
                          </li>
                          <li>
                            <a href="#/reside/STP/loss-damage">Loss/Damage</a>
                          </li>
                          <li>
                            <a href="#/reside/STP/cancel">Cancel</a>
                          </li>
                          <li>
                            <a href="#/checkpass">Check Validity</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Long-Term Visit Pass</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="#/reside/LTVP/apply">Apply/Renew</a>
                          </li>
                          <li>
                            <a href="#/reside/LTVP/cof-and-issue">Completion of Formalities &amp; Issuance (For applications submitted before 26 June 2024)</a>
                          </li>
                          <li>
                            <a href="#/reside/LTVP/cof-and-issue-new">Completion of Formalities &amp; Issuance (For applications submitted on or after 26 June 2024)</a>
                          </li>
                          <li>
                            <a href="#/reside/LTVP/update-particulars">Change of Passport Particulars or Residential Address</a>
                          </li>
                          <li>
                            <a href="#/checkpass">Check Validity</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                  </div>

                  {/* Block 3: Mobile View Accordion */}
                  <div className="mobile-nav-wrapper-2">
                    <div className="mobile-nav-content">
                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["foreign-child"] ? "active" : ""}`}
                        onClick={() => togglePanel("foreign-child")}
                      >
                        Birth of Child in Singapore for Foreigners
                      </div>
                      <div className="panel" style={{ display: openPanels["foreign-child"] ? "block" : "none" }}>
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="#/reside/LTVP/apply/visitor-seeking-permission-to-give-birth-in-singapore">Delivering a Child in Singapore</a>
                            </li>
                            <li>
                              <a href="#/documents/birth/birth_registration">Register Birth</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["overseas"] ? "active" : ""}`}
                        onClick={() => togglePanel("overseas")}
                      >
                        Birth/Death that Occurred Overseas
                      </div>
                      <div className="panel" style={{ display: openPanels["overseas"] ? "block" : "none" }}>
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="#/enter-depart/for-singapore-citizens/child-born-overseas">Child Born Overseas</a>
                            </li>
                            <li>
                              <a href="#/documents/death/death_overseas">Report Death that Occurred Overseas</a>
                            </li>
                            <li>
                              <a href="#/enter-transit-depart/entering-singapore/what-you-can-bring/remaintransfer">Transfer of Remains for Cremation/Burial In Singapore</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["stp"] ? "active" : ""}`}
                        onClick={() => togglePanel("stp")}
                      >
                        Student's Pass
                      </div>
                      <div className="panel" style={{ display: openPanels["stp"] ? "block" : "none" }}>
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="#/reside/STP/apply">Apply/Renew</a>
                            </li>
                            <li>
                              <a href="#/reside/STP/collect">Completion of Formalities &amp; Issuance</a>
                            </li>
                            <li>
                              <a href="#/reside/STP/change-address">Change of Local Address</a>
                            </li>
                            <li>
                              <a href="#/reside/STP/loss-damage">Loss/Damage</a>
                            </li>
                            <li>
                              <a href="#/reside/STP/cancel">Cancel</a>
                            </li>
                            <li>
                              <a href="#/checkpass">Check Validity</a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["ltvp"] ? "active" : ""}`}
                        onClick={() => togglePanel("ltvp")}
                      >
                        Long-Term Visit Pass
                      </div>
                      <div className="panel" style={{ display: openPanels["ltvp"] ? "block" : "none" }}>
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="#/reside/LTVP/apply">Apply/Renew</a>
                            </li>
                            <li>
                              <a href="#/reside/LTVP/cof-and-issue">Completion of Formalities &amp; Issuance (For applications submitted before 26 June 2024)</a>
                            </li>
                            <li>
                              <a href="#/reside/LTVP/cof-and-issue-new">Completion of Formalities &amp; Issuance (For applications submitted on or after 26 June 2024)</a>
                            </li>
                            <li>
                              <a href="#/reside/LTVP/update-particulars">Change of Passport Particulars or Residential Address</a>
                            </li>
                            <li>
                              <a href="#/checkpass">Check Validity</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
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
          if (view === "faqs" && onNavigateToFaqs) return onNavigateToFaqs();
          if (view === "reach" && onNavigateToReach) return onNavigateToReach();
          window.location.hash = "#" + view;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
