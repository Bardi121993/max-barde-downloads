"use client";

import { useState } from "react";
import type { ContentItem } from "@/lib/content";
import DownloadModal from "./DownloadModal";

type Props = {
  item: ContentItem;
};

const categoryLabel: Record<ContentItem["category"], string> = {
  article: "Article",
  ebook: "Ebook",
  summary: "Book Summary",
};

export default function ContentCard({ item }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="group flex flex-col rounded-2xl border p-6 transition-all duration-300"
        style={{
          backgroundColor: "#111111",
          borderColor: "#1f1f1f",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "#2a2a2a";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "#1f1f1f";
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        }}
      >
        {/* Category badge */}
        <span
          className="mb-4 inline-block self-start rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: "rgba(251, 191, 36, 0.08)", color: "#fbbf24" }}
        >
          {categoryLabel[item.category]}
        </span>

        {/* Title & description */}
        <h3 className="mb-2 text-base font-semibold leading-snug text-white">
          {item.title}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed" style={{ color: "#71717a" }}>
          {item.description}
        </p>

        {/* Tags */}
        <div className="mb-5 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md px-2 py-0.5 text-xs"
              style={{ backgroundColor: "#1a1a1a", color: "#52525b" }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Download button */}
        <button
          onClick={() => setShowModal(true)}
          className="flex w-full items-center justify-center gap-2 rounded-xl border py-2.5 text-sm font-medium transition-all duration-200"
          style={{ borderColor: "#2a2a2a", color: "#a1a1aa" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#fbbf24";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#fbbf24";
            (e.currentTarget as HTMLButtonElement).style.color = "#0a0a0a";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#2a2a2a";
            (e.currentTarget as HTMLButtonElement).style.color = "#a1a1aa";
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Free Download
        </button>
      </div>

      {showModal && (
        <DownloadModal item={item} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
