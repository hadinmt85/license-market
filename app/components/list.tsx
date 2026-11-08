"use client";

import { useState } from "react";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
    img: string;
    hover?: string;
    title: ReactNode;
    oldPrice?: string;
    price: string;
    showDiscount?: boolean;
}

function ProductCard({ img, hover, title, oldPrice, price, showDiscount }: Props) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative flex h-auto w-full max-w-[280px] flex-col gap-2 bg-white pb-4 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {showDiscount && (
                <span className="absolute top-3 right-3 z-10 bg-rose-500 font-semibold text-white text-sm px-3 py-0.5 rounded-full">
                    تخفیف
                </span>
            )}
            {hover && (
                <span
                    className={`absolute w-10 h-6 top-3 left-3 z-10 flex items-center justify-center rounded-full bg-rose-500 text-white text-lg font-bold transition-all duration-500 ease-in-out ${hovered
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                >
                    +
                </span>
            )}
            <div className="relative">
                <Image
                    className={`h-auto w-full rounded-2xl transition-opacity duration-500 ease-in-out ${hover && hovered ? "opacity-0" : "opacity-100"
                        }`}
                    src={img}
                    alt=""
                    width={300}
                    height={300}
                />
                {hover && (
                    <Image
                        className={`absolute left-0 top-0 h-auto w-full rounded-2xl transition-opacity duration-500 ease-in-out ${hovered ? "opacity-100" : "opacity-0"
                            }`}
                        src={hover}
                        alt=""
                        width={300}
                        height={300}
                    />
                )}
            </div>
            <p className="text-center mt-1 text-lg">{title}</p>
            <div className="flex flex-row justify-center gap-3 mt-1 max-sm:flex-wrap">
                {oldPrice && (
                    <span className="text-center text-gray-500 line-through">
                        {oldPrice}
                    </span>
                )}
                <span className="text-center text-gray-400 text-lg">
                    {price}
                </span>
            </div>
        </div>
    );
}

export default ProductCard;