import React, { useState, useEffect } from "react";
import GovMasthead from "./GovMasthead";
import SiteHeader from "./SiteHeader";
import Breadcrumbs from "./Breadcrumbs";
import EServicesBar from "./EServicesBar";
import SiteFooter from "./SiteFooter";
import "./TermsOfUsePage.css";

const TERMS_SECTIONS = [
  {
    id: "general",
    title: "General",
    content: (
      <ul>
        <li>
          This website is owned and operated by the Immigration &amp; Checkpoints Authority of Singapore (hereinafter "ICA").
        </li>
        <li>
          By accessing the ICA website ("this website"), you unconditionally accept to be legally bound by these Terms and Conditions of Use. If you do not agree to these Terms and Conditions of Use, please do not use this website.
        </li>
        <li>
          In case of any violation of these rules and regulations, ICA reserves the right to seek all remedies available by law and in equity for such violations. These Terms and Conditions of Use apply to all visits to this website, both now and in the future.
        </li>
        <li>
          If you choose to make an application through ICA’s e-service for which you provide us with personally identifiable data, we may share necessary data with other Government agencies, so as to serve you in a most efficient and effective way, unless such sharing is prohibited by law. We will NOT share your personal data with non-Government entities, except where such entities have been authorised to carry out specific Government services.
        </li>
        <li>
          ICA reserves the right to change these Terms and Conditions of Use from time to time at its sole discretion. All changes will be posted on this page, and your use of this website after such changes have been posted will constitute your agreement to the modified Terms and Conditions of Use and all of the changes. You should therefore read this page carefully each time you visit this website.
        </li>
      </ul>
    ),
  },
  {
    id: "proprietary",
    title: "Proprietary",
    content: (
      <ul>
        <li>
          The materials located on this website, including the information as well as any software programs available on or through this website ("the Contents"), are protected by copyright, trademark and other forms of proprietary rights. All rights, title and interest in the Contents are owned by, licensed to or controlled by ICA.
        </li>
      </ul>
    ),
  },
  {
    id: "content",
    title: "Content",
    content: (
      <ul>
        <li>
          Except as otherwise provided, the Contents of this website shall not be reproduced, republished, uploaded, posted, transmitted or otherwise distributed in any way, without the prior written permission of ICA.
        </li>
        <li>
          You may use, hyperlink, copy and distribute the contents found on this website solely for personal, internal, non-commercial, informational purposes only. You may download one copy of any information provided in this website onto a single computer for your own personal non-commercial use provided that you keep intact all accompanying copyright and other proprietary notices. You may not display, distribute or otherwise use any of the content found on this website for any commercial purpose unless you receive specific written consent from ICA.
        </li>
        <li>
          Modification of any of the Contents or use of the Contents for any other purpose will be a violation of ICA's copyright and other intellectual property rights. Graphics and images on this website are protected by copyright and may not be reproduced or appropriated in any manner without the written permission of their respective copyright owners.
        </li>
        <li>
          The design and layout of this website is protected by intellectual property and other laws and may not be copied or imitated in whole or in part. No logo, graphic, sound, image or search engine from this website may be copied or transmitted unless expressly permitted by ICA.
        </li>
      </ul>
    ),
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties and Liability",
    content: (
      <ul>
        <li>
          The Contents of this website are provided on an "as is" basis without warranties or representations of any kind. Without prejudice to the foregoing, ICA does not make any representations or warranties:
          <ul>
            <li>as to the accuracy, completeness, reliability, timeliness, currency, quality, non-infringement, title, or fitness for any particular purpose of the Contents of this website;</li>
            <li>that the Contents available through this website or any functions associated therewith will be uninterrupted or error-free, or that defects will be corrected or that this website and the server is and will be free of all viruses and/or other harmful elements.</li>
          </ul>
        </li>
        <li>
          ICA shall also not be liable for any damage, loss or expense of any kind arising directly or indirectly from the use of the website, any inaccuracy or incompleteness in the Contents of the website, or any errors or omissions in the transmission of the Contents.
        </li>
        <li>
          ICA shall not be responsible or held accountable in any way for any decision made or action taken by you or any third party in reliance upon the Contents of this website.
        </li>
      </ul>
    ),
  },
  {
    id: "right-of-access",
    title: "Right of Access",
    content: (
      <ul>
        <li>
          ICA reserves the right to update or modify this website from time to time. ICA further reserves all rights to deny or restrict access to this website to any particular person, or to block access from a particular Internet address to this website, at any time, without ascribing any reasons whatsoever.
        </li>
        <li>
          You agree that you will not:
          <ul>
            <li>use any robot, spider, other automatic device, or manual process to monitor or copy any pages within this website or the Contents without ICA's prior written permission;</li>
            <li>use any device, software or routine to interfere or attempt to interfere with the proper working of this website; and</li>
            <li>take any action that imposes an unreasonable or disproportionately large load on ICA's servers.</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    id: "hyperlinks-third-party",
    title: "Hyperlinks to Third Party Sites",
    content: (
      <ul>
        <li>
          This website contains hyperlinks to web sites which are not maintained nor controlled by ICA. ICA shall not be responsible for the content of any hyperlinked website or any hyperlink contained in a hyperlinked web site, and shall not be liable for any damages or loss arising from access to those websites. Use of the hyperlinks and access to such hyperlinked websites are entirely at your own risk.
        </li>
        <li>
          All hyperlinks to other websites are provided as a convenience to you as a user of this website. The inclusion of any hyperlink does not imply endorsement by ICA of such websites. In no circumstances shall ICA be considered to be associated or affiliated in whatever manner with any trade or service marks, logos, insignia or other devices used or appearing on websites to which this website is hyperlinked.
        </li>
      </ul>
    ),
  },
  {
    id: "hyperlinks-from-third-party",
    title: "Hyperlinks to This Website from Third Party Websites",
    content: (
      <ul>
        <li>
          Except as set forth below, caching and hyperlinks to, and the framing of this website or any of the Contents are prohibited.
        </li>
        <li>
          You may hyperlink to the Home Page of this website, upon prior notification to ICA in writing. You must make a specific request for, and secure permission from ICA prior to hyperlinking to, or framing, this website or any of the Contents, or engaging in similar activities. ICA reserves the right to impose conditions when permitting any hyperlinking to, or framing of this website or any of the Contents.
        </li>
        <li>
          Your hyperlinking to, or your framing of this website or any of the Contents constitute acceptance of these Terms and Conditions of Use. This is deemed to be the case even after the posting of any changes or modifications to these Terms and Conditions of Use. If you do not accept these Terms and Conditions of Use, you must discontinue linking to, or framing of this website or any of the Contents.
        </li>
        <li>
          In no circumstances shall ICA be considered to be associated or affiliated in any manner with any trade or service marks, logos, insignia or other devices used or appearing on websites that link to this website or any of the Contents.
        </li>
        <li>
          ICA reserves all rights to disable any links to, or frames of any site containing inappropriate, profane, defamatory, infringing, obscene, indecent or unlawful topics, names, material or information, or material or information that violates any written law, any applicable intellectual property, proprietary, privacy or publicity rights.
        </li>
        <li>
          ICA reserves the right to disable any unauthorised links or frames and disclaims any responsibility for the content available on any other site reached by links to or from this website or any of the Contents.
        </li>
      </ul>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: (
      <ul>
        <li>
          These Terms and Conditions of Use shall be governed and construed in accordance with laws of Singapore.
        </li>
      </ul>
    ),
  },
];

export default function TermsOfUsePage(props) {
  const { onNavigate } = props;

  // Initialize with all accordions open (matching "active" & "show" in original snippet)
  const [openSections, setOpenSections] = useState(() => {
    const initial = {};
    TERMS_SECTIONS.forEach((sec) => {
      initial[sec.id] = true;
    });
    return initial;
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "ICA | Terms of Use";

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
    if (onNavigate) onNavigate(id);
    else window.location.hash = "#" + id;
  };

  return (
    <div className="site-wrapper terms-of-use-page-wrapper">
      <GovMasthead />

      <SiteHeader
        activeView="terms-of-use"
        onNavigate={onNavigate}
      />

      <div id="page-content">
        <div className="main-body">
          <div className="page-content">
            {/* Breadcrumb Navigation */}
            <Breadcrumbs
              activeView="terms-of-use"
              onNavigate={onNavigate}
            />

            {/* Horizontal e-Services Sidebar / Navigation Bar */}
            <EServicesBar
              activeView="terms-of-use"
              onSelectService={handleSelectService}
            />

            <div className="container container--no-padding">
              {/* Page Title */}
              <div className="terms-page-header">
                <h1 className="terms-main-heading">
                  <span id="Main_TEA44200C001_Col01">Terms of Use</span>
                </h1>
                <hr className="terms-main-divider" />
              </div>

              {/* Quicklinks Navigation Bar (matches official layout; non-clickable per site policy) */}
              <nav
                className="section-nav sticky"
                id="quicklinks-section"
                aria-label="Terms of Use Categories"
              >
                {TERMS_SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    className="quicklinks-item not-clickable"
                    disabled
                    tabIndex={-1}
                    title={sec.title}
                  >
                    {sec.title}
                  </button>
                ))}
              </nav>

              {/* Main Standard Content: Accordions */}
              <div className="standard-content terms-standard-content">
                <div id="Main_TEA44200C001_Col02" className="sf_colsIn article"></div>

                {TERMS_SECTIONS.map((sec) => {
                  const isOpen = !!openSections[sec.id];
                  return (
                    <div className="terms-collapse-wrapper" key={sec.id} id={sec.id}>
                      <button
                        type="button"
                        className={`terms-collapse-title accordion ${isOpen ? "active" : ""}`}
                        onClick={() => toggleSection(sec.id)}
                        aria-expanded={isOpen}
                      >
                        <span>{sec.title}</span>
                        <svg
                          className="terms-chevron-icon"
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
                        <div className="terms-collapse-content panel show">
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
          className="terms-scroll-top"
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
