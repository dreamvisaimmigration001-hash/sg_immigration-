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
        <a
          key={sec.id}
          href={`#${sec.id}-checkpoints`}
          className="checkpoint-quicklink-item"
          onClick={(e) => {
            e.preventDefault();
            onSectionClick(sec.id);
          }}
        >
          {sec.label}
        </a>
      ))}
    </nav>
  );
}
