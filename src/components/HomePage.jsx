import React, { useEffect, useState } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import AskGovWidget from "./AskGovWidget";
import ScrollToTop from "./ScrollToTop";
import scamCallersTileImg from "../assets/scam_callers_tile.jpg";
import "./HomePage.css";

export default function HomePage({
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
  onNavigateToCareerFaqs,
  onNavigate,
}) {
  const [activeModal, setActiveModal] = useState(null); // 'citizen' | 'pr' | 'ph' | 'visitor' | '1_ph' | '1_visitor' | null
  const [newsSlide, setNewsSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Immigration & Checkpoints Authority (ICA)";
  }, []);

  const handleNav = (e, viewName) => {
    e.preventDefault();
    setActiveModal(null);
    if (onNavigate) {
      onNavigate(viewName);
    } else {
      window.location.hash = "#" + viewName;
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openModal = (e, modalId) => {
    e.preventDefault();
    setActiveModal(modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const newsItems = [
    {
      id: "news-1",
      date: "25 Sep 2026",
      title: "Advisory on Scams Involving the Immigration & Checkpoints Authority (ICA)",
      image: "https://www.ica.gov.sg/Cwp/assets/ica/images/news/mediareleases-default.jpg",
      link: "newsroom",
    },
    {
      id: "news-2",
      date: "18 Sep 2026",
      title: "More Than 10kg of Cannabis Detected at Tuas Checkpoint",
      image: "https://www.ica.gov.sg/images/default-source/media-releases/2026/09/cannabis_seized_compressed_200kb.jpg?sfvrsn=96ef0e32_1",
      link: "newsroom",
    },
  ];

  return (
    <div className="site-wrapper home-page-root">
      <GovMasthead />

      <SiteHeader
        searchQuery=""
        setSearchQuery={() => {}}
        totalMatches={0}
        isSearching={false}
        activeView="home"
        onNavigate={onNavigate}
      />

      <div id="page-content">
        {/* Top Notice Announcement Banner (SGAC Carousel) */}
        <div className="home-hero-carousel">
          <div className="slides">
            <div className="carousel-slide">
              <a
                className="slide-wrapper"
                href="#eservicesandforms"
                onClick={(e) => handleNav(e, "eservicesandforms")}
                aria-label="Singapore Arrival Card (SGAC) banner: All travellers must submit their SGAC within 3 days of arrival. Submission is free."
              >
                <picture>
                  <source
                    srcSet="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/sgac-carousel-desktop-v4.jpg?sfvrsn=acc6087_6"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/sgac-carousel-mobile-v4.jpg?sfvrsn=acc6087_6"
                    media="(max-width: 767px)"
                  />
                  <img
                    src="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/sgac-carousel-mobile-v4.jpg?sfvrsn=acc6087_6"
                    alt="Singapore Arrival Card (SGAC) banner: All travellers must submit their SGAC within 3 days of arrival. Submission is free."
                    loading="lazy"
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>

        {/* Persona Cards Section (Citizen, PR, Pass Holder, Visitor) */}
        <div className="persona-cards">
          <div className="container container--no-padding">
            <div className="persona-card">
              <a
                id="citizen"
                href="#lb-citizen"
                onClick={(e) => openModal(e, "citizen")}
                title="Singapore Citizen"
              >
                <div className="persona-card__img-wrapper">
                  <picture>
                    <source srcSet="https://www.ica.gov.sg/images/default-source/ica-images/menu-icon/persona_sc2_vis.jpg?sfvrsn=6725b549_10" />
                    <img
                      className="persona-card__img"
                      src="https://www.ica.gov.sg/images/default-source/ica-images/menu-icon/persona_sc2_vis.jpg?sfvrsn=6725b549_10"
                      alt="Singapore Citizen Passport and IC"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="persona-card__content">
                  <span className="persona-card__title">Singapore Citizen</span>
                </div>
              </a>
            </div>

            <div className="persona-card">
              <a
                id="pr"
                href="#lb-pr"
                onClick={(e) => openModal(e, "pr")}
                title="Permanent Resident"
              >
                <div className="persona-card__img-wrapper">
                  <picture>
                    <source srcSet="https://www.ica.gov.sg/images/default-source/ica-images/menu-icon/persona_pr_vis.jpg?sfvrsn=7413e814_14" />
                    <img
                      className="persona-card__img"
                      src="https://www.ica.gov.sg/images/default-source/ica-images/menu-icon/persona_pr_vis.jpg?sfvrsn=7413e814_14"
                      alt="Permanent Resident Identity Card"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="persona-card__content">
                  <span className="persona-card__title">Permanent Resident</span>
                </div>
              </a>
            </div>

            <div className="persona-card">
              <a
                id="ph"
                href="#lb-ph"
                onClick={(e) => openModal(e, "ph")}
                title="Pass Holder"
              >
                <div className="persona-card__img-wrapper">
                  <picture>
                    <source srcSet="https://www.ica.gov.sg/images/default-source/ica-images/menu-icon/persona_pass-holder_vis_v2.jpg?sfvrsn=dd80dab8_4" />
                    <img
                      className="persona-card__img"
                      src="https://www.ica.gov.sg/images/default-source/ica-images/menu-icon/persona_pass-holder_vis_v2.jpg?sfvrsn=dd80dab8_4"
                      alt="Image of Pass Holder Cards"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="persona-card__content">
                  <span className="persona-card__title">Pass Holder</span>
                </div>
              </a>
            </div>

            <div className="persona-card">
              <a
                id="visitor"
                href="#lb-visitor"
                onClick={(e) => openModal(e, "visitor")}
                title="Visitor"
              >
                <div className="persona-card__img-wrapper">
                  <picture>
                    <source srcSet="https://www.ica.gov.sg/images/default-source/ica-images/menu-icon/persona_visitor__vis.jpg?sfvrsn=72a36355_6" />
                    <img
                      className="persona-card__img"
                      src="https://www.ica.gov.sg/images/default-source/ica-images/menu-icon/persona_visitor__vis.jpg?sfvrsn=72a36355_6"
                      alt="Image of ePass and Automated Immigration Lanes"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="persona-card__content">
                  <span className="persona-card__title">Visitor</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* EServices Horizontal Sidebar Bar */}
        <div className="container container--no-padding">
          <nav className="eservice-sidebar">
            <div className="container">
              <ul className="eservice-sidebar__list">
                <li>
                  <a href="#documents" onClick={(e) => handleNav(e, "documents")}>
                    <img
                      className="normal"
                      src="https://www.ica.gov.sg/images/default-source/ica-images/new-menu-icon/icon_sidebar_identity_outline6cd4809f336f41c29432352f61a00296.png?sfvrsn=6abbc1cb_6"
                      alt=""
                    />
                    <span className="label">Identity Cards, Passport and other Documents</span>
                  </a>
                </li>
                <li>
                  <a href="#enter-transit-depart" onClick={(e) => handleNav(e, "enter-transit-depart")}>
                    <img
                      className="normal"
                      src="https://www.ica.gov.sg/images/default-source/ica-images/new-menu-icon/icon_sidebar_applytostay_outline5ef41b81c95f43c2b7ef39de7be9e814.png?sfvrsn=aeab5857_6"
                      alt=""
                    />
                    <span className="label">Entering, Transiting and Departing</span>
                  </a>
                </li>
                <li>
                  <a href="#reside" onClick={(e) => handleNav(e, "reside")}>
                    <img
                      className="normal"
                      src="https://www.ica.gov.sg/images/default-source/ica-images/new-menu-icon/icon_sidebar_entering_outlineac1cb34130d54807b836de6acad34f4c.png?sfvrsn=42c9fb0a_6"
                      alt=""
                    />
                    <span className="label">Reside, Study and Work in Singapore</span>
                  </a>
                </li>
                <li>
                  <a href="#eservicesandforms" onClick={(e) => handleNav(e, "eservicesandforms")}>
                    <img
                      className="normal"
                      src="https://www.ica.gov.sg/images/default-source/ica-images/new-menu-icon/icon_sidebar_eservices_outline519fa6747f3b4200a3729c7983fdfef7.png?sfvrsn=b2a4e483_6"
                      alt=""
                    />
                    <span className="label">e-Services and Forms</span>
                  </a>
                </li>
                <li>
                  <a href="#status" onClick={(e) => handleNav(e, "checkstatus")}>
                    <img
                      className="normal"
                      src="https://www.ica.gov.sg/images/default-source/ica-images/new-menu-icon/icon_sidebar_checkstatus_outline5a83d7ed8571424ca362c3ff0e453b54.png?sfvrsn=1cf295f5_6"
                      alt=""
                    />
                    <span className="label">Check Status / Make Appointment</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="main-body">
          {/* Explore More Section */}
          <div className="explore-more">
            <span className="explore-more__title"></span>
            <div className="explore-more__listing">
              <a
                className="explore-more__item"
                href="#newsroom"
                onClick={(e) => handleNav(e, "newsroom")}
              >
                <div className="explore-more__media">
                  <div className="explore-more__overlay">
                    <img
                      className="web-hexagon"
                      src="https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                      alt=""
                    />
                  </div>
                  <picture className="explore-more__image">
                    <img
                      src={scamCallersTileImg}
                      alt="Beware of Scam Callers Impersonating as ICA officers"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <p>
                  Beware of Scam Callers Impersonating as ICA officers
                  <br />
                </p>
              </a>

              <a
                className="explore-more__item"
                href="#public-education"
                onClick={(e) => handleNav(e, "public-education")}
              >
                <div className="explore-more__media">
                  <div className="explore-more__overlay">
                    <img
                      className="web-hexagon"
                      src="https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                      alt=""
                    />
                  </div>
                  <picture className="explore-more__image">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/homepage-tiles/mobile-advisoryforlandlord.jpg?sfvrsn=faf195bd_3"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/homepage-tiles/web-advisoryforlandlord.jpg?sfvrsn=69359c58_3"
                    />
                    <img
                      src="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/homepage-tiles/web-advisoryforlandlord.jpg?sfvrsn=69359c58_3"
                      alt="Advisory for landlords"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <p>
                  Do Your Pre-Rental Homework
                  <br />
                </p>
              </a>

              <a
                className="explore-more__item"
                href="#public-education"
                onClick={(e) => handleNav(e, "public-education")}
              >
                <div className="explore-more__media">
                  <div className="explore-more__overlay">
                    <img
                      className="web-hexagon"
                      src="https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                      alt=""
                    />
                  </div>
                  <picture className="explore-more__image">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/homepage-tiles/mobile-myicamobile.jpg?sfvrsn=e0c7d63d_1"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/homepage-tiles/web-myicamobile.jpg?sfvrsn=e8c64c15_1"
                    />
                    <img
                      src="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/homepage-tiles/web-myicamobile.jpg?sfvrsn=e8c64c15_1"
                      alt="MyICA Mobile App"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <p>
                  MyICA Mobile App
                  <br />
                </p>
              </a>

              <a
                className="explore-more__item"
                href="#join-us"
                onClick={(e) => handleNav(e, "join-us")}
              >
                <div className="explore-more__media">
                  <div className="explore-more__overlay">
                    <img
                      className="web-hexagon"
                      src="https://www.ica.gov.sg/Cwp/assets/ica/images/page/careers/web-hexagon.svg"
                      alt=""
                    />
                  </div>
                  <picture className="explore-more__image">
                    <source
                      media="(max-width: 767px)"
                      srcSet="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/homepage-tiles/mobile-careers.jpg?sfvrsn=f7593134_3"
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/homepage-tiles/web-careers.jpg?sfvrsn=7c7efa9d_1"
                    />
                    <img
                      src="https://www.ica.gov.sg/images/default-source/ica-images/carousel-images/homepage-tiles/web-careers.jpg?sfvrsn=7c7efa9d_1"
                      alt="Careers"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <p>
                  Guardians of our Borders
                  <br />
                </p>
              </a>
            </div>
          </div>

          {/* News and Updates Section */}
          <section className="news-guide">
            <div className="container">
              <header className="news-guide__header">
                <h2>Latest Updates</h2>
              </header>
              <div className="news-guide__content">
                {/* Facebook Left Column */}
                <div className="news-guide__left">
                  <div className="news-guide__fb">
                    <div className="news-guide__fb__header news-guide__section-header">
                      <h3 className="news-guide__title">Facebook</h3>
                    </div>
                    <div className="news-guide__fb__container">
                      <div className="fb-embed-card">
                        <div className="fb-header">
                          <img
                            src="https://www.ica.gov.sg/images/default-source/ica-images/connectus/facebook-logo-white.png"
                            alt="ICA Facebook"
                            className="fb-icon-img"
                          />
                          <div>
                            <strong>Immigration &amp; Checkpoints Authority</strong>
                            <span className="fb-page-desc">Official Government Organization • 180k+ followers</span>
                          </div>
                        </div>
                        <div className="fb-body">
                          <p>
                            Stay updated with the latest border security operations, travel advisories, and community announcements directly on our official page.
                          </p>
                          <a
                            href="https://www.facebook.com/Immigration.Checkpoints.Authority/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fb-visit-btn"
                          >
                            Follow on Facebook ↗
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* News & Traffic Right Column */}
                <div className="news-guide__right">
                  <div className="news-guide__updates">
                    <div className="news-guide__updates__header news-guide__section-header">
                      <h3 className="news-guide__title">News</h3>
                      <a href="#newsroom" onClick={(e) => handleNav(e, "newsroom")}>
                        View all news <span className="icon icon-arrow-right2">›</span>
                      </a>
                    </div>

                    <div className="news-cards">
                      <div className="news-cards-grid">
                        {newsItems.map((item) => (
                          <article key={item.id} className="news-article-card">
                            <a href={`#${item.link}`} onClick={(e) => handleNav(e, item.link)}>
                              <div className="news-article-card__image">
                                <img src={item.image} alt={item.title} loading="lazy" />
                              </div>
                              <div className="news-article-card__text">
                                <time>{item.date}</time>
                                <div className="h3">{item.title}</div>
                                <span className="icon icon-arrow-right2">›</span>
                              </div>
                            </a>
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Traffic updates */}
                  <div className="news-guide__traffic">
                    <a
                      className="news-guide__link"
                      href="#checkpoints"
                      onClick={(e) => handleNav(e, "checkpoints")}
                    >
                      <div className="news-guide__link__image">
                        <img
                          src="https://www.ica.gov.sg/Cwp/assets/ica/images/traffic.png"
                          alt="Checkpoint Traffic"
                          loading="lazy"
                        />
                      </div>
                      <div className="news-guide__link__text">
                        <p>Check traffic at Woodlands and Tuas checkpoints</p>
                        <span className="icon icon-external-link">↗</span>
                      </div>
                    </a>
                    <p className="traffic-hotline">
                      For real-time traffic situation, call CHECK-TIPS hotline{" "}
                      <a href="tel:68630117">6863 0117</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* =========================================================================
         INTERACTIVE LIGHTBOX MODALS
         ========================================================================= */}
      {/* Lightbox 1: Singapore Citizen */}
      {activeModal === "citizen" && (
        <div className="lightbox-wrapper active" id="lb-citizen">
          <div className="lightbox-overlay" onClick={closeModal}></div>
          <div className="lightbox-content">
            <div className="lb-close" onClick={closeModal} role="button" tabIndex={0}>✕</div>
            <div className="lb-top-bar">Singapore Citizen</div>
            <div className="lb-content">
              <a className="lb-normal lb-button-6" href="#documents" onClick={(e) => handleNav(e, "documents")}>
                <div className="lb-button-title">Apply/Renew</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Passport</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#documents" onClick={(e) => handleNav(e, "documents")}>
                <div className="lb-button-title">Change of Address</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Identity Card</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#documents" onClick={(e) => handleNav(e, "documents")}>
                <div className="lb-button-title">Re-Register</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Identity Card for 30/55-year-olds</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-title">Apply</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Singapore Citizenship</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#eservicesandforms" onClick={(e) => handleNav(e, "eservicesandforms")}>
                <div className="lb-button-title">Submit</div>
                <div className="lb-button-content">
                  <div className="lb-middle">SG Arrival Card</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#documents" onClick={(e) => handleNav(e, "documents")}>
                <div className="lb-button-title">...</div>
                <div className="lb-button-content">
                  <div className="lb-middle">See More</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox 2: Permanent Resident */}
      {activeModal === "pr" && (
        <div className="lightbox-wrapper active" id="lb-pr">
          <div className="lightbox-overlay" onClick={closeModal}></div>
          <div className="lightbox-content">
            <div className="lb-close" onClick={closeModal} role="button" tabIndex={0}>✕</div>
            <div className="lb-top-bar">Permanent Resident</div>
            <div className="lb-content">
              <a className="lb-normal lb-button-5" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-title">Apply</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Permanent Residence</div>
                </div>
              </a>
              <a className="lb-normal lb-button-5" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-title">Apply/Renew</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Re-entry permit</div>
                </div>
              </a>
              <a className="lb-normal lb-button-5" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-title">Transfer/Update Travel Document</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Re-Entry Permit</div>
                </div>
              </a>
              <a className="lb-normal lb-button-5" href="#eservicesandforms" onClick={(e) => handleNav(e, "eservicesandforms")}>
                <div className="lb-button-title">Submit</div>
                <div className="lb-button-content">
                  <div className="lb-middle">SG Arrival Card</div>
                </div>
              </a>
              <a className="lb-normal lb-button-5" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-title">...</div>
                <div className="lb-button-content">
                  <div className="lb-middle">See More</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox 3: Pass Holder */}
      {activeModal === "ph" && (
        <div className="lightbox-wrapper active" id="lb-ph">
          <div className="lightbox-overlay" onClick={closeModal}></div>
          <div className="lightbox-content">
            <div className="lb-close" onClick={closeModal} role="button" tabIndex={0}>✕</div>
            <div className="lb-top-bar">Pass Holder</div>
            <div className="lb-content">
              <a className="lb-normal lb-button-6" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-title">Apply/Renew</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Long-Term Visit Pass</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-title">Apply/Renew</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Student's Pass</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-title">Apply</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Permanent Residence</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6 lb-card-has-sub" href="#1_ph" onClick={(e) => openModal(e, "1_ph")}>
                <div className="lb-button-title">Update</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Particulars/Address ›</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#eservicesandforms" onClick={(e) => handleNav(e, "eservicesandforms")}>
                <div className="lb-button-title">Submit</div>
                <div className="lb-button-content">
                  <div className="lb-middle">SG Arrival Card</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-title">...</div>
                <div className="lb-button-content">
                  <div className="lb-middle">See More</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sub-Lightbox 3.1: Pass Holder > Particulars/Address */}
      {activeModal === "1_ph" && (
        <div className="lightbox-wrapper active" id="1_ph">
          <div className="lightbox-overlay" onClick={closeModal}></div>
          <div className="lightbox-content">
            <div className="lb-close" onClick={closeModal} role="button" tabIndex={0}>✕</div>
            <div className="lb-top-bar">Pass Holder &gt; Particulars/Address</div>
            <div className="lb-content">
              <a className="lb-back lb-card-has-sub lb-button-3" href="#lb-ph" onClick={(e) => openModal(e, "ph")}>
                <div className="lb-button-content">
                  <div className="lb-middle" style={{ color: "#202020", fontWeight: "bold" }}>← Go Back</div>
                </div>
              </a>
              <a className="lb-normal lb-button-3" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-content">
                  <div className="lb-middle">Long-Term Visit Pass</div>
                </div>
              </a>
              <a className="lb-normal lb-button-3" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-content">
                  <div className="lb-middle">Student's Pass</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox 4: Visitor */}
      {activeModal === "visitor" && (
        <div className="lightbox-wrapper active" id="lb-visitor">
          <div className="lightbox-overlay" onClick={closeModal}></div>
          <div className="lightbox-content">
            <div className="lb-close" onClick={closeModal} role="button" tabIndex={0}>✕</div>
            <div className="lb-top-bar">Visitor</div>
            <div className="lb-content">
              <a className="lb-normal lb-button-6" href="#enter-transit-depart" onClick={(e) => handleNav(e, "enter-transit-depart")}>
                <div className="lb-button-title">Check</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Entry Visa Requirement</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#eservicesandforms" onClick={(e) => handleNav(e, "eservicesandforms")}>
                <div className="lb-button-title">Submit</div>
                <div className="lb-button-content">
                  <div className="lb-middle">SG Arrival Card</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#eservicesandforms" onClick={(e) => handleNav(e, "eservicesandforms")}>
                <div className="lb-button-title">Search</div>
                <div className="lb-button-content">
                  <div className="lb-middle">e-Pass Record</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#enter-transit-depart" onClick={(e) => handleNav(e, "enter-transit-depart")}>
                <div className="lb-button-title">Apply to</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Extend Stay</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6 lb-card-has-sub" href="#1_visitor" onClick={(e) => openModal(e, "1_visitor")}>
                <div className="lb-button-title">Apply</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Long-Term Visit Pass/ Pre-Marriage LTVP Assessment ›</div>
                </div>
              </a>
              <a className="lb-normal lb-button-6" href="#enter-transit-depart" onClick={(e) => handleNav(e, "enter-transit-depart")}>
                <div className="lb-button-title">...</div>
                <div className="lb-button-content">
                  <div className="lb-middle">See More</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sub-Lightbox 4.1: Visitor > LTVP Assessment */}
      {activeModal === "1_visitor" && (
        <div className="lightbox-wrapper active" id="1_visitor">
          <div className="lightbox-overlay" onClick={closeModal}></div>
          <div className="lightbox-content">
            <div className="lb-close" onClick={closeModal} role="button" tabIndex={0}>✕</div>
            <div className="lb-top-bar">Visitor &gt; Long-Term Visit Pass/ Pre-Marriage LTVP Assessment</div>
            <div className="lb-content">
              <a className="lb-back lb-card-has-sub lb-button-3" href="#lb-visitor" onClick={(e) => openModal(e, "visitor")}>
                <div className="lb-button-content">
                  <div className="lb-middle" style={{ color: "#202020", fontWeight: "bold" }}>← Go Back</div>
                </div>
              </a>
              <a className="lb-normal lb-button-3" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-title">Apply</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Long-Term Visit Pass</div>
                </div>
              </a>
              <a className="lb-normal lb-button-3" href="#reside" onClick={(e) => handleNav(e, "reside")}>
                <div className="lb-button-title">Apply</div>
                <div className="lb-button-content">
                  <div className="lb-middle">Pre-Marriage LTVP Assessment (Prospective Spouse of Singapore Citizen)</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      <ScrollToTop />

      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
