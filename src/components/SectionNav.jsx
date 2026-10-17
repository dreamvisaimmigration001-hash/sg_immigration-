import React from "react";

export default function SectionNav({ onSectionClick }) {
  const sections = [
    { id: "air", label: "Air Checkpoints" },
    { id: "land", label: "Land Checkpoints" },
    { id: "sea", label: "Sea Checkpoints" },
  ];

  return (
    <nav className="checkpoint-quicklinks-nav" aria-label="Checkpoint Categories">
      {sections.map((sec) => (
        <span
          key={sec.id}
          className="checkpoint-quicklink-item not-clickable"
          tabIndex={-1}
          style={{ pointerEvents: "none", cursor: "default" }}
        >
          {sec.label}
        </span>
      ))}
    </nav>
  );
}
