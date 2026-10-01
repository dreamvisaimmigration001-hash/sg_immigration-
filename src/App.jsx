import React, { useState, useMemo, useRef, useEffect } from "react";
import GovMasthead from "./components/GovMasthead";
import SiteHeader from "./components/SiteHeader";
import Breadcrumbs from "./components/Breadcrumbs";
import EServicesBar from "./components/EServicesBar";
import SectionNav from "./components/SectionNav";
import CheckpointSection from "./components/CheckpointSection";
import VisaEnquiryPage from "./components/VisaEnquiryPage";
import AdminDashboardPage from "./components/AdminDashboardPage";
import ContactUsPage from "./components/ContactUsPage";
import VisionMissionValuesPage from "./components/VisionMissionValuesPage";
import OurPeoplePage from "./components/OurPeoplePage";
import AwardsAccoladesPage from "./components/AwardsAccoladesPage";
import OurServiceCommitmentPage from "./components/OurServiceCommitmentPage";
import AskGovPage from "./components/AskGovPage";
import FeedbackPage from "./components/FeedbackPage";
import ReachPage from "./components/ReachPage";
import DocumentsPage from "./components/DocumentsPage";
import EnterTransitDepartPage from "./components/EnterTransitDepartPage";
import ResidePage from "./components/ResidePage";
import EServicesFormsPage from "./components/EServicesFormsPage";
import NewsroomPage from "./components/NewsroomPage";
import PublicEducationPage from "./components/PublicEducationPage";
import PublicationsPage from "./components/PublicationsPage";
import StatisticsPage from "./components/StatisticsPage";
import JoinUsPage from "./components/JoinUsPage";
import ScholarshipsPage from "./components/ScholarshipsPage";
import MeetOurOfficersPage from "./components/MeetOurOfficersPage";
import CareerFaqsPage from "./components/CareerFaqsPage";
import HomePage from "./components/HomePage";
import AllAgenciesPage from "./components/faq/AllAgenciesPage";
import AskGovWidget from "./components/AskGovWidget";
import ScrollToTop from "./components/ScrollToTop";
import SiteFooter from "./components/SiteFooter";
import { checkpointsData } from "./data/checkpointsData";

