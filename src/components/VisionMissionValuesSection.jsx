import React from "react";
import "./VisionMissionValuesPage.css";

export default function VisionMissionValuesSection() {
  return (
    <div className="vmv-section-container">
      {/* Who We Are Institutional Introduction */}
      <div className="vmv-intro-section">
        <p className="vmv-intro-paragraph">
          The Immigration &amp; Checkpoints Authority (ICA) is responsible for securing Singapore’s borders against the entry of undesirable people and cargo through land, air and sea checkpoints.
        </p>
        <p className="vmv-intro-paragraph">
          ICA also administers immigration and registration services, such as issuing passports and Identity Cards to Singapore citizens, and immigration passes and permits to foreigners. As a security agency, we enforce laws and regulations relating to immigration and registration. We are a member of the{" "}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "#home";
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="vmv-link"
          >
            Home Team under the Ministry of Home Affairs
          </a>
          .
        </p>
      </div>

      {/* 1. Our Vision */}
      <section className="vmv-section" aria-labelledby="vmv-vision-heading">
        <h2 id="vmv-vision-heading" className="vmv-section-heading">Our Vision</h2>
        <p className="vmv-statement-title">Secure Borders, Safe Singapore</p>
      </section>

      {/* 2. Our Mission */}
      <section className="vmv-section" aria-labelledby="vmv-mission-heading">
        <h2 id="vmv-mission-heading" className="vmv-section-heading">Our Mission</h2>
        <p className="vmv-statement-title">
          We secure our borders and uphold our laws on immigration and national registration
        </p>
      </section>

      {/* 3. Our Values */}
      <section className="vmv-section" aria-labelledby="vmv-values-heading">
        <h2 id="vmv-values-heading" className="vmv-section-heading">Our Values</h2>
        <p className="vmv-statement-title">Integrity, Commitment and Accountability</p>
      </section>

      {/* 4. Our Pledge */}
      <section className="vmv-section vmv-section--pledge" aria-labelledby="vmv-pledge-heading">
        <h2 id="vmv-pledge-heading" className="vmv-section-heading">Our Pledge</h2>
        <div className="vmv-pledge-paragraphs">
          <p>
            We, as ICA officers, pledge to uphold our values of integrity, commitment, and accountability, embracing a culture of teamwork, trust and care.
          </p>
          <p>
            We pledge to ensure secure checkpoint clearance; and effective administration of our laws on immigration and registration.
          </p>
          <p>
            We pledge as part of the Home Team to make Singapore a safe and secure home for all.
          </p>
        </div>
      </section>

      {/* Official ICA Guardians of Our Borders Banner */}
      <div className="vmv-banner-wrapper">
        <img
          src="/assets/guardians-of-our-borders.jpg"
          onError={(e) => {
            e.currentTarget.src =
              "https://www.ica.gov.sg/images/default-source/ica-images/about-us/updated-ica-social-media-banner-fb---copy1.jpg";
          }}
          alt="ICA Social Media Banner - Guardians of our borders"
          className="vmv-banner-img"
          loading="lazy"
        />
      </div>
    </div>
  );
}
