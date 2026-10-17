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
import UserResearchPage from "./components/UserResearchPage";
import SitemapPage from "./components/SitemapPage";
import TermsOfUsePage from "./components/TermsOfUsePage";
import PrivacyStatementPage from "./components/PrivacyStatementPage";
import AllAgenciesPage from "./components/faq/AllAgenciesPage";
import AskGovWidget from "./components/AskGovWidget";
import ScrollToTop from "./components/ScrollToTop";
import SiteFooter from "./components/SiteFooter";
import { checkpointsData } from "./data/checkpointsData";

// Master mapping from any URL, path, hash, or link text to an internal section.
// If a link does not have its own section, this returns null so it can default to "home".
export function mapUrlOrTextToSection(rawHref = "", rawText = "") {
  const href = (rawHref || "").trim().toLowerCase();
  const text = (rawText || "").trim().toLowerCase();

  // If empty or explicitly home
  if (
    href === "" ||
    href === "#" ||
    href === "#home" ||
    href === "/" ||
    href === "./" ||
    href.endsWith("ica.gov.sg") ||
    href.endsWith("ica.gov.sg/") ||
    text === "home" ||
    text === "- home"
  ) {
    return "home";
  }

  // 1. Admin Dashboard / Manage Visa
  if (
    href.includes("admin") ||
    href.includes("dashboard") ||
    href.includes("manage-visa") ||
    href.includes("client-record") ||
    text.includes("admin dashboard") ||
    text.includes("manage visa")
  ) {
    return "admin-dashboard";
  }

  // 2. Career FAQs
  if (
    href.includes("career-faq") ||
    href.includes("faqs-careers") ||
    text.includes("career faq")
  ) {
    return "career-faqs";
  }

  // 3. Meet Our Officers
  if (
    href.includes("meet-our-officer") ||
    href.includes("meet-officer") ||
    text.includes("meet our officer")
  ) {
    return "meet-our-officers";
  }

  // 4. Scholarships, Sponsorships & Internships
  if (
    href.includes("scholarship") ||
    href.includes("sponsorship") ||
    href.includes("internship") ||
    text.includes("scholarship") ||
    text.includes("sponsorship") ||
    text.includes("internship")
  ) {
    return "scholarships";
  }

  // 5. Newsroom & Media Releases
  if (
    href.includes("news-and-publication") ||
    href.includes("newsroom") ||
    href.includes("media-release") ||
    href.includes("media-repl") ||
    href.includes("advisories") ||
    href.includes("advisory") ||
    href === "#news" ||
    text === "newsroom" ||
    text.includes("media release") ||
    text.includes("newsroom")
  ) {
    return "newsroom";
  }

  // 6. Publications / Annual Reports
  if (
    href.includes("annual") ||
    href.includes("publication") ||
    text.includes("ica annual") ||
    text.includes("annuals") ||
    text.includes("publication")
  ) {
    return "publications";
  }

  // 7. Public Education
  if (
    href.includes("public-education") ||
    href.includes("education") ||
    text.includes("public education")
  ) {
    return "public-education";
  }

  // 8. Statistics
  if (
    href.includes("statistic") ||
    text.includes("statistic")
  ) {
    return "statistics";
  }

  // 9. REACH
  if (
    href.includes("reach.gov.sg") ||
    href.includes("/reach") ||
    href === "#reach" ||
    text === "reach" ||
    text.includes("reach (reaching everyone")
  ) {
    return "reach";
  }

  // 10. Feedback
  if (
    href.includes("feedback") ||
    text.includes("feedback")
  ) {
    return "feedback";
  }

  // 11. Contact Us
  if (
    href.includes("contact") ||
    text.includes("contact us") ||
    text.includes("contact details")
  ) {
    return "contactus";
  }

  // 12. Check Status / Appointment / Visa Enquiry
  if (
    href.includes("checkstatus") ||
    href.includes("status") ||
    href.includes("ipsave") ||
    href.includes("appointment") ||
    href.includes("enquire") ||
    text.includes("check status") ||
    text.includes("make appointment") ||
    text.includes("enquire for application")
  ) {
    return "checkstatus";
  }

  // 13. FAQs / AskGov Knowledge Base (Removed -> route to home)
  if (
    href.includes("askgov") ||
    href.includes("faq") ||
    href.includes("help") ||
    text.includes("faqs") ||
    text.includes("askgov")
  ) {
    return "home";
  }

  // 14. All Agencies
  if (
    href.includes("all-agencies") ||
    href.includes("agencies") ||
    text.includes("all agencies")
  ) {
    return "agencies";
  }

  // 15. User Research
  if (
    href.includes("user-research") ||
    text.includes("user research")
  ) {
    return "user-research";
  }

  // 16. Terms of Use
  if (
    href.includes("terms-of-use") ||
    href.includes("terms") ||
    text.includes("terms of use")
  ) {
    return "terms-of-use";
  }

  // 17. Sitemap
  if (
    href.includes("sitemap") ||
    text.includes("sitemap")
  ) {
    return "sitemap";
  }

  // 17b. Privacy Statement
  if (
    href.includes("privacy-statement") ||
    href.includes("privacy") ||
    text.includes("privacy statement") ||
    text === "privacy"
  ) {
    return "privacy-statement";
  }

  // 18. Checkpoints
  if (
    href.includes("checkpoint") ||
    href.includes("who-we-are/our-checkpoints") ||
    text.includes("checkpoint") ||
    text.includes("our checkpoints")
  ) {
    return "checkpoints";
  }

  // 19. Documents (Identity cards, passport, certificates, birth/death)
  if (
    href.includes("document") ||
    href.includes("identity") ||
    href.includes("passport") ||
    href.includes("certificate") ||
    text.includes("identity card") ||
    text.includes("singapore passport") ||
    text.includes("certificate") ||
    text.includes("documents")
  ) {
    return "documents";
  }

  // 20. Enter, Transit, Depart
  if (
    href.includes("enter") ||
    href.includes("transit") ||
    href.includes("depart") ||
    href.includes("sgac") ||
    text.includes("entering") ||
    text.includes("transiting") ||
    text.includes("departing") ||
    text.includes("arrival card")
  ) {
    return "enter-transit-depart";
  }

  // 21. Reside, Study and Work
  if (
    href.includes("reside") ||
    href.includes("citizenship") ||
    href.includes("permanent-residen") ||
    href.includes("ltvp") ||
    href.includes("study") ||
    text.includes("reside") ||
    text.includes("citizenship") ||
    text.includes("permanent residence")
  ) {
    return "reside";
  }

  // 22. e-Services and Forms
  if (
    !href.includes("icsbip") &&
    !href.includes("myica") &&
    !text.includes("myica") &&
    !href.includes("form.gov.sg") &&
    (
      href.includes("eservicesandforms") ||
      href.includes("/eservices") ||
      href === "#eservicesandforms" ||
      text.includes("e-services and forms") ||
      text === "e-services" ||
      text === "eservices"
    )
  ) {
    return "eservicesandforms";
  }

  // 23. Join Us / Careers
  if (
    href.includes("join-us") ||
    href.includes("career") ||
    href.includes("careers") ||
    href.includes("jobs.careers.gov.sg") ||
    text.includes("join us") ||
    text.includes("careers") ||
    text.includes("career")
  ) {
    return "join-us";
  }

  // 24. Our People
  if (
    href.includes("our-people") ||
    href.includes("people") ||
    text.includes("our people")
  ) {
    return "our-people";
  }

  // 25. Vision, Mission & Values
  if (
    href.includes("vision") ||
    href.includes("mission") ||
    href.includes("values") ||
    text.includes("vision") ||
    text.includes("mission") ||
    text.includes("values")
  ) {
    return "vision-mission-values";
  }

  // 26. Awards & Accolades
  if (
    href.includes("award") ||
    href.includes("accolade") ||
    text.includes("award") ||
    text.includes("accolade")
  ) {
    return "awards-accolades";
  }

  // 27. Our Service Commitment
  if (
    href.includes("commitment") ||
    href.includes("service-commitment") ||
    text.includes("our service commitment") ||
    text.includes("service commitment")
  ) {
    return "our-service-commitment";
  }

  return null;
}

