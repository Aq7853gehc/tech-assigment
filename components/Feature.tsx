import Image from "next/image"



const Feature = ()=> {
    const cards = [
        {title:"Trusted By Influencers", info:'A trusted platform for influencers to grow and earn.',img:"/images/illustrations/d.png"},
        {title:"Secured Data", info:'Advanced security measures to protect your valuable data',img:"/images/illustrations/c.png"},
        {title:"Authentic Payment Partner", info:'Reliable, fast, and secure payments you can trust',img:"/images/illustrations/a.png"},
        {title:"Monetize Your Influence", info:'Seamlessly turn your influence into consistent revenue',img:"/images/illustrations/b.png"},
    ]
    return (
        <main className="flex max-sm:flex-col justify-between  max-sm:gap-4 ">
            <div className="flex justify-center items-center  flex-1">
                <h1 className="text-[#00DC82] text-xl md:text-4xl max-w-[28rem] font-bold text-center" >From Creation to Monetization: Vyb Store Has It All</h1>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-4 flex-1">
        {cards.map((itm,idx)=>(
            <Card title={itm.title} info={itm.info} img={itm.img}  key={idx}/>
        ))}
            </div>
        </main>
    )   
}


const Card =({title,img,info,}:{title:string,img:string,info:string,})=>{

    return(
        <div className={`bg-black max-w-sm max-sm:gap-4  flex  rounded-2xl flex-col items-center   py-2 px-2`}>
            <h1 className="text-base md:text-[2rem] md:leading-10 font-bold md:w-72 text-center">{title}</h1>
            <p className="text-center text-xs max-w-xs md:text-base font-medium  md:font-bold">{info}</p>
            <Image src={img} alt="imaga" width={190} height={160} className=" object-container max-sm:size-[5rem] "/>
        </div>
    )
}

export default Feature