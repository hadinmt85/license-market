import ProductCard from "./list";

const forms = [
    { img: "/foto/list_form/img1.webp", title: "خرید اکانت ChatGPT Plus 4 و ChatGPT 5 (شارژ آنی)", oldPrice: "۴٫۹۹۹٫۰۰۰", newPrice: "۵۹۹٫۰۰۰ تومان" },
    { img: "/foto/list_form/img2.webp", title: "خرید اکانت Grok 4 گروک با ایمیل شما (با 91% تخفیف)", oldPrice: "۶٫۸۹۹٫۰۰۰", newPrice: "۹۹۹٫۰۰۰ تومان" },
    { img: "/foto/list_form/img3.webp", title: "خرید اکانت مایکروسافت Microsoft 365 (با 91% تخفیف)", oldPrice: "۹۸۶٫۰۰۰", newPrice: "۲۴۹٫۰۰۰ تومان" },
    { img: "/foto/list_form/img4.webp", title: "خرید اکانت تریدینگ ویو TradingView (با 91% تخفیف ویژه)", oldPrice: "۵٫۵۲۴٫۰۰۰", newPrice: "۴۹۹٫۰۰۰ تومان" },
];

export default function Product() {
    return (
        <div className="mt-25">
            <h3 className="text-2xl font-bold text-center mt-14 max-sm:text-2xl">پرفروش های این ماه</h3>
            <div className="flex flex-row justify-center gap-5 mt-10 max-sm:flex-col max-sm:w-[calc(100%-20px)] max-sm:p-3 max-sm:items-center max-sm:mx-auto">
                {forms.map((form, index) => (
                    <ProductCard key={index} img={form.img} title={form.title} oldPrice={form.oldPrice} price={form.newPrice} showDiscount={true} />
                ))}
            </div>
        </div>
    );
}