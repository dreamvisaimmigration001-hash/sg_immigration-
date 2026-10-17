import React, { useState, useMemo } from "react";
import GovMasthead from "../GovMasthead";
import FAQSearch from "./FAQSearch";
import QuickLinks from "./QuickLinks";
import FAQCategories, { faqCategoriesList } from "./FAQCategories";
import FAQItem from "./FAQItem";
import AskGovFooter from "./AskGovFooter";
import AllAgenciesPage from "./AllAgenciesPage";
import { WavingHandGraphic } from "../AskGovWidget";
import "./FAQSection.css";

export const initialFAQArticles = [
  // 1. Passport
  {
    id: "faq-1",
    title: "What are the documents required for passport collection?",
    category: "passport",
    subtopic: "Passport Collection",
    updatedAgo: "1y ago",
    likes: 4289,
    avatarIndex: 0,
    plainText: "passport collection documents required physical nric singpass notification slip proxy appointment singpost ica building",
    content: (
      <div>
        <p>
          When collecting your new Singapore passport, you must present the following documents:
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", lineHeight: "1.7" }}>
          <li>Your current/previous physical Singapore Passport (which will be cancelled and returned to you).</li>
          <li>Your physical Singapore Identity Card (NRIC) or digital Singpass IC.</li>
          <li>Your collection notification slip or digital e-Appointment acknowledgement.</li>
        </ul>
        <p style={{ marginTop: "0.5rem" }}>
          If you have authorised a proxy to collect on your behalf at ICA Building, the proxy must be aged 21 or above and bring the signed Authorisation Form along with their original IC and your previous passport.
        </p>
      </div>
    ),
  },
  {
    id: "faq-5",
    title: "Can I still collect my passport at SingPost if I missed my appointment?",
    category: "passport",
    subtopic: "Passport Collection",
    updatedAgo: "1y ago",
    likes: 875,
    avatarIndex: 1,
    plainText: "missed appointment singpost passport collection grace period 4 working days ica building",
    content: (
      <div>
        <p>
          If you missed your scheduled passport collection appointment at your chosen SingPost branch, your passport will be retained at that branch for a grace period of <strong>up to 4 working days</strong>.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          You may walk in to that specific SingPost branch during its operating hours within those 4 working days to collect your passport. If it is not collected within the grace period, the passport will be returned to the ICA Services Centre (Level 3, ICA Building) for safe keeping.
        </p>
      </div>
    ),
  },
  {
    id: "faq-6",
    title: "My passport has less than 6 months validity. Can I still travel or renew it?",
    category: "passport",
    subtopic: "Passport Renewal",
    updatedAgo: "1y ago",
    likes: 3410,
    avatarIndex: 0,
    plainText: "passport validity 6 months renew online travel returning citizens entry myica passport e-service",
    content: (
      <div>
        <p>
          Most destination countries strictly mandate that foreign visitors must possess a passport with at least <strong>six (6) months' validity</strong> remaining beyond the date of intended departure.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          <strong>For Singapore Citizens:</strong>
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", lineHeight: "1.7" }}>
          <li>You can renew your passport online anytime via the <em>Passport e-Service</em> on MyICA.</li>
          <li>Singapore Citizens returning back home to Singapore are permitted entry even if their Singapore passport has less than 6 months validity.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "faq-p-lost",
    title: "What should I do if my Singapore passport is lost or damaged?",
    category: "passport",
    subtopic: "Damaged/Lost Passport",
    updatedAgo: "4mo ago",
    likes: 1980,
    avatarIndex: 2,
    plainText: "lost passport damaged replacement report online police report fee overseas embassy",
    content: (
      <div>
        <p>
          If your passport is lost or damaged:
        </p>
        <ol style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", lineHeight: "1.7" }}>
          <li>Report the loss immediately online via the <strong>Loss of Passport e-Service</strong> on MyICA to cancel it and prevent identity fraud.</li>
          <li>Apply for a replacement passport through MyICA. A prevailing loss fee applies (S$50 for first loss, S$100 for subsequent losses).</li>
          <li>If you are overseas, report to the local police and contact the nearest Singapore Overseas Mission for a Document of Identity (DOI).</li>
        </ol>
      </div>
    ),
  },

  // 2. SGAC & e-Pass
  {
    id: "faq-2",
    title: "When should I submit or apply for the SG Arrival Card (SGAC) with Electronic Health Declaration?",
    category: "sgac-epass",
    subtopic: "General",
    updatedAgo: "1y ago",
    likes: 2753,
    avatarIndex: 1,
    plainText: "sgac singapore arrival card electronic health declaration submission 3 days prior travel free",
    content: (
      <div>
        <p>
          All travellers (including Singapore Citizens, Permanent Residents, Long-Term Pass holders, and foreign visitors) should submit their <strong>SG Arrival Card with Electronic Health Declaration</strong> within <strong>three (3) days prior</strong> to their date of arrival in Singapore.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          For example, if you are arriving in Singapore on 30 June, you can submit your declaration starting from 28 June onwards. Submissions made earlier than 3 days will not be accepted by the system.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          SGAC submission is <strong>completely free</strong> through the official ICA website (<em>eservices.ica.gov.sg</em>) or the MyICA Mobile App.
        </p>
      </div>
    ),
  },
  {
    id: "faq-4",
    title: "Are there issues if I did not submit the SG Arrival Card (SGAC) before arriving to Singapore?",
    category: "sgac-epass",
    subtopic: "General",
    updatedAgo: "3y ago",
    likes: 754,
    avatarIndex: 3,
    plainText: "delay forgot sgac arrival card kiosks airport checkpoint boarding clearance",
    content: (
      <div>
        <p>
          Submitting the SG Arrival Card is mandatory for immigration clearance under Singapore border regulations.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          If you did not submit prior to boarding, you may experience delays at the checkpoint and will be directed to submit your declaration electronically via your smartphone or at self-service kiosks before being permitted to proceed through immigration clearance.
        </p>
      </div>
    ),
  },
  {
    id: "faq-epass-1",
    title: "How do I retrieve or verify my Electronic Visit Pass (e-Pass)?",
    category: "sgac-epass",
    subtopic: "Electronic Visit Pass (e-Pass)",
    updatedAgo: "7mo ago",
    likes: 1840,
    avatarIndex: 0,
    plainText: "epass electronic visit pass retrieve stamp email immigration status check online",
    content: (
      <div>
        <p>
          Physical passport endorsement stamps have been replaced by the <strong>Electronic Visit Pass (e-Pass)</strong>.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          Upon clearing immigration into Singapore, foreign visitors will receive their e-Pass sent to the email address declared in their SG Arrival Card submission. You can also retrieve your e-Pass anytime via the <em>e-Pass Enquiry Portal</em> on the ICA website using your Disembarkation/Embarkation (D/E) number or passport details.
        </p>
      </div>
    ),
  },

  // 3. Identity Card (IC)
  {
    id: "faq-3",
    title: "When do I need to report a change of address on my IC?",
    category: "ic",
    subtopic: "Change of Address",
    updatedAgo: "8mo ago",
    likes: 1541,
    avatarIndex: 2,
    plainText: "change of address ic pin sticker 28 days singpass moving residential local overseas",
    content: (
      <div>
        <p>
          Under the National Registration Act, all Singapore Citizens and Permanent Residents who have moved to a new local or overseas residential address must report the change within <strong>28 days</strong> of moving.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          <strong>Steps to change address online:</strong>
        </p>
        <ol style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", lineHeight: "1.7" }}>
          <li>Log in to the <em>Change of Address e-Service</em> using your Singpass.</li>
          <li>Enter your new residential address.</li>
          <li>A mail containing a unique 6-digit PIN will be dispatched to your new address within 3 to 5 working days.</li>
          <li>Log in again to verify the PIN, and you will receive a new address sticker by post to affix onto your physical IC.</li>
        </ol>
      </div>
    ),
  },
  {
    id: "faq-ic-rereg",
    title: "How do I complete IC re-registration at age 30 or 55?",
    category: "ic",
    subtopic: "Re-registration at 30/55 years old",
    updatedAgo: "5mo ago",
    likes: 2190,
    avatarIndex: 1,
    plainText: "ic re-registration age 30 55 years photo appointment singpass fee",
    content: (
      <div>
        <p>
          Singapore Citizens and Permanent Residents must re-register their IC within one year of reaching their 30th and 55th birthdays (i.e. before turning 31 or 56).
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          Submit your re-registration online via the <strong>IC e-Service</strong> on MyICA with a recent passport-sized digital photograph. A notification will be sent when your new card is ready for collection at ICA Building or designated SingPost outlets.
        </p>
      </div>
    ),
  },

  // 4. Visa
  {
    id: "faq-7",
    title: "How can I apply for an entry Visa into Singapore?",
    category: "visa",
    subtopic: "Application",
    updatedAgo: "6mo ago",
    likes: 2630,
    avatarIndex: 2,
    plainText: "apply visa entry singapore save singpass local sponsor authorized visa agent embassy 3 working days",
    content: (
      <div>
        <p>
          Foreign nationals holding travel documents issued by assessment level I or II countries/regions require a valid entry visa to enter Singapore.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          <strong>Application Methods:</strong>
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", lineHeight: "1.7" }}>
          <li><strong>Online via SAVE (Singpass):</strong> A local contact (Singapore Citizen or PR aged 21+) can submit the application on your behalf.</li>
          <li><strong>Authorised Visa Agent / Overseas Mission:</strong> Submit through an ICA-authorised visa partner or Singapore Embassy in your country of residence.</li>
        </ul>
        <p style={{ marginTop: "0.5rem" }}>
          Visa processing generally takes 3 working days (excluding submission day, weekends and public holidays).
        </p>
      </div>
    ),
  },
  {
    id: "faq-visa-processing",
    title: "What is the visa processing fee and validity period?",
    category: "visa",
    subtopic: "Visa Validity",
    updatedAgo: "4mo ago",
    likes: 1420,
    avatarIndex: 3,
    plainText: "visa fee validity 30 dollars non refundable single multiple entry validity duration",
    content: (
      <div>
        <p>
          A non-refundable processing fee of <strong>S$30</strong> is payable for each Singapore visa application.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          A Singapore visa is an entry pre-requisite and not an immigration pass. The validity of the visa refers to the period within which the holder may seek entry into Singapore. Upon arrival, the period of stay granted is determined by ICA border officers (typically 14 to 30 days).
        </p>
      </div>
    ),
  },

  // 5. QR Code Clearance
  {
    id: "faq-8",
    title: "Can I use the QR code for immigration clearance at Singapore Land Checkpoints?",
    category: "qr-clearance",
    subtopic: "General",
    updatedAgo: "5mo ago",
    likes: 4120,
    avatarIndex: 3,
    plainText: "qr code immigration clearance woodlands tuas land checkpoints myica mobile app group individual",
    content: (
      <div>
        <p>
          Yes! Travellers travelling by car, bus, or motorcycle across <strong>Woodlands and Tuas Checkpoints</strong> can generate an individual or group QR code via the <strong>MyICA Mobile App</strong> to clear immigration smoothly without presenting physical passports at the automated lanes.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          <strong>Key Highlights:</strong>
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", lineHeight: "1.7" }}>
          <li>Generate a single group QR code for up to 10 occupants in a passenger car.</li>
          <li>First-time foreign visitors must clear via manual counters before being eligible for QR code lanes on subsequent visits.</li>
          <li>Travellers must still carry physical passports in case secondary verification is required.</li>
        </ul>
      </div>
    ),
  },

  // 6. Citizenship / PR / LTVP
  {
    id: "faq-pr-1",
    title: "How do I apply for Singapore Permanent Residence (PR) online?",
    category: "citizenship-pr-ltvp",
    subtopic: "Permanent Residence (PR)",
    updatedAgo: "3mo ago",
    likes: 3105,
    avatarIndex: 0,
    plainText: "apply singapore permanent residence pr online singpass ica portal documents processing time",
    content: (
      <div>
        <p>
          All Permanent Residence applications must be submitted online using the <strong>e-Service on MyICA</strong>.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          Applicants must log in with Singpass (or be sponsored by a Singapore Citizen or PR). Prepare scanned copies of all required supporting documents (birth certificate, educational certificates, salary slips, tax notices). Processing time generally takes 4 to 6 months.
        </p>
      </div>
    ),
  },
  {
    id: "faq-ltvp-1",
    title: "Who is eligible to apply for a Long-Term Visit Pass (LTVP)?",
    category: "citizenship-pr-ltvp",
    subtopic: "LTVP/LTVP+",
    updatedAgo: "4mo ago",
    likes: 2450,
    avatarIndex: 1,
    plainText: "ltvp long term visit pass spouse child parents of singapore citizen permanent resident",
    content: (
      <div>
        <p>
          You may be eligible for a Long-Term Visit Pass (LTVP) if you are the:
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", lineHeight: "1.7" }}>
          <li>Spouse of a Singapore Citizen (SC) or Permanent Resident (PR).</li>
          <li>Unmarried child aged under 21 of an SC or PR.</li>
          <li>Parent of an SC or PR aged 21 and above.</li>
          <li>Mother or grandmother of a child studying in Singapore on a Student's Pass.</li>
        </ul>
      </div>
    ),
  },

  // 7. Student's Pass (STP)
  {
    id: "faq-stp-1",
    title: "How do I access or download my Digital Student's Pass (STP)?",
    category: "stp",
    subtopic: "Digital STP",
    updatedAgo: "2mo ago",
    likes: 1890,
    avatarIndex: 2,
    plainText: "student pass stp digital stp solar download pdf qr verification school",
    content: (
      <div>
        <p>
          ICA issues digital Student's Passes. Physical pass cards are no longer issued.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          Once your Student's Pass application is approved and formalities are completed, you can download your digital STP in PDF format or view it via the <em>FileSG platform</em> or MyICA. The digital STP contains an encrypted QR code for instantaneous verification by schools and authorities.
        </p>
      </div>
    ),
  },

  // 8. Completion of Formalities (COF)
  {
    id: "faq-cof-1",
    title: "How do I book an e-Appointment for Completion of Formalities (COF)?",
    category: "cof",
    subtopic: "General",
    updatedAgo: "5mo ago",
    likes: 1670,
    avatarIndex: 3,
    plainText: "completion of formalities cof appointment booking in principle approval ipa biometric iris fingerprint",
    content: (
      <div>
        <p>
          After receiving your In-Principle Approval (IPA) letter for PR, Citizenship, or LTVP:
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          Book an appointment through the <strong>e-Appointment e-Service</strong> on the ICA website. On the day of your appointment, bring all original documents requested in your IPA letter, your medical examination report, and present yourself at the designated ICA Services Centre for biometric registration (iris and fingerprint enrolment).
        </p>
      </div>
    ),
  },

  // 9. Re-Entry Permit (REP)
  {
    id: "faq-rep-1",
    title: "How do I renew my Re-Entry Permit (REP) as a Singapore Permanent Resident?",
    category: "pr-rep",
    subtopic: "Apply for/ Renew/ Transfer Re-Entry Permit (REP)",
    updatedAgo: "2mo ago",
    likes: 2980,
    avatarIndex: 0,
    plainText: "renew re-entry permit rep permanent resident travel overseas pr status online singpass 3 months",
    content: (
      <div>
        <p>
          A valid Re-Entry Permit (REP) is required whenever a Singapore PR travels out of Singapore. It allows you to retain your PR status while overseas.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          You should apply to renew your REP within <strong>three (3) months prior</strong> to its expiry date online via the <strong>REP e-Service</strong> on MyICA using your Singpass. Applications are usually processed within one working day.
        </p>
      </div>
    ),
  },

  // 10. Birth & Death Registration
  {
    id: "faq-bd-1",
    title: "How do I register the birth of a newborn baby in Singapore?",
    category: "birth-death",
    subtopic: "Birth Registration Process",
    updatedAgo: "6mo ago",
    likes: 1760,
    avatarIndex: 1,
    plainText: "birth registration newborn baby digital certificate life sg app hospital 42 days",
    content: (
      <div>
        <p>
          All births in Singapore must be registered within <strong>42 days</strong> of the birth date.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          Parents can register their child's birth online using the <strong>LifeSG App</strong>. Following registration, a digital Birth Certificate will be issued and available for download via the LifeSG and ICA portals. Physical birth certificates are no longer issued.
        </p>
      </div>
    ),
  },

  // 11. Short-Term Visit Pass (STVP) Extension
  {
    id: "faq-stvp-1",
    title: "How can I extend my Short-Term Visit Pass (STVP) in Singapore?",
    category: "stvp",
    subtopic: "Extension of STVP",
    updatedAgo: "3mo ago",
    likes: 2240,
    avatarIndex: 2,
    plainText: "extend short term visit pass stvp tourist visitor 30 days singpass extension online fee",
    content: (
      <div>
        <p>
          Foreign visitors seeking to extend their stay beyond the duration granted on their electronic Visit Pass (e-Pass) must submit an extension application online before their pass expires.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          Submit your application through the <strong>e-Service for Extension of Short-Term Visit Pass (e-XTEND)</strong> on the ICA website. A standard fee of S$40 applies if your stay is extended beyond 90 days from arrival.
        </p>
      </div>
    ),
  },

  // 12. Automated Clearance & Travellers
  {
    id: "faq-auto-1",
    title: "Who is eligible to use Automated Clearance (Special Automated Lanes) at Singapore checkpoints?",
    category: "auto-clearance",
    subtopic: "Passenger Hall",
    updatedAgo: "1mo ago",
    likes: 3890,
    avatarIndex: 3,
    plainText: "automated clearance biometric iris facial lanes passports eligible foreign visitors changi airport",
    content: (
      <div>
        <p>
          Under ICA's New Clearance Concept, automated lanes at Changi Airport and land checkpoints allow seamless biometric self-clearance using iris, facial, and fingerprint recognition.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginTop: "0.5rem", lineHeight: "1.7" }}>
          <li><strong>Singapore Citizens, PRs, and Long-Term Pass holders:</strong> Eligible for passport-less clearance at air and sea checkpoints.</li>
          <li><strong>Foreign Visitors:</strong> Enrolled automatically upon first entry after biometric verification at manual lanes, and eligible to use automated lanes for departure and future visits without prior registration.</li>
        </ul>
      </div>
    ),
  },
];

export default function FAQSection({
  onNavigateContact,
  onNavigateHome,
  onNavigateFeedback,
  onNavigateStatus,
  onNavigateCheckpoints,
  onNavigateReach,
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);
  const [openArticleIds, setOpenArticleIds] = useState({ "faq-1": true });
  const [likedArticles, setLikedArticles] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState("faq"); // "faq" or "agencies"

  // Rating widget state
  const [showRating, setShowRating] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  const handleToggleArticle = (id) => {
    setOpenArticleIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleToggleLike = (id) => {
    setLikedArticles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    setSelectedSubtopic(null);
    setSearchQuery("");
  };

  const handleToggleCategory = (catId) => {
    setExpandedCategory((prev) => (prev === catId ? null : catId));
  };

  const handleSelectSubtopic = (catId, subtopic) => {
    setSelectedCategory(catId);
    setSelectedSubtopic(subtopic);
    setSearchQuery("");
  };

  const handleRate = (stars) => {
    setUserRating(stars);
    setRatingSubmitted(true);
    setTimeout(() => {
      setShowRating(false);
    }, 2500);
  };

  // Filter FAQ items
  const filteredArticles = useMemo(() => {
    let list = initialFAQArticles;

    // Filter by category
    if (selectedCategory && selectedCategory !== "all") {
      list = list.filter((a) => a.category === selectedCategory);
    }

    // Filter by subtopic
    if (selectedSubtopic) {
      list = list.filter((a) => a.subtopic === selectedSubtopic);
    }

    // Filter by live search query across title, subtopic, and keywords/content
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          (a.subtopic && a.subtopic.toLowerCase().includes(q)) ||
          (a.plainText && a.plainText.toLowerCase().includes(q))
      );
    }

    return list;
  }, [selectedCategory, selectedSubtopic, searchQuery]);

  if (viewMode === "agencies") {
    return (
      <AllAgenciesPage
        onBackToFaq={() => {
          setViewMode("faq");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onNavigateHome={onNavigateHome || onNavigateCheckpoints}
        onNavigateContact={onNavigateContact}
        onNavigateFeedback={onNavigateFeedback}
      />
    );
  }

  return (
    <div className="faq-root-wrapper">
      {/* 1. Official Government Masthead & AskGov Navbar */}
      <GovMasthead />

      <div className="askgov-top-banner">
        <header className="askgov-navbar-row">
          <div className="askgov-logo-wrap">
            <svg
              className="askgov-bubble-icon"
              width="28"
              height="26"
              viewBox="0 0 24 22"
              fill="none"
              aria-hidden="true"
            >
              <path
                fill="#111827"
                d="M16.58 5.532c-.19-.065-.386-.121-.567-.172a9.566 9.566 0 0 0-1.283-.225 8.876 8.876 0 0 0-.945-.047h-.416A9.146 9.146 0 0 0 7.15 7.92a9.022 9.022 0 0 0-2.485 6.33v.307a.42.42 0 0 1-.36.438.43.43 0 0 1-.206-.02 12.46 12.46 0 0 1-3.983-2.341.42.42 0 0 1 .396-.703c.826.23 1.7.236 2.528.017a.282.282 0 0 0 .17-.397 7.63 7.63 0 0 1 1.731-9.577A7.742 7.742 0 0 1 10.3.151a7.772 7.772 0 0 1 3.412.966 7.713 7.713 0 0 1 2.618 2.38c.316.462.578.96.781 1.48a.423.423 0 0 1-.292.573.43.43 0 0 1-.24-.01v-.008Z"
              />
              <path
                fill="#0056c6"
                d="M20.833 17.954a.293.293 0 0 1-.184-.163.283.283 0 0 1 .008-.244 7.77 7.77 0 0 0 .353-6.944 7.873 7.873 0 0 0-2.152-2.87 8.016 8.016 0 0 0-3.216-1.636 8.079 8.079 0 0 0-4.783.272 7.956 7.956 0 0 0-3.76 2.926 7.756 7.756 0 0 0-.984 6.885 7.841 7.841 0 0 0 1.883 3.049 7.986 7.986 0 0 0 3.057 1.912c2.163.747 4.489.913 6.738.481a12.976 12.976 0 0 0 6.061-2.942.435.435 0 0 0 .093-.53.44.44 0 0 0-.502-.214 4.985 4.985 0 0 1-2.612.018Z"
              />
            </svg>
            <span className="askgov-header-brand-title">askgov</span>
          </div>

          <div className="askgov-menu-wrapper">
            <button
              type="button"
              className={isMenuOpen ? "askgov-close-btn" : "askgov-hamburger-btn"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>
              )}
            </button>

            {isMenuOpen && (
              <>
                <div className="askgov-menu-backdrop" onClick={() => setIsMenuOpen(false)} />
                <div className="askgov-dropdown-card" role="menu">
                  <button
                    type="button"
                    className="askgov-menu-pill-btn"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setViewMode("agencies");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <span>See all agencies</span>
                  </button>
                  <button
                    type="button"
                    className="askgov-menu-pill-btn"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (onNavigateHome) {
                        onNavigateHome();
                      } else {
                        window.location.hash = "#home";
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    <span>Visit agency website</span>
                    <svg
                      className="askgov-external-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </div>
              </>
            )}
          </div>
        </header>
      </div>

      {/* 2. Official Hero Banner matching screenshot */}
      <section className="faq-hero-container">
        <div className="faq-hero-inner">
          <div className="faq-hero-agency-badge">
            <span className="faq-hero-agency-icon">
              <img
                src="/assets/logo/ica_logo_new.svg"
                alt="ICA"
                className="faq-hero-ica-crest"
              />
            </span>
            <span className="faq-hero-agency-name">Immigration &amp; Checkpoints Authority</span>
          </div>

          <h1 className="faq-hero-greeting-heading">
            Hello! <WavingHandGraphic /> How can we help?
          </h1>

          <FAQSearch
            searchQuery={searchQuery}
            setSearchQuery={(val) => {
              setSearchQuery(val);
              if (val) {
                setSelectedCategory("all");
                setSelectedSubtopic(null);
              }
            }}
          />
        </div>

        {/* 3. Floating "Rate your experience" Box */}
        {showRating && (
          <aside className="askgov-floating-feedback-box" aria-label="Rate your experience">
            <button
              type="button"
              className="askgov-rating-close-btn"
              onClick={() => setShowRating(false)}
              aria-label="Close feedback widget"
            >
              ✕
            </button>

            <div className="askgov-rating-box-content">
              <span className="askgov-rating-heading">Rate your experience</span>

              {ratingSubmitted ? (
                <div className="askgov-rating-thank-you">
                  <span>Thank you for your feedback! ⭐</span>
                </div>
              ) : (
                <div className="askgov-rating-stars-row">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = (hoverRating || userRating) >= star;
                    return (
                      <button
                        key={star}
                        type="button"
                        className={`askgov-rating-star-btn ${isFilled ? "active" : ""}`}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => handleRate(star)}
                        aria-label={`Rate ${star} out of 5 stars`}
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill={isFilled ? "#1e40af" : "none"}
                          stroke="#1e40af"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </aside>
        )}
      </section>

      {/* 4. Quick Links Container */}
      <section className="faq-quicklinks-outer">
        <div className="faq-content-inner">
          <QuickLinks onSelectCategory={handleSelectCategory} />
        </div>
      </section>

      {/* 5. Main FAQ Browser Layout (Sidebar + Help Articles Feed) */}
      <div className="faq-content-inner">
        <div className="faq-browser-layout">
          {/* Left Sidebar: Topics Tree */}
          <FAQCategories
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            expandedCategory={expandedCategory}
            onToggleCategory={handleToggleCategory}
            onSelectSubtopic={handleSelectSubtopic}
          />

          {/* Right Column: Help Articles Feed */}
          <main className="askgov-articles-container" aria-label="Help Articles List">
            <div className="askgov-articles-header">
              <h2 className="askgov-help-articles-heading">Help articles</h2>
            </div>

            {filteredArticles.length > 0 ? (
              <div className="askgov-articles-list">
                {filteredArticles.map((article, idx) => (
                  <FAQItem
                    key={article.id}
                    index={idx}
                    article={article}
                    isOpen={!!openArticleIds[article.id]}
                    onToggle={() => handleToggleArticle(article.id)}
                    isLiked={!!likedArticles[article.id]}
                    onToggleLike={handleToggleLike}
                  />
                ))}
              </div>
            ) : (
              <div className="faq-no-results">
                <div className="faq-no-results-icon">🔍</div>
                <h4>No FAQs found matching your criteria</h4>
                <p>
                  Try adjusting your search terms or browse our category topics on the left.
                </p>
                <button
                  type="button"
                  className="faq-reset-filter-btn"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setSelectedSubtopic(null);
                  }}
                >
                  View all FAQs
                </button>
              </div>
            )}

            {/* Contact ICA Support Banner */}
            <div className="faq-need-help-banner">
              <div className="faq-need-help-content">
                <h4>Still can't find what you are looking for?</h4>
                <p>
                  Reach out to our customer service team via our online enquiry form, live agent, or hotline.
                </p>
              </div>
              {onNavigateContact && (
                <button
                  type="button"
                  className="faq-contact-btn"
                  onClick={onNavigateContact}
                >
                  Contact ICA
                </button>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Official AskGov Footer */}
      <AskGovFooter
        onNavigateHome={onNavigateHome || onNavigateCheckpoints}
        onNavigateFeedback={onNavigateFeedback}
      />
    </div>
  );
}
