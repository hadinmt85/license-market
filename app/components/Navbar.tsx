import Image from "next/image";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const servicesColumns = [
    {
        title: "خرید اکانت هوش مصنوعی",
        items: [
            "خرید اکانت هوش مصنوعی",
            "خرید اکانت ابزارهای سئو",
            "شماره مجازی دائمی آمریکا",
            "خرید اکانت تریدینگ ویو",
            "اشتراک فضای ابری",
            "خرید اشتراک روزنامه و مجله",
        ],
    },
    {
        title: "اشتراک سرویس ویدیویی",
        items: ["فیلم و سریال", "تلویزیون آنلاین", "ورزشی", "انیمه", "کارتون", "مستند"],
    },
    {
        title: "اشتراک سرویس صوتی",
        items: [
            "موسیقی",
            "پادکست و رادیو آنلاین",
            "خرید اکانت اسپاتیفای",
            "خرید اکانت اپل موزیک",
            "خرید اکانت تایدال",
            "خرید اکانت دیزر",
        ],
    },
    {
        title: "اشتراک سرویس آموزشی",
        items: [
            "آموزش زبان",
            "آموزش موسیقی",
            "آموزش برنامه نویسی",
            "دوره های آموزشی",
            "تحصیلی و دانشجویی",
            "خرید دوره از Udemy",
        ],
    },
    {
        title: "گرافیک ، طراحی و تدوین",
        items: [
            "فایل استوک و فوتیج",
            "عکاسی و فیلم برداری",
            "خرید اکانت فری پیک",
            "خرید اکانت انواتو",
            "خرید اکانت پیکس ارت",
            "خرید اکانت کانوا",
        ],
    },
];

const aboutLinks = [
    "درباره لایسنس مارکت",
    "نظرسنجی و بهبود خدمات",
    "قوانین",
    "ارتباط با ما",
    "همکاری با ما",
];

function Header() {
    return (
        <div className="bg-[#0C0C15] flex flex-col items-center gap-4 px-4 py-4 sm:h-34 sm:flex-row sm:justify-between sm:gap-0 sm:px-37 sm:py-0">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-11">
                <Image className="size-19" src="/foto/lisens.png" alt="Logo" width={100} height={100} />
                <NavigationMenu>
                    <NavigationMenuList className="grid grid-cols-2 gap-2 sm:flex sm:flex-row sm:gap-7">
                        <NavigationMenuItem>
                            <Link href={"#"} className="max-sm:block max-sm:text-center text-white p-1 px-3 text-base rounded-full transition-all duration-300 ease-out hover:bg-[#d32e3b] hover:text-white">خانه</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="max-sm:w-full max-sm:justify-center text-white text-base cursor-pointer rounded-full px-2 py-2 transition-all duration-300 ease-out data-[state=open]:bg-[#d32e3b] hover:bg-[#d32e3b] hover:text-white">
                                خدمات ما
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div dir="rtl" className="w-fit max-w-[calc(100vw-32px)] rounded-2xl bg-white px-4 py-1 text-right shadow-xl max-h-[70vh] overflow-y-auto sm:max-h-none sm:overflow-visible">
                                    <div className="flex flex-col sm:flex-row sm:gap-0">
                                        {servicesColumns.map((col, idx) => (
                                            <div
                                                key={col.title}
                                                className={
                                                    "sm:min-w-max sm:px-5 sm:first:pr-0 sm:last:pl-0" +
                                                    (idx === 0 ? " border-b border-gray-200 pb-3 sm:border-b-0 sm:border-l" : "")
                                                }
                                            >
                                                <h3 className="mb-3 text-[17px] font-bold cursor-pointer block whitespace-nowrap rounded-lg px-2 py-2 text-[#0C0C15] transition hover:bg-[#fdecee] hover:text-[#d32e3b]">
                                                    {col.title}
                                                </h3>
                                                <ul className="flex flex-col gap-1">
                                                    {col.items.map((item) => (
                                                        <li key={item}>
                                                            <Link
                                                                href="#"
                                                                className="block whitespace-nowrap rounded-lg px-2 py-2 text-[16px] font-bold text-[#0C0C15] transition hover:bg-[#fdecee] hover:text-[#d32e3b]"
                                                            >
                                                                {item}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={"#"} className="max-sm:block max-sm:text-center text-white p-1 px-2 text-base rounded-full transition-all duration-300 ease-out hover:bg-[#d32e3b] hover:text-white">وبلاگ</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="max-sm:w-full max-sm:justify-center text-white text-base cursor-pointer rounded-full transition-all duration-300 ease-out data-[state=open]:bg-[#d32e3b] hover:bg-[#d32e3b] hover:text-white">درباره ما</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div dir="rtl" className="w-65 max-w-[calc(100vw-32px)] rounded-2xl bg-white p-2 text-right shadow-xl">
                                    <ul className="flex flex-col gap-1">
                                        {aboutLinks.map((label) => (
                                            <li key={label}>
                                                <Link
                                                    href="#"
                                                    className="block whitespace-nowrap rounded-lg px-2 py-2 text-[16px] font-bold text-[#0C0C15] transition hover:bg-[#fdecee] hover:text-[#d32e3b]"
                                                >
                                                    {label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex flex-row items-center gap-5 max-sm:gap-3">
                <Image className="size-6 cursor-pointer" src="/foto/search.svg" alt="" width={24} height={24} />
                <Image className="size-6 cursor-pointer" src="/foto/shop.svg" alt="" width={24} height={24} />
                <Link href={"#"} className="text-base px-1.5 py-1 text-white cursor-pointer rounded-full transition-all duration-300 ease-out data-[state=open]:bg-[#d32e3b] hover:bg-[#d32e3b] hover:text-white">عضویت</Link>
                <div className="w-px h-3 bg-white mt-1.5"></div>
                <Link href={"#"} className="text-base px-1.5 py-1 text-white cursor-pointer rounded-full transition-all duration-300 ease-out data-[state=open]:bg-[#d32e3b] hover:bg-[#d32e3b] hover:text-white">وارد شوید</Link>
            </div>
        </div>
    )
}

export default Header;