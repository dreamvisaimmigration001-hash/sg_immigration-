import React, { useState } from "react";
import NavigateAwayModal from "./NavigateAwayModal";
import { searchVisaStatus } from "../services/immigrationApi";

export default function StatusEnquiry({ onBackToCheckpoints }) {
  const [currentStep, setCurrentStep] = useState(1); // 1 = Application Details, 2 = Enquiry Results
  const [searchType, setSearchType] = useState("visaGrantNumber"); // "visaGrantNumber" or "passport"
  const [searchQuery, setSearchQuery] = useState("");
  const [inputError, setInputError] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaLoading, setCaptchaLoading] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  // Error messages
  const [captchaError, setCaptchaError] = useState("");

  // Result data for Step 2
  const [enquiryResult, setEnquiryResult] = useState(null);

  // Handle reCAPTCHA click
  const handleCaptchaClick = () => {
    if (captchaVerified || captchaLoading) return;
    setCaptchaLoading(true);
    setCaptchaError("");
    setTimeout(() => {
      setCaptchaLoading(false);
      setCaptchaVerified(true);
    }, 750);
  };

  // Handle Clear button
  const handleClear = () => {
    setSearchType("visaGrantNumber");
    setSearchQuery("");
    setInputError("");
    setCaptchaVerified(false);
    setCaptchaError("");
    setApiError("");
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanQuery = searchQuery.trim();

    if (!cleanQuery) {
      setInputError(
        searchType === "passport"
          ? "Please enter your Passport / Document Number."
          : "Please enter your Visa Reference Number."
      );
      return;
    } else {
      setInputError("");
    }

    if (!captchaVerified) {
      setCaptchaError("Please verify that you are not a robot.");
      return;
    } else {
      setCaptchaError("");
    }

    setIsSubmitting(true);
    setApiError("");

    try {
      const resultData = await searchVisaStatus(cleanQuery, searchType);
      setEnquiryResult(resultData);
      setCurrentStep(2);
      window.scrollTo({ top: 80, behavior: "smooth" });
    } catch (err) {
      setApiError(err.message || "Failed to retrieve status from Immigration API. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetEnquiry = () => {
    handleClear();
    setEnquiryResult(null);
    setCurrentStep(1);
    window.scrollTo({ top: 80, behavior: "smooth" });
  };

  return (
    <div id="bodyContent" role="main" style={{ display: "block" }}>
      <div id="dashmain" className="ipsave-main-container">
        <div className="container-fluid px-0">
          <div className="row mx-0">
            <div className="col-12 dashtop px-0">
              {/* Main Heading matching Screenshot 1 */}
              <h3 className="font-bold ipsave-page-title">
                Enquire for Application of Visa
              </h3>

              {/* Exact Step Progress Bar matching Screenshot 1 */}
              <div className="checkout-wrap">
                <ul className="checkout-bar checkout-bar2">
                  <li className={`i-applicant ${currentStep === 1 ? "active" : "visited"}`}>
                    <span className="i-text">Application Details</span>
                    <span className="i-pic">
                      {/* Avatar Person silhouette SVG */}
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </span>
                  </li>
                  <li className={`i-applicant ${currentStep === 2 ? "active" : ""}`}>
                    <span className="i-text">Enquiry Results</span>
                    <span className="i-pic">
                      {/* Avatar Person silhouette SVG */}
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                      </svg>
                    </span>
                  </li>
                </ul>
              </div>

              {/* STEP 1: Application Details Form */}
              {currentStep === 1 && (
                <div className="setup-content" id="step-1">
                  <form
                    id="Form14APage1"
                    name="Form14APage1"
                    method="post"
                    action="/ipsave/index.xhtml"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <input type="hidden" name="Form14APage1" value="Form14APage1" />

                    {/* Section Subheading matching Screenshot 1 */}
                    <div className="row px-0">
                      <div className="col-12 px-0">
                        <h4 className="font-bold ps-0 ipsave-section-heading">
                          Particulars of Applicant
                        </h4>
                      </div>
                    </div>

                    {/* Search Type Selector */}
                    <div className="ipsave-search-type-wrapper">
                      <label className="ipsave-input-label" style={{ marginBottom: "14px", display: "block" }}>
                        Search By
                      </label>
                      <div className="ipsave-search-type-options">
                        <label
                          className={`ipsave-search-type-option ${searchType === "visaGrantNumber" ? "selected" : ""
                            }`}
                        >
                          <input
                            type="radio"
                            name="searchType"
                            value="visaGrantNumber"
                            checked={searchType === "visaGrantNumber"}
                            onChange={(e) => {
                              setSearchType(e.target.value);
                              setInputError("");
                              setApiError("");
                            }}
                          />
                          <span className="ipsave-radio-indicator" />
                          <span className="ipsave-radio-label">Visa Reference Number</span>
                        </label>
                        <label
                          className={`ipsave-search-type-option ${searchType === "passport" ? "selected" : ""
                            }`}
                        >
                          <input
                            type="radio"
                            name="searchType"
                            value="passport"
                            checked={searchType === "passport"}
                            onChange={(e) => {
                              setSearchType(e.target.value);
                              setInputError("");
                              setApiError("");
                            }}
                          />
                          <span className="ipsave-radio-indicator" />
                          <span className="ipsave-radio-label">Passport / Document Number</span>
                        </label>
                      </div>
                    </div>

                    {/* Input Field for the selected search type */}
                    <div className="ipsave-single-input-wrapper">
                      <label htmlFor="Form14APage1:searchQuery" className="ipsave-input-label">
                        {searchType === "passport"
                          ? "Passport / Document Number"
                          : "Visa Reference Number"}
                      </label>
                      <input
                        id="Form14APage1:searchQuery"
                        type="text"
                        name="Form14APage1:searchQuery"
                        autoComplete="off"
                        placeholder={
                          searchType === "passport"
                            ? "e.g. A12345678"
                            : "e.g. VIS-20260927-XXXX"
                        }
                        className={`ipsave-input-underline ${inputError ? "is-invalid" : ""}`}
                        maxLength={30}
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          if (inputError) setInputError("");
                        }}
                      />
                      {inputError && (
                        <small className="form-text text-danger" style={{ display: "block", marginTop: "8px" }}>
                          <span>{inputError}</span>
                        </small>
                      )}
                    </div>

                    {/* Exact reCAPTCHA Box matching Screenshot 1 & 2 */}
                    <div className="row px-0" id="recaptcha-enterprise">
                      <div className="col-12 px-0">
                        <div
                          className={`recaptcha-widget-card ${captchaVerified ? "is-verified" : ""}`}
                          onClick={handleCaptchaClick}
                          role="checkbox"
                          aria-checked={captchaVerified}
                          tabIndex={0}
                        >
                          <div className="recaptcha-left-group">
                            <div className={`recaptcha-square-box ${captchaVerified ? "checked" : ""}`}>
                              {captchaLoading && (
                                <svg className="visa-recaptcha-spinner-svg" viewBox="0 0 28 28" aria-hidden="true">
                                  <circle
                                    className="visa-recaptcha-spinner-circle"
                                    cx="14"
                                    cy="14"
                                    r="10"
                                    fill="none"
                                    strokeWidth="2.8"
                                  />
                                </svg>
                              )}
                              {captchaVerified && (
                                <svg className="visa-recaptcha-checkmark-svg" viewBox="0 0 24 24" aria-hidden="true">
                                  <path
                                    className="visa-recaptcha-checkmark-path"
                                    d="M 4.5 12 L 9.5 17 L 19.5 7"
                                    fill="none"
                                    stroke="#0f9d58"
                                    strokeWidth="3.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              )}
                            </div>
                            <span className="recaptcha-prompt-text">I'm not a robot</span>
                          </div>

                          <div className="recaptcha-right-group">
                            {/* Rotating Arrows reCAPTCHA icon */}
                            <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
                              <path
                                d="M24 8c-7.3 0-13.4 5-15.2 11.8L13 21c1.2-4.6 5.4-8 10.4-8 5 0 9.2 3.4 10.4 8l4.2-1.2C36.2 13 30.7 8 24 8z"
                                fill="#1c76d5"
                              />
                              <path
                                d="M24 40c7.3 0 13.4-5 15.2-11.8L35 27c-1.2 4.6-5.4 8-10.4 8-5 0-9.2-3.4-10.4-8l-4.2 1.2C11.8 35 17.3 40 24 40z"
                                fill="#757575"
                              />
                              <polygon points="12,14 4,21 15,24" fill="#1c76d5" />
                              <polygon points="36,34 44,27 33,24" fill="#757575" />
                            </svg>
                            <span className="recaptcha-subtext">reCAPTCHA</span>
                          </div>
                        </div>
                      </div>
                      {captchaError && (
                        <div className="col-12 px-0 mt-1">
                          <small className="form-text text-danger">{captchaError}</small>
                        </div>
                      )}
                    </div>

                    {apiError && (
                      <div className="row px-0 mb-3">
                        <div className="col-12 px-0">
                          <div style={{ padding: "12px 16px", backgroundColor: "#fff0f1", color: "#c91424", border: "1px solid #ffd0d4", borderRadius: "6px", fontSize: "14px", fontWeight: "500" }}>
                            {apiError}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Exact 3 Pill Shaped Blue Buttons matching Screenshot 2 */}
                    <div className="row px-0">
                      <div className="col-12 px-0 ipsave-buttons-bar">
                        <button
                          type="button"
                          className="btn btn-ipStyle btn-pill-blue"
                          onClick={() => setShowExitModal(true)}
                          disabled={isSubmitting}
                        >
                          Back to ICA Home
                        </button>

                        <button
                          type="button"
                          className="btn btn-ipStyle btn-pill-blue"
                          onClick={handleClear}
                          disabled={isSubmitting}
                        >
                          Clear
                        </button>

                        <button
                          type="submit"
                          name="Form14APage1:j_idt108"
                          className="btn btn-ipStyle btn-pill-blue"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Verifying..." : "Next"}
                        </button>
                      </div>
                    </div>

                    <input
                      type="hidden"
                      name="javax.faces.ViewState"
                      id="j_id1:javax.faces.ViewState:2"
                      value="-3423340453452739338:1536050457183077022"
                      autoComplete="off"
                    />
                  </form>
                </div>
              )}

              {/* STEP 2: Enquiry Results & Confirmed Appointment Details */}
              {currentStep === 2 && enquiryResult && (
                <div className="setup-content" id="step-2">
                  <div className="row px-0 mb-3">
                    <div className="col-12 px-0">
                      <div className="enquiry-success-banner">
                        <div className="status-badge-container">
                          <span className="status-badge-check">✓</span>
                          <div>
                            <h4 className="status-badge-title">APPLICATION APPROVED • APPOINTMENT CONFIRMED</h4>
                            <p className="status-badge-subtitle">Official Singapore Immigration & Checkpoints Authority Record</p>
                          </div>
                        </div>
                        <span className="status-record-date">Enquiry Date: 22 Sep 2026, 16:50 SGT</span>
                      </div>
                    </div>
                  </div>

                  {/* Two Column Particulars Grid */}
                  <div className="row px-0 mb-4 ipsave-inputs-row">
                    {/* Left: Visa Particulars */}
                    <div className="col-12 col-lg-6 p-0 pe-lg-3 mb-4 mb-lg-0">
                      <div className="ipsave-details-card">
                        <div className="details-card-header">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <circle cx="9" cy="10" r="2" />
                            <line x1="15" y1="8" x2="19" y2="8" />
                            <line x1="15" y1="12" x2="19" y2="12" />
                            <line x1="7" y1="16" x2="17" y2="16" />
                          </svg>
                          <h5>Visa Application Details</h5>
                        </div>

                        <div className="details-table-wrap">
                          <table className="table table-bordered particulars-table">
                            <tbody>
                              <tr>
                                <th scope="row">Travel Document Number</th>
                                <td className="font-mono font-bold">{enquiryResult.tdNum}</td>
                              </tr>
                              <tr>
                                <th scope="row">Applicant Full Name</th>
                                <td>{enquiryResult.applicantName}</td>
                              </tr>
                              <tr>
                                <th scope="row">Nationality / Citizenship</th>
                                <td>{enquiryResult.nationality}</td>
                              </tr>
                              <tr>
                                <th scope="row">Type of Pass / Visa</th>
                                <td>{enquiryResult.passType}</td>
                              </tr>
                              <tr>
                                <th scope="row">Application Date</th>
                                <td>{enquiryResult.applicationDate}</td>
                              </tr>
                              <tr>
                                <th scope="row">e-Visa Validity</th>
                                <td className="text-success font-bold">
                                  {enquiryResult.issueDate} to {enquiryResult.expiryDate}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    {/* Right: Confirmed Appointment Details */}
                    <div className="col-12 col-lg-6 p-0 ps-lg-3">
                      <div className="ipsave-details-card appointment-card-highlight">
                        <div className="details-card-header appointment-header">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                          <h5>Confirmed Appointment Information</h5>
                          <span className="confirmed-pill">CONFIRMED</span>
                        </div>

                        <div className="details-table-wrap">
                          <table className="table table-bordered particulars-table">
                            <tbody>
                              <tr>
                                <th scope="row">Appointment Date</th>
                                <td className="appointment-date-cell font-bold text-navy">
                                  📅 {enquiryResult.appointmentDate}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Scheduled Time</th>
                                <td className="appointment-time-cell font-bold text-primary">
                                  ⏰ {enquiryResult.appointmentTime}
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">Service Venue</th>
                                <td><strong>{enquiryResult.venue}</strong></td>
                              </tr>
                              <tr>
                                <th scope="row">Building Address</th>
                                <td>{enquiryResult.address}</td>
                              </tr>
                              <tr>
                                <th scope="row">Assigned Counter</th>
                                <td className="font-bold text-navy">{enquiryResult.counter}</td>
                              </tr>
                              <tr>
                                <th scope="row">Queue Ticket Number</th>
                                <td className="font-mono font-bold">{enquiryResult.queueNo}</td>
                              </tr>
                              <tr>
                                <th scope="row">ICA Helpline</th>
                                <td>{enquiryResult.contactNo}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Advisory Box */}
                  <div className="row px-0 mb-4">
                    <div className="col-12 px-0">
                      <div className="appointment-advisory-box">
                        <h6 className="advisory-title">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: 8, verticalAlign: -2 }}>
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                          Important Guidelines for Your Visit to ICA Building:
                        </h6>
                        <ul className="advisory-list">
                          <li>Please arrive at the ICA Building <strong>15 minutes prior</strong> to your appointment time ({enquiryResult.appointmentTime}).</li>
                          <li>Scan the QR code on your printed Appointment Confirmation Slip at the Level 4 Self-Service Kiosks to obtain your queue ticket.</li>
                          <li><strong>Mandatory documents to bring:</strong>
                            <ul>
                              <li>Original valid passport / travel document (minimum 6 months validity)</li>
                              <li>Printed copy of this Appointment Confirmation Slip</li>
                              <li>Form 14A and letter of introduction / sponsorship (if applicable)</li>
                              <li>Two recent physical passport-sized colour photographs meeting official ICA guidelines (white background, taken within last 3 months)</li>
                            </ul>
                          </li>
                          <li>Entry into ICA premises requires standard security screening at Level 1. Sharp objects and flammable items are strictly prohibited.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 Buttons matching Pill Style */}
                  <div className="row px-0">
                    <div className="col-12 px-0 ipsave-buttons-bar" style={{ flexWrap: "wrap", gap: "10px" }}>
                      <button
                        type="button"
                        className="btn btn-ipStyle btn-pill-blue"
                        onClick={onBackToCheckpoints}
                      >
                        Back to ICA Home
                      </button>
                      <button
                        type="button"
                        className="btn btn-ipStyle btn-pill-blue"
                        onClick={() => window.print()}
                      >
                        Print Confirmation Slip
                      </button>
                      {enquiryResult.documents && enquiryResult.documents.length > 0 && (
                        <button
                          type="button"
                          className="btn btn-ipStyle btn-pill-blue"
                          onClick={() => {
                            const pdfDoc = enquiryResult.documents.find(
                              (doc) => doc.url && doc.url.toLowerCase().endsWith(".pdf")
                            ) || enquiryResult.documents[0];
                            if (pdfDoc && pdfDoc.url) {
                              window.open(pdfDoc.url, "_blank", "noopener,noreferrer");
                            }
                          }}
                        >
                          📄 View / Save Document (PDF)
                        </button>
                      )}
                      <button
                        type="button"
                        className="btn btn-ipStyle btn-pill-blue"
                        onClick={handleResetEnquiry}
                      >
                        Enquire Another Application
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Exact Bottom Notice matching Screenshot 2 */}
              <div className="ipsave-bottom-notice-wrap">
                <p className="eservice-help-notice">
                  If you encounter any problems with this eService, please{" "}
                  <a
                    href="#feedback"
                    className="contact-us-link"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = "#feedback";
                    }}
                  >
                    contact us
                  </a>.
                </p>
                <p className="eservice-warning-notice">
                  Click on the buttons or links once only. Do not use the Back or Forward button on your browser as this may end your transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigate Away Confirmation Modal */}
      <NavigateAwayModal
        isOpen={showExitModal}
        onStay={() => setShowExitModal(false)}
        onLeave={() => {
          setShowExitModal(false);
          if (onBackToCheckpoints) onBackToCheckpoints();
        }}
      />
    </div>
  );
}