export default function App() {
  const getInitialView = () => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      const matched = mapUrlOrTextToSection(hash) || mapUrlOrTextToSection(path);
      return matched || "home";
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
      const resolved = mapUrlOrTextToSection(hash, "");
      setActiveView(resolved || "home");
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
    } else if (activeView === "user-research") {
      document.title = "ICA | User Research";
    } else if (activeView === "terms-of-use") {
      document.title = "ICA | Terms of Use";
    } else if (activeView === "sitemap") {
      document.title = "ICA | Sitemap";
    } else if (activeView === "privacy-statement") {
      document.title = "ICA | Privacy Statement";
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
      "agencies": "#agencies",
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
      "user-research": "#user-research",
      "terms-of-use": "#terms-of-use",
      "sitemap": "#sitemap",
      "privacy-statement": "#privacy-statement",
    };
    const targetHash = hashMapping[view] || `#${view}`;
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Global link interception: no link can browse original website;
  // if a link has its own section, navigate there; if not, navigate to home section.
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const anchor = e.target.closest("a");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href") || "";
      const text = anchor.textContent || "";
      const lowerHref = rawHref.trim().toLowerCase();

      // Permit browser to handle direct downloads / mail / tel
      if (
        lowerHref.endsWith(".pdf") ||
        lowerHref.startsWith("blob:") ||
        lowerHref.startsWith("data:") ||
        lowerHref.startsWith("mailto:") ||
        lowerHref.startsWith("tel:")
      ) {
        return;
      }

      // Social media links exemption
      const isSocialLink =
        lowerHref.includes("facebook.com") ||
        lowerHref.includes("twitter.com") ||
        lowerHref.includes("x.com") ||
        lowerHref.includes("instagram.com") ||
        lowerHref.includes("youtube.com") ||
        lowerHref.includes("tiktok.com") ||
        lowerHref.includes("linkedin.com") ||
        lowerHref.includes("t.me");

      // Check if this link points to original/external site or relative path
      const isExternalOrRelative =
        (rawHref.startsWith("/") && !rawHref.startsWith("//")) ||
        rawHref.startsWith("./") ||
        lowerHref.startsWith("http://") ||
        lowerHref.startsWith("https://") ||
        lowerHref.startsWith("//");

      // No links can browse original website; route internally or to home
      if (isExternalOrRelative && !isSocialLink) {
        e.preventDefault();
        e.stopPropagation();

        const section = mapUrlOrTextToSection(rawHref, text);
        handleUniversalNavigate(section || "home");
        return;
      }

      // Check if it's a hash link
      if (rawHref.startsWith("#")) {
        const section = mapUrlOrTextToSection(rawHref, text);
        if (section) {
          e.preventDefault();
          e.stopPropagation();
          handleUniversalNavigate(section);
        } else {
          // Check if target element exists on page for in-page anchors
          const targetId = lowerHref.slice(1);
          const targetEl = targetId ? document.getElementById(targetId) : null;
          if (!targetEl && lowerHref !== "") {
            e.preventDefault();
            e.stopPropagation();
            handleUniversalNavigate("home");
          }
        }
        return;
      }

      // If it's javascript:void(0) or empty, check if text has a section or default to home
      if (
        lowerHref === "javascript:void(0)" ||
        lowerHref === "javascript:;" ||
        lowerHref === ""
      ) {
        const section = mapUrlOrTextToSection("", text);
        if (section) {
          e.preventDefault();
          e.stopPropagation();
          handleUniversalNavigate(section);
        }
      }
    };

    // Safeguard window.open to intercept any code trying to browse ica.gov.sg
    const originalOpen = window.open;
    window.open = function (url, target, features) {
      if (typeof url === "string" && /ica\.gov\.sg/i.test(url)) {
        const section = mapUrlOrTextToSection(url, "") || "home";
        handleUniversalNavigate(section);
        return null;
      }
      return originalOpen ? originalOpen.call(window, url, target, features) : null;
    };

    document.addEventListener("click", handleGlobalClick, true);
    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
      window.open = originalOpen;
    };
  }, []);

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
    onNavigateToUserResearch: () => handleUniversalNavigate("user-research"),
    onNavigateUserResearch: () => handleUniversalNavigate("user-research"),
    onNavigateToTermsOfUse: () => handleUniversalNavigate("terms-of-use"),
    onNavigateTermsOfUse: () => handleUniversalNavigate("terms-of-use"),
    onNavigateToSitemap: () => handleUniversalNavigate("sitemap"),
    onNavigateSitemap: () => handleUniversalNavigate("sitemap"),
    onNavigateToPrivacyStatement: () => handleUniversalNavigate("privacy-statement"),
    onNavigatePrivacyStatement: () => handleUniversalNavigate("privacy-statement"),
  };

  let mainContent = null;
  if (activeView === "home") mainContent = <HomePage {...universalNavProps} />;
  else if (activeView === "user-research") mainContent = <UserResearchPage {...universalNavProps} />;
  else if (activeView === "terms-of-use") mainContent = <TermsOfUsePage {...universalNavProps} />;
  else if (activeView === "sitemap") mainContent = <SitemapPage {...universalNavProps} />;
  else if (activeView === "privacy-statement") mainContent = <PrivacyStatementPage {...universalNavProps} />;
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
