import React from "react";
import "./ReachFooter.css";

// Official External Link Square/Arrow Icon
const ExternalArrowIcon = () => (
  <svg
    className="reach-footer-custom__ext-icon"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function ReachFooter({ onNavigateContact, onNavigateFeedback }) {
  return (
    <footer className="reach-footer-custom" aria-label="REACH Footer">
      <div className="reach-footer-custom__container">
        {/* Main Title */}
        <h2 className="reach-footer-custom__main-title">
          REACH (Reaching Everyone for Active Citizenry @ Home)
        </h2>

        {/* 3 Columns Section */}
        <div className="reach-footer-custom__grid">
          {/* Column 1 */}
          <div className="reach-footer-custom__col">
            <a href="#latest-happenings" className="reach-footer-custom__link">
              Latest happenings
            </a>
            <a href="#who-we-are" className="reach-footer-custom__link">
              Who we are
            </a>
            <a href="#what-we-do" className="reach-footer-custom__link">
              What we do
            </a>
            <a href="#info-centre" className="reach-footer-custom__link">
              Info centre
            </a>
            <a
              href="https://form.sg/forms/mci/5ab9ebc3cd62d10030f43ab2"
              target="_blank"
              rel="noopener noreferrer"
              className="reach-footer-custom__link"
            >
              <span>Rate this website</span>
              <ExternalArrowIcon />
            </a>
          </div>

          {/* Column 2 */}
          <div className="reach-footer-custom__col">
            <a href="#consultations" className="reach-footer-custom__link">
              Public consultation
            </a>
            <a href="#smp" className="reach-footer-custom__link">
              Singapore Model Parliament 2026
            </a>
            <a href="#budget" className="reach-footer-custom__link">
              Budget 2026
            </a>
            <a href="#ndr" className="reach-footer-custom__link">
              National Day Rally 2026
            </a>
          </div>

          {/* Column 3: Reach us & Social Icons */}
          <div className="reach-footer-custom__reach-us">
            <h3 className="reach-footer-custom__reach-us-title">Reach us</h3>

            {/* 5 Social Media Icons */}
            <div className="reach-footer-custom__social-row">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/REACHSingapore"
                target="_blank"
                rel="noopener noreferrer"
                className="reach-footer-custom__social-icon-btn"
                aria-label="Facebook (opens in new tab)"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/reachsg/"
                target="_blank"
                rel="noopener noreferrer"
                className="reach-footer-custom__social-icon-btn"
                aria-label="Instagram (opens in new tab)"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/channel/UC3mnMiTmWlVvEXWcBDXpCiw/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="reach-footer-custom__social-icon-btn"
                aria-label="YouTube (opens in new tab)"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/reachsg"
                target="_blank"
                rel="noopener noreferrer"
                className="reach-footer-custom__social-icon-btn"
                aria-label="LinkedIn (opens in new tab)"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@reachsingapore"
                target="_blank"
                rel="noopener noreferrer"
                className="reach-footer-custom__social-icon-btn"
                aria-label="TikTok (opens in new tab)"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>

            {/* Links below social icons */}
            <div className="reach-footer-custom__reach-links">
              <a
                href="#contact-us"
                className="reach-footer-custom__link"
                onClick={(e) => {
                  if (onNavigateContact) {
                    e.preventDefault();
                    onNavigateContact();
                  }
                }}
              >
                Contact
              </a>
              <a
                href="#feedback"
                className="reach-footer-custom__link"
                onClick={(e) => {
                  if (onNavigateFeedback) {
                    e.preventDefault();
                    onNavigateFeedback();
                  }
                }}
              >
                <span>Feedback</span>
                <ExternalArrowIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Logos */}
        <div className="reach-footer-custom__bottom">
          <div className="reach-footer-custom__bottom-left">
            <p className="reach-footer-custom__copyright">
              © 2026 Government of Singapore, last updated 24 September 2026
            </p>

            <div className="reach-footer-custom__legal-row">
              <a
                href="https://go.gov.sg/report-vulnerability"
                target="_blank"
                rel="noopener noreferrer"
                className="reach-footer-custom__legal-link"
              >
                <span>Report Vulnerability</span>
                <ExternalArrowIcon />
              </a>
              <a href="#privacy" className="reach-footer-custom__legal-link">
                Privacy Statement
              </a>
              <a href="#terms" className="reach-footer-custom__legal-link">
                Terms of Use
              </a>
              <a
                href="https://www.reach.gov.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="reach-footer-custom__legal-link"
              >
                <span>REACH</span>
                <ExternalArrowIcon />
              </a>
            </div>
          </div>

          {/* Made with Isomer & Built by OGP */}
          <div className="reach-footer-custom__badges">
            {/* Made with Isomer */}
            <a
              href="https://www.isomer.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="reach-footer-custom__badge-item"
            >
              <span className="reach-footer-custom__badge-label">Made with</span>
              <div className="reach-footer-custom__badge-logo-wrap">
                {/* Official Isomer Logo */}
                <svg width="114" height="32" viewBox="0 0 114 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="reach-footer-custom__isomer-logo">
                  {/* Isometric Cube */}
                  <g fill="#ffffff">
                    <path d="M14.9375 18.8402V31.0935C14.9375 31.9058 15.699 32.2329 16.3834 31.8233C16.3834 31.8233 24.3861 27.2805 26.7059 25.6473C27.3903 25.2378 27.9452 24.2471 27.9452 23.4344V11.1812C27.8781 10.4307 27.3903 10.042 26.7059 10.4514L16.3834 16.6272C15.699 17.0368 14.9375 18.0278 14.9375 18.8402Z" fill="#a1a1aa" />
                    <path d="M0.209388 23.4258V11.16C0.732075 10.0499 1.44849 10.4294 1.44849 10.4294L11.7686 16.6117C12.453 17.0217 13.0077 18.0135 13.0077 18.8269V31.0927C13.0077 31.906 12.453 32.233 11.7686 31.8231L1.44849 25.641C0.764256 25.2309 0.209388 24.2392 0.209388 23.4258Z" fill="#e4e4e7" />
                    <path d="M25.9233 8.19207L15.0654 0.338928C14.1225 -0.145554 13.1829 -0.0798891 12.4677 0.341215L1.69134 8.21216C0.971787 7.79236 0.968376 7.11072 1.68354 6.68978L12.4677 0.341215C13.1829 -0.0798891 14.1225 -0.145554 15.0654 0.338928L25.9155 6.66986C26.557 7.12069 26.6383 7.77113 25.9233 8.19207Z" fill="#ffffff" />
                  </g>
                  {/* isomer text */}
                  <text x="36" y="24" fill="#ffffff" fontFamily="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif" fontSize="21" fontWeight="700" letterSpacing="-0.5px">isomer</text>
                </svg>
              </div>
            </a>

            {/* Built by OGP */}
            <a
              href="https://www.open.gov.sg"
              target="_blank"
              rel="noopener noreferrer"
              className="reach-footer-custom__badge-item"
            >
              <span className="reach-footer-custom__badge-label">Built by</span>
              <div className="reach-footer-custom__badge-logo-wrap">
                {/* Official OGP Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg width="24" height="24" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M10 6C6 11 6 21 10 26" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" />
                    <path d="M22 6C26 11 26 21 22 26" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" />
                  </svg>
                  <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.05", color: "#ffffff", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", fontSize: "8.5px", fontWeight: "700", letterSpacing: "0.8px" }}>
                    <span>OPEN</span>
                    <span>GOVERNMENT</span>
                    <span>PRODUCTS</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
