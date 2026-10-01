import React, { useRef } from "react";
import { eServicesLinks } from "../data/checkpointsData";

export default function EServicesBar({ activeView, onSelectService }) {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  const renderIcon = (id) => {
    switch (id) {
      case "identity":
        return (
          <svg className="eservice-icon-svg" viewBox="0 0 28 22" fill="currentColor">
            <rect x="1" y="2" width="26" height="18" rx="2" fill="#153855" />
            <rect x="4" y="6" width="6" height="7" fill="#ffffff" />
            <line x1="13" y1="7" x2="23" y2="7" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="13" y1="11" x2="23" y2="11" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="13" y1="15" x2="19" y2="15" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case "enter-transit-depart":
        return (
          <svg className="eservice-icon-svg" viewBox="0 0 28 24" fill="currentColor">
            <rect x="2" y="6" width="10" height="15" rx="1.5" fill="none" stroke="#757575" strokeWidth="1.8" />
            <path d="M5 6V3.5C5 2.7 5.7 2 6.5 2H7.5C8.3 2 9 2.7 9 3.5V6" fill="none" stroke="#757575" strokeWidth="1.5" />
            <line x1="2" y1="13" x2="12" y2="13" stroke="#757575" strokeWidth="1.5" />
            <rect x="13" y="10" width="14" height="11" rx="1.5" fill="none" stroke="#757575" strokeWidth="1.8" />
            <path d="M17 10V8C17 7.4 17.4 7 18 7H22C22.6 7 23 7.4 23 8V10" fill="none" stroke="#757575" strokeWidth="1.5" />
            <line x1="13" y1="15.5" x2="27" y2="15.5" stroke="#757575" strokeWidth="1.5" />
          </svg>
        );
      case "reside":
        return (
          <svg className="eservice-icon-svg" viewBox="0 0 28 24" fill="currentColor">
            <rect x="2" y="8" width="10" height="15" fill="none" stroke="#757575" strokeWidth="1.8" />
            <rect x="4.5" y="11" width="2" height="2" fill="#757575" />
            <rect x="7.5" y="11" width="2" height="2" fill="#757575" />
            <rect x="4.5" y="15" width="2" height="2" fill="#757575" />
            <rect x="7.5" y="15" width="2" height="2" fill="#757575" />
            <rect x="13" y="2" width="13" height="21" fill="none" stroke="#757575" strokeWidth="1.8" />
            <rect x="15.5" y="5" width="2" height="2" fill="#757575" />
            <rect x="19" y="5" width="2" height="2" fill="#757575" />
            <rect x="22.5" y="5" width="2" height="2" fill="#757575" />
            <rect x="15.5" y="9" width="2" height="2" fill="#757575" />
            <rect x="19" y="9" width="2" height="2" fill="#757575" />
            <rect x="22.5" y="9" width="2" height="2" fill="#757575" />
            <rect x="15.5" y="13" width="2" height="2" fill="#757575" />
            <rect x="19" y="13" width="2" height="2" fill="#757575" />
            <rect x="22.5" y="13" width="2" height="2" fill="#757575" />
          </svg>
        );
      case "eservicesandforms":
        return (
          <svg className="eservice-icon-svg" viewBox="0 0 24 26" fill="none" stroke="#757575">
            <path d="M4 2h10l6 6v15a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" strokeWidth="1.8" />
            <path d="M14 2v6h6" strokeWidth="1.8" />
            <line x1="7" y1="12" x2="17" y2="12" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="7" y1="16" x2="17" y2="16" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="7" y1="20" x2="13" y2="20" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case "checkstatus":
        return (
          <svg className="eservice-icon-svg" viewBox="0 0 26 26" fill="none" stroke="#757575">
            <rect x="2" y="4" width="22" height="20" rx="2" strokeWidth="1.8" />
            <line x1="2" y1="9" x2="24" y2="9" strokeWidth="1.8" />
            <line x1="7" y1="2" x2="7" y2="5" strokeWidth="2" strokeLinecap="round" />
            <line x1="19" y1="2" x2="19" y2="5" strokeWidth="2" strokeLinecap="round" />
            <rect x="6" y="12" width="2" height="2" fill="#757575" stroke="none" />
            <rect x="10" y="12" width="2" height="2" fill="#757575" stroke="none" />
            <rect x="14" y="12" width="2" height="2" fill="#757575" stroke="none" />
            <rect x="18" y="12" width="2" height="2" fill="#757575" stroke="none" />
            <rect x="6" y="16" width="2" height="2" fill="#757575" stroke="none" />
            <rect x="10" y="16" width="2" height="2" fill="#757575" stroke="none" />
            <rect x="14" y="16" width="2" height="2" fill="#757575" stroke="none" />
            <rect x="18" y="16" width="2" height="2" fill="#757575" stroke="none" />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleClick = (e, item) => {
    e.preventDefault();
    if (onSelectService) {
      onSelectService(item.id);
    }
  };

  return (
    <nav className="eservice-sidebar horizontal-scrollable" aria-label="e-Services Sidebar">
      <div className="container">
        <ul className="eservice-sidebar__list" ref={scrollContainerRef}>
          {eServicesLinks.map((item) => {
            const isItemActive =
              activeView === "eservicesandforms" || activeView === "eservices"
                ? item.id === "eservicesandforms"
                : activeView === "reside" || activeView === "reside-study-work"
                ? item.id === "reside"
                : activeView === "documents" || activeView === "identity"
                ? item.id === "identity"
                : activeView === "enter-transit-depart" || activeView === "enter_transit_depart"
                ? item.id === "enter-transit-depart"
                : activeView === "contactus"
                ? item.id === "identity"
                : item.id === "checkstatus" && activeView === "checkstatus";

            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  title={item.label}
                  className={isItemActive ? "active" : ""}
                  onClick={(e) => handleClick(e, item)}
                >
                  <div className="eservice-icon-wrap">{renderIcon(item.id)}</div>
                  <span className="label">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
