import Actions from "@/components/Acttions"
import FAQ from "@/components/FAQ"
import Feature from "@/components/Feature"
import Header from "@/components/Header"
import Influencer from "@/components/Influencer"
import Navbar from "@/components/Navbar"
import Scroller from "@/components/Scroller"

const Home = ()=>{
  return (
    <main className=" container mx-auto flex flex-col  bg-[#181818] w-full  px-[1rem] py-[.5rem]  md:py-[2.25rem] text-white ">
      <Navbar/>
      <Header/> 
      <Actions/>
      <Feature/>
      <Influencer/>
      <Scroller/>
      <FAQ/>
    </main>
  )
}

export default Home