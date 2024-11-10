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
      src: "/images/travel/collect/Frame1.png",
      title: "Delhi",
      state: "Delhi",
    },
    {
      src: "/images/travel/collect/Frame1.png",
      title: "Delhi",
      state: "Delhi",
    },
    {
      src: "/images/travel/collect/Frame2.png",
      title: "Munnar",
      state: "Keral",
    },
  ];

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
          <div className="flex overflow-x-auto w-full space-x-10 py-4 px-5 scrollbar-hide">
            {image.map((img, idx) => (
              <div
                className="relative flex-shrink-0"
                key={idx}
                style={{ width: 270 }}
              >
                <Image
                  src={img.src}
                  alt="image"
                  width={270}
                  height={480}
                  className="rounded-lg"
                />
                <div className="absolute bottom-2 gap-0 flex flex-col justify-center items-center w-full">
                  <h3 className="font-bold text-2xl text-white">
                    {img.title} Itinerary
                  </h3>
                  <p className="font-bold text-lg text-white">{img.state}</p>
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
          <div className="absolute w-full  top-[14.5rem] h-full">
            <div className="max-w-[67rem] mx-auto w-full flex justify-between ">
              <div className="flex flex-col gap-4  items-center">
                <FaPlane className={`w-10 h-10 rotate-45`} />
                <h1 className="text-xl font-bold ">1</h1>
                <p className="font-bold text-[1.6rem] max-w-[10rem] w-full text-center">
                  Create Itinerary
                </p>
              </div>
              <div className="flex flex-col gap-4  relative top-[9.2rem]  items-center">
                <FaPlane className={`w-10 h-10 rotate-0`} />
                <h1 className="text-xl font-bold ">2</h1>
                <p className="font-bold text-[1.6rem] max-w-[13rem] w-full text-center">
                  Convert into Travel Package
                </p>
              </div>
              <div className="flex relative left-5 gap-4 flex-col items-center">
                <FaPlane className={`w-10 h-10 -rotate-45`} />
                <h1 className="text-xl font-bold ">3</h1>
                <p className="font-bold text-[1.6rem] max-w-[10rem] w-full text-center">
                  Earn by sharing
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Actions;
