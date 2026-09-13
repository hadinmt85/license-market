import Image from "next/image";
import ProductCard from "./list";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const lists = [
    { img: "/foto/list-two-item/img1.webp", title: "خرید اکانت نتفلیکس Netflix آمریکا ارزان قابل تمدید (شارژ آنی)", price: "۲۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img2.webp", title: "خرید اشتراک و اکانت اپل وان Apple One (شارژ خودکار سیستمی)", oldPrice: "۴٫۳۳۴٫۰۰۰", price: "۴۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img3.webp", title: "اشتراک Amazon Prime Video (آمازون پرایم ویدیو)", price: "۱۴۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img4.webp", title: "خرید اکانت دیزنی پلاس Disney Plus ایمیل شما (تحویل آنی)", price: "۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img5.webp", title: "خرید اکانت یوتیوب پرمیوم YouTube Premium + Music فوری", price: "۴٫۶۱۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img6.webp", title: "خرید اکانت کرانچی رول Crunchyroll روی ایمیل شما (شارژ فوری)", price: "۱۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img7.webp", title: "خرید اکانت Hulu هولو با ایمیل شما (تحویل فوری و ارزان)", oldPrice: "۱٫۴۶۳٫۰۰۰", price: "۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img8.webp", title: "خرید اکانت HBO Max اچ‌ بی ‌او مکس با ایمیل شما (شارژ آنی)", oldPrice: "۲٫۱۶۹٫۰۰۰", price: "۵۰۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img9.webp", title: "خرید اشتراک و اکانت Apple TV Plus اپل تی وی پلاس (شارژ آنی)", price: "۱۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img10.webp", title: "خرید اکانت EXXEN اکسن روی ایمیل شما (با 91% تخفیف)", price: "۱۴۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img11.webp", title: "خرید اکانت Peacock TV با ایمیل خودتان (ارزان و قابل تمدید)", price: "۱۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img12.webp", title: "خرید اکانت Shahid شاهد روی ایمیل شخصی شما (ارزان)", oldPrice: "۲٫۴۳۹٫۰۰۰", price: "۱۹۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img13.webp", title: "خرید اکانت پرمیوم Paramount Plus با ایمیل شما (شارژ فوری)", price: "۱۴۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img14.webp", title: "خرید اکانت IMDb Pro پرمیوم روی ایمیل شما (ارزان)", price: "۱۵۹٫۰۰۰ تومان" },
    { img: "/foto/list-two-item/img15.webp", title: "اشتراک شبکه NBC آمریکا", price: "۱۹۹٫۰۰۰ تومان" },
];

export default function CategoryA() {
    return (
        <>
            <div className="flex flex-row gap-6 justify-center mt-45 max-sm:flex-col max-sm:items-center max-sm:mt-10 max-sm:px-2">
                <Image className="w-150 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main2/img1.jpg" alt="" width={600} height={400} />
                <Image className="w-150 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main2/img2.jpg" alt="" width={600} height={400} />
            </div>
            <div className="flex flex-row gap-6 justify-center mt-12 max-sm:flex-col max-sm:items-center max-sm:px-2">
                <Image className="w-150 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main2/img3.jpg" alt="" width={600} height={400} />
                <Image className="w-150 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main2/img4.jpg" alt="" width={600} height={400} />
            </div>
            <div className="mt-25">
                <span className="w-px h-11 bg-black mx-auto mt-13 max-sm:mt-8"></span>
                <h3 className="text-2xl font-bold text-center mt-14 max-sm:text-2xl">سرویس های پخش فیلم و سریال</h3>
                <Carousel opts={{ align: "start", direction: "rtl" }} className="w-full max-w-6xl mx-auto mt-10 px-6">
                    <CarouselContent>
                        {lists.map((form, index) => (
                            <CarouselItem key={index} className="basis-auto">
                                <div className="p-1 max-sm:w-65">
                                    <ProductCard img={form.img} title={form.title} oldPrice={form.oldPrice} price={form.price} showDiscount={index == 1 || index == 6 || index == 7 || index == 11} />
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