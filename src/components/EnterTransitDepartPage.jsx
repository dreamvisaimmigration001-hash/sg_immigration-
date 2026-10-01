import React, { useState } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import "./EnterTransitDepartPage.css";

/* Singapore Flag Emblem for Pin */
const SingaporePinFlag = ({ cx, cy, r }) => (
  <g>
    <clipPath id={`flag-clip-${cx}-${cy}`}>
      <circle cx={cx} cy={cy} r={r} />
    </clipPath>
    <g clipPath={`url(#flag-clip-${cx}-${cy})`}>
      {/* Top Red Half */}
      <rect x={cx - r} y={cy - r} width={r * 2} height={r} fill="#ee2524" />
      {/* Bottom White Half */}
      <rect x={cx - r} y={cy} width={r * 2} height={r} fill="#ffffff" />
      {/* White Crescent */}
      <path
        d={`M ${cx - r * 0.45} ${cy - r * 0.72} A ${r * 0.4} ${r * 0.4} 0 0 0 ${cx - r * 0.45} ${cy - r * 0.08} A ${r * 0.3} ${r * 0.3} 0 0 1 ${cx - r * 0.45} ${cy - r * 0.72} Z`}
        fill="#ffffff"
      />
      {/* 5 White Stars */}
      <polygon points={`${cx - r * 0.12},${cy - r * 0.65} ${cx - r * 0.08},${cy - r * 0.55} ${cx},${cy - r * 0.55} ${cx - r * 0.06},${cy - r * 0.48} ${cx - r * 0.03},${cy - r * 0.38} ${cx - r * 0.12},${cy - r * 0.44} ${cx - r * 0.21},${cy - r * 0.38} ${cx - r * 0.18},${cy - r * 0.48} ${cx - r * 0.24},${cy - r * 0.55} ${cx - r * 0.16},${cy - r * 0.55}`} fill="#ffffff" transform={`scale(0.85) translate(${cx * 0.18}, ${cy * 0.08})`} />
      <circle cx={cx + r * 0.05} cy={cy - r * 0.62} r={r * 0.09} fill="#ffffff" />
      <circle cx={cx + r * 0.22} cy={cy - r * 0.48} r={r * 0.09} fill="#ffffff" />
      <circle cx={cx + r * 0.16} cy={cy - r * 0.22} r={r * 0.09} fill="#ffffff" />
      <circle cx={cx - r * 0.05} cy={cy - r * 0.22} r={r * 0.09} fill="#ffffff" />
      <circle cx={cx - r * 0.12} cy={cy - r * 0.48} r={r * 0.09} fill="#ffffff" />
    </g>
  </g>
);

