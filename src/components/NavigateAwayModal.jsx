import React from "react";
import "./NavigateAwayModal.css";

export default function NavigateAwayModal({
  isOpen,
  onStay,
  onLeave,
  targetUrl = "#home",
}) {
  if (!isOpen) return null;

  const handleLeave = () => {
    if (onLeave) {
      onLeave();
    } else {
      window.location.hash = "#home";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="navigate-away-overlay" role="dialog" aria-modal="true">
      <div className="navigate-away-modal">
        {/* Top Maroon/Magenta Stripe */}
        <div className="navigate-away-top-bar" />

        <div className="navigate-away-content">
          {/* Header Title */}
          <h2 className="navigate-away-title">
            You are about to navigate away from this page
          </h2>
          <hr className="navigate-away-divider" />

          {/* Body Text */}
          <div className="navigate-away-body">
            <p>The information you have provided will be lost if you navigate away from this page.</p>
            <p>Are you sure you want to leave this page?</p>
          </div>

          <hr className="navigate-away-divider" />

          {/* Action Buttons */}
          <div className="navigate-away-actions">
            <button
              type="button"
              className="navigate-away-btn"
              onClick={onStay}
            >
              Stay on this Page
            </button>
            <button
              type="button"
              className="navigate-away-btn"
              onClick={handleLeave}
            >
              Leave this Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
