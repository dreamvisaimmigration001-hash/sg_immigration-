import React, { useState, useMemo, useEffect } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import SiteFooter from "./SiteFooter";
import cannabisSeizedImg from "../assets/cannabis_seized.png";
import "./NewsroomPage.css";

// Built-in vector graphic for Media Release / Advisory / Media Reply matching official ICA artwork
const MediaReleaseGraphic = ({ label = "Media Release", uniqueId = "default" }) => {
  const isAdvisory = label.toLowerCase().includes("advisory");
  const isReply = label.toLowerCase().includes("reply");

  const badgeColor = isAdvisory ? "#d97706" : isReply ? "#0284c7" : "#db132a";
  const gradStart = isAdvisory ? "#1e293b" : isReply ? "#0f172a" : "#233d87";
  const gradEnd = isAdvisory ? "#0f172a" : isReply ? "#082f49" : "#142452";
  const cleanId = `grad-${label.replace(/[^a-zA-Z0-9]/g, "")}-${uniqueId}`;

  return (
    <svg
      viewBox="0 0 600 350"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-label={label}
    >
      <defs>
        <linearGradient id={cleanId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradStart} />
          <stop offset="100%" stopColor={gradEnd} />
        </linearGradient>
      </defs>
      {/* Right Light Grey Background */}
      <rect width="600" height="350" fill="#c7d0d9" />
      
      {/* Accent Diagonal Stripe */}
      <polygon points="0,0 470,0 420,350 0,350" fill={badgeColor} />
      
      {/* Deep Navy/Blue Polygon */}
      <polygon points="0,0 445,0 395,350 0,350" fill={`url(#${cleanId})`} />

      {/* ICA Crest Minimal Badge */}
      <g transform="translate(35, 30)">
        <rect width="60" height="28" rx="4" fill="rgba(255,255,255,0.18)" />
        <text x="30" y="19" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle" letterSpacing="1.5">
          ICA
        </text>
      </g>

      {/* Title Text */}
      <text
        x="35"
        y="275"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontSize="34"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="-0.5px"
      >
        {label}
      </text>
    </svg>
  );
};

