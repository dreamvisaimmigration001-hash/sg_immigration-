import React, { useState } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import "./EServicesFormsPage.css";

export default function EServicesFormsPage({
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
    } else if (id === "reside") {
      if (onNavigateToReside) onNavigateToReside();
      else if (onNavigate) onNavigate("reside");
      else window.location.hash = "#reside";
    } else if (id === "eservicesandforms" || id === "eservices") {
      // already here
    } else {
      if (onNavigateToCheckpoints) onNavigateToCheckpoints();
      else if (onNavigate) onNavigate("checkpoints");
      else window.location.hash = "#checkpoints";
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-wrapper eservices-forms-wrapper">
      {/* Singapore Government Masthead */}
      <GovMasthead />

      {/* Official Header */}
      <SiteHeader
        searchQuery=""
        setSearchQuery={() => { }}
        totalMatches={0}
        isSearching={false}
        activeView="eservicesandforms"
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
              activeView="eservicesandforms"
              onNavigate={(view) => {
                if (view === "checkpoints") onNavigateToCheckpoints();
                if (view === "checkstatus") onNavigateToStatus();
                if (view === "contactus") onNavigateToContact();
              }}
            />

            {/* Horizontal e-Services Bar */}
            <EServicesBar
              activeView="eservicesandforms"
              onSelectService={handleSelectService}
            />

            <div className="container container--no-padding">
              <div className="mega-menu-wrapper">
                <div id="Main_T042D2BA7001_Col01" className="sf_colsIn" data-sf-element="Mega Menu Content" data-placeholder-label="Mega Menu Content">

                  {/* ========================================================
                      BLOCK 1: Passport & IC, SG Arrival Card, Check Validity, Address
                     ======================================================== */}
                  <div className="mega-menu-content-full-width">
                    <div className="mega-menu-title"></div>

                    {/* Column 1: Passport and Identity Card */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Passport and Identity Card</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/esvclandingpage/apples">Apply for Travel Document (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/report-lost-dmg-ppt">Report Lost Passport (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/iconline">Register/Re-Register/Replace Identity Card (Time needed: 15-20mins)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/iconline">Report Lost Identity Card (Time needed: 15-20mins)</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 2: SG Arrival Card, Entry Visa, e-Pass Enquiry Portal and Extension of Visit Pass */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">SG Arrival Card, Entry Visa, e-Pass Enquiry Portal and Extension of Visit Pass</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/eservicesandforms/sgarrivalcard">Submit SG Arrival Card (Time needed: 5-7mins for individual submission)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/save">Apply for Entry Visa (Time needed: 15-20mins)</a>
                          </li>
                          <li>
                            <a href="/eservicesandforms/search-e-pass-record">Retrieve e-Pass Record (Time needed: 3-5mins)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/extend">Apply for Extension of Visit Pass (Time needed: 10-15mins)</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 3: Check Validity/Verify */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Check Validity/Verify</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/checkic">Identity Card (IC) (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/checkpass">Immigration Pass (i.e. Long-Term Visit Pass, Student's Pass) (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/eservicesandforms/ecert/verify-digital-birth-certificate">Digital Birth Certificate (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/eservicesandforms/ecert/verify-digital-birth-extract">Digital Birth Extract (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/eservicesandforms/ecert/verify-digital-death-certificate">Digital Death Certificate (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/eservicesandforms/ecert/verify-digital-death-extract">Digital Death Extract (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/eservicesandforms/ecert/verify-digital-stillbirth-certificate">Digital Stillbirth Certificate (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/eservicesandforms/ecert/verify-digital-stillbirth-extract">Digital Stillbirth Extract (Time needed: 5-10mins)</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 4: Report Change of Residential Address */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Report Change of Residential Address</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/esvclandingpage/ecoa">For IC holder (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/ecoa">For LTVP/STP holder (Time needed: 5-10mins)</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                  </div>

                  {/* Block 1 Mobile */}
                  <div className="mobile-nav-wrapper-2">
                    <div className="mobile-nav-content">
                      <div className="mobile-nav-title"></div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["ppt-ic"] ? "active" : ""}`}
                        onClick={() => togglePanel("ppt-ic")}
                      >
                        Passport and Identity Card
                      </div>
                      {openPanels["ppt-ic"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/esvclandingpage/apples">Apply for Travel Document (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/report-lost-dmg-ppt">Report Lost Passport (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/iconline">Register/Re-Register/Replace Identity Card (Time needed: 15-20mins)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/iconline">Report Lost Identity Card (Time needed: 15-20mins)</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["sgac-visa"] ? "active" : ""}`}
                        onClick={() => togglePanel("sgac-visa")}
                      >
                        SG Arrival Card, Entry Visa, e-Pass Enquiry Portal and Extension of Visit Pass
                      </div>
                      {openPanels["sgac-visa"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/eservicesandforms/sgarrivalcard">Submit SG Arrival Card (Time needed: 5-7mins for individual submission)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/save">Apply for Entry Visa (Time needed: 15-20mins)</a>
                              </li>
                              <li>
                                <a href="/eservicesandforms/search-e-pass-record">Retrieve e-Pass Record (Time needed: 3-5mins)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/extend">Apply for Extension of Visit Pass (Time needed: 10-15mins)</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["check-validity"] ? "active" : ""}`}
                        onClick={() => togglePanel("check-validity")}
                      >
                        Check Validity/Verify
                      </div>
                      {openPanels["check-validity"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/checkic">Identity Card (IC) (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/checkpass">Immigration Pass (i.e. Long-Term Visit Pass, Student's Pass) (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/eservicesandforms/ecert/verify-digital-birth-certificate">Digital Birth Certificate (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/eservicesandforms/ecert/verify-digital-birth-extract">Digital Birth Extract (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/eservicesandforms/ecert/verify-digital-death-certificate">Digital Death Certificate (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/eservicesandforms/ecert/verify-digital-death-extract">Digital Death Extract (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/eservicesandforms/ecert/verify-digital-stillbirth-certificate">Digital Stillbirth Certificate (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/eservicesandforms/ecert/verify-digital-stillbirth-extract">Digital Stillbirth Extract (Time needed: 5-10mins)</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["address"] ? "active" : ""}`}
                        onClick={() => togglePanel("address")}
                      >
                        Report Change of Residential Address
                      </div>
                      {openPanels["address"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/esvclandingpage/ecoa">For IC holder (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/ecoa">For LTVP/STP holder (Time needed: 5-10mins)</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ========================================================
                      BLOCK 2: Citizenship & PR, LTVP & STP, Birth & Death, Cargo
                     ======================================================== */}
                  <div className="mega-menu-content-full-width">
                    <div className="mega-menu-title"></div>

                    {/* Column 1: Singapore Citizenship and Permanent Residence */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Singapore Citizenship and Permanent Residence</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/esvclandingpage/esc">Apply for Singapore Citizenship (Time needed: 90mins)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/epr">Apply for Permanent Residence (Time needed: 90mins)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/erep">Apply Renewal/Transfer of Re-Entry Permit (Time needed: 5-10mins)</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 2: Long-Term Visit Pass and Student’s Pass */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Long-Term Visit Pass and Student’s Pass</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/esvclandingpage/evp">Apply/Renew Long-Term Visit Pass (Time needed: 20mins)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/evpaa">Apply for Pre-Marriage Long-Term Visit Pass Assessment (Time needed: 15-20mins)</a>
                          </li>
                          <li>
                            <a href="/eservicesandforms/solar">Apply/Renew Student's Pass for Institutes of Higher Learning (Time needed: 15-20mins)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/solarplus">Apply/Renew Student's Pass for Other Schools (Time needed: 20-25mins)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/solarplus">Apply for Cancellation of Student's Pass (Time needed 5-10mins)</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 3: Birth and Death */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Birth and Death</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/eservicesandforms/ecert/download-digital-birth-certificate">Download Digital Birth Certificate [for newborns only] (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/esvclandingpage/extracts">Apply for Birth or Death Extract (Time needed: 5-10mins)</a>
                          </li>
                          <li>
                            <a href="/eservicesandforms/ecert/download-digital-birth-certificate-extract">Download Digital Birth Extract</a>
                          </li>
                          <li>
                            <a href="/eservicesandforms/ecert/download-digital-death-extract">Download Digital Death Extract</a>
                          </li>
                          <li>
                            <a href="/redirect-links/formsg-report-death">Report Death that Occurred Overseas</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 4: Cargo Clearance */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Cargo Clearance</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/eservicesandforms/sgac-cargo-landing-page">Apply for paperless clearance for conventional cargo (Time needed: 5-10mins)</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                  </div>

                  {/* Block 2 Mobile */}
                  <div className="mobile-nav-wrapper-2">
                    <div className="mobile-nav-content">
                      <div className="mobile-nav-title"></div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["sc-pr"] ? "active" : ""}`}
                        onClick={() => togglePanel("sc-pr")}
                      >
                        Singapore Citizenship and Permanent Residence
                      </div>
                      {openPanels["sc-pr"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/esvclandingpage/esc">Apply for Singapore Citizenship (Time needed: 90mins)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/epr">Apply for Permanent Residence (Time needed: 90mins)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/erep">Apply Renewal/Transfer of Re-Entry Permit (Time needed: 5-10mins)</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["ltvp-stp"] ? "active" : ""}`}
                        onClick={() => togglePanel("ltvp-stp")}
                      >
                        Long-Term Visit Pass and Student’s Pass
                      </div>
                      {openPanels["ltvp-stp"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/esvclandingpage/evp">Apply/Renew Long-Term Visit Pass (Time needed: 20mins)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/evpaa">Apply for Pre-Marriage Long-Term Visit Pass Assessment (Time needed: 15-20mins)</a>
                              </li>
                              <li>
                                <a href="/eservicesandforms/solar">Apply/Renew Student's Pass for Institutes of Higher Learning (Time needed: 15-20mins)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/solarplus">Apply/Renew Student's Pass for Other Schools (Time needed: 20-25mins)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/solarplus">Apply for Cancellation of Student's Pass (Time needed 5-10mins)</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["birth-death"] ? "active" : ""}`}
                        onClick={() => togglePanel("birth-death")}
                      >
                        Birth and Death
                      </div>
                      {openPanels["birth-death"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/eservicesandforms/ecert/download-digital-birth-certificate">Download Digital Birth Certificate [for newborns only] (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/esvclandingpage/extracts">Apply for Birth or Death Extract (Time needed: 5-10mins)</a>
                              </li>
                              <li>
                                <a href="/eservicesandforms/ecert/download-digital-birth-certificate-extract">Download Digital Birth Extract</a>
                              </li>
                              <li>
                                <a href="/eservicesandforms/ecert/download-digital-death-extract">Download Digital Death Extract</a>
                              </li>
                              <li>
                                <a href="/redirect-links/formsg-report-death">Report Death that Occurred Overseas</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["cargo"] ? "active" : ""}`}
                        onClick={() => togglePanel("cargo")}
                      >
                        Cargo Clearance
                      </div>
                      {openPanels["cargo"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/eservicesandforms/sgac-cargo-landing-page">Apply for paperless clearance for conventional cargo (Time needed: 5-10mins)</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ========================================================
                      BLOCK 3: Appeal & Others
                     ======================================================== */}
                  <div className="mega-menu-content-full-width">
                    <div className="mega-menu-title"></div>

                    {/* Column 1: Appeal */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Appeal</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/eservicesandforms/appeal-for-singapore-citizenship--permanent-residence-or-long-term-visit-pass">Appeal for Singapore Citizenship/ Permanent Residence/ Long-Term Visit Pass Application</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Column 2: Others */}
                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Others</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/esvclandingpage/eabtc">Apply for APEC Business Travel Card (Time needed: 20-25mins)</a>
                          </li>
                          <li>
                            <a href="/redirect-links/formsg---ica---change-of-race-dialect">Apply to Change Race/Dialect (Time needed: 15-20mins)</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                  </div>

                  {/* Block 3 Mobile */}
                  <div className="mobile-nav-wrapper-2">
                    <div className="mobile-nav-content">
                      <div className="mobile-nav-title"></div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["appeal"] ? "active" : ""}`}
                        onClick={() => togglePanel("appeal")}
                      >
                        Appeal
                      </div>
                      {openPanels["appeal"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/eservicesandforms/appeal-for-singapore-citizenship--permanent-residence-or-long-term-visit-pass">Appeal for Singapore Citizenship/ Permanent Residence/ Long-Term Visit Pass Application</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["others"] ? "active" : ""}`}
                        onClick={() => togglePanel("others")}
                      >
                        Others
                      </div>
                      {openPanels["others"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/esvclandingpage/eabtc">Apply for APEC Business Travel Card (Time needed: 20-25mins)</a>
                              </li>
                              <li>
                                <a href="/redirect-links/formsg---ica---change-of-race-dialect">Apply to Change Race/Dialect (Time needed: 15-20mins)</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ========================================================
                      BLOCK 4: Make an Appointment
                     ======================================================== */}
                  <div className="mega-menu-content-full-width">
                    <div className="mega-menu-title"></div>

                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Make an Appointment</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/check-status-make-appointment/make-an-appointment/book-change-cancel-appointment">Book/Change/Cancel Appointment</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                  </div>

                  {/* Block 4 Mobile */}
                  <div className="mobile-nav-wrapper-2">
                    <div className="mobile-nav-content">
                      <div className="mobile-nav-title"></div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["appointment"] ? "active" : ""}`}
                        onClick={() => togglePanel("appointment")}
                      >
                        Make an Appointment
                      </div>
                      {openPanels["appointment"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/check-status-make-appointment/make-an-appointment/book-change-cancel-appointment">Book/Change/Cancel Appointment</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ========================================================
                      BLOCK 5: Forms
                     ======================================================== */}
                  <div className="mega-menu-content-full-width">
                    <div className="mega-menu-title"></div>

                    <div className="mega-menu-content-onefourth-width">
                      <div className="mega-menu-subtitle">Forms</div>
                      <div className="mega-menu-item">
                        <ul>
                          <li>
                            <a href="/eservicesandforms/all-forms">View all Downloadable Forms</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="clearfix"></div>
                  </div>

                  {/* Block 5 Mobile */}
                  <div className="mobile-nav-wrapper-2">
                    <div className="mobile-nav-content">
                      <div className="mobile-nav-title"></div>

                      <div
                        className={`mobile-nav-subtitle arrow accordion ${openPanels["forms"] ? "active" : ""}`}
                        onClick={() => togglePanel("forms")}
                      >
                        Forms
                      </div>
                      {openPanels["forms"] && (
                        <div className="panel">
                          <div className="seemore-menu-item">
                            <ul>
                              <li>
                                <a href="/eservicesandforms/all-forms">View all Downloadable Forms</a>
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
          if (view === "reside" && onNavigateToReside) return onNavigateToReside();
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
