import Image from "next/image"

const Influencer = ()=>{
    const pics = [
        "/images/infulencer/1.png",
        "/images/infulencer/2.png",
        "/images/infulencer/3.png",

    ]
    return (
        <main className="flex flex-col w-full justify-between">
            <h1 className="text-[#00dc82] text-4xl font-bold text-center">Our Influencers</h1>
            <div className="size-64 rounded-full grayscale hover:grayscale-0">
            <div className="bg-gradient-to-r absolute opacity-0 hover:opacity-100 left-2 z-[-1] top-3 rounded-full from-[#FF5D5D] to-[#4794ff] w-full h-full"/>
            <Image src={pics[0]} alt="pics" width={268} height={268} className="object-contain rounded-full drop-shadow-md z-[10]"/>
            </div>
        </main>
    )
}

export default Influencer