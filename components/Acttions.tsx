import Image from "next/image";
import { FaPlane } from "react-icons/fa6";

const Actions = () => {
  const image = [
    {
      src: "/images/travel/collect/Frame3.png",
      title: "Darjeeling",
      state: "West Bengal",
    },
    {
      src: "/images/travel/collect/Frame3.png",
      title: "Darjeeling",
      state: "West Bengal",
    },
    {
      src: "/images/travel/collect/Frame3.png",
      title: "Darjeeling",
      state: "West Bengal",
    },
    {
      src: "/images/travel/collect/Frame3.png",
      title: "Darjeeling",
      state: "West Bengal",
    },
  ];

  const list= [
    {id:}
  ]
  return (
    <main className="w-full flex flex-col mb-4 gap-6">
      <section className="w-full flex justify-between items-center rounded-3xl h-28  bg-black px-4">
        {/* Tab bar  */}
        <p className="text-3xl font-bold pb-3 border-b border-[#00dc82]">
          Travel
        </p>
        <p className="text-3xl font-bold pb-3">Digital</p>
        <p className="text-3xl font-bold pb-3">Brand</p>
        <p className="text-3xl font-bold pb-3">Merch</p>
      </section>

      <div className="w-full h-screen">
        <section className="bg-header h-full rounded-xl flex flex-col itmes-center justify-center w-full">
          <h1 className="uppercase text-center text-[2.5rem] md:text-[11.3rem] leading-[216px] font-bold">
            Travel
          </h1>
          <p className="text-center font-bold text-sm md:text-4xl max-w-2xl mx-auto">
            Turn your travel experience into itinerary, travel package with VYB
            Store and share it with your true followers.
          </p>
        </section>
        <section className="w-full  bg-black items-center justify-between flex flex-col gap-10 pb-2">
          <h3 className="text-[2.125rem] text-center ">
            Explore Our Curated Travel Itineraries
          </h3>
          <div className="flex flex-row gap-6">
            {image.map((img, idx) => (
              <div className="relative" key={idx}>
                <Image src={img.src} alt="image" width={270} height={480} />
                <div className="absolute bottom-2 gap-0 flex flex-col justify-center items-center w-full">
                  <h3 className="font-bold text-2xl">{img.title} Itenrary</h3>
                  <p className="font-bold text-lg">{img.state}</p>
                  <div className="flex gap-2 px-3 py-1 rounded-full bg-white">
                    <p className="text-lg font-bold text-black">Samira Hadid</p>
                    <Image
                      src={"/images/infulencer/1.png"}
                      alt="avatar"
                      width={23}
                      height={23}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="w-full h-10 bg-black"></div>
        <section className="relative w-full bg-black overflow-hidden">
          <h3 className="text-[2.125rem] font-bold text-center text-white pt-8">
            How to list?
          </h3>

          <div className="absolute top-0 left-[-10rem] w-[50%] h-full rounded-full bg-gradient-to-br from-[#FF5FD2] to-[#000000] opacity-[0.1] blur-3xl"></div>
          <div className="absolute top-0 right-[-10rem] w-[50%] h-full rounded-full bg-gradient-to-br from-[#4885FFD6] to-[#000000] opacity-[0.1] blur-3xl"></div>

          <img
            src="/images/travel/fotter.png"
            alt="footer image"
            className="w-full object-cover"
          />

          
            <svg className="absolute left-[10rem]  inset-0 w-full h-full">
              <path
                d="M 0,0 A 150,100 0 0,0 1200,0"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="10, 10"
              />
            </svg>
            <div className="absolute w-full left-60 top-52 h-full">
              <div className="max-w-sm w-full">
                
              </div>
            </div>
           
        </section>
      </div>
    </main>
  );
};

export default Actions;
