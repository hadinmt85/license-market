import BlogCard from "./card";

const blogs = [
    { img: "/foto/list-five-item/img1.jpg", title: "نحوه تغییر کشور اپل آیدی و ریجن آیفون (در ایران 2025)", date: "شنبه، ۲ آذر ۱۴۰۴" },
    { img: "/foto/list-five-item/img2.jpg", title: "آموزش اضافه کردن اندیکاتور به تریدینگ ویو (در ۳ مرحله)", date: "یکشنبه، ۲۲ آذر ۱۴۰۴" },
    { img: "/foto/list-five-item/img3.jpeg", title: "حل مشکل کار نکردن برنامه Alight Motion(خطای ۳۵۶۵)", date: "چهارشنبه، ۲۶ آذر ۱۴۰۴" },
];

export default function Blog() {
    return (
        <div className="mt-25">
            <span className="w-px h-11 bg-black mx-auto mt-13 max-sm:mt-8"></span>
            <h3 className="text-2xl font-bold text-center mt-9 max-sm:text-2xl max-sm:mt-15">مطالب وبلاگ</h3>
            <div className="flex flex-row justify-center gap-5 mt-10 max-sm:flex-col max-sm:items-center max-sm:px-2 max-sm:mx-auto">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} img={blog.img} title={blog.title} date={blog.date} />
                ))}
            </div>
        </div>
    );
}