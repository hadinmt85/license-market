import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <>
            <div className="mt-24 flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-3 bg-gray-900 px-4 py-4 lg:mt-55">
                <Link href={"#"} className="text-white cursor-pointer hover:text-gray-400 text-base">صفحه نخست</Link>
                <Link href={"#"} className="text-white cursor-pointer hover:text-gray-400 text-base">بلاگ</Link>
                <Link href={"#"} className="text-white cursor-pointer hover:text-gray-400 text-base">قوانین</Link>
                <Link href={"#"} className="text-white cursor-pointer hover:text-gray-400 text-base">درباره ما</Link>
                <Link href={"#"} className="text-white cursor-pointer hover:text-gray-400 text-base">ارتباط با ما</Link>
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-8 bg-black px-4 py-10 sm:px-8 lg:flex-row lg:px-20">
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
                        <Image
                            className="w-24 h-auto bg-white rounded-lg"
                            src="/foto/footer/footer-img/enamad.png"
                            alt="نماد اعتماد"
                            width={192}
                            height={192}
                            quality={95}
                        />
                        <Image
                            className="w-24 h-auto bg-white rounded-lg"
                            src="/foto/footer/footer-img/samandehi.png"
                            alt="نماد ساماندهی"
                            width={192}
                            height={192}
                            quality={95}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;