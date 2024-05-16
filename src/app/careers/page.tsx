"use client"
import Navbar from "@/components/Navbar/Navbar";
import { Title } from "@/components/Title/Title";
import Image from "next/image";
import jobs from "@/data/jobs.json"
import { useState } from "react";
import Link from "next/link";
import { Contract, Hello, More, Point } from "@/assets/tools/svg";
import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";

export default function Careers() {
    const offers = useState(jobs)
    const mots = (tags: any) => {
        if (tags != null && tags.length > 0) {
            return(
                <>
                    <p className="font-bold italic">En quelques mots...</p>
                    <p className="text-[0.8rem] pt-2">• {tags[0]}</p>
                    <p className="text-[0.8rem] pt-2">• {tags[1]}</p>
                    <p className="text-[0.8rem] pt-2">• {tags[2]}</p>
                </>
            )
        }
        else{
            return;
        }
    }
    return(
        <>
            <Navbar theme="white"/>
            <main className="bg-[#fff] flex min-h-screen flex-wrap flex-col align-center items-center w-full overflow-hidden">
                <section className="max-w-[75rem] flex flex-row gap-10 pt-28">
                    <div className="content-center w-[50%]">
                        <Title title="We need you" subtitle="Rejoins-nous"/>
                        <p className="leading-5">On n’a pas fini de grandir ! On recherche des profils bourrés de talent et d’envie, bilingues avec une forte appétence pour l’étranger. Des “problem solvers” ingénieux, à l’esprit d’équipe qui ne se reposent jamais sur leurs acquis… bref, nos prochains coéquipiers n’auront pas peur de se retrousser les manches !</p>
                    </div>
                    <div className="w-[50%]">
                        <Image src="https://a.storyblok.com/f/189744/2488x2028/4583732b06/groupe-jeep.jpg" alt="groupe-jeep" width={2000} height={2000}/>
                    </div>
                </section>
                <section className="max-w-[75rem] flex flex-col pt-52">
                    <h2 className="font-bold text-[2.5rem]">Nos postes ouverts</h2>
                    <div>
                        <div className="grid grid-cols-3 gap-5">
                            {offers[0].map(offer => (
                                <Link href={offer.url}>
                                    <div className="p-8 bg-[#f8f8f8] h-80 scale-95 hover:scale-100 hover:transition-all ">
                                        <p className="font-bold text-xl">{offer.label}</p>
                                        <div>
                                            <p className="font-bold">{offer.properties[0].label} {offer.properties[0].labels}</p>
                                            <div className="flex flex-row pt-5 pt-2">
                                                <p className=" text-sm"><span className="inline-block w-3 mr-1"><Point /></span>{offer.city}</p>                                                    
                                                <p className="pl-8 text-sm"><span className="inline-block w-3 mr-1"><Contract /></span>{offer.contract}</p>
                                            </div>
                                        </div>
                                        <div>
                                            {mots(offer.tags)}
                                        </div>
                                        <div className="text-red-600 pt-3">
                                            <p>Lire plus <span className="w-3 inline-block"><More /></span></p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="max-w-[75rem] flex flex-col pt-52 bg-[#fff]">
                    <div className="grid grid-cols-12 gap-10">
                        <div className="col-start-1 col-end-5">
                            <h2 className="font-bold text-3xl">Ton job de rêve n’est pas dans la liste ?</h2>
                            <p className="pt-5 leading-5">N’hésite pas à nous envoyer ta candidature spontanée, on prendra toujours le temps de l’étudier en détail !</p>
                        </div>
                        <div className="col-start-5 col-end-13 bg-[#f8f8f8]">
                            <div className="flex flex-row gap-5 p-8 pt-12">
                                <input type="text" placeholder="Prenom" className="w-full bg-[#fff] py-3.5 px-4" />
                                <input type="text" placeholder="Nom" className="w-full bg-[#fff] py-3.5 px-4" />
                            </div>
                            <div className="flex flex-row gap-5 p-8 pt-1">
                                <input type="text" placeholder="Email" className="w-full bg-[#fff] py-3.5 px-4" />
                                <input type="text" placeholder="Telephone" className="w-full bg-[#fff] py-3.5 px-4" />
                            </div>
                            <div className="p-8 pt-1">
                                <textarea  placeholder="Dis-nous en plus sur toi et ce qui t'anime !" className="w-full bg-[#fff] py-3.5 px-4" />  
                            </div>
                            <div className="flex justify-center">
                                <button className="bg-[#db3753] font-bold w-80 h-[3.2rem] rounded-[10px] text-white text-sm mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Envoyer !</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="max-w-[75rem] flex flex-col pt-52 bg-[#fff]">
                    <div className="flex flex-row gap-10 overflow-x-scroll no-scrollbar ">
                        <div>
                            <div className="w-80">
                                <h2 className="font-bold text-3xl">Le process de recrutement</h2>
                                <p className="pt-5 leading-5">On veut mieux te connaitre ! Et pour cela, rien de tel qu'un process de recrutement transparent. Ce sera l'occasion pour toi de découvrir un peu plus Pictarine et de pouvoir mieux te projeter dans ta future équipe.</p>
                            </div>
                        </div>
                        <div>
                            <div className="bg-[#e6eef0] relative  w-64 h-64 rounded-[5px]">
                                <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">1</p>
                                <h2 className="text-2xl font-bold ml-5 relative z-[1] px-5 pt-5">Screening telephonique</h2>
                                <p className="pt-2 px-5">20 min</p>
                                <p className="pt-2 leading-5 px-5">1er échange pour apprendre à se connaître avec le manager de l’équipe que tu souhaites rejoindre.</p>
                            </div>
                            <div className="bg-[#e6eef0] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-28 z-[2] "><div className="bg-[#e6eef0] w-[83rem] h-[0.2rem] rounded-[100px] absolute mt-2 mr-12 z-[2]"></div></div>
                            <p className="flex justify-center italic font-bold mt-2">Day 1</p>
                        </div>
                        <div>
                            <div className="bg-[#e6eef0] relative w-64 h-64  rounded-[5px]">
                                <p className="absolute text-[5rem] leading-5 font-bold mt-10 mr-5 text-[#fff] z-[0]">2</p>
                                <h2 className="text-2xl font-bold ml-5 relative z-[1] px-5 pt-5">Entretien d’équipe</h2>
                                <p className="pt-2 px-5">90 min</p>
                                <p className="pt-2 px-5 leading-5">Entretien avec le manager et une personne de l’équipe que tu souhaites rejoindre.</p>
                            </div>
                            <div className="bg-[#e6eef0] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-28 z-[2] "></div>
                            <p className="flex justify-center italic font-bold mt-2">Day 7</p>
                        </div>
                        <div>
                            <div className="bg-[#e6eef0] relative w-64 h-64  rounded-[5px]">
                            <p className="absolute text-[5rem] leading-5 font-bold mr-5 mt-5 text-[#fff] z-[0]">3</p>
                                <h2 className="text-2xl font-bold ml-5 relative z-[1] px-5 pt-5">Test immersif</h2>
                                <p className="pt-2 px-5 relative z-[1]">2h à 3h</p>
                                <p className="pt-2 px-5 leading-5">Test adapté au poste, préparé par le manager. Ensuite, tu présentes ton rendu au manager.</p>
                            </div>
                            <div className="bg-[#e6eef0] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-28 z-[2] "></div>
                            <p className="flex justify-center italic font-bold mt-2">Day 14</p>
                        </div>
                        <div>
                            <div className="bg-[#e6eef0] relative w-64 h-64  rounded-[5px]">
                            <p className="absolute text-[5rem] leading-5 font-bold mr-5 mt-5 text-[#fff] z-[0]">4</p>
                                <h2 className="text-2xl font-bold ml-5 relative z-[1] px-5 pt-5">Entretien Final</h2>
                                <p className="pt-2 px-5 relative z-[1]">1h</p>
                                <p className="pt-2 px-5 leading-5">Rencontre avec un des fondateurs et Elodie notre Head of People.</p>
                            </div>
                            <div className="bg-[#e6eef0] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-28 z-[2] "></div>
                            <p className="flex justify-center italic font-bold mt-2">Day 18</p>
                        </div>
                        <div>
                            <div className="bg-[#e6eef0] relative w-64 h-64  rounded-[5px]">
                            <p className="absolute text-[5rem] leading-5 font-bold mr-5 mt-10 text-[#fff] z-[0]"></p>
                                <h2 className="text-2xl font-bold ml-5 relative z-[1] px-5 pt-5">Welcome Aboard!</h2>
                                <p className="pt-2 px-5">On ne te fait pas attendre !</p>
                                <p className="pt-2 px-5 leading-5">Ta proposition est déjà prête, il ne te reste plus qu’à l’accepter!</p>
                            </div>
                            <div className="bg-[#e6eef0] w-[1.2rem] h-[1.2rem] rounded-[100px] relative mt-5 ml-28 z-[2] "></div>
                            <p className="flex justify-center italic font-bold mt-2">Day 19</p>
                        </div>
                        
                    </div>
                </section>
                <section className="flex flex-col pt-52 max-w-[75rem] pb-20">
                    <div className="flex justify-center w-full">
                        <h2 className="flex flex-row  text-2xl text-center">
                            <Hello />
                            Découvre ce qui t'attend au quotidien chez Pictarine par ici !
                        </h2>
                    </div>
                    <Link className="flex justify-center" href="/life"><button className="bg-[#db3753] w-[13rem] h-[3.8rem] rounded-[15px] text-white  hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">La Picta Life</button></Link>
                </section>
                <section className="max-w-[75rem] flex flex-col pt-52 bg-[#fff]">
                    <h2 className="font-bold text-3xl">Et en attendant, rencontre l'équipe !</h2>
                    <div className="flex justify-center w-[75rem] mt-8">
                        
                        <Carousel
                            className="rounded-xl w-[800px]"
                            prevArrow={({ handlePrev }) => (
                                <IconButton
                                    variant="text"
                                    color="white"
                                    size="lg"
                                    onClick={handlePrev}
                                    className="!absolute top-2/4 left-4 -translate-y-2/4" 
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                                    </svg>
                                </IconButton>
                            )}
                            nextArrow={({ handleNext }) => (
                                <IconButton
                                    variant="text"
                                    color="white"
                                    size="lg"
                                    onClick={handleNext}
                                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </IconButton>
                            )} 
                        >
                                <iframe
                                    src="https://www.youtube.com/embed/AwrZoNgM6HU"
                                    frameBorder="0"
                                    allowFullScreen
                                    width={800}
                                    height={400}
                                />
                                <iframe
                                    src="https://www.youtube.com/embed/gjqMIQyKK7k"
                                    frameBorder="0"
                                    allowFullScreen
                                    width={800}
                                    height={400}
                                />
                                <iframe
                                    src="https://www.youtube.com/embed/Cv2H3nFk4As"
                                    frameBorder="0"
                                    allowFullScreen
                                    width={800}
                                    height={400}
                                />
                                <iframe
                                    src="https://www.youtube.com/embed/t5tAsV2YESo"
                                    frameBorder="0"
                                    allowFullScreen
                                    width={800}
                                    height={400}
                                />
                                <iframe
                                    src="https://www.youtube.com/embed/CSHOiUYHD9k"
                                    frameBorder="0"
                                    allowFullScreen
                                    width={800}
                                    height={400}
                                />
                                <iframe
                                    src="https://www.youtube.com/embed/yIv5VJeROl8"
                                    frameBorder="0"
                                    allowFullScreen
                                    width={800}
                                    height={400}
                                />
                            </Carousel>
                        </div>
                </section>
                <section className="max-w-[75rem] flex flex-col pt-52 bg-[#fff] pb-52">
                    <Title title="Pictarine," subtitle="ce qui fait la diff"/>
                    <div className="flex flex-row pt-12">
                        <div className="px-24 w-[50%] py-24 ">
                            <Image src="https://a.storyblok.com/f/189744/1900x2403/73d244ca21/celebration-allhands.jpg/m/1200x0" alt="brunch" width={500} height={2000}/>
                            <Image className="pt-12" src="https://a.storyblok.com/f/189744/1900x1473/dbc1445d30/logo-conf.jpg/m/1200x0" alt="brunch" width={500} height={2000} />
                        </div>
                        <div className="w-[50%]">
                            <div className="pt-10">
                                <h2 className="text-2xl font-bold">Suivi & Feedbacks</h2>
                                <p className="leading-5 pt-3">On encourage à faire du feedback sur tout. Tu as un suivi perso et pro chaque semaine par ton manager grâce à un 1-1.</p>
                            </div>
                            <div className="pt-16">
                                <h2 className="text-2xl font-bold">Exploration</h2>
                                <p className="leading-5 pt-3">On est en constante remise en question, toujours en quête de nouveaux marchés à conquérir. C’est l’occasion pour toi de continuellement t’amuser sur de nouveaux projets !</p>
                            </div>
                            <div className="pt-16">
                                <h2 className="text-2xl font-bold">Partage & Apprentissage</h2>
                                <p className="leading-5 pt-3">Conférences internes, Meetups, etc... On est toujours là pour apprendre les uns des autres en partageant nos savoirs-faire.</p>
                            </div>
                            <div className="pt-16">
                                <h2 className="text-2xl font-bold">Comme à la maison</h2>
                                <p className="leading-5 pt-3">Des snacks, des fruits et boissons sont à dispo. Attention, il n’y a pas que du healthy !</p>
                            </div>
                            <div className="pt-16">
                                <h2 className="text-2xl font-bold">Flexibilité</h2>
                                <p className="leading-5 pt-3">On est ouverts au remote plusieurs fois par semaine, en fonction de l'organisation de l'équipe et les horaires sont souples pour s’adapter à la vie personnelle de chacun.</p>
                            </div>
                            <div className="pt-16">
                                <h2 className="text-2xl font-bold">Package rémunération</h2>
                                <p className="leading-5 pt-3">Mutuelle prise en charge à 100%, RTT, intéressement, BSPCE, Prime Vacances, Carte Cadeaux de Noël... et bien plus !</p>
                            </div>
                            <div className="pt-16">
                                <h2 className="text-2xl font-bold">De l'animation</h2>
                                <p className="leading-5 pt-3">Meetups, séminaires, lancer de hache, concours de gâteaux, cours de sport, massages, soirées LAN, soirées cuisine...</p>
                            </div>
                            <Link href="/life" className="text-red-600 pt-3">
                                <p>Lire plus <span className="w-3 inline-block"><More /></span></p>
                            </Link>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}