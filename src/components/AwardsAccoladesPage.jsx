import React from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import "./AwardsAccoladesPage.css";

const awardsData = [
  {
    imgSrc: "https://www.ica.gov.sg/images/default-source/ica-images/awards/images_page_about-us_awards_1.png?sfvrsn=1d2df853_4",
    imgAlt: "2015 Singapore Quality Award with Special Commendation for Outstanding Achievement in Business Excellence",
    title: "Singapore Quality Award with Special Commendation",
    subtitle: "(SQA SC)",
    awardedBy: "Awarded by SPRING Singapore",
    year: "2015",
    description:
      "Launched in 2006, the Singapore Quality Award with Special Commendation recognises past Singapore Quality Award winners that have sustained their business excellence journey and attained greater heights of excellence.",
  },
  {
    imgSrc: "https://www.ica.gov.sg/images/default-source/ica-images/awards/images_page_about-us_awards_2.png?sfvrsn=50624970_4",
    imgAlt: "Singapore Innovation Class Award",
    title: "Singapore Innovation Class",
    subtitle: "(I-Class)",
    awardedBy: "Awarded by SPRING Singapore",
    year: "2005, 2008, 2011, 2015",
    description:
      "Launched in 2002, the Singapore Innovation Class (I-Class) is the certification for the business excellence niche standard for innovation. The niche standard enables organisations to develop their innovation management capabilities. I-Class is a national recognition for organisations that have management systems and processes in place to achieve excellence through innovation.",
  },
  {
    imgSrc: "https://www.ica.gov.sg/images/default-source/ica-images/awards/images_page_about-us_awards_3.png?sfvrsn=2329bdf4_4",
    imgAlt: "People Developer Singapore Award",
    title: "People Developer Standard",
    subtitle: "",
    awardedBy: "Awarded by SPRING Singapore",
    year: "2005, 2008, 2011, 2015",
    description:
      "Launched in 1998, the People Developer (PD) is the certification for the business excellence niche standard for people. The niche standard provides organisations with a total approach to managing people and achieving high performance through its people systems.",
  },
  {
    imgSrc: "https://www.ica.gov.sg/images/default-source/ica-images/awards/images_page_about-us_awards_4.png?sfvrsn=505db7c5_4",
    imgAlt: "Singapore Service Class Award",
    title: "Singapore Service Class",
    subtitle: "",
    awardedBy: "Awarded by SPRING Singapore",
    year: "2005, 2008, 2011, 2015",
    description:
      "Launched in 2003, the Singapore Service Class (S-Class) is the certification for the business excellence niche standard for service. The niche standard enables organisations to develop their service capabilities to enhance service leadership, service agility, customer delight, and customer experience.",
  },
  {
    imgSrc: "https://www.ica.gov.sg/images/default-source/ica-images/awards/images_page_about-us_awards_6.png?sfvrsn=eeb4b08f_4",
    imgAlt: "Singapore Government Web Excellence Awards",
    title: "Government Web Excellence Awards (Merit)",
    subtitle: "",
    awardedBy: "Awarded by Ministry of Finance and Infocomm Development Authority",
    year: "2009",
    description:
      "The Government Web Excellence Awards (WEA) was conceptualised in October 2008 at the iGov Council. It confers recognition to good government websites and the adoption of web standards and best practices. One key objective of WEA is to encourage government agencies to improve their websites and view this as a continuous process, driven by a focus on the customers and aligned to web standards that have been identified across government agencies.",
  },
  {
    imgSrc: "https://www.ica.gov.sg/images/default-source/ica-images/awards/images_page_about-us_awards_55cee50a6608a4975baf07c0b1c24ef38.jpg?sfvrsn=406419eb_2",
    imgAlt: "Global Performance Excellence Award",
    title: "Global Performance Excellence Award (GPEA) - Not For Profit Organisation Category - World Class Award",
    subtitle: "",
    awardedBy: "Awarded by Asia Pacific Quality Organisation",
    year: "2016",
    description:
      "The Global Performance Excellence Award (GPEA), organised by the Asia Pacific Quality Organization (APQO), is conferred to organisations from the Asian and Pacific Rim countries who are recognised as exemplary companies of world class quality performance. ICA was among the 15 international organisations who were awarded the highest accolade, the World Class Award, under the Not-For-Profit Organisation category.",
  },
];

