import React, { useState } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import "./PublicEducationPage.css";

const PUBLIC_EDUCATION_TOPICS = [
  {
    id: "fake-websites",
    title: "Advisory on Fake or Misleading Websites",
    category: "Scams & Fraud",
    slug: "advisory-on-fake-or-misleading-websites",
    summary:
      "Public advisory warning members of the public against unofficial, fraudulent, or clone websites impersonating the Immigration & Checkpoints Authority (ICA).",
    description:
      "ICA has observed an increase in phishing and clone websites impersonating official ICA portals. These fraudulent sites often charge exorbitant 'service fees' for visa applications, SG Arrival Card submissions, or document renewals, or attempt to harvest sensitive personal and financial data. The public is strongly advised to exercise caution and only conduct transactions via the official ICA website (www.ica.gov.sg) and trusted .gov.sg domains.",
    keyPoints: [
      "Always verify that the website URL ends with '.gov.sg' before entering personal details or making payments.",
      "ICA does not endorse or authorize third-party commercial websites to handle visa or SGAC submissions on our behalf.",
      "Legitimate ICA e-Services are accessible directly via MyICA (eservices.ica.gov.sg).",
      "If you suspect you have fallen victim to a phishing website, lodge a police report immediately and monitor your banking accounts.",
    ],
    actionLink: "https://eservices.ica.gov.sg",
    actionLabel: "Access Official MyICA Portal",
  },
  {
    id: "anti-harbouring",
    title: "Anti-Harbouring",
    category: "Legal & Enforcement",
    slug: "anti-harbouring",
    summary:
      "Legal obligations and due diligence requirements for property owners, tenants, and employers to prevent harbouring immigration offenders.",
    description:
      "Under the Singapore Immigration Act (Chapter 133), harbouring or employing illegal immigrants or immigration offenders is a serious criminal offence. Homeowners, property agents, and employers are legally mandated to conduct three mandatory due diligence checks prior to leasing premises or hiring foreign nationals.",
    keyPoints: [
      "Check the tenant's/worker's original immigration pass (e.g. Work Pass, S Pass, Student's Pass, Dependant's Pass).",
      "Cross-check pass particulars with the individual's original passport details.",
      "Verify the validity of the pass with the issuing authority (ICA or MOM) via official online verification systems.",
      "Severe penalties include mandatory imprisonment of at least 6 months up to 2 years, and fines up to S$6,000 for harbouring offences.",
    ],
    actionLink: "https://www.ica.gov.sg",
    actionLabel: "Verify Pass Status",
  },
  {
    id: "commercial-entities",
    title: "Application for Long-Term Immigration Facilities Through Commercial Entities or Consultants",
    category: "Advisory",
    slug: "apply-long-term-immigration-facilities-through-commercial-entities",
    summary:
      "Clarification that ICA has no affiliation with commercial immigration agencies or consultants claiming guaranteed approvals.",
    description:
      "ICA does not endorse or have any affiliation with any third-party commercial entities, consultancies, or private agents that claim to assist with or guarantee approvals for Permanent Residence (PR), Singapore Citizenship, or Long-Term Visit Passes (LTVP). No external agency has preferential access to ICA or influence over application outcomes.",
    keyPoints: [
      "All immigration applications are evaluated holistically and objectively by ICA based on prevailing government policies.",
      "Engaging a paid consultant or intermediary does not increase the chances of approval.",
      "Applicants can easily complete and submit their own applications online through MyICA without third-party fees.",
      "Beware of consultancies demanding high non-refundable deposit fees with false promises of approval.",
    ],
    actionLink: "https://eservices.ica.gov.sg",
    actionLabel: "Apply Directly via MyICA",
  },
  {
    id: "iris-enrolment",
    title: "Enrolment of Iris Images",
    category: "Biometrics & Technology",
    slug: "iris-enrolment",
    summary:
      "Information on contactless iris and facial biometric enrolment for Singapore citizens and permanent residents.",
    description:
      "ICA utilizes iris and facial biometric technology as the primary biometric identifiers for immigration clearance at Singapore checkpoints. This contactless technology provides a more secure, hygienic, and seamless travel clearance experience compared to traditional fingerprint scanning.",
    keyPoints: [
      "Singapore Citizens and Permanent Residents can have their iris images enrolled during NRIC and Passport collections.",
      "Iris enrolment is safe, non-invasive, and completed within seconds using specialized infrared camera sensors.",
      "Do not wear colored, patterned, or cosmetic contact lenses during the enrolment session.",
      "Iris and facial recognition enable automated clearance at all air, land, and sea checkpoints.",
    ],
    actionLink: "https://eservices.ica.gov.sg/ibook",
    actionLabel: "Book Biometric Enrolment",
  },
  {
    id: "myica-mobile",
    title: "MyICA Mobile Application",
    category: "Digital Services",
    slug: "myica-mobile",
    summary:
      "Official mobile application providing quick and convenient access to key ICA e-Services on the go.",
    description:
      "The MyICA Mobile app is ICA's one-stop official mobile platform designed to make immigration services accessible, swift, and user-friendly for residents and overseas visitors. Available on iOS App Store and Google Play Store.",
    keyPoints: [
      "Submit SG Arrival Card (SGAC) with electronic health declaration within 3 days before arriving in Singapore.",
      "Save profile details for family members and repeat travel submissions with one tap.",
      "Access digital identity documents, birth/death certificates, and track application statuses in real time.",
      "Receive push notifications regarding passport collection readiness and pass validity renewals.",
    ],
    actionLink: "https://www.ica.gov.sg",
    actionLabel: "Learn More About MyICA App",
  },
  {
    id: "sgac-submission",
    title: "Public Advisory on the Submission of SG Arrival Card (SGAC)",
    category: "Travel & Arrival",
    slug: "public-advisory-on-the-submission-of-sg-arrival-card-(sgac)",
    summary:
      "Important travel advisory: The SG Arrival Card submission is completely free of charge on ICA's official platforms.",
    description:
      "All travellers arriving in Singapore (including Singapore residents) are required to submit the Singapore Arrival Card (SGAC) with electronic health declaration online prior to arrival. ICA emphasizes that the SGAC is completely FREE of charge. Beware of unauthorized commercial websites and middlemen charging fees ranging from S$30 to S$120.",
    keyPoints: [
      "Submit your SGAC online within three (3) days prior to your arrival date in Singapore.",
      "Submission is 100% FREE on the official ICA website (eservices.ica.gov.sg/sgarrivalcard) or MyICA Mobile app.",
      "Do not pay any fee to any third-party website claiming to submit or expedite your arrival card.",
      "Singapore residents (citizens, PRs, and long-term pass holders) arriving via land checkpoints are exempted from health declaration.",
    ],
    actionLink: "https://eservices.ica.gov.sg/sgarrivalcard",
    actionLabel: "Submit Free SG Arrival Card",
  },
  {
    id: "epass-rollout",
    title: "Roll out of e-Pass to All Checkpoints and Launch of ICA's e-Pass Enquiry Portal",
    category: "Digital Passes",
    slug: "roll-out-of-e-pass-to-all-checkpoints-and-launch-of-ica's-e-pass-enquiry-portal",
    summary:
      "Replacement of physical ink endorsement stamps with electronic Visit Passes (e-Pass) sent via email upon arrival.",
    description:
      "ICA has phased out physical ink endorsement stamps on foreign passports across all Singapore checkpoints. Foreign short-term visitors arriving in Singapore will instead receive an electronic Visit Pass (e-Pass) sent to their registered email address declared in their SG Arrival Card.",
    keyPoints: [
      "The e-Pass contains the visitor's allowed period of stay and the last day of permissible stay in Singapore.",
      "Visitors can check and retrieve their e-Pass details at any time using the self-service ICA e-Pass Enquiry Portal.",
      "Ensure you provide a valid email address when filling out your SG Arrival Card.",
      "Overstaying beyond the validity period stipulated in your e-Pass is an offence under the Singapore Immigration Act.",
    ],
    actionLink: "https://eservices.ica.gov.sg",
    actionLabel: "Check e-Pass Enquiry Portal",
  },
  {
    id: "special-pass",
    title: "Special Pass Card/e-Special Pass",
    category: "Passes & Permits",
    slug: "special-pass",
    summary:
      "Information on Special Pass issuance, terms and conditions, and reporting obligations for holders in Singapore.",
    description:
      "A Special Pass (either physical card or electronic e-Special Pass) is issued by ICA or MOM to regularize a foreign national's temporary presence in Singapore for specific authorized purposes (e.g. court attendance, ongoing investigation, medical treatment, or awaiting repatriation).",
    keyPoints: [
      "Special Pass holders are not permitted to engage in any employment, business, or vocation unless explicitly authorized.",
      "Holders must adhere strictly to the reporting dates and conditions specified by ICA.",
      "An e-Special Pass can be retrieved and presented digitally through secure ICA portals.",
      "Failure to depart Singapore prior to the expiry of the Special Pass constitutes an overstaying offence.",
    ],
    actionLink: "https://www.ica.gov.sg",
    actionLabel: "Enquire About Special Pass",
  },
  {
    id: "services-centre",
    title: "Visiting the ICA Services Centre",
    category: "Visiting & Appointment",
    slug: "ica_services_centre",
    summary:
      "Guidelines, e-appointment booking, peak period advisories, and document collection procedures at the ICA Building.",
    description:
      "The ICA Services Centre at 10 Kallang Road (next to Lavender MRT) serves the public for citizenship, permanent residence, passports, identity cards, and visit passes. To minimize waiting times, visitors must make an electronic appointment via e-Services before visiting in person.",
    keyPoints: [
      "Walk-in visits are strictly discouraged; please book an e-Appointment online via MyICA before coming.",
      "Utilize the 24/7 self-service iCollect kiosks and designated SingPost post offices for convenient passport and NRIC collections.",
      "Peak periods occur during Singapore school holidays, public holiday eves, and Mondays.",
      "Bring all required original identity and supporting documents as specified in your appointment confirmation.",
    ],
    actionLink: "https://eservices.ica.gov.sg/ibook",
    actionLabel: "Book e-Appointment",
  },
  {
    id: "visiting-singapore",
    title: "Visiting Singapore",
    category: "Travel & Arrival",
    slug: "visiting-singapore",
    summary:
      "General entry requirements, passport validity, visa checks, and automated clearance eligibility for inbound travelers.",
    description:
      "Singapore welcomes international visitors for tourism, transit, business, and social visits. Before traveling, all prospective visitors must ensure they meet Singapore's standard entry requirements to ensure a smooth arrival clearance at our checkpoints.",
    keyPoints: [
      "Hold a passport with a minimum validity of six (6) months beyond the arrival date in Singapore.",
      "Obtain an entry visa beforehand if you hold a passport from a visa-required country or region.",
      "Complete the mandatory electronic SG Arrival Card (SGAC) within 3 days prior to arrival.",
      "Eligible foreign visitors can use automated clearance lanes at Changi Airport and land checkpoints without prior manual registration.",
    ],
    actionLink: "https://eservices.ica.gov.sg",
    actionLabel: "Check Entry Requirements",
  },
];

