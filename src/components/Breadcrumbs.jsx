import React from "react";

export default function Breadcrumbs({ activeView, onNavigate }) {
  return (
    <div className="bread-crumb-wrapper">
      <div className="bread-crumb-wrapper__content">
        <div className="container">
          <ul className="my-bread-crumbs-content">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("home");
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
            {activeView === "publications" ? (
              <>
                <li>
                  <a
                    href="#newsroom"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate("newsroom");
                    }}
                  >
                    News &amp; Publications
                  </a>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>{typeof window !== "undefined" && window.location.hash.toLowerCase().includes("annual") ? "ICA Annuals" : "Publications"}</span>
                </li>
              </>
            ) : activeView === "public-education" ? (
              <>
                <li>
                  <a
                    href="#newsroom"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate("newsroom");
                    }}
                  >
                    News &amp; Publications
                  </a>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>Public Education</span>
                </li>
              </>
            ) : activeView === "statistics" ? (
              <>
                <li>
                  <a
                    href="#newsroom"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate("newsroom");
                    }}
                  >
                    News &amp; Publications
                  </a>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>Statistics</span>
                </li>
              </>
            ) : activeView === "newsroom" ? (
              <>
                <li>
                  <a
                    href="#newsroom"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate("newsroom");
                    }}
                  >
                    News &amp; Publications
                  </a>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>Newsroom</span>
                </li>
              </>
            ) : activeView === "feedback" ? (
              <li>
                <span>Feedback</span>
              </li>
            ) : activeView === "contactus" ? (
              <li>
                <span>Contact Us</span>
              </li>
            ) : activeView === "eservicesandforms" || activeView === "eservices" ? (
              <li>
                <span>e-Services and Forms</span>
              </li>
            ) : activeView === "reside" || activeView === "reside-study-work" ? (
              <li>
                <span>Reside, Study and Work in Singapore</span>
              </li>
            ) : activeView === "enter-transit-depart" || activeView === "enter_transit_depart" ? (
              <li>
                <span>Entering, Transiting and Departing</span>
              </li>
            ) : activeView === "documents" || activeView === "identity" ? (
              <li>
                <span>Identity Card, Passport and other Documents</span>
              </li>
            ) : activeView === "join-us" ? (
              <>
                <li>
                  <a
                    href="#join-us"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate("join-us");
                    }}
                  >
                    Careers
                  </a>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>Join Us</span>
                </li>
              </>
            ) : activeView === "scholarships" ? (
              <>
                <li>
                  <a
                    href="#join-us"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate("join-us");
                    }}
                  >
                    Careers
                  </a>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>Scholarships, Sponsorships &amp; Internships</span>
                </li>
              </>
            ) : activeView === "meet-our-officers" ? (
              <>
                <li>
                  <a
                    href="#join-us"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate("join-us");
                    }}
                  >
                    Careers
                  </a>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>Meet Our Officers</span>
                </li>
              </>
            ) : activeView === "career-faqs" ? (
              <>
                <li>
                  <a
                    href="#join-us"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate("join-us");
                    }}
                  >
                    Careers
                  </a>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>Career FAQs</span>
                </li>
              </>
            ) : activeView === "our-people" ? (
              <li>
                <span>Our People</span>
              </li>
            ) : activeView === "our-service-commitment" ? (
              <>
                <li>
                  <span>Who We Are</span>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>Our Service Commitment</span>
                </li>
              </>
            ) : activeView === "awards-accolades" ? (
              <>
                <li>
                  <span>Who We Are</span>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>Awards &amp; Accolades</span>
                </li>
              </>
            ) : activeView === "vision-mission-values" ? (
              <>
                <li>
                  <span>Who We Are</span>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>Vision, Mission &amp; Values</span>
                </li>
              </>
            ) : activeView === "checkstatus" ? (
              <>
                <li>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onNavigate) onNavigate("checkpoints");
                    }}
                  >
                    Our Checkpoints
                  </a>
                </li>
                <li className="crumb-separator" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </li>
                <li>
                  <span>Enquire for Application of Visa & Appointment</span>
                </li>
              </>
            ) : activeView === "user-research" ? (
              <li>
                <span>User Research</span>
              </li>
            ) : activeView === "terms-of-use" ? (
              <li>
                <span>Terms of Use</span>
              </li>
            ) : activeView === "sitemap" ? (
              <li>
                <span>Sitemap</span>
              </li>
            ) : activeView === "privacy-statement" ? (
              <li>
                <span>Privacy Statement</span>
              </li>
            ) : (
              <li>
                <span>Our Checkpoints</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