export default function AwardsAccoladesPage({
  onNavigateToCheckpoints,
  onNavigateToStatus,
  onNavigateToContact,
  onNavigateHome,
  onNavigateToFeedback,
  onNavigateToFaqs,
  onNavigateToReach,
  onNavigateToDocuments,
  onNavigateToEnterTransitDepart,
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
  return (
    <div className="site-wrapper awards-accolades-page-wrapper">
      {/* Singapore Government Masthead */}
      <GovMasthead />

      {/* Official Header */}
      <SiteHeader
        searchQuery=""
        setSearchQuery={() => {}}
        totalMatches={0}
        isSearching={false}
        activeView="awards-accolades"
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
          if (view === "enter-transit-depart" && onNavigateToEnterTransitDepart) return onNavigateToEnterTransitDepart();
          if (view === "reside" && onNavigateToReside) return onNavigateToReside();
          if (view === "eservicesandforms" && onNavigateToEServicesForms) return onNavigateToEServicesForms();
          if (view === "vision-mission-values" && onNavigateToVisionMissionValues) return onNavigateToVisionMissionValues();
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
              activeView="awards-accolades"
              onNavigate={(view) => {
                if (view === "checkpoints" && onNavigateToCheckpoints) onNavigateToCheckpoints();
                if (view === "checkstatus" && onNavigateToStatus) onNavigateToStatus();
                if (view === "contactus" && onNavigateToContact) onNavigateToContact();
              }}
            />

            {/* Horizontal e-Services list */}
            <EServicesBar
              activeView="awards-accolades"
              onSelectService={(serviceId) => {
                if (serviceId === "checkstatus") {
                  if (onNavigateToStatus) onNavigateToStatus();
                } else if (serviceId === "identity" || serviceId === "documents") {
                  if (onNavigateToDocuments) onNavigateToDocuments();
                } else if (serviceId === "enter-transit-depart") {
                  if (onNavigateToEnterTransitDepart) onNavigateToEnterTransitDepart();
                } else if (serviceId === "reside") {
                  if (onNavigateToReside) onNavigateToReside();
                } else if (serviceId === "eservicesandforms") {
                  if (onNavigateToEServicesForms) onNavigateToEServicesForms();
                } else {
                  if (onNavigateToCheckpoints) onNavigateToCheckpoints();
                }
              }}
            />

            {/* Main Content Container */}
            <div className="container awards-container">
              <div className="awards-header">
                <h1 className="awards-main-title">Awards &amp; Accolades</h1>
                <hr className="awards-title-divider" />
              </div>

              <div className="awards-grid">
                {awardsData.map((award, idx) => (
                  <div className="deck-group" key={idx}>
                    <div className="deck-img-wrapper">
                      <img
                        className="deck-img"
                        src={award.imgSrc}
                        alt={award.imgAlt}
                        loading="lazy"
                      />
                    </div>
                    <div className="deck-divider" aria-hidden="true" />
                    <div className="deck-body">
                      <h3 className="deck-title">{award.title}</h3>
                      {award.subtitle && (
                        <div className="deck-acronym">{award.subtitle}</div>
                      )}
                      <div className="deck-awarded-by">{award.awardedBy}</div>
                      <div className="deck-year">{award.year}</div>
                      <div className="deck-content">
                        <p>{award.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to top button */}
      <ScrollToTop />

      {/* Official Footer */}
      <SiteFooter
        onNavigate={(view) => {
          if (onNavigate) {
            onNavigate(view);
            return;
          }
          if (view === "feedback" && onNavigateToFeedback) return onNavigateToFeedback();
          if (view === "contactus" && onNavigateToContact) return onNavigateToContact();
          if (view === "checkpoints" && onNavigateToCheckpoints) return onNavigateToCheckpoints();
          if (view === "checkstatus" && onNavigateToStatus) return onNavigateToStatus();
          if (view === "askgov" && onNavigateToFaqs) return onNavigateToFaqs();
          if (view === "reach" && onNavigateToReach) return onNavigateToReach();
          window.location.hash = "#" + view;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
