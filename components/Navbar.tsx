"use client";

import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FiChevronDown, FiSearch, FiUser } from "react-icons/fi";
import ProfileDropdown from "./Profiledropdown";

const Navbar: React.FC = () => {
  const [DrpOpen, setDrpOpen] = useState<boolean>(false);
  return (
    <div className=" mt-10 flex bg-transparent py-1 text-white h-[3.9rem] justify-between  w-full items-center ">
      
      <div className="flex gap-8  h-full justify-between items-center ">
        {/*Logo*/}
        <div className="flex h-full items-center ">
          <span className="text-6xl text-white font-black ">V</span>
          <div className="flex flex-col gap-0 items-center justify-center">
            <span className="text-3xl font-semibold relative top-1">YB</span>
            <span className="font-semibold relative bottom-1">store</span>
          </div>
        </div>

        <div className="flex bg-white gap-2 h-full  w-44 md:w-[19.1rem] items-center rounded-full px-3">
          <FiSearch className="w-6 h-6 text-black " />
          <input
            className="text-black text-lg py-2 w-full font-semibold focus-visible:outline-none"
            placeholder="Search Creator/Product"
          />
        </div>
      </div>
        <div className="sm:hidden ">
          <BiMenu className="w-10 h-10"/>
          <ProfileDropdown/>
        </div>
      <div className="lg:flex  flex-1 hidden items-center justify-around ">
        {/*nav links */}
        <h2 className="text-[2rem]">Fav Creator</h2>
        <h2 className="text-[2rem]">Merchandise</h2>
        <h2 className="text-[2rem]">Brand</h2>
        <h2 className="text-[2rem]">Digital</h2>
      </div>
      <div className="flex max-sm:hidden justify-around bg-white rounded-2xl h-full border-2 w-32 items-center px-2">
        <FiUser className="text-black h-6 w-6 " />
        <div>
          {/* drop down */}
          <FiChevronDown
            className="w-6 h-6 text-black"
            onClick={() => setDrpOpen(!DrpOpen)}
          />
        </div>
      </div>
      {DrpOpen?(<div
        className={`bg-black max-sm:hidden border-white border-2 rounded-xl w-[10rem] h-[11rem] text-white absolute right-24 top-28 transition-all delay-200 justify-center w`}

      >
        <div className="w-full flex flex-col gap-8 justify-center px-5 py-3">
        <p className="text-body1-web font-medium ">Profile</p>
        <p className="text-body1-web font-medium ">Dashboard</p>
        <p className="text-body1-web font-medium ">My Store</p>
        </div>
      </div>):null}
      
    </div>
  );
};

export default Navbar;
