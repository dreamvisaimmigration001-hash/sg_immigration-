import React, { useState } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import SiteFooter from "./SiteFooter";
import "./IcaAnnualsPage.css";

// Built-in fallback cover graphic for ICA Annuals with distinctive year and theme
const AnnualCoverGraphic = ({ title, year }) => {
  const hues = [
    { bg1: "#1b365d", bg2: "#0d1b2a", accent: "#e0a922" },
    { bg1: "#1e3a8a", bg2: "#172554", accent: "#38bdf8" },
    { bg1: "#1e293b", bg2: "#0f172a", accent: "#f59e0b" },
    { bg1: "#264653", bg2: "#1d3557", accent: "#e76f51" },
  ];
  const yrNum = parseInt(year, 10) || 2025;
  const h = hues[Math.abs(yrNum) % hues.length];

  return (
    <svg
      viewBox="0 0 320 220"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-label={title}
    >
      <defs>
        <linearGradient id={`annualGrad-${year}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={h.bg1} />
          <stop offset="100%" stopColor={h.bg2} />
        </linearGradient>
      </defs>
      <rect width="320" height="220" fill={`url(#annualGrad-${year})`} />
      <rect x="0" y="0" width="320" height="5" fill={h.accent} />
      
      {/* Decorative patterns */}
      <circle cx="280" cy="30" r="45" fill="rgba(255,255,255,0.04)" />
      <circle cx="40" cy="180" r="60" fill="rgba(255,255,255,0.03)" />
      <path d="M 0 160 Q 160 120 320 180" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" />
      <path d="M 0 175 Q 160 135 320 195" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5" fill="none" />

      {/* ICA Crest badge */}
      <g transform="translate(24, 20)">
        <rect width="44" height="22" rx="3" fill="rgba(255,255,255,0.18)" />
        <text x="22" y="15" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle" letterSpacing="1">
          ICA
        </text>
      </g>

      {/* Annual Report label */}
      <text
        x="24"
        y="75"
        fill="rgba(255,255,255,0.85)"
        fontSize="11"
        fontWeight="600"
        letterSpacing="1.5"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      >
        ANNUAL REPORT
      </text>

      {/* Big Year display */}
      <text
        x="24"
        y="140"
        fill={h.accent}
        fontSize="44"
        fontWeight="800"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        letterSpacing="-1px"
      >
        {year}
      </text>

      {/* Subtitle */}
      <text
        x="24"
        y="170"
        fill="#ffffff"
        fontSize="12"
        fontWeight="600"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      >
        {title.length > 28 ? title.slice(0, 26) + "..." : title}
      </text>
    </svg>
  );
};

// All 22 ICA Annual reports extracted from official ICA HTML
const annualsData = [
  {
    year: "2025",
    title: "ICA Annual 2025",
    themeHeadline: "Securing Our Borders Safeguarding Our Home",
    body: "2025 marked a defining year in ICA’s transformation journey, as we advanced smarter checkpoint operations, reimagined service delivery, and strengthened the capabilities of our workforce.\n\nICA continues to innovate to safeguard Singapore’s borders and meet future challenges.",
    img: "https://www.ica.gov.sg/images/default-source/default-album/coverv2.png?sfvrsn=cd8e5220_1",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica-annual-report-2025.pdf?sfvrsn=dbaf766_3",
  },
  {
    year: "2024",
    title: "ICA Annual 2024",
    themeHeadline: "Securing Our Borders Safeguarding Our Home",
    body: "The past year has been pivotal for ICA, as we achieved significant milestones in our transformation journey. We have redefined our border clearance and enhanced our services through an integrated services centre.\n\nDiscover how ICA developed new capabilities to meet evolving challenges and forge a safer, more secure Singapore.",
    img: "https://www.ica.gov.sg/images/default-source/default-album/cover.jpg?sfvrsn=ab800a0c_3",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica-annual-report-2024.pdf?sfvrsn=d2c70cd6_1",
  },
  {
    year: "2023",
    title: "ICA Annual 2023",
    themeHeadline: "Securing Our Borders Safeguarding Our Home",
    body: "In the past year, ICA has made significant progress with our transformation plans. We have translated the New Clearance Concept and the Services Centre Next-Generation to operational capabilities at the checkpoints and services centre respectively.\n\nWe provide an update of these plans in this year’s Annual. Discover how ICA developed various capabilities to meet our mission, keeping Singapore safe and connected to the world.",
    img: "https://www.ica.gov.sg/images/default-source/default-album/image-for-teaser-200kb2bdf0c1e-8891-486d-bc5f-b98bfe6b947e.jpeg?sfvrsn=300450a6_3",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica-annual-2023.pdf?sfvrsn=6d374e88_2",
  },
  {
    year: "2022",
    title: "ICA Annual 2022 and Commemorative Book",
    themeHeadline: "ICA20 – Remembering Our Past, Securing Our Future",
    body: "The ICA Annual 2022 and 20th Anniversary Commemorative Book showcases ICA’s milestones as we remember our past 20 years, and how we are securing our future with the initiatives we have implemented and will be implementing in the future. Find out also how ICA managed the sudden surge in volume for checkpoint and passport operations when borders reopened fully in 2022.",
    img: "https://www.ica.gov.sg/images/default-source/default-album/ica-annual-2022-cover.jpg?sfvrsn=173edbc4_2",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica-annual-2022-and-commemorative-book.pdf?sfvrsn=7799124e_4",
  },
  {
    year: "2021",
    title: "ICA Annual 2021",
    themeHeadline: "Securing Our Borders, Safeguarding Our Home",
    body: "The ICA Annual 2021 showcases ICA's resilience amidst the challenges posed by the prolonged pandemic, even as we redouble our transformation efforts for our checkpoint and services centre operations, to transit towards COVID Resilience.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/ica_annual_2021.png?sfvrsn=71d00896_6",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2021.pdf?sfvrsn=e7636a5c_4",
  },
  {
    year: "2020",
    title: "ICA Annual 2020",
    themeHeadline: "Securing Our Borders, Safeguarding Our Home",
    body: "The global COVID-19 pandemic hit hard in 2020, making it a very memorable year where people had to adapt to a new normal. ICA was placed at the forefront to fight the pandemic through implementation of enhanced border control measures and by carrying out new roles inland. The Annual showcases stories of the various ways ICA officers played their part during the pandemic and how the pandemic had changed the ways they performed their roles. In the fight against COVID-19, ICA has developed new systems and improved existing ones to support the changing border control operations, such as enhancement of the electronic Arrival Card to allow travellers to submit health declaration online before entering Singapore, and automated clearance for travellers using iris patterns and facial scans.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/ica-annual-2020-cover.png?sfvrsn=5043ac2f_6",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2020.pdf?sfvrsn=b6adeaab_10",
  },
  {
    year: "2019",
    title: "ICA Annual 2019",
    themeHeadline: "Securing Our Borders, Safeguarding Our Home",
    body: "ICA Annual 2019 showcases how ICA continues to reskill and upskill our people to take on tomorrow’s challenges, while forging ahead with enhancing our operational excellence through innovating our system capabilities and concept of operations at our checkpoints and services centres. The Annual highlights new initiatives such as the SG Arrival Card which replaces the physical disembarkation/embarkation card, and the contactless immigration clearance trials for Singapore citizens at selected checkpoints.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annual-2019-cover-page.jpg?sfvrsn=1d9d6f85_6",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2019.pdf?sfvrsn=7fde488e_8",
  },
  {
    year: "2018",
    title: "ICA Annual 2018",
    themeHeadline: "Enhancing Operations Excellence and Capabilities",
    body: "2018 marked the 15th year since the formation of ICA in April 2003. Enhancing Operations Excellence and Capabilities calls on ICA to continue enhancing operational excellence at our checkpoints and services centres today, while innovating our concept of operations and systems to develop capabilities for future challenges. The Annual includes transformation initiatives such as the BioScreen Multi-Modal Biometrics System which leverages fingerprint, facial and iris biometrics, and MyICA, a personalised portal to access ICA’s e-Services, among other highlights.",
    img: "https://www.ica.gov.sg/images/default-source/default-album/ica-annual-2018-cover.png?sfvrsn=bd65e84a_2",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2018.pdf?sfvrsn=dde40b4a_6",
  },
  {
    year: "2017",
    title: "ICA Annual 2017",
    themeHeadline: "Prepare for Today, Ready for Tomorrow",
    body: "2017 was a year where significant progress had been made in our second wave of transformation. Some of the important milestones documented in this Annual include a new clearance concept that was introduced together with the opening of Changi Airport Terminal 4, the rolling out of an Integrated Portal and the implementation of the Home Affairs Services (HAS) (ICA) 2017 Scheme for all ICA officers.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_2017.jpg?sfvrsn=75881550_4",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2017.pdf?sfvrsn=7a08a580_2",
  },
  {
    year: "2016",
    title: "ICA Annual 2016",
    themeHeadline: "Future-Ready ICA: Transforming the Present, Securing Our Future",
    body: "Faced with an increasingly complex and unpredictable operating landscape, the Immigration & Checkpoints Authority (ICA) implemented several key initiatives and projects in 2016 aimed at boosting its ability to triumph over major challenges. This Annual talks about ICA's transformation, the launch of BioScreen - a biometric system that enrols and authenticates travellers' thumbprints at checkpoints, and the new Protective, Analytical and Assessment Facility (PAAF) at Ports Command, among other highlights.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_2016.jpg?sfvrsn=b23389db_2",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2016.pdf?sfvrsn=b23389db_2",
  },
  {
    year: "2015",
    title: "ICA Annual 2015",
    themeHeadline: "Transforming ICA: Be Part of the Journey",
    body: "2015 was a year to remember as ICA marked a milestone change in its border security operating model, with the implementation of the Integrated Checkpoints Command (ICC). It was also a year of celebrations, as ICA won the prestigious Singapore Quality Award with Special Commendation and held several events during Singapore's Golden Jubilee to honour the commitments and sacrifices of pioneering officers over the years.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_ar_2015-final-web.jpg?sfvrsn=bd85cbd1_4",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2015.pdf?sfvrsn=ea265da5_6",
  },
  {
    year: "2014",
    title: "ICA Annual 2014",
    themeHeadline: "Emerging Stronger, Shining Brighter",
    body: "This Annual features the stories of ICA officers who have overcome difficulties to perform their duties with professionalism and commitment. It also presents stories from our ICA ambassadors, who selflessly dedicate their time to help spread our messages about border security and identification within the community. Together, these stories encourage dedication and inspire confidence. They also motivate our fellow ICA officers and ambassadors to overcome challenges and reach for greater heights, individually and as a team.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_2014.jpg?sfvrsn=25e7b40c_4",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2014.pdf?sfvrsn=8f96862b_4",
  },
  {
    year: "2013",
    title: "ICA Annual 2013",
    themeHeadline: "Blazing New Frontiers, Excelling as One",
    body: "In 2013, we introduced the ICA Service Medals to recognise ICA officers for their critical role as Singapore's first line of defence against security and terrorism threats. This Annual showcases the inaugural ICA Service Medals, and details the launch of iCollect - an award-winning system and the world's first self-service document collection machine.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_report_2013_v3.jpg?sfvrsn=63a5fe8e_4",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2013.pdf?sfvrsn=db3073fa_8",
  },
  {
    year: "2012",
    title: "ICA Annual 2012",
    themeHeadline: "Coming of Age, Scaling New Heights",
    body: "ICA celebrated its 10th anniversary in 2012. This Annual documents our developments and progress since the former Singapore Immigration & Registration (SIR) and the former Customs & Excise Department (CED) checkpoint operations merged on 1 April 2003. The stories within capture our early steps, our past achievements and successes, and how we have developed into a world leader in border security and identification.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_2012.jpg?sfvrsn=6ff2b0aa_4",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2012.pdf?sfvrsn=c7bb298e_2",
  },
  {
    year: "2011",
    title: "ICA Annual 2011",
    themeHeadline: "Be Guided, Be Better",
    body: "This Annual celebrates ICA's collective achievement for the year 2011. It was a year that we embarked on a journey to co-create a better ICA for the future. Relocating the KTMB Station at Tanjong Pagar to Woodlands Train Checkpoint was a key achievement of the year, hailing a new era of cooperation between ICA and our Malaysian counterparts at the Woodlands Train Checkpoint.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_2011.jpg?sfvrsn=407ac44d_4",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2011.pdf?sfvrsn=560f35fc_2",
  },
  {
    year: "2010",
    title: "ICA Annual 2010",
    themeHeadline: "Pledge to Our Nation",
    body: "We introduced the ICA pledge on 20 April 2010 to encapsulate our mission and core values, reminding officers of the roles and functions they have to fulfill. The pledge also serves as a promise that will not change; the public can continue to be assured of the continuity in our services and standards, thus achieving our vision of 'Inspiring Confidence in All'.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_2010.jpg?sfvrsn=8ad65833_4",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2010.pdf?sfvrsn=8c58b4fa_2",
  },
  {
    year: "2009",
    title: "ICA Annual 2009",
    themeHeadline: "Excellence Beyond Borders",
    body: "Receiving the Singapore Quality Award was a momentous milestone in ICA's relatively short history since its formation in 2003. The award recognises and rewards the unwavering commitment, passion and hard work of all ICA officers. This achievement also marked the start of a new chapter in ICA's continuing journey towards organisational excellence.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_2009.jpg?sfvrsn=1a9b7bc0_4",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2009.pdf?sfvrsn=ed87c1c3_2",
  },
  {
    year: "2008",
    title: "ICA Annual 2008",
    themeHeadline: "Forging Ahead",
    body: "The theme of this Annual echoes the ICA spirit of striving to stay ahead despite challenges and because of opportunities. In 2008, ICA continued to implement and invest in technology, launching the online e-Appointment system and opening the Protective and Analytical Facility - a fast decontamination and onsite analytical facility at the Tuas Checkpoint.",
    img: "https://www.ica.gov.sg/images/default-source/default-album/ica-annual-2008-cover.png?sfvrsn=a86951d4_2",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2008.pdf?sfvrsn=a86951d4_2",
  },
  {
    year: "2007",
    title: "ICA Annual 2007",
    themeHeadline: "ICA: One",
    body: "In 2007, ICA celebrated five years of organisational growth. This Annual emphasises the solidarity of ICA as one united entity, only four years after the merger of the former SIR and CED checkpoint operations.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_2007.jpg?sfvrsn=f768188_2",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2007.pdf?sfvrsn=f768188_2",
  },
  {
    year: "2006",
    title: "ICA Annual 2006",
    themeHeadline: "The Forefront of Our Mission",
    body: "Our borders are our first line of defence in safeguarding Singapore's security. Ensuring security at the checkpoints is ICA's top priority in guarding against potential threats. This Annual focuses on how we at ICA adopt a security-focused, service-conscious mindset in delivering our services, working to keep our borders safe and our attitude confident.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_2006.jpg?sfvrsn=832c32db_4",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2006.pdf?sfvrsn=485c49d1_2",
  },
  {
    year: "2005",
    title: "ICA Annual 2005",
    themeHeadline: "Insight ICA",
    body: "This Annual gives our readers a deeper insight into the workings of ICA. It focuses on the new initiatives we launched in 2005, exciting cases our officers detected and accolades we received throughout the year.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_2005.jpg?sfvrsn=c868282_4",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2005.pdf?sfvrsn=3087a92b_2",
  },
  {
    year: "2004",
    title: "ICA Annual 2004",
    themeHeadline: "With You All the Way",
    body: "ICA's role in keeping Singapore safe and secure is intertwined with the different stages of life for Singapore's citizens, as well as for foreigners working and residing in Singapore. This Annual reports on the milestones we achieved during the year. It also introduces ICA's first Commissioner, Mr Lock Wai Han, and his successor, Mr Eric Tan.",
    img: "https://www.ica.gov.sg/images/default-source/ica-images/ica-annuals/annuals_ica_annual_2004.jpg?sfvrsn=cd9e93c3_4",
    pdfUrl: "https://www.ica.gov.sg/docs/default-source/ica/ica-annuals/ica_annual_2004.pdf?sfvrsn=a508cb11_2",
  },
];

// Individual Annual Card component matching official ICA HTML structure
function AnnualCard({ report }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="news-card">
      <div
        className="news-card-image"
        style={{ cursor: "pointer" }}
        onClick={() => window.open(report.pdfUrl, "_blank", "noopener,noreferrer")}
      >
        {!imgFailed ? (
          <img
            className="news-thumb"
            src={report.img}
            alt={report.title}
            loading="lazy"
            onError={() => setImgFailed(true)}
          />
        ) : (
          <AnnualCoverGraphic title={report.title} year={report.year} />
        )}
      </div>
      <a
        href={report.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`Download ${report.title} PDF`}
      >
        <div className="news-card-content">
          <div className="news-card-title">{report.title}</div>
          <div className="news-card-body">
            <h4>{report.themeHeadline}</h4>
            <p>{report.body}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function IcaAnnualsPage({
  onNavigateToCheckpoints,
  onNavigateToNewsroom,
  onNavigateToStatistics,
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
  onNavigate,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleBack = (e) => {
    e.preventDefault();
    if (onNavigateToCheckpoints) {
      onNavigateToCheckpoints();
    } else if (onNavigate) {
      onNavigate("checkpoints");
    } else {
      window.location.hash = "#checkpoints";
    }
  };

  const filteredAnnuals = annualsData.filter((item) => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.year.includes(q) ||
      item.themeHeadline.toLowerCase().includes(q) ||
      item.body.toLowerCase().includes(q)
    );
  });

  return (
    <div className="ica-annuals-page-wrapper">
      <GovMasthead />
      <SiteHeader
        activeView="ica-annuals"
        onNavigate={onNavigate || onNavigateToCheckpoints}
      />
      <Breadcrumbs
        activeView="ica-annuals"
        onNavigate={onNavigate || onNavigateToCheckpoints}
      />
      <EServicesBar
        activeView="ica-annuals"
        onSelectService={(serviceId) => {
          if (serviceId === "identity" && onNavigateToDocuments) onNavigateToDocuments();
          else if (serviceId === "enter-transit-depart" && onNavigateToEnterTransitDepart) onNavigateToEnterTransitDepart();
          else if (serviceId === "reside" && onNavigateToReside) onNavigateToReside();
          else if (serviceId === "eservicesandforms" && onNavigateToEServicesForms) onNavigateToEServicesForms();
          else if (serviceId === "checkstatus") {
            if (onNavigate) onNavigate("checkstatus");
            else window.location.hash = "#status";
          }
        }}
      />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content">
            <div className="container container--no-padding">
              <h1 className="my-bread-crumbs-title">ICA | ICA Annuals</h1>

              <a id="scroll-top-btn" href="#">
                <span className="sr-only">Back to top</span>
              </a>

              <div id="Main_TAD93AF83001_Col01" className="sf_colsIn" data-placeholder-label="Listing Content" data-sf-element="Listing Content">
                <div className="listing-content">
                  <div className="back-button">
                    <button type="button" onClick={handleBack}>
                      Back
                    </button>
                  </div>

                  <h4>Browse through the ICA Annuals to get to know us better!</h4>
                  <p></p>

                  {/* Optional Year Filter / Search Bar */}
                  <div className="annuals-search-bar-row">
                    <input
                      type="text"
                      className="annuals-search-input"
                      placeholder="Search annual reports by year or keyword..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      aria-label="Search annual reports"
                    />
                    {searchTerm && (
                      <button
                        type="button"
                        className="annuals-clear-search-btn"
                        onClick={() => setSearchTerm("")}
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  <div className="annuals">
                    <div className="news-cards">
                      {filteredAnnuals.map((report) => (
                        <AnnualCard
                          key={report.year}
                          report={report}
                          onSelect={(rep) => {
                            // Can either open directly or modal
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {filteredAnnuals.length === 0 && (
                    <div className="No-records-found" style={{ textAlign: "center", padding: "2rem", color: "#686868" }}>
                      No annual reports found matching "{searchTerm}".
                      <br />
                      <button
                        type="button"
                        onClick={() => setSearchTerm("")}
                        style={{
                          marginTop: "1rem",
                          padding: "6px 16px",
                          backgroundColor: "#1c76d5",
                          color: "#fff",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                      >
                        View All Annuals
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div id="Main_TAD93AF83001_Col02" className="sf_colsIn" data-placeholder-label="Related Link Content" data-sf-element="Related Link Content"></div>
            </div>
          </div>
        </div>

        <ScrollToTop />
      </div>

      {/* Report Quick Preview Modal */}
      {selectedReport && (
        <div className="annual-modal-backdrop" onClick={() => setSelectedReport(null)}>
          <div className="annual-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="annual-modal-header">
              <span className="annual-modal-badge">ICA ANNUAL REPORT</span>
              <button
                type="button"
                className="annual-modal-close"
                onClick={() => setSelectedReport(null)}
                aria-label="Close"
              >
                &times;
              </button>
            </div>
            <div className="annual-modal-body">
              <h2 className="annual-modal-title">{selectedReport.title}</h2>
              <h4 className="annual-modal-subtitle">{selectedReport.themeHeadline}</h4>
              <p className="annual-modal-desc">{selectedReport.body}</p>
              <div className="annual-modal-actions">
                <a
                  href={selectedReport.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="annual-modal-download-btn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px" }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Open Official PDF Report
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter onNavigate={onNavigate || onNavigateToCheckpoints} />
    </div>
  );
}
