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
        highlighted: true,
        items: [
            "خرید اکانت هوش مصنوعی",
            "خرید اکانت ابزارهای سئو",
            "شماره مجازی دائمی آمریکا",
            "خرید اکانت تریدینگ ویو",
            "اشتراک فضای ابری",
            "خرید اشتراک روزنامه و مجله",
            "درخواست محصول جدید",
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
                                <div
                                    dir="rtl"
                                    className="grid grid-cols-5 gap-8 p-2 w-[1000] bg-white text-right items-center"
                                >
                                    {servicesColumns.map((col) => (
                                        <ul key={col.title} className="flex flex-col">
                                            {!col.highlighted && (
                                                <li className="font-bold text-lg text-[#0C0C15] mb-1 cursor-pointer hover:text-[#c72632]">
                                                    {col.title}
                                                </li>
                                            )}
                                            {col.items.map((item) => (
                                                <li key={item} className="font-semibold">
                                                    <NavigationMenuLink
                                                        render={
                                                            <Link
                                                                href="#"
                                                                className={
                                                                    col.highlighted
                                                                        ? "font-semibold text-[16px] hover:text-[#c72632] whitespace-nowrap"
                                                                        : "text-gray-700 text-lg hover:text-[#E63946] whitespace-nowrap"
                                                                }
                                                            />
                                                        }
                                                    >
                                                        {item}
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    ))}
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href={"#"} className="text-white p-1 px-2 text-lg max-sm:hidden rounded-full hover:bg-[#d32e3b] hover:text-white">وبلاگ</Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-white text-lg cursor-pointer rounded-full data-[state=open]:bg-[#d32e3b] hover:bg-[#d32e3b] hover:text-white">درباره ما</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid p-2 w-[180]">
                                    <li>
                                        <NavigationMenuLink render={<Link href="#" className="hover:text-mauve-500 font-semibold text-[16px]" />}>
                                            درباره لایسنس مارکت
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink render={<Link href="#" className="hover:text-mauve-500 font-semibold text-[16px]" />}>
                                            نظرسنجی و بهبود خدمات
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink render={<Link href="#" className="hover:text-mauve-500 font-semibold text-[16px]" />}>
                                            قوانین
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink render={<Link href="#" className="hover:text-mauve-500 font-semibold text-[16px]" />}>
                                            ارتباط با ما
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink render={<Link href="#" className="hover:text-mauve-500 font-semibold text-[16px]" />}>
                                            همکاری با ما
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="flex flex-row items-center gap-5 max-sm:gap-3">
                <Image className="size-6 cursor-pointer" src="/foto/search.svg" alt="" width={24} height={24} />
                <Image className="size-6 cursor-pointer" src="/foto/shop.svg" alt="" width={24} height={24} />
                <Link href={"#"} className="text-lg text-white cursor-pointer max-sm:hidden hover:text-mauve-300">عضویت</Link>
                <div className="w-px h-3 bg-white mt-1.5 max-sm:hidden"></div>
                <Link href={"#"} className="text-lg text-white cursor-pointer max-sm:hidden hover:text-mauve-300">وارد شوید</Link>
            </div>
        </div>
    )
}

export default Header;