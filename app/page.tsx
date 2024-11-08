import Actions from "@/components/Acttions"
import FAQ from "@/components/FAQ"
import Feature from "@/components/Feature"
import Header from "@/components/Header"
import Influencer from "@/components/Influencer"
import Scroller from "@/components/Scroller"

const Home = ()=>{
  return (
    <main className="  flex flex-col bg-[#181818] w-full h-screen overflow-x-scroll px-[1rem] py-[.5rem] md:px-[7.5rem] md:py-[2.25rem] text-white ">
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