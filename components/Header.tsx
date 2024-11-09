import Image from "next/image"
import Navbar from "./Navbar"

const Header = ()=>{
    return (
        <div className=" border-2 border-white w-full flex flex-col  h-screen">
            <div className="flex flex-1 ">
                {/* Image */}
                <Image src={"/images/hero/iamge.png"} alt="Home image" className="object-cover" width={500} height={500}></Image>
            </div>
            <div className="flex flex-1 ">
                {/* Contents */}
            </div>
        </div>  
    )
}


export default Header