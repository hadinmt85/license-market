import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <>
            <div className="h-14 w-full bg-gray-900 mt-55 flex flex-row gap-11 items-center justify-center max-sm:h-auto max-sm:flex-col max-sm:gap-5 max-sm:py-5 max-sm:mt-20">
                <Link href={"#"} className="text-white cursor-pointer hover:text-gray-400 text-base">صفحه نخست</Link>
                <Link href={"#"} className="text-white cursor-pointer hover:text-gray-400 text-base">بلاگ</Link>
                <Link href={"#"} className="text-white cursor-pointer hover:text-gray-400 text-base">قوانین</Link>
                <Link href={"#"} className="text-white cursor-pointer hover:text-gray-400 text-base">درباره ما</Link>
                <Link href={"#"} className="text-white cursor-pointer hover:text-gray-400 text-base">ارتباط با ما</Link>
            </div>
            <div className="h-40 w-full bg-black flex flex-row justify-between items-center px-40 py-22 max-sm:h-auto max-sm:flex-col max-sm:px-4 max-sm:py-8 max-sm:gap-8">
                <div className="flex flex-col items-start gap-6 max-sm:items-center">
                    <div className="flex flex-row items-center gap-10 max-sm:gap-5">
                        <Image className="w-5 cursor-pointer" src="/foto/footer/footer-icon/instagram.svg" alt="" width={20} height={20} />
                        <Image className="w-5 cursor-pointer" src="/foto/footer/footer-icon/telegram.svg" alt="" width={20} height={20} />
                        <Image className="w-5 cursor-pointer" src="/foto/footer/footer-icon/facebook.svg" alt="" width={20} height={20} />
                        <div className="flex flex-row gap-1 items-cente cursor-pointer">
                            <Image className="w-5" src="/foto/footer/footer-icon/phone.svg" alt="" width={20} height={20} />
                            <span className="text-white font-semibold text-base">۰۲۱۹۱۰۹۴۴۰۰</span>
                        </div>
                    </div>
                    <p className="text-white text-sm max-sm:text-center">
                        © ۱۴۰۵ - تمامی حقوق تجاری و معنوی این سایت برای برند "لایسنس مارکت" محفوظ بوده و هیچ گونه شعبه دیگری ندارد.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-white font-medium mb-3 text-lg">مجوز ها و نماد های فعالیت</p>
                    <div className="flex flex-row gap-1 cursor-pointer">
                        <Image className="w-24 bg-white rounded-lg" src="/foto/footer/footer-img/enamad.png" alt="نماد اعتماد" width={60} height={60} />
                        <Image className="w-24 bg-white rounded-lg" src="/foto/footer/footer-img/samandehi.png" alt="" width={60} height={60} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;