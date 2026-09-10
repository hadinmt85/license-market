"use client";
import Image from "next/image";
import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");

    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [ageError, setAgeError] = useState("");

    function handleClick() {
        if (name.length < 5) {
            setNameError("اسم باید حداقل پنج حرف باشد");
        } else {
            setNameError("");
        }

        if (password.length < 8 || password[0] !== password[0].toUpperCase()) {
            setPasswordError("پسورد باید حداقل ۸ حرف باشد و حرف اول بزرگ باشد");
        } else {
            setPasswordError("");
        }

        if (Number(age) < 18) {
            setAgeError("سن کم است");
        } else {
            setAgeError("");
        }
    }

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center">
            <div className="flex flex-col w-90 h-110 justify-center gap-3 items-center mx-auto my-auto bg-white rounded-2xl shadow-2xl max-sm:w-70 max-sm:h-120 max-sm:gap-4">
                <div className="flex flex-row items-center gap-5">
                    <span className="text-2xl font-semibold text-red-500">ثبت نام</span>
                    <span className="w-0.5 h-11 bg-amber-800"></span>
                    <Image src="/foto/lisens.png" alt="" width={64} height={24} />
                </div>
                <input type="text" placeholder="اسم" className="bg-white p-3 w-80 outline-none rounded-xl border border-gray-200 max-sm:w-60" value={name} onChange={(e) => setName(e.target.value)} />
                {nameError && (
                    <p className="text-red-600 font-semibold text-sm">{nameError}</p>
                )}
                <input type="text" placeholder="پسورد" className="bg-white p-3 w-80 outline-none rounded-xl border border-gray-200 max-sm:w-60" value={password} onChange={(e) => setPassword(e.target.value)} />
                {passwordError && (
                    <p className="text-red-600 font-semibold text-sm">{passwordError}</p>
                )}
                <input type="number" placeholder="سن" className="bg-white p-3 w-80 outline-none rounded-xl border border-gray-200 max-sm:w-60" value={age} onChange={(e) => setAge(e.target.value)} />
                {ageError && (
                    <p className="text-red-600 font-semibold text-sm">{ageError}</p>
                )}
                <button className="w-80 text-white bg-red-500 rounded-2xl font-semibold p-3 cursor-pointer max-sm:w-60" onClick={handleClick} >
                    ورود
                </button>
            </div>
        </div>
    );
}

export default App;