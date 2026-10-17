import React, { useState, useEffect, useRef } from "react";

const QUICK_LINKS = [
  {
    prefix: "ICA",
    title: "Check Status/Make Appointment",
    target: "checkstatus",
    hash: "#status",
  },
  {
    prefix: "ICA",
    title: "SG Arrival Card (SGAC) with Electronic Health Declaration",
    target: "eservicesandforms",
    hash: "#eservicesandforms",
  },
  {
    prefix: "ICA",
    title: "Becoming a Permanent Resident (Apply)",
    target: "reside",
    hash: "#reside",
  },
];

export default function SearchBar({
  searchQuery: externalSearchQuery,
  setSearchQuery: externalSetSearchQuery,
  isOpen = true,
  onClose,
  totalMatches = 0,
  isSearching = false,
  onNavigate,
}) {
  const [internalQuery, setInternalQuery] = useState(externalSearchQuery || "");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const containerRef = useRef(null);

  // Synchronize internal state with external query prop if supplied
  useEffect(() => {
    if (externalSearchQuery !== undefined) {
      setInternalQuery(externalSearchQuery);
    }
  }, [externalSearchQuery]);

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isAnimOpen, setIsAnimOpen] = useState(isOpen);
  const [isSettled, setIsSettled] = useState(isOpen);

  // Smooth open / close animation lifecycle
  useEffect(() => {
    let animTimer;
    let settleTimer;

    if (isOpen) {
      setShouldRender(true);
      const frame = requestAnimationFrame(() => {
        setIsAnimOpen(true);
      });
      settleTimer = setTimeout(() => {
        setIsSettled(true);
      }, 340);
      return () => {
        cancelAnimationFrame(frame);
        clearTimeout(settleTimer);
      };
    } else {
      setIsSettled(false);
      setIsAnimOpen(false);
      setIsDropdownOpen(false);
      animTimer = setTimeout(() => {
        setShouldRender(false);
      }, 340);
      return () => clearTimeout(animTimer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const currentQuery =
    externalSearchQuery !== undefined && externalSearchQuery !== ""
      ? externalSearchQuery
      : internalQuery;

  const handleChange = (e) => {
    const val = e.target.value;
    setInternalQuery(val);
    if (externalSetSearchQuery) {
      externalSetSearchQuery(val);
    }
    setIsDropdownOpen(true);
  };

  const handleClear = () => {
    setInternalQuery("");
    if (externalSetSearchQuery) {
      externalSetSearchQuery("");
    }
  };

  const handleLinkSelect = (link) => {
    setIsDropdownOpen(false);
    if (onNavigate) {
      onNavigate(link.target);
    } else {
      window.location.hash = link.hash;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    const q = (currentQuery || "").trim().toLowerCase();
    if (!q) return;

    if (onNavigate) {
      if (q.includes("checkpoint") || q.includes("woodland") || q.includes("tuas")) {
        onNavigate("checkpoints");
      } else if (q.includes("visa") || q.includes("entry") || q.includes("transit")) {
        onNavigate("enter-transit-depart");
      } else if (q.includes("status") || q.includes("appointment")) {
        onNavigate("checkstatus");
      } else if (q.includes("passport") || q.includes("ic") || q.includes("document")) {
        onNavigate("documents");
      } else if (q.includes("sgac") || q.includes("arrival") || q.includes("card") || q.includes("form")) {
        onNavigate("eservicesandforms");
      } else if (q.includes("contact") || q.includes("enquiry")) {
        onNavigate("contactus");
      } else if (q.includes("faq") || q.includes("ask")) {
        onNavigate("askgov");
      } else if (q.includes("news") || q.includes("release")) {
        onNavigate("newsroom");
      } else {
        onNavigate("checkpoints");
      }
    }
  };

  const filteredLinks = currentQuery.trim()
    ? QUICK_LINKS.filter((item) =>
        `${item.prefix} ${item.title}`.toLowerCase().includes(currentQuery.toLowerCase().trim())
      )
    : QUICK_LINKS;

  const linksToDisplay = filteredLinks.length > 0 ? filteredLinks : QUICK_LINKS;

  return (
    <div
      className={`site-searchsg-wrapper ${isAnimOpen ? "anim-open" : "anim-closed"} ${
        isSettled ? "anim-settled" : ""
      }`}
    >
      <div className="container" ref={containerRef}>
        <form onSubmit={handleSubmit} className="searchsg-form">
          <div className="search-bar-inner">
            <div className={`search-input-wrapper ${isDropdownOpen ? "focused" : ""}`}>
              <input
                id="searchsg-input"
                type="text"
                aria-label="Search within this service"
                placeholder="Search within this service"
                value={currentQuery}
                onChange={handleChange}
                onFocus={() => setIsDropdownOpen(true)}
                onClick={() => setIsDropdownOpen(true)}
                autoComplete="off"
              />
              {currentQuery && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={handleClear}
                  aria-label="Clear search"
                >
                  &times;
                </button>
              )}
            </div>
            <button
              type="submit"
              className="search-submit-btn"
              aria-label="Search"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="search-btn-icon"
                aria-hidden="true"
              >
                <circle cx="10.5" cy="10.5" r="7" />
                <line x1="21" y1="21" x2="15.5" y2="15.5" />
              </svg>
              <span className="search-btn-text">Search</span>
            </button>
          </div>

          {/* Quick links dropdown */}
          {isDropdownOpen && (
            <div className="searchsg-dropdown" role="region" aria-label="Quick links">
              <div className="searchsg-dropdown-header">Quick links</div>
              <ul className="searchsg-dropdown-list">
                {linksToDisplay.map((link, idx) => (
                  <li key={idx} className="searchsg-dropdown-item-wrap">
                    <a
                      href={link.hash}
                      className="searchsg-dropdown-link"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkSelect(link);
                      }}
                    >
                      <span className="searchsg-link-content">
                        {link.prefix} | {link.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </form>

        {isSearching && (
          <div className="search-results-indicator">
            <span>
              Found <strong>{totalMatches}</strong> matching result{totalMatches === 1 ? "" : "s"} for "{currentQuery}"
            </span>
            {currentQuery && (
              <button
                type="button"
                className="reset-filter-link"
                onClick={handleClear}
              >
                Clear filter
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
