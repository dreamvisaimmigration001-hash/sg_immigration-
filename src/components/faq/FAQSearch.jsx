import React, { useRef, useEffect } from "react";

export default function FAQSearch({ searchQuery, setSearchQuery }) {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="askgov-hero-search-wrapper">
      <div className="askgov-pill-search-box">
        <svg
          className="askgov-pill-search-icon"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2563eb"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          ref={inputRef}
          type="text"
          className="askgov-pill-search-input"
          placeholder="When should I submit or..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search frequently asked questions"
        />

        {searchQuery ? (
          <button
            type="button"
            className="askgov-search-clear-btn"
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
          >
            ✕
          </button>
        ) : (
          <div className="askgov-search-shortcut" aria-hidden="true">
            <kbd className="askgov-kbd">^</kbd>
            <kbd className="askgov-kbd">K</kbd>
          </div>
        )}
      </div>
    </div>
  );
}
