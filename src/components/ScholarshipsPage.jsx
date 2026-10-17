import React, { useEffect, useState } from 'react';
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import './ScholarshipsPage.css';

export default function ScholarshipsPage({
  onNavigateHome,
  onNavigateToCheckpoints,
  onNavigateContact,
  onNavigateStatus,
  onNavigateFaqs,
  onNavigateToReach,
  onNavigateToVisionMissionValues,
  onNavigateToOurPeople,
  onNavigateToAwardsAccolades,
  onNavigateToOurServiceCommitment,
  onNavigateToNewsroom,
  onNavigateToPublications,
  onNavigateToStatistics,
  onNavigateToPublicEducation,
  onNavigateToDocuments,
  onNavigateToEnterTransitDepart,
  onNavigateToReside,
  onNavigateToEServicesForms,
  onNavigateToJoinUs,
  onNavigate,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ICA | Career | Scholarships, Sponsorships & Internships";
  }, []);

  // Accordion open/close state: Open all by default so no scholarship or sponsorship info is hidden
  const [openAccordions, setOpenAccordions] = useState({
    'mha-scholarship': true,
    'mha-sponsorship': true,
    'internship': true,
    'fulltime-studies': true,
    'parttime-studies': true,
  });

  const toggleAccordion = (id) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleNavClick = (e, viewName) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(viewName);
    } else {
      window.location.hash = "#" + viewName;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="scholarships-page-root">
      <GovMasthead />

      <SiteHeader
        activeView="scholarships"
        onNavigate={(view) => {
          if (onNavigate) onNavigate(view);
          else {
            window.location.hash = "#" + view;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      />

      <Breadcrumbs activeView="scholarships" onNavigate={onNavigate} />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content page-content--no-side-padding">
            <div className="container-ica-career--no-padding">
              <div className="career-container">
                <div className="scholarship-main-content">
                  
                  {/* Hero Banner with angled corners */}
                  <div className="banner-image scholarship-page">
                    <div className="banner-image__image">
                      <picture>
                        <source
                          media="(max-width: 767px)"
                          srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-banners/scholarship_ica_mobile_390x656.jpg?sfvrsn=b5f1cc5c_2"
                        />
                        <source
                          media="(min-width: 768px)"
                          srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-banners/scholarship_website_1440x850.jpg?sfvrsn=bdc40c6f_2"
                        />
                        <img
                          src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-banners/scholarship_website_1440x850.jpg?sfvrsn=bdc40c6f_2"
                          alt="Scholarships, Sponsorships & Internships"
                          className="scholarship-hero-img"
                        />
                      </picture>
                    </div>

                    <div className="banner-image__text">
                      <span className="banner-image__text--blue">Scholarships,</span>
                      <span className="banner-image__text--blue banner-image__text--indent">Sponsorships</span>
                      <span className="banner-image__text--red">&amp; Internships</span>
                    </div>

                    <div className="banner-image__corner-template">
                      <svg viewBox="0 0 400 300" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className="corner-template-svg">
                        {/* Top diagonal Navy Stripe */}
                        <polygon points="110,0 160,0 270,90 230,90" fill="#101c44" />
                        {/* Red Corner Graphic (Top ribbon + right ribbon frame) */}
                        <polygon points="180,0 400,0 400,220 355,220 355,65 245,65" fill="#db0011" />
                        {/* Lower Navy diagonal stripe */}
                        <polygon points="400,210 400,255 355,295 355,260" fill="#101c44" />
                      </svg>
                    </div>
                  </div>

                  {/* Intro Title & Description */}
                  <div className="title-text intro-title-text">
                    <div className="careers">
                      <div className="title-text__title">
                        <h1 className="bold big">
                          For the bright and passionate,<br />
                          embark on a fulfilling career with us.
                        </h1>
                      </div>
                    </div>
                    <div className="title-text__text">
                      <p>
                        Scholars under the MHA Uniformed Scholarship with ICA play a crucial role<br />
                        in safeguarding Singapore’s safety and security.<br />
                        Apply for the MHA Uniformed Scholarship for a dynamic and fulfilling career with us.
                      </p>
                      <p>
                        For those aspiring to upgrade their skills and knowledge, there are also Sponsorships for higher education for<br />
                        Nitec and Polytechnic students with paid tuition fees, as well as the Beyond Borders Internship Programme.<br />
                        Apply for our Sponsorships and Internship programmes for a dynamic and insightful journey with us.
                      </p>
                    </div>
                  </div>

                  {/* SECTION 1: FOR STUDENTS */}
                  <div className="shaped-title-wrapper">
                    <div className="shaped-title-container">
                      <div className="shaped-title-red-frame"></div>
                      <div className="shaped-title-box">
                        <h2 className="shaped-title-text">For Students</h2>
                      </div>
                    </div>
                  </div>

                  {/* 1. MHA Uniformed Scholarship */}
                  <div className="title-text scholarship-heading-section">
                    <div className="careers">
                      <div className="title-text__title">
                        <h2 className="bold big">
                          MHA Uniformed Scholarship
                        </h2>
                      </div>
                    </div>
                    <div className="title-text__text">
                      <p>
                        The Ministry of Home Affairs (MHA) Uniformed Scholarship is offered to highly motivated individuals who are passionate about safeguarding Singapore's safety and security.
                      </p>
                    </div>
                    <div className="center apply-btn-container">
                      <a
                        className="button button__apply-now"
                        href="#home"
                        onClick={(e) => handleNavClick(e, 'home')}
                      >
                        <p>Apply Now</p>
                      </a>
                    </div>
                  </div>

                  {/* Accordion 1: MHA Uniformed Scholarship (ICA) */}
                  <div className="accordion-item">
                    <div className="collapse-wrapper">
                      <button
                        type="button"
                        className={`collapse-title accordion ${openAccordions['mha-scholarship'] ? 'active' : ''}`}
                        onClick={() => toggleAccordion('mha-scholarship')}
                        aria-expanded={openAccordions['mha-scholarship']}
                      >
                        <span className="accordion-title-label">MHA Uniformed Scholarship (ICA)</span>
                        <span className="accordion-indicator">{openAccordions['mha-scholarship'] ? '−' : '+'}</span>
                      </button>

                      {openAccordions['mha-scholarship'] && (
                        <div className="collapse-content panel">
                          <p>
                            As an ICA Scholar, your career track will lead you to the role of an ICA Inspector, where you will be working at the forefront to secure our borders. Your responsibilities will include enforcing laws and managing the overall operations at ICA’s checkpoints and work units.
                          </p>

                          <p><strong>Eligibility</strong></p>
                          <ul className="scholarship-bullet-list">
                            <li>Singapore Citizen or SPR who is intending to take up citizenship</li>
                            <li>Have strong leadership qualities and potential</li>
                            <li>Possess strong interest in safeguarding the safety and security of Singapore</li>
                            <li>Have good academic and co-curricular activities (CCAs) records</li>
                            <li>Have a GCE A-Levels, International Baccalaureate, Polytechnic, NUS High School, or other high school diploma/certificate</li>
                            <li>
                              Current undergraduate students (not in final year of studies) may also apply.{' '}
                              <a
                                href="#home"
                                onClick={(e) => handleNavClick(e, 'home')}
                                className="external-link-inline"
                              >
                                Click here
                              </a>{' '}
                              for more details on a mid-term scholarship.
                            </li>
                          </ul>

                          <p><strong>Course of Study</strong></p>
                          <ul className="scholarship-bullet-list">
                            <li>
                              Most disciplines (except Medicine, Dentistry &amp; Architecture)<br />
                              <em>* Applicants intending to pursue a degree in Law will not be called to the bar</em>
                            </li>
                          </ul>

                          <p><strong>Value of Award</strong></p>
                          <ul className="scholarship-bullet-list">
                            <li>Tuition and other approved fees</li>
                            <li>Monthly overseas or local maintenance allowance (including accommodation)</li>
                            <li>Pre-studies allowance e.g. settling-in, warm clothing, computer</li>
                            <li>Vacation attachment programme</li>
                            <li>Sponsored return economy class airfare <em>(if studying overseas)</em></li>
                            <li>Sponsorship for university exchange programme and post-graduate degree <em>(if requirements are met)</em></li>
                          </ul>

                          <p><strong>Bond Period</strong></p>
                          <p>The bond period starts on the day Scholarship recipients assume official duty after completing their studies.</p>
                          <ul className="scholarship-bullet-list">
                            <li>4 years for local studies</li>
                            <li>5 years for studies in non-English speaking countries</li>
                            <li>6 years for studies in English speaking countries</li>
                          </ul>

                          <p><strong>Scholarship Tiers</strong></p>
                          <p>Applicants may be offered the following Scholarship tiers by the MHA Scholarship Board:</p>
                          <p className="scholarship-tier-names">
                            Singapore Government Scholarship (SGS), Local Merit Scholarship (LMS), Home Team Local Study Award (HTLSA)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 2. MHA Uniformed Sponsorship */}
                  <div className="title-text scholarship-heading-section">
                    <div className="careers">
                      <div className="title-text__title">
                        <h2 className="bold big">
                          MHA Uniformed Sponsorship
                        </h2>
                      </div>
                    </div>
                    <div className="title-text__text">
                      <p>
                        The Home Team Diploma and ITE Sponsorships are awarded to polytechnic and ITE students who aspire to build an impactful career in border security and immigration control with ICA upon graduation.
                      </p>
                    </div>
                    <div className="center apply-btn-container">
                      <a
                        className="button button__apply-now"
                        href="#home"
                        onClick={(e) => handleNavClick(e, 'home')}
                      >
                        <p>Apply for Sponsorship</p>
                      </a>
                    </div>
                  </div>

                  {/* Accordion 2: Home Team Diploma & ITE Sponsorship (ICA) */}
                  <div className="accordion-item">
                    <div className="collapse-wrapper">
                      <button
                        type="button"
                        className={`collapse-title accordion ${openAccordions['mha-sponsorship'] ? 'active' : ''}`}
                        onClick={() => toggleAccordion('mha-sponsorship')}
                        aria-expanded={openAccordions['mha-sponsorship']}
                      >
                        <span className="accordion-title-label">Home Team Diploma &amp; ITE Sponsorship (ICA)</span>
                        <span className="accordion-indicator">{openAccordions['mha-sponsorship'] ? '−' : '+'}</span>
                      </button>

                      {openAccordions['mha-sponsorship'] && (
                        <div className="collapse-content panel">
                          <p>
                            Recipients will join ICA upon graduation as an ICA Inspector or ICA Sergeant. You will undergo foundational training and be deployed at land, air, and sea checkpoints to safeguard Singapore's borders.
                          </p>

                          <p><strong>Eligibility</strong></p>
                          <ul className="scholarship-bullet-list">
                            <li>Singapore Citizen or SPR who is intending to take up citizenship</li>
                            <li>Currently pursuing a full-time diploma at a local polytechnic (NYP, NP, RP, SP, TP) OR full-time Higher Nitec / Nitec studies at ITE</li>
                            <li>Good academic records and co-curricular activities (CCA) track record</li>
                            <li>Passionate about Singapore's frontline safety and border security</li>
                          </ul>

                          <p><strong>Value of Award &amp; Benefits</strong></p>
                          <ul className="scholarship-bullet-list">
                            <li>Full coverage of approved tuition fees and compulsory academic expenses</li>
                            <li>Monthly study allowance throughout the course of study</li>
                            <li>Study grant awarded upon signing of sponsorship agreement</li>
                            <li>Direct career transition into ICA upon graduation with attractive starting salary and sign-on bonuses</li>
                          </ul>

                          <p><strong>Bond Period</strong></p>
                          <p>Recipients will serve a bond of 3 to 4 years (for Diploma Sponsorship) or 2 to 3 years (for ITE Sponsorship) starting upon appointment with ICA.</p>

                          <p><strong>Sponsorship Categories</strong></p>
                          <p className="scholarship-tier-names">
                            Home Team Diploma Sponsorship (Full Sponsorship / Study Award) &bull; Home Team ITE Sponsorship (Higher Nitec &amp; Nitec)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 3. Internship */}
                  <div className="title-text internship-heading-section">
                    <div className="careers">
                      <div className="title-text__title">
                        <h2 className="bold big">
                          Internship
                        </h2>
                      </div>
                    </div>
                    <div className="title-text__text"></div>
                  </div>

                  {/* Accordion 3: Beyond Borders Internship Programme */}
                  <div className="accordion-item">
                    <div className="collapse-wrapper">
                      <button
                        type="button"
                        className={`collapse-title accordion ${openAccordions['internship'] ? 'active' : ''}`}
                        onClick={() => toggleAccordion('internship')}
                        aria-expanded={openAccordions['internship']}
                      >
                        <span className="accordion-title-label">Beyond Borders Internship Programme</span>
                        <span className="accordion-indicator">{openAccordions['internship'] ? '−' : '+'}</span>
                      </button>

                      {openAccordions['internship'] && (
                        <div className="collapse-content panel">
                          <p>
                            The Singapore passport is one of the strongest passports in the world. Curious to know how the ICA secures our borders and facilitates trade and safe travel?
                          </p>
                          <p>
                            Join the Beyond Borders Internship Programme for an up-close and personal experience on how the Guardians of our Borders keep Singapore safe and secure. We offer a range of projects for students, catering to diverse interests and fields of study.
                          </p>
                          <p><strong>Requirements:</strong></p>
                          <ul className="scholarship-bullet-list">
                            <li>Singapore Citizen</li>
                            <li>Completed GCE 'A' Level, International Baccalaureate, NUS High School Diploma (or equivalent) examinations, OR currently pursuing undergraduate studies</li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* SECTION 2: FOR SERVING OFFICERS */}
                  <div className="shaped-title-wrapper">
                    <div className="shaped-title-container">
                      <div className="shaped-title-red-frame"></div>
                      <div className="shaped-title-box">
                        <h2 className="shaped-title-text">For Serving Officers</h2>
                      </div>
                    </div>
                  </div>

                  <div className="title-text serving-officers-intro">
                    <div className="title-text__text">
                      <p>We strive to be an employer of choice, by empowering and nurturing our officers.</p>
                      <p>
                        The ICA Continuous Education Programme (iCEP) offers all ICA officers opportunities to deepen their professional and domain capabilities, to develop new skills and take on new evolving challenges.
                      </p>
                      <p>
                        We train and equip with cutting-edge technology to deter, detect and respond<br />
                        to security threats at our borders, and empower their professional growth through continuous learning.
                      </p>
                      <p>
                        Apply for a range of scholarships/sponsorships – from undergraduate degrees<br />
                        to diploma programmes.
                      </p>
                    </div>
                  </div>

                  {/* Accordion 3: Full-time Studies */}
                  <div className="accordion-item">
                    <div className="collapse-wrapper">
                      <button
                        type="button"
                        className={`collapse-title accordion ${openAccordions['fulltime-studies'] ? 'active' : ''}`}
                        onClick={() => toggleAccordion('fulltime-studies')}
                        aria-expanded={openAccordions['fulltime-studies']}
                      >
                        <span className="accordion-title-label">Full-time Studies</span>
                        <span className="accordion-indicator">{openAccordions['fulltime-studies'] ? '−' : '+'}</span>
                      </button>

                      {openAccordions['fulltime-studies'] && (
                        <div className="collapse-content panel">
                          <p><strong>Degree Scholarship</strong></p>
                          <p>
                            ICA offers high-performing officers the opportunity for selected degree courses in the National University of Singapore (NUS), Nanyang Technological University (NTU), Singapore Management University (SMU), Singapore University of Technology and Design (SUTD) and Singapore University of Social Sciences (SUSS).
                          </p>
                          <p>
                            Selected officers will receive full pay for their full-time studies, full sponsorship for their course fees and book allowance. Officers below Inspector (INSP) rank can go through a selection interview for Inspector (INSP) upon graduation.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Accordion 4: Part-Time Studies */}
                  <div className="accordion-item">
                    <div className="collapse-wrapper">
                      <button
                        type="button"
                        className={`collapse-title accordion ${openAccordions['parttime-studies'] ? 'active' : ''}`}
                        onClick={() => toggleAccordion('parttime-studies')}
                        aria-expanded={openAccordions['parttime-studies']}
                      >
                        <span className="accordion-title-label">Part-Time Studies</span>
                        <span className="accordion-indicator">{openAccordions['parttime-studies'] ? '−' : '+'}</span>
                      </button>

                      {openAccordions['parttime-studies'] && (
                        <div className="collapse-content panel">
                          <p><strong>Degree Sponsorship</strong></p>
                          <p>
                            High-performing officers may enrol in relevant degree courses and be sponsored for their part-time studies with a book allowance.
                          </p>
                          <p><strong>Diploma Sponsorship</strong></p>
                          <p>
                            ICA officers can be sponsored for relevant part-time diploma courses and be given a book allowance.
                          </p>
                          <p><strong>Masters and Graduate Diploma Sponsorships</strong></p>
                          <p>
                            ICA officers can be sponsored for relevant courses and be given book and thesis allowance for the entire course.
                          </p>
                          <p><strong>Study Awards (Masters / Graduate Diploma / Degree / Diploma)</strong></p>
                          <p>
                            ICA officers can claim up to 80% reimbursement of course fees for programmes ranging from formal certificates to postgraduate studies that are directly relevant to MHA/ICA.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Explore More Section */}
                  <div className="explore-more">
                    <span className="explore-more__title">Explore More</span>
                    <div className="explore-more__listing">
                      <a
                        className="explore-more__item"
                        href="/careers/join-us"
                        onClick={(e) => handleNavClick(e, 'join-us')}
                      >
                        <div className="explore-more__media">
                          <div className="explore-more__overlay">
                            <img
                              className="web-hexagon"
                              src="https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                              alt=""
                            />
                          </div>
                          <picture className="explore-more__image">
                            <source
                              media="(max-width: 767px)"
                              srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_our-ica-team-mobile.jpg?sfvrsn=ae58003d_2"
                            />
                            <source
                              media="(min-width: 768px)"
                              srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_our-ica-team.jpg?sfvrsn=847c8a24_2"
                            />
                            <img
                              src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_our-ica-team.jpg?sfvrsn=847c8a24_2"
                              alt="Our ICA Team"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                        <p>
                          Our<br />
                          ICA Team<br />
                        </p>
                      </a>

                      <a
                        className="explore-more__item"
                        href="/careers/meet-our-officers"
                        onClick={(e) => handleNavClick(e, 'meet-our-officers')}
                      >
                        <div className="explore-more__media">
                          <div className="explore-more__overlay">
                            <img
                              className="web-hexagon"
                              src="https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                              alt=""
                            />
                          </div>
                          <picture className="explore-more__image">
                            <source
                              media="(max-width: 767px)"
                              srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_meet_our_officers_mobile.jpg?sfvrsn=48d03a4b_2"
                            />
                            <source
                              media="(min-width: 768px)"
                              srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_meet-our-officer.jpg?sfvrsn=90c6fc11_2"
                            />
                            <img
                              src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_meet-our-officer.jpg?sfvrsn=90c6fc11_2"
                              alt="Meet Our Officers"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                        <p>
                          Meet<br />
                          Our Officers<br />
                        </p>
                      </a>

                      <a
                        className="explore-more__item"
                        href="/careers/career-faqs"
                        onClick={(e) => handleNavClick(e, 'career-faqs')}
                      >
                        <div className="explore-more__media">
                          <div className="explore-more__overlay">
                            <img
                              className="web-hexagon"
                              src="https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                              }}
                              alt=""
                            />
                          </div>
                          <picture className="explore-more__image">
                            <source
                              media="(max-width: 767px)"
                              srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_career_mobile.jpg?sfvrsn=5e091820_2"
                            />
                            <source
                              media="(min-width: 768px)"
                              srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_career.jpg?sfvrsn=639eb8d6_2"
                            />
                            <img
                              src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_career.jpg?sfvrsn=639eb8d6_2"
                              alt="Career FAQs"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                        <p>
                          Career<br />
                          FAQs<br />
                        </p>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollToTop />

      <SiteFooter
        onNavigate={(view) => {
          if (onNavigate) {
            onNavigate(view);
            return;
          }
          if (view === "checkpoints" && onNavigateToCheckpoints) return onNavigateToCheckpoints();
          if (view === "checkstatus" && onNavigateStatus) return onNavigateStatus();
          if (view === "contactus" && onNavigateContact) return onNavigateContact();
          if (view === "askgov" && onNavigateFaqs) return onNavigateFaqs();
          if (view === "reach" && onNavigateToReach) return onNavigateToReach();
          if (view === "vision-mission-values" && onNavigateToVisionMissionValues) return onNavigateToVisionMissionValues();
          if (view === "our-people" && onNavigateToOurPeople) return onNavigateToOurPeople();
          if (view === "awards-accolades" && onNavigateToAwardsAccolades) return onNavigateToAwardsAccolades();
          if (view === "our-service-commitment" && onNavigateToOurServiceCommitment) return onNavigateToOurServiceCommitment();
          window.location.hash = "#" + view;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    </div>
  );
}
