import React, { useState } from "react";
import CheckpointCard from "./CheckpointCard";
import TrafficNotice from "./TrafficNotice";

export default function CheckpointSection({
  categoryKey,
  categoryData,
  sectionRef,
}) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  const { title, checkpoints, footnote, trafficNotice } = categoryData;

  return (
    <div
      className="collapse-wrapper"
      id={categoryData.id}
      ref={sectionRef}
    >
      <div
        className={`collapse-title accordion ${isOpen ? "active" : "collapsed"}`}
        onClick={toggleAccordion}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <span className={`accordion-chevron-icon ${isOpen ? "open" : "closed"}`} aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0f284e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </span>
        <span className="accordion-category-title">{title}</span>
      </div>
      <hr className="checkpoint-section-divider" />

      {isOpen && (
        <div className="sf_colsIn collapse-content panel show">
          <div className="checkpoints-grid">
            {checkpoints.map((cp) => (
              <CheckpointCard key={cp.id} checkpoint={cp} />
            ))}
          </div>

          {footnote && (
            <div className="checkpoint-footnote">
              <p>{footnote}</p>
            </div>
          )}

          {trafficNotice && <TrafficNotice notice={trafficNotice} />}
        </div>
      )}
    </div>
  );
}
