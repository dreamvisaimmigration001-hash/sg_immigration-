import React from "react";

export default function CheckpointCard({ checkpoint }) {
  return (
    <div className="cp-group">
      <div className="cp-title">
        <span>{checkpoint.title}</span>
      </div>

      <div className="cp-content">
        <div className="cp-address">
          {checkpoint.addressLines.map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>

        <div className="cp-hours">
          {checkpoint.hours.split("\n").map((hLine, idx) => (
            <div key={idx}>{hLine}</div>
          ))}
        </div>

        {checkpoint.note && (
          <div className="cp-note">
            <p>{checkpoint.note.text}</p>
            {checkpoint.note.links && (
              <div className="cp-note-links">
                {checkpoint.note.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-link"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
