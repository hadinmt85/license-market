import Image from "next/image"

const SupportButton = () => {
    return (
        <div className="h-15 w-15 bg-rose-500 rounded-full flex justify-center items-center fixed right-8 bottom-8 cursor-pointer max-sm:right-4 max-sm:bottom-4">
            <Image className="size-7 w-15 h-15 rounded-full" src="/foto/chat.png" alt="" width={60} height={60} />
        </div>
    )
}

export default SupportButton