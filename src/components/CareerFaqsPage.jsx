import React, { useEffect, useState } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import "./CareerFaqsPage.css";

export default function CareerFaqsPage({
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
  onNavigateToScholarships,
  onNavigateToMeetOurOfficers,
  onNavigate,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ICA | Career | FAQs";
  }, []);

  const handleNavClick = (e, viewName) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(viewName);
    } else {
      window.location.hash = "#" + viewName;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // State to manage accordion item open/close: Open all by default so no answer is hidden
  const [openItems, setOpenItems] = useState({
    "left-1": true,
    "left-2": true,
    "left-3": true,
    "left-4": true,
    "left-5": true,
    "left-6": true,
    "left-7": true,
    "right-1": true,
    "right-2": true,
    "right-3": true,
    "right-4": true,
    "right-5": true,
    "right-6": true,
  });

  const toggleAccordion = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const leftFaqs = [
    {
      id: "left-1",
      question: "I’m interested in joining ICA as a ICA Inspector / Sergeant. How do I apply?",
      content: (
        <p>
          If you meet our entry requirements, you may submit your application via{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://jobs.careers.gov.sg/?s=ica&a=MHA+-+Immigration+%26+Checkpoints+Authority+(ICA)"
          >
            Careers@Gov
          </a>
          .
        </p>
      ),
    },
    {
      id: "left-2",
      question: "What are the prerequisites of the job?",
      content: (
        <>
          <p>The basic requirements to be a ICA Inspector / Sergeant are:</p>
          <ul>
            <li>Singapore citizenship</li>
            <li>Be physically fit</li>
            <li>Good eyesight with normal colour vision</li>
            <li>
              A degree in any discipline for the position of ICA Inspector, and at least General Certificate of Education (GCE) ‘A’ Level or Nitec qualification for the position of ICA Sergeant.
            </li>
          </ul>
          <p>Please refer to the ICA Inspector and ICA Sergeant pages for more details.</p>
        </>
      ),
    },
    {
      id: "left-3",
      question: "Do I need to do shift work?",
      content: (
        <p>
          Yes. Upon completing the training, newly appointed officers will begin their foundational posting at a checkpoint, where they will be required to work 12-hour shifts.
        </p>
      ),
    },
    {
      id: "left-4",
      question: "Is there any Physical Employment Standards (PES) requirement?",
      content: (
        <p>
          Candidates need to pass a medical examination. Male applicants should preferably have a fitness level of PES A or B. Those who do not have PES A or B will be considered on a case-by-case basis.
        </p>
      ),
    },
    {
      id: "left-5",
      question: "Do I still need to serve In-Camp Training (ICT) and / or complete the Individual Physical Proficiency Test (IPPT) after I join ICA?",
      content: (
        <p>
          Yes. There is no change to National Service requirements (including the IPPT) with your appointment as ICA Inspector / Sergeant.
        </p>
      ),
    },
  ];

  const rightFaqs = [
    {
      id: "right-1",
      question: "I hold a diploma from a private institution. Is it recognised?",
      content: (
        <p>
          Private diplomas that are assessed to be of the same duration and rigour as our local polytechnic diplomas may be considered.
        </p>
      ),
    },
    {
      id: "right-2",
      question: "What degrees are recognised by ICA?",
      content: (
        <p>
          For graduate positions, ICA recognises degrees from universities accredited by the government of the country where the university is located. This applies to degrees obtained full time or part time, as well as through distance learning or twinning programmes. ICA does not solely look at academic qualifications when choosing candidates. We also take into account other important factors, such as relevant work experience, past performance (for example, employment track record) and personal attributes like leadership abilities.
        </p>
      ),
    },
    {
      id: "right-3",
      question: "Does ICA sponsor officers for further studies?",
      content: (
        <>
          <p>Yes, we do. ICA offers sponsorships for diploma, degree and postgraduate studies.&nbsp;</p>
          <p>
            Please refer to the{" "}
            <a
              href="/careers/scholarships-sponsorships-internships"
              onClick={(e) => handleNavClick(e, "scholarships")}
            >
              ICA Scholarships, Sponsorships &amp; Internships
            </a>{" "}
            page for more details.&nbsp;
          </p>
        </>
      ),
    },
    {
      id: "right-4",
      question: "I heard that there is a sign-on bonus. Is it true? Will there be a bond?",
      content: (
        <>
          <p>
            Newly appointed Sergeants will receive a sign-on bonus, with $12,000 paid upon signing on and $18,000 upon confirmation after one-year probation.
          </p>
          <p>
            Newly appointed Inspectors will receive a sign-on bonus, with $5,000 paid upon signing on and $10,000 upon confirmation after one-year probation.
          </p>
          <p>
            You must enter a bond of three years to receive the sign-on bonus, effective from the date of appointment.
          </p>
        </>
      ),
    },
    {
      id: "right-5",
      question: "What is the training period and where will it be held? Is it a residential programme?",
      content: (
        <>
          <p>
            The 20- to 26-week training programme will be conducted at the Home Team Academy (HTA) and is largely non-residential. Officers are generally not allowed to take vacation leave or time off during the training period.
          </p>
          <p>
            As part of the ICA Basic Course (Inspector), officers are required to complete a five-day residential Leadership Challenge Programme and up to 10 days (excluding weekends) of the residential Home Team Foundation Course at HTA.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="career-faqs-page-root">
      <GovMasthead />

      <SiteHeader
        activeView="career-faqs"
        onNavigate={(view) => {
          if (onNavigate) onNavigate(view);
          else {
            window.location.hash = "#" + view;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content page-content--no-side-padding">
            {/* Breadcrumb Bar */}
            <div className="bread-crumb-wrapper no-margin-bottom">
              <div className="bread-crumb-wrapper__content">
                <div className="container">
                  <ul className="my-bread-crumbs-content">
                    <li>
                      <a href="#checkpoints" onClick={(e) => handleNavClick(e, "checkpoints")}>
                        Home
                      </a>
                    </li>
                    <li>
                      <i className="icon icon-arrow-right">›</i>
                    </li>
                    <li>
                      <span>Career FAQs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hero Banner - Full Width */}
            <div className="banner-image career-faqs-page">
              <div className="banner-image__image">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-banners/career_career_mobile_390x656.jpg?sfvrsn=e76c2b15_2"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-banners/career_website_1440x850.jpg?sfvrsn=28546c06_2"
                  />
                  <img
                    src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-banners/career_website_1440x850.jpg?sfvrsn=28546c06_2"
                    alt="Career FAQs Banner"
                    className="career-faqs-hero-img"
                  />
                </picture>
              </div>

              <div className="banner-image__text">
                <span className="banner-image__text--blue">Careers</span>
                <span className="banner-image__text--red">FAQs</span>
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

            <div className="container-ica-career--no-padding">
              <div className="career-container">
                <div className="career-faqs-main-content">
                  {/* Title and Intro */}
                  <div className="title-text">
                    <div className="careers">
                      <div className="title-text__title">
                        <h1 className="bold big">
                          Opportunities Await.
                          <br />
                          Have your questions answered here.
                        </h1>
                      </div>
                    </div>
                  </div>

                  {/* 2-Column Accordion Layout */}
                  <div className="faq-accordion" data-sf-element="2 Column Accordion Layout">
                    <div className="column-div">
                      {/* Left Column */}
                      <div className="column-left">
                        {leftFaqs.map((faq) => {
                          const isOpen = !!openItems[faq.id];
                          return (
                            <div key={faq.id} className={`accordion-item ${isOpen ? "active" : ""}`}>
                              <div className="collapse-wrapper">
                                <div
                                  className={`collapse-title accordion ${isOpen ? "active" : ""}`}
                                  onClick={() => toggleAccordion(faq.id)}
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      toggleAccordion(faq.id);
                                    }
                                  }}
                                >
                                  <span>{faq.question}</span>
                                  <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
                                </div>
                                {isOpen && <div className="collapse-content panel">{faq.content}</div>}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Right Column */}
                      <div className="column-right">
                        {rightFaqs.map((faq) => {
                          const isOpen = !!openItems[faq.id];
                          return (
                            <div key={faq.id} className={`accordion-item ${isOpen ? "active" : ""}`}>
                              <div className="collapse-wrapper">
                                <div
                                  className={`collapse-title accordion ${isOpen ? "active" : ""}`}
                                  onClick={() => toggleAccordion(faq.id)}
                                  role="button"
                                  tabIndex={0}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      toggleAccordion(faq.id);
                                    }
                                  }}
                                >
                                  <span>{faq.question}</span>
                                  <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
                                </div>
                                {isOpen && <div className="collapse-content panel">{faq.content}</div>}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Explore More Section */}
                  <div className="explore-more">
                    <span className="explore-more__title">Explore More</span>
                    <div className="explore-more__listing">
                      <a
                        className="explore-more__item"
                        href="/careers/join-us"
                        onClick={(e) => handleNavClick(e, "join-us")}
                      >
                        <div className="explore-more__media">
                          <div className="explore-more__overlay">
                            <img
                              className="web-hexagon"
                              src="https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
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
                          Our
                          <br />
                          ICA Team
                          <br />
                        </p>
                      </a>

                      <a
                        className="explore-more__item"
                        href="/careers/meet-our-officers"
                        onClick={(e) => handleNavClick(e, "meet-our-officers")}
                      >
                        <div className="explore-more__media">
                          <div className="explore-more__overlay">
                            <img
                              className="web-hexagon"
                              src="https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
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
                          Meet
                          <br />
                          Our Officers
                          <br />
                        </p>
                      </a>

                      <a
                        className="explore-more__item"
                        href="/careers/scholarships-sponsorships-internships"
                        onClick={(e) => handleNavClick(e, "scholarships")}
                      >
                        <div className="explore-more__media">
                          <div className="explore-more__overlay">
                            <img
                              className="web-hexagon"
                              src="https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                              alt=""
                            />
                          </div>
                          <picture className="explore-more__image">
                            <source
                              media="(max-width: 767px)"
                              srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_scholarship_mobile.jpg?sfvrsn=60cae53c_2"
                            />
                            <source
                              media="(min-width: 768px)"
                              srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_scholarship.jpg?sfvrsn=3bb26b2d_2"
                            />
                            <img
                              src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_scholarship.jpg?sfvrsn=3bb26b2d_2"
                              alt="Scholarships, Sponsorships & Internships"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                        <p>
                          Scholarships,
                          <br />
                          Sponsorships
                          <br />
                          &amp; Internships
                          <br />
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
