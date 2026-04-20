"use client";

import { useState } from "react";
import type { ContentItem } from "@/lib/content";

type Props = {
  item: ContentItem;
  onClose: () => void;
};

export default function DownloadModal({ item, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, itemId: item.id, itemTitle: item.title }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Please try again.");
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border p-8"
        style={{ backgroundColor: "#111111", borderColor: "#2a2a2a" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full transition-colors"
          style={{ color: "#71717a" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1f1f1f")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center">
            <div
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(251, 191, 36, 0.1)" }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-white">Check your inbox!</h3>
            <p style={{ color: "#a1a1aa" }} className="text-sm leading-relaxed">
              We&apos;ve sent the download link for <strong className="text-white">{item.title}</strong> to{" "}
              <strong className="text-white">{email}</strong>.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-xl py-3 text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#fbbf24", color: "#0a0a0a" }}
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span
                className="mb-3 inline-block rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: "rgba(251, 191, 36, 0.1)", color: "#fbbf24" }}
              >
                Free Download
              </span>
              <h3 className="mb-1 text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm" style={{ color: "#71717a" }}>
                Enter your email to receive the download link instantly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600"
                style={{
                  backgroundColor: "#1a1a1a",
                  borderColor: "#2a2a2a",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#fbbf24")}
                onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
              />

              {status === "error" && (
                <p className="text-sm text-red-400">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !email}
                className="flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-opacity disabled:opacity-50"
                style={{ backgroundColor: "#fbbf24", color: "#0a0a0a" }}
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Send me the download
                  </>
                )}
              </button>
            </form>

            <p className="mt-4 text-center text-xs" style={{ color: "#52525b" }}>
              No spam. Unsubscribe anytime.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
