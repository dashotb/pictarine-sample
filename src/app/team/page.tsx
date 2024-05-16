"use client"
import "@/app/globals.css"
import Image from "next/image"
import majorque from "@/assets/team/team-complete-majorque.jpg"
import me from "@/assets/mwa.png"
import { Title } from "@/components/Title/Title"
import team from "@/data/team.json"
import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer"

export default function Team() {
    const [members, setMembers] = useState(team)
    const handleParameter = (e:any) => {
        if(e == "none"){
            setMembers(team)
        }
        else{
            setMembers(team.filter((team) => team.team == e))

            console.log(team.filter((team) => team.team == e))
        }
    }
    
    if (members.length > 50){
        var count = 
            <>
                <div className="relative flex flex-col justify-end w-full ">
                    <p className="text-8xl font-bold">61</p>
                    <p className="text-4xl font-bold mb-2">people</p>
                    <p>Mais on grandit très vite</p>
                </div>
            </>
    }else{
        var count = <></>
    }
    
    
    return(
        <>
            <Navbar theme="white"/>
            <main className="flex min-h-screen flex-wrap flex-col align-center items-center w-full overflow-hidden">
                <section className="pt-24 px-5 lg:px-0 lg:max-w-[75rem]">
                    <Image className="pb-5" src={majorque} alt="l'équipe à majorque" />
                    <h2 className="text-[1.5rem] lg:text-[3.5rem] flex flex-col">
                        La seule, la vraie,
                        <span className="absolute pt-5 lg:pt-12 pl-6 text-red-600 text-[2.2rem] lg:text-[4.2rem] italic font-extrabold ">la Picta Team</span>
                    </h2>
                </section>
                <section className="px-5 lg:px-0 pt-24 lg:max-w-[75rem]">
                    <div className="grid grid-cols-4 lg:flex lg:flex-row gap-3 w-full ">
                        <button className="bg-[#e6eef0] lg:w-28 h-8 text-xs sm:text-sm rounded-[5px]" value="none" onClick={(e) => handleParameter(e.currentTarget.value)}>Toute l'équipe</button>
                        <button className="bg-[#e6eef0] lg:w-28 h-8 text-xs sm:text-sm rounded-[5px]" value="product" onClick={(e) => handleParameter(e.currentTarget.value)}>Product</button>
                        <button className="bg-[#e6eef0] lg:w-28 h-8 text-xs sm:text-sm rounded-[5px]" value="people" onClick={(e) => handleParameter(e.currentTarget.value)}>People</button>
                        <button className="bg-[#e6eef0] lg:w-28 h-8 text-xs sm:text-sm rounded-[5px]" value="marketing" onClick={(e) => handleParameter(e.currentTarget.value)}>Marketing</button>
                        <button className="bg-[#e6eef0] lg:w-28 h-8 text-xs sm:text-sm rounded-[5px]" value="finance" onClick={(e) => handleParameter(e.currentTarget.value)}>Finance</button>
                        <button className="bg-[#e6eef0] lg:w-28 h-8 text-xs sm:text-sm rounded-[5px]" value="engineering" onClick={(e) => handleParameter(e.currentTarget.value)}>Engineering</button>
                        <button className="bg-[#e6eef0] lg:w-28 h-8 text-xs sm:text-sm rounded-[5px]" value="partnerships" onClick={(e) => handleParameter(e.currentTarget.value)}>Partnerships</button>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 pt-16">
                        {count}
                        {members.map(member => (
                            <div className="cardMember">
                                <Image className="cardImage" src={member.image.filename} alt={member.name} width={300} height={300} />
                                <div className="cardText">
                                    <div className="cardTextTop">
                                        <p>{member.name}</p>
                                        <p>{member.job}</p>
                                    </div>
                                    <div className="cardTextBottom">
                                        <p>{member.love}</p>
                                        <p>{member.passion}</p>
                                        <p>{member.work}</p>
                                        <p>{member.dont}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="cardMember">
                            <Image className="cardImage" src={me} alt="Habib" width={300} height={300} />
                            <div className="cardText">
                                <div className="cardTextTop">
                                    <p>Habib</p>
                                    <p>Frontend Developer</p>
                                </div>
                                <div className="cardTextBottom">
                                    <p>???</p>
                                    <p>???</p>
                                    <p>Rend le binaire mainstream 👨🏻‍💻</p>
                                    <p>???</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-5 lg:px-0 pb-10 pt-20">
                    <h2 className="text-center text-[1.5rem] lg:text-[3.5rem] leading-[1.7rem] lg:leading-[3.5rem] flex flex-col w-full">
                        Ça donne envie?
                        <span className=" text-center text-red-600 text-[2.4rem] lg:text-[4.35rem] font-bold ">Rejoins-nous!</span>
                    </h2>
                    <Link className="flex justify-center pt-3 lg:pt-8" href="/careers"><button className="bg-[#db3753] w-48 lg:w-[16.5rem] h-10 lg:h-[3.8rem] rounded-[15px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Nos postes ouverts</button></Link>
                </section>
            </main>
            <Footer theme="white"/>
        </>
    )
}