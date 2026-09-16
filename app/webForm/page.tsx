"use client";
import Image from "next/image";
import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
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

        if (age.trim() === "") {
            alert("سن را وارد کنید");
            return;
        } else if (Number(age) < 18) {
            alert("سن کم است");
            return;
        }
        
        alert("ورود موفق");
    }

    return (
        <div dir="rtl" className="bg-gray-100 min-h-screen flex flex-col items-center justify-center gap-6 px-4">
            <Image src="/foto/lisens.png" alt="" width={100} height={50} />
            <div className="w-full max-w-md rounded-3xl border-3 border-red-500 bg-white p-6 shadow-xl">
                <h1 className="text-center text-xl font-bold text-gray-900">ثبت نام</h1>
                <p className="mt-1 text-center text-sm text-gray-500">
                    قبلاً ثبت‌نام کرده‌اید؟ {" "}
                    <span className="cursor-pointer font-semibold text-green-600">وارد شوید</span>
                </p>
                <div className="mt-6 flex flex-col gap-3">
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21a8 8 0 0 0-16 0" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="اسم"
                            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-right outline-none focus:border-red-400"
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-10-8-10-8a18.4 18.4 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                    <path d="M1 1l22 22" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s3-8 11-8 11 8 11 8-3 8-11 8-11-8-11-8z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            )}
                        </button>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="پسورد"
                            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-right outline-none focus:border-red-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <path d="M16 2v4M8 2v4M3 10h18" />
                            </svg>
                        </span>
                        <input
                            type="number"
                            placeholder="سن"
                            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-right outline-none focus:border-red-400"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                </div>
                <button
                    className="mt-6 w-full cursor-pointer rounded-xl bg-black py-3 font-bold text-white transition hover:bg-gray-900"
                    onClick={handleClick}
                >
                    ورود
                </button>
            </div>
        </div>
    );
}

export default App;