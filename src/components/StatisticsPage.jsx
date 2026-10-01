import React, { useState, useRef } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import SiteFooter from "./SiteFooter";
import "./StatisticsPage.css";

// Fallback cover graphic for reports - Square 1:1 format
const ReportCoverGraphic = ({ title, year, theme = "navy" }) => {
  const isRed = theme === "red";
  return (
    <svg
      viewBox="0 0 300 300"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block", width: "100%", height: "100%", aspectRatio: "1 / 1" }}
    >
      <defs>
        <linearGradient id={`bgGrad-${year}-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isRed ? "#a81324" : "#1a365d"} />
          <stop offset="100%" stopColor={isRed ? "#6b0814" : "#0d1b2a"} />
        </linearGradient>
      </defs>
      <rect width="300" height="300" fill={`url(#bgGrad-${year}-${theme})`} />
      <rect x="0" y="0" width="300" height="6" fill="#e0a922" />
      <circle cx="260" cy="50" r="35" fill="rgba(255,255,255,0.06)" />
      <circle cx="50" cy="250" r="50" fill="rgba(255,255,255,0.04)" />
      
      {/* ICA Emblem / Badge outline */}
      <rect x="24" y="24" width="50" height="26" rx="4" fill="rgba(255,255,255,0.15)" />
      <text x="49" y="42" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle" letterSpacing="1">ICA</text>
      
      {/* Title */}
      <text x="24" y="125" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="-apple-system, sans-serif">
        {title.length > 20 ? title.slice(0, 18) + "..." : title}
      </text>
      
      {/* Year */}
      <text x="24" y="195" fill="#e0a922" fontSize="36" fontWeight="800" fontFamily="-apple-system, sans-serif">
        {year}
      </text>
      <text x="24" y="225" fill="rgba(255,255,255,0.75)" fontSize="10" letterSpacing="0.5">
        ANNUAL REPORT &amp; STATS
      </text>
    </svg>
  );
};

const ReportCard = ({ item, defaultTheme = "navy" }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      className="news-card"
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="news-card-image">
        {!imgError && item.img ? (
          <img
            className="news-thumb"
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", aspectRatio: "1 / 1" }}
            onError={() => setImgError(true)}
          />
        ) : (
          <ReportCoverGraphic
            title={item.title}
            year={item.year || "2024"}
            theme={defaultTheme}
          />
        )}
      </div>
      <div className="news-card-content">
        <div className="news-card-title">
          <div>{item.title}</div>
        </div>
      </div>
    </a>
  );
};

export default function StatisticsPage({
  onNavigateToCheckpoints,
  onNavigateToDocuments,
  onNavigateToEnterTransitDepart,
  onNavigateToReside,
  onNavigateToEServicesForms,
  onNavigateToFeedback,
  onNavigateToReach,
  onNavigateToOurPeople,
  onNavigateToVisionMissionValues,
  onNavigateToAwardsAccolades,
  onNavigateToOurServiceCommitment,
  onNavigateToNewsroom,
  onNavigateToStatistics,
}) {
  // Accordion collapse states (all 3 open by default matching official site)
  const [openSections, setOpenSections] = useState({
    sdb: true,
    rbd: true,
    annual: true,
  });

  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const toggleSection = (sectionKey) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  const gotoCollapseElement = (index) => {
    const keys = ["sdb", "rbd", "annual"];
    const key = keys[index];
    if (key && !openSections[key]) {
      setOpenSections((prev) => ({ ...prev, [key]: true }));
    }
    setTimeout(() => {
      const el = sectionRefs[index]?.current;
      if (el) {
        const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }, 50);
  };

  // Section 1: Singapore Demographic Bulletins
  const sdbData = [
    { title: "SDB 1H Jan - Jun 2026", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-1h-2026.xlsx?sfvrsn=1eee5d55_0" },
    { title: "SDB 2H Jul - Dec 2025", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-2h-2025.xlsx?sfvrsn=7317dee1_0" },
    { title: "SDB 1H Jan - Jun 2025", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-1h-2025.xlsx?sfvrsn=9469b698_0" },
    { title: "SDB Q4 Sep - Dec 2024", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-q4-oct_dec-2024.xlsx?sfvrsn=e676e744_4" },
    { title: "SDB Q3 Jul - Sep 2024", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-q3-jul---sep-2024.xlsx?sfvrsn=e311fdca_3" },
    { title: "SDB Q2 Apr - Jun 2024", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-q2-apr_jun-2024.xlsx?sfvrsn=3e0e670f_3" },
    { title: "SDB Q1 Jan - Mar 2024", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-q1-jan_mar-2024.xlsx?sfvrsn=6d229005_5" },
    { title: "SDB Q4 Oct - Dec 2023", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-q4-oct_dec-2023.xlsx?sfvrsn=e17c26a_6" },
    { title: "SDB Q3 Jul - Sep 2023", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-q3-jul_sep-2023.xlsx?sfvrsn=67780e93_4" },
    { title: "SDB Q2 Apr - Jun 2023", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-q2-apr_jun-2023.xlsx?sfvrsn=b080cc2e_4" },
    { title: "SDB Q1 Jan - Mar 2023", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-q1-jan---mar-2023.xlsx?sfvrsn=3e31a295_4" },
    { title: "SDB Q4 Oct - Dec 2022", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-q4-oct_dec-2022.xlsx?sfvrsn=8047235c_4" },
    { title: "SDB Q3 Jul - Sep 2022", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-q3-jul_sep-2022.xlsx?sfvrsn=75ae28fb_4" },
    { title: "SDB Q2 Apr - Jun 2022", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/sdb-q2-apr_jun-2022.xlsx?sfvrsn=b51851ed_4" },
    { title: "SDB Q1 Jan - Mar 2022", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/stats_sdb_q1_jan_mar-2022.xlsx?sfvrsn=6e3b32e_4" },
    { title: "SDB Q4 Oct - Dec 2021", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/stats_sdb_q4_oct_dec_2021.xlsx?sfvrsn=9e7a5aeb_4" },
    { title: "SDB Q3 Jul - Sep 2021", href: "https://www.ica.gov.sg/docs/default-source/ica/stats/quarterly-bd-statistics/stats_sdb_q3_jul_sep_2021.xlsx?sfvrsn=65664a0a_4" },
  ];

  // Section 2: Reports on Registration of Births and Deaths (RBD)
  const rbdData = [
    {
      title: "Report on RBD 2025",
      year: "2025",
      href: "https://www.ica.gov.sg/docs/default-source/ica/publications/stats_2025_annual_report.pdf?sfvrsn=2a185cd3_0",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/cover-page74f5bd013df346a381ed27a024dbfd8b.png?sfvrsn=6e06fb29_0",
    },
    {
      title: "Report on RBD 2024",
      year: "2024",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-bd-statistics/stats_2024_annual_rbd_report.pdf?sfvrsn=a8f4b7c1_3",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/cover-page.png?sfvrsn=9dfcfa08_6",
    },
    {
      title: "Report on RBD 2023",
      year: "2023",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-bd-statistics/stats_2023_annual_rbd_report.pdf?sfvrsn=a4042753_12",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/cover-page-2023.png?sfvrsn=91d362e4_6",
    },
    {
      title: "Report on RBD 2022",
      year: "2022",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-bd-statistics/revised-annual-report-2022.pdf?sfvrsn=dc7ac986_12",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/media_centre_ar2022_pic.png?sfvrsn=3d513dd3_8",
    },
    {
      title: "Report on RBD 2021",
      year: "2021",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-bd-statistics/stats_2021_annual_rbd_report.pdf?sfvrsn=f4eab446_1",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/media_centre_annual_rbd_report_2021.jpg?sfvrsn=503649b8_8",
    },
    {
      title: "Report on RBD 2020",
      year: "2020",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-bd-statistics/stats_2020_annual_rbd_report.pdf?sfvrsn=21a3e11e_4",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/media_centre_annual_rbd_report_2020.jpg?sfvrsn=df7fb6ab_8",
    },
    {
      title: "Report on RBD 2019",
      year: "2019",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-bd-statistics/stats_2019_annual_rbd_report.pdf?sfvrsn=1ae4f15c_13",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/media_centre_annual_rbd_report_2019.jpg?sfvrsn=b9b9946c_8",
    },
    {
      title: "Report on RBD 2018",
      year: "2018",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-bd-statistics/stats_2018_annual_rbd_report.pdf?sfvrsn=65de0f75_4",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/media_centre_annual_rbd_report_2018.jpg?sfvrsn=b33282d3_8",
    },
    {
      title: "Report on RBD 2017",
      year: "2017",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-bd-statistics/stats_2017_annual_rbd_report.pdf?sfvrsn=31d9ac08_1",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/media_centre_ar2017_pic.jpg?sfvrsn=61680e8_4",
    },
    {
      title: "Report on RBD 2016",
      year: "2016",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-bd-statistics/stats_2016_annual_rbd_report.pdf?sfvrsn=d2ccf5d_1",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/media_centre_ar2016_pic.jpg?sfvrsn=bb2458aa_4",
    },
    {
      title: "Report on RBD 2015",
      year: "2015",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-bd-statistics/stats_2015_annual_rbd_report.pdf?sfvrsn=c921daaa_1",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/media_centre_birth_death_2015.png?sfvrsn=ae3dcf49_4",
    },
    {
      title: "Report on RBD 2014",
      year: "2014",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-bd-statistics/stats_2014_annual_rbd_report.pdf?sfvrsn=9e5539df_2",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/media_centre_annual_rbd_report_2014.jpg?sfvrsn=cef9cfc6_4",
    },
  ];

  // Section 3: ICA Annual Statistics Report
  const annualStatsData = [
    {
      title: "ICA Annual Statistics Report 2025",
      year: "2025",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-stats-report/ica-annual-statistics-report-2025.pdf?sfvrsn=e91cac7e_0",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/ica-annual-stats-2025-infographic.jpg?sfvrsn=75cecf4a_3",
    },
    {
      title: "ICA Annual Statistics Report 2024",
      year: "2024",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-stats-report/ica-annual-statistics-report-2024.pdf?sfvrsn=431ee247_0",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/ica-annual-stats-2024.png?sfvrsn=979eeac7_2",
    },
    {
      title: "ICA Annual Statistics Report 2023",
      year: "2023",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-stats-report/ica-annual-statistics-2023.pdf?sfvrsn=4a6d74aa_6",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/ica-annual-statistics-2023.jpg?sfvrsn=201d3b66_8",
    },
    {
      title: "ICA Annual Statistics Report 2022",
      year: "2022",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-stats-report/ica-annual-statistics-2022.pdf?sfvrsn=c06efd9e_4",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/ica-statistics-2022.jpg?sfvrsn=b2dd20bc_11",
    },
    {
      title: "ICA Annual Statistics Report 2021",
      year: "2021",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-stats-report/ica-annual-statistics-2021.pdf?sfvrsn=3ce03776_6",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/ica-annual-statistics_2021.jpg?sfvrsn=14b0cfc9_6",
    },
    {
      title: "ICA Annual Statistics Report 2020",
      year: "2020",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-stats-report/ica-annual-statistics-2020.pdf?sfvrsn=d202f4d7_6",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/icaannualstats2020.jpg?sfvrsn=6fb74dfd_6",
    },
    {
      title: "ICA Annual Statistics Report 2019",
      year: "2019",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-stats-report/ica-annual-statistics-2019.pdf?sfvrsn=337746ea_2",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/icaannualstats2019.png?sfvrsn=202c781a_2",
    },
    {
      title: "ICA Annual Statistics Report 2018",
      year: "2018",
      href: "https://www.ica.gov.sg/docs/default-source/ica/stats/annual-stats-report/ica-annual-statistics-report-2018.pdf?sfvrsn=21b425c2_0",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/ica-annual-stats-2018-grafix.png?sfvrsn=9f968532_2",
    },
    {
      title: "ICA Annual Statistics Report 2017",
      year: "2017",
      href: "https://www.ica.gov.sg/news-and-publications/statistics/ica-annual-statistics-2017",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/news_releases_08feb18_stats2017.png?sfvrsn=192f5b11_6",
    },
    {
      title: "ICA Annual Statistics Report 2016",
      year: "2016",
      href: "https://www.ica.gov.sg/news-and-publications/statistics/ica-annual-statistics-2016",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/news_releases_16feb17_stats2016.png?sfvrsn=d79b169e_4",
    },
    {
      title: "ICA Annual Statistics Report 2015",
      year: "2015",
      href: "https://www.ica.gov.sg/news-and-publications/statistics/ica-annual-statistics-2015",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/news_releases_annualstatisticsjoined2015.jpg?sfvrsn=7da5bb24_4",
    },
    {
      title: "ICA Annual Statistics Report 2014",
      year: "2014",
      href: "https://www.ica.gov.sg/news-and-publications/statistics/ica-annual-statistics-2014",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/news_releases_2014_ica_annual_statistics.jpg?sfvrsn=633cf543_4",
    },
    {
      title: "ICA Annual Statistics Report 2013",
      year: "2013",
      href: "https://www.ica.gov.sg/news-and-publications/statistics/ica-annual-statistics-2013",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/news_releases_12feb14_ica_annual_stats_2013.jpg?sfvrsn=c62244d5_4",
    },
    {
      title: "ICA Annual Statistics Report 2012",
      year: "2012",
      href: "https://www.ica.gov.sg/news-and-publications/statistics/ica-annual-statistics-2012",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/news_releases_ica_annual_statistics_report_2012-(1).jpg?sfvrsn=eb43b872_4",
    },
    {
      title: "ICA Annual Statistics Report 2011",
      year: "2011",
      href: "https://www.ica.gov.sg/news-and-publications/statistics/ica-annual-statistics-2011",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/news_releases_annual_stats_2011.jpg?sfvrsn=365b18dd_4",
    },
    {
      title: "ICA Annual Statistics Report 2010",
      year: "2010",
      href: "https://www.ica.gov.sg/news-and-publications/statistics/ica-annual-statistics-2010",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/stats/news_releases_ica_annual_stats_2010.jpg?sfvrsn=65a3acb6_4",
    },
  ];

  const handleGlobalNavigate = (view) => {
    if (view === "checkpoints" && onNavigateToCheckpoints) onNavigateToCheckpoints();
    else if (view === "documents" && onNavigateToDocuments) onNavigateToDocuments();
    else if (view === "enter-transit-depart" && onNavigateToEnterTransitDepart) onNavigateToEnterTransitDepart();
    else if (view === "reside" && onNavigateToReside) onNavigateToReside();
    else if (view === "eservicesandforms" && onNavigateToEServicesForms) onNavigateToEServicesForms();
    else if (view === "feedback" && onNavigateToFeedback) onNavigateToFeedback();
    else if (view === "reach" && onNavigateToReach) onNavigateToReach();
    else if (view === "our-people" && onNavigateToOurPeople) onNavigateToOurPeople();
    else if (view === "vision-mission-values" && onNavigateToVisionMissionValues) onNavigateToVisionMissionValues();
    else if (view === "awards-accolades" && onNavigateToAwardsAccolades) onNavigateToAwardsAccolades();
    else if (view === "our-service-commitment" && onNavigateToOurServiceCommitment) onNavigateToOurServiceCommitment();
    else if (view === "newsroom" && onNavigateToNewsroom) onNavigateToNewsroom();
    else if (view === "statistics" && onNavigateToStatistics) onNavigateToStatistics();
    else {
      window.location.hash = `#${view}`;
    }
  };

  return (
    <div className="site no-touch statistics-page" id="home">
      <GovMasthead />
      <SiteHeader
        activeView="statistics"
        onNavigate={handleGlobalNavigate}
      />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content">
            <div>
              <Breadcrumbs
                activeView="statistics"
                onNavigate={handleGlobalNavigate}
              />
            </div>

            <EServicesBar onSelectService={handleGlobalNavigate} />

            <div className="statistics-container">
              <h1 className="my-bread-crumbs-title">
                <span>Statistics</span>
              </h1>

              <div style={{ paddingBottom: "1rem" }}></div>
              <hr />

              {/* Quicklinks Nav */}
              <nav className="section-nav sticky" id="quicklinks-section">
                <button
                  type="button"
                  className="quicklinks-item"
                  onClick={() => gotoCollapseElement(0)}
                >
                  Singapore Demographic Bulletins
                </button>
                <button
                  type="button"
                  className="quicklinks-item"
                  onClick={() => gotoCollapseElement(1)}
                >
                  Reports on Registration of Births and Deaths
                </button>
                <button
                  type="button"
                  className="quicklinks-item"
                  onClick={() => gotoCollapseElement(2)}
                >
                  ICA Annual Statistics Report
                </button>
              </nav>

              <div className="standard-content">
                <div className="article-notice">
                  For births registered from 29 May 2022 onwards, birth order statistics are based solely on declared information. Relevant charts/tables in the Annual Report 2022 have been revised with effect from 29 September 2023.
                </div>

                {/* Accordion 1: Singapore Demographic Bulletins */}
                <div className="collapse-wrapper" ref={sectionRefs[0]}>
                  <div
                    className={`collapse-title accordion ${openSections.sdb ? "active" : ""}`}
                    onClick={() => toggleSection("sdb")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggleSection("sdb");
                    }}
                  >
                    <span>Singapore Demographic Bulletins</span>
                    <svg className="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {openSections.sdb && (
                    <div className="collapse-content panel show">
                      <p>
                        Appended below are the Singapore Demographic Bulletins that provide the latest data on births, stillbirths and deaths. Annual data for the past three years, figures for the corresponding period in the previous year are presented for comparison in the document. With effect from 2025, the report will be released biannually.
                      </p>
                      <h4>Singapore Demographic Bulletins (SDB)</h4>
                      <div className="news-cards news-cards--stats">
                        {sdbData.map((item, idx) => (
                          <a
                            key={idx}
                            className="news-card news-card--noimg"
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <div className="news-card-content-noimg">
                              <div className="news-card-title">
                                <div>{item.title}</div>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Reports on Registration of Births and Deaths */}
                <div className="collapse-wrapper" ref={sectionRefs[1]}>
                  <div
                    className={`collapse-title accordion ${openSections.rbd ? "active" : ""}`}
                    onClick={() => toggleSection("rbd")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggleSection("rbd");
                    }}
                  >
                    <span>Reports on Registration of Births and Deaths</span>
                    <svg className="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {openSections.rbd && (
                    <div className="collapse-content panel show">
                      <p>
                        The Report on Registration of Births and Deaths provides an overview of the annual changes in the population, births, stillbirths, deaths and other vital statistics. Specimen certificates of and procedures for the registration of births, stillbirths and deaths are included in the publication.
                      </p>
                      <div className="news-cards news-cards--stats">
                        {rbdData.map((item, idx) => (
                          <ReportCard key={idx} item={item} defaultTheme="navy" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Accordion 3: ICA Annual Statistics Report */}
                <div className="collapse-wrapper" ref={sectionRefs[2]}>
                  <div
                    className={`collapse-title accordion ${openSections.annual ? "active" : ""}`}
                    onClick={() => toggleSection("annual")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") toggleSection("annual");
                    }}
                  >
                    <span>ICA Annual Statistics Report</span>
                    <svg className="accordion-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {openSections.annual && (
                    <div className="collapse-content panel show">
                      <p>
                        The Annual Statistics Report provides an overview of our clearance volumes, enforcement efforts and transformation plans to enhance operational excellence at ICA's checkpoints and services centres.
                      </p>
                      <div className="news-cards news-cards--stats">
                        {annualStatsData.map((item, idx) => (
                          <ReportCard key={idx} item={item} defaultTheme="red" />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>

        <ScrollToTop />
      </div>

      <SiteFooter onNavigate={handleGlobalNavigate} />
    </div>
  );
}
