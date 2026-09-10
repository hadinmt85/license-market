import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function App() {
    return (
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
    )
}

export default App;