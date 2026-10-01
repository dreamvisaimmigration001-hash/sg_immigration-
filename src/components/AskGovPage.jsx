import React from "react";
import FAQSection from "./faq/FAQSection";
import "./AskGovPage.css";

export default function AskGovPage({
  onNavigateHome,
  onNavigateContact,
  onNavigateFeedback,
  onNavigateStatus,
  onNavigateCheckpoints,
  onNavigateReach,
}) {
  return (
    <div className="askgov-fullpage">
      {/* Reusable FAQ Section with Official AskGov Header, Hero & Footer */}
      <FAQSection
        onNavigateContact={onNavigateContact}
        onNavigateHome={onNavigateHome}
        onNavigateFeedback={onNavigateFeedback}
        onNavigateStatus={onNavigateStatus}
        onNavigateCheckpoints={onNavigateCheckpoints}
        onNavigateReach={onNavigateReach}
      />
    </div>
  );
}