export default function EnterTransitDepartPage({
  onNavigateToCheckpoints,
  onNavigateToStatus,
  onNavigateToContact,
  onNavigateHome,
  onNavigateToFeedback,
  onNavigateToFaqs,
  onNavigateToReach,
  onNavigateToDocuments,
  onNavigateToReside,
  onNavigateToEServicesForms,
  onNavigateToVisionMissionValues,
  onNavigateToOurPeople,
  onNavigateToAwardsAccolades,
  onNavigateToOurServiceCommitment,
  onNavigateToNewsroom,
  onNavigateToPublications,
  onNavigateToStatistics,
  onNavigateToPublicEducation,
  onNavigate,
}) {
  const [openPanels, setOpenPanels] = useState({});

  const togglePanel = (panelKey) => {
    setOpenPanels((prev) => ({
      ...prev,
      [panelKey]: !prev[panelKey],
    }));
  };

  const handleSelectService = (id) => {
    if (id === "identity" || id === "documents") {
      if (onNavigateToDocuments) onNavigateToDocuments();
    } else if (id === "checkstatus") {
      if (onNavigateToStatus) onNavigateToStatus();
    } else if (id === "reside") {
      if (onNavigateToReside) onNavigateToReside();
    } else if (id === "eservicesandforms" || id === "eservices") {
      if (onNavigateToEServicesForms) onNavigateToEServicesForms();
    } else if (id === "enter-transit-depart") {
      // already here
    } else {
      if (onNavigateToCheckpoints) onNavigateToCheckpoints();
    }
  };

  return (
    <div className="site-wrapper enter-transit-depart-wrapper">
      {/* Singapore Government Masthead */}
      <GovMasthead />

      {/* Official Header */}
      <SiteHeader
        searchQuery=""
        setSearchQuery={() => {}}
        totalMatches={0}
        isSearching={false}
        activeView="enter-transit-depart"
        onNavigate={(view) => {
          if (onNavigate) {
            onNavigate(view);
            return;
          }
          if (view === "newsroom" && onNavigateToNewsroom) return onNavigateToNewsroom();
          if (view === "publications" && onNavigateToPublications) return onNavigateToPublications();
          if (view === "statistics" && onNavigateToStatistics) return onNavigateToStatistics();
          if (view === "public-education" && onNavigateToPublicEducation) return onNavigateToPublicEducation();
          if (view === "checkpoints" && onNavigateToCheckpoints) return onNavigateToCheckpoints();
          if (view === "checkstatus" && onNavigateToStatus) return onNavigateToStatus();
          if (view === "contactus" && onNavigateToContact) return onNavigateToContact();
          if (view === "feedback" && onNavigateToFeedback) return onNavigateToFeedback();
          if (view === "askgov" && onNavigateToFaqs) return onNavigateToFaqs();
          if (view === "reach" && onNavigateToReach) return onNavigateToReach();
          if (view === "documents" && onNavigateToDocuments) return onNavigateToDocuments();
          if (view === "reside" && onNavigateToReside) return onNavigateToReside();
          if (view === "vision-mission-values" && onNavigateToVisionMissionValues) return onNavigateToVisionMissionValues();
          if (view === "eservicesandforms" && onNavigateToEServicesForms) return onNavigateToEServicesForms();
          if (view === "our-people" && onNavigateToOurPeople) return onNavigateToOurPeople();
          if (view === "awards-accolades" && onNavigateToAwardsAccolades) return onNavigateToAwardsAccolades();
          if (view === "our-service-commitment" && onNavigateToOurServiceCommitment) return onNavigateToOurServiceCommitment();
          window.location.hash = "#" + view;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content">
            {/* Breadcrumbs */}
            <Breadcrumbs
              activeView="enter-transit-depart"
              onNavigate={(view) => {
                if (view === "checkpoints") onNavigateToCheckpoints();
                if (view === "checkstatus") onNavigateToStatus();
                if (view === "contactus") onNavigateToContact();
              }}
            />

            {/* Horizontal e-Services Bar */}
            <EServicesBar
              activeView="enter-transit-depart"
              onSelectService={handleSelectService}
            />

            <div className="container container--no-padding">
              <div className="mega-menu-wrapper">
                {/* Intro Content */}
                <div className="sfContentBlock">
                  Travellers will need to take note of border requirements or restrictions that are in place. Please click the buttons below for more details on entering, transiting or departing Singapore.
                </div>

                {/* 3 Main Hero Cards matching exact screenshot */}
                <div className="feedback-category">
                  <div className="row">
                    {/* Card 1: Entering Singapore */}
                    <a
                      className="feedback-card"
                      href="#entering-singapore"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = "#entering-singapore";
                      }}
                    >
                      <div className="card-image">
                        <svg width="180" height="96" viewBox="0 0 180 96" fill="none">
                          {/* Origin Pin with ring head */}
                          <circle cx="36" cy="24" r="8" fill="#14234b" />
                          <circle cx="36" cy="24" r="3.5" fill="#ffffff" />
                          <rect x="33.5" y="32" width="5" height="12" fill="#14234b" />
                          <rect x="26" y="44" width="20" height="4" rx="2" fill="#14234b" />

                          {/* S-curve path leading to right with arrow */}
                          <path
                            d="M 36 48 C 36 68, 72 68, 72 48 C 72 32, 108 32, 108 64 L 108 80 L 126 80"
                            stroke="#14234b"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            style={{ display: 'none' }}
                          />
                          <path
                            d="M 36 46 C 36 62, 58 64, 64 56 C 72 46, 68 36, 52 36 C 30 36, 20 62, 20 78 C 20 86, 34 88, 56 88 L 106 88"
                            stroke="#14234b"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                          {/* Arrow pointing to right pin */}
                          <path
                            d="M 98 80 L 110 88 L 98 96"
                            stroke="#14234b"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />

                          {/* Destination Singapore Pin */}
                          <path
                            d="M 140 24 C 124 24 112 36 112 50 C 112 68 140 92 140 92 C 140 92 168 68 168 50 C 168 36 156 24 140 24 Z"
                            fill="#14234b"
                          />
                          <SingaporePinFlag cx={140} cy={48} r={17} />
                        </svg>
                      </div>
                      <div className="card-title">Entering Singapore</div>
                    </a>

                    {/* Card 2: Transiting through Singapore */}
                    <a
                      className="feedback-card"
                      href="#transiting-singapore"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = "#transiting-singapore";
                      }}
                    >
                      <div className="card-image">
                        <svg width="180" height="96" viewBox="0 0 180 96" fill="none">
                          {/* Dashed circular orbit path */}
                          <ellipse
                            cx="90"
                            cy="50"
                            rx="62"
                            ry="30"
                            stroke="#14234b"
                            strokeWidth="3"
                            strokeDasharray="5 5"
                            fill="none"
                          />

                          {/* Airplane 1 (Top Left) */}
                          <g transform="translate(62, 22) rotate(35) scale(0.9)">
                            <path
                              d="M 12 0 L 16 9 L 26 12 L 16 14 L 14 22 L 10 18 L 6 22 L 8 14 L 0 12 L 8 9 Z"
                              fill="#14234b"
                            />
                          </g>

                          {/* Airplane 2 (Top Right) */}
                          <g transform="translate(122, 24) rotate(40) scale(0.9)">
                            <path
                              d="M 12 0 L 16 9 L 26 12 L 16 14 L 14 22 L 10 18 L 6 22 L 8 14 L 0 12 L 8 9 Z"
                              fill="#14234b"
                            />
                          </g>

                          {/* Central Singapore Pin */}
                          <path
                            d="M 90 42 C 77 42 67 52 67 63 C 67 77 90 95 90 95 C 90 95 113 77 113 63 C 113 52 103 42 90 42 Z"
                            fill="#14234b"
                          />
                          <SingaporePinFlag cx={90} cy={60} r={14} />
                        </svg>
                      </div>
                      <div className="card-title">Transiting through Singapore</div>
                    </a>

                    {/* Card 3: Departing from Singapore */}
                    <a
                      className="feedback-card"
                      href="#departing-singapore"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.hash = "#departing-singapore";
                      }}
                    >
                      <div className="card-image">
                        <svg width="180" height="96" viewBox="0 0 180 96" fill="none">
                          {/* Origin Singapore Pin on Left */}
                          <path
                            d="M 40 24 C 24 24 12 36 12 50 C 12 68 40 92 40 92 C 40 92 68 68 68 50 C 68 36 56 24 40 24 Z"
                            fill="#14234b"
                          />
                          <SingaporePinFlag cx={40} cy={48} r={17} />

                          {/* S-curve path leading to right with arrow */}
                          <path
                            d="M 44 88 C 64 88, 80 84, 80 72 C 80 56, 72 46, 92 46 C 108 46, 118 64, 118 78 C 118 86, 106 88, 86 88 L 138 88"
                            stroke="#14234b"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            style={{ display: 'none' }}
                          />
                          <path
                            d="M 52 88 C 72 88, 86 86, 86 74 C 86 58, 76 48, 96 48 C 112 48, 122 66, 122 80 C 122 86, 114 88, 98 88 L 140 88"
                            stroke="#14234b"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            style={{ display: 'none' }}
                          />
                          <path
                            d="M 40 76 C 40 86, 54 88, 76 88 C 98 88, 112 84, 112 70 C 112 54, 102 44, 122 44 C 138 44, 146 62, 146 76"
                            stroke="#14234b"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            style={{ display: 'none' }}
                          />
                          {/* Clean S-curve matching screenshot */}
                          <path
                            d="M 38 88 L 78 88 C 96 88, 104 84, 104 70 C 104 54, 94 44, 76 44 C 54 44, 46 66, 46 80 C 46 86, 58 88, 138 88"
                            stroke="#14234b"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />
                          {/* Arrow pointing to right pin */}
                          <path
                            d="M 130 80 L 142 88 L 130 96"
                            stroke="#14234b"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                          />

                          {/* Destination Pin with circle head on Right */}
                          <circle cx="156" cy="48" r="9" fill="#14234b" />
                          <circle cx="156" cy="48" r="4" fill="#ffffff" />
                          <rect x="153.5" y="56" width="5" height="28" fill="#14234b" />
                          <rect x="146" y="84" width="20" height="4" rx="2" fill="#14234b" />
                        </svg>
                      </div>
                      <div className="card-title">Departing from Singapore</div>
                    </a>
                  </div>
                </div>

                {/* ========================================================
                    BLOCK 1: More Information (Desktop 4 Columns)
                   ======================================================== */}
                <div className="mega-menu-content-full-width">
                  <div className="mega-menu-title">More Information</div>

                  {/* Column 1: Immigration Requirements */}
                  <div className="mega-menu-content-onefourth-width">
                    <div className="mega-menu-subtitle">Immigration Requirements</div>
                    <div className="mega-menu-item">
                      <ul>
                        <li>
                          <a href="/enter-transit-depart/entering-singapore">General Entry Requirements</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/entering-singapore/visa_requirements">Visa Requirements</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/entering-singapore/sg-arrival-card">Submit SG Arrival Card</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/entering-singapore/what-you-can-bring">What you can bring</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/entering-singapore/what-you-can-bring/remaintransfer">Transfer of Remains for Cremation / Burial to Singapore</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: Health-related Border Measures */}
                  <div className="mega-menu-content-onefourth-width">
                    <div className="mega-menu-subtitle">Health-related Border Measures</div>
                    <div className="mega-menu-item">
                      <ul>
                        <li>
                          <a href="/enter-transit-depart/entering-singapore">Public Health Requirements</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/entering-singapore/yellow-fever-vaccination-certificate">Yellow Fever Vaccination Certificate</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: At Our Checkpoints */}
                  <div className="mega-menu-content-onefourth-width">
                    <div className="mega-menu-subtitle">At Our Checkpoints</div>
                    <div className="mega-menu-item">
                      <ul>
                        <li>
                          <a href="/enter-transit-depart/at-our-checkpoints/for-travellers">Clearance Procedure for Travellers</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/at-our-checkpoints/sea_crew_info">Clearance Procedure for Sea Crew / Pleasure Craft owners</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/at-our-checkpoints/cargo_postal_info">Cargo and Postal Article Requirements</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/at-our-checkpoints/for-travellers/baggage-clearance">Baggage Clearance/Dual-Channel System</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/at-our-checkpoints/for-travellers/CBNI">Taking Cash In and Out of Singapore</a>
                        </li>
                        <li>
                          <a href="/enter-depart/checkpoints/trafficupdates">Woodlands and Tuas Checkpoints Traffic Updates</a>
                        </li>
                        <li>
                          <a href="/enter-depart/checkpoints/three-quarter_tank_rule">Three-Quarter Tank Rules for Departing Vehicles</a>
                        </li>
                        <li>
                          <a href="/enter-depart/checkpoints/driving">Driving In and Out of Singapore</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/at-our-checkpoints/use-of-qr-code-for-immigration-clearance-at-woodlands-and-tuas-checkpoints">Use of QR Code for Immigration Clearance at Woodlands and Tuas Checkpoints</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 4: e-Pass Enquiry Portal / Visit Pass Validity Tool */}
                  <div className="mega-menu-content-onefourth-width">
                    <div className="mega-menu-subtitle">e-Pass Enquiry Portal / Visit Pass Validity Tool</div>
                    <div className="mega-menu-item">
                      <ul>
                        <li>
                          <a href="/enter-transit-depart/at-our-checkpoints/for-travellers/retrieval-of-electronic-visit-pass">Retrieve e-Pass Record</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/visit-pass-validity-tool">Check the End of Your Stay</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="clearfix"></div>
                </div>

                {/* BLOCK 1: Mobile Accordion View */}
                <div className="mobile-nav-wrapper-2">
                  <div className="mobile-nav-content">
                    <div className="mobile-nav-title">More Information</div>

                    {/* Accordion Item 1 */}
                    <div
                      className={`mobile-nav-subtitle arrow accordion ${openPanels["imm-req"] ? "active" : ""}`}
                      onClick={() => togglePanel("imm-req")}
                    >
                      Immigration Requirements
                    </div>
                    {openPanels["imm-req"] && (
                      <div className="panel">
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="/enter-transit-depart/entering-singapore">General Entry Requirements</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/entering-singapore/visa_requirements">Visa Requirements</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/entering-singapore/sg-arrival-card">Submit SG Arrival Card</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/entering-singapore/what-you-can-bring">What you can bring</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/entering-singapore/what-you-can-bring/remaintransfer">Transfer of Remains for Cremation / Burial to Singapore</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Accordion Item 2 */}
                    <div
                      className={`mobile-nav-subtitle arrow accordion ${openPanels["health-req"] ? "active" : ""}`}
                      onClick={() => togglePanel("health-req")}
                    >
                      Health-related Border Measures
                    </div>
                    {openPanels["health-req"] && (
                      <div className="panel">
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="/enter-transit-depart/entering-singapore">Public Health Requirements</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/entering-singapore/yellow-fever-vaccination-certificate">Yellow Fever Vaccination Certificate</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Accordion Item 3 */}
                    <div
                      className={`mobile-nav-subtitle arrow accordion ${openPanels["checkpoints-info"] ? "active" : ""}`}
                      onClick={() => togglePanel("checkpoints-info")}
                    >
                      At Our Checkpoints
                    </div>
                    {openPanels["checkpoints-info"] && (
                      <div className="panel">
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="/enter-transit-depart/at-our-checkpoints/for-travellers">Clearance Procedure for Travellers</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/at-our-checkpoints/sea_crew_info">Clearance Procedure for Sea Crew / Pleasure Craft owners</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/at-our-checkpoints/cargo_postal_info">Cargo and Postal Article Requirements</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/at-our-checkpoints/for-travellers/baggage-clearance">Baggage Clearance/Dual-Channel System</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/at-our-checkpoints/for-travellers/CBNI">Taking Cash In and Out of Singapore</a>
                            </li>
                            <li>
                              <a href="/enter-depart/checkpoints/trafficupdates">Woodlands and Tuas Checkpoints Traffic Updates</a>
                            </li>
                            <li>
                              <a href="/enter-depart/checkpoints/three-quarter_tank_rule">Three-Quarter Tank Rules for Departing Vehicles</a>
                            </li>
                            <li>
                              <a href="/enter-depart/checkpoints/driving">Driving In and Out of Singapore</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/at-our-checkpoints/use-of-qr-code-for-immigration-clearance-at-woodlands-and-tuas-checkpoints">Use of QR Code for Immigration Clearance at Woodlands and Tuas Checkpoints</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Accordion Item 4 */}
                    <div
                      className={`mobile-nav-subtitle arrow accordion ${openPanels["epass-info"] ? "active" : ""}`}
                      onClick={() => togglePanel("epass-info")}
                    >
                      e-Pass Enquiry Portal / Visit Pass Validity Tool
                    </div>
                    {openPanels["epass-info"] && (
                      <div className="panel">
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="/enter-transit-depart/at-our-checkpoints/for-travellers/retrieval-of-electronic-visit-pass">Retrieve e-Pass Record</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/visit-pass-validity-tool">Check the End of Your Stay</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* ========================================================
                    BLOCK 2: Audience Sections (Desktop Columns)
                   ======================================================== */}
                <div className="mega-menu-content-full-width">
                  <div className="mega-menu-title"></div>

                  {/* Column 1: For Singapore Citizens */}
                  <div className="mega-menu-content-onefourth-width">
                    <div className="mega-menu-subtitle">For Singapore Citizens</div>
                    <div className="mega-menu-item">
                      <ul>
                        <li>
                          <a href="/enter-depart/for-singapore-citizens/advice-for-travelling-abroad">Advice for Singapore Citizens Travelling Abroad/Returning to Singapore</a>
                        </li>
                        <li>
                          <a href="/enter-depart/for-singapore-citizens/child-born-overseas">Child Born Overseas</a>
                        </li>
                        <li>
                          <a href="/enter-depart/for-singapore-citizens/apec-business-travel-card">APEC Business Travel Card</a>
                        </li>
                        <li>
                          <a href="/enter-depart/for-singapore-citizens/overseas-automated-clearance">Apply for Overseas Automated Clearance</a>
                        </li>
                        <li>
                          <a href="/enter-depart/for-singapore-citizens/renunciation">Renunciation of Singapore Citizenship</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: For Permanent Residents */}
                  <div className="mega-menu-content-onefourth-width">
                    <div className="mega-menu-subtitle">For Permanent Residents</div>
                    <div className="mega-menu-item">
                      <ul>
                        <li>
                          <a href="/enter-depart/for-PR/check-REP-validity">Check Re-Entry Permit Validity</a>
                        </li>
                        <li>
                          <a href="/enter-transit-depart/more-information/for-permanent-residents/renunciation-of-permanent-residence">Renunciation of Permanent Residence</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: For Visitors */}
                  <div className="mega-menu-content-onefourth-width">
                    <div className="mega-menu-subtitle">For Visitors</div>
                    <div className="mega-menu-item">
                      <ul>
                        <li>
                          <a href="/enter-transit-depart/entering-singapore/visa_requirements">Check if You Need an Entry Visa</a>
                        </li>
                        <li>
                          <a href="/enter-depart/extend_short_stay">Seek Extension of Visit Pass</a>
                        </li>
                        <li>
                          <a href="/reside/PR/transfer-REP/foreign-passport/report-loss">Report Loss of Foreign Passport</a>
                        </li>
                        <li>
                          <a href="/reside/LTVP/apply/visitor-seeking-permission-to-give-birth-in-singapore">Delivering a Child in Singapore</a>
                        </li>
                        <li>
                          <a href="/enter-depart/for-visitors/tourist-refund-scheme">Tourist Refund Scheme</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="clearfix"></div>
                </div>

                {/* BLOCK 2: Mobile Accordion View */}
                <div className="mobile-nav-wrapper-2">
                  <div className="mobile-nav-content">
                    <div className="mobile-nav-title"></div>

                    {/* Accordion Item 1 */}
                    <div
                      className={`mobile-nav-subtitle arrow accordion ${openPanels["for-sc"] ? "active" : ""}`}
                      onClick={() => togglePanel("for-sc")}
                    >
                      For Singapore Citizens
                    </div>
                    {openPanels["for-sc"] && (
                      <div className="panel">
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="/enter-depart/for-singapore-citizens/advice-for-travelling-abroad">Advice for Singapore Citizens Travelling Abroad/Returning to Singapore</a>
                            </li>
                            <li>
                              <a href="/enter-depart/for-singapore-citizens/child-born-overseas">Child Born Overseas</a>
                            </li>
                            <li>
                              <a href="/enter-depart/for-singapore-citizens/apec-business-travel-card">APEC Business Travel Card</a>
                            </li>
                            <li>
                              <a href="/enter-depart/for-singapore-citizens/overseas-automated-clearance">Apply for Overseas Automated Clearance</a>
                            </li>
                            <li>
                              <a href="/enter-depart/for-singapore-citizens/renunciation">Renunciation of Singapore Citizenship</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Accordion Item 2 */}
                    <div
                      className={`mobile-nav-subtitle arrow accordion ${openPanels["for-pr"] ? "active" : ""}`}
                      onClick={() => togglePanel("for-pr")}
                    >
                      For Permanent Residents
                    </div>
                    {openPanels["for-pr"] && (
                      <div className="panel">
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="/enter-depart/for-PR/check-REP-validity">Check Re-Entry Permit Validity</a>
                            </li>
                            <li>
                              <a href="/enter-transit-depart/more-information/for-permanent-residents/renunciation-of-permanent-residence">Renunciation of Permanent Residence</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {/* Accordion Item 3 */}
                    <div
                      className={`mobile-nav-subtitle arrow accordion ${openPanels["for-visitors"] ? "active" : ""}`}
                      onClick={() => togglePanel("for-visitors")}
                    >
                      For Visitors
                    </div>
                    {openPanels["for-visitors"] && (
                      <div className="panel">
                        <div className="seemore-menu-item">
                          <ul>
                            <li>
                              <a href="/enter-transit-depart/entering-singapore/visa_requirements">Check if You Need an Entry Visa</a>
                            </li>
                            <li>
                              <a href="/enter-depart/extend_short_stay">Seek Extension of Visit Pass</a>
                            </li>
                            <li>
                              <a href="/reside/PR/transfer-REP/foreign-passport/report-loss">Report Loss of Foreign Passport</a>
                            </li>
                            <li>
                              <a href="/reside/LTVP/apply/visitor-seeking-permission-to-give-birth-in-singapore">Delivering a Child in Singapore</a>
                            </li>
                            <li>
                              <a href="/enter-depart/for-visitors/tourist-refund-scheme">Tourist Refund Scheme</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top */}
      <ScrollToTop />

      {/* Site Footer */}
      <SiteFooter
        onNavigate={(view) => {
          if (onNavigate) {
            onNavigate(view);
            return;
          }
          if (view === "feedback" && onNavigateToFeedback) return onNavigateToFeedback();
          if (view === "contactus" && onNavigateToContact) return onNavigateToContact();
          if (view === "checkstatus" && onNavigateToStatus) return onNavigateToStatus();
          if (view === "askgov" && onNavigateToFaqs) return onNavigateToFaqs();
          if (view === "reach" && onNavigateToReach) return onNavigateToReach();
          if (view === "documents" && onNavigateToDocuments) return onNavigateToDocuments();
          if (onNavigateToCheckpoints) return onNavigateToCheckpoints();
          window.location.hash = "#" + view;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
