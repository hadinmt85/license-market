import Image from "next/image";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
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
        <div className="bg-[#0C0C15] h-34 flex flex-row items-center px-37 justify-between max-sm:px-4 max-sm:py-4">
            <div className="flex flex-row items-center gap-11 max-sm:gap-3">
                <Image className="size-19" src="/foto/lisens.png" alt="Logo" width={100} height={100} />
                <NavigationMenu>
                    <NavigationMenuList className="gap-7 max-sm:hidden">
                        <NavigationMenuItem>
                            <Link href={"#"} className="text-white p-1 px-3 text-lg max-sm:hidden rounded-full hover:bg-[#d32e3b] hover:text-white">خانه</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-white text-lg cursor-pointer rounded-full px-2 py-2 data-[state=open]:bg-[#d32e3b] hover:bg-[#d32e3b] hover:text-white">
                                خدمات ما
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div dir="rtl" className="w-fit rounded-2xl bg-white px-4 py-2 text-right shadow-xl">
                                    <div className="flex flex-row">
                                        {servicesColumns.map((col, idx) => (
                                            <div
                                                key={col.title}
                                                className={
                                                    "min-w-max px-5 first:pr-0 last:pl-0" +
                                                    (idx === 0 ? " border-l border-gray-200" : "")
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
                            <Link href={"#"} className="text-white p-1 px-2 text-lg max-sm:hidden rounded-full hover:bg-[#d32e3b] hover:text-white">وبلاگ</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-white text-lg cursor-pointer rounded-full data-[state=open]:bg-[#d32e3b] hover:bg-[#d32e3b] hover:text-white">درباره ما</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div dir="rtl" className="w-65 rounded-2xl bg-white p-3 text-right shadow-xl">
                                    <ul className="flex flex-col gap-1">
                                        {aboutLinks.map((label) => (
                                            <li key={label}>
                                                <NavigationMenuLink
                                                    render={
                                                        <Link
                                                            href="#"
                                                            className="block whitespace-nowrap rounded-lg px-2 py-2 text-[16px] font-bold text-[#0C0C15] transition hover:bg-[#fdecee] hover:text-[#d32e3b]"
                                                        />
                                                    }
                                                >
                                                    {label}
                                                </NavigationMenuLink>
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
                <Link href={"#"} className="text-lg px-1 py-0.5 text-white cursor-pointer max-sm:hidden rounded-full data-[state=open]:bg-[#d32e3b] hover:bg-[#d32e3b] hover:text-white">عضویت</Link>
                <div className="w-px h-3 bg-white mt-1.5 max-sm:hidden"></div>
                <Link href={"#"} className="text-lg px-1 py-0.5 text-white cursor-pointer max-sm:hidden rounded-full data-[state=open]:bg-[#d32e3b] hover:bg-[#d32e3b] hover:text-white">وارد شوید</Link>
            </div>
        </div>
    )
}

export default Header;