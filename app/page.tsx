"use client";
import Image from "next/image";
import ProductCard from "./components/list";
import BlogCard from "./components/card";
import Header from "./components/header";
import Footer from "./components/footer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
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

  const forms = [
    {
      img: "/foto/list_form/img1.webp",
      title: "خرید اکانت ChatGPT Plus 4 و ChatGPT 5 (شارژ آنی)",
      oldPrice: "۴٫۹۹۹٫۰۰۰",
      newPrice: "۵۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list_form/img2.webp",
      title: "خرید اکانت Grok 4 گروک با ایمیل شما (با 91% تخفیف)",
      oldPrice: "۶٫۸۹۹٫۰۰۰",
      newPrice: "۹۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list_form/img3.webp",
      title: "خرید اکانت مایکروسافت Microsoft 365 (با 91% تخفیف)",
      oldPrice: "۹۸۶٫۰۰۰",
      newPrice: "۲۴۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list_form/img4.webp",
      title: "خرید اکانت تریدینگ ویو TradingView (با 91% تخفیف ویژه)",
      oldPrice: "۵٫۵۲۴٫۰۰۰",
      newPrice: "۴۹۹٫۰۰۰ تومان",
    },
  ];

  const lists = [
    {
      img: "/foto/list-two-item/img1.webp",
      title: "خرید اکانت نتفلیکس Netflix آمریکا ارزان قابل تمدید (شارژ آنی)",
      price: "۲۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img2.webp",
      title: "خرید اشتراک و اکانت اپل وان Apple One (شارژ خودکار سیستمی)",
      oldPrice: "۴٫۳۳۴٫۰۰۰",
      price: "۴۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img3.webp",
      title: "اشتراک Amazon Prime Video (آمازون پرایم ویدیو)",
      price: "۱۴۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img4.webp",
      title: "خرید اکانت دیزنی پلاس Disney Plus ایمیل شما (تحویل آنی)",
      price: "۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img5.webp",
      title: "خرید اکانت یوتیوب پرمیوم YouTube Premium + Music فوری",
      price: "۴٫۶۱۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img6.webp",
      title: "خرید اکانت کرانچی رول Crunchyroll روی ایمیل شما (شارژ فوری)",
      price: "۱۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img7.webp",
      title: "خرید اکانت Hulu هولو با ایمیل شما (تحویل فوری و ارزان)",
      oldPrice: "۱٫۴۶۳٫۰۰۰",
      price: "۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img8.webp",
      title: "خرید اکانت HBO Max اچ‌ بی ‌او مکس با ایمیل شما (شارژ آنی)",
      oldPrice: "۲٫۱۶۹٫۰۰۰",
      price: "۵۰۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img9.webp",
      title: "خرید اشتراک و اکانت Apple TV Plus اپل تی وی پلاس (شارژ آنی)",
      price: "۱۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img10.webp",
      title: "خرید اکانت EXXEN اکسن روی ایمیل شما (با 91% تخفیف)",
      price: "۱۴۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img11.webp",
      title: "خرید اکانت Peacock TV با ایمیل خودتان (ارزان و قابل تمدید)",
      price: "۱۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img12.webp",
      title: "خرید اکانت Shahid شاهد روی ایمیل شخصی شما (ارزان)",
      oldPrice: "۲٫۴۳۹٫۰۰۰",
      price: "۱۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img13.webp",
      title: "خرید اکانت پرمیوم Paramount Plus با ایمیل شما (شارژ فوری)",
      price: "۱۴۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img14.webp",
      title: "خرید اکانت IMDb Pro پرمیوم روی ایمیل شما (ارزان)",
      price: "۱۵۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-two-item/img15.webp",
      title: "اشتراک شبکه NBC آمریکا",
      price: "۱۹۹٫۰۰۰ تومان",
    },
  ];

  const three = [
    {
      img: "/foto/list-three-item/img1.webp",
      title: "خرید اکانت اسپاتیفای Spotify ارزان + ویدیو نقد و بررسی",
      oldPrice: "۲٫۴۱۹٫۰۰۰",
      price: "۵۴۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-three-item/img2.webp",
      title: "خرید اکانت اپل موزیک Apple Music ارزان آمریکا (شارژ آنی)",
      price: "۳۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-three-item/img3.webp",
      title: "خرید اکانت ساندکلود SoundCloud با ایمیل شما (فوری و ارزان)",
      oldPrice: "۲٫۳۴۹٫۰۰۰",
      price: "۲۴۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-three-item/img4.webp",
      title: "خرید اکانت تایدال TIDAL هایفای پلاس آمریکا (91% تخفیف)",
      price: "۱۹۹٫۰۰۰ تومان",
    },
  ];

  const four = [
    {
      img: "/foto/list-four-item/img1.webp",
      title: "خرید اکانت Griptape گریپ تیپ روی ایمیل شما(91% تخفیف)",
      price: "۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-four-item/img2.webp",
      title: "خرید اکانت Nano Banana نانو بنانا (97% تخفیف)",
      price: "۲٫۹۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-four-item/img3.webp",
      title: "خرید اکانت Veo 3 AI گوگل روی ایمیل شما (91% تخفیف)",
      oldPrice: "۳٫۹۱۵٫۰۰۰",
      price: "۲٫۹۹۹٫۰۰۰ تومان",
    },
    {
      img: "/foto/list-four-item/img4.webp",
      title: "خرید اکانت Hoppy Copy روی ایمیل شما (91% تخفیف)",
      price: "۹۹٫۰۰۰",
    },
  ];

  const blogs = [
    {
      img: "/foto/list-five-item/img1.jpg",
      title: "نحوه تغییر کشور اپل آیدی و ریجن آیفون (در ایران 2025)",
      date: "شنبه، ۲ آذر ۱۴۰۴",
    },
    {
      img: "/foto/list-five-item/img2.jpg",
      title: "آموزش اضافه کردن اندیکاتور به تریدینگ ویو (در ۳ مرحله)",
      date: "یکشنبه، ۲۲ آذر ۱۴۰۴",
    },
    {
      img: "/foto/list-five-item/img3.jpeg",
      title: "حل مشکل کار نکردن برنامه Alight Motion(خطای ۳۵۶۵)",
      date: "چهارشنبه، ۲۶ آذر ۱۴۰۴",
    },
  ];

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

  return (
    <div className="overflow-x-hidden w-full">
      <div className="h-14 bg-[#3ECF8E] flex justify-center items-center max-sm:px-2">
        <p className="text-white text-lg font-bold max-sm:text-sm cursor-pointer">☎️ مرکز تماس مشتریان : ۹۱۰۹۴۴۰۰-۰۲۱</p>
      </div>
      <Header />
      <div className="relative w-full max-w-7xl mx-auto my-14 max-sm:my-6 max-sm:px-2">
        <Carousel opts={{ align: "start", direction: "rtl", loop: true }}>
          <CarouselContent>
            {["/foto/main_img/img1.jpg", "/foto/main_img/img2.webp", "/foto/main_img/img3.webp", "/foto/main_img/img4.webp", "/foto/main_img/img5.webp", "/foto/main_img/img6.webp", "/foto/main_img/img7.webp"].map((src, index) => (
              <CarouselItem key={index}>
                <Image
                  className="max-w-full mx-auto cursor-pointer h-150 max-sm:w-full max-sm:h-auto"
                  src={src}
                  alt=""
                  width={1200}
                  height={600}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="cursor-pointer w-14 h-14 left-17 max-sm:left-1 right-auto bg-transparent border-none shadow-none hover:bg-transparent hover:text-white text-white [&_svg]:rotate-180 [&_svg]:size-12! max-sm:[&_svg]:size-7!" />
          <CarouselPrevious className="cursor-pointer w-14 h-14 right-17 max-sm:right-1 left-auto bg-transparent border-none shadow-none hover:bg-transparent hover:text-white text-white [&_svg]:rotate-180 [&_svg]:size-12! max-sm:[&_svg]:size-7!" />
        </Carousel>
      </div>
      <div className="flex flex-row justify-end my-auto mx-auto gap-1.5 bg-rose-500 w-290 p-4 rounded-md mt-14 max-sm:flex-col max-sm:w-[calc(100%-20px)] max-sm:items-center max-sm:mt-8">
        <div className="max-sm:flex mr-5 pr-5 max-sm:flex-col max-sm:items-center max-sm:ml-9">
          <Image className="size-24 ml-12 mt-20 max-sm:ml-0 max-sm:mt-2" src="/foto/pish.svg" alt="" width={96} height={96} />
          <Image className="size-8 mr-7 mt-5 max-sm:mr-0 max-sm:mt-3" src="/foto/pash.svg" alt="" width={32} height={32} />
          <div className="flex">
            <p className="text-white text-lg mr-2 mt-5 cursor-pointer font-medium">مشاهده همه</p>
            <Image className="size-4 mt-6" src="/foto/chevron.svg" alt="" width={16} height={16} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <Carousel opts={{ align: "start", direction: "rtl" }} className="w-full">
            <CarouselContent className="-ml-2">
              {items.map((item, index) => (
                <CarouselItem key={index} className="flex flex-row basis-1/4 pl-2 max-sm:basis-full max-sm:w-7">
                  <div className="relative h-83 w-70 bg-white flex flex-col gap-2 cursor-pointer mx-auto max-sm:w-full max-sm:h-auto max-sm:mb-2 max-sm:pb-4">
                    <span className="absolute top-3 right-3 bg-rose-500 font-semibold text-white text-sm px-3 py-0.5 rounded-full">تخفیف</span>
                    <Image className="h-55 rounded-3xl max-sm:w-full max-sm:h-auto" src={item.img} alt="" width={300} height={300} />
                    <p className="text-center text-[17px] mx-2 max-sm:px-2">{item.title}</p>
                    <div className="flex flex-row justify-center gap-3 mt-3 max-sm:flex-wrap max-sm:px-2">
                      <span className="text-center font-semibold text-gray-500 line-through">{item.oldPrice}</span>
                      <span className="text-center font-semibold text-gray-400">{item.newPrice}</span>
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
      <div className="h-15 w-15 bg-rose-500 rounded-full flex justify-center items-center fixed right-8 bottom-8 cursor-pointer max-sm:right-4 max-sm:bottom-4">
        <Image className="size-7 w-15 h-15 rounded-full" src="/foto/chat.png" alt="" width={60} height={60} />
      </div>
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
      <h3 className="text-2xl font-bold text-center mt-14 max-sm:text-2xl">پرفروش های این ماه</h3>
      <div className="flex flex-row justify-center gap-5 mt-10 max-sm:flex-col max-sm:w-[calc(100%-20px)] max-sm:p-3 max-sm:items-center max-sm:mx-auto">
        {forms.map((form, index) => (
          <ProductCard
            key={index}
            img={form.img}
            title={form.title}
            oldPrice={form.oldPrice}
            price={form.newPrice}
            showDiscount={true} />
        ))}
      </div>
      <div className="flex flex-row gap-6 justify-center mt-45   max-sm:flex-col max-sm:items-center max-sm:mt-10 max-sm:px-2">
        <Image className="w-150 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main2/img1.jpg" alt="" width={600} height={400} />
        <Image className="w-150 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main2/img2.jpg" alt="" width={600} height={400} />
      </div>
      <div className="flex flex-row gap-6 justify-center mt-12 max-sm:flex-col max-sm:items-center max-sm:px-2">
        <Image className="w-150 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main2/img3.jpg" alt="" width={600} height={400} />
        <Image className="w-150 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main2/img4.jpg" alt="" width={600} height={400} />
      </div>
      <span className="w-px h-11 bg-black mx-auto mt-13 max-sm:mt-8"></span>
      <h3 className="text-2xl font-bold text-center mt-14 max-sm:text-2xl">سرویس های پخش فیلم و سریال</h3>
      <Carousel
        opts={{
          align: "start",
          direction: "rtl",
        }}
        className="w-full max-w-6xl mx-auto mt-10 px-6"
      >
        <CarouselContent>
          {lists.map((form, index) => (
            <CarouselItem key={index} className="basis-auto">
              <div className="p-1 max-sm:w-65">
                <ProductCard
                  img={form.img}
                  title={form.title}
                  oldPrice={form.oldPrice}
                  price={form.price}
                  showDiscount={index == 1 || index == 6 || index == 7 || index == 11}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="cursor-pointer w-13 max-sm:w-10 h-13 max-sm:h-10 left-0 max-sm:mt-30 max-sm:left-5 right-auto bg-red-500 border-none shadow-none hover:bg-red-400 text-white hover:text-white [&_svg]:rotate-180 [&_svg]:size-10! max-sm:[&_svg]:size-6!" />
        <CarouselPrevious className="cursor-pointer w-13 max-sm:w-10 h-13 max-sm:h-10 right-0 max-sm:mt-30 max-sm:right-2 left-auto bg-red-500 border-none shadow-none hover:bg-red-400 text-white hover:text-white [&_svg]:rotate-180 [&_svg]:size-10! max-sm:[&_svg]:size-6!" />
      </Carousel>
      <div className="flex flex-row gap-6 justify-center mt-30 max-sm:flex-col max-sm:items-center max-sm:mt-10 max-sm:px-2">
        <Image className="w-145 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main3/img1.jpg" alt="" width={600} height={400} />
        <Image className="w-145 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main3/img2.jpg" alt="" width={600} height={400} />
      </div>
      <div className="flex flex-row gap-6 justify-center mt-12 max-sm:flex-col max-sm:items-center max-sm:px-2">
        <Image className="w-145 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main3/img3.jpg" alt="" width={600} height={400} />
        <Image className="w-145 cursor-pointer max-sm:w-full max-sm:h-auto" src="/foto/main3/img4.jpg" alt="" width={600} height={400} />
      </div>
      <span className="w-px h-11 bg-black mx-auto mt-13 max-sm:mt-8"></span>
      <h3 className="text-2xl font-bold text-center mt-14 max-sm:text-2xl">سرویس های پخش موسیقی</h3>
      <div className="flex flex-row justify-center gap-5 mt-10 max-sm:flex-col max-sm:w-[calc(100%-20px)] max-sm:p-3 max-sm:items-center max-sm:mx-auto">
        {three.map((form, index) => (
          <ProductCard
            key={index}
            img={form.img}
            title={form.title}
            oldPrice={form.oldPrice}
            price={form.price}
            showDiscount={index == 0 || index == 2}
          />
        ))}
      </div>
      <div className="max-sm:px-2">
        <Image className="max-w-6xl mx-auto mt-25 cursor-pointer max-sm:w-full max-sm:h-auto max-sm:mt-10" src="/foto/main-img2/img.jpg" alt="" width={1200} height={500} />
      </div>
      <span className="w-px h-11 bg-black mx-auto mt-13 max-sm:mt-8"></span>
      <h3 className="text-2xl font-bold text-center mt-5 max-sm:text-2xl max-sm:mt-10">سرویس های کاربردی و ویژه</h3>
      <div className="flex flex-row justify-center gap-5 mt-10 max-sm:flex-col max-sm:w-[calc(100%-20px)] max-sm:p-3 max-sm:items-center max-sm:mx-auto">
        {four.map((form, index) => (
          <ProductCard
            key={index}
            img={form.img}
            title={form.title}
            oldPrice={form.oldPrice}
            price={form.price}
            showDiscount={index == 2}
          />
        ))}
      </div>
      <div className="max-sm:px-2">
        <Image className="max-w-6xl mx-auto mt-25 cursor-pointer max-sm:w-full max-sm:h-auto max-sm:mt-10" src="/foto/main-img3/img.jpg" alt="" width={1200} height={500} />
      </div>
      <span className="w-px h-11 bg-black mx-auto mt-13 max-sm:mt-8"></span>
      <h3 className="text-2xl font-bold text-center mt-9 max-sm:text-2xl max-sm:mt-15">مطالب وبلاگ</h3>
      <div className="flex flex-row justify-center gap-5 mt-10 max-sm:flex-col max-sm:items-center max-sm:px-2 max-sm:mx-auto">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            img={blog.img}
            title={blog.title}
            date={blog.date}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;