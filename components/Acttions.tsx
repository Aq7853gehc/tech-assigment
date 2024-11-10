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
      state: "Kerala",
    },
  ];

  return (
    <main className="w-full flex flex-col mb-4 gap-6">
      <section className="w-full flex flex-wrap justify-between items-center rounded-xl md:rounded-3xl h-16 md:h-28 bg-black px-2 md:px-4">
        {/* Tab bar  */}
        <p className="text-xl md:text-3xl font-bold pb-3 border-b border-[#00dc82]">
          Travel
        </p>
        <p className="text-xl md:text-3xl font-bold pb-3">Digital</p>
        <p className="text-xl md:text-3xl font-bold pb-3">Brand</p>
        <p className="text-xl md:text-3xl font-bold pb-3">Merch</p>
      </section>

      <div className="w-full">
        <section className="bg-header bg-cover h-full rounded-xl flex flex-col items-center justify-center w-full text-center px-4 py-8 md:py-16">
          <h1 className="uppercase text-3xl md:text-[6rem] lg:text-[11.3rem] font-bold leading-tight md:leading-[6rem] lg:leading-[216px]">
            Travel
          </h1>
          <p className="text-sm md:text-2xl lg:text-4xl max-w-2xl font-bold">
            Turn your travel experience into an itinerary, travel package with
            VYB Store, and share it with your true followers.
          </p>
        </section>

        <section className="w-full bg-black flex flex-col gap-10 py-10">
          <h3 className="text-2xl font-bold md:text-3xl text-center">
            Explore Our Curated Travel Itineraries
          </h3>
          <div className="flex overflow-x-auto w-full space-x-4 px-4 py-6 scrollbar-hide">
            {image.map((img, idx) => (
              <div
                className="relative flex-shrink-0 w-[70vw] md:w-[270px]"
                key={idx}
              >
                <Image
                  src={img.src}
                  alt="image"
                  width={270}
                  height={480}
                  className="rounded-lg"
                />
                <div className="absolute bottom-2 flex flex-col items-center w-full text-center">
                  <h3 className="font-bold text-xl md:text-2xl text-white">
                    {img.title} Itinerary
                  </h3>
                  <p className="font-medium md:font-bold text-lg text-white">
                    {img.state}
                  </p>
                  <div className="flex max-sm:hidden items-center gap-2 px-3 py-1 rounded-full bg-white">
                    <p className="text-base md:text-lg font-bold text-black">
                      Samira Hadid
                    </p>
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
            <div></div>
          </div>
        </section>
        {/* for desktop */}
        <section className="relative w-full h-full max-sm:hidden bg-black overflow-hidden rounded-b-3xl">
          <h3 className="text-[2.125rem] font-bold text-center text-white pt-8">
            How to list?
          </h3>

          <div className="absolute top-0 left-[-10rem] w-[50%] h-full rounded-full bg-gradient-to-br from-[#FF5FD2] to-[#000000] opacity-[0.2] blur-3xl" />
          <div className="absolute top-0 right-[-10rem] w-[50%] h-full rounded-full bg-gradient-to-br from-[#4885FFD6] to-[#000000] opacity-[0.2] blur-3xl" />

          <img
            src="/images/travel/fotter.png"
            alt="footer image"
            className="w-full object-cover"
          />

          <svg className="absolute md:left-[10rem] -top-10 inset-0 w-full h-full">
            <path
              d="M 0,0 A 150,100 0 0,0 1200,0"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="10, 10"
            />
          </svg>
          <div className="absolute w-full  top-[12rem] h-full">
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
            <div className="absolute w-full h-full top-[22rem]">
              <h1 className=" text-[2.25rem] font-bold text-center w-full  ">
                You Curate Experience We Make It Happen
              </h1>
            </div>
          </div>
        </section>
        {/* for mobile  */}
        <section className="relative  bg-black h-full w-full md:hidden rounded-b-xl overflow-x-clip">
          <h3 className="text-xl font-bold text-center text-white pt-8">
            How to list?
          </h3>
          <div className="relative flex justify-between w-full h-[50vh]">
            <div className="absolute -top-20 left-0 w-[50%] h-[100%] rounded-3xl bg-gradient-to-br from-[#FF5FD2] to-[#000000] opacity-[0.5] blur-3xl" />
            <div className="absolute top-20 -right-10  w-[50%] h-[100%] rounded-3xl bg-gradient-to-br from-[#4885FFD6] to-[#000000] opacity-[0.6] blur-3xl" />
          </div>
          <img
            src="/images/travel/fotter.png"
            alt="footer image"
            className="w-full object-cover"
          />

          <svg className="absolute top-0  left-5  inset-0 w-full h-full">
            <path
              d="M 0,0 A 100,100 0 0,0 300,-100"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeDasharray="5, 5"
            />
          </svg>
          <div className="absolute w-full top-0 h-full">
            <div className=" w-full flex justify-between ">
              <div className="flex flex-col gap-4 relative top-9 left-2  items-center">
                <FaPlane className={`w-7 h-7 rotate-45`} />
                <h1 className="text-sm font-bold ">1</h1>
                <p className="font-bold text-sm max-w-[5rem] w-full text-center">
                  Create Itinerary
                </p>
              </div>
              <div className="flex flex-col gap-4  relative top-[5.8rem]  items-center">
                <FaPlane className={`w-7 h-7 rotate-0`} />
                <h1 className="text-sm font-bold ">2</h1>
                <p className="font-bold text-sm max-w-[7rem] w-full text-center">
                  Convert into Travel Package
                </p>
              </div>
              <div className="flex relative top-9  right-8 gap-4 flex-col items-center">
                <FaPlane className={`w-7 h-7 -rotate-45`} />
                <h1 className="text-sm font-bold ">3</h1>
                <p className="font-bold text-sm max-w-[5rem] w-full text-center">
                  Earn by sharing
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 w-full">
            <h1 className=" text-lg font-bold text-center w-full max-w-52 mx-auto ">
              You Curate Experience We Make It Happen
            </h1>
          </div>
          <div className="relative  rounded-xl w-full bg-transparent  h-10" />
        </section>
      </div>
    </main>
  );
};

export default Actions;
