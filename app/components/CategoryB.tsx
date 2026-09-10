import Image from "next/image";
import ProductCard from "./list";

const three = [
    { img: "/foto/list-three-item/img1.webp", title: "خرید اکانت اسپاتیفای Spotify ارزان + ویدیو نقد و بررسی", oldPrice: "۲٫۴۱۹٫۰۰۰", price: "۵۴۹٫۰۰۰ تومان" },
    { img: "/foto/list-three-item/img2.webp", title: "خرید اکانت اپل موزیک Apple Music ارزان آمریکا (شارژ آنی)", price: "۳۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-three-item/img3.webp", title: "خرید اکانت ساندکلود SoundCloud با ایمیل شما (فوری و ارزان)", oldPrice: "۲٫۳۴۹٫۰۰۰", price: "۲۴۹٫۰۰۰ تومان" },
    { img: "/foto/list-three-item/img4.webp", title: "خرید اکانت تایدال TIDAL هایفای پلاس آمریکا (91% تخفیف)", price: "۱۹۹٫۰۰۰ تومان" },
];

export default function CategoryB() {
    return (
        <>
            <div className="flex flex-row gap-6 justify-center mt-30 max-sm:flex-col max-sm:items-center max-sm:mt-10 max-sm:px-2">
                <Image className="w-145 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main3/img1.jpg" alt="" width={600} height={400} />
                <Image className="w-145 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main3/img2.jpg" alt="" width={600} height={400} />
            </div>
            <div className="flex flex-row gap-6 justify-center mt-12 max-sm:flex-col max-sm:items-center max-sm:px-2">
                <Image className="w-145 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main3/img3.jpg" alt="" width={600} height={400} />
                <Image className="w-145 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main3/img4.jpg" alt="" width={600} height={400} />
            </div>
            <span className="w-px h-11 bg-black mx-auto mt-13 max-sm:mt-8"></span>
            <h3 className="text-2xl font-bold text-center mt-14 max-sm:text-2xl">سرویس های پخش موسیقی</h3>
            <div className="flex flex-row justify-center gap-5 mt-10 max-sm:flex-col max-sm:w-[calc(100%-20px)] max-sm:p-3 max-sm:items-center max-sm:mx-auto">
                {three.map((form, index) => (
                    <ProductCard key={index} img={form.img} title={form.title} oldPrice={form.oldPrice} price={form.price} showDiscount={index == 0 || index == 2} />
                ))}
            </div>
            <div className="max-sm:px-2">
                <Image className="max-w-6xl mx-auto mt-25 cursor-pointer max-sm:w-full max-sm:h-auto max-sm:mt-10" src="/foto/main-img2/img.jpg" alt="" width={1200} height={500} />
            </div>
        </>
    );
}