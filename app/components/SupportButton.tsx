"use client";

import { useState } from "react";
import Image from "next/image";

type PanelTab = "menu" | "chat";

export default function SupportButton() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<PanelTab>("menu");
    const [draft, setDraft] = useState("");

    const togglePanel = () => {
        setIsPanelOpen((prev) => {
            if (prev) setActiveTab("menu");
            return !prev;
        });
    };

    const handleSend = () => {
        if (!draft.trim()) return;
        setDraft("");
    };

    return (
        <div dir="rtl" className="fixed right-4 bottom-6 z-50 flex flex-col items-start gap-3 max-sm:bottom-4 max-sm:left-4">
            {isPanelOpen && (
                <div className=" w-96 max-w-[calc(100vw-32px)] overflow-hidden rounded-[28px] border border-rose-100/70 bg-white shadow-2xl shadow-rose-900/15 animate-in fade-in slide-in-from-bottom-4 duration-200" >
                    <div className="flex items-center justify-between bg-rose-500 px-5 py-4 text-white">
                        <div className="flex items-center gap-3">
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-2 ring-white/20">
                                <Image src="/foto/chat.png" alt="پشتیبانی" width={24} height={24} className="rounded-full" />
                            </span>
                            <div>
                                <p className="text-base font-bold">مرکز پشتیبانی</p>
                                <p className="flex items-center gap-1.5 text-xs text-white/85">
                                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
                                    پاسخگو هستیم
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={togglePanel}
                            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/10 transition hover:bg-white/25"
                            aria-label="بستن"
                        >
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                            </svg>
                        </button>
                    </div>
                    {activeTab === "menu" && (
                        <div className="flex flex-col gap-2.5 p-4">
                            <button
                                type="button"
                                onClick={() => setActiveTab("chat")}
                                className="group cursor-pointer flex items-center gap-3.5 rounded-2xl border border-transparent p-3.5 text-right transition hover:border-rose-100 hover:bg-rose-50/70 hover:shadow-sm"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 transition group-hover:bg-rose-500 group-hover:text-white">
                                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.418-4.03 8-9 8-1.03 0-2.02-.15-2.94-.43L3 21l1.5-4.2C3.55 15.4 3 13.76 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
                                    </svg>
                                </span>
                                <div className="cursor-pointer">
                                    <p className="text-sm font-bold text-gray-800">شروع گفتگو</p>
                                    <p className="mt-0.5 text-xs text-gray-400">پاسخ سریع تیم پشتیبانی</p>
                                </div>
                                <svg viewBox="0 0 24 24" className="mr-auto h-4 w-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
                                </svg>
                            </button>
                            <a
                                href="tel:+982191094400"
                                className="group flex items-center gap-3.5 rounded-2xl border border-transparent p-3.5 text-right transition hover:border-rose-100 hover:bg-rose-50/70 hover:shadow-sm"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 transition group-hover:bg-rose-500 group-hover:text-white">
                                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.5C3 4.67 3.67 4 4.5 4H7l2 5-2.5 1.5a12 12 0 0 0 6 6L14 14l5 2v2.5c0 .83-.67 1.5-1.5 1.5C9.6 20 3 13.4 3 5.5Z" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">تماس تلفنی</p>
                                    <p className="mt-0.5 text-xs text-gray-400">ارتباط مستقیم با ما</p>
                                </div>
                                <svg viewBox="0 0 24 24" className="mr-auto h-4 w-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
                                </svg>
                            </a>
                            <a
                                href="/faq"
                                className="group flex items-center gap-3.5 rounded-2xl border border-transparent p-3.5 text-right transition hover:border-rose-100 hover:bg-rose-50/70 hover:shadow-sm"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 transition group-hover:bg-rose-500 group-hover:text-white">
                                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M9.5 9a2.5 2.5 0 1 1 3.4 2.33c-.8.32-1.4 1.03-1.4 1.92V14" />
                                        <circle cx="12" cy="12" r="9" />
                                    </svg>
                                </span>
                                <div>
                                    <p className="text-sm font-bold text-gray-800">سوالات متداول</p>
                                    <p className="mt-0.5 text-xs text-gray-400">پاسخ سوالات پرتکرار</p>
                                </div>
                                <svg viewBox="0 0 24 24" className="mr-auto h-4 w-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
                                </svg>
                            </a>
                        </div>
                    )}
                    {activeTab === "chat" && (
                        <>
                            <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-2.5">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab("menu")}
                                    className="flex h-6 w-6 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100"
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
                                    </svg>
                                </button>
                                <p className="text-xs font-medium text-gray-500">بازگشت به منو</p>
                            </div>
                            <div className="flex h-64 flex-col gap-3 overflow-y-auto bg-gray-50/70 p-4">
                                <div className="flex items-start gap-2">
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
                                        پ
                                    </span>
                                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-white px-3.5 py-2.5 text-xs leading-6 text-gray-700 shadow-sm">
                                        سلام! خوشحال می‌شیم راهنماییتون کنیم، سوالتون رو بنویسید 🙌
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 border-t border-gray-100 p-3.5">
                                <input
                                    type="text"
                                    value={draft}
                                    onChange={(e) => setDraft(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="پیام خود را بنویسید..."
                                    className="min-w-0 flex-1 rounded-full border border-gray-200 px-4 py-2.5 text-sm outline-none transition focus:border-rose-400"
                                />
                                <button
                                    type="button"
                                    onClick={handleSend}
                                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white transition hover:bg-rose-600 active:scale-95"
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4 -rotate-90" fill="currentColor">
                                        <path d="M3 11l18-8-8 18-2-8-8-2Z" />
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
            <button
                type="button"
                onClick={togglePanel}
                aria-label="پشتیبانی آنلاین"
                className="
            flex h-15 w-15 items-center justify-center rounded-full
            bg-rose-500 shadow-lg shadow-rose-500/30
            transition duration-300 hover:scale-105 active:scale-95
            max-sm:h-14 max-sm:w-14
        "
            >
                {isPanelOpen ? (
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-white cursor-pointer" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                ) : (
                    <Image className="size-7 w-15 h-15 rounded-full cursor-pointer" src="/foto/chat.png" alt="" width={60} height={60} />
                )}
            </button>
        </div>
    );
}