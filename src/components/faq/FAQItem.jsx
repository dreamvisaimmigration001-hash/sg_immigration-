import React, { useState } from "react";

// Official AskGov Illustrated Character Avatars
function AvatarIcon({ avatarIndex = 0 }) {
  const avatars = [
    // 1. Orange/Coral Avatar (Female with orange hair)
    (
      <svg width="56" height="56" viewBox="0 0 44 44" fill="none" className="askgov-avatar-svg">
        <circle cx="22" cy="22" r="22" fill="#FF7A59" />
        {/* Head/Hair */}
        <ellipse cx="22" cy="23" rx="10" ry="12" fill="#202020" />
        <ellipse cx="22" cy="24" rx="7.5" ry="9" fill="#FFD1B3" />
        {/* Face features */}
        <ellipse cx="22" cy="18" rx="8" ry="6" fill="#D9480F" />
        <circle cx="19.5" cy="23.5" r="1.1" fill="#202020" />
        <circle cx="24.5" cy="23.5" r="1.1" fill="#202020" />
        <path d="M21 26.5C21.5 27.2 22.5 27.2 23 26.5" stroke="#202020" strokeWidth="1.2" strokeLinecap="round" />
        {/* Shoulders */}
        <path d="M11 40C11 34 16 32 22 32C28 32 33 34 33 40" fill="#202020" />
      </svg>
    ),
    // 2. Blue Avatar (Male with blue shirt)
    (
      <svg width="56" height="56" viewBox="0 0 44 44" fill="none" className="askgov-avatar-svg">
        <circle cx="22" cy="22" r="22" fill="#3B82F6" />
        <ellipse cx="22" cy="21" rx="8.5" ry="10" fill="#F87171" />
        <ellipse cx="22" cy="23" rx="7" ry="8.5" fill="#FFE4D6" />
        <circle cx="19.5" cy="22.5" r="1.1" fill="#1E3A8A" />
        <circle cx="24.5" cy="22.5" r="1.1" fill="#1E3A8A" />
        <path d="M21 25.5C21.5 26.2 22.5 26.2 23 25.5" stroke="#1E3A8A" strokeWidth="1.2" strokeLinecap="round" />
        {/* Shirt */}
        <path d="M12 40C12 33 16.5 31 22 31C27.5 31 32 33 32 40" fill="#1E40AF" />
      </svg>
    ),
    // 3. Dark Blue Avatar (Female with afro/curls)
    (
      <svg width="56" height="56" viewBox="0 0 44 44" fill="none" className="askgov-avatar-svg">
        <circle cx="22" cy="22" r="22" fill="#1D4ED8" />
        <circle cx="22" cy="20" r="11" fill="#111827" />
        <ellipse cx="22" cy="24" rx="7.5" ry="9" fill="#D97706" />
        <circle cx="19.5" cy="23.5" r="1.1" fill="#111827" />
        <circle cx="24.5" cy="23.5" r="1.1" fill="#111827" />
        <path d="M21 26.5C21.5 27.2 22.5 27.2 23 26.5" stroke="#111827" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M11 40C11 34 16 32 22 32C28 32 33 34 33 40" fill="#F3F4F6" />
      </svg>
    ),
    // 4. Red/Coral Avatar (Female with bob cut)
    (
      <svg width="56" height="56" viewBox="0 0 44 44" fill="none" className="askgov-avatar-svg">
        <circle cx="22" cy="22" r="22" fill="#EF4444" />
        <ellipse cx="22" cy="21" rx="10" ry="11" fill="#7C2D12" />
        <ellipse cx="22" cy="23" rx="7" ry="8.5" fill="#FECDD3" />
        <circle cx="19.5" cy="22.5" r="1.1" fill="#7C2D12" />
        <circle cx="24.5" cy="22.5" r="1.1" fill="#7C2D12" />
        <path d="M21 25.5C21.5 26.2 22.5 26.2 23 25.5" stroke="#7C2D12" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 40C12 33.5 16.5 31.5 22 31.5C27.5 31.5 32 33.5 32 40" fill="#18181B" />
      </svg>
    ),
  ];

  return avatars[avatarIndex % avatars.length];
}

export default function FAQItem({
  article,
  isOpen,
  onToggle,
  isLiked,
  onToggleLike,
  index = 0,
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e) => {
    e.stopPropagation();
    navigator.clipboard?.writeText?.(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = (e) => {
    e.stopPropagation();
    onToggleLike(article.id);
  };

  return (
    <article className={`askgov-article-row ${isOpen ? "open" : ""}`}>
      <header
        className="askgov-article-header"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        <div className="askgov-article-left">
          <div className="askgov-avatar-container" aria-hidden="true">
            <AvatarIcon avatarIndex={article.avatarIndex ?? index} />
          </div>

          <div className="askgov-article-text-wrap">
            <h3 className="askgov-article-title">{article.title}</h3>
            <div className="askgov-article-meta-row">
              <span className="askgov-meta-updated">
                Updated {article.updatedAgo || article.updatedDate || "1y ago"}
              </span>
              <span className="askgov-meta-dot">•</span>
              <button
                type="button"
                className={`askgov-like-meta-btn ${isLiked ? "liked" : ""}`}
                onClick={handleLike}
                aria-label={`Like, ${article.likes + (isLiked ? 1 : 0)} likes`}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill={isLiked ? "#064cbd" : "none"}
                  stroke={isLiked ? "#064cbd" : "currentColor"}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                <span className="askgov-like-text">{article.likes + (isLiked ? 1 : 0)}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="askgov-article-right">
          <span className={`askgov-arrow-right-icon ${isOpen ? "open" : ""}`} aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </header>

      {isOpen && (
        <div className="askgov-article-body">
          <div className="askgov-article-content">
            {typeof article.content === "string" ? (
              <p>{article.content}</p>
            ) : (
              article.content
            )}
          </div>

          <footer className="askgov-article-footer">
            <button
              type="button"
              className="askgov-copy-link-btn"
              onClick={handleCopyLink}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span>{copied ? "Link Copied!" : "Copy link"}</span>
            </button>
          </footer>
        </div>
      )}
    </article>
  );
}
