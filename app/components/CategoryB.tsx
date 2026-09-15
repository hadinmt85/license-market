import Image from "next/image";
import ProductCard from "./list";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const three = [
    { img: "/foto/list-three-item/img1.webp", hover: "/foto/list-three-item/hover/hover-1.webp", title: "خرید اکانت اسپاتیفای Spotify ارزان + ویدیو نقد و بررسی", oldPrice: "۲٫۴۱۹٫۰۰۰", price: "۵۴۹٫۰۰۰ تومان" },
    { img: "/foto/list-three-item/img2.webp", hover: "/foto/list-three-item/hover/hover-2.webp", title: "خرید اکانت اپل موزیک Apple Music ارزان آمریکا (شارژ آنی)", price: "۳۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-three-item/img3.webp", hover: "/foto/list-three-item/hover/hover-3.webp", title: "خرید اکانت ساندکلود SoundCloud با ایمیل شما (فوری و ارزان)", oldPrice: "۲٫۳۴۹٫۰۰۰", price: "۲۴۹٫۰۰۰ تومان" },
    { img: "/foto/list-three-item/img4.webp", hover: "/foto/list-three-item/hover/hover-4.webp", title: "خرید اکانت تایدال TIDAL هایفای پلاس آمریکا (91% تخفیف)", price: "۱۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img6.webp", hover: "/foto/list-two-item/hover/hover-6.webp", title: "خرید اکانت کرانچی رول Crunchyroll روی ایمیل شما (شارژ فوری)", price: "۱۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img7.webp", hover: "/foto/list-two-item/hover/hover-7.webp", title: "خرید اکانت Hulu هولو با ایمیل شما (تحویل فوری و ارزان)", oldPrice: "۱٫۴۶۳٫۰۰۰", price: "۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img8.webp", hover: "/foto/list-two-item/hover/hover-8.webp", title: "خرید اکانت HBO Max اچ‌ بی ‌او مکس با ایمیل شما (شارژ آنی)", oldPrice: "۲٫۱۶۹٫۰۰۰", price: "۵۰۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img9.webp", hover: "/foto/list-two-item/hover/hover-9.webp", title: "خرید اشتراک و اکانت Apple TV Plus اپل تی وی پلاس (شارژ آنی)", price: "۱۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img10.webp", hover: "/foto/list-two-item/hover/hover-10.webp", title: "خرید اکانت EXXEN اکسن روی ایمیل شما (با 91% تخفیف)", price: "۱۴۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img11.webp", hover: "/foto/list-two-item/hover/hover-11.webp", title: "خرید اکانت Peacock TV با ایمیل خودتان (ارزان و قابل تمدید)", price: "۱۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img12.webp", hover: "/foto/list-two-item/hover/hover-12.webp", title: "خرید اکانت Shahid شاهد روی ایمیل شخصی شما (ارزان)", oldPrice: "۲٫۴۳۹٫۰۰۰", price: "۱۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img13.webp", hover: "/foto/list-two-item/hover/hover-13.webp", title: "خرید اکانت پرمیوم Paramount Plus با ایمیل شما (شارژ فوری)", price: "۱۴۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img14.webp", hover: "/foto/list-two-item/hover/hover-14.webp", title: "خرید اکانت IMDb Pro پرمیوم روی ایمیل شما (ارزان)", price: "۱۵۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img15.webp", hover: "/foto/list-two-item/hover/hover-15.webp", title: "اشتراک شبکه NBC آمریکا", price: "۱۹۹٫۰۰۰ تومان" },
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
            <div className="mt-25">
                <span className="w-px h-11 bg-black mx-auto mt-13 max-sm:mt-8"></span>
                <h3 className="text-2xl font-bold text-center mt-14 max-sm:text-2xl">سرویس های پخش موسیقی</h3>
                <Carousel opts={{ align: "start", direction: "rtl" }} className="w-full max-w-6xl mx-auto mt-10 px-6">
                    <CarouselContent>
                        {three.map((form, index) => (
                            <CarouselItem key={index} className="basis-auto">
                                <div className="p-1 max-sm:w-65">
                                    <ProductCard img={form.img} hover={form.hover} title={form.title} oldPrice={form.oldPrice} price={form.price} showDiscount={index == 1 || index == 6 || index == 7 || index == 11} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="cursor-pointer w-13 max-sm:w-10 h-13 max-sm:h-10 left-0 max-sm:mt-30 max-sm:left-5 right-auto bg-red-500 border-none shadow-none hover:bg-red-400 text-white hover:text-white [&_svg]:rotate-180 [&_svg]:size-10! max-sm:[&_svg]:size-6!" />
                    <CarouselPrevious className="cursor-pointer w-13 max-sm:w-10 h-13 max-sm:h-10 right-0 max-sm:mt-30 max-sm:right-2 left-auto bg-red-500 border-none shadow-none hover:bg-red-400 text-white hover:text-white [&_svg]:rotate-180 [&_svg]:size-10! max-sm:[&_svg]:size-6!" />
                </Carousel>
            </div>
        </>
    );
}