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
    const members = useState(team)
    return(
        <>
            <Navbar theme="white"/>
            <main className="flex min-h-screen flex-wrap flex-col align-center items-center w-full overflow-hidden">
                <section className=" pt-24 sm:px-5 lg:px-0 lg:max-w-[75rem]">
                    <Image className="pb-5" src={majorque} alt="l'équipe à majorque" />
                    <Title title="La seule, la vraie," subtitle="la Picta Team" />
                </section>
                <section className="sm:px-5 lg:px-0 pt-24">
                    <div className="grid grid-cols-4 gap-5">
                        <div className="relative flex flex-col justify-end w-full ">
                            <p className="text-8xl font-bold">61</p>
                            <p className="text-4xl font-bold mb-2">people</p>
                            <p>Mais on grandit très vite</p>
                        </div>
                        {members[0].map(member => (
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
                <section className="pb-10 pt-20">
                    <h2 className="flex flex-col text-center w-full text-[3.5rem] leading-[3.5rem]">Ça donne envie?
                        <span className="text-[4.35rem] font-bold text-center text-red-600">Rejoins-nous!</span>
                    </h2>
                    <Link className="flex justify-center pt-8" href="/careers"><button className="bg-[#db3753] w-[16.5rem] h-[3.8rem] rounded-[15px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Nos postes ouverts</button></Link>
                </section>
            </main>
            <Footer theme="white"/>
        </>
    )
}