import React, { useEffect, useState } from 'react';
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import './MeetOurOfficersPage.css';

export default function MeetOurOfficersPage({
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
  onNavigate,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ICA | Career | Meet our officers";
  }, []);

  const videoList = [
    {
      id: "line-of-defence",
      title: "Be Our First Line of Defence",
      videoUrl: "https://www.youtube-nocookie.com/embed/J1ner8zuQdY?controls=1&showinfo=0&rel=0&autohide=1&autoplay=1",
      thumbImg: "https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/be-our-first-line-of-defence.jpeg?sfvrsn=679e9648_2",
      descTop: "Challenge yourself and explore a fulfilling career as Guardians of our Borders.",
      descMid: "Being passionate about security comes naturally.",
      descHighlight: "",
    },
    {
      id: "team-leader",
      title: "Team Leader",
      videoUrl: "https://www.youtube-nocookie.com/embed/WvvcKhksFpA?controls=1&showinfo=0&rel=0&autohide=1&autoplay=1",
      thumbImg: "https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/team-leader.jpeg?sfvrsn=130bbef8_2",
      descTop: "Do you enjoy leading and motivating others?",
      descMid: "Are you versatile and resourceful during unforeseen situations?",
      descHighlight: "Be a Team Leader.",
    },
    {
      id: "investigation-officer",
      title: "Assessment & Investigation Officer",
      videoUrl: "https://www.youtube-nocookie.com/embed/fX5TWruiVCs?controls=1&showinfo=0&rel=0&autohide=1&autoplay=1",
      thumbImg: "https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/assessment-investigation-061123.jpg?sfvrsn=f899d8b9_0",
      descTop: "Do you read people like a book?",
      descMid: "Are you sharp-witted and quick on your feet?",
      descHighlight: "Be an Assessment & Investigation Officer.",
    },
    {
      id: "first-response",
      title: "First Response Team Officer",
      videoUrl: "https://www.youtube-nocookie.com/embed/H3JaW1_wIbU?controls=1&showinfo=0&rel=0&autohide=1&autoplay=1",
      thumbImg: "https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/first-response-officers-061123.jpg?sfvrsn=c239135_0",
      descTop: "Do you enjoy the thrill of the action?",
      descMid: "Are you decisive and ready to protect our borders?",
      descHighlight: "Be a First Response Team Officer.",
    },
    {
      id: "image-analyst",
      title: "Radiographic Image Analyst",
      videoUrl: "https://www.youtube-nocookie.com/embed/4uv6TvwFbx0?controls=1&showinfo=0&rel=0&autohide=1&autoplay=1",
      thumbImg: "https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/radiographics-ica-1-061123.jpg?sfvrsn=e385141_0",
      descTop: "Do you possess a keen eye for detail?",
      descMid: "Are you observant enough to uncover what lies beneath the surface?",
      descHighlight: "Be an Image Analyst.",
    },
  ];

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const currentVideo = videoList[activeVideoIndex];

  const handleNavClick = (e, viewName) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(viewName);
    } else {
      window.location.hash = "#" + viewName;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevVideo = () => {
    setActiveVideoIndex((prev) => (prev === 0 ? videoList.length - 1 : prev - 1));
  };

  const handleNextVideo = () => {
    setActiveVideoIndex((prev) => (prev === videoList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="meet-officers-page-root">
      <GovMasthead />

      <SiteHeader
        activeView="meet-our-officers"
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
            {/* Magenta Breadcrumb Bar */}
            <div className="bread-crumb-wrapper no-margin-bottom">
              <div className="bread-crumb-wrapper__content">
                <div className="container">
                  <ul className="my-bread-crumbs-content">
                    <li>
                      <a href="#checkpoints" onClick={(e) => handleNavClick(e, 'checkpoints')}>Home</a>
                    </li>
                    <li>
                      <i className="icon icon-arrow-right">›</i>
                    </li>
                    <li>
                      <span>Meet Our Officers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hero Page Banner - Full Width */}
            <div className="banner-image meet-our-officers">
              <div className="banner-image__image">
                <picture>
                  <source
                    media="(max-width: 767px)"
                    srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-banners/meet-our-officer_ica_mobile_390x656.jpeg?sfvrsn=b765bb47_2"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-banners/meet-our-officer_website_1440x850.jpg?sfvrsn=8d8a743a_2"
                  />
                  <img
                    src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-banners/meet-our-officer_website_1440x850.jpg?sfvrsn=8d8a743a_2"
                    alt="Meet Our Officers"
                    className="meet-officers-hero-img"
                  />
                </picture>
              </div>

              <div className="banner-image__text">
                <span className="banner-image__text--blue">Meet Our</span>
                <span className="banner-image__text--red">Officers</span>
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
                <div className="meet-officers-main-content">
                  
                  {/* Title & Core Philosophy */}
                  <div className="title-text intro-title-text">
                    <div className="careers">
                      <div className="title-text__title">
                        <h1 className="ica-values-heading">
                          <b>I</b>ntegrity. &nbsp;<b>C</b>ommitment. &nbsp;<b>A</b>ccountability.
                        </h1>
                      </div>
                    </div>
                    <div className="title-text__text">
                      <p>
                        Guardians of our Borders serve with integrity, are committed to facilitating trade and safe travels, and are accountable for Singapore’s safety and security.
                      </p>
                      <p>
                        In deterring, detecting and responding to security threats at our borders, we protect and keep Singapore safe. In upholding and enforcing Singapore laws on immigration and national registration, we secure and facilitate safe travels and trade.
                      </p>
                      <p>
                        Every Guardian has a story to tell.<br />
                        Read on to find out what keeps us motivated to protect, secure and inspire lives.
                      </p>
                    </div>
                  </div>

                  {/* Video Carousel Player */}
                  <div className="video-carousel">
                    <div className="video-carousel__video__container">
                      <iframe
                        id="youtube-video"
                        src={currentVideo.videoUrl}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        aria-label={currentVideo.title}
                        title={currentVideo.title}
                      ></iframe>
                    </div>

                    <div className="video-carousel__text__title">
                      <span className="video-carousel__text__title--title">{currentVideo.title}</span>
                    </div>

                    <div className="video-carousel__text__description">
                      <div className="video-carousel__text__description--top">{currentVideo.descTop}</div>
                      <div className="video-carousel__text__description--mid">{currentVideo.descMid}</div>
                      {currentVideo.descHighlight && (
                        <div className="video-carousel__text__description--highlight">{currentVideo.descHighlight}</div>
                      )}
                    </div>

                    {/* Interactive Carousel Thumbnails */}
                    <div className="video-carousel__carousel">
                      <button
                        className="carousel-arrow carousel-prev"
                        type="button"
                        onClick={handlePrevVideo}
                        aria-label="Previous slide"
                      >
                        <span className="icon-arrow-left">‹</span>
                      </button>

                      <div className="video-carousel-track">
                        {videoList.map((item, index) => (
                          <div
                            key={item.id}
                            className={`video-carousel-item ${index === activeVideoIndex ? 'active' : ''}`}
                            onClick={() => setActiveVideoIndex(index)}
                          >
                            <div className="video-carousel-item__image">
                              <img src={item.thumbImg} alt={item.title} />
                            </div>
                            <div className="video-carousel-item__title">
                              <span>{item.title}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        className="carousel-arrow carousel-next"
                        type="button"
                        onClick={handleNextVideo}
                        aria-label="Next slide"
                      >
                        <span className="icon-arrow-right">›</span>
                      </button>
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
                        href="/careers/scholarships-sponsorships-internships"
                        onClick={(e) => handleNavClick(e, 'scholarships')}
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
                          Scholarships,<br />
                          Sponsorships<br />
                          &amp; Internships<br />
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
