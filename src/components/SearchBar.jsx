import React from "react";

export default function SearchBar({
  searchQuery = "",
  setSearchQuery = () => {},
  isOpen,
  onClose,
  totalMatches = 0,
  isSearching = false,
}) {
  if (!isOpen) return null;

  return (
    <div className="site-searchsg-wrapper">
      <div className="container">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="searchsg-form"
        >
          <div className="search-bar-inner">
            <div className="search-input-wrapper">
              <input
                id="searchsg-input"
                type="text"
                aria-label="Search within this service"
                placeholder="Search within this service"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <button
                  type="button"
                  className="clear-search-btn"
                  onClick={() => setSearchQuery("")}
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
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Search</span>
            </button>
          </div>
        </form>

        {isSearching && (
          <div className="search-results-indicator">
            <span>
              Found <strong>{totalMatches}</strong> matching checkpoint{totalMatches === 1 ? "" : "s"} for "{searchQuery}"
            </span>
            {searchQuery && (
              <button
                type="button"
                className="reset-filter-link"
                onClick={() => setSearchQuery("")}
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