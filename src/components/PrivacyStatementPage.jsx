import React, { useState, useEffect } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import "./PrivacyStatementPage.css";

export default function PrivacyStatementPage({
  onNavigate,
  onNavigateToCheckpoints,
  onNavigateToStatus,
  onNavigateToDocuments,
  onNavigateToEnterTransitDepart,
  onNavigateToReside,
  onNavigateToEServicesForms,
  onNavigateToFeedback,
}) {
  // All 10 accordions default to open (matching 'collapse-content panel show' in the official markup)
  const [openSections, setOpenSections] = useState({
    overview: true,
    collection: true,
    use: true,
    disclosure: true,
    transfer: true,
    retention: true,
    access: true,
    security: true,
    updates: true,
    contact: true,
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.title = "ICA | Privacy Statement";
    window.scrollTo({ top: 0, behavior: "smooth" });

    const handleScroll = () => {
      if (window.scrollY > 300) setShowScrollTop(true);
      else setShowScrollTop(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectService = (id) => {
    if (id === "identity" || id === "documents") {
      if (onNavigateToDocuments) onNavigateToDocuments();
      else if (onNavigate) onNavigate("documents");
    } else if (id === "enter-transit-depart") {
      if (onNavigateToEnterTransitDepart) onNavigateToEnterTransitDepart();
      else if (onNavigate) onNavigate("enter-transit-depart");
    } else if (id === "reside") {
      if (onNavigateToReside) onNavigateToReside();
      else if (onNavigate) onNavigate("reside");
    } else if (id === "eservicesandforms" || id === "eservices") {
      if (onNavigateToEServicesForms) onNavigateToEServicesForms();
      else if (onNavigate) onNavigate("eservicesandforms");
    } else if (id === "checkstatus") {
      if (onNavigateToStatus) onNavigateToStatus();
      else if (onNavigate) onNavigate("checkstatus");
    } else {
      if (onNavigateToCheckpoints) onNavigateToCheckpoints();
      else if (onNavigate) onNavigate("checkpoints");
    }
  };

  const handleFeedbackNavigation = (e) => {
    e.preventDefault();
    if (onNavigateToFeedback) onNavigateToFeedback();
    else if (onNavigate) onNavigate("feedback");
    else window.location.hash = "#feedback";
  };

  const PRIVACY_SECTIONS = [
    {
      id: "overview",
      title: "Overview",
      content: (
        <>
          <p><strong>Who we are and what we do</strong></p>
          <p>
            The Immigration &amp; Checkpoints Authority (ICA) is a Singapore Public Agency responsible for securing Singapore’s borders against the entry of undesirable people and cargo through land, air and sea checkpoints.
          </p>
          <p>
            ICA also administers immigration and registration services, such as issuing passports and Identity Cards to Singapore citizens, and immigration passes and permits to foreigners.
          </p>
          <p>
            As a security agency, we enforce laws and regulations relating to immigration and registration. This includes conducting inland enforcement operations against immigration offenders. We are a member of the Home Team under the Ministry of Home Affairs.
          </p>

          <p><strong>What information do we collect about you</strong></p>
          <p>
            In general, we collect information that is required for the performance of our statutory functions of maintaining border security and administering immigration and registration services. Such information includes but is not limited to your personal identifiers, travel document information, background information e.g. educational background, employment and family details, and contact information. In addition, we collect technical information from you when you use our digital services, and any other information you may submit when you or someone you have authorised on your behalf use our services in-person (such as submitting an application form at the ICA Building).
          </p>

          <p><strong>How will we use the information about you</strong></p>
          <p>In general, we use your information for the following purposes:</p>
          <ol>
            <li>Maintaining border security</li>
            <li>Administering immigration facilities</li>
            <li>National Registration</li>
          </ol>
          <p>
            To fulfil our statutory functions, we are authorised under Singapore law to collect, use or disclose Personal Data, including but not limited to the Constitution of the Republic of Singapore, Immigration Act 1959, Immigration Regulations, Passports Act 2007, Passports Regulations 2007, National Registration Act 1965, National Registration Regulations, Registration of Births and Deaths Act 2021, Registration of Births and Deaths Regulations 2022, Public Sector (Governance) Act 2018.
          </p>
          <p>
            We also use your information to serve you better, to provide you with our services for customer support, for law enforcement, for research and development, for legal proceedings and requirements and to support Whole-of-Government initiatives.
          </p>

          <p><strong>Who do we share your information with</strong></p>
          <p>We may share your information with:</p>
          <ol>
            <li>Other Government Agencies (Organs of State, Ministries, Departments and Statutory Boards)</li>
            <li>Non-Government Entities such as:
              <ol type="a">
                <li>Authorised third party service providers or agents to the extent necessary for them to carry out specific Government services</li>
                <li>Authorised representatives acting on behalf</li>
                <li>Next-of-kin</li>
                <li>Airport/Port operator</li>
                <li>Foreign authorities or international bodies</li>
              </ol>
            </li>
          </ol>

          <p><strong>How can you exercise your access or correction rights</strong></p>
          <p>
            Please contact ICA via the <a href="#feedback" onClick={handleFeedbackNavigation}>Feedback Form</a> to request for:
          </p>
          <ol>
            <li>more information on or access to your Personal Data which you have provided to us in the past; or</li>
            <li>a correction of error or omission in your Personal Data that you have provided to us in the past.</li>
          </ol>
          <p>
            We endeavour to assist with your requests unless exceptions or prohibitions apply. Please note that data privacy regulations/rules in Singapore do not provide individuals the right to request for data erasure or deletion. ICA, however, will cease to retain your personal data where retention is no longer necessary to fulfil the purpose(s) for which the personal data was collected for, or no longer necessary for official government purposes.
          </p>
        </>
      ),
    },
    {
      id: "collection",
      title: "Collection of Personal Data",
      content: (
        <>
          <p>We collect Personal Data directly from you, or from other sources.</p>
          <p><strong>1. Data we collect directly from you or authorised representatives acting on your behalf</strong></p>
          <p>
            The types of data that we collect depend on the circumstances of collection and the nature of the service requested/provided or transaction undertaken. They include:
          </p>
          <ol type="a">
            <li>
              <strong>Personal information</strong> that can be used to identify an individual, such as name, sex, date of birth, nationality, race, religion, dialect group, personal identification numbers (e.g. NRIC number, FIN), biometrics (fingerprints, facial image and iris image) including photograph-of-the-day (captured for facial authentication when an individual performs immigration clearance at our checkpoints) and photograph on the passport biodata page;
            </li>
            <li>
              <strong>Travel Document information</strong> such as travel document number, travel document type, country of issue, date of issue, date of expiry, including supporting documents with information such as photocopy of the passport biodata page;
            </li>
            <li>
              <strong>Contact information</strong> such as residential address, phone number, email address;
            </li>
            <li>
              <strong>Health or medical information</strong> such as vaccination status, health status, medical test result, information provided in letters and requests related to health or medical conditions;
            </li>
            <li>
              <strong>Educational history and qualifications</strong> such as name of educational institution, country of educational institution, level of qualifications, including supporting documents such as educational certificates (for application of immigration facilities such as Singapore Citizenship and Permanent Residence);
            </li>
            <li>
              <strong>Employment and income information</strong> such as employment status, name of employer/ company, position held, monthly salary, including supporting documents such as pay slips (for application of immigration facilities such as Singapore Citizenship and Permanent Residence);
            </li>
            <li>
              <strong>Entry and exit information</strong> during immigration clearance at our checkpoints, including trip details (e.g. submitted via the Singapore Arrival Card, where applicable);
            </li>
            <li>
              <strong>Activities in Singapore</strong> including intended activities, place of accommodation, employment in Singapore and other security questions that our immigration officers may enquire travellers at our checkpoints;
            </li>
            <li>
              <strong>Risk indicators</strong> such as past criminal offences and investigations;
            </li>
            <li>
              <strong>Transaction information</strong> related to the use of our services, including the type of services requested or provided; transaction details (such as application reference number, date and time, payment details) and appointment information;
            </li>
            <li>
              <strong>Behavioural information</strong> captured by sensors such as CCTVs and Body Worn Cameras (BWCs);
            </li>
            <li>
              <strong>Information required under our immigration and registration laws</strong> such as information provided to us in the reporting of births or deaths in Singapore in accordance with the requirements under the Registration of Births and Deaths Act 2021 or information required by us under the Immigration Act 1959 including declaration for past convictions to assess your eligibility for immigration facilities;
            </li>
            <li>
              <strong>Information you provide or information about your interactions with our staff</strong>, such as the details of any complaint cases, email inquiries, call details and other information relevant for our staff to assist you;
            </li>
            <li>
              <strong>Information you choose and/or consent to submit</strong> when you use our website, mobile application, smart kiosks or other online facilities, including, but not limited to:
              <ul>
                <li>information in the queries you enter into our chatbot, social media sites, website and mobile application;</li>
                <li>photographs, screenshots, audio or video recordings you submit to us in connection with a customer support request;</li>
              </ul>
            </li>
            <li>
              <strong>Data collected through cookies</strong> such as information relating to the use of our digital services. While this cookie can tell us when you enter our digital services and which pages you visit, it cannot read data off your hard disk. Not all cookies collect personal data and you may configure your preferences and settings to reject the use of cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may however, prevent you from taking full advantage of the digital service;
            </li>
            <li>
              <strong>Data collected through Analytics tags</strong> such as the effectiveness of functionalities, features and user preferences relating to our digital services.
            </li>
          </ol>
          <p>
            <strong>Note:</strong> Where you disclose Personal Data of another individual to us, you undertake to ensure that the individual whose Personal Data is supplied to us has, where required under applicable data protection laws, authorised the disclosure, is informed of, understands and acknowledges the provisions of this Privacy Statement.
          </p>

          <p><strong>2. Data we receive or collect from other sources</strong></p>
          <p>They include:</p>
          <ol type="a">
            <li>
              <strong>Advance passenger information</strong> which includes booking data, check-in data and flight manifests that we collect from airlines for flights arriving at or departing from Singapore.
            </li>
            <li>
              <strong>Data we receive or acquire from other Government Agencies</strong> for legitimate purposes including the following:
              <ul>
                <li>to improve the efficiency and effectiveness of ICA’s services to you (such as the authentication of an individual’s identity via SingPass and the pre-filling of electronic forms via MyInfo);</li>
                <li>for purposes in line with Section 4 of the Public Sector (Governance) Act 2018;</li>
                <li>for purposes in the public or national interest (such as to ensure border security);</li>
                <li>for evaluative purposes (such as to determine an applicant’s eligibility for immigration facilities);</li>
                <li>for enforcement, investigation or Court proceedings;</li>
                <li>to recover a debt owed by an individual to us or to pay to the individual a debt owed to him.</li>
              </ul>
            </li>
          </ol>

          <p><strong>3. Data we receive or acquire from Non-Government Entities</strong> for legitimate purposes including:</p>
          <ol type="a">
            <li>Employment reference checks with an individual’s former employer(s) or referees provided by the individual to determine an individual’s suitability for employment;</li>
            <li>Data we receive or acquire from Foreign Authorities to investigate suspected or potential contravention of Singapore’s immigration and registration laws, international laws, for the provision of mutual assistance in parallel or joint investigations into potential cross border contraventions of legislations, to respond to an emergency or a crisis, or for purposes that are in the vital interests of an individual or individuals, or in the public interest (including without limitation national interest);</li>
            <li>Individuals providing information of other individuals in connection with appeals, requests, enquiries, reporting of immigration offences and scams or information provided to us as required under our immigration and registration laws e.g. a certified medical practitioner providing information of an individual’s death under the Registration of Births and Deaths Act.</li>
          </ol>

          <p><strong>4. Publicly available sources</strong> such as publicly accessible social media accounts and information captured in public spaces.</p>
        </>
      ),
    },
    {
      id: "use",
      title: "Use of Personal Data",
      content: (
        <>
          <p>Specifically, we use data for:</p>
          <p><strong>1. Securing of Singapore’s borders</strong></p>
          <p>This includes but not limited to using data to:</p>
          <ol type="a">
            <li>Control entry of people and cargo according to immigration and customs laws and regulations. This includes working with other controlling agencies, such as the Health Sciences Authority and Singapore Customs, to control the importation or possession of prohibited, controlled or dutiable goods;</li>
            <li>Protect against threats to public security and safety;</li>
            <li>Detect and prevent crime. This includes surveillance and security monitoring at the checkpoints achieved through information collection by sensors such as CCTVs, BWCs, Automatic Number-Plate Recognition (ANPR) cameras augmented by video analytics capabilities to flag out anomalies such as intrusion attempts in real-time;</li>
            <li>Develop risk and fraud profiles, including performing advance risk assessment prior to the arrival of travellers in Singapore;</li>
            <li>Support removal, repatriation and detention of undesirable persons.</li>
          </ol>

          <p><strong>2. Provision of immigration and registration services</strong></p>
          <p>This includes, but not limited to, administering:</p>
          <ol type="a">
            <li>Application or renewal, for immigration facilities such as Student’s Pass (STP), Long Term Visit Pass (LTVP), Permanent Residence or Singapore Citizenship, including application assessment and review;</li>
            <li>Registration or re-registration of NRIC, replacement of lost or damaged NRIC, change of NRIC particulars;</li>
            <li>Change of residential address for NRIC holders and LTVP/ STP holders;</li>
            <li>Application for Singapore Passport, replacement of lost or damaged Singapore Passport, reporting of foreign passport lost in Singapore;</li>
            <li>Application for, renewal or transfer of re-entry permit;</li>
            <li>Birth and death registration and application for birth and death extracts;</li>
            <li>Application for other documents such as Certificate of Identity, change of particulars for Certificate of Identity, replacement of lost or damaged Citizenship Certificate, endorsement of Right of Entry (ROE);</li>
            <li>Application for overseas expedited immigration clearance such as APEC Business Travel Card and automated clearance such as the Singapore-United States of America Trusted Traveller Programme (TTP);</li>
            <li>Application for Singapore entry visa;</li>
            <li>Application for extension of Visit Pass;</li>
            <li>Enrolment for Automated Clearance Initiative.</li>
          </ol>
          <p><strong>Note:</strong> We may also use your data to engage with your sponsors or other relevant individuals such as your dependants for applications concerning them and/or you.</p>

          <p><strong>3. Law Enforcement</strong><br />As a security agency under the Ministry of Home Affairs, we use data and information to enforce laws and regulations relating to immigration and registration, including for investigation, prosecution and risk assessment purposes.</p>

          <p><strong>4. Whole-of-Government initiatives</strong><br />We use data to support inter-governmental programmes, functions or services where necessary and justified by a legal basis.</p>

          <p><strong>5. Legal proceedings and requirements</strong><br />We use data to investigate or address claims or disputes relating to the use of ICA’s services, to satisfy requirements under applicable laws, regulations, or operating licences or agreements, or pursuant to a court order.</p>

          <p><strong>6. Employment</strong><br />If you provide us with your Personal Data voluntarily through a job application portal, either in response to our recruitment advertisement or otherwise, we will use the Personal Data to determine your eligibility, suitability or qualifications for employment with us. We may also use publicly available information about you or information collected from other sources such as your former employer or referees for evaluative purpose.</p>

          <p><strong>7. Purposes of Legitimate Interests</strong></p>
          <ol type="a">
            <li><strong>Customer support:</strong> ICA uses the information we collect to provide customer support in-person, over the phone, via written correspondences such as letter, SMS or email, including the management of appointment bookings, issuance of notices and reminders and the support of appeal and review processes. We also use information (which may include call recordings and video footages) to investigate and address customer concerns and to monitor and improve our customer support responses and processes.</li>
            <li><strong>Policy Analysis, Review and Formulation:</strong> We use data for testing, research and analysis to improve service delivery and efficiency in executing our statutory functions. This includes making our services more convenient and easier to use, enhancing the safety and security of our services and systems and developing new services and features. We also use data for immigration and registration policy review e.g. policy review of the Singapore passport validity period, for incident or crisis management or to ensure business continuity e.g. traffic flow and crowd control management at our checkpoints.</li>
            <li><strong>Parliamentary or Media Questions:</strong> We use data to respond to questions raised in the Singapore Parliament or by the Media that are related to our statutory functions e.g. statistical analyses of PR applications.</li>
            <li><strong>Service Delivery:</strong> As it is in our legitimate interests to be responsive to you, to provide optimum service delivery and to ensure the proper functioning of our products, services and organisation, we use data to:
              <ul>
                <li>administer our website and mobile application, and for internal operations, including troubleshooting, data analysis, testing, research and statistical purposes to understand how our services are used;</li>
                <li>monitor and record calls for quality, training, analysis and other related purposes to improve service delivery;</li>
                <li>provide you with support services;</li>
                <li>send you service emails, such as appointment reminders;</li>
                <li>respond to your enquiries, requests or feedback;</li>
                <li>enforce our terms, conditions and policies;</li>
                <li>perform statistical analysis so that we can improve our service offering e.g. statistical analysis of traffic conditions and trends at our checkpoints to deploy strategies to minimise congestion and ensure smoother immigration clearance;</li>
                <li>personalise our services for you, including providing recommendations;</li>
                <li>improve the safety and reliability of our services. This includes detecting, preventing and responding to fraud, abuse, security risks and technical issues that could harm ICA, the Government, our users, or the public.</li>
              </ul>
            </li>
          </ol>
        </>
      ),
    },
    {
      id: "disclosure",
      title: "Disclosure or Sharing of Personal Data",
      content: (
        <>
          <p>We share Personal Data with third parties for purposes justified by legal bases and strictly on a need-to-know basis. ICA will never sell your personal data.</p>
          <p><strong>1. Other Government Agencies</strong></p>
          <p>
            We share Personal Data with other Government Agencies to facilitate and enhance service delivery to provide services that are easy, seamless and relevant for our citizens and businesses and to support the Government’s discharge of public functions.
          </p>
          <p><strong>Purposes</strong></p>
          <p>They include:</p>
          <ol type="a">
            <li>
              <strong>Service Planning and Delivery</strong> such as:
              <ul>
                <li>Administering Government scheme benefits (e.g. sharing data with the Ministry of Finance and CPF Board to administer the disbursement of GST vouchers);</li>
                <li>Delivering digital services (e.g. sharing data with GovTech to support the National Digital Identity / NDI initiative);</li>
                <li>Programme management (e.g. sharing data with IMDA to support the Seniors Go Digital Programme);</li>
                <li>Supporting operational needs (e.g. sharing data with Health Promotion Board to support letter dissemination to seniors for vaccination under the NAIS).</li>
              </ul>
            </li>
            <li><strong>Policy Analysis, Review and Formulation</strong> informed by data, including surveys, research or data analytics (e.g. sharing data with MOE to support education policy review).</li>
            <li><strong>Law Enforcement</strong> including crime prevention, investigation or fraud detection (e.g. sharing data with law enforcement agencies like Singapore Police Force).</li>
            <li><strong>Legal proceedings</strong> to produce information or documents in Court.</li>
            <li><strong>Public interests</strong> including protection of national security and public health (e.g. sharing data with MOH to contain public health threats).</li>
            <li><strong>Public accountability</strong> for government policies and public fund audits (e.g. sharing data with the Auditor-General’s Office).</li>
            <li><strong>Vital interests of individuals</strong> such as emergencies threatening life or safety, or contacting next-of-kin (e.g. sharing data with MSF under the Hague Convention).</li>
            <li><strong>Legitimate interests of the Singapore Government</strong> such as:
              <ul>
                <li>Securing public sector efficiencies under the “Tell Us Once” policy;</li>
                <li>Ensuring business continuity and national emergency planning;</li>
                <li>Accountable stewardship of public funds and debt recovery;</li>
                <li>Supporting Whole-of-Government approaches in discharging public sector functions.</li>
              </ul>
            </li>
            <li><strong>Archival or preservation of records:</strong> Transferring public records of archival value to the National Archives of Singapore.</li>
          </ol>

          <p><strong>2. Non-Government Entities (NGEs)</strong></p>
          <p>
            An NGE refers to an individual, company or incorporated body of persons other than a government agency. We take the disclosure of your Personal Data seriously and will only share it in a responsible manner with selected NGEs. We will NOT share your personal data with other NGEs without your consent except where such sharing complies with the law. For example, we may share your Personal Data with:
          </p>
          <ol type="a">
            <li><strong>Authorised service providers</strong> such as outsourced vendors and contractors;</li>
            <li><strong>Partners</strong> (such as Changi Airport Group) to improve efficiency, security and passenger flow at the airports;</li>
            <li><strong>Individuals authorised to act on behalf of another</strong> (such as power of attorney or court orders);</li>
            <li><strong>Next-of-kin</strong>, where necessary in the vital interests of an injured, ill or deceased individual;</li>
            <li><strong>Foreign authorities or international task forces</strong> to fight transnational crime or assist overseas Singaporeans in a crisis.</li>
          </ol>
        </>
      ),
    },
    {
      id: "transfer",
      title: "Transfer of Personal Data Overseas",
      content: (
        <>
          <p>Our data storage facilities are in Singapore. We do not transfer Personal Data overseas unless in the following circumstances:</p>
          <ol type="a">
            <li>The data transfer is necessary in the vital interests of individuals or in the national interest, with reasonable steps taken to ensure it will not be misused; or</li>
            <li>The overseas recipient is bound by legally enforceable obligations or standard of protection comparable to the Singapore Government’s Instruction Manual; or</li>
            <li>You consent to the transfer after being informed about protection standards in the destination country; or</li>
            <li>The transfer is reasonably necessary for the conclusion or performance of a contract between ICA and you (deemed consent by contractual necessity); or</li>
            <li>The Personal Data is publicly available in Singapore.</li>
          </ol>
        </>
      ),
    },
    {
      id: "retention",
      title: "Retention of Personal Data",
      content: (
        <>
          <p>ICA retains your Personal Data for as long as required:</p>
          <ol type="a">
            <li>under any relevant legislation requiring data to be retained;</li>
            <li>to fulfil the purpose for which it was collected; and/or</li>
            <li>for official government purposes.</li>
          </ol>
        </>
      ),
    },
    {
      id: "access",
      title: "Access and Correction",
      content: (
        <>
          <p>
            If you would like to request for access to your Personal Data which you have earlier provided to ICA or information about the ways in which the Personal Data you have provided has been used or disclosed by ICA, please use the <a href="#feedback" onClick={handleFeedbackNavigation}>Feedback Form</a>.
          </p>
          <p>
            ICA may charge an access fee to cover the reasonable cost of retrieving the information and supplying it to you. We may deny your request for access to Personal Data in accordance with the Government Instruction Manual if certain exceptions apply.
          </p>
          <p>
            We take reasonable efforts to ensure that the Personal Data ICA collects is accurate and complete. For your convenience, we may also display to you or auto populate data you had previously supplied us or other Government Agencies. To assist ICA in keeping its records up-to-date, it is important that you inform ICA of any changes to your Personal Data via ICA’s digital services or in writing. If you would like to correct any inaccuracies in your Personal Data, please use the <a href="#feedback" onClick={handleFeedbackNavigation}>Feedback Form</a>. To report change of residential address, please use the “e-Services and Forms” service on ICA’s website.
          </p>
          <p>
            Please note that data privacy regulations/rules in Singapore do not provide individuals the right to request for data erasure or deletion. ICA, however, will cease to retain your personal data where retention is no longer necessary to fulfil the purpose(s) for which the personal data was collected for, or no longer necessary for official government purposes.
          </p>
        </>
      ),
    },
    {
      id: "security",
      title: "Security Safeguards",
      content: (
        <>
          <p><strong>General</strong></p>
          <p>
            ICA takes reasonable technical, physical and organisational security measures to ensure that your Personal Data is protected. This includes measures to prevent Personal Data from being lost, used or accessed in an unauthorised way. We limit access to your Personal Data to our employees on a need-to-know basis. Those processing your Personal Data will only do so in an authorised manner and are required to treat your information with confidentiality. Our data security measures are guided by the Singapore Government’s Instruction Manual on Infocomm Technology &amp; Smart Systems Management.
          </p>
          <p>
            Our authorised Third Parties are required to comply with data security requirements to safeguard data in accordance with the Singapore Government’s Third-Party Management Framework.
          </p>
          <p>
            Our digital services may contain links to non-Government digital services or websites for your convenience and information. If you follow a link to any of these websites, please note that these websites have their own privacy practices. We do not accept any responsibility or liability for your use of these digital services or websites, and we encourage you to review the privacy notices of these digital services or websites before use.
          </p>

          <p><strong>Biometrics</strong></p>
          <p>
            Layers of security measures are in place to protect your biometric data. They include technical measures such as encryption and system access controls to ensure only authorised users can access the databases. Administrative controls in the form of audit checks are in place to ensure security compliance.
          </p>
          <p>
            The use of biometrics also adheres strictly to the data minimisation principle, where the granularity of biometric data needed to achieve the purpose of a use case is carefully considered before deployment. This means that the use of biometric templates (which are strings of codes or compact representations of the original, raw biometrics which cannot be reverse-engineered to the raw biometric form) are always prioritised over the use of raw biometrics, where sufficient for the use case.
          </p>
          <p>
            ICA will only collect or use your biometrics where there is a legal basis for doing so (e.g. to fulfil a statutory function authorised under law). For more information, you may refer to Sections 1 and 2 of this Privacy Statement on the Collection and Use of Personal Data.
          </p>
        </>
      ),
    },
    {
      id: "updates",
      title: "Updates to this Privacy Statement",
      content: (
        <p>
          We may amend this Privacy Statement from time to time. The current version of the Privacy Statement will be accessible on our website and mobile application; and date stamped at the bottom of the page so that you are aware of when the Privacy Statement was last updated. Please review this Privacy Statement when you use our website, app or other services.
        </p>
      ),
    },
    {
      id: "contact",
      title: "Contact Us",
      content: (
        <p>
          If you have feedback, enquiries, or requests relating to this Privacy Statement, please contact ICA via the <a href="#feedback" onClick={handleFeedbackNavigation}>Feedback Form</a>.
        </p>
      ),
    },
  ];

  return (
    <div className="site-wrapper privacy-statement-page-wrapper">
      <GovMasthead />

      <SiteHeader
        activeView="privacy-statement"
        onNavigate={onNavigate}
      />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content">
            {/* Breadcrumb Navigation: Home > Privacy Statement */}
            <Breadcrumbs
              activeView="privacy-statement"
              onNavigate={onNavigate}
            />

            {/* Horizontal e-Services Sidebar / Navigation Bar */}
            <EServicesBar
              activeView="privacy-statement"
              onSelectService={handleSelectService}
            />

            <div className="container container--no-padding">
              {/* Page Title */}
              <div className="privacy-page-header">
                <h1 className="privacy-main-heading">
                  <span id="Main_TEA44200C001_Col01">Privacy Statement</span>
                </h1>
                <div style={{ paddingBottom: "1rem" }} />
                <hr className="privacy-main-divider" />
              </div>

              {/* Quicklinks Navigation Bar (matches official layout, non-clickable per site policy) */}
              <nav
                className="section-nav sticky"
                id="quicklinks-section"
                aria-label="Privacy Statement Quicklinks"
              >
                {PRIVACY_SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    className="quicklinks-item"
                    disabled
                    tabIndex={-1}
                    title={sec.title}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>

              {/* Introductory Article */}
              <div className="standard-content privacy-standard-content">
                <div className="privacy-intro-article">
                  <p>
                    The Immigration &amp; Checkpoints Authority (“<strong>ICA</strong>”) is committed to protecting your Personal Data. The words “<strong>we</strong>”, “<strong>us</strong>” and “<strong>our</strong>” shall refer to ICA. This privacy statement (“<strong>Privacy Statement</strong>”) outlines how ICA collects, uses and discloses Personal Data and our privacy-preserving practices. The Privacy Statement applies to:
                  </p>
                  <ol>
                    <li>Users of ICA’s services. These include both digital and non-digital services.</li>
                    <li>Individuals who come into contact with ICA such as in the execution of ICA’s statutory functions.</li>
                  </ol>
                  <p>
                    Personal Data refers to data, whether true or not, about an individual who can be identified from that data, or from that data and other information to which ICA has or is likely to have access. We use your Personal Data in line with all applicable laws.
                  </p>
                  <p>
                    By continuing to use our services, you acknowledge that you have read and understood this Privacy Statement and agree to the collection, use and disclosure of your Personal Data in accordance with this Privacy Statement. We reserve the right to modify or supplement the Privacy Statement at our discretion and at any time. Your continued use of our digital and non-digital services or interactions with us following the posting of any modification or supplement will constitute your acceptance of such modification or supplement.
                  </p>
                </div>

                {/* 10 Accordion Sections */}
                {PRIVACY_SECTIONS.map((sec) => {
                  const isOpen = !!openSections[sec.id];
                  return (
                    <div className="privacy-collapse-wrapper" key={sec.id} id={sec.id}>
                      <button
                        type="button"
                        className={`privacy-collapse-title accordion ${isOpen ? "active" : ""}`}
                        onClick={() => toggleSection(sec.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{sec.title}</span>
                        <svg
                          className="privacy-chevron-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>

                      {isOpen && (
                        <div className="privacy-collapse-content panel show">
                          {sec.content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          type="button"
          className="privacy-scroll-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}

      {/* Site Footer */}
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
