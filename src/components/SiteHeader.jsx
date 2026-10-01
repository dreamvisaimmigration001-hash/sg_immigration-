import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { navigationMenu, eServicesLinks } from "../data/checkpointsData";

export default function SiteHeader({
  searchQuery,
  setSearchQuery,
  totalMatches,
  isSearching,
  activeView,
  onNavigate,
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);

  // Handle body overflow when mobile menu is open without breaking touch events
  useEffect(() => {
    if (isMobileMenuOpen) {
      const originalBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalBodyOverflow;
      };
    }
  }, [isMobileMenuOpen]);

  // Auto-close mobile menu on view change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [activeView]);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleMobileSection = (title) => {
    setMobileExpandedSection(mobileExpandedSection === title ? null : title);
  };

  const handleMenuTitleClick = (e, menuTitle) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);

    let target = "home";
    let hash = "#home";

    if (menuTitle === "News & Publications") {
      target = "newsroom";
      hash = "#newsroom";
    } else if (menuTitle === "Who We Are") {
      target = "checkpoints";
      hash = "#checkpoints";
    } else if (menuTitle === "Careers") {
      target = "join-us";
      hash = "#join-us";
    }

    if (onNavigate) {
      onNavigate(target);
    }
    window.location.hash = hash;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);

    const href = (item.href || "").toLowerCase();
    const label = (item.label || "").toLowerCase();

    let target = null;
    let hash = null;

    if (label.includes("service commitment") || label.includes("commitment") || href.includes("service-commitment") || href.includes("commitment")) {
      target = "our-service-commitment";
      hash = "#our-service-commitment";
    } else if (label.includes("award") || label.includes("accolade") || href.includes("award") || href.includes("accolade")) {
      target = "awards-accolades";
      hash = "#awards-accolades";
    } else if (label.includes("checkpoint") || href.includes("checkpoint")) {
      target = "checkpoints";
      hash = "#checkpoints";
    } else if (label.includes("appointment") || label.includes("check status") || href.includes("status") || href.includes("appointment")) {
      target = "checkstatus";
      hash = "#status";
    } else if (label.includes("contact") || href.includes("contact")) {
      target = "contactus";
      hash = "#contact-us";
    } else if (label.includes("vision") || label.includes("mission") || label.includes("values") || href.includes("vision-mission-values")) {
      target = "vision-mission-values";
      hash = "#vision-mission-values";
    } else if (label.includes("people") || href.includes("our-people")) {
      target = "our-people";
      hash = "#our-people";
    } else if (label.includes("statistic") || href.includes("statistic")) {
      target = "statistics";
      hash = "#statistics";
    } else if (label.includes("annual") || href.includes("annual")) {
      target = "publications";
      hash = "#ica-annuals";
    } else if (label.includes("publication") || href.includes("publication")) {
      target = "publications";
      hash = "#publications";
    } else if (label.includes("education") || href.includes("education") || href.includes("public-education")) {
      target = "public-education";
      hash = "#public-education";
    } else if (label.includes("newsroom") || href.includes("newsroom") || label.includes("news") || href.includes("news")) {
      target = "newsroom";
      hash = "#newsroom";
    } else if (label.includes("feedback") || href.includes("feedback")) {
      target = "feedback";
      hash = "#feedback";
    } else if (label.includes("career-faq") || label.includes("career faq") || href.includes("career-faq") || label.includes("career faqs")) {
      target = "career-faqs";
      hash = "#career-faqs";
    } else if (label.includes("faq") || label.includes("help") || href.includes("faqs") || href.includes("askgov")) {
      target = "askgov";
      hash = "#faqs";
    } else if (label.includes("reach") || href.includes("reach")) {
      target = "reach";
      hash = "#reach";
    } else if (label.includes("identity") || label.includes("passport") || label.includes("document") || href.includes("document")) {
      target = "documents";
      hash = "#documents";
    } else if (label.includes("enter") || label.includes("transit") || label.includes("depart") || href.includes("enter-transit-depart")) {
      target = "enter-transit-depart";
      hash = "#enter-transit-depart";
    } else if (label.includes("reside") || label.includes("study") || label.includes("work") || href.includes("reside")) {
      target = "reside";
      hash = "#reside";
    } else if (label.includes("scholarship") || label.includes("sponsorship") || label.includes("internship") || href.includes("scholarship")) {
      target = "scholarships";
      hash = "#scholarships";
    } else if (label.includes("meet our officer") || label.includes("meet-our-officer") || href.includes("meet-our-officer") || href.includes("meet-officer") || label.includes("meet our officers")) {
      target = "meet-our-officers";
      hash = "#meet-our-officers";
    } else if (label.includes("join") || label.includes("career") || href.includes("join-us") || href.includes("careers")) {
      target = "join-us";
      hash = "#join-us";
    } else if (label.includes("who we are") || href.includes("who-we-are")) {
      target = "vision-mission-values";
      hash = "#vision-mission-values";
    }

    if (target && onNavigate) {
      onNavigate(target);
    }
    if (hash) {
      window.location.hash = hash;
    } else if (item.href && item.href.startsWith("#")) {
      window.location.hash = item.href;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEServiceClick = (e, eservice) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (eservice.id === "checkstatus") {
      if (onNavigate) onNavigate("checkstatus");
    } else if (eservice.id === "identity" || eservice.id === "documents") {
      if (onNavigate) onNavigate("documents");
    } else if (eservice.id === "enter-transit-depart" || eservice.id === "enter_transit_depart") {
      if (onNavigate) onNavigate("enter-transit-depart");
    } else if (eservice.id === "reside" || eservice.id === "reside-study-work") {
      if (onNavigate) onNavigate("reside");
    } else if (eservice.id === "eservicesandforms" || eservice.id === "eservices") {
      if (onNavigate) onNavigate("eservicesandforms");
    } else {
      if (onNavigate) onNavigate("checkpoints");
    }
  };

  const isMenuActive = (menuTitle) => {
    if (menuTitle === "Who We Are") {
      return ["checkpoints", "vision-mission-values", "our-people", "awards-accolades", "our-service-commitment"].includes(activeView);
    }
    if (menuTitle === "News & Publications") {
      return ["newsroom", "publications", "statistics", "public-education", "ica-annuals"].includes(activeView);
    }
    if (menuTitle === "Careers") {
      return ["join-us", "careers", "scholarships", "meet-our-officers", "career-faqs"].includes(activeView);
    }
    return false;
  };

  const isItemActive = (item) => {
    const href = (item.href || "").toLowerCase();
    const label = (item.label || "").toLowerCase();
    if (activeView === "career-faqs" && (href.includes("career-faq") || label.includes("career faq") || label.includes("career faqs") || href.includes("career_faq"))) return true;
    if (activeView === "askgov" && !href.includes("career") && !label.includes("career") && (href.includes("faq") || label.includes("faq") || href.includes("askgov"))) return true;
    if (activeView === "meet-our-officers" && (href.includes("meet") || href.includes("officer"))) return true;
    if (activeView === "scholarships" && (href.includes("scholarship") || href.includes("internship"))) return true;
    if (activeView === "checkpoints" && href.includes("checkpoint")) return true;
    if (activeView === "newsroom" && href.includes("newsroom")) return true;
    if (activeView === "publications" && (href.includes("publication") || href.includes("annual"))) return true;
    if (activeView === "statistics" && href.includes("statistic")) return true;
    if (activeView === "public-education" && href.includes("education")) return true;
    if (activeView === "vision-mission-values" && href.includes("vision")) return true;
    if (activeView === "our-people" && href.includes("our-people")) return true;
    if (activeView === "awards-accolades" && href.includes("award")) return true;
    if (activeView === "our-service-commitment" && href.includes("commitment")) return true;
    if (activeView === "join-us" && href.includes("join-us")) return true;
    return false;
  };

  return (
    <header className="site-header" data-home={activeView === "home" ? "true" : "false"}>
      <div className="site-header__main">
        <div className="container">
          <div className="site-header__container">
            {/* Logo */}
            <div className="site-logo">
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("home");
                }}
                title="Immigration & Checkpoints Authority"
              >
                <img
                  className="desktop-logo"
                  src="/assets/logo/ica_logo_new.svg"
                  alt="Immigration & Checkpoints Authority"
                  width="176"
                  height="90"
                />
                <img
                  className="mobile-logo"
                  src="/assets/logo/ica_logo_new.svg"
                  alt="Immigration & Checkpoints Authority"
                  width="128"
                  height="65"
                />
              </a>
            </div>

            {/* When in the IPSAVE Appointment & Visa section, hide the main portal menu, MyICA pill, and search icon */}
            {activeView !== "checkstatus" && (
              <div className="site-header__right-group">
                {/* Desktop Navigation */}
                <div className="site-header__inner">
                  <nav className="site-nav">
                    <div className="site-nav__wrapper">
                      <ul className="site-nav__list">
                        {navigationMenu.map((menu) => (
                          <li
                            key={menu.title}
                            className={`${activeDropdown === menu.title ? "hovered" : ""} ${
                              isMenuActive(menu.title) ? "active" : ""
                            }`}
                            onMouseEnter={() => setActiveDropdown(menu.title)}
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                            <span
                              tabIndex={0}
                              role="button"
                              onClick={() => {
                                if (menu.title === "News & Publications") {
                                  if (onNavigate) onNavigate("newsroom");
                                  window.location.hash = "#newsroom";
                                } else if (menu.title === "Who We Are") {
                                  if (onNavigate) onNavigate("checkpoints");
                                  window.location.hash = "#checkpoints";
                                } else if (menu.title === "Careers") {
                                  if (onNavigate) onNavigate("join-us");
                                  window.location.hash = "#join-us";
                                }
                                window.scrollTo({ top: 0, behavior: "smooth" });
                              }}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  if (menu.title === "News & Publications") {
                                    if (onNavigate) onNavigate("newsroom");
                                    window.location.hash = "#newsroom";
                                  } else if (menu.title === "Who We Are") {
                                    if (onNavigate) onNavigate("checkpoints");
                                    window.location.hash = "#checkpoints";
                                  } else if (menu.title === "Careers") {
                                    if (onNavigate) onNavigate("join-us");
                                    window.location.hash = "#join-us";
                                  }
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                }
                              }}
                            >
                              {menu.title}
                              <span className="icon icon-chevron" aria-hidden="true">
                                ▼
                              </span>
                            </span>
                            <ul>
                              {menu.items.map((item) => (
                                <li key={item.label}>
                                  <a
                                    href={item.href}
                                    className={isItemActive(item) ? "active-link" : ""}
                                    onClick={(e) => handleLinkClick(e, item)}
                                  >
                                    {item.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </nav>
                </div>

                {/* Right Header Action Icons */}
                <div className="site-header__controls">
                  {/* Search Toggle Button */}
                  <button
                    className={`btn-toggle-search ${isSearchOpen ? "expanded" : ""}`}
                    type="button"
                    onClick={toggleSearch}
                    aria-label="Toggle search bar"
                  >
                    <span className="sr-only">Toggle search bar</span>
                    <svg
                      className="icon icon-search"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </button>

                  {/* Mobile Menu Hamburger Toggle Button */}
                  <button
                    className={`btn-toggle-menu ${isMobileMenuOpen ? "active" : ""}`}
                    type="button"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMobileMenuOpen}
                  >
                    <span className="sr-only">Toggle mobile menu</span>
                    {isMobileMenuOpen ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-menu-close"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon-menu-hamburger"
                      >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {activeView !== "checkstatus" && isMobileMenuOpen && (
          <div className="mobile-nav-drawer">
            {/* Main Portal Sections (Who We Are, News & Publications, Careers) at the Top */}
            <div className="mobile-drawer-header-label">MAIN NAVIGATION</div>
            <ul className="site-nav__list mobile-list">
              {navigationMenu.map((menu) => {
                const isExpanded = mobileExpandedSection === menu.title;
                const menuHash =
                  menu.title === "News & Publications"
                    ? "#newsroom"
                    : menu.title === "Who We Are"
                    ? "#checkpoints"
                    : "#join-us";

                return (
                  <li
                    key={menu.title}
                    className={`mobile-menu-item ${isExpanded ? "expanded" : ""}`}
                  >
                    <div className="mobile-menu-section-row">
                      <a
                        href={menuHash}
                        className="mobile-menu-title-link"
                        onClick={(e) => handleMenuTitleClick(e, menu.title)}
                      >
                        <span className="mobile-menu-title-text">{menu.title}</span>
                      </a>
                      <button
                        type="button"
                        className="mobile-menu-expand-btn"
                        onClick={() => toggleMobileSection(menu.title)}
                        aria-expanded={isExpanded}
                        aria-label={`Toggle ${menu.title} sub-navigation`}
                      >
                        <svg
                          className="mobile-menu-chevron"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                    </div>
                    {isExpanded && (
                      <ul className="mobile-submenu-list">
                        {menu.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              onClick={(e) => {
                                setIsMobileMenuOpen(false);
                                handleLinkClick(e, item);
                              }}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* e-Services and Quick Links */}
            <div className="mobile-drawer-header-label mobile-drawer-header-label--eservices">E-SERVICES</div>
            <ul className="site-nav__eservices">
              {eServicesLinks.map((eservice) => (
                <li key={eservice.id}>
                  <a
                    href={eservice.href}
                    onClick={(e) => handleEServiceClick(e, eservice)}
                  >
                    <span className="label">{eservice.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* SearchSG Search Overlay */}
        {activeView !== "checkstatus" && (
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
            totalMatches={totalMatches}
            isSearching={isSearching}
          />
        )}
      </div>

      {/* Authentic ICA e-Services Magenta Sub-Bar directly below the logo */}
      {activeView === "checkstatus" && (
        <div className="ipsave-magenta-bar">
          <div className="container">
            <div className="ipsave-magenta-bar__inner">
              <a
                href="#checkpoints"
                className="ipsave-subbar-link"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("checkpoints");
                }}
                title="Return to ICA Website"
              >
                <svg
                  className="ipsave-subbar-icon ipsave-subbar-home-icon"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="28"
                  height="28"
                  aria-hidden="true"
                >
                  <path d="M12 3L8 6.6V4H5v5.3L2 12h3v8h5v-6h4v6h5v-8h3L12 3z" />
                </svg>
                <span>ICA Website</span>
              </a>

              <a
                href="#logout"
                className="ipsave-subbar-link ipsave-subbar-logout"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate("checkpoints");
                }}
                title="Logout"
              >
                <svg
                  className="ipsave-subbar-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                <span>Logout</span>
              </a>
              </div>
            </div>
          </div>
        )}
    </header>
  );
}
