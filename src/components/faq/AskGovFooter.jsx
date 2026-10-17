import React from "react";
import "./AskGovFooter.css";

const ExternalIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="askgov-external-icon"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function AskGovFooter({ onNavigateHome, onNavigateFeedback }) {
  const handleHomeClick = (e) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  const handleFeedbackClick = (e) => {
    if (onNavigateFeedback) {
      e.preventDefault();
      onNavigateFeedback();
    }
  };

  return (
    <footer className="askgov-official-footer" aria-label="AskGov Footer">
      <div className="askgov-footer-inner">
        {/* Top Row: Agency Link & Legal Links */}
        <div className="askgov-footer-top-row">
          <div className="askgov-footer-agency-col">
            <a
              href="/"
              onClick={handleHomeClick}
              className="askgov-footer-agency-link"
            >
              <img
                src="/assets/logo/ica_logo_new.svg"
                alt="ICA Crest"
                className="askgov-footer-agency-crest"
              />
              <span>Visit Immigration &amp; Checkpoints Authority website</span>
              <ExternalIcon />
            </a>
          </div>

          <nav className="askgov-footer-nav-links" aria-label="Footer Navigation">
            <a
              href="#feedback"
              onClick={handleFeedbackClick}
              className="askgov-footer-nav-item"
            >
              <span>Feedback</span>
              <ExternalIcon />
            </a>

            <a
              href="#privacy-statement"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#privacy-statement";
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="askgov-footer-nav-item"
            >
              <span>Privacy</span>
            </a>

            <a
              href="#terms-of-use"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#terms-of-use";
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="askgov-footer-nav-item"
            >
              <span>Terms of Use</span>
            </a>

            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "#home";
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="askgov-footer-nav-item"
            >
              <span>Report Vulnerability</span>
            </a>
          </nav>
        </div>

        {/* Horizontal Divider */}
        <hr className="askgov-footer-divider" />

        {/* Bottom Row: Logos & Copyright */}
        <div className="askgov-footer-bottom-row">
          <div className="askgov-footer-branding-left">
            {/* Created with askgov */}
            <div className="askgov-created-with-box">
              <span className="askgov-brand-sublabel">Created with</span>
              <div className="askgov-brand-logo-inline">
                <svg
                  width="22"
                  height="20"
                  viewBox="0 0 24 22"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fill="#0b2d64"
                    d="M16.58 5.532c-.19-.065-.386-.121-.567-.172a9.566 9.566 0 0 0-1.283-.225 8.876 8.876 0 0 0-.945-.047h-.416A9.146 9.146 0 0 0 7.15 7.92a9.022 9.022 0 0 0-2.485 6.33v.307a.42.42 0 0 1-.36.438.43.43 0 0 1-.206-.02 12.46 12.46 0 0 1-3.983-2.341.42.42 0 0 1 .396-.703c.826.23 1.7.236 2.528.017a.282.282 0 0 0 .17-.397 7.63 7.63 0 0 1 1.731-9.577A7.742 7.742 0 0 1 10.3.151a7.772 7.772 0 0 1 3.412.966 7.713 7.713 0 0 1 2.618 2.38c.316.462.578.96.781 1.48a.423.423 0 0 1-.292.573.43.43 0 0 1-.24-.01v-.008Z"
                  />
                  <path
                    fill="#0b2d64"
                    d="M20.833 17.954a.293.293 0 0 1-.184-.163.283.283 0 0 1 .008-.244 7.77 7.77 0 0 0 .353-6.944 7.873 7.873 0 0 0-2.152-2.87 8.016 8.016 0 0 0-3.216-1.636 8.079 8.079 0 0 0-4.783.272 7.956 7.956 0 0 0-3.76 2.926 7.756 7.756 0 0 0-.984 6.885 7.841 7.841 0 0 0 1.883 3.049 7.986 7.986 0 0 0 3.057 1.912c2.163.747 4.489.913 6.738.481a12.976 12.976 0 0 0 6.061-2.942.435.435 0 0 0 .093-.53.44.44 0 0 0-.502-.214 4.985 4.985 0 0 1-2.612.018Z"
                  />
                </svg>
                <span className="askgov-inline-brand-text">askgov</span>
              </div>
            </div>

            {/* Built by OGP */}
            <div className="askgov-built-by-box">
              <span className="askgov-brand-sublabel">Built by</span>
              <div className="askgov-ogp-logo-group">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 32 32"
                  fill="none"
                  className="askgov-ogp-brackets"
                  aria-hidden="true"
                >
                  <path
                    d="M10 6C6 11 6 21 10 26"
                    stroke="#1d4ed8"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22 6C26 11 26 21 22 26"
                    stroke="#1d4ed8"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="askgov-ogp-text-block">
                  <span className="ogp-line">OPEN</span>
                  <span className="ogp-line">GOVERNMENT</span>
                  <span className="ogp-line">PRODUCTS</span>
                </div>
              </div>
            </div>
          </div>

          <div className="askgov-footer-copyright">
            <span>©2026 Open Government Products</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
