import React from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import "./SitemapPage.css";

export default function SitemapPage({
  onNavigateToCheckpoints,
  onNavigateToStatus,
  onNavigateToContact,
  onNavigateHome,
  onNavigateToFeedback,
  onNavigateToFaqs,
  onNavigateToUserResearch,
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
  const handleGlobalNavigate = (view) => {
    if (onNavigate) {
      onNavigate(view);
      return;
    }
    if (view === "home" && onNavigateHome) return onNavigateHome();
    if (view === "newsroom" && onNavigateToNewsroom) return onNavigateToNewsroom();
    if (view === "publications" && onNavigateToPublications) return onNavigateToPublications();
    if (view === "statistics" && onNavigateToStatistics) return onNavigateToStatistics();
    if (view === "public-education" && onNavigateToPublicEducation) return onNavigateToPublicEducation();
    if (view === "checkpoints" && onNavigateToCheckpoints) return onNavigateToCheckpoints();
    if (view === "checkstatus" && onNavigateToStatus) return onNavigateToStatus();
    if (view === "contactus" && onNavigateToContact) return onNavigateToContact();
    if (view === "feedback" && onNavigateToFeedback) return onNavigateToFeedback();
    if (view === "askgov") return handleGlobalNavigate("home");
    if (view === "user-research" && onNavigateToUserResearch) return onNavigateToUserResearch();
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
    if (view === "privacy-statement" && onNavigateToPrivacyStatement) return onNavigateToPrivacyStatement();
    window.location.hash = "#" + view;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectChange = (e) => {
    const val = e.target.value;
    if (!val) return;
    if (val === "/") handleGlobalNavigate("home");
    else if (val.includes("document")) handleGlobalNavigate("documents");
    else if (val.includes("enter") || val.includes("transit") || val.includes("depart")) handleGlobalNavigate("enter-transit-depart");
    else if (val.includes("reside")) handleGlobalNavigate("reside");
    else if (val.includes("eservices")) handleGlobalNavigate("eservicesandforms");
    else if (val.includes("checkpoint")) handleGlobalNavigate("checkpoints");
    else if (val.includes("vision") || val.includes("mission") || val.includes("values")) handleGlobalNavigate("vision-mission-values");
    else if (val.includes("people")) handleGlobalNavigate("our-people");
    else if (val.includes("award")) handleGlobalNavigate("awards-accolades");
    else if (val.includes("commitment")) handleGlobalNavigate("our-service-commitment");
    else if (val.includes("contact")) handleGlobalNavigate("contactus");
    else if (val.includes("feedback")) handleGlobalNavigate("feedback");
    else if (val.includes("faq") || val.includes("askgov")) handleGlobalNavigate("home");
    else if (val.includes("status") || val.includes("appointment")) handleGlobalNavigate("checkstatus");
    else if (val.includes("user-research")) handleGlobalNavigate("user-research");
    else if (val.includes("terms")) handleGlobalNavigate("terms-of-use");
    else if (val.includes("privacy")) handleGlobalNavigate("privacy-statement");
    else handleGlobalNavigate("home");
  };

  return (
    <div className="site-wrapper sitemap-page-wrapper">
      {/* Singapore Government Masthead */}
      <GovMasthead />

      {/* Official Header */}
      <SiteHeader
        searchQuery=""
        setSearchQuery={() => {}}
        totalMatches={0}
        isSearching={false}
        activeView="sitemap"
        onNavigate={handleGlobalNavigate}
      />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content">
            {/* Breadcrumbs: Home > Sitemap */}
            <div>
              <div className="bread-crumb-wrapper">
                <div
                  id="Main_T2F5F0F2A001_Col00"
                  className="sf_colsIn"
                  data-sf-element="Breadcrumbs"
                  data-placeholder-label="Breadcrumbs"
                >
                  <Breadcrumbs
                    activeView="sitemap"
                    onNavigate={handleGlobalNavigate}
                  />
                </div>
              </div>
            </div>

            {/* Horizontal e-Services Bar */}
            <EServicesBar
              activeView="sitemap"
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
                  id="Main_T2F5F0F2A001_Col01"
                  className="sf_colsIn"
                  data-sf-element="Page Title"
                  data-placeholder-label="Page Title"
                >
                  <span>Sitemap</span>
                </span>
              </h1>

              <hr />

              <div className="standard-content">
                <div
                  id="Main_T2F5F0F2A001_Col02"
                  className="sf_colsIn article"
                  data-placeholder-label="Standard Content"
                  data-sf-element="Standard Content"
                >
                  {/* Select Dropdown for Quick Mobile Access */}
                  <div className="sitemap-select-container">
                    <select
                      className="nav-select form-control"
                      aria-label="ICA sitemap menu"
                      onChange={handleSelectChange}
                      defaultValue=""
                    >
                      <option value="" disabled>-- Select a page to jump --</option>
                      <option value="/">- Home</option>
                      <option value="/documents">- Identity Card, Passport and other Documents</option>
                      <option value="/documents/identity-cards">-- Identity Cards</option>
                      <option value="/documents/singapore-passport">-- Singapore Passport</option>
                      <option value="/documents/certificate-of-identity">-- Certificate of Identity</option>
                      <option value="/documents/citizenship-certificate">-- Citizenship Certificate</option>
                      <option value="/documents/birth-certificate">-- Birth Certificate</option>
                      <option value="/documents/death-certificate">-- Death Certificate</option>
                      <option value="/enter-transit-depart">- Entering, Transiting and Departing</option>
                      <option value="/enter-transit-depart/entering-singapore">-- Entering Singapore</option>
                      <option value="/enter-transit-depart/transiting-singapore">-- Transiting Through Singapore</option>
                      <option value="/enter-transit-depart/departing-singapore">-- Departing From Singapore</option>
                      <option value="/enter-transit-depart/at-our-checkpoints">-- At Our Checkpoints</option>
                      <option value="/enter-transit-depart/visit-pass-validity-tool">-- Visit Pass Validity Tool</option>
                      <option value="/enter-transit-depart/extend-stay">-- Extend Stay</option>
                      <option value="/enter-transit-depart/more-information">-- More Information</option>
                      <option value="/reside">- Reside, Study and Work in Singapore</option>
                      <option value="/reside/citizenship">-- Singapore Citizenship</option>
                      <option value="/reside/PR">-- Permanent Residence</option>
                      <option value="/reside/PMLA">-- For Singapore Citizen - Non-Resident Couples</option>
                      <option value="/reside/LTVP">-- Long-Term Visit Pass</option>
                      <option value="/reside/STP">-- Student's Pass</option>
                      <option value="/reside/reside-appeals">-- Appeal for Singapore Citizenship/ Permanent Residence/ Long-Term Visit Pass</option>
                      <option value="/eservicesandforms">- e-Services and Forms</option>
                      <option value="/checkstatus">- Check Status / Make Appointment</option>
                      <option value="/about-us/vision-mission-values">- Vision, Mission &amp; Values</option>
                      <option value="/about-us/our-checkpoints">- Our Checkpoints</option>
                      <option value="/about-us/our-people">- Our People</option>
                      <option value="/about-us/awards-accolades">- Awards &amp; Accolades</option>
                      <option value="/about-us/our-service-commitment">- Our Service Commitment</option>
                      <option value="/contact-us">- Contact Us</option>
                      <option value="/user-research">- User Research</option>
                      <option value="/terms-of-use">- Terms of Use</option>
                      <option value="/privacy-statement">- Privacy Statement</option>
                    </select>
                  </div>

                  {/* Complete Structured Sitemap Tree (#navbar-1) */}
                  <ul id="navbar-1" className="sitemap-tree">
                    <li>
                      <a
                        href="#home"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGlobalNavigate("home");
                        }}
                      >
                        Home
                      </a>
                    </li>

                    {/* Section 1: Documents */}
                    <li>
                      <a
                        href="#documents"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGlobalNavigate("documents");
                        }}
                      >
                        Identity Card, Passport and other Documents
                      </a>
                      <ul>
                        <li>
                          <a
                            href="#documents"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("documents");
                            }}
                          >
                            Identity Cards
                          </a>
                        </li>
                        <li>
                          <a
                            href="#documents"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("documents");
                            }}
                          >
                            Singapore Passport
                          </a>
                        </li>
                        <li>
                          <a
                            href="#documents"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("documents");
                            }}
                          >
                            Certificate of Identity
                          </a>
                        </li>
                        <li>
                          <a
                            href="#documents"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("documents");
                            }}
                          >
                            Citizenship Certificate
                          </a>
                        </li>
                        <li>
                          <a
                            href="#documents"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("documents");
                            }}
                          >
                            Birth Certificate
                          </a>
                        </li>
                        <li>
                          <a
                            href="#documents"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("documents");
                            }}
                          >
                            Death Certificate
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Section 2: Enter Transit Depart */}
                    <li>
                      <a
                        href="#enter-transit-depart"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGlobalNavigate("enter-transit-depart");
                        }}
                      >
                        Entering, Transiting and Departing
                      </a>
                      <ul>
                        <li>
                          <a
                            href="#enter-transit-depart"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("enter-transit-depart");
                            }}
                          >
                            Entering Singapore
                          </a>
                        </li>
                        <li>
                          <a
                            href="#enter-transit-depart"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("enter-transit-depart");
                            }}
                          >
                            Transiting Through Singapore
                          </a>
                        </li>
                        <li>
                          <a
                            href="#enter-transit-depart"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("enter-transit-depart");
                            }}
                          >
                            Departing From Singapore
                          </a>
                        </li>
                        <li>
                          <a
                            href="#checkpoints"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("checkpoints");
                            }}
                          >
                            At Our Checkpoints
                          </a>
                        </li>
                        <li>
                          <a
                            href="#enter-transit-depart"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("enter-transit-depart");
                            }}
                          >
                            Visit Pass Validity Tool
                          </a>
                        </li>
                        <li>
                          <a
                            href="#enter-transit-depart"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("enter-transit-depart");
                            }}
                          >
                            Extend Stay
                          </a>
                        </li>
                        <li>
                          <a
                            href="#enter-transit-depart"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("enter-transit-depart");
                            }}
                          >
                            More Information
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Section 3: Reside */}
                    <li>
                      <a
                        href="#reside"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGlobalNavigate("reside");
                        }}
                      >
                        Reside, Study and Work in Singapore
                      </a>
                      <ul>
                        <li>
                          <a
                            href="#reside"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("reside");
                            }}
                          >
                            Singapore Citizenship
                          </a>
                        </li>
                        <li>
                          <a
                            href="#reside"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("reside");
                            }}
                          >
                            Permanent Residence
                          </a>
                        </li>
                        <li>
                          <a
                            href="#reside"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("reside");
                            }}
                          >
                            For Singapore Citizen - Non-Resident Couples
                          </a>
                        </li>
                        <li>
                          <a
                            href="#reside"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("reside");
                            }}
                          >
                            Long-Term Visit Pass
                          </a>
                        </li>
                        <li>
                          <a
                            href="#reside"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("reside");
                            }}
                          >
                            Student's Pass
                          </a>
                        </li>
                        <li>
                          <a
                            href="#reside"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("reside");
                            }}
                          >
                            Appeal for Singapore Citizenship/ Permanent Residence/ Long-Term Visit Pass
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Section 4: e-Services and Forms */}
                    <li>
                      <a
                        href="#eservicesandforms"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGlobalNavigate("eservicesandforms");
                        }}
                      >
                        e-Services and Forms
                      </a>
                      <ul>
                        <li><a href="#documents" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("documents"); }}>Apply for Passport</a></li>
                        <li><a href="#documents" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("documents"); }}>Report Lost Passport</a></li>
                        <li><a href="#eservicesandforms" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("eservicesandforms"); }}>Apply for APEC Business Travel Card (ABTC)</a></li>
                        <li><a href="#documents" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("documents"); }}>Report Change of Residential Address for IC Holder</a></li>
                        <li><a href="#reside" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("reside"); }}>Apply for Permanent Residence (PR)</a></li>
                        <li><a href="#reside" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("reside"); }}>Apply for Renewal/Transfer of Re-Entry Permit (REP)</a></li>
                        <li><a href="#reside" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("reside"); }}>Apply for Singapore Citizenship</a></li>
                        <li><a href="#reside" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("reside"); }}>Apply for Long-Term Visit Pass</a></li>
                        <li><a href="#reside" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("reside"); }}>Apply for Pre-Marriage Long-Term Visit Pass Assessment (PMLA)</a></li>
                        <li><a href="#enter-transit-depart" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("enter-transit-depart"); }}>Apply for Extension of Short-Term Visit Pass</a></li>
                        <li><a href="#documents" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("documents"); }}>Apply for Extract or Search for record of Birth/Death</a></li>
                        <li><a href="#documents" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("documents"); }}>Register/Re-register/Replace Identity Card</a></li>
                        <li><a href="#checkstatus" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("checkstatus"); }}>Enquire Application Status (iEnquiry)</a></li>
                        <li><a href="#checkstatus" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("checkstatus"); }}>Apply Entry Visa</a></li>
                        <li><a href="#reside" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("reside"); }}>Apply for Student's Pass for Institutes of Higher Learning</a></li>
                        <li><a href="#reside" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("reside"); }}>Apply for Student's Pass for Other Schools</a></li>
                        <li><a href="#checkstatus" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("checkstatus"); }}>Check Validity of Immigration Pass</a></li>
                        <li><a href="#enter-transit-depart" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("enter-transit-depart"); }}>Submit SG Arrival Card</a></li>
                        <li><a href="#documents" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("documents"); }}>Check Validity of Identity Card (IC)</a></li>
                        <li><a href="#checkstatus" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("checkstatus"); }}>e-Pass Enquiry Portal</a></li>
                        <li><a href="#eservicesandforms" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("eservicesandforms"); }}>View All Downloadable Forms</a></li>
                      </ul>
                    </li>

                    {/* Section 5: Audience Categories */}
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("home"); }}>Singapore Citizen - See More</a></li>
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("home"); }}>Permanent Resident - See More</a></li>
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("home"); }}>Pass Holder - See More</a></li>
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("home"); }}>Visitor - See More</a></li>

                    {/* Section 6: Check Status / Make Appointment */}
                    <li>
                      <a
                        href="#checkstatus"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGlobalNavigate("checkstatus");
                        }}
                      >
                        Check Status / Make Appointment
                      </a>
                      <ul>
                        <li>
                          <a
                            href="#checkstatus"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("checkstatus");
                            }}
                          >
                            Make an Appointment
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Section 7: About Us */}
                    <li>
                      <span className="sitemap-category-label">About Us</span>
                      <ul>
                        <li>
                          <a
                            href="#vision-mission-values"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("vision-mission-values");
                            }}
                          >
                            Vision, Mission &amp; Values
                          </a>
                        </li>
                        <li>
                          <a
                            href="#checkpoints"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("checkpoints");
                            }}
                          >
                            Our Checkpoints
                          </a>
                        </li>
                        <li>
                          <a
                            href="#our-people"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("our-people");
                            }}
                          >
                            Our People
                          </a>
                        </li>
                        <li>
                          <a
                            href="#awards-accolades"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("awards-accolades");
                            }}
                          >
                            Awards &amp; Accolades
                          </a>
                        </li>
                        <li>
                          <a
                            href="#our-service-commitment"
                            onClick={(e) => {
                              e.preventDefault();
                              handleGlobalNavigate("our-service-commitment");
                            }}
                          >
                            Our Service Commitment
                          </a>
                        </li>
                      </ul>
                    </li>

                    {/* Section 8: General & Service Links */}
                    <li>
                      <a
                        href="#contactus"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGlobalNavigate("contactus");
                        }}
                      >
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="#feedback"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGlobalNavigate("feedback");
                        }}
                      >
                        Feedback
                      </a>
                      <ul>
                        <li><a href="#feedback" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("feedback"); }}>Passport Feedback</a></li>
                        <li><a href="#feedback" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("feedback"); }}>Singapore Citizenship Feedback</a></li>
                        <li><a href="#feedback" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("feedback"); }}>Permanent Residence Feedback</a></li>
                        <li><a href="#feedback" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("feedback"); }}>Long-Term Visit Pass Feedback</a></li>
                        <li><a href="#feedback" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("feedback"); }}>Service Feedback</a></li>
                        <li><a href="#feedback" onClick={(e) => { e.preventDefault(); handleGlobalNavigate("feedback"); }}>Others (e.g. Scams Related to ICA)</a></li>
                      </ul>
                    </li>
                    <li>
                      <a
                        href="#user-research"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGlobalNavigate("user-research");
                        }}
                      >
                        User Research
                      </a>
                    </li>
                    <li>
                      <a
                        href="#terms-of-use"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGlobalNavigate("terms-of-use");
                        }}
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      <a
                        href="#privacy-statement"
                        onClick={(e) => {
                          e.preventDefault();
                          handleGlobalNavigate("privacy-statement");
                        }}
                      >
                        Privacy Statement
                      </a>
                    </li>
                  </ul>
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
