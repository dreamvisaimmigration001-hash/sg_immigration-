import React, { useState, useRef } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import "./OurServiceCommitmentPage.css";

export default function OurServiceCommitmentPage({
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
    processing: true,
    counter: true,
    eservices: true,
    feedback: true,
    charter: true,
  });

  const sectionRefs = {
    processing: useRef(null),
    counter: useRef(null),
    eservices: useRef(null),
    feedback: useRef(null),
    charter: useRef(null),
  };

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const scrollToSection = (key) => {
    // Ensure section is expanded
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: true,
    }));

    const target = sectionRefs[key]?.current;
    if (target) {
      const topOffset = target.offsetTop - 140;
      window.scrollTo({
        top: topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="site-wrapper service-commitment-wrapper">
      {/* Singapore Government Masthead */}
      <GovMasthead />

      {/* Official Header */}
      <SiteHeader
        searchQuery=""
        setSearchQuery={() => {}}
        totalMatches={0}
        isSearching={false}
        activeView="our-service-commitment"
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
              activeView="our-service-commitment"
              onNavigate={(view) => {
                if (view === "checkpoints" && onNavigateToCheckpoints) onNavigateToCheckpoints();
                if (view === "checkstatus" && onNavigateToStatus) onNavigateToStatus();
                if (view === "contactus" && onNavigateToContact) onNavigateToContact();
              }}
            />

            {/* Horizontal e-Services list */}
            <EServicesBar
              activeView="our-service-commitment"
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

            {/* Main Content Container */}
            <div className="container commitment-container">
              <div className="commitment-header">
                <h1 className="commitment-main-title">Our Service Commitment</h1>
                <hr className="commitment-title-divider" />
              </div>

              {/* Quicklinks Nav */}
              <nav className="commitment-quicklinks" aria-label="Quick links to sections">
                <button
                  type="button"
                  className="commitment-quicklink-btn"
                  onClick={() => scrollToSection("processing")}
                >
                  Processing of Application for Immigration / Registration Facilities
                </button>
                <button
                  type="button"
                  className="commitment-quicklink-btn"
                  onClick={() => scrollToSection("counter")}
                >
                  Counter Services
                </button>
                <button
                  type="button"
                  className="commitment-quicklink-btn"
                  onClick={() => scrollToSection("eservices")}
                >
                  e-Services
                </button>
                <button
                  type="button"
                  className="commitment-quicklink-btn"
                  onClick={() => scrollToSection("feedback")}
                >
                  Feedback/Enquiry
                </button>
                <button
                  type="button"
                  className="commitment-quicklink-btn"
                  onClick={() => scrollToSection("charter")}
                >
                  Our Service Charter
                </button>
              </nav>

              {/* Lead Introduction */}
              <div className="commitment-intro">
                <p>
                  We secure our borders and uphold our laws on immigration and national registration. In doing so, we will also strive to provide greater convenience and secured services to our customers.
                </p>
                <p>
                  We are committed to delivering the service experience that our customers value by:
                </p>
                <ul>
                  <li>Understanding your needs;</li>
                  <li>Processing your applications and clearance efficiently;</li>
                  <li>Providing you with accurate information;</li>
                  <li>Responding to you in a timely manner; and</li>
                  <li>Performing our duties professionally</li>
                </ul>
              </div>

              {/* Accordion Sections */}
              <div className="commitment-accordion-list">
                {/* 1. Processing of Application */}
                <div
                  className="commitment-accordion-item"
                  ref={sectionRefs.processing}
                  id="section-processing"
                >
                  <button
                    type="button"
                    className={`commitment-accordion-header ${openAccordions.processing ? "open" : ""}`}
                    onClick={() => toggleAccordion("processing")}
                    aria-expanded={openAccordions.processing}
                  >
                    <svg
                      className={`commitment-chevron ${openAccordions.processing ? "expanded" : ""}`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#141b4d"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points={openAccordions.processing ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                    </svg>
                    <span className="commitment-header-text">
                      Processing of Application for Immigration / Registration Facilities
                    </span>
                  </button>

                  {openAccordions.processing && (
                    <div className="commitment-accordion-body">
                      <p>
                        We will process your application upon receiving all required documents.
                      </p>
                      <p>
                        We strive to meet the following processing time, but seek your understanding that some applications may take longer to process:
                      </p>

                      {/* Births & Deaths */}
                      <h4 className="commitment-section-subtitle">Births &amp; Deaths</h4>
                      <div className="commitment-table-wrapper">
                        <table className="commitment-table">
                          <thead>
                            <tr className="main-head">
                              <th style={{ width: "35%" }}>Service</th>
                              <th style={{ width: "65%" }}>Processing Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>Alteration of Child’s Name</strong></td>
                              <td>Within 3 working days</td>
                            </tr>
                            <tr>
                              <td><strong>Reporting of Overseas Death</strong></td>
                              <td>Within 3 working days</td>
                            </tr>
                            <tr>
                              <td><strong>Apply for Birth Extract</strong></td>
                              <td>Within 6 working days</td>
                            </tr>
                            <tr>
                              <td><strong>Apply for Death Extract</strong></td>
                              <td>Within 1 week</td>
                            </tr>
                            <tr>
                              <td><strong>Search for Birth/Death Records</strong></td>
                              <td>Within 3 weeks*</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <span className="commitment-footnote">*if required information is provided</span>

                      {/* Travel Documents */}
                      <h4 className="commitment-section-subtitle">Travel Documents</h4>
                      <div className="commitment-table-wrapper">
                        <table className="commitment-table">
                          <thead>
                            <tr className="main-head">
                              <th style={{ width: "35%" }}>Service</th>
                              <th style={{ width: "65%" }}>Processing Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>Apply for Passport</strong></td>
                              <td>Within 2 weeks</td>
                            </tr>
                            <tr>
                              <td><strong>Apply for Temporary Travel Document</strong></td>
                              <td>Within 2 weeks</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Identity Cards */}
                      <h4 className="commitment-section-subtitle">Identity Cards</h4>
                      <div className="commitment-table-wrapper">
                        <table className="commitment-table">
                          <thead>
                            <tr className="main-head">
                              <th style={{ width: "35%" }}>Service</th>
                              <th colSpan="2">Processing Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="sub-head">
                              <td rowSpan="2" style={{ backgroundColor: "#ffffff", color: "#282828" }}>
                                <strong>IC First Registration (aged 15)*</strong>
                              </td>
                              <td style={{ width: "32.5%" }}>For school registrants</td>
                              <td style={{ width: "32.5%" }}>For non-school registrants</td>
                            </tr>
                            <tr>
                              <td>Within 1 month<br /><em>(after biometrics enrolment in school)</em></td>
                              <td>Within 7 working days<br /><em>(after biometrics enrolment at ICA)</em></td>
                            </tr>
                            <tr>
                              <td><strong>IC Replacement</strong></td>
                              <td colSpan="2">Within 7 working days</td>
                            </tr>
                            <tr>
                              <td><strong>IC Re-registration</strong></td>
                              <td colSpan="2">Within 7 working days</td>
                            </tr>
                            <tr className="sub-head">
                              <td rowSpan="2" style={{ backgroundColor: "#ffffff", color: "#282828" }}>
                                <strong>Change of Residential Address for IC holder</strong>
                              </td>
                              <td>After application submission</td>
                              <td>After verification of PIN</td>
                            </tr>
                            <tr>
                              <td><strong>For PIN mailer to reach applicant</strong><br />Within 1 week</td>
                              <td><strong>For address sticker(s) to reach applicant</strong><br />Within 1 week</td>
                            </tr>
                            <tr>
                              <td><strong>Apply for Asia-Pacific Economic Cooperation (APEC) Business Travel Card</strong></td>
                              <td colSpan="2">Within 9 months</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <span className="commitment-footnote">*In person biometrics enrolment is required before processing can commence</span>

                      {/* Citizenship */}
                      <h4 className="commitment-section-subtitle">Citizenship</h4>
                      <div className="commitment-table-wrapper">
                        <table className="commitment-table">
                          <thead>
                            <tr className="main-head">
                              <th style={{ width: "35%" }}>Service</th>
                              <th style={{ width: "65%" }}>Processing Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>Oath-taking for Minors</strong></td>
                              <td>Within the same day</td>
                            </tr>
                            <tr>
                              <td><strong>Right of Entry</strong></td>
                              <td>Within 3 working days</td>
                            </tr>
                            <tr>
                              <td><strong>Apply for Citizenship</strong></td>
                              <td>Within 12 months</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Permanent Residence */}
                      <h4 className="commitment-section-subtitle">Permanent Residence</h4>
                      <div className="commitment-table-wrapper">
                        <table className="commitment-table">
                          <thead>
                            <tr className="main-head">
                              <th style={{ width: "35%" }}>Service</th>
                              <th colSpan="2">Processing Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>Apply for Certificate of Identity</strong></td>
                              <td colSpan="2">Within 3 working days</td>
                            </tr>
                            <tr className="sub-head">
                              <td rowSpan="2" style={{ backgroundColor: "#ffffff", color: "#282828" }}>
                                <strong>Re-Entry Permit</strong>
                              </td>
                              <td style={{ width: "32.5%" }}>Apply / Renew</td>
                              <td style={{ width: "32.5%" }}>Transfer</td>
                            </tr>
                            <tr>
                              <td>Within 1 week</td>
                              <td>Within 3 working days</td>
                            </tr>
                            <tr>
                              <td><strong>Apply for Permanent Residence</strong></td>
                              <td colSpan="2">Within 6 months</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Student's Pass */}
                      <h4 className="commitment-section-subtitle">Student's Pass</h4>
                      <div className="commitment-table-wrapper">
                        <table className="commitment-table">
                          <thead>
                            <tr className="main-head">
                              <th rowSpan="2" style={{ width: "35%" }}>Service</th>
                              <th colSpan="3">Processing Time</th>
                            </tr>
                            <tr className="sub-head">
                              <th style={{ width: "25%" }}>Apply</th>
                              <th style={{ width: "20%" }}>Renew</th>
                              <th style={{ width: "20%" }}>Transfer</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>Government / Government-Aided / Independent Schools</strong></td>
                              <td>Within 1 week</td>
                              <td>Within 1 week</td>
                              <td>Not applicable</td>
                            </tr>
                            <tr>
                              <td><strong>Foreign System Schools</strong></td>
                              <td>Within 1 week</td>
                              <td>Within 1 week</td>
                              <td>Not applicable</td>
                            </tr>
                            <tr>
                              <td><strong>Institutes of Technical Education</strong></td>
                              <td>Within 1 week</td>
                              <td>Within 1 week</td>
                              <td>Not applicable</td>
                            </tr>
                            <tr>
                              <td><strong>Institutes of Higher Learning</strong></td>
                              <td>Within 1 week<br /><em>(Within 2 weeks if Visa is required)</em></td>
                              <td>Not applicable</td>
                              <td>Not applicable</td>
                            </tr>
                            <tr>
                              <td><strong>Kindergartens and Childcare Centres</strong></td>
                              <td>Within 2 weeks</td>
                              <td>Within 1 week</td>
                              <td>Within 1 week</td>
                            </tr>
                            <tr>
                              <td>
                                <strong>Private Education Institutions (EduTrust &amp; Non-EduTrust)</strong>
                              </td>
                              <td>
                                <strong>By EduTrust:</strong> Within 2 weeks<br />
                                <strong>By Non-EduTrust:</strong> Within 1 month
                              </td>
                              <td>Within 1 week</td>
                              <td>Within 1 week</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Visa */}
                      <h4 className="commitment-section-subtitle">Visa</h4>
                      <div className="commitment-table-wrapper">
                        <table className="commitment-table">
                          <thead>
                            <tr className="main-head">
                              <th style={{ width: "35%" }}>Service</th>
                              <th style={{ width: "65%" }}>Processing Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>Apply for Visa</strong></td>
                              <td>Within 3 working days</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      {/* Visit Pass */}
                      <h4 className="commitment-section-subtitle">Visit Pass</h4>
                      <div className="commitment-table-wrapper">
                        <table className="commitment-table">
                          <thead>
                            <tr className="main-head">
                              <th style={{ width: "35%" }}>Service</th>
                              <th style={{ width: "65%" }}>Processing Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>Apply for Extension of Short-Term Visit Pass</strong></td>
                              <td>Within 5 working days</td>
                            </tr>
                            <tr>
                              <td><strong>Pre-Marriage Long-Term Visit Pass Assessment</strong></td>
                              <td>Within 1 month</td>
                            </tr>
                            <tr>
                              <td><strong>Long-Term Visit Pass (Apply / Renew)</strong></td>
                              <td>Within 6 weeks*</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <span className="commitment-footnote">
                        *For spouse of Singapore Citizen who did not submit a Pre-Marriage Long-Term Visit Pass Assessment (PMLA), application for LTVP would be processed within 6 months.
                      </span>
                    </div>
                  )}
                </div>

                {/* 2. Counter Services */}
                <div
                  className="commitment-accordion-item"
                  ref={sectionRefs.counter}
                  id="section-counter"
                >
                  <button
                    type="button"
                    className={`commitment-accordion-header ${openAccordions.counter ? "open" : ""}`}
                    onClick={() => toggleAccordion("counter")}
                    aria-expanded={openAccordions.counter}
                  >
                    <svg
                      className={`commitment-chevron ${openAccordions.counter ? "expanded" : ""}`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#141b4d"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points={openAccordions.counter ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                    </svg>
                    <span className="commitment-header-text">Counter Services</span>
                  </button>

                  {openAccordions.counter && (
                    <div className="commitment-accordion-body">
                      <p>
                        You are encouraged to{" "}
                        <a
                          href="#status"
                          onClick={(e) => {
                            e.preventDefault();
                            if (onNavigateToStatus) onNavigateToStatus();
                          }}
                          style={{ color: "#1c76d5", textDecoration: "underline", fontWeight: 600 }}
                        >
                          book an appointment with us
                        </a>.
                      </p>
                      <div className="commitment-table-wrapper">
                        <table className="commitment-table">
                          <thead>
                            <tr className="main-head">
                              <th style={{ width: "35%" }}>Category</th>
                              <th style={{ width: "65%" }}>Waiting Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>With Appointment</strong></td>
                              <td>If you arrive within 15 minutes of your scheduled appointment, we will do our best to serve you within 15 minutes of your arrival.</td>
                            </tr>
                            <tr>
                              <td><strong>Without Appointment*</strong></td>
                              <td>
                                We strive to attend to you as early as we can.<br />
                                We will do our best to keep your waiting time to within 120 minutes.<br /><br />
                                <em>We seek your kind understanding that you may have to wait longer during peak periods.</em>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <span className="commitment-footnote">
                        *Where services are strictly by appointment only, walk-ins will only be accepted for urgent cases, on an exceptional basis.
                      </span>
                    </div>
                  )}
                </div>

                {/* 3. e-Services */}
                <div
                  className="commitment-accordion-item"
                  ref={sectionRefs.eservices}
                  id="section-eservices"
                >
                  <button
                    type="button"
                    className={`commitment-accordion-header ${openAccordions.eservices ? "open" : ""}`}
                    onClick={() => toggleAccordion("eservices")}
                    aria-expanded={openAccordions.eservices}
                  >
                    <svg
                      className={`commitment-chevron ${openAccordions.eservices ? "expanded" : ""}`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#141b4d"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points={openAccordions.eservices ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                    </svg>
                    <span className="commitment-header-text">e-Services</span>
                  </button>

                  {openAccordions.eservices && (
                    <div className="commitment-accordion-body">
                      <p>
                        We strive to continuously improve and offer you a seamless and intuitive digital service experience that is available anywhere, anytime.
                      </p>
                      <p>
                        Our core services are available online. Approximately 95% of our customers have taken advantage of our online services to conveniently apply for ICA products and facilities.
                      </p>
                      <p>
                        Start accessing and enjoying the convenience of our e-Services. You may refer to the list of ICA’s available{" "}
                        <a
                          href="#eservicesandforms"
                          onClick={(e) => {
                            e.preventDefault();
                            if (onNavigateToEServicesForms) onNavigateToEServicesForms();
                          }}
                          style={{ color: "#1c76d5", textDecoration: "underline", fontWeight: 600 }}
                        >
                          e-Services
                        </a>{" "}
                        and the estimated time to complete each transaction.
                      </p>
                    </div>
                  )}
                </div>

                {/* 4. Feedback/Enquiry */}
                <div
                  className="commitment-accordion-item"
                  ref={sectionRefs.feedback}
                  id="section-feedback"
                >
                  <button
                    type="button"
                    className={`commitment-accordion-header ${openAccordions.feedback ? "open" : ""}`}
                    onClick={() => toggleAccordion("feedback")}
                    aria-expanded={openAccordions.feedback}
                  >
                    <svg
                      className={`commitment-chevron ${openAccordions.feedback ? "expanded" : ""}`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#141b4d"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points={openAccordions.feedback ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                    </svg>
                    <span className="commitment-header-text">Feedback/Enquiry</span>
                  </button>

                  {openAccordions.feedback && (
                    <div className="commitment-accordion-body">
                      <h4 className="commitment-section-subtitle" style={{ marginTop: 0 }}>
                        Written Correspondence
                      </h4>
                      <p>
                        Our response time depends on the nature and complexity of the enquiry or feedback.
                      </p>
                      <p>
                        We will reply to straightforward enquiries and feedback within 3 working days, but may take longer for more complex issues. We will keep you updated if more time is needed.
                      </p>

                      <div className="commitment-table-wrapper">
                        <table className="commitment-table">
                          <thead>
                            <tr className="main-head">
                              <th style={{ width: "40%" }}>Written Correspondence</th>
                              <th style={{ width: "60%" }}>Response Time</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>Simple, Straightforward Issues</strong></td>
                              <td>Within 3 working days</td>
                            </tr>
                            <tr>
                              <td><strong>Complex Issues</strong></td>
                              <td>Within 15 working days</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <h4 className="commitment-section-subtitle">Call Centre</h4>
                      <p>
                        Our call centre offers a 24-hour automated answering service for information on our services and procedural requirements.
                      </p>
                      <p>
                        If you need to speak to an officer, we strive to answer 80% of calls within 3 minutes.
                      </p>
                    </div>
                  )}
                </div>

                {/* 5. Our Service Charter */}
                <div
                  className="commitment-accordion-item"
                  ref={sectionRefs.charter}
                  id="section-charter"
                >
                  <button
                    type="button"
                    className={`commitment-accordion-header ${openAccordions.charter ? "open" : ""}`}
                    onClick={() => toggleAccordion("charter")}
                    aria-expanded={openAccordions.charter}
                  >
                    <svg
                      className={`commitment-chevron ${openAccordions.charter ? "expanded" : ""}`}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#141b4d"
                      strokeWidth="2.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points={openAccordions.charter ? "18 15 12 9 6 15" : "6 9 12 15 18 9"} />
                    </svg>
                    <span className="commitment-header-text">Our Service Charter</span>
                  </button>

                  {openAccordions.charter && (
                    <div className="commitment-accordion-body">
                      <p className="commitment-charter-text">
                        ICA officers are committed to perform our duties professionally. We seek your cooperation to treat our officers with mutual respect.
                      </p>
                      <p className="commitment-charter-text">
                        It is an offence to threaten, abuse or insult a public servant under section 6 of the Protection from Harassment Act 2014.
                      </p>
                      <div className="commitment-poster-wrapper">
                        <img
                          className="commitment-poster-img"
                          src="/images/ica-service-charter-photo.jpg"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/ica-service-charter-2025-checkpoints-poster.jpg";
                          }}
                          alt="ICA Service Charter Checkpoint Gate Photo"
                          title="ICA Service Charter 2025 Checkpoints"
                          loading="lazy"
                        />
                        <img
                          className="commitment-poster-img commitment-respect-img"
                          src="/images/ica-service-charter-mutual-respect.jpg"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/ica-service-charter-mutual-respect.png";
                          }}
                          alt="ICA Service Charter Mutual Respect"
                          title="ICA Service Charter Mutual Respect"
                          loading="lazy"
                        />
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
