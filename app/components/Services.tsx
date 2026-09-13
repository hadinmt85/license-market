import Image from "next/image"

const services = [
    { title: "کارت اعتباری ارزی", img: "/foto/item/img.webp" },
    { title: "سرویس ویدیویی", img: "/foto/item/img2.webp" },
    { title: "سرویس صوتی", img: "/foto/item/img33.webp" },
    { title: "سرویس آموزشی", img: "/foto/item/img4.webp" },
    { title: "گرافیک، طراحی و تدوین", img: "/foto/item/img5.webp" },
    { title: "سلامت و تناسب اندام", img: "/foto/item/img6.webp" },
    { title: "کتاب و کتابخوانی", img: "/foto/item/img7.webp" },
    { title: "سرگرمی و گیمینگ", img: "/foto/item/img8.webp" },
    { title: "فضای ابری", img: "/foto/item/img9.webp" },
    { title: "شبکه‌های اجتماعی و ارتباطات", img: "/foto/item/img10.webp" },
    { title: "پرداخت درون برنامه‌ای", img: "/foto/item/img11.webp" },
    { title: "درخواست محصول جدید", img: "/foto/item/img12.webp" },
];

const Services = () => {
    return (
        <div className="mt-25">
            <h3 className="text-2xl font-bold text-center mt-14 mb-10 max-sm:text-2xl">خدمات لایسنس‌مارکت</h3>
            <div className="max-w-6xl mx-auto max-sm:px-2">
                <div className="grid grid-cols-6 max-md:grid-cols-4 max-sm:grid-cols-3 divide-x divide-y divide-gray-200 border border-gray-200 rounded-md overflow-hidden">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-3 py-6 px-3 cursor-pointer hover:bg-gray-50 transition-colors max-sm:py-5">
                            <Image
                                className="w-18 h-18 max-sm:w-12 max-sm:h-12"
                                src={service.img}
                                alt={service.title}
                                width={64}
                                height={64}
                            />
                            <p className="text-base text-gray-700 font-semibold text-center leading-6 max-sm:text-sm max-sm:px-0.5">{service.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services