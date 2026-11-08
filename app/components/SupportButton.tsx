"use client";

import { useState } from "react";
import Image from "next/image";

export default function SupportButton() {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const togglePanel = () => setIsPanelOpen((prev) => !prev);

    return (
        <div dir="rtl" className="fixed bottom-6 right-4 z-50 flex flex-col items-start gap-3 max-sm:bottom-4 max-sm:right-auto max-sm:left-4">
            {isPanelOpen && (
                <div className="w-[340] max-w-[calc(100vw-32px)] max-h-[calc(100vh-110px)] overflow-hidden rounded-xl bg-[#f2f2f2] shadow-2xl shadow-black/25 animate-in fade-in slide-in-from-bottom-4 duration-200">
                    <div className="flex items-center justify-between bg-[#ef4460] px-3.5 py-2.5 text-white">
                        <div className="flex items-center gap-2.5">
                            <div className="flex items-center">
                                <Image
                                    src="/foto/chat.png"
                                    alt=""
                                    width={38}
                                    height={38}
                                    className="relative z-10 h-9 w-9 rounded-full border-2 border-white bg-[#ef4460] object-cover"
                                />
                                <Image
                                    src="/foto/chat.png"
                                    alt=""
                                    width={38}
                                    height={38}
                                    className="-mr-3.5 h-9 w-9 rounded-full border-2 border-white bg-[#ef4460] object-cover"
                                />
                            </div>
                            <div>
                                <p className="text-sm font-bold">چت آنلاین لایسنس مارکت</p>
                                <p className="mt-0.5 text-[11px] text-white/80">
                                    مرکز تماس: <span dir="ltr" className="inline-block">021-91094400</span>
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={togglePanel}
                            aria-label="بستن"
                            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition hover:bg-white/20"
                        >
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                            </svg>
                        </button>
                    </div>
                    <div className="relative flex flex-col gap-3 p-3">
                        <span className="pointer-events-none absolute right-6 top-36 h-2.5 w-2.5 rounded-full border border-gray-300" />
                        <span className="pointer-events-none absolute left-5 top-64 h-3 w-3 rounded-full border border-gray-300" />
                        <span className="pointer-events-none absolute left-10 top-20 h-0.5 w-5 rotate-45 bg-gray-300" />
                        <span className="pointer-events-none absolute right-16 bottom-14 h-0.5 w-5 -rotate-45 bg-gray-300" />
                        <div className="relative flex items-end gap-2">
                            <Image src="/foto/chat.png" alt="" width={28} height={28} className="h-7 w-7 shrink-0 rounded-full bg-rose-100 object-cover" />
                            <div className="flex-1 rounded-2xl bg-white p-3 shadow-sm">
                                <p className="text-xs leading-6 text-gray-600">
                                    چت آنلاین تنها پلتفرم مشاوره پیش از خرید میباشد. جهت دریافت &quot;پشتیبانی پس از خرید&quot;، فقط از طریق
                                    &quot;پرتال مشتریان&quot; اقدام فرمایید
                                </p>
                                <div className="mt-2.5 flex flex-col gap-2">
                                    <button
                                        type="button"
                                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#ef4460] py-2 text-xs font-bold text-white transition hover:bg-[#e03350]"
                                    >
                                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 4.418-4.03 8-9 8-1.03 0-2.02-.15-2.94-.43L3 21l1.5-4.2C3.55 15.4 3 13.76 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
                                        </svg>
                                        مشاوره پیش از خرید
                                    </button>
                                    <button
                                        type="button"
                                        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#ef4460] py-2 text-xs font-bold text-white transition hover:bg-[#e03350]"
                                    >
                                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
                                            <rect x="3" y="5" width="18" height="14" rx="2" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
                                        </svg>
                                        پشتیبانی پس از خرید (پورتال مشتریان)
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex items-end gap-2">
                            <Image src="/foto/chat.png" alt="" width={28} height={28} className="h-7 w-7 shrink-0 rounded-full bg-rose-100 object-cover" />
                            <div className="flex-1 rounded-2xl bg-white p-3 shadow-sm">
                                <p className="text-xs leading-6 text-gray-600">
                                    ⚡💬❗خواهشمندیم پس از پر کردن فرم زیر، موضوع خود را به صورت کامل بیان کنید تا از اتلاف وقت در خدمات رسانی به شما
                                    جلوگیری شود. همچنین جهت دریافت &quot;پشتیبانی پس از خرید&quot; به &quot;پورتال مشتریان&quot; (
                                    <span dir="ltr" className="inline-block underline">
                                        license-market.ir/portal
                                    </span>
                                    ) مراجعه فرمایید.
                                </p>
                                <div className="mt-2 flex flex-col gap-1">
                                    <input
                                        type="email"
                                        placeholder="ایمیل"
                                        className="w-full border-0 border-b border-gray-300 bg-transparent px-1 py-2 text-xs text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#ef4460]"
                                    />
                                    <input
                                        type="tel"
                                        inputMode="numeric"
                                        onInput={(e) => {
                                            e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
                                        }}
                                        placeholder="شماره موبایل"
                                        className="w-full border-0 border-b border-gray-300 bg-transparent px-1 py-2 text-xs text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#ef4460]"
                                    />
                                </div>
                                <div className="mt-3 flex justify-center">
                                    <button
                                        type="button"
                                        className="cursor-pointer rounded-full bg-[#ef4460] px-9 py-1.5 text-xs font-bold text-white shadow-md shadow-rose-500/30 transition hover:bg-[#e03350] active:scale-95"
                                    >
                                        شروع
                                    </button>
                                </div>
                            </div>
                        </div>
                        <p className="mr-9 text-[10px] text-gray-400">لحظاتی پیش</p>
                    </div>
                </div>
            )}
            <button
                type="button"
                onClick={togglePanel}
                aria-label="پشتیبانی آنلاین"
                className="flex h-15 w-15 items-center justify-center rounded-full bg-rose-500 shadow-lg shadow-rose-500/30 transition duration-300 hover:scale-105 active:scale-95 max-sm:h-14 max-sm:w-14"
            >
                {isPanelOpen ? (
                    <svg viewBox="0 0 24 24" className="h-6 w-6 cursor-pointer text-white" fill="none" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                ) : (
                    <Image className="size-7 h-15 w-15 cursor-pointer rounded-full" src="/foto/chat.png" alt="" width={60} height={60} />
                )}
            </button>
        </div>
    );
}