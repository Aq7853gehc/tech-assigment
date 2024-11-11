import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const Influencer = () => {
  const pics = [
    { src: "/images/infulencer/1.png", title: "Samira" },
    { src: "/images/infulencer/2.png", title: "Samira" },
    { src: "/images/infulencer/3.png", title: "Jay" },
    { src: "/images/infulencer/4.png", title: "Jay" },
  ];
  return (
    <main className=" relative flex gap-10 flex-col w-full">
      <h1 className="text-[#00dc82] text-4xl font-bold text-center">
        Our Influencers
      </h1>
      <div className="size-64 rounded-full grid grid-cols-4 gap-10 w-full">
        {pics.map((itms, idx) => (
          <div key={idx} className="relative grayscale hover:grayscale-0 group">
            <div className="absolute top-3 left-2 w-full h-full rounded-full bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300  " />

            <div className="flex gap-4 relative">
              <Image
                src={itms.src}
                alt="pics"
                width={256}
                height={256}
                className="rounded-full w-full h-full object-contain"
              />
              <div className="px-2 flex gap-2 items-center justify-center absolute top-[60%] left-[40%] bg-white rounded-xl opacity-0 group-hover:opacity-100">
                <h1 className="text-2xl text-black font-bold">{itms.title}</h1>
                <MdArrowOutward className="text-black w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Influencer;
