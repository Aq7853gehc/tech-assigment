import Image from "next/image";

const Actions = () => {
  const image = [
    "/images/travel/collect/Frame3.png",
    "/images/travel/collect/Frame2.png",
    "/images/travel/collect/Frame1.png",
    "/images/travel/collect/Frame1.png",
    "/images/travel/collect/Frame1.png",
  ];
  return (
    <main className="w-full flex flex-col  gap-10 mb-4">
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
        <section className="w-full  bg-black item-center justify-between flex flex-col h-full">
          <h3 className="text-[2.125rem] text-center ">
            Explore Our Curated Travel Itineraries
          </h3>
          <div className="flex flex-row gap-6">
            {image.map((img, idx) => (
              <Image src={img} alt="image" width={270} height={480} key={idx} />
            ))}
          </div>
        </section>
        <section className="bg-gradient-to-r  from-[#FF5D5D] to-[#4794ff] w-full h-screen"></section>
      </div>
    </main>
  );
};

export default Actions;
