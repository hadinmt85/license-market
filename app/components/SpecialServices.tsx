import Image from "next/image";
import ProductCard from "./list";

const four = [
    { img: "/foto/list-four-item/img1.webp", title: "خرید اکانت Griptape گریپ تیپ روی ایمیل شما(91% تخفیف)", price: "۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-four-item/img2.webp", title: "خرید اکانت Nano Banana نانو بنانا (97% تخفیف)", price: "۲٫۹۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-four-item/img3.webp", title: "خرید اکانت Veo 3 AI گوگل روی ایمیل شما (91% تخفیف)", oldPrice: "۳٫۹۱۵٫۰۰۰", price: "۲٫۹۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-four-item/img4.webp", title: "خرید اکانت Hoppy Copy روی ایمیل شما (91% تخفیف)", price: "۹۹٫۰۰۰" },
];

export default function SpecialServices() {
    return (
        <>
            <span className="w-px h-11 bg-black mx-auto mt-13 max-sm:mt-8"></span>
            <h3 className="text-2xl font-bold text-center mt-5 max-sm:text-2xl max-sm:mt-10">سرویس های کاربردی و ویژه</h3>
            <div className="flex flex-row justify-center gap-5 mt-10 max-sm:flex-col max-sm:w-[calc(100%-20px)] max-sm:p-3 max-sm:items-center max-sm:mx-auto">
                {four.map((form, index) => (
                    <ProductCard key={index} img={form.img} title={form.title} oldPrice={form.oldPrice} price={form.price} showDiscount={index == 2} />
                ))}
            </div>
            <div className="max-sm:px-2">
                <Image className="max-w-6xl mx-auto mt-25 cursor-pointer max-sm:w-full max-sm:h-auto max-sm:mt-10" src="/foto/main-img3/img.jpg" alt="" width={1200} height={500} />
            </div>
        </>
    );
}