export default function App() {
  const getInitialView = () => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (hash.includes("admin") || hash.includes("dashboard") || hash.includes("manage-visa") || hash.includes("client-record") || path.includes("admin") || path.includes("manage-visa")) return "admin-dashboard";
      if (hash.includes("career-faq") || path.includes("career-faq") || hash === "#faqs-careers") return "career-faqs";
      if (hash.includes("meet-our-officer") || hash.includes("meet-officer") || path.includes("meet-our-officer")) return "meet-our-officers";
      if (hash.includes("scholarship") || hash.includes("sponsorship") || hash.includes("internship") || path.includes("scholarship") || path.includes("internship")) return "scholarships";
      if (hash.includes("news-and-publication") || hash.includes("news-and-publications") || path.includes("news-and-publication") || hash.includes("newsroom") || path.includes("newsroom") || hash.includes("media-release") || hash === "#news") return "newsroom";
      if (hash.includes("annual") || path.includes("annual")) return "publications";
      if (hash.includes("publication") || path.includes("publication")) return "publications";
      if (hash.includes("education") || path.includes("education") || hash.includes("public-education")) return "public-education";
      if (hash.includes("statistic") || path.includes("statistic")) return "statistics";
      if (hash.includes("reach") || path.includes("reach")) return "reach";
      if (hash.includes("eservice") || hash.includes("form") || path.includes("eservices")) return "eservicesandforms";
      if (hash.includes("reside") || hash.includes("citizenship") || hash.includes("permanent-residen") || hash.includes("ltvp") || hash.includes("study") || path.includes("reside")) return "reside";
      if (hash.includes("enter") || hash.includes("transit") || hash.includes("depart") || path.includes("enter-transit-depart")) return "enter-transit-depart";
      if (hash.includes("document") || hash.includes("identity") || hash.includes("passport") || path.includes("documents")) return "documents";
      if (hash.includes("contact") || path.includes("contact-us")) return "contactus";
      if (hash.includes("join-us") || hash.includes("career") || path.includes("join-us") || hash.includes("careers")) return "join-us";
      if (hash.includes("people") || hash.includes("our-people") || path.includes("our-people")) return "our-people";
      if (hash.includes("vision") || hash.includes("mission") || hash.includes("values") || path.includes("vision-mission-values")) return "vision-mission-values";
      if (hash.includes("commitment") || hash.includes("service-commitment") || path.includes("service-commitment")) return "our-service-commitment";
      if (hash.includes("agencies") || hash.includes("all-agencies") || path.includes("agencies")) return "agencies";
      if (hash.includes("askgov") || hash.includes("faqs") || hash.includes("help") || hash.includes("faq") || path.includes("faqs")) return "askgov";
      if (hash.includes("feedback") || path.includes("feedback")) return "feedback";
      if (hash.includes("awards") || hash.includes("accolades") || path.includes("awards")) return "awards-accolades";
      if (hash.includes("who-we-are") || hash.includes("our-checkpoints") || hash === "#checkpoints" || path.includes("checkpoints")) return "checkpoints";
      if (hash.includes("status") || hash.includes("ipsave") || hash.includes("appointment") || path.includes("status")) return "checkstatus";
      if (hash === "" || hash === "#" || hash === "#home" || path === "/") return "home";
    }
    return "home";
  };

  const [activeView, setActiveView] = useState(getInitialView);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter24Hours, setFilter24Hours] = useState(false);
  const [activeSection, setActiveSection] = useState("air");

  const airSectionRef = useRef(null);
  const landSectionRef = useRef(null);
  const seaSectionRef = useRef(null);

  // Sync with URL hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes("admin") || hash.includes("dashboard") || hash.includes("manage-visa") || hash.includes("client-record")) {
        setActiveView("admin-dashboard");
      } else if (hash.includes("career-faq") || hash === "#faqs-careers") {
        setActiveView("career-faqs");
      } else if (hash.includes("meet-our-officer") || hash.includes("meet-officer")) {
        setActiveView("meet-our-officers");
      } else if (hash.includes("scholarship") || hash.includes("sponsorship") || hash.includes("internship")) {
        setActiveView("scholarships");
      } else if (hash.includes("news-and-publication") || hash.includes("news-and-publications") || hash.includes("newsroom") || hash.includes("media-release") || hash === "#news") {
        setActiveView("newsroom");
      } else if (hash.includes("annual") || hash.includes("publication")) {
        setActiveView("publications");
      } else if (hash.includes("education") || hash.includes("public-education")) {
        setActiveView("public-education");
      } else if (hash.includes("statistic")) {
        setActiveView("statistics");
      } else if (hash.includes("reach")) {
        setActiveView("reach");
      } else if (hash.includes("eservice") || hash.includes("form")) {
        setActiveView("eservicesandforms");
      } else if (hash.includes("reside") || hash.includes("citizenship") || hash.includes("permanent-residen") || hash.includes("ltvp") || hash.includes("study")) {
        setActiveView("reside");
      } else if (hash.includes("enter") || hash.includes("transit") || hash.includes("depart")) {
        setActiveView("enter-transit-depart");
      } else if (hash.includes("document") || hash.includes("identity") || hash.includes("passport")) {
        setActiveView("documents");
      } else if (hash.includes("contact")) {
        setActiveView("contactus");
      } else if (hash.includes("join-us") || hash.includes("career") || hash.includes("careers")) {
        setActiveView("join-us");
      } else if (hash.includes("people") || hash.includes("our-people")) {
        setActiveView("our-people");
      } else if (hash.includes("vision") || hash.includes("mission") || hash.includes("values")) {
        setActiveView("vision-mission-values");
      } else if (hash.includes("commitment") || hash.includes("service-commitment")) {
        setActiveView("our-service-commitment");
      } else if (hash.includes("agencies") || hash.includes("all-agencies")) {
        setActiveView("agencies");
      } else if (hash.includes("askgov") || hash.includes("faqs") || hash.includes("help") || hash.includes("faq")) {
        setActiveView("askgov");
      } else if (hash.includes("feedback")) {
        setActiveView("feedback");
      } else if (hash.includes("awards") || hash.includes("accolades")) {
        setActiveView("awards-accolades");
      } else if (hash.includes("who-we-are") || hash.includes("our-checkpoints") || hash === "#checkpoints") {
        setActiveView("checkpoints");
      } else if (hash.includes("status") || hash.includes("ipsave") || hash.includes("appointment")) {
        setActiveView("checkstatus");
      } else if (hash === "" || hash === "#" || hash === "#home") {
        setActiveView("home");
      }
    };

    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  // Sync document title with current view
  useEffect(() => {
    if (activeView === "meet-our-officers") {
      document.title = "ICA | Career | Meet our officers";
    } else if (activeView === "scholarships") {
      document.title = "ICA | Career | Scholarships, Sponsorships & Internships";
    } else if (activeView === "publications") {
      document.title = window.location.hash.toLowerCase().includes("annual")
        ? "ICA | ICA Annuals"
        : "ICA | Publications";
    } else if (activeView === "public-education") {
      document.title = "ICA | Public Education";
    } else if (activeView === "statistics") {
      document.title = "ICA | Statistics";
    } else if (activeView === "newsroom") {
      document.title = "ICA | Newsroom";
    } else if (activeView === "reach") {
      document.title = "Home | REACH (Reaching Everyone for Active Citizenry @ Home)";
    } else if (activeView === "documents") {
      document.title = "ICA | Identity Card, Passport and other Documents";
    } else if (activeView === "enter-transit-depart") {
      document.title = "ICA | Entering, Transiting and Departing";
    } else if (activeView === "reside") {
      document.title = "ICA | Reside, Study and Work in Singapore";
    } else if (activeView === "eservicesandforms") {
      document.title = "ICA | e-Services and Forms";
    } else if (activeView === "feedback") {
      document.title = "ICA | Feedback";
    } else if (activeView === "checkstatus") {
      document.title = "ICA | Enquire for Application of Visa";
    } else if (activeView === "contactus") {
      document.title = "ICA | Contact Us";
    } else if (activeView === "join-us") {
      document.title = "ICA | Career | Join Us";
    } else if (activeView === "our-people") {
      document.title = "ICA | Our People";
    } else if (activeView === "vision-mission-values") {
      document.title = "ICA | Vision, Mission & Values";
    } else if (activeView === "awards-accolades") {
      document.title = "ICA | Awards & Accolades";
    } else if (activeView === "our-service-commitment") {
      document.title = "ICA | Our Service Commitment";
    } else if (activeView === "admin-dashboard" || activeView === "manage-visa") {
      document.title = "ICA Admin Dashboard | Client Visa Document Portal";
    } else if (activeView === "askgov") {
      document.title = "ICA | AskGov Knowledge Base & FAQs";
    } else {
      document.title = "ICA | Our Checkpoints";
    }
  }, [activeView]);

  // Filter checkpoints based on search term & 24h filter
  const filteredData = useMemo(() => {
    const filterList = (list) => {
      return list.filter((cp) => {
        if (filter24Hours && !cp.is24Hours) return false;
        if (!searchQuery.trim()) return true;

        const q = searchQuery.toLowerCase();
        const matchTitle = cp.title.toLowerCase().includes(q);
        const matchAddr = cp.addressLines.some((l) => l.toLowerCase().includes(q));
        const matchPostal = cp.postalCode.includes(q);
        const matchHours = cp.hours.toLowerCase().includes(q);
        return matchTitle || matchAddr || matchPostal || matchHours;
      });
    };

    return {
      air: {
        ...checkpointsData.air,
        checkpoints: filterList(checkpointsData.air.checkpoints),
      },
      land: {
        ...checkpointsData.land,
        checkpoints: filterList(checkpointsData.land.checkpoints),
      },
      sea: {
        ...checkpointsData.sea,
        checkpoints: filterList(checkpointsData.sea.checkpoints),
      },
    };
  }, [searchQuery, filter24Hours]);

  const totalMatches =
    filteredData.air.checkpoints.length +
    filteredData.land.checkpoints.length +
    filteredData.sea.checkpoints.length;

  const isSearching = searchQuery.trim().length > 0 || filter24Hours;

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    let targetRef = null;
    if (sectionId === "air") targetRef = airSectionRef;
    if (sectionId === "land") targetRef = landSectionRef;
    if (sectionId === "sea") targetRef = seaSectionRef;

    if (targetRef && targetRef.current) {
      const offsetTop = targetRef.current.offsetTop - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleUniversalNavigate = (view) => {
    setActiveView(view);
    const hashMapping = {
      "home": "#home",
      "vision-mission-values": "#vision-mission-values",
      "our-people": "#our-people",
      "awards-accolades": "#awards-accolades",
      "our-service-commitment": "#our-service-commitment",
      "checkpoints": "#checkpoints",
      "checkstatus": "#status",
      "admin-dashboard": "#admin-dashboard",
      "manage-visa": "#admin-dashboard",
      "contactus": "#contact-us",
      "feedback": "#feedback",
      "askgov": "#faqs",
      "reach": "#reach",
      "documents": "#documents",
      "enter-transit-depart": "#enter-transit-depart",
      "reside": "#reside",
      "newsroom": "#newsroom",
      "publications": "#publications",
      "statistics": "#statistics",
      "public-education": "#public-education",
      "eservicesandforms": "#eservicesandforms",
      "join-us": "#join-us",
      "scholarships": "#scholarships",
      "meet-our-officers": "#meet-our-officers",
      "career-faqs": "#career-faqs",
    };
    window.location.hash = hashMapping[view] || `#${view}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectService = (serviceId) => {
    if (serviceId === "identity" || serviceId === "documents") {
      handleUniversalNavigate("documents");
    } else if (serviceId === "enter-transit-depart") {
      handleUniversalNavigate("enter-transit-depart");
    } else if (serviceId === "reside") {
      handleUniversalNavigate("reside");
    } else if (serviceId === "eservicesandforms" || serviceId === "eservices") {
      handleUniversalNavigate("eservicesandforms");
    } else if (serviceId === "checkstatus") {
      handleUniversalNavigate("checkstatus");
    } else if (serviceId === "manage-visa" || serviceId === "admin") {
      handleUniversalNavigate("admin-dashboard");
    } else {
      handleUniversalNavigate("checkpoints");
    }
  };

  // Scroll listener to update active section in sticky nav
  useEffect(() => {
    if (activeView !== "checkpoints") return;

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      const seaPos = seaSectionRef.current?.offsetTop || Infinity;
      const landPos = landSectionRef.current?.offsetTop || Infinity;
      const airPos = airSectionRef.current?.offsetTop || 0;

      if (scrollPos >= seaPos) {
        setActiveSection("sea");
      } else if (scrollPos >= landPos) {
        setActiveSection("land");
      } else {
        setActiveSection("air");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeView]);

  const universalNavProps = {
    onNavigate: handleUniversalNavigate,
    onNavigateToCheckpoints: () => handleUniversalNavigate("checkpoints"),
    onNavigateCheckpoints: () => handleUniversalNavigate("checkpoints"),
    onNavigateHome: () => handleUniversalNavigate("home"),
    onNavigateToHome: () => handleUniversalNavigate("home"),
    onNavigateToDocuments: () => handleUniversalNavigate("documents"),
    onNavigateToEnterTransitDepart: () => handleUniversalNavigate("enter-transit-depart"),
    onNavigateToReside: () => handleUniversalNavigate("reside"),
    onNavigateToEServicesForms: () => handleUniversalNavigate("eservicesandforms"),
    onNavigateToFeedback: () => handleUniversalNavigate("feedback"),
    onNavigateFeedback: () => handleUniversalNavigate("feedback"),
    onNavigateToReach: () => handleUniversalNavigate("reach"),
    onNavigateReach: () => handleUniversalNavigate("reach"),
    onNavigateToOurPeople: () => handleUniversalNavigate("our-people"),
    onNavigateToVisionMissionValues: () => handleUniversalNavigate("vision-mission-values"),
    onNavigateToAwardsAccolades: () => handleUniversalNavigate("awards-accolades"),
    onNavigateToOurServiceCommitment: () => handleUniversalNavigate("our-service-commitment"),
    onNavigateToNewsroom: () => handleUniversalNavigate("newsroom"),
    onNavigateToPublications: () => handleUniversalNavigate("publications"),
    onNavigateToStatistics: () => handleUniversalNavigate("statistics"),
    onNavigateToPublicEducation: () => handleUniversalNavigate("public-education"),
    onNavigateToCheckStatus: () => handleUniversalNavigate("checkstatus"),
    onNavigateToStatus: () => handleUniversalNavigate("checkstatus"),
    onNavigateStatus: () => handleUniversalNavigate("checkstatus"),
    onNavigateToAdmin: () => handleUniversalNavigate("admin-dashboard"),
    onNavigateToDashboard: () => handleUniversalNavigate("admin-dashboard"),
    onNavigateToManageVisa: () => handleUniversalNavigate("admin-dashboard"),
    onNavigateManageVisa: () => handleUniversalNavigate("admin-dashboard"),
    onNavigateToContact: () => handleUniversalNavigate("contactus"),
    onNavigateToContactUs: () => handleUniversalNavigate("contactus"),
    onNavigateContact: () => handleUniversalNavigate("contactus"),
    onNavigateToFaqs: () => handleUniversalNavigate("askgov"),
    onNavigateToAskGov: () => handleUniversalNavigate("askgov"),
    onNavigateToFaq: () => handleUniversalNavigate("askgov"),
    onNavigateFaqs: () => handleUniversalNavigate("askgov"),
    onNavigateToAgencies: () => handleUniversalNavigate("agencies"),
    onNavigateAgencies: () => handleUniversalNavigate("agencies"),
    onNavigateToJoinUs: () => handleUniversalNavigate("join-us"),
    onNavigateJoinUs: () => handleUniversalNavigate("join-us"),
    onNavigateToCareers: () => handleUniversalNavigate("join-us"),
    onNavigateCareers: () => handleUniversalNavigate("join-us"),
    onNavigateToScholarships: () => handleUniversalNavigate("scholarships"),
    onNavigateToMeetOurOfficers: () => handleUniversalNavigate("meet-our-officers"),
    onNavigateToCareerFaqs: () => handleUniversalNavigate("career-faqs"),
  };

  let mainContent = null;
  if (activeView === "home") mainContent = <HomePage {...universalNavProps} />;
  else if (activeView === "career-faqs") mainContent = <CareerFaqsPage {...universalNavProps} />;
  else if (activeView === "meet-our-officers") mainContent = <MeetOurOfficersPage {...universalNavProps} />;
  else if (activeView === "scholarships") mainContent = <ScholarshipsPage {...universalNavProps} />;
  else if (activeView === "statistics") mainContent = <StatisticsPage {...universalNavProps} />;
  else if (activeView === "newsroom") mainContent = <NewsroomPage {...universalNavProps} />;
  else if (activeView === "public-education") mainContent = <PublicEducationPage {...universalNavProps} />;
  else if (activeView === "publications") mainContent = <PublicationsPage {...universalNavProps} />;
  else if (activeView === "eservicesandforms") mainContent = <EServicesFormsPage {...universalNavProps} />;
  else if (activeView === "reside") mainContent = <ResidePage {...universalNavProps} />;
  else if (activeView === "enter-transit-depart") mainContent = <EnterTransitDepartPage {...universalNavProps} />;
  else if (activeView === "documents") mainContent = <DocumentsPage {...universalNavProps} />;
  else if (activeView === "checkstatus") mainContent = <VisaEnquiryPage {...universalNavProps} />;
  else if (activeView === "admin-dashboard" || activeView === "manage-visa") mainContent = <AdminDashboardPage {...universalNavProps} />;
  else if (activeView === "contactus") mainContent = <ContactUsPage {...universalNavProps} />;
  else if (activeView === "vision-mission-values") mainContent = <VisionMissionValuesPage {...universalNavProps} />;
  else if (activeView === "our-people") mainContent = <OurPeoplePage {...universalNavProps} />;
  else if (activeView === "awards-accolades") mainContent = <AwardsAccoladesPage {...universalNavProps} />;
  else if (activeView === "our-service-commitment") mainContent = <OurServiceCommitmentPage {...universalNavProps} />;
  else if (activeView === "feedback") mainContent = <FeedbackPage {...universalNavProps} />;
  else if (activeView === "agencies") (
    mainContent = (
      <AllAgenciesPage
        onBackToFaq={() => handleUniversalNavigate("askgov")}
        {...universalNavProps}
      />
    )
  );
  else if (activeView === "askgov") mainContent = <AskGovPage {...universalNavProps} />;
  else if (activeView === "reach") mainContent = <ReachPage {...universalNavProps} />;
  else if (activeView === "join-us" || activeView === "careers") mainContent = <JoinUsPage {...universalNavProps} />;
  else {
    mainContent = (
      <div className="site-wrapper">
      {/* Singapore Government Masthead at very top */}
      <GovMasthead />

      {/* Official Header with Logo, Navigation or Magenta bar */}
      <SiteHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalMatches={totalMatches}
        isSearching={isSearching}
        activeView={activeView}
        onNavigate={handleUniversalNavigate}
      />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content">
            {/* VIEW 2: Our Checkpoints Page with Breadcrumbs & e-Services Bar */}
            {activeView === "checkpoints" && (
              <>
                {/* Breadcrumbs */}
                <Breadcrumbs
                  activeView={activeView}
                  onNavigate={handleUniversalNavigate}
                />

                {/* Horizontal e-Services list */}
                <EServicesBar
                  activeView={activeView}
                  onSelectService={handleSelectService}
                />
              </>
            )}

            {/* VIEW 2: Our Checkpoints Page */}
            {activeView === "checkpoints" && (
              <div className="container container--no-padding main-container">
                <div className="checkpoint-page-header">
                  <h1 className="checkpoint-main-heading">Our Checkpoints</h1>
                  <hr className="checkpoint-main-divider" />

                  {/* Clean Text Links Navigation */}
                  <SectionNav
                    onSectionClick={handleSectionClick}
                  />
                </div>

                <div className="standard-content">
                  {/* Air Checkpoints Accordion */}
                  {(filteredData.air.checkpoints.length > 0 || !isSearching) && (
                    <CheckpointSection
                      categoryKey="air"
                      categoryData={filteredData.air}
                      sectionRef={airSectionRef}
                    />
                  )}

                  {/* Land Checkpoints Accordion */}
                  {(filteredData.land.checkpoints.length > 0 || !isSearching) && (
                    <CheckpointSection
                      categoryKey="land"
                      categoryData={filteredData.land}
                      sectionRef={landSectionRef}
                    />
                  )}

                  {/* Sea Checkpoints Accordion */}
                  {(filteredData.sea.checkpoints.length > 0 || !isSearching) && (
                    <CheckpointSection
                      categoryKey="sea"
                      categoryData={filteredData.sea}
                      sectionRef={seaSectionRef}
                    />
                  )}

                  {/* Empty State when Search has no matches */}
                  {totalMatches === 0 && (
                    <div className="no-checkpoints-found">
                      <div className="no-matches-icon">🔍</div>
                      <h3>No checkpoints found</h3>
                      <p>
                        We couldn't find any checkpoints matching "<strong>{searchQuery}</strong>"
                        {filter24Hours ? " with 24 Hours filter active" : ""}.
                      </p>
                      <button
                        type="button"
                        className="reset-all-filters-btn"
                        onClick={() => {
                          setSearchQuery("");
                          setFilter24Hours(false);
                        }}
                      >
                        Reset All Filters
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Back to Top - Only on Checkpoints portal view */}
      {activeView === "checkpoints" && <ScrollToTop />}

      {/* Official Footer */}
      <SiteFooter
        onNavigate={handleUniversalNavigate}
      />
    </div>
    );
  }

  return (
    <>
      {mainContent}
      <AskGovWidget />
    </>
  );
}
