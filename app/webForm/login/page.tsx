"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleClick() {
        if (name.trim() === "") {
            alert("اسم را وارد کنید");
            return;
        } else if (name.length < 5) {
            alert("اسم باید حداقل پنج حرف باشد");
            return;
        }

        if (password.trim() === "") {
            alert("پسورد را وارد کنید");
            return;
        } else if (password.length < 8 || password[0] !== password[0].toUpperCase()) {
            alert("پسورد باید حداقل ۸ حرف باشد و حرف اول بزرگ باشد");
            return;
        } else if (!/[a-zA-Z]/.test(password)) {
            alert("پسورد باید حداقل یک حرف داشته باشد");
            return;
        } else if (!/[0-9]/.test(password)) {
            alert("پسورد باید حداقل یک عدد داشته باشد");
            return;
        }

        alert("ورود موفق");
    }

    return (
        <div dir="rtl" className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-4 px-4 py-8 sm:gap-6 sm:py-10">
            <Image src="/foto/lisens.png" alt="" width={100} height={50} className="w-16 sm:w-20 md:w-24 h-auto" />
            <div className="relative isolate w-full max-w-[260] sm:max-w-xs md:max-w-sm mt-6 sm:mt-8">
                <div className="absolute -top-2 -left-3 -right-3 h-16 rounded-2xl bg-red-500 z-0 sm:-top-3 sm:-left-3 sm:-right-3 sm:h-20 md:-top-4 md:-left-5 md:-right-5 md:h-28"></div>
                <div className="relative z-10 w-full rounded-3xl border-3 bg-white p-4 sm:p-5 md:p-6">
                    <h1 className="text-center text-lg sm:text-xl md:text-2xl font-bold text-gray-900">ورود</h1>
                    <p className="mt-1 text-center text-xs sm:text-sm text-gray-500">
                        حساب کاربری ندارید؟{" "}
                        <Link href={"/webForm"} className="cursor-pointer font-semibold text-green-600">ثبت نام کنید</Link>
                    </p>
                    <div className="mt-5 sm:mt-6 flex flex-col gap-3">
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 sm:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21a8 8 0 0 0-16 0" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="نام کاربری"
                                className="w-full rounded-xl border border-gray-200 bg-white py-2.5 sm:py-3 pl-10 sm:pl-11 pr-3 sm:pr-4 text-sm sm:text-base text-right outline-none focus:border-red-400"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 sm:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-10-8-10-8a18.4 18.4 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                        <path d="M1 1l22 22" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 sm:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s3-8 11-8 11 8 11 8-3 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
                                )}
                            </button>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="رمز عبور"
                                className="w-full rounded-xl border border-gray-200 bg-white py-2.5 sm:py-3 pl-10 sm:pl-11 pr-3 sm:pr-4 text-sm sm:text-base text-right outline-none focus:border-red-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            className="mt-5 sm:mt-6 w-full cursor-pointer rounded-xl bg-black py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white transition hover:bg-gray-900"
                            onClick={handleClick}
                        >
                            ورود
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;