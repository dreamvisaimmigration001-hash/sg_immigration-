import React from "react";

export default function TrafficNotice({ notice }) {
  if (!notice) return null;

  return (
    <div className="traffic-notice-banner">
      <div className="traffic-notice-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1c76d5" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <div className="traffic-notice-text">
        <p>
          For real-time traffic situation, call <strong>{notice.hotlineLabel}: {notice.hotline}</strong>
        </p>
        <p>
          Alternatively, you can view images of traffic conditions through{" "}
          <a
            href={notice.onemotoringUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="onemotoring-link"
          >
            One Motoring
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ marginLeft: "4px", verticalAlign: "-1px" }}
            >
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          .
        </p>
      </div>
    </div>
  );
}
