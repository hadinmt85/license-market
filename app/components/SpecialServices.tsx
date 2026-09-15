import Image from "next/image";
import ProductCard from "./list";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const four = [
    { img: "/foto/list-four-item/img1.webp", hover: "/foto/list-four-item/hover/hover-1.webp", title: "خرید اکانت Griptape گریپ تیپ روی ایمیل شما(91% تخفیف)", price: "۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-four-item/img2.webp", hover: "/foto/list-four-item/hover/hover-2.webp", title: "خرید اکانت Nano Banana نانو بنانا (97% تخفیف)", price: "۲٫۹۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-four-item/img3.webp", hover: "/foto/list-four-item/hover/hover-3.webp", title: "خرید اکانت Veo 3 AI گوگل روی ایمیل شما (91% تخفیف)", oldPrice: "۳٫۹۱۵٫۰۰۰", price: "۲٫۹۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-four-item/img4.webp", hover: "/foto/list-four-item/hover/hover-4.webp", title: "خرید اکانت Hoppy Copy روی ایمیل شما (91% تخفیف)", price: "۹۹٫۰۰۰" },
    { img: "/foto/list-two-item/img5.webp", hover: "/foto/list-two-item/hover/hover-5.webp", title: "خرید اکانت یوتیوب پرمیوم YouTube Premium + Music فوری", price: "۴٫۶۱۹٫۰۰۰ تومان" },
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

export default function SpecialServices() {
    return (
        <div className="mt-25">
            <span className="w-px h-11 bg-black mx-auto mt-13 max-sm:mt-8"></span>
            <h3 className="text-2xl font-bold text-center mt-5 max-sm:text-2xl max-sm:mt-10">سرویس های کاربردی و ویژه</h3>
            <Carousel opts={{ align: "start", direction: "rtl" }} className="w-full max-w-6xl mx-auto mt-10 px-6">
                <CarouselContent>
                    {four.map((form, index) => (
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
    );
}