"use client"
import Navbar from "@/components/Navbar/Navbar";
import "@/app/globals.css"
import Image from "next/image";
import {tech, cto} from "@/assets/images"
import {GBQ, GCloud, GDS, Jupyter, bitriseio, docker, kotlin, nextjs, py, react, swagger, swift, swiftui, ts} from "@/assets/tools/icones"
import { BlueEyes, BlueGlass, BlueHand, BlueStack, Hello } from "@/assets/tools/svg";
import Link from "next/link";
import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Footer from "@/components/Footer/Footer";

export default function Tech() {
    return(
        <>
            <Navbar theme="black"/>
            <main className="bg-[#1c1c1c] flex min-h-screen flex-col align-center items-center w-full text-white overflow-hidden">
                <section className="flex flex-col px-5 lg:px-0 lg:grid lg:grid-cols-2 lg:gap-7 pt-12 lg:pt-20 pb-20 lg:pb-32 lg:max-w-[75rem] w-full">
                    <div className="flex flex-col self-center pb-5 lg:pb-0">
                        <h2 className="text-[1.5rem] lg:text-[3.5rem] flex flex-col pb-12 lg:pb-20">
                            Bonjour la
                            <span className="multiColor absolute pt-5 lg:pt-12 pl-6 text-[2.3rem] lg:text-[4.2rem] italic font-extrabold">Tech team</span>
                        </h2>
                        <p className="leading-5">Chez Pictarine, la Tech n'est pas seulement le coeur de notre produit, c'est l'essence même de notre ADN. Une seule chose est obligatoire dans la Tech Team : proposer de nouvelles choses ! Les idées peuvent (et doivent !) venir de tout le monde, que ce soit de nouvelles technos ou des idées produit/business.</p>
                    </div>
                    <div>
                        <Image src={tech} alt="tech-team"/>
                    </div>
                </section>
                <section className="flex flex-col px-5 lg:px-0 lg:grid lg:grid-cols-12 lg:gap-8 lg:max-w-[75rem]">
                    <div className="col-start-1 col-end-5">
                        <Image src={cto} alt="CTO"/>
                    </div>
                    <div className="col-start-5 col-end-13 self-center ml-2 pt-5 lg:pt-0">
                        <h2 className=" font-bold text-[2.6rem]">Notre vision tech</h2>
                        <p className=" pt-4"><span className="w-5 inline-block mr-3"><BlueEyes /></span>Une veille technique régulière</p>
                        <p className=" pt-4"><span className="w-5 inline-block mr-3"><BlueHand/></span>Du code de qualité et maintenable</p>
                        <p className=" pt-4"><span className="w-4 inline-block mr-3"><BlueStack/></span>Une stack simple et moderne</p>
                        <p className=" pt-4"><span className="w-3 inline-block mr-3"><BlueGlass/></span>Notre devise : Build and Learn !</p>
                        <p className="text-[#6aa46f] pt-10">/* --------------- Un exemple --------------- */</p>
                        <p className=" leading-5">Notre plus grande fierté ? Le projet Calamar ! <span className="text-[#6aa46f]"> //et oui, c'était tentaculaire</span><br />
                            Il s'agit de la refacto from scratch de toutes nos apps. Finie en 2022, on a dit adieu aux vieilles technos et aux problèmes de dépendances !</p>
                    </div>
                </section>
                <section className="flex flex-col px-5 lg:px-0 lg:grid lg:grid-cols-3 lg:gap-8 pt-12 lg:pt-24 lg:max-w-[75rem]">
                    <div>
                        <p className="absolute text-[6rem] font-bold pt-8 pl-2 text-[#6d7c88] ">11</p>
                        <div className="pl-[3rem] pt-[8rem]">
                            <p className=" text-[1.37rem] font-extrabold relative z-[2]">Développeurs</p>
                            <p className=" leading-5">Une team qui se challenge et qui apprend les uns des autres au quotidien. Code review et pair programming au menu !</p>
                        </div>
                    </div>
                    <div>
                        <p className="absolute text-[6rem] font-bold pt-8 pl-2 text-[#6d7c88] ">99.9</p>
                        <div className="pl-[3rem] pt-[8rem]">
                            <p className=" text-[1.37rem] font-extrabold relative z-[2]">Crash Free</p>
                            <p className=" leading-5">Sur une moyenne de 2 millions d'utilisateurs par an.</p>
                        </div>
                    </div>
                    <div>
                        <p className="absolute text-[6rem] font-bold pt-8 pl-2 text-[#6d7c88] ">10</p>
                        <div className="pl-[3rem] pt-[8rem]">
                            <p className=" text-[1.37rem] font-extrabold relative z-[2]">applications</p>
                            <p className=" leading-5">Une pour chaque enseigne partenaire, sur tous les devices. Sans oublier notre app interne et nos apps R&D.</p>
                        </div>
                    </div>
                </section>
                <section className="pt-20 lg:pt-40 px-5 lg:px-0 lg:max-w-[75rem] w-full">
                    <h2 className="text-4xl font-bold w-full">Notre Stack</h2>
                    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-12 lg:gap-24 pt-10 lg:pt-16 ">
                        <div className="">
                            <div className="border-b">
                                <h2 className="text-4xl">
                                  iOS  
                                </h2>
                                <div className="flex flex-row gap-3">
                                    <div className="pt-2">
                                        <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">Modern Concurrency</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">Swift Package Manager</p>
                                    </div>
                                </div>
                                <div className="pt-2">
                                    <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">The Composable Architecture</p>
                                </div>
                                <div className="pt-10 pb-5 gap-3 flex flex-row">
                                    <Image className="w-9" src={swift} alt="swift"/>
                                    <Image className="w-9" src={swiftui} alt="swiftui" />  
                                </div>
                            </div>
                            <div className="pt-8 border-b">
                                <h2 className="text-4xl">
                                    Frontend Web
                                </h2>
                                <div className="flex flex-row gap-3">
                                    <div className="pt-2">
                                        <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">React Server Components</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">UI/UX Best practicies</p>
                                    </div>
                                </div>
                                <div className="pt-10 pb-5 gap-3 flex flex-row">
                                    <Image className="w-9" src={nextjs} alt="swift" />
                                    <Image className="w-9" src={react} alt="swiftui" />
                                    <Image className="w-9" src={ts} alt="swiftui" />
                                </div>
                            </div>
                            <div className="pt-8 border-b">
                                <h2 className="text-4xl">
                                    DevOps
                                </h2>
                                <div className="flex flex-row gap-3">
                                    <div className="pt-2">
                                        <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">Github action</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">Fastlane</p>
                                    </div>
                                </div>
                                <div className="pt-10 pb-5 gap-3 flex flex-row">
                                    <Image className="w-9" src={GCloud} alt="swift" />
                                    <Image className="w-9" src={bitriseio} alt="swiftui" />
                                    <Image className="w-9 h-6 self-center" src={docker} alt="swiftui" />
                                    <Image className="w-9" src={swagger} alt="swiftui" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="border-b">
                                <h2 className="text-4xl">
                                    Android
                                </h2>
                                <div className="flex flex-row gap-3">
                                    <div className="pt-2">
                                        <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">Android JetPack</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">Coroutines</p>
                                    </div>
                                    <div className="pt-2">
                                        <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">MVVM</p>
                                    </div>
                                </div>
                                <div className="pt-[4.2rem] pb-5 gap-3 flex flex-row">
                                    <Image className="w-9" src={kotlin} alt="swift" />
                                </div>
                            </div>
                            <div className="pt-8 border-b">
                                <h2 className="text-4xl">
                                    Backend
                                </h2>
                                <div className="flex flex-row gap-3">
                                    <div className="pt-2">
                                        <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">Springboot</p>
                                    </div>
                                </div>
                                <div className="pt-10 pb-5 gap-3 flex flex-row">
                                    <Image className="w-9" src={kotlin} alt="swift" />
                                    <Image className="w-9" src={py} alt="swiftui" />
                                </div>
                            </div>
                            <div className="pt-8 border-b">
                                <h2 className="text-4xl">
                                    Data
                                </h2>
                                <div className="flex flex-row gap-3">
                                    <div className="pt-2">
                                        <p className="bg-[#2b2b2b] text-xs w-fit px-2 py-1 rounded-[5px] courrier">Machine Learning</p>
                                    </div>
                                </div>
                                <div className="pt-10 pb-5 gap-3 flex flex-row">
                                    <Image className="w-9" src={py} alt="swift" />
                                    <Image className="w-9" src={GBQ} alt="swiftui" />
                                    <Image className="w-9" src={GDS} alt="swiftui" />
                                    <Image className="w-9" src={Jupyter} alt="swiftui" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-5 lg:px-0 lg:grid lg:grid-cols-2 lg:gap-10 pt-24 lg:pt-56 lg:max-w-[75rem]">
                    <div>
                        <h2 className="text-4xl font-bold pb-10">La vie de nos devs</h2>
                        <Image src="https://a.storyblok.com/f/189744/2384x1660/c8367e6f2b/resto-devs.jpg/m/1200x0" width={800} height={500} alt="puzzle" />
                        <h2 className="text-white text-3xl font-bold pt-8">Team buildings</h2>
                        <p className="text-white leading-5 pt-4">Afterworks, Quiz Room, Karting, LAN, Escape game... La créativité ne manque pas quand il s'agit de trouver une activité pour s'amuser avec la team !</p>
                        <Image className="pt-12" src="https://a.storyblok.com/f/189744/2384x1660/982d731103/prez-kevin.jpg/m/1200x0" width={800} height={500} alt="poster-collective" />
                        <h2 className="text-white text-3xl font-bold pt-8">Des meetups à domicile</h2>
                        <p className="text-white leading-5 pt-4">Que ce soit pour parler data, user research ou accueillir un meetup Swift Toulouse, les portes de notre nouvel amphi sont toujours ouvertes ! <br /> Ne rate pas le prochain</p>
                    </div>
                    <div className="pt-0 lg:pt-56">
                        <h2 className="text-white text-2xl pt-16 lg:pt-36 pb-10 courrier font-bold">Harder, better, faster, coder.</h2>
                        <Image className="w-full" src="https://a.storyblok.com/f/189744/2384x1660/73f539ac68/wwdc-picta.jpg/m/1200x0" width={800} height={500} alt="wwdc" />
                        <h2 className="text-white text-3xl font-bold pt-8">La team iOS à la WWDC</h2>
                        <p className="text-white leading-5 pt-4">Toulouse-Paris-San Fransisco. 11h30 de vol. 9h de décalage horaire. Mais ça valait le coup ! Que ce soit la WWDC, la DroidCon ou la Devoxx, on aime apprendre et partager avec nos pairs du monde entier.</p>
                        <p className="text-white text-3xl text-end pt-16"> <span className="inline-block mr-1"><Hello /></span>Aussi, parfois on s’amuse. Découvre la Picta Life, et plein de belles photos</p>
                        <Link className="flex justify-end" href="/life"><button className="bg-[#db3753] w-40 lg:w-[13rem] h-10 lg:h-[3.8rem] rounded-[15px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">La Picta quoi ?</button></Link>
                    </div>
                </section>
                <section className="pt-20 lg:pt-56 pb-12 px-5 lg:px-0 w-screen lg:max-w-[75rem]">
                    <h2 className="text-4xl font-bold pb-10">En attendant, rencontre l’équipe !</h2>
                    <div className="flex justify-center mt-8">

                        <Carousel
                            className="rounded-xl w-full h-[50%] lg:w-[800px] items-center"
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
                                            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                        />
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
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                        />
                                    </svg>
                                </IconButton>
                            )}
                        >
                            <iframe
                                src="https://www.youtube.com/embed/CSHOiUYHD9k"
                                frameBorder="0"
                                allowFullScreen
                                width={800}
                                height={400}
                            />
                            <iframe
                                src="https://www.youtube.com/embed/HMWGHLgFuCg"
                                frameBorder="0"
                                allowFullScreen
                                width={800}
                                height={400}
                            />
                            <iframe
                                src="https://www.youtube.com/embed/G-OgKQq8Jj0"
                                frameBorder="0"
                                allowFullScreen
                                width={800}
                                height={400}
                            />
                        </Carousel>
                    </div>
                </section>
                <section className="px-5 lg:px-0 lg:max-w-[75rem]">
                    <h2 className="text-3xl font-bold pb-10">We are problem solvers!</h2>
                    <div className="grid grid-cols-2 lg:grid lg:grid-cols-4 gap-2 lg:gap-5">
                        
                        <div className="pt-12 col-start-1 col-end-3">
                            <h2 className="text-xl font-bold">Notre lab</h2>
                            <p className="text-base leading-5 pt-4">Chez Pictarine on adore le challenge de créer nos propres outils qui répondent exactement à nos besoins. L’avantage de créer plutôt qu’utiliser une solution existante ? Le challenge et la praticité ! Overview de nos outils handmade et parfaitement tailored pour nos besoins.</p>
                        </div>

                        <div className="bg-[#2b2b2b] p-5 lg:h-[19rem] rounded-[5px]">
                            <div className="flex flex-row">
                                <div className="w-10 lg:w-full">
                                    <Image src="https://a.storyblok.com/f/189744/320x324/be5bffd1df/div-5.png" alt="key" width={80} height={80}/>
                                </div>
                                <h2 className="text-xl font-bold self-center ml-3 lg:ml-5">Admin</h2>
                            </div>
                            <p className="text-xs lg:text-base leading-5 pt-5">Tous les outils de l’admin nous ont permis de créer une machine de guerre marketing pour cibler les meilleurs utilisateurs possibles !</p>
                        </div>
                        <div className="bg-[#2b2b2b] p-5 lg:h-[19rem] rounded-[5px]">
                            <div className="flex flex-row">
                                <div className="w-11 lg:w-full">
                                    <Image src="https://a.storyblok.com/f/189744/320x324/f4ce2d8063/div-3.png" alt="key" width={80} height={80} />
                                </div>
                                <h2 className="text-xl font-bold self-center ml-3 lg:ml-5">Snip</h2>
                            </div>
                            <p className="text-xs lg:text-base leading-5 pt-5">Grâce à App Ninja, l’équipe de Pictarine peut lire et répondre à chaque avis sur nos applications Android et iOS sans se connecter à l’App Store Connect ou à la Google Play Console depuis l’application Slack.</p>
                        </div>
                        <div className="bg-[#2b2b2b] p-5 lg:h-[19rem] rounded-[5px]">
                            <div className="flex flex-row">
                                <div className="w-11 lg:w-full">
                                    <Image src="https://a.storyblok.com/f/189744/320x324/60fd86abfa/div-4.png" alt="key" width={80} height={80} />
                                </div>
                                <h2 className="text-xl font-bold self-center ml-3 lg:ml-5">Snip</h2>
                            </div>
                            <p className="text-xs lg:text-base leading-5 pt-5">Snip est une application de gestion d’extraits de code légère pour macOS. Entièrement écrit en SwiftUI, Snip prend en charge plus de 100 langages de programmation, la synchronisation GitHub gist et l’aperçu HTML / Markdown.</p>
                        </div>
                        <div className="bg-[#2b2b2b] p-5 lg:h-[19rem] rounded-[5px]">
                            <div className="flex flex-row">
                                <div className="w-11 lg:w-full">
                                    <Image src="https://a.storyblok.com/f/189744/320x324/1db751194d/image.png" alt="key" width={80} height={80} />
                                </div>
                                <h2 className="text-xl font-bold self-center ml-3 lg:ml-5">Trognon</h2>
                            </div>
                            <p className="text-xs lg:text-base leading-5 pt-5">L’app Slack Trognon permet en temps réel d’avoir un update Slack du statut d’une app. Elle est basée sur l’API App Store Connect.</p>
                        </div>
                        <div className="bg-[#2b2b2b] p-5 lg:h-[19rem] rounded-[5px]">
                            <div className="flex flex-row">
                                <div className="w-11 lg:w-full">
                                    <Image src="https://a.storyblok.com/f/189744/320x324/3b99df5b3b/div.png" alt="key" width={80} height={80} />
                                </div>
                                <h2 className="text-xl font-bold self-center ml-3 lg:ml-5">BigQuery</h2>
                            </div>
                            <p className="text-xs lg:text-base leading-5 pt-5">Notre extension BigQuery permet d’afficher le coût d’une query avant de la lancer. Ce projet est public et open source.</p>
                        </div>
                        <div className="bg-[#2b2b2b] p-5 lg:h-[19rem] rounded-[5px]">
                            <div className="flex flex-row">
                                <div className="w-11 lg:w-full">
                                    <Image src="https://a.storyblok.com/f/189744/320x324/beea1e23d6/div-2.png" alt="key" width={80} height={80} />
                                </div>
                                <h2 className="text-xl font-bold self-center ml-3 lg:ml-5">Release Note Now</h2>
                            </div>
                            <p className="text-xs lg:text-base leading-5 pt-5">Automatic Release Note Generator for GitHub projects. Cet outil a été extrait pour être publié comme un projet Open Source sur Github.</p>
                        </div>
                        <div className="bg-[#2b2b2b] p-5 lg:h-[19rem] rounded-[5px]">
                            <div className="flex flex-row">
                                <div className="w-11 lg:w-full">
                                    <Image src="https://a.storyblok.com/f/189744/320x324/44b2092250/div-1.png" alt="key" width={80} height={80} />
                                </div>
                                <h2 className="text-xl font-bold self-center ml-3 lg:ml-5">Today’s Widget</h2>
                            </div>
                            <p className="text-xs lg:text-base leading-5 pt-5">Today’s Widget est un widget météo simple et rapide pour l’écran d’accueil de l’iPhone. Il fonctionne sur tous les appareils iOS/iPadOS fonctionnant actuellement sous iOS 14+.</p>
                        </div>
                        <div className="bg-[#2b2b2b] p-5 lg:h-[19rem] rounded-[5px] flex">
                            <p className="text-xl font-bold self-center">
                               Et toi, quelle app rêves-tu de développer ? Le Lab Picta t’est ouvert !
                            </p>
                        </div>
                            
                        <div className="pt-12 col-start-1 col-end-3  lg:col-start-3 lg:col-end-5">
                            <p className="text-white text-[1.7rem] w-full text-end pt-8 lg:pl-28"> <span className="inline-block mr-1"><Hello /></span>Découvre en détail notre App et nos explos Produits</p>
                            <Link className="flex justify-end" href="/life"><button className="bg-[#db3753] w-32 lg:h-[3.8rem] h-10 rounded-[10px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Nos Produits</button></Link>
                        </div>
                    
                        
                    </div>
                </section>
                <section className="px-5 lg:px-0 pb-10 pt-20">
                    <h2 className="text-center text-[1.5rem] lg:text-[3.5rem] leading-[1.7rem] lg:leading-[3.5rem] flex flex-col w-full">
                        Ça donne envie?
                        <span className=" text-center text-[#db3753] text-[2.4rem] lg:text-[4.35rem] font-bold italic">Rejoins-nous!</span>
                    </h2>
                    <Link className="flex justify-center pt-3 lg:pt-8" href="/careers"><button className="bg-[#db3753] w-48 lg:w-[16.5rem] h-10 lg:h-[3.8rem] rounded-[15px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Nos postes ouverts</button></Link>
                </section>
            </main>
            <Footer theme="black"/>
        </>
    )
}