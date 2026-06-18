"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  type ChatMessage,
  getBotResponse,
  QUICK_REPLIES,
} from "@/lib/chatbot";
import { PRIMARY_PHONE } from "@/lib/contact";

const GREETING: ChatMessage = {
  id: "greeting",
  role: "bot",
  text: "Hi there! 👋 I'm the ScaleView assistant. Ask me about our cloud services, pricing, or how to get started.",
};

function openLeadPopup() {
  window.dispatchEvent(new CustomEvent("sv:open-lead"));
}

export default function Chatbot() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [messages, typing, reduce]);

  useEffect(() => {
    const onOpenChat = () => setOpen(true);
    window.addEventListener("sv:open-chat", onOpenChat);

    const onChatClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const trigger = target?.closest("[data-chat]");
      if (!trigger) return;
      e.preventDefault();
      e.stopPropagation();
      setOpen(true);
    };
    document.addEventListener("click", onChatClick, true);

    return () => {
      window.removeEventListener("sv:open-chat", onOpenChat);
      document.removeEventListener("click", onChatClick, true);
    };
  }, []);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || typing) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text: trimmed,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    const wantsConsultation = /consultation|book|callback|call me|quote|talk to/i.test(
      trimmed,
    );

    window.setTimeout(() => {
      const reply = getBotResponse(trimmed);
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}`,
        role: "bot",
        text: reply,
      };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);

      if (wantsConsultation) {
        window.setTimeout(openLeadPopup, 600);
      }
    }, 700 + Math.random() * 400);
  };

  const ui = (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            className="sv-chatbot-panel flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_80px_-20px_rgba(6,11,28,0.45)]"
            role="dialog"
            aria-modal="true"
            aria-label="ScaleView chat assistant"
          >
            <div className="flex items-center gap-3 bg-gradient-to-r from-brand to-brand-600 px-4 py-3.5 text-white">
              <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-white/15">
                <Image
                  src="/images/logo.webp"
                  alt=""
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-brand bg-emerald-400" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-bold">ScaleView Assistant</p>
                <p className="text-xs text-white/75">Usually replies instantly</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid h-8 w-8 place-items-center rounded-lg text-white/80 transition-colors hover:bg-white/15 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div
              ref={scrollRef}
              className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto bg-[#f7f9fc] p-4"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[88%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "rounded-br-sm bg-brand text-white"
                        : "rounded-bl-sm border border-line bg-white text-ink shadow-sm"
                    }`}
                  >
                    {m.text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                      i % 2 === 1 ? (
                        <strong key={i} className="font-semibold">
                          {part}
                        </strong>
                      ) : (
                        <span key={i}>{part}</span>
                      ),
                    )}
                  </div>
                </div>
              ))}

              {typing && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-line bg-white px-4 py-3 shadow-sm">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:300ms]" />
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-line bg-white px-3 py-2.5">
              {QUICK_REPLIES.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendMessage(q)}
                  disabled={typing}
                  className="rounded-full border border-line bg-[#f7f9fc] px-3 py-1 text-xs font-medium text-ink transition-colors hover:border-brand/40 hover:text-brand disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center gap-2 border-t border-line bg-white p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                aria-label="Chat message"
                className="min-w-0 flex-1 rounded-xl border border-line bg-[#f7f9fc] px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-brand focus:ring-2 focus:ring-brand/15"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                aria-label="Send message"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand text-white transition-colors hover:bg-brand-600 disabled:opacity-40"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                  <path d="M3.4 20.6 21 12 3.4 3.4l2.8 7.2L17 12l-10.8 1.4-2.8 7.2z" />
                </svg>
              </button>
            </form>

            <div className="border-t border-line bg-white px-3 py-2 text-center">
              <button
                type="button"
                data-lead
                className="text-xs font-semibold text-brand hover:underline"
              >
                Book free consultation
              </button>
              <span className="mx-1.5 text-line">·</span>
              <a
                href={`tel:${PRIMARY_PHONE.tel}`}
                className="text-xs font-semibold text-muted hover:text-brand"
              >
                {PRIMARY_PHONE.display}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close chat" : "Open chat assistant"}
        className="sv-chatbot-launcher flex items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-600 text-white shadow-[0_16px_40px_-12px_rgba(11,92,255,0.85)] ring-4 ring-white/90 transition-transform active:scale-95"
      >
        <span className="relative flex h-full w-full items-center justify-center">
          {open ? (
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
            </svg>
          ) : (
            <>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
                <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.3A8 8 0 1 1 21 12Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-cyan text-[0.6rem] font-bold text-navy">
                1
              </span>
            </>
          )}
        </span>
      </button>
    </>
  );

  if (!mounted) return ui;

  return createPortal(ui, document.body);
}
