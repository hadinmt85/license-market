import Image from "next/image";

interface BlogCardProps {
    img: string;
    title: string;
    date: string;
} 

function Blogcard({ img, title, date }: BlogCardProps) {
    return (
        <div className="relative w-100 cursor-pointer max-sm:w-full max-sm:max-w-md">
            <div className="relative">
                <Image className="w-full rounded-2xl" src={img} alt="" width={500} height={300} />
            </div>
            <div className="relative left-3 -mt-18 mx-4 bg-white p-3 shadow-md max-sm:left-0 max-sm:mx-2 max-sm:-mt-10">
                <p className="text-right text-lg font-semibold leading-relaxed">{title}</p>
                <p className="text-right font-medium text-gray-400 mt-3">{date}</p>
            </div>
        </div>
    )
}

export default Blogcard;