"use client"

import Image from "next/image"
import React, { useState } from "react"


const Navbar:React.FC = ()=>{
const [open,setOpen]=useState()
    return (
        <div className="border-2 border-gray-500  flex bg-transparent text-white h-[3.9rem] justify-center w-full items-center">
            
            <div className="flex gap-3 w-[19rem] h-full justify-center items-center">
                {/*Logo*/}
                <div >
                    <div>

                    <span className="text-2xl text-white font-black h-32 w-40">V</span>
                    <span className="text-xl ">YB</span>
                    </div>
                </div>
                
                <div className="flex bg-white h-full w-[5rem] ">

                </div>
            </div>

            <div className="w-10 h-10">
                
            </div>
            <div className="md:flex gap-4 w-full hidden " >
                {/*nav links */}
                <h2>Fav Creator</h2>
                <h2>Merchandise</h2>
                <h2>Brand</h2>
                <h2>Digital</h2>
            </div>
            <div>
                {/* Drop down */}
            </div>
        </div>
    )
}

export default Navbar