import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const items = [
    {
        img: "/foto/list_item/item_img1.webp",
        title: "خرید اکانت گرامرلی Grammarly با ایمیل شما (با 91% تخفیف)",
        oldPrice: "۱٫۱۹۹٫۰۰۰",
        newPrice: "۱۹۹٫۰۰۰ تومان",
    },
    {
        img: "/foto/list_item/item_img2.webp",
        title: "خرید دوره آموزشی از یودمی Udemy با اکانت شما 91% تخفیف",
        oldPrice: "۶٫۵۹۹٫۰۰۰",
        newPrice: "۴۹۹٫۰۰۰ تومان",
    },
    {
        img: "/foto/list_item/item_img3.webp",
        title: "خرید اکانت Yousician یوزیشن با ایمیل شما (91% تخفیف)",
        oldPrice: "۳٫۷۵۰٫۰۰۰",
        newPrice: "۱۹۵٫۰۰۰ تومان",
    },
    {
        img: "/foto/list_item/item_img4.webp",
        title: "خرید اکانت گاما Gamma AI روی ایمیل شما (با 97% تخفیف)",
        oldPrice: "۵٫۴۹۹٫۰۰۰",
        newPrice: "۱۹۹٫۰۰۰ تومان",
    },
    {
        img: "/foto/list_item/item_img5.webp",
        title: "خرید اکانت Yousician یوزیشن با ایمیل شما (91% تخفیف)",
        oldPrice: "۳٫۷۵۰٫۰۰۰",
        newPrice: "۱۹۵٫۰۰۰ تومان",
    },
    {
        img: "/foto/list_item/item_img6.webp",
        title: "خرید اکانت لیندا Lynda پرمیوم اختصاصی (80% تخفیف)",
        oldPrice: "۱٫۷۵۰٫۰۰۰",
        newPrice: "۳۹۹٫۰۰۰ تومان",
    },
    {
        img: "/foto/list_item/item_img7.webp",
        title: "خرید اکانت کورسرا Coursera پلاس + دوره ها (93% تخفیف)",
        oldPrice: "۲٫۹۹۹٫۰۰۰",
        newPrice: "۲۴۹٫۰۰۰ تومان",
    },
    {
        img: "/foto/list_item/item_img8.webp",
        title: "خرید اکانت Blinkist بلینکیست با ایمیل شما (شارژ آنی و ارزان)",
        oldPrice: "۳٫۷۵۰٫۰۰۰",
        newPrice: "۱۹۹٫۰۰۰ تومان",
    },
    {
        img: "/foto/list_item/item_img9.webp",
        title: "خرید اکانت DataCamp دیتا کمپ (ارزان و قابل تمدید)",
        oldPrice: "۲٫۹۰۰٫۰۰۰",
        newPrice: "۳۲۹٫۰۰۰ تومان",
    },
];

function Offer() {
    return (
        <div className="flex flex-row justify-end my-auto mx-auto gap-1.5 bg-rose-500 w-290 p-4 rounded-md mt-14 max-sm:flex-col max-sm:w-[calc(100%-20px)] max-sm:items-center max-sm:mt-8">
            <div className="max-sm:flex mr-5 pr-5 max-sm:flex-col max-sm:items-center max-sm:ml-9">
                <Image className="size-24 ml-12 mt-20 max-sm:ml-0 max-sm:mt-2" src="/foto/pish.svg" alt="" width={96} height={96} />
                <Image className="size-8 mr-7 mt-5 max-sm:mr-0 max-sm:mt-3" src="/foto/pash.svg" alt="" width={32} height={32} />
                <div className="flex">
                    <p className="text-white text-base mt-5 cursor-pointer font-medium">مشاهده همه</p>
                    <Image className="size-4 mt-6" src="/foto/chevron.svg" alt="" width={16} height={16} />
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <Carousel opts={{ align: "start", direction: "rtl" }} className="w-full">
                    <CarouselContent className="-ml-2">
                        {items.map((item, index) => (
                            <CarouselItem key={index} className="flex flex-row basis-1/4 pl-2 max-sm:basis-full max-sm:w-7">
                                <div className="relative h-83 w-70 bg-white flex flex-col gap-2 cursor-pointer mx-auto max-sm:w-full max-sm:h-auto max-sm:mb-2 max-sm:pb-4">
                                    <span className="absolute top-3 right-3 bg-rose-500 font-semibold text-white text-sm px-3 py-0.5 rounded-full">
                                        تخفیف
                                    </span>
                                    <Image className="h-55 rounded-3xl max-sm:w-full max-sm:h-auto" src={item.img} alt="" width={300} height={300} />
                                    <p className="text-center text-[15px] mx-2 max-sm:px-2">
                                        {item.title}
                                    </p>
                                    <div className="flex flex-row justify-center gap-3 mt-3 max-sm:flex-wrap max-sm:px-2">
                                        <span className="text-center font-semibold text-gray-500 line-through">
                                            {item.oldPrice}
                                        </span>
                                        <span className="text-center font-semibold text-gray-400">
                                            {item.newPrice}
                                        </span>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="cursor-pointer w-10 h-10 left-2 max-sm:left-1 right-auto bg-white border-none shadow-none text-black [&_svg]:rotate-180 [&_svg]:size-6! max-sm:[&_svg]:size-7!" />
                    <CarouselPrevious className="cursor-pointer w-10 h-10 right-2 max-sm:right-1 left-auto bg-white border-none shadow-none text-black [&_svg]:rotate-180 [&_svg]:size-6! max-sm:[&_svg]:size-7!" />
                </Carousel>
            </div>
        </div>
    );
}

export default Offer;