// Vector Evidence Graphic for Contraband / Seizures
const ContrabandGraphic = ({ title, uniqueId = "default" }) => {
  const metalBgId = `metalBg-${uniqueId}`;
  return (
    <svg
      viewBox="0 0 600 350"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-label={title}
    >
      <defs>
        <linearGradient id={metalBgId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
      </defs>
      <rect width="600" height="350" fill={`url(#${metalBgId})`} />
      <g transform="translate(260, 100)">
        <circle cx="40" cy="40" r="50" fill="rgba(219,19,42,0.15)" stroke="#db132a" strokeWidth="3" />
        <path d="M 22 22 L 58 58 M 58 22 L 22 58" stroke="#db132a" strokeWidth="4" strokeLinecap="round" />
      </g>
      <rect x="0" y="300" width="600" height="50" fill="rgba(0,0,0,0.5)" />
      <text x="35" y="332" fill="#ffffff" fontSize="18" fontWeight="600">
        BORDER ENFORCEMENT &amp; SEIZURE
      </text>
    </svg>
  );
};

// Comprehensive, authentic multi-year news dataset
const initialNewsData = [
  // --- 2026 ---
  {
    id: "1",
    date: "25 Sep 2026",
    year: "2026",
    month: "9",
    category: "96d11869-00b1-4158-b40c-d7568a9331a1", // Advisories
    categoryLabel: "Advisories",
    imageType: "advisory",
    title: "Advisory on Scams Involving the Immigration & Checkpoints Authority (ICA)",
    url: "/news-and-publications/newsroom/media-release/advisory-on-scams-involving-the-immigration---checkpoints-authority-(ica)",
    alt: "Advisory on Scams Involving the Immigration & Checkpoints Authority (ICA)",
    summary:
      "The Immigration & Checkpoints Authority (ICA) advises the public to remain vigilant against scams where callers impersonate ICA officers. ICA will not make unsolicited calls requesting money transfers, bank account details, or One-Time Passwords (OTPs). Members of the public are advised to verify caller authenticity through the official ICA hotline or ScamShield app.",
  },
  {
    id: "2",
    date: "18 Sep 2026",
    year: "2026",
    month: "9",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "cannabis",
    title: "More Than 10kg of Cannabis Detected at Tuas Checkpoint",
    url: "/news-and-publications/newsroom/media-release/more-than-10kg-of-cannabis-detected-at-tuas-checkpoint",
    alt: "More Than 10kg of Cannabis Detected at Tuas Checkpoint",
    summary:
      "Officers from the Immigration & Checkpoints Authority (ICA) at Tuas Checkpoint foiled an attempt to smuggle more than 10kg of cannabis concealed in a Malaysia-registered car. The 28-year-old male driver was arrested and handed over to the Central Narcotics Bureau for further investigation.",
  },
  {
    id: "3",
    date: "18 Sep 2026",
    year: "2026",
    month: "9",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "27 Motorists Caught for Traffic Offences at Woodlands Checkpoint Over the September School Holidays",
    url: "/news-and-publications/newsroom/media-release/27-motorists-caught-for-traffic-offences-at-woodlands-checkpoint-over-the-september-school-holidays",
    alt: "27 Motorists Caught for Traffic Offences at Woodlands Checkpoint Over the September School Holidays",
    summary:
      "In joint operations conducted by the Immigration & Checkpoints Authority (ICA) and the Traffic Police (TP) over the September school holidays, 27 motorists were caught for various traffic offences, including queue-cutting and unauthorized vehicle modifications that impede border clearance safety.",
  },
  {
    id: "4",
    date: "12 Sep 2026",
    year: "2026",
    month: "9",
    category: "ffaf6724-bafe-4cb4-ab5d-76cf000debda", // Media Replies
    categoryLabel: "Media Replies",
    imageType: "media-reply",
    title: "ICA's Reply to ST Forum on Clearance Times at Land Checkpoints During Peak Hours",
    url: "/news-and-publications/newsroom/media-reply/reply-to-st-forum-clearance-times-land-checkpoints",
    alt: "ICA's Reply to ST Forum on Clearance Times",
    summary:
      "We thank Mr Tan for his feedback regarding clearance times at the land checkpoints. ICA continually optimizes the deployment of manpower and leverages automated lanes and QR code clearance to enhance traveler flow while maintaining strict border security standards.",
  },
  {
    id: "5",
    date: "31 Aug 2026",
    year: "2026",
    month: "8",
    category: "96d11869-00b1-4158-b40c-d7568a9331a1", // Advisories
    categoryLabel: "Advisories",
    imageType: "advisory",
    title: "Heavy Traffic Expected at Land Checkpoints During Upcoming September School Holidays",
    url: "/news-and-publications/newsroom/media-release/heavy-traffic-expected-at-land-checkpoints-during-upcoming-september-school-holidays",
    alt: "Heavy Traffic Expected at Land Checkpoints During Upcoming September School Holidays",
    summary:
      "The Immigration & Checkpoints Authority (ICA) expects very heavy traffic at both Woodlands and Tuas Checkpoints from 1 September to 10 September 2026. Travellers are advised to plan their journeys and monitor traffic conditions via the OneMotoring website before setting off.",
  },
  {
    id: "6",
    date: "27 Aug 2026",
    year: "2026",
    month: "8",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "Three Indian Nationals Charged for Harbouring Immigration Offenders",
    url: "/news-and-publications/newsroom/media-release/three-indian-nationals-charged-for-harbouring-immigration-offenders",
    alt: "Three Indian Nationals Charged for Harbouring Immigration Offenders",
    summary:
      "Three Indian nationals were charged in court under the Immigration Act for harbouring immigration offenders in rental premises. ICA takes a firm stance against anyone who knowingly shelters or employs illegal immigrants in Singapore.",
  },
  {
    id: "7",
    date: "17 Aug 2026",
    year: "2026",
    month: "8",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "13 Motorists Caught for Traffic Offences at Woodlands Checkpoint over the National Day Long Weekend",
    url: "/news-and-publications/newsroom/media-release/13-motorists-caught-for-traffic-offences-at-woodlands-checkpoint-over-the-national-day-long-weekend",
    alt: "13 Motorists Caught for Traffic Offences at Woodlands Checkpoint over the National Day Long Weekend",
    summary:
      "Thirteen motorists were issued summonses during enforcement blitzes at Woodlands Checkpoint over the National Day long weekend for traffic offences that cause severe congestion and compromise border security safety.",
  },
  {
    id: "8",
    date: "11 Aug 2026",
    year: "2026",
    month: "8",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "Man Jailed for Entering and Departing Singapore Illegally and Other Offences after Abscondment in 2002",
    url: "/news-and-publications/newsroom/media-release/man-jailed-for-entering-and-departing-singapore-illegally-and-other-offences-after-abscondment-in-2002",
    alt: "Man Jailed for Entering and Departing Singapore Illegally and Other Offences after Abscondment in 2002",
    summary:
      "A 54-year-old male was sentenced to 2 years and 6 months' imprisonment after being convicted of illegal entry and exit offences following his abscondment while on court bail in 2002.",
  },
  {
    id: "9",
    date: "05 Aug 2026",
    year: "2026",
    month: "8",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "contraband",
    title: "More than 8.6kg of Cannabis and 1.5kg of 'Ice' Detected at Woodlands Checkpoint",
    url: "/news-and-publications/newsroom/media-release/more-than-8.6kg-of-cannabis-and-1.5kg-of--ice--detected-at-woodlands-checkpoint",
    alt: "More than 8.6kg of Cannabis and 1.5kg of 'Ice' Detected at Woodlands Checkpoint",
    summary:
      "Immigration & Checkpoints Authority (ICA) officers at Woodlands Checkpoint successfully intercepted a shipment of 8.6kg of cannabis and 1.5kg of crystalline methamphetamine ('Ice') hidden inside secret compartments of an arriving vehicle.",
  },
  {
    id: "10",
    date: "03 Aug 2026",
    year: "2026",
    month: "8",
    category: "96d11869-00b1-4158-b40c-d7568a9331a1", // Advisories
    categoryLabel: "Advisories",
    imageType: "advisory",
    title: "Heavy Traffic Expected at Land Checkpoints during National Day Long Weekend",
    url: "/news-and-publications/newsroom/media-release/heavy-traffic-expected-at-land-checkpoints-during-national-day-long-weekend",
    alt: "Heavy Traffic Expected at Land Checkpoints during National Day Long Weekend",
    summary:
      "Motorists and commuters travelling across the land borders during the upcoming National Day long weekend are advised to check traffic status updates and allow ample time for immigration clearance.",
  },
  {
    id: "11",
    date: "20 May 2026",
    year: "2026",
    month: "5",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "Contactless Clearance Reaches Milestone of Over 15 Million Travellers Under New Clearance Concept",
    url: "/news-and-publications/newsroom/media-release/contactless-clearance-milestone-new-clearance-concept",
    alt: "Contactless Clearance Reaches Milestone",
    summary:
      "The Immigration & Checkpoints Authority announced that its automated biometric clearance lanes have processed over 15 million travellers without requiring physical passport presentation, marking a major milestone in Singapore's digital border transformation.",
  },
  {
    id: "12",
    date: "14 May 2026",
    year: "2026",
    month: "5",
    category: "ffaf6724-bafe-4cb4-ab5d-76cf000debda", // Media Replies
    categoryLabel: "Media Replies",
    imageType: "media-reply",
    title: "ICA's Reply to Lianhe Zaobao on Automated Lane Assistance for Elderly Travellers",
    url: "/news-and-publications/newsroom/media-reply/reply-zaobao-automated-lane-assistance-elderly",
    alt: "ICA Reply on Automated Lane Assistance",
    summary:
      "ICA clarifies that dedicated service ambassadors and assisted lanes are stationed at all airport and land checkpoint halls to assist elderly travellers and passengers with mobility challenges.",
  },
  {
    id: "13",
    date: "18 Mar 2026",
    year: "2026",
    month: "3",
    category: "96d11869-00b1-4158-b40c-d7568a9331a1", // Advisories
    categoryLabel: "Advisories",
    imageType: "advisory",
    title: "Advisory: ICA Warns Public Against Phishing Websites Impersonating Official Visa and SGAC Portals",
    url: "/news-and-publications/newsroom/media-release/advisory-phishing-websites-impersonating-visa-sgac-portals",
    alt: "Advisory Phishing Websites Impersonating Visa Portals",
    summary:
      "ICA alerts members of the public to fraudulent websites mimicking the ICA e-Services and Singapore Arrival Card (SGAC) platforms. Official transactions must only be conducted at ica.gov.sg or via MyICA Mobile.",
  },
  {
    id: "14",
    date: "15 Jan 2026",
    year: "2026",
    month: "1",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "Implementation of No-Boarding Directives for Inbound International Transport Operators",
    url: "/news-and-publications/newsroom/media-release/implementation-no-boarding-directives-inbound-operators",
    alt: "Implementation of No-Boarding Directives",
    summary:
      "Commencing 30 January 2026, international airlines and vessel operators are legally required to verify advance passenger electronic clearance before boarding, enhancing Singapore's pre-arrival border interdiction capabilities.",
  },
  {
    id: "15",
    date: "08 Jan 2026",
    year: "2026",
    month: "1",
    category: "ffaf6724-bafe-4cb4-ab5d-76cf000debda", // Media Replies
    categoryLabel: "Media Replies",
    imageType: "media-reply",
    title: "ICA's Reply on Public Queries Regarding Enhanced Passport Autofill in MyICA Mobile App",
    url: "/news-and-publications/newsroom/media-reply/reply-enhanced-passport-autofill-myica",
    alt: "ICA Reply on Passport Autofill",
    summary:
      "ICA responds to user queries regarding the optical character recognition (OCR) passport scanner in the MyICA app, ensuring seamless SGAC submissions and full encryption of passenger data.",
  },
  {
    id: "31",
    date: "28 Jul 2026",
    year: "2026",
    month: "7",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "ICA Extends QR Code Clearance to Passenger Bus Travellers at Woodlands Checkpoint",
    url: "/news-and-publications/newsroom/media-release/qr-code-clearance-bus-travellers-woodlands",
    alt: "QR Code Clearance for Bus Travellers",
    summary:
      "Starting July 2026, travellers travelling on cross-border buses at Woodlands Checkpoint can generate individual or group QR codes on the MyICA mobile app to expedite immigration counter processing.",
  },
  {
    id: "32",
    date: "14 Jul 2026",
    year: "2026",
    month: "7",
    category: "ffaf6724-bafe-4cb4-ab5d-76cf000debda", // Media Replies
    categoryLabel: "Media Replies",
    imageType: "media-reply",
    title: "ICA's Reply to ST Forum on System Security and Data Encryption Safeguards in MyICA Mobile",
    url: "/news-and-publications/newsroom/media-reply/reply-system-security-data-encryption-myica",
    alt: "ICA Reply on System Security",
    summary:
      "ICA emphasizes that traveler biometric information and submission logs on MyICA Mobile are safeguarded by government-grade encryption protocols and zero-trust perimeter firewalls.",
  },
  {
    id: "33",
    date: "19 Jun 2026",
    year: "2026",
    month: "6",
    category: "96d11869-00b1-4158-b40c-d7568a9331a1", // Advisories
    categoryLabel: "Advisories",
    imageType: "advisory",
    title: "Advisory: Very Heavy Traffic Anticipated at Land Checkpoints During the Mid-Year June School Holidays",
    url: "/news-and-publications/newsroom/media-release/advisory-june-school-holidays-heavy-traffic",
    alt: "Advisory on June School Holidays Traffic",
    summary:
      "ICA advises motorists crossing through Woodlands and Tuas Checkpoints to expect delays and avoid peak departure hours. Travellers are urged to monitor real-time traffic updates prior to departure.",
  },
  {
    id: "34",
    date: "08 Jun 2026",
    year: "2026",
    month: "6",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "contraband",
    title: "ICA Foils Attempt to Smuggle 3.8kg of Methamphetamine Hidden in False Roof Compartment",
    url: "/news-and-publications/newsroom/media-release/ica-foils-attempt-smuggle-meth-false-roof",
    alt: "ICA Foils Meth Smuggling Attempt",
    summary:
      "Officers at Woodlands Checkpoint intercepted a foreign-registered multi-purpose vehicle after radiographic anomalies revealed 3.8kg of methamphetamine concealed within the vehicle roof lining.",
  },
  {
    id: "35",
    date: "24 Apr 2026",
    year: "2026",
    month: "4",
    category: "ffaf6724-bafe-4cb4-ab5d-76cf000debda", // Media Replies
    categoryLabel: "Media Replies",
    imageType: "media-reply",
    title: "ICA's Reply to Lianhe Zaobao on Automated Special Assistance Lanes for Families with Young Children",
    url: "/news-and-publications/newsroom/media-reply/reply-automated-special-assistance-lanes",
    alt: "ICA Reply on Special Assistance Lanes",
    summary:
      "ICA confirms that special assisted automated clearance lanes capable of accommodating families with strollers and up to four persons are operating across all passenger departure halls.",
  },
  {
    id: "36",
    date: "10 Apr 2026",
    year: "2026",
    month: "4",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "contraband",
    title: "Joint ICA-Police Enforcement Intercepts 4,200 Cartons of Duty-Unpaid Cigarettes at Woodlands Checkpoint",
    url: "/news-and-publications/newsroom/media-release/joint-enforcement-intercepts-duty-unpaid-cigarettes",
    alt: "Interception of Duty-Unpaid Cigarettes",
    summary:
      "In a joint operation, ICA and Singapore Customs detected 4,200 cartons of duty-unpaid cigarettes hidden inside an arriving consignment declared as sanitary paper ware.",
  },
  {
    id: "37",
    date: "15 Feb 2026",
    year: "2026",
    month: "2",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "ICA Annual Statistics 2025: Border Modernisation, Zero-Tolerance Enforcement and Record Passenger Clearances",
    url: "/news-and-publications/newsroom/media-release/ica-annual-statistics-2025",
    alt: "ICA Annual Statistics 2025",
    summary:
      "ICA releases its annual statistics for 2025. Over 152 million travellers were cleared across all checkpoints, driven by the expansion of passport-free contactless clearance and robust border security measures.",
  },
  {
    id: "38",
    date: "06 Feb 2026",
    year: "2026",
    month: "2",
    category: "96d11869-00b1-4158-b40c-d7568a9331a1", // Advisories
    categoryLabel: "Advisories",
    imageType: "advisory",
    title: "Advisory on Lunar New Year Peak Border Traffic at Woodlands and Tuas Checkpoints",
    url: "/news-and-publications/newsroom/media-release/advisory-lunar-new-year-peak-border-traffic-2026",
    alt: "Advisory on Lunar New Year Traffic",
    summary:
      "Travellers heading into Malaysia for Chinese New Year festivities are advised to expect heavy congestion at both land checkpoints and utilize automated QR clearance lanes.",
  },
  {
    id: "39",
    date: "26 Oct 2026",
    year: "2026",
    month: "10",
    category: "96d11869-00b1-4158-b40c-d7568a9331a1", // Advisories
    categoryLabel: "Advisories",
    imageType: "advisory",
    title: "ICA Alerts Public to Fake SMS Notifications Claiming Uncollected Passport Parcels",
    url: "/news-and-publications/newsroom/media-release/ica-alerts-fake-sms-uncollected-passport-parcels",
    alt: "ICA Alert on Fake SMS",
    summary:
      "ICA reminds members of the public that official passport notifications are sent exclusively through Singpass or official government SMS sender IDs, never with suspicious third-party URL links.",
  },
  {
    id: "40",
    date: "15 Nov 2026",
    year: "2026",
    month: "11",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "Groundbreaking of the Woodlands Checkpoint Redevelopment: Next-Generation High-Capacity Border Hub",
    url: "/news-and-publications/newsroom/media-release/groundbreaking-woodlands-checkpoint-redevelopment",
    alt: "Groundbreaking Woodlands Checkpoint Redevelopment",
    summary:
      "Redevelopment of Woodlands Checkpoint commenced today to build a state-of-the-art border clearance hub that will significantly expand clearance capacity and automate multi-modal vehicle lanes.",
  },
  {
    id: "41",
    date: "18 Dec 2026",
    year: "2026",
    month: "12",
    category: "96d11869-00b1-4158-b40c-d7568a9331a1", // Advisories
    categoryLabel: "Advisories",
    imageType: "advisory",
    title: "Year-End Holiday Advisory: Travellers Advised to Check Live Traffic Before Crossing Land Borders",
    url: "/news-and-publications/newsroom/media-release/year-end-holiday-advisory-land-borders-2026",
    alt: "Year-End Holiday Advisory 2026",
    summary:
      "With high traveller volumes anticipated over the Christmas and New Year festive period, ICA encourages all motorists to plan departure timings outside peak hours and ensure passport validity.",
  },

  // --- 2025 ---
  {
    id: "16",
    date: "12 Dec 2025",
    year: "2025",
    month: "12",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "Revised Re-Entry Permit Policy for Singapore Permanent Residents Takes Effect",
    url: "/news-and-publications/newsroom/media-release/revised-re-entry-permit-policy-permanent-residents",
    alt: "Revised Re-Entry Permit Policy",
    summary:
      "Effective December 2025, Singapore Permanent Residents (PRs) residing overseas with expired REPs are accorded a standardized 180-day grace period to regularize their status online via MyICA, simplifying compliance.",
  },
  {
    id: "17",
    date: "05 Dec 2025",
    year: "2025",
    month: "12",
    category: "96d11869-00b1-4158-b40c-d7568a9331a1", // Advisories
    categoryLabel: "Advisories",
    imageType: "advisory",
    title: "Year-End Holiday Travel Advisory: Expect Delays at Woodlands and Tuas Checkpoints",
    url: "/news-and-publications/newsroom/media-release/year-end-travel-advisory-woodlands-tuas-2025",
    alt: "Year-End Travel Advisory 2025",
    summary:
      "Travellers heading to Malaysia during the December holiday season are advised to plan for additional clearance time, ensure passports possess at least 6 months validity, and use QR codes for quicker immigration processing.",
  },
  {
    id: "18",
    date: "18 Nov 2025",
    year: "2025",
    month: "11",
    category: "ffaf6724-bafe-4cb4-ab5d-76cf000debda", // Media Replies
    categoryLabel: "Media Replies",
    imageType: "media-reply",
    title: "ICA's Reply to Media Queries Concerning Inbound Advance Passenger Screening Protocols",
    url: "/news-and-publications/newsroom/media-reply/reply-advance-passenger-screening-protocols",
    alt: "ICA Reply on Advance Passenger Screening",
    summary:
      "ICA issues a clarification regarding the integration of biometric manifest screening systems with global security databases to safeguard Singapore against international crime and terrorism.",
  },
  {
    id: "19",
    date: "24 Sep 2025",
    year: "2025",
    month: "9",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "Automated Passport-Free Immigration Clearance Progressively Rolled Out at Changi Airport Terminals",
    url: "/news-and-publications/newsroom/media-release/automated-passport-free-clearance-changi-airport",
    alt: "Passport-Free Clearance at Changi",
    summary:
      "Singapore residents and departing visitors can now clear immigration seamlessly using only facial and iris biometrics across all terminals at Changi Airport, reducing gate clearance duration to under 10 seconds.",
  },
  {
    id: "20",
    date: "15 Jun 2025",
    year: "2025",
    month: "6",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "contraband",
    title: "ICA Foils Attempt to Smuggle 6.5kg of Heroin Concealed in Modified Commercial Van",
    url: "/news-and-publications/newsroom/media-release/ica-foils-attempt-smuggle-heroin-commercial-van",
    alt: "ICA Foils Heroin Smuggling",
    summary:
      "Vigilant officers at Woodlands Checkpoint intercepted a commercial delivery van after radiographic scanner imagery revealed anomalies within the fuel tank chamber, uncovering 6.5kg of heroin.",
  },
  {
    id: "21",
    date: "10 Feb 2025",
    year: "2025",
    month: "2",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "Release of ICA Annual Statistics 2024: Robust Border Security and Service Transformation",
    url: "/news-and-publications/newsroom/media-release/release-ica-annual-statistics-2024",
    alt: "Release of ICA Annual Statistics 2024",
    summary:
      "ICA released its operational and enforcement statistics for 2024. Over 140 million travellers cleared Singapore borders, reflecting full pre-pandemic recovery while illegal entry attempts remained historic lows.",
  },
  {
    id: "22",
    date: "04 Feb 2025",
    year: "2025",
    month: "2",
    category: "ffaf6724-bafe-4cb4-ab5d-76cf000debda", // Media Replies
    categoryLabel: "Media Replies",
    imageType: "media-reply",
    title: "ICA's Response Regarding Queue Management Protocols During System Maintenance",
    url: "/news-and-publications/newsroom/media-reply/response-queue-management-system-maintenance",
    alt: "ICA Response on Queue Management",
    summary:
      "ICA addresses traveler enquiries regarding scheduled system maintenance windows, ensuring automated redundancy safeguards and manual contingency staffing are activated instantly.",
  },

  // --- 2024 ---
  {
    id: "23",
    date: "19 Dec 2024",
    year: "2024",
    month: "12",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "Launch of QR Code Clearance for Passenger Cars at Woodlands and Tuas Checkpoints",
    url: "/news-and-publications/newsroom/media-release/launch-qr-code-clearance-passenger-cars-land-checkpoints",
    alt: "Launch of QR Code Clearance for Passenger Cars",
    summary:
      "Motorists travelling by car through Woodlands and Tuas Checkpoints can now clear immigration using individual or group QR codes generated on the MyICA app without presenting physical passports.",
  },
  {
    id: "24",
    date: "14 Oct 2024",
    year: "2024",
    month: "10",
    category: "ffaf6724-bafe-4cb4-ab5d-76cf000debda", // Media Replies
    categoryLabel: "Media Replies",
    imageType: "media-reply",
    title: "ICA's Reply to Forum Letter on Border Verification and Multi-Agency Security Drills",
    url: "/news-and-publications/newsroom/media-reply/reply-forum-letter-border-verification-drills",
    alt: "ICA Reply on Border Verification Drills",
    summary:
      "ICA highlights the critical role of periodic inter-agency exercises conducted with the Singapore Police Force and SCDF to ensure swift response to critical incidents at checkpoint facilities.",
  },
  {
    id: "25",
    date: "25 Jul 2024",
    year: "2024",
    month: "7",
    category: "96d11869-00b1-4158-b40c-d7568a9331a1", // Advisories
    categoryLabel: "Advisories",
    imageType: "advisory",
    title: "Public Advisory on Surge in Phone Impersonation Scams Requesting Bail Transfers",
    url: "/news-and-publications/newsroom/media-release/advisory-surge-phone-impersonation-scams-bail-transfers",
    alt: "Public Advisory on Phone Scams",
    summary:
      "ICA and the Singapore Police Force warn of scams where victims receive calls from automated numbers alleging unpaid immigration bonds or criminal charges, coercing emergency fund transfers.",
  },
  {
    id: "26",
    date: "11 Jul 2024",
    year: "2024",
    month: "7",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "Immigration Act Amendments Commencing to Enhance Border Security and Automation",
    url: "/news-and-publications/newsroom/media-release/immigration-act-amendments-commencing",
    alt: "Immigration Act Amendments",
    summary:
      "Key provisions of the Immigration (Amendment) Act passed in Parliament come into operation, empowering ICA to mandate advance traveller data and facilitate biometric passport-free clearances.",
  },
  {
    id: "27",
    date: "22 Apr 2024",
    year: "2024",
    month: "4",
    category: "ffaf6724-bafe-4cb4-ab5d-76cf000debda", // Media Replies
    categoryLabel: "Media Replies",
    imageType: "media-reply",
    title: "ICA's Reply on Appointment Booking Lead Times at the ICA Building",
    url: "/news-and-publications/newsroom/media-reply/reply-appointment-booking-lead-times-ica-building",
    alt: "ICA Reply on Appointment Lead Times",
    summary:
      "ICA clarifies appointment allocation mechanics, urging public members to make full use of digital self-collection lockers and delivery services for passports and IC renewals.",
  },

  // --- 2023 ---
  {
    id: "28",
    date: "28 Nov 2023",
    year: "2023",
    month: "11",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "ICA Marks 20th Anniversary with Groundbreaking of the New ICA Services Centre",
    url: "/news-and-publications/newsroom/media-release/ica-marks-20th-anniversary-groundbreaking-new-services-centre",
    alt: "ICA Marks 20th Anniversary",
    summary:
      "ICA celebrated its 20th anniversary with the groundbreaking ceremony of the Integrated Services Centre, a next-generation smart facility set to transform physical document collection.",
  },
  {
    id: "29",
    date: "14 Aug 2023",
    year: "2023",
    month: "8",
    category: "e60f8972-fc7e-42d4-be27-1e58f07eb561", // Media Releases
    categoryLabel: "Media Releases",
    imageType: "media-release",
    title: "ICA Unveils Next-Generation Automated Clearance Lanes Across All Checkpoints",
    url: "/news-and-publications/newsroom/media-release/ica-unveils-next-generation-automated-clearance-lanes",
    alt: "Next-Generation Automated Clearance Lanes",
    summary:
      "ICA unveiled its new high-speed Automated Border Control System (ABCS) lanes featuring multi-modal biometrics that enable all eligible foreign visitors to clear automated gates without prior enrolment.",
  },
  {
    id: "30",
    date: "05 Jun 2023",
    year: "2023",
    month: "6",
    category: "ffaf6724-bafe-4cb4-ab5d-76cf000debda", // Media Replies
    categoryLabel: "Media Replies",
    imageType: "media-reply",
    title: "ICA's Clarification Regarding Identity Card Replacement Procedures and Timelines",
    url: "/news-and-publications/newsroom/media-reply/clarification-identity-card-replacement-procedures",
    alt: "Clarification on Identity Card Replacement",
    summary:
      "In response to community queries, ICA reiterates that citizens turning 30 and 55 can complete mandatory NRIC re-registration entirely online via Singpass with automated delivery options.",
  },
];

const YEARS = [
  { value: "", label: "All years" },
  { value: "2026", label: "2026" },
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "2016", label: "2016" },
  { value: "2015", label: "2015" },
  { value: "2014", label: "2014" },
  { value: "2013", label: "2013" },
  { value: "2012", label: "2012" },
  { value: "2011", label: "2011" },
  { value: "2010", label: "2010" },
  { value: "2009", label: "2009" },
  { value: "2008", label: "2008" },
  { value: "2007", label: "2007" },
  { value: "2006", label: "2006" },
  { value: "2005", label: "2005" },
  { value: "2004", label: "2004" },
  { value: "2003", label: "2003" },
  { value: "2002", label: "2002" },
];

