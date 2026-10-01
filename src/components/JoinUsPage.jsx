import React, { useEffect, useState, useRef } from 'react';
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import './JoinUsPage.css';

export default function JoinUsPage({
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
  onNavigate,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ICA | Career | Join Us";
  }, []);

  const bannerContainerRef = useRef(null);

  // Carousel state: 0 = Civilian Officer, 1 = ICA Inspector, 2 = ICA Sergeant
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Animated Banner states (0: Guardians, 1: Protect, 2: Safeguard, 3: Connect, 4: Join Us, 5: Guardians)
  const [bannerStep, setBannerStep] = useState(0);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const isTransitioningRef = useRef(false);
  const touchStartYRef = useRef(null);

  // Auto-advance hero animated banner smoothly when idle
  useEffect(() => {
    const timer = setInterval(() => {
      setBannerStep((prev) => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Change hero animation step on scroll wheel (desktop)
  useEffect(() => {
    const bannerEl = bannerContainerRef.current;
    if (!bannerEl) return;

    const handleWheel = (e) => {
      if (window.scrollY > 20) return;

      if (e.deltaY > 10) {
        setBannerStep((prev) => {
          if (prev < 5) {
            if (!isTransitioningRef.current) {
              isTransitioningRef.current = true;
              setTimeout(() => {
                isTransitioningRef.current = false;
              }, 400);
              return prev + 1;
            }
            return prev;
          }
          return 5;
        });
      } else if (e.deltaY < -10) {
        setBannerStep((prev) => {
          if (prev > 0) {
            if (!isTransitioningRef.current) {
              isTransitioningRef.current = true;
              setTimeout(() => {
                isTransitioningRef.current = false;
              }, 400);
              return prev - 1;
            }
            return prev;
          }
          return 0;
        });
      }
    };

    bannerEl.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      bannerEl.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const carouselItems = [
    {
      id: "civilian",
      title: "CIVILIAN OFFICER",
      desc: "You play a critical and indispensable role in connecting Singapore to the world. You are responsible for upholding laws on immigration and national registration throughout a citizen’s life journey, and also facilitate the stay of foreigners with business and familial ties in Singapore.",
      link: "/careers/civilian-officer",
      navKey: "civilian-officer",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/related-content-tile-civilian-officer.jpeg?sfvrsn=8f43814e_2",
      localImg: "/images/careers/related-content-tile-civilian-officer.jpeg",
      alt: "Related-Content-Tile-Civilian-Officer"
    },
    {
      id: "inspector",
      title: "ICA INSPECTOR",
      desc: "You are Singapore’s first line of defence, working at the forefront to secure our borders. You are responsible for enforcing laws and managing the overall operations at ICA's checkpoints and work units.",
      link: "/careers/ica-inspector",
      navKey: "ica-inspector",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/related-content-tile-inspector.jpg?sfvrsn=96502d30_2",
      localImg: "/images/careers/related-content-tile-inspector.jpg",
      alt: "Related-Content-Tile-Inspector"
    },
    {
      id: "sergeant",
      title: "ICA SERGEANT",
      desc: "You are Singapore’s first line of defence, working at the forefront to secure our borders. You are responsible for ensuring legitimate and lawful movement of people, goods and conveyances through our land, air and sea checkpoints.",
      link: "/careers/ica-sergeant",
      navKey: "ica-sergeant",
      img: "https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/related-content-tile-sergeant.jpg?sfvrsn=44bc9c1d_2",
      localImg: "/images/careers/related-content-tile-sergeant.jpg",
      alt: "Related-Content-Tile-Sergeant"
    }
  ];

  // Auto-slide 2-column carousel every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [carouselItems.length]);

  const handleDotClick = (stepIdx) => {
    setBannerStep(stepIdx);
  };

  const handleScrollCueClick = () => {
    setBannerStep((prev) => (prev + 1) % 6);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const handleNavClick = (e, view) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(view);
    } else {
      window.location.hash = "#" + view;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="site-wrapper join-us-page-wrapper">
      <GovMasthead />

      <SiteHeader
        searchQuery=""
        setSearchQuery={() => { }}
        totalMatches={0}
        isSearching={false}
        activeView="join-us"
        onNavigate={onNavigate}
      />

      <Breadcrumbs activeView="join-us" onNavigate={onNavigate} />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content page-content--no-side-padding">
            <div className="container-ica-career--no-padding">
              <div id="Main_T1780B552001_Col01" className="sf_colsIn" data-sf-element="Banner" data-placeholder-label="Career Banner">
                <div ref={bannerContainerRef} className="hero-scroll-wrapper">
                  <div className={`animated-banner step-${bannerStep}`}>
                    {/* Top-Right Corner Graphic Template */}
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

                    {/* Dark Skyline Background with HUD (Steps 4 & 5) */}
                    <div className={`banner-layer banner-layer--dark ${bannerStep >= 4 ? 'is-active' : 'is-faded'}`}>
                      <picture className="animated-banner__bg">
                        <source media="(max-width: 767px)" srcSet="/images/careers/join-us-mobile-bg.jpg" />
                        <source media="(min-width: 768px)" srcSet="/images/careers/join-us-bg.jpg" />
                        <img
                          className="bg bg--1"
                          src="/images/careers/join-us-bg.jpg"
                          onError={(e) => {
                            e.currentTarget.src = "https://www.ica.gov.sg/Cwp/assets/ica/images/join-us-bg.jpg";
                          }}
                          alt="Join Us Background"
                        />
                      </picture>
                    </div>

                    {/* Light Futuristic Hex Tech Background (Steps 0, 1, 2, 3) */}
                    <div className={`banner-layer banner-layer--light ${bannerStep <= 3 ? 'is-active' : 'is-faded'}`}>
                      <img className="bg bg--light" src="/images/careers/banner-light-bg.jpg" alt="ICA Futuristic Background" />
                    </div>

                    {/* ICA Officers Foreground with Double Exposure (Steps 0, 1, 2, 3) */}
                    <div className={`animated-banner__props ${bannerStep <= 3 ? 'is-visible' : 'is-hidden'}`}>
                      <picture>
                        <source media="(max-width: 767px)" srcSet="/images/careers/officers-mobile.png" />
                        <source media="(min-width: 768px)" srcSet="/images/careers/officers.png" />
                        <img
                          className="bg bg--officers"
                          src="/images/careers/officers.png"
                          onError={(e) => {
                            e.currentTarget.src = "https://www.ica.gov.sg/Cwp/assets/ica/images/officers.png";
                          }}
                          alt="ICA Officers"
                        />
                      </picture>
                    </div>

                    {/* Animated Text Content Layer */}
                    <div className="animated-banner__text-container">
                      {/* Step 0: Starting View - Center white text over centered officers image */}
                      <div className={`banner-slide-content slide-step-0 ${bannerStep === 0 ? 'is-active' : ''}`}>
                        <h1 className="hero-text-initial-guardians">
                          <span>GUARDIANS</span>
                          <span>OF OUR BORDERS</span>
                        </h1>
                      </div>

                      {/* Step 1: We PROTECT / More than a line on the map */}
                      <div className={`banner-slide-content slide-step-1 ${bannerStep === 1 ? 'is-active' : ''}`}>
                        <div className="hero-tagline-heading">
                          <span className="tag-we">We</span> <span className="tag-bold">PROTECT</span>
                        </div>
                        <div className="hero-tagline-sub">
                          More than a line on the map
                        </div>
                      </div>

                      {/* Step 2: We SAFEGUARD / Singapore's safety and security */}
                      <div className={`banner-slide-content slide-step-2 ${bannerStep === 2 ? 'is-active' : ''}`}>
                        <div className="hero-tagline-heading">
                          <span className="tag-we">We</span> <span className="tag-bold">SAFEGUARD</span>
                        </div>
                        <div className="hero-tagline-sub">
                          Singapore's safety and security
                        </div>
                      </div>

                      {/* Step 3: We CONNECT / Singapore to the world */}
                      <div className={`banner-slide-content slide-step-3 ${bannerStep === 3 ? 'is-active' : ''}`}>
                        <div className="hero-tagline-heading">
                          <span className="tag-we">We</span> <span className="tag-bold">CONNECT</span>
                        </div>
                        <div className="hero-tagline-sub">
                          Singapore to the world
                        </div>
                      </div>

                      {/* Step 4: JOIN US - Solders disappear, tech skyline background, white font centered */}
                      <div className={`banner-slide-content slide-step-4 ${bannerStep === 4 ? 'is-active' : ''}`}>
                        <h1 className="hero-text-join-us">JOIN US</h1>
                      </div>

                      {/* Step 5: Be a GUARDIAN OF OUR BORDERS in the middle */}
                      <div className={`banner-slide-content slide-step-5 ${bannerStep === 5 ? 'is-active' : ''}`}>
                        <div className="hero-text-pre">Be a</div>
                        <h1 className="hero-text-guardian">
                          <span>GUARDIAN</span>
                          <span className="sub-line">OF OUR BORDERS</span>
                        </h1>
                      </div>
                    </div>

                    {/* Step Navigation Dots */}
                    <div className="hero-banner-dots">
                      {[0, 1, 2, 3, 4, 5].map((stepIdx) => (
                        <button
                          key={stepIdx}
                          type="button"
                          className={`hero-dot ${bannerStep === stepIdx ? 'is-active' : ''}`}
                          onClick={() => handleDotClick(stepIdx)}
                          aria-label={`Slide ${stepIdx === 0 ? 'Start' : stepIdx}`}
                        />
                      ))}
                    </div>

                    {/* Scroll Cue */}
                    <div
                      className={`hero-scroll-cue ${bannerStep === 5 ? 'is-hidden' : ''}`}
                      onClick={handleScrollCueClick}
                      role="button"
                      tabIndex={0}
                      aria-label="Scroll to next phase"
                    >
                      <span>Scroll to explore</span>
                      <span className="scroll-arrow-anim">↓</span>
                    </div>
                  </div>
                </div>

                <div className="title-text title-text--secure-borders">
                  <div className="careers">
                    <div className="title-text__title">
                      <h3 className="bold small-bold">
                        Secure Borders. Safe Singapore.
                      </h3>
                    </div>
                  </div>
                  <div className="title-text__text">
                    <p>We are the Guardians of Singapore's borders, with a mission to secure our borders and uphold Singapore's laws on immigration and national registration.</p>
                    <p>We are Singapore's frontline, keeping Singapore connected to the world, while protecting our communities by keeping dangerous and illegal items off our shores.</p>
                    <p>We strive to be an employer of choice, by empowering and nurturing our officers. We are proud to be in Singapore's Top 300 Employers in the 2025 Singapore Opportunity Index - recognised for turning jobs into careers and creating real pathways for our people.</p>
                    <p className="title-text__highlight">Join us and be our First Line of Defence.</p>
                  </div>
                </div>
              </div>

              <div className="career-container">
                <a id="scroll-top-btn" href="#top" style={{ display: 'none' }}><span className="sr-only">Back to top</span></a>

                <div id="Main_T1780B552001_Col02" className="sf_colsIn" data-sf-element="Content" data-placeholder-label="Career Content">
                  <br />
                  <img
                    src="https://www.ica.gov.sg/images/default-source/ica-images/careers/soi-badge.jpg?sfvrsn=a30d5e5d_12"
                    alt="Top 300 Employer Singapore Opportunity Index 2025"
                    title="Top 300 Employer Singapore Opportunity Index 2025"
                    data-displaymode="Original"
                    style={{ display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%", height: "auto" }}
                  />
                  <br />

                  <div className="welfare-benefits-join-us">
                    <div className="welfare-benefits-join-us__top">
                      <span className="welfare-benefits-join-us__title" data-transition="">Welfare &amp; Benefits</span>
                      <div className="welfare-benefits-join-us__listing">
                        <div className="item" data-transition="">
                          <img src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/welfare-benefit-icons/calendar-white.svg?sfvrsn=1872d1a8_2" alt="calendar-white" />
                          <div className="subtitle">
                            <div>14-21 Days Leave</div>
                          </div>
                          <div className="description"></div>
                        </div>
                        <div className="item" data-transition="">
                          <img src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/welfare-benefit-icons/medical-white.svg?sfvrsn=af4b458_2" alt="medical-white" />
                          <div className="subtitle">
                            <div>Medical &amp; Dental Subsidies</div>
                          </div>
                          <div className="description"></div>
                        </div>
                        <div className="item" data-transition="">
                          <img src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/welfare-benefit-icons/shelter-white.svg?sfvrsn=c04b433c_2" alt="shelter-white" />
                          <div className="subtitle">
                            <div>Group Insurance</div>
                          </div>
                          <div className="description"></div>
                        </div>
                        <div className="item" data-transition="">
                          <img src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/welfare-benefit-icons/badge-white.svg?sfvrsn=582f8d0b_2" alt="badge-white" />
                          <div className="subtitle">
                            <div>Corporate Passes for Attractions</div>
                          </div>
                          <div className="description"></div>
                        </div>
                        <div className="item" data-transition="">
                          <img src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/welfare-benefit-icons/dollar-coin-white.svg?sfvrsn=73b59bab_2" alt="dollar-coin-white" />
                          <div className="subtitle">
                            <div>Performance &amp; Annual Bonuses</div>
                          </div>
                          <div className="description"></div>
                        </div>
                        <div className="item" data-transition="">
                          <img src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/welfare-benefit-icons/hand-heart-white.svg?sfvrsn=63a885c2_2" alt="hand-heart-white" />
                          <div className="subtitle">
                            <div>Staff Welfare Benefits</div>
                          </div>
                          <div className="description"></div>
                        </div>
                        <div className="item" data-transition="">
                          <img src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/welfare-benefit-icons/park-white.svg?sfvrsn=6f8d07b_2" alt="park-white" />
                          <div className="subtitle">
                            <div>Subsidies for Sports &amp; Recreation</div>
                          </div>
                          <div className="description"></div>
                        </div>
                        <div className="item" data-transition="">
                          <img src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/welfare-benefit-icons/scholar-cap-white.svg?sfvrsn=6ce02e10_2" alt="scholar-cap-white" />
                          <div className="subtitle">
                            <div>Post-Grad Sponsorship/ Continuous Education</div>
                          </div>
                          <div className="description"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="title-text title-text--role-guardians">
                    <div className="careers">
                      <div className="title-text__title">
                        <h2 className="default">
                          Your Role as Guardians
                        </h2>
                      </div>
                    </div>
                    <div className="title-text__text">
                      <p>As Guardians of our Borders, ICA officers are border security and immigration control specialists who take on challenging roles to facilitate trade and safe travels, and keep Singapore safe and secure.</p>
                      <p>Trained and equipped with cutting-edge technology to deter, detect and respond to security threats at our borders, you'll grow and develop in a fulfilling career as Guardians of our Borders.</p>
                    </div>
                  </div>

                  {/* Two-Column Carousel with interactive React state */}
                  <div className="two-col-carousel">
                    <div className="two-col-carousel__container slick-initialized slick-slider slick-dotted" data-carousel="">
                      <button
                        className="slick-prev slick-arrow"
                        type="button"
                        onClick={handlePrevSlide}
                        aria-label="Previous slide"
                      >
                        <span className="icon icon-arrow-left" aria-hidden="true">&#10094;</span>
                        <span className="sr-only">Previous slide</span>
                      </button>

                      <div className="slick-list draggable">
                        <div className="slick-track" style={{ transform: `translateX(-${currentSlide * 100}%)`, transition: 'transform 0.4s ease-in-out' }}>
                          {carouselItems.map((item, index) => {
                            const isActive = index === currentSlide;
                            return (
                              <div
                                key={item.id}
                                className={`slick-slide ${isActive ? 'slick-current slick-active' : ''}`}
                                style={{ width: '100%', minWidth: '100%' }}
                                role="tabpanel"
                                aria-hidden={!isActive}
                              >
                                <div className="two-col-carousel-item" style={{ width: '100%', display: 'inline-block' }}>
                                  <div className="two-col-carousel-item__container">
                                    <div className="two-col-carousel-item__content">
                                      <span className="two-col-carousel-item__content--title">{item.title}</span>
                                      <span className="two-col-carousel-item__content--desc">{item.desc}</span>
                                      <div className="button-place">
                                        <div className="center">
                                          <a
                                            className="button button__learn-more"
                                            href={`#${item.id}`}
                                            onClick={(e) => {
                                              e.preventDefault();
                                              setSelectedScheme(item);
                                            }}
                                            tabIndex={isActive ? 0 : -1}
                                          >
                                            <p>Find Out More</p>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="two-col-carousel-item__image">
                                      <img
                                        src={item.img}
                                        onError={(e) => {
                                          e.currentTarget.src = item.localImg;
                                        }}
                                        alt={item.alt}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <button
                        className="slick-next slick-arrow"
                        type="button"
                        onClick={handleNextSlide}
                        aria-label="Next slide"
                      >
                        <span className="icon icon-arrow-right" aria-hidden="true">&#10095;</span>
                        <span className="sr-only">Next slide</span>
                      </button>

                      <ul className="slick-dots" role="tablist">
                        {carouselItems.map((item, idx) => (
                          <li key={item.id} className={idx === currentSlide ? "slick-active" : ""} role="presentation">
                            <button
                              type="button"
                              role="tab"
                              aria-label={`${idx + 1} of ${carouselItems.length}`}
                              tabIndex={idx === currentSlide ? 0 : -1}
                              onClick={() => setCurrentSlide(idx)}
                            >
                              {idx + 1}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="their-stories">
                    <div className="compilation">
                      <div className="div">
                        <div className="title-text">
                          <div className="title-text__title">
                            <p>
                              Integrity. Commitment. Accountability.
                            </p>
                          </div>
                          <div className="title-text__text">
                            <p>
                              Guardians of our Borders serve with integrity, are committed to facilitating trade and safe travels, and are accountable for Singapore's safety and security.
                            </p>
                          </div>
                          <div className="center-join-us">
                            <a
                              className="button button__learn-more"
                              href="/careers/meet-our-officers"
                              onClick={(e) => handleNavClick(e, 'meet-our-officers')}
                            >
                              <p>Here are their stories</p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <picture>
                        <source media="(max-width: 767px)" srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/join-us-page-meet-our-officers-mobile.jpg?sfvrsn=8a05872f_2, /images/careers/join-us-page-meet-our-officers-mobile.jpg" />
                        <source media="(min-width: 768px)" srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/join-us-page-meet-our-officers-desktop.jpg?sfvrsn=1c713731_2, /images/careers/join-us-page-meet-our-officers-desktop.jpg" />
                        <img
                          src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/join-us-page-meet-our-officers-desktop.jpg?sfvrsn=1c713731_2"
                          onError={(e) => {
                            e.currentTarget.src = "/images/careers/join-us-page-meet-our-officers-desktop.jpg";
                          }}
                          alt="ICA Officers - Integrity. Commitment. Accountability."
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  </div>
                </div>

                <div id="Main_T1780B552001_Col03" className="sf_colsIn" data-sf-element="RelatedLinks" data-placeholder-label="Related Link Content">
                  <div className="explore-more">
                    <h2 className="explore-more__title">Explore More</h2>
                    <div className="explore-more__listing">
                      <a
                        className="explore-more__item"
                        href="/careers/scholarships-sponsorships-internships"
                        onClick={(e) => handleNavClick(e, 'scholarships')}
                      >
                        <div className="explore-more__media">
                          <div className="explore-more__overlay">
                            <img
                              className="web-hexagon"
                              src="/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                              onError={(e) => {
                                e.currentTarget.src = "https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg";
                              }}
                              alt=""
                            />
                          </div>
                          <picture className="explore-more__image">
                            <source media="(max-width: 767px)" srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_scholarship_mobile.jpg?sfvrsn=60cae53c_2, /images/careers/explore-more_button_358x358_scholarship.jpg" />
                            <source media="(min-width: 768px)" srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_scholarship.jpg?sfvrsn=3bb26b2d_2, /images/careers/explore-more_button_358x358_scholarship.jpg" />
                            <img
                              src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_scholarship.jpg?sfvrsn=3bb26b2d_2"
                              onError={(e) => {
                                e.currentTarget.src = "/images/careers/explore-more_button_358x358_scholarship.jpg";
                              }}
                              alt="Scholarships, Sponsorships & Internships"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                        <p>
                          Scholarships,<br />
                          Sponsorships<br />
                          &amp; Internships
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
                              src="/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                              onError={(e) => {
                                e.currentTarget.src = "https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg";
                              }}
                              alt=""
                            />
                          </div>
                          <picture className="explore-more__image">
                            <source media="(max-width: 767px)" srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_career_mobile.jpg?sfvrsn=5e091820_2, /images/careers/explore-more_button_358x358_career.jpg" />
                            <source media="(min-width: 768px)" srcSet="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_career.jpg?sfvrsn=639eb8d6_2, /images/careers/explore-more_button_358x358_career.jpg" />
                            <img
                              src="https://www.ica.gov.sg/images/default-source/ica-images/careers/new-careers/page-images/explore-more_button_358x358_career.jpg?sfvrsn=639eb8d6_2"
                              onError={(e) => {
                                e.currentTarget.src = "/images/careers/explore-more_button_358x358_career.jpg";
                              }}
                              alt="Career FAQs"
                              loading="lazy"
                            />
                          </picture>
                        </div>
                        <p>
                          Career<br />
                          FAQs
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

      {/* Career Scheme Dossier Modal */}
      {selectedScheme && (
        <div className="career-scheme-modal-overlay" onClick={() => setSelectedScheme(null)}>
          <div className="career-scheme-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="career-scheme-modal-header">
              <h3>{selectedScheme.title} Scheme</h3>
              <button
                type="button"
                className="career-scheme-close-btn"
                onClick={() => setSelectedScheme(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="career-scheme-modal-body">
              <p className="scheme-desc">{selectedScheme.desc}</p>
              <div className="scheme-highlights">
                <div className="scheme-highlight-item">
                  <strong>Starting Salary Range:</strong>
                  <span>
                    {selectedScheme.id === 'inspector'
                      ? '$4,400 - $5,600 / month (Sign-on bonus applicable)'
                      : selectedScheme.id === 'civilian'
                      ? '$2,800 - $4,200 / month'
                      : '$2,400 - $3,200 / month (Sign-on bonus applicable)'}
                  </span>
                </div>
                <div className="scheme-highlight-item">
                  <strong>Minimum Educational Qualification:</strong>
                  <span>
                    {selectedScheme.id === 'inspector'
                      ? 'Degree in any discipline from a recognised university'
                      : selectedScheme.id === 'civilian'
                      ? 'Diploma or Degree with strong interpersonal & communication skills'
                      : 'Diploma / GCE A-Levels / Higher Nitec or equivalent'}
                  </span>
                </div>
                <div className="scheme-highlight-item">
                  <strong>Primary Deployments:</strong>
                  <span>
                    {selectedScheme.id === 'inspector'
                      ? 'Command of Checkpoints, Strategic Intelligence, Enforcement & Investigations'
                      : selectedScheme.id === 'civilian'
                      ? 'Citizen Services Centre, Permanent Residence, Passports & Pass Management'
                      : 'First-Line Border Security, Baggage & Cargo Screening, Primary Immigration Clearance'}
                  </span>
                </div>
              </div>
              <div className="scheme-modal-actions">
                <button
                  type="button"
                  className="scheme-apply-btn"
                  onClick={() => {
                    setSelectedScheme(null);
                    handleNavClick({ preventDefault: () => {} }, 'meet-our-officers');
                  }}
                >
                  Meet Officers in this Role →
                </button>
                <button
                  type="button"
                  className="scheme-close-btn"
                  onClick={() => setSelectedScheme(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ScrollToTop />

      <SiteFooter
        onNavigate={onNavigate}
        onNavigateHome={onNavigateHome}
        onNavigateToCheckpoints={onNavigateToCheckpoints}
        onNavigateContact={onNavigateContact}
        onNavigateStatus={onNavigateStatus}
        onNavigateFaqs={onNavigateFaqs}
        onNavigateToReach={onNavigateToReach}
        onNavigateToVisionMissionValues={onNavigateToVisionMissionValues}
        onNavigateToOurPeople={onNavigateToOurPeople}
        onNavigateToAwardsAccolades={onNavigateToAwardsAccolades}
        onNavigateToOurServiceCommitment={onNavigateToOurServiceCommitment}
        onNavigateToNewsroom={onNavigateToNewsroom}
        onNavigateToPublications={onNavigateToPublications}
        onNavigateToStatistics={onNavigateToStatistics}
        onNavigateToPublicEducation={onNavigateToPublicEducation}
        onNavigateToDocuments={onNavigateToDocuments}
        onNavigateToEnterTransitDepart={onNavigateToEnterTransitDepart}
        onNavigateToReside={onNavigateToReside}
        onNavigateToEServicesForms={onNavigateToEServicesForms}
      />
    </div>
  );
}