export default function PublicEducationPage({
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
  onNavigate,
}) {
  const [activeModalTopic, setActiveModalTopic] = useState(null);

  const handleOpenTopic = (e, topic) => {
    e.preventDefault();
    setActiveModalTopic(topic);
  };

  const handleCloseModal = () => {
    setActiveModalTopic(null);
  };

  return (
    <div className="public-education-wrapper">
      <GovMasthead />
      <SiteHeader
        activeView="public-education"
        onNavigate={onNavigate || ((view) => {
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
        })}
      />

      <Breadcrumbs
        activeView="public-education"
        onNavigate={onNavigate || onNavigateToCheckpoints}
      />

      <EServicesBar
        onSelectService={(serviceId) => {
          if (serviceId === "identity" || serviceId === "documents") onNavigateToDocuments && onNavigateToDocuments();
          else if (serviceId === "enter-transit-depart") onNavigateToEnterTransitDepart && onNavigateToEnterTransitDepart();
          else if (serviceId === "reside") onNavigateToReside && onNavigateToReside();
          else if (serviceId === "eservicesandforms" || serviceId === "eservices") onNavigateToEServicesForms && onNavigateToEServicesForms();
          else onNavigateToCheckpoints && onNavigateToCheckpoints();
        }}
      />

      <div className="public-education-main" id="page-content">
        <div className="public-education-container">
          <h1 className="public-education-heading">Public Education</h1>
          <hr className="public-education-divider" />

          <div className="public-education-content">
            {PUBLIC_EDUCATION_TOPICS.map((topic) => (
              <p key={topic.id} className="public-education-link-item">
                <a
                  href={`/public-education/${topic.slug}`}
                  className="public-education-link"
                  onClick={(e) => handleOpenTopic(e, topic)}
                >
                  {topic.title}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Modal when clicking any topic */}
      {activeModalTopic && (
        <div
          className="pe-modal-backdrop"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="pe-modal-title"
        >
          <div className="pe-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pe-modal-header">
              <span className="pe-modal-badge">{activeModalTopic.category}</span>
              <button
                type="button"
                className="pe-modal-close"
                onClick={handleCloseModal}
                aria-label="Close dialog"
              >
                &times;
              </button>
            </div>
            <div className="pe-modal-body">
              <h2 id="pe-modal-title" className="pe-modal-title">
                {activeModalTopic.title}
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: "1.65", color: "#333333" }}>
                {activeModalTopic.description}
              </p>

              <div className="pe-modal-key-points">
                <h4>Key Takeaways &amp; Advisories</h4>
                <ul>
                  {activeModalTopic.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="pe-modal-actions">
                <button
                  type="button"
                  className="pe-modal-btn-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <a
                  href={activeModalTopic.actionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pe-modal-btn-primary"
                >
                  {activeModalTopic.actionLabel} &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <ScrollToTop />
      <SiteFooter onNavigate={onNavigate || onNavigateToCheckpoints} />
    </div>
  );
}
