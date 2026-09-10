import Image from "next/image";
import { ReactNode } from "react";

interface Props {
    img: string;
    title: ReactNode;
    oldPrice?: string;
    price: string;
    showDiscount?: boolean;
}

function ProductCard({ img, title, oldPrice, price, showDiscount }: Props) {
    return (
        <div className="relative h-95 w-70 bg-white flex flex-col gap-2 cursor-pointer max-sm:w-full max-sm:h-auto max-sm:pb-4">
            {showDiscount && (
                <span className="absolute top-3 right-3 bg-rose-500 font-semibold text-white text-sm px-3 py-0.5 rounded-full">
                    تخفیف
                </span>
            )}
            <Image className="w-75 rounded-2xl max-sm:w-full" src={img} alt="" width={300} height={300} />
            <p className="text-center mt-1 text-lg">{title}</p>
            <div className="flex flex-row justify-center gap-3 mt-1 max-sm:flex-wrap">
                {oldPrice && <span className="text-center text-gray-500 line-through">{oldPrice}</span>}
                <span className="text-center text-gray-400 text-lg">{price}</span>
            </div>
        </div>
    );
}

export default ProductCard;