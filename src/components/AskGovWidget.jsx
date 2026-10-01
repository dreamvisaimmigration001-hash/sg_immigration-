import React, { useState, useRef, useEffect } from "react";
import "./AskGovWidget.css";

// Dual Overlapping Speech Bubbles Logo
const HelpBubblesIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="askgov-bubbles-icon"
    aria-hidden="true"
  >
    {/* Black Back Speech Bubble */}
    <path
      d="M13.8 5C8.8 5 4.8 8.6 4.8 13C4.8 14.9 5.5 16.6 6.7 18L5.2 21.8L9.2 20.6C10.6 21.2 12.1 21.5 13.8 21.5C18.8 21.5 22.8 17.9 22.8 13.5C22.8 9.1 18.8 5 13.8 5Z"
      fill="#000000"
    />
    {/* Blue Front Speech Bubble */}
    <g>
      <path
        d="M19.2 10.2C14.7 10.2 11 13.6 11 17.8C11 19.5 11.7 21.1 12.8 22.3L11.5 25.8L15.2 24.7C16.4 25.2 17.8 25.4 19.2 25.4C23.7 25.4 27.4 22 27.4 17.8C27.4 13.6 23.7 10.2 19.2 10.2Z"
        fill="#0056c6"
      />
      <text
        x="19.2"
        y="21.5"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontSize="11.5"
        fontWeight="bold"
      >
        ?
      </text>
    </g>
  </svg>
);

// Animated Waving Hand Matching Official Screenshot
export const WavingHandGraphic = () => (
  <span className="askgov-waving-hand-wrap" aria-label="Waving hand">
    <svg
      width="40"
      height="40"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="askgov-waving-hand-svg"
    >
      {/* 3 Wave Motion Arcs on Upper Right */}
      <path
        d="M 39 12 C 42.5 15.5, 42.5 20.5, 39 24"
        stroke="#111827"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 43.5 8.5 C 48 13, 48 23, 43.5 27.5"
        stroke="#111827"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 48 5 C 53.5 10.5, 53.5 25.5, 48 31"
        stroke="#111827"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Hand with Outline, Skin Fill, and Finger Details */}
      <g className="askgov-hand-palm-anim">
        {/* Full Hand & 5 Fingers Outline */}
        <path
          d="M 19 43 C 15 43, 11 36, 9.5 32 C 8 28, 5 24, 6 21 C 7 18, 10.5 19, 13 23 L 14.5 25.5 V 10 C 14.5 7.8, 17 6, 19 7 C 20.8 7.8, 20.8 9.5, 20.8 11.5 V 19 H 21.3 C 21.3 17, 21.8 6.5, 24.5 6 C 26.8 5.5, 27.8 7.5, 27.8 9.5 V 19.5 H 28.3 C 28.3 17.5, 29 9.5, 31.5 9 C 33.8 8.5, 34.8 10.5, 34.8 12.5 V 21 H 35.2 C 35.5 19.5, 36.5 14.5, 39 14 C 41 13.5, 42 15.5, 41.5 17.5 C 41 20, 39.5 24, 39 27 C 38 33, 35 41, 28 42.5 Z"
          fill="#ffdcb8"
          stroke="#111827"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Finger separation groove lines */}
        <path
          d="M 21 17 V 23.5"
          stroke="#111827"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M 28 17 V 24"
          stroke="#111827"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M 35 19 V 25"
          stroke="#111827"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Palm Crease / Character Lines */}
        <path
          d="M 15 27 C 19 30, 24 30.5, 28 27.5"
          stroke="#111827"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M 18 31 C 21.5 33.5, 26 33.5, 29.5 31"
          stroke="#111827"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  </span>
);

export default function AskGovWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [activeAnswer, setActiveAnswer] = useState(null);

  // Automatically shrink to small compact icon after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExpanded(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // Also auto-collapse on scroll down
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastScrollY) > 60) {
        setIsExpanded(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const suggestions = [
    {
      id: "passport",
      title: "Collect Singapore passport",
      icon: (
        /* Speech bubble with person icon */
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H7L10.5 21.5C11.1 22.1 12 21.7 12 21V18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
            stroke="#0056c6"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="8" r="2" stroke="#0056c6" strokeWidth="1.8" />
          <path d="M8.5 14C8.5 12.5 10 11.5 12 11.5C14 11.5 15.5 12.5 15.5 14" stroke="#0056c6" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
      answer: "You can collect your Singapore passport at the ICA Building (Level 3) or at designated SingPost post offices upon receiving your collection notification slip. Please remember to bring your current passport and NRIC.",
    },
    {
      id: "sgac",
      title: "Submit SGAC",
      icon: (
        /* Speech bubble with checkmark */
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H7L10.5 21.5C11.1 22.1 12 21.7 12 21V18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
            stroke="#0056c6"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8 10L11 13L16 7" stroke="#0056c6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      answer: "All travellers (including Singapore citizens and PRs) must submit their Singapore Arrival Card (SGAC) with electronic health declaration online within 3 days prior to arriving in Singapore via eservices.ica.gov.sg or the MyICA Mobile app for free.",
    },
    {
      id: "visa",
      title: "Apply for Visa",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0056c6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
      answer: "Foreign nationals requiring an entry visa to enter Singapore can submit an application online via the Submission of Application for Visa Electronically (SAVE) on the ICA website or through a Singapore local contact.",
    },
    {
      id: "stvp",
      title: "Extend Stay in Singapore",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0056c6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      answer: "Visitors currently in Singapore on a Short-Term Visit Pass (STVP) who wish to extend their stay can apply online using the e-Extend service up to 14 days before their pass expires.",
    },
  ];

  const handleSelectSuggestion = (item) => {
    setActiveAnswer({
      question: item.title,
      answer: item.answer,
    });
  };

  const handleCustomSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const q = inputVal.trim();
    if (!q) return;

    let ans = "Thank you for reaching out to ICA. For this specific query, you may refer to the ICA e-Services or contact our customer support hotline.";
    const lower = q.toLowerCase();

    if (lower.includes("passport") || lower.includes("collect")) {
      ans = "You can collect your Singapore passport at the ICA Building or designated SingPost post offices. Bring your current passport, NRIC, and collection notification.";
    } else if (lower.includes("sgac") || lower.includes("arrival")) {
      ans = "Singapore Arrival Card (SGAC) submission is 100% free online via MyICA or the official website within 3 days prior to arrival.";
    } else if (lower.includes("visa")) {
      ans = "Apply for an entry visa online through SAVE on the ICA website or via an authorised visa agent.";
    } else if (lower.includes("extend") || lower.includes("stay")) {
      ans = "You can apply to extend your Short-Term Visit Pass online using ICA's e-Extend service before your current pass expires.";
    }

    setActiveAnswer({
      question: q,
      answer: ans,
    });
    setInputVal("");
  };

  const showFullText = !isOpen && (isExpanded || isHovered);

  return (
    <div className="askgov-container">
      {/* AskGov Modal Dialog Window */}
      {isOpen && (
        <div className="askgov-window" role="dialog" aria-label="AskGov Chat Window">
          {/* Top Bar with Logo & Close button */}
          <div className="askgov-modal-top-bar">
            <div className="askgov-modal-logo">
              <HelpBubblesIcon />
              <span className="askgov-modal-logo-text">askgov</span>
            </div>
            <button
              type="button"
              className="askgov-modal-close-btn"
              onClick={() => {
                setIsOpen(false);
                setActiveAnswer(null);
              }}
              aria-label="Close AskGov window"
            >
              ✕
            </button>
          </div>

          {/* Blue Card Container */}
          <div className="askgov-blue-card">
            {activeAnswer ? (
              /* Answer View */
              <div className="askgov-answer-view">
                <button
                  type="button"
                  className="askgov-back-btn"
                  onClick={() => setActiveAnswer(null)}
                >
                  ← Back to suggestions
                </button>
                <div className="askgov-answer-card">
                  <div className="askgov-question-badge">FAQ Enquiry</div>
                  <h4 className="askgov-question-text">{activeAnswer.question}</h4>
                  <p className="askgov-answer-text">{activeAnswer.answer}</p>
                  <div className="askgov-answer-actions">
                    <span style={{ fontSize: "12px", color: "#64748b" }}>Was this helpful? 👍 👎</span>
                    <button
                      type="button"
                      className="askgov-ask-another-btn"
                      onClick={() => setActiveAnswer(null)}
                    >
                      Ask another question
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Greeting & Input + Suggestions View Matching Screenshot */
              <>
                <div className="askgov-greeting-title">
                  <div className="askgov-greeting-line">
                    <span>Hello!</span>
                    <WavingHandGraphic />
                  </div>
                  <div>How can we help?</div>
                </div>

                {/* Search / Input Box */}
                <form className="askgov-input-card" onSubmit={handleCustomSubmit}>
                  <div className="askgov-input-field-wrap">
                    <textarea
                      className="askgov-textarea"
                      placeholder="collect passport"
                      value={inputVal}
                      onChange={(e) => setInputVal(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleCustomSubmit();
                        }
                      }}
                    />
                  </div>
                  <div className="askgov-send-btn-wrap">
                    <button
                      type="submit"
                      className="askgov-round-send-btn"
                      aria-label="Submit search"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </form>

                {/* Suggestions List */}
                <div className="askgov-suggestions-list">
                  {suggestions.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="askgov-suggestion-item-btn"
                      onClick={() => handleSelectSuggestion(item)}
                    >
                      <div className="askgov-suggestion-left">
                        <div className="askgov-suggestion-icon-badge">
                          {item.icon}
                        </div>
                        <span className="askgov-suggestion-label">{item.title}</span>
                      </div>
                      <span className="askgov-suggestion-chevron">›</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating Trigger Capsule / Pill Button */}
      <button
        type="button"
        className={`askgov-trigger-btn ${showFullText ? "is-expanded" : "is-compact"}`}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={isOpen ? "Close Virtual Assistant" : "Need any help?"}
        title="Need any help?"
      >
        <div className="askgov-trigger-inner">
          <HelpBubblesIcon />
          <span className="askgov-trigger-text">Need any help?</span>
        </div>
      </button>
    </div>
  );
}
