import React from "react";

export default function SiteFooter({
  onNavigate,
  onNavigateToContact,
  onNavigateContact,
  onNavigateToFeedback,
  onNavigateFeedback,
  onNavigateToFaqs,
  onNavigateFaqs,
  onNavigateToReach,
  onNavigateReach,
  onNavigateHome,
  onNavigateToCheckpoints,
  onNavigateCheckpoints,
}) {
  const handleContactClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate("contactus");
    else if (onNavigateToContact) onNavigateToContact();
    else if (onNavigateContact) onNavigateContact();
    window.location.hash = "#contact-us";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFeedbackClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate("feedback");
    else if (onNavigateToFeedback) onNavigateToFeedback();
    else if (onNavigateFeedback) onNavigateFeedback();
    window.location.hash = "#feedback";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFaqsClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate("askgov");
    else if (onNavigateToFaqs) onNavigateToFaqs();
    else if (onNavigateFaqs) onNavigateFaqs();
    window.location.hash = "#faqs";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleReachClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate("reach");
    else if (onNavigateToReach) onNavigateToReach();
    else if (onNavigateReach) onNavigateReach();
    window.location.hash = "#reach";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate("home");
    else if (onNavigateHome) onNavigateHome();
    else if (onNavigateToCheckpoints) onNavigateToCheckpoints();
    else if (onNavigateCheckpoints) onNavigateCheckpoints();
    window.location.hash = "#home";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="container">
          <div className="site-footer__top">
            <div className="site-logo">
              <a
                href="#home"
                onClick={handleHomeClick}
                title="Immigration & Checkpoints Authority"
              >
                <img
                  className="desktop-logo"
                  src="/assets/logo/ICA_logo_onblue_new.svg"
                  alt="Immigration & Checkpoints Authority"
                  width="208"
                  height="90"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="mobile-logo"
                  src="/assets/logo/ICA_logo_onblue_new.svg"
                  alt="Immigration & Checkpoints Authority"
                  width="149"
                  height="65"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
            <h2 className="site-footer__title">Immigration &amp; Checkpoints Authority</h2>

            <div className="site-footer__common">
              <ul className="common-links">
                <li>
                  <a href="/contact-us" onClick={handleContactClick}>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/feedbackform" onClick={handleFeedbackClick}>
                    Feedback
                  </a>
                </li>
                <li>
                  <a href="/faqs" onClick={handleFaqsClick}>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="/reach" onClick={handleReachClick}>
                    Reach.gov.sg
                    <span className="icon icon-external-link">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "4px", verticalAlign: "middle", display: "inline-block" }}>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>

              <ul className="social-links">
                <li>
                  <a
                    className="facebook"
                    href="https://www.facebook.com/Immigration.Checkpoints.Authority/"
                    title="ICA facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">ICA facebook</span>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" style={{ height: "22px", width: "22px", display: "block" }}>
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://twitter.com/ica_singapore"
                    title="ICA twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">ICA twitter</span>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" style={{ height: "22px", width: "22px", display: "block" }}>
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="Instagram"
                    href="https://www.instagram.com/ica_singapore"
                    title="ICA Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">ICA Instagram</span>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ height: "22px", width: "22px", display: "block" }}>
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="youtube"
                    href="https://www.youtube.com/user/ICAOutreach"
                    title="ICA youtube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">ICA youtube</span>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" style={{ height: "22px", width: "22px", display: "block" }}>
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="tiktok"
                    href="https://www.tiktok.com/@ica_singapore"
                    title="ICA tiktok"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">ICA tiktok</span>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true" style={{ height: "22px", width: "22px", display: "block" }}>
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.03 3.28-1.52 3.34-3.33.02-3.45-.01-6.91.01-10.36.02-2.81-.01-5.63.02-8.45z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="site-footer__bottom">
            <nav className="site-footer__panel" aria-label="Footer Panel Navigation">
              <ul>
                <li>
                  <a href="https://tech.gov.sg/report_vulnerability" target="_blank" rel="noopener noreferrer">
                    Report Vulnerability
                    <span className="icon icon-external-link">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: "4px", verticalAlign: "middle", display: "inline-block" }}>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.ica.gov.sg/privacy-statement" target="_blank" rel="noopener noreferrer">
                    Privacy Statement
                  </a>
                </li>
                <li>
                  <a href="https://www.ica.gov.sg/terms-of-use" target="_blank" rel="noopener noreferrer">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="https://www.ica.gov.sg/sitemap" target="_blank" rel="noopener noreferrer">
                    Sitemap
                  </a>
                </li>
              </ul>
            </nav>

            <div className="site-footer__end-note">
              <small className="copyright">© 2026, Government of Singapore.</small> <br />
              <small className="last-update">Last updated on 18 June 2026.</small>
            </div>

            <small className="browser-support">This website is optimised for Edge, Firefox, Chrome, Safari.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}
