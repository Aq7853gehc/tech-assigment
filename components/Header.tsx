import Image from "next/image";

const Header = () => {
  return (
    <div className="justify-center md:justify-between max-sm:gap-5 py-2 w-full flex h-full flex-col  md:flex-row">
      <div className="flex flex-col gap-3 md:gap-6  w-full flex-1 ">
        {/* Content */}
        <div className="text-[2.5rem] md:text-[4.5rem] max-w-[18rem] md:max-w-[32rem] w-full gap-2 md:gap-4 flex flex-wrap  font-semibold  text-black">
          <span className="bg-white rounded-xl px-0 py-2 md:px-2 md:py-3">One</span>
          <span className="bg-white rounded-xl px-0 py-2 md:px-2 md:py-3">Stop</span>
          <span className="bg-white rounded-xl px-0 py-2 md:px-2 md:py-3">Marketplace</span>
          <span className="bg-white rounded-xl px-0 py-2 md:px-2 md:py-3">For</span>
          <span className="bg-[#00dc82] rounded-xl px-1 py-2 md:px-2 md:py-4">Influencers</span>
        </div>
        <div className="text-2xl md:text-4xl max-w-lg font-bold leading-[29px] md:leading-10 w-full ">
          {/* Body  */}
          &quot;Unleash Your Influence: Sell Itineraries, Build Your Brand, Create
          Merch, and Share Content – All in One Hub.&quot;
        </div>
        <div className="flex  justify-between max-w-[17rem] md:max-w-xs w-full  ">
          <button className="p-2 md:p-4 bg-[#00dc82] text-base md:text-lg rounded-xl text-black font-semibold">
            Demo Store
          </button>
          <div className="relative p-[1px]  items-center justify-center  rounded-2xl bg-gradient-to-r to-[#FF5D5D] from-[#4794FF]">
            <button className="relative w-full h-full inline-flex items-center justify-center p-2 md:p-4 border- overflow-hidden font-semibold transition-all duration-200 ease-out rounded-2xl bg-black  group">
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r to-[#FF5D5D] from-[#4794ff]">
                {"Join waitlist"}
              </span>
             
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-1 w-full md:justify-end">
        {/* Image */}
        <Image
          src={"/images/hero/iamge.png"}
          alt="Home image"
          className="   rounded-xl"
          width={600}
          height={500}
        ></Image>
      </div>
    </div>
  );
};

export default Header;