const MONTHS = [
  { value: "0", label: "All months" },
  { value: "1", label: "January" },
  { value: "2", label: "February" },
  { value: "3", label: "March" },
  { value: "4", label: "April" },
  { value: "5", label: "May" },
  { value: "6", label: "June" },
  { value: "7", label: "July" },
  { value: "8", label: "August" },
  { value: "9", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const CATEGORIES = [
  { value: "", label: "All categories" },
  { value: "96d11869-00b1-4158-b40c-d7568a9331a1", label: "Advisories" },
  { value: "e60f8972-fc7e-42d4-be27-1e58f07eb561", label: "Media Releases" },
  { value: "ffaf6724-bafe-4cb4-ab5d-76cf000debda", label: "Media Replies" },
];

const PAGE_SIZE = 6;

export default function NewsroomPage({
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
  onNavigateToPublications,
  onNavigateToStatistics,
  onNavigateToPublicEducation,
  onNavigateToCheckStatus,
  onNavigate,
}) {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("0");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [appliedFilters, setAppliedFilters] = useState({
    year: "",
    month: "0",
    category: "",
    keyword: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [activeArticleModal, setActiveArticleModal] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);
  const [headerSearchQuery, setHeaderSearchQuery] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeArticleModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeArticleModal]);

  // Handle Escape key to dismiss modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeArticleModal) {
        setActiveArticleModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeArticleModal]);

  const handleFilterSubmit = (e) => {
    if (e) e.preventDefault();
    setIsFiltering(true);
    setAppliedFilters({
      year: selectedYear,
      month: selectedMonth,
      category: selectedCategory,
      keyword: searchKeyword,
    });
    setCurrentPage(1);
    setTimeout(() => {
      setIsFiltering(false);
    }, 150);
  };

  const handleResetFilters = () => {
    setSelectedYear("");
    setSelectedMonth("0");
    setSelectedCategory("");
    setSearchKeyword("");
    setAppliedFilters({
      year: "",
      month: "0",
      category: "",
      keyword: "",
    });
    setCurrentPage(1);
  };

  const filteredNews = useMemo(() => {
    return initialNewsData.filter((item) => {
      if (appliedFilters.year && item.year !== appliedFilters.year) {
        return false;
      }
      if (appliedFilters.month && appliedFilters.month !== "0" && item.month !== appliedFilters.month) {
        return false;
      }
      if (appliedFilters.category && item.category !== appliedFilters.category) {
        return false;
      }
      if (appliedFilters.keyword && appliedFilters.keyword.trim()) {
        const q = appliedFilters.keyword.toLowerCase().trim();
        const inTitle = (item.title || "").toLowerCase().includes(q);
        const inSummary = (item.summary || "").toLowerCase().includes(q);
        const inDate = (item.date || "").toLowerCase().includes(q);
        const inCat = (item.categoryLabel || "").toLowerCase().includes(q);
        if (!inTitle && !inSummary && !inDate && !inCat) return false;
      }
      return true;
    });
  }, [appliedFilters]);

  // Header search count helper
  const headerSearchMatches = useMemo(() => {
    if (!headerSearchQuery.trim()) return 0;
    const q = headerSearchQuery.toLowerCase();
    return initialNewsData.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q)
    ).length;
  }, [headerSearchQuery]);

  // Dynamic pagination calculations
  const totalPages = Math.max(1, Math.ceil(filteredNews.length / PAGE_SIZE));
  const currentPageNews = useMemo(() => {
    const startIdx = (currentPage - 1) * PAGE_SIZE;
    return filteredNews.slice(startIdx, startIdx + PAGE_SIZE);
  }, [filteredNews, currentPage]);

  const handlePageChange = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPages || pageNum === currentPage) return;
    setCurrentPage(pageNum);
    const listingEl = document.querySelector(".listing-results");
    if (listingEl) {
      listingEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBack = (e) => {
    if (e) e.preventDefault();
    if (activeArticleModal) {
      setActiveArticleModal(null);
      return;
    }
    if (window.history.length > 1) {
      window.history.back();
    } else if (onNavigateToCheckpoints) {
      onNavigateToCheckpoints();
    } else if (onNavigate) {
      onNavigate("checkpoints");
    } else {
      window.location.hash = "#checkpoints";
    }
  };

  const handleCardClick = (e, article) => {
    e.preventDefault();
    setActiveArticleModal(article);
  };

  const renderCardImage = (article) => {
    if (article.imageType === "cannabis") {
      return (
        <img
          src={cannabisSeizedImg}
          alt={article.alt}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.style.display = "none";
          }}
        />
      );
    }
    if (article.imageType === "contraband") {
      return <ContrabandGraphic title={article.title} uniqueId={article.id} />;
    }
    if (article.imageType === "advisory") {
      return <MediaReleaseGraphic label="Advisory" uniqueId={article.id} />;
    }
    if (article.imageType === "media-reply") {
      return <MediaReleaseGraphic label="Media Reply" uniqueId={article.id} />;
    }
    return <MediaReleaseGraphic label="Media Release" uniqueId={article.id} />;
  };

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
    else if (view === "publications" && onNavigateToPublications) onNavigateToPublications();
    else if (view === "statistics" && onNavigateToStatistics) onNavigateToStatistics();
    else if (view === "public-education" && onNavigateToPublicEducation) onNavigateToPublicEducation();
    else if (view === "checkstatus" && onNavigateToCheckStatus) onNavigateToCheckStatus();
    else if (onNavigate) onNavigate(view);
    else {
      window.location.hash = `#${view}`;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="newsroom-page-wrapper">
      <GovMasthead />
      <SiteHeader
        searchQuery={headerSearchQuery}
        setSearchQuery={setHeaderSearchQuery}
        totalMatches={headerSearchMatches}
        isSearching={headerSearchQuery.trim().length > 0}
        activeView="newsroom"
        onNavigate={handleGlobalNavigate}
      />
      <Breadcrumbs activeView="newsroom" onNavigate={handleGlobalNavigate} />
      <EServicesBar
        activeView="newsroom"
        onSelectService={(serviceId) => {
          if (serviceId === "checkstatus") handleGlobalNavigate("checkstatus");
          else if (serviceId === "identity" || serviceId === "documents") handleGlobalNavigate("documents");
          else if (serviceId === "enter-transit-depart") handleGlobalNavigate("enter-transit-depart");
          else if (serviceId === "reside") handleGlobalNavigate("reside");
          else if (serviceId === "eservicesandforms" || serviceId === "eservices") handleGlobalNavigate("eservicesandforms");
          else handleGlobalNavigate("checkpoints");
        }}
      />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content">
            <div className="container container--no-padding newsroom-container">
              
              {/* Header with Title and Official Back Button */}
              <h1 className="my-bread-crumbs-title newsroom-main-heading">ICA | Newsroom</h1>
              <a
                id="scroll-top-btn"
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <span className="sr-only">Back to top</span>
              </a>

              {/* News & Publications Sub-Navigation Bar */}
              <div className="news-pub-subnav-container">
                <nav className="news-pub-subnav" aria-label="News & Publications Navigation">
                  <button
                    type="button"
                    className="news-pub-subnav-btn active"
                    onClick={() => handleGlobalNavigate("newsroom")}
                  >
                    Newsroom
                  </button>
                  <button
                    type="button"
                    className="news-pub-subnav-btn"
                    onClick={() => handleGlobalNavigate("statistics")}
                  >
                    Statistics
                  </button>
                  <button
                    type="button"
                    className="news-pub-subnav-btn"
                    onClick={() => {
                      window.location.hash = "#ica-annuals";
                      handleGlobalNavigate("publications");
                    }}
                  >
                    ICA Annuals
                  </button>
                  <button
                    type="button"
                    className="news-pub-subnav-btn"
                    onClick={() => handleGlobalNavigate("public-education")}
                  >
                    Public Education
                  </button>
                  <button
                    type="button"
                    className="news-pub-subnav-btn"
                    onClick={() => {
                      window.location.hash = "#publications";
                      handleGlobalNavigate("publications");
                    }}
                  >
                    Publications
                  </button>
                </nav>
              </div>

              <div className="listing-content">
                <div className="back-button">
                  <button type="button" onClick={handleBack}>
                    Back
                  </button>
                </div>

                <div
                  className="listing listing--news"
                  data-endpoint="/ICAContentInterface/MediaReleasesList/FindMediaReleases"
                >
                  {/* Two-Line Filter Section matching official ICA markup with keyword search */}
                  <form className="listing-filter newsroom-filter-section" onSubmit={handleFilterSubmit}>
                    <div className="listing-filter__field-group">
                      {/* Line 1: Filter by Publish Date */}
                      <div className="filter-group">
                        <label htmlFor="year">Filter by Publish Date:</label>
                        <select
                          id="year"
                          name="year"
                          className="newsroom-select newsroom-select-year"
                          value={selectedYear}
                          onChange={(e) => {
                            const val = e.target.value;
                            setSelectedYear(val);
                            setAppliedFilters((prev) => ({ ...prev, year: val }));
                            setCurrentPage(1);
                          }}
                        >
                          {YEARS.map((y) => (
                            <option key={y.value} value={y.value}>
                              {y.label}
                            </option>
                          ))}
                        </select>
                        <label className="sr-only" htmlFor="month">
                          Month
                        </label>
                        <select
                          id="month"
                          name="month"
                          className="newsroom-select newsroom-select-month"
                          value={selectedMonth}
                          onChange={(e) => {
                            const val = e.target.value;
                            setSelectedMonth(val);
                            setAppliedFilters((prev) => ({ ...prev, month: val }));
                            setCurrentPage(1);
                          }}
                        >
                          {MONTHS.map((m) => (
                            <option key={m.value} value={m.value}>
                              {m.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Line 2: Filter by Category */}
                      <div className="filter-group">
                        <label htmlFor="category">Filter by Category:</label>
                        <select
                          id="category"
                          name="category"
                          className="newsroom-select newsroom-select-category"
                          value={selectedCategory}
                          onChange={(e) => {
                            const val = e.target.value;
                            setSelectedCategory(val);
                            setAppliedFilters((prev) => ({ ...prev, category: val }));
                            setCurrentPage(1);
                          }}
                        >
                          {CATEGORIES.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                              {cat.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Line 3: Filter by Keyword */}
                      <div className="filter-group">
                        <label htmlFor="news-keyword">Search Keyword:</label>
                        <div className="newsroom-search-input-wrap">
                          <input
                            id="news-keyword"
                            type="text"
                            className="newsroom-keyword-input"
                            placeholder="Search by title, topic, or keyword..."
                            value={searchKeyword}
                            onChange={(e) => {
                              const val = e.target.value;
                              setSearchKeyword(val);
                              setAppliedFilters((prev) => ({ ...prev, keyword: val }));
                              setCurrentPage(1);
                            }}
                          />
                          {searchKeyword && (
                            <button
                              type="button"
                              className="newsroom-keyword-clear"
                              onClick={() => {
                                setSearchKeyword("");
                                setAppliedFilters((prev) => ({ ...prev, keyword: "" }));
                                setCurrentPage(1);
                              }}
                              aria-label="Clear keyword search"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="listing-filter__footer">
                      <button type="submit" className="newsroom-filter-btn">
                        Filter
                      </button>
                      {(selectedYear !== "" || selectedMonth !== "0" || selectedCategory !== "" || searchKeyword !== "") && (
                        <button
                          type="button"
                          className="newsroom-reset-btn"
                          onClick={handleResetFilters}
                        >
                          Reset Filters
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Loading spinner state */}
                  {isFiltering && <div className="loader-small"></div>}

                  {/* Results Grid */}
                  <div className="listing-results">
                    {currentPageNews.length > 0 ? (
                      <div className="news-cards news-cards--news">
                        {currentPageNews.map((article) => (
                          <article key={article.id} className="news-article-card col-sm-6 col-md-4">
                            <a
                              href={article.url}
                              onClick={(e) => handleCardClick(e, article)}
                              title={article.title}
                            >
                              <div className="news-article-card__image">
                                {renderCardImage(article)}
                              </div>
                              <div className="news-article-card__text">
                                <time>{article.date}</time>
                                <div className="h3">{article.title}</div>
                                <span className="icon icon-arrow-right2" aria-hidden="true">
                                  <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                  </svg>
                                </span>
                              </div>
                            </a>
                          </article>
                        ))}
                      </div>
                    ) : (
                      <div className="No-records-found">
                        No records found. Please filter by publish date and/or category.
                      </div>
                    )}
                  </div>

                  {/* Dynamic Pagination matching official layout */}
                  {totalPages > 1 && (
                    <div className="listing__pagination">
                      <ul className="listing__pagination__list">
                        {/* Prev page */}
                        {currentPage > 1 && (
                          <li className="prev-page">
                            <a
                              href="#prev"
                              title="Previous page"
                              onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(currentPage - 1);
                              }}
                            >
                              «
                            </a>
                          </li>
                        )}

                        {/* Page numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                          <li key={pageNum} className={currentPage === pageNum ? "active" : ""}>
                            <a
                              href={`#page-${pageNum}`}
                              title={`Page ${pageNum}`}
                              onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(pageNum);
                              }}
                            >
                              {pageNum}
                            </a>
                          </li>
                        ))}

                        {/* Next page */}
                        {currentPage < totalPages && (
                          <li className="next-page">
                            <a
                              href="#next"
                              title="Next page"
                              onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(currentPage + 1);
                              }}
                            >
                              »
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ScrollToTop />
      </div>

      {/* Article Detail Modal */}
      {activeArticleModal && (
        <div
          className="newsroom-modal-backdrop"
          onClick={() => setActiveArticleModal(null)}
        >
          <div
            className="newsroom-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="newsroom-modal-header">
              <div>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: "700",
                    color: activeArticleModal.categoryLabel === "Advisories" ? "#d97706" : "#1c76d5",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {activeArticleModal.categoryLabel}
                </span>
              </div>
              <button
                className="newsroom-modal-close"
                onClick={() => setActiveArticleModal(null)}
                aria-label="Close dialog"
              >
                ×
              </button>
            </div>
            <div className="newsroom-modal-body">
              <div className="newsroom-modal-date">{activeArticleModal.date}</div>
              <h2 className="newsroom-modal-title">{activeArticleModal.title}</h2>
              <div
                style={{
                  width: "100%",
                  height: "240px",
                  marginBottom: "1.25rem",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                {renderCardImage(activeArticleModal)}
              </div>
              <div className="newsroom-modal-text">
                <p>{activeArticleModal.summary}</p>
                <div style={{ marginTop: "1.25rem", padding: "1rem", backgroundColor: "#f8f9fa", borderLeft: "4px solid #2e5b88", borderRadius: "3px" }}>
                  <p style={{ margin: 0, fontSize: "14px", color: "#444" }}>
                    <strong>Key Advice &amp; Official Notice:</strong> ICA reminds all travelers and residents to exercise diligence, conduct transactions through official channels at <strong>ica.gov.sg</strong>, and report border security offences or suspicious impersonation attempts immediately to the Police or ICA.
                  </p>
                </div>
                <div style={{ marginTop: "1.5rem", display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    className="newsroom-filter-btn"
                    onClick={() => setActiveArticleModal(null)}
                  >
                    Close Article
                  </button>
                  <button
                    type="button"
                    className="newsroom-filter-btn"
                    style={{
                      backgroundColor: "#f0f4f8",
                      color: "#2e5b88",
                      border: "1px solid #2e5b88",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setActiveArticleModal(null);
                      handleGlobalNavigate("newsroom");
                    }}
                  >
                    Back to Newsroom
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter onNavigate={onNavigate || onNavigateToCheckpoints} />
    </div>
  );
}
