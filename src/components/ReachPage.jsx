import React, { useState } from "react";
import GovMasthead from "./GovMasthead";
import ReachFooter from "./ReachFooter";
import "./ReachPage.css";

export default function ReachPage({ onNavigate }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <div className="reach-page">
      {/* 1. Singapore Government Masthead */}
      <GovMasthead defaultOpen={false} />

      {/* 2. Main Navigation Header */}
      <header className="reach-navbar">
        <div className="reach-navbar__inner">
          <div className="reach-navbar__left">
            <a
              href="/"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("checkstatus");
                }
              }}
              className="reach-logo-link"
              title="REACH (Reaching Everyone for Active Citizenry @ Home)"
            >
              <img
                src="https://isomer-user-content.by.gov.sg/27/c938090a-c553-409a-ba26-0cd930789417/reach_logo.png"
                alt="REACH Logo"
                className="reach-logo-img"
              />
            </a>

            <nav>
              <ul className="reach-nav-menu">
                <li className="reach-nav-item">
                  <button
                    type="button"
                    className="reach-nav-btn"
                    aria-expanded={openMenu === "latest"}
                    onClick={() => toggleMenu("latest")}
                  >
                    <span>Latest happenings</span>
                    <svg className="reach-chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {openMenu === "latest" && (
                    <div className="reach-dropdown">
                      <a href="#consultations" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Public Consultation
                        <span className="sub-desc">Ongoing and past public consultations</span>
                      </a>
                      <a href="#telegram" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Telegram Chat Group
                        <span className="sub-desc">Register to join our Telegram Chat Group</span>
                      </a>
                      <a href="#newsletter" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        REACH Bytes e-newsletter
                        <span className="sub-desc">Subscribe to our newsletter</span>
                      </a>
                      <a href="#budget" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Budget 2026
                        <span className="sub-desc">Submit your feedback and views here</span>
                      </a>
                      <a href="#smp" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Singapore Model Parliament 2026
                        <span className="sub-desc">Flagship youth programme organised by REACH</span>
                      </a>
                      <a href="#ndr" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        National Day Rally 2026
                      </a>
                    </div>
                  )}
                </li>

                <li className="reach-nav-item">
                  <button
                    type="button"
                    className="reach-nav-btn"
                    aria-expanded={openMenu === "who"}
                    onClick={() => toggleMenu("who")}
                  >
                    <span>Who we are</span>
                    <svg className="reach-chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {openMenu === "who" && (
                    <div className="reach-dropdown">
                      <a href="#about" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        About Us
                        <span className="sub-desc">About REACH</span>
                      </a>
                      <a href="#mission" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Our Mission
                        <span className="sub-desc">See REACH's mission</span>
                      </a>
                      <a href="#panels" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        REACH Advisory and Youth Advisory Panels
                      </a>
                      <a href="#characters" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        REACH Characters
                      </a>
                      <a href="#year-in-review" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        REACH Year-In-Review
                      </a>
                    </div>
                  )}
                </li>

                <li className="reach-nav-item">
                  <button
                    type="button"
                    className="reach-nav-btn"
                    aria-expanded={openMenu === "what"}
                    onClick={() => toggleMenu("what")}
                  >
                    <span>What we do</span>
                    <svg className="reach-chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {openMenu === "what" && (
                    <div className="reach-dropdown">
                      <a href="#dialogues" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Dialogues and Focus Group Discussions
                      </a>
                      <a href="#listening-points" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Listening Points
                      </a>
                      <a href="#engagements" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Innovative Engagements
                      </a>
                      <a href="#youth" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Youth Engagements
                      </a>
                      <a href="#collaborations" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Whole of Government (WOG) Collaborations
                      </a>
                    </div>
                  )}
                </li>

                <li className="reach-nav-item">
                  <button
                    type="button"
                    className="reach-nav-btn"
                    aria-expanded={openMenu === "info"}
                    onClick={() => toggleMenu("info")}
                  >
                    <span>Info centre</span>
                    <svg className="reach-chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                  {openMenu === "info" && (
                    <div className="reach-dropdown">
                      <a href="#terms" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Terms and Conditions
                      </a>
                      <a href="#news" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        News and Press Releases
                      </a>
                      <a href="#privacy" className="reach-dropdown-item" onClick={() => setOpenMenu(null)}>
                        Privacy Policy
                      </a>
                    </div>
                  )}
                </li>

                <li className="reach-nav-item">
                  <a
                    href="#contact-us"
                    className="reach-nav-btn"
                    onClick={(e) => {
                      if (onNavigate) {
                        e.preventDefault();
                        onNavigate("contactus");
                      }
                    }}
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="reach-navbar__right">
            <button
              type="button"
              className="reach-search-btn"
              aria-label="Toggle search bar"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="reach-search-bar-wrap">
            <input
              type="search"
              className="reach-search-bar-input"
              placeholder="Search REACH Singapore..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
        )}
      </header>

      {/* 4. Hero Banner Section */}
      <section className="reach-hero">
        <div className="reach-hero__content">
          <div className="reach-hero__inner">
            <div>
              <h1 className="reach-hero__title">
                Share your<br />feedback<br />with us!
              </h1>
              <p className="reach-hero__desc">
                From housing, transport, manpower, education to mental health and more
              </p>
            </div>
            <div>
              <a
                href="#feedback"
                className="reach-hero__btn"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate("feedback");
                  }
                }}
              >
                Share Your Views
              </a>
            </div>
          </div>
        </div>
        <div className="reach-hero__image-wrap">
          <img
            src="https://isomer-user-content.by.gov.sg/27/972b36f5-874f-479c-8417-75dc841a16b6/Hero Banner 2026.webp"
            alt="Hero Banner 2026 - Singapore Skyline"
            className="reach-hero__img"
          />
        </div>
      </section>

      {/* 5. Latest Happenings Section */}
      <section className="reach-section" id="latest-happenings">
        <div className="reach-section__header">
          <h2 className="reach-section__title">Latest Happenings</h2>
        </div>

        <div className="reach-happenings-grid">
          <a href="#ndr" className="reach-happening-card">
            <h3 className="reach-happening-card__title">
              National Day Rally 2026 <span className="reach-happening-card__arrow">→</span>
            </h3>
            <p className="reach-happening-card__desc">Share your views and feedback on National Day Rally 2026</p>
          </a>

          <a href="#smp" className="reach-happening-card">
            <h3 className="reach-happening-card__title">
              Singapore Model Parliament 2026 <span className="reach-happening-card__arrow">→</span>
            </h3>
            <p className="reach-happening-card__desc">Find out more about Singapore Model Parliament (SMP) 2026, a flagship youth programme organised by REACH.</p>
          </a>

          <a href="#budget" className="reach-happening-card">
            <h3 className="reach-happening-card__title">
              Budget 2026 <span className="reach-happening-card__arrow">→</span>
            </h3>
            <p className="reach-happening-card__desc">Submit your feedback and views here</p>
          </a>
        </div>
      </section>

      {/* 6. Public Consultations Section */}
      <section className="reach-section" id="consultations">
        <div className="reach-section__header">
          <h2 className="reach-section__title">Public Consultations</h2>
          <p className="reach-section__subtitle">View the recent public consultations.</p>
        </div>

        <div className="reach-consult-grid">
          <a href="#acra" className="reach-consult-card">
            <div className="reach-consult-card__thumb">
              <img
                src="https://isomer-user-content.by.gov.sg/27/d74e1a08-7e3b-406b-b6ab-be91f66af847/acrahomelogo.jpg"
                alt="ACRA Accounting and Corporate Regulatory Authority"
              />
            </div>
            <h3 className="reach-consult-card__title">
              Public Consultation on Singapore's Sustainability Disclosure Standards <span className="reach-consult-card__arrow">→</span>
            </h3>
            <span className="reach-consult-card__status">Open</span>
          </a>

          <a href="#moh" className="reach-consult-card">
            <div className="reach-consult-card__thumb">
              <img
                src="https://isomer-user-content.by.gov.sg/27/e9900f50-bbc4-4708-a68f-ee6981427ecf/MOH Logo (800 x 400px).png"
                alt="Ministry of Health Singapore"
              />
            </div>
            <h3 className="reach-consult-card__title">
              Public Consultation on the Proposed Bill on Protecting Genetic Information <span className="reach-consult-card__arrow">→</span>
            </h3>
            <span className="reach-consult-card__status">Closed</span>
          </a>

          <a href="#hsa" className="reach-consult-card">
            <div className="reach-consult-card__thumb">
              <img
                src="https://isomer-user-content.by.gov.sg/27/f3575ccb-2381-47c7-9b9d-2eabbb83fddf/HSA_logo_home.jpg"
                alt="Health Sciences Authority"
              />
            </div>
            <h3 className="reach-consult-card__title">
              Stakeholder Consultation on the Proposed Regulation for Complementary Health Products under the Health Products Act <span className="reach-consult-card__arrow">→</span>
            </h3>
            <span className="reach-consult-card__status">Closed</span>
          </a>

          <a href="#mddi" className="reach-consult-card">
            <div className="reach-consult-card__thumb">
              <img
                src="https://isomer-user-content.by.gov.sg/27/5144999b-cd15-45db-96dc-d063dab08200/MDDI Logo - 800 x 400 px.png"
                alt="Ministry of Digital Development and Information"
              />
            </div>
            <h3 className="reach-consult-card__title">
              Public Consultation on the Digital Infrastructure Bill <span className="reach-consult-card__arrow">→</span>
            </h3>
            <span className="reach-consult-card__status">Closed - Summary of Responses</span>
          </a>
        </div>
      </section>

      {/* 7. REACH Telegram Chat Group Section */}
      <section className="reach-split-promo reach-split-promo--telegram" id="telegram">
        <div className="reach-split-promo__image">
          <img
            src="https://isomer-user-content.by.gov.sg/27/ac429ccb-ff28-49b7-80b0-01c8a486ac0c/Telegram_Infopic_Homepage.webp"
            alt="Person holding a smartphone displaying Telegram app"
          />
        </div>
        <div className="reach-split-promo__content">
          <h2 className="reach-split-promo__title">REACH Telegram Chat Group</h2>
          <p className="reach-split-promo__desc">
            We invite you share your views on national policies. Our chat group will be open for feedback when the opportunity arises for us to discuss hot-button issues and national policies.
          </p>
          <div>
            <a href="https://t.me/reachsingapore" target="_blank" rel="noopener noreferrer" className="reach-split-promo__btn">
              Register
            </a>
          </div>
        </div>
      </section>

      {/* 8. Subscribe to REACH Bytes E-Newsletter Section */}
      <section className="reach-split-promo reach-split-promo--newsletter" id="newsletter">
        <div className="reach-split-promo__content">
          <h2 className="reach-split-promo__title">Subscribe to REACH Bytes E-Newsletter</h2>
          <p className="reach-split-promo__desc">
            Receive our weekly REACH Bytes e-newsletter and be updated on the latest REACH events and public consultations.
          </p>
          <div>
            <a href="https://www.reach.gov.sg" target="_blank" rel="noopener noreferrer" className="reach-split-promo__btn">
              Subscribe
            </a>
          </div>
        </div>
        <div className="reach-split-promo__image">
          <img
            src="https://isomer-user-content.by.gov.sg/27/46f2aee4-74f8-4315-ba6a-469cdd1ff581/Reach_Bytes_Infopic_Homepage.webp"
            alt="Laptop screen showing REACH Bytes email newsletter"
          />
        </div>
      </section>

      {/* 9. Connect with us Section */}
      <section className="reach-section" id="connect">
        <div className="reach-section__header">
          <h2 className="reach-section__title">Connect with us</h2>
          <p className="reach-section__subtitle">Check out our latest posts</p>
        </div>

        <div className="reach-social-grid">
          <a href="https://www.facebook.com/REACHSingapore/" target="_blank" rel="noopener noreferrer" className="reach-social-card">
            <div className="reach-social-card__thumb">
              <img
                src="https://isomer-user-content.by.gov.sg/27/1c6ffc2e-4074-4e78-9025-4c804ee3426a/Facebook.webp"
                alt="Facebook logo"
              />
            </div>
            <h3>
              Facebook
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
              </svg>
            </h3>
          </a>

          <a href="https://www.tiktok.com/@reachsingapore" target="_blank" rel="noopener noreferrer" className="reach-social-card">
            <div className="reach-social-card__thumb">
              <img
                src="https://isomer-user-content.by.gov.sg/27/179cd07c-ccb3-4b5b-bfba-f16ec7647248/TikTok.webp"
                alt="TikTok logo"
              />
            </div>
            <h3>
              TikTok
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
              </svg>
            </h3>
          </a>

          <a href="https://www.instagram.com/reachsg/" target="_blank" rel="noopener noreferrer" className="reach-social-card">
            <div className="reach-social-card__thumb">
              <img
                src="https://isomer-user-content.by.gov.sg/27/7a096437-d147-493b-8d49-f916528ffad4/Instagram.webp"
                alt="Instagram logo"
              />
            </div>
            <h3>
              Instagram
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" />
              </svg>
            </h3>
          </a>
        </div>
      </section>

      {/* 10. Official Isomer Next Dark Footer */}
      <ReachFooter
        onNavigateContact={() => onNavigate && onNavigate("contactus")}
        onNavigateFeedback={() => onNavigate && onNavigate("feedback")}
      />
    </div>
  );
}
