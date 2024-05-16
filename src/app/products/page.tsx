import Navbar from "@/components/Navbar/Navbar"
import Image from "next/image"
import { gif_iphone, verti_bar, puzzle, poster, wb } from "@/assets/images"
import { Hello, Flag, Phone, Bag } from "@/assets/tools/svg"
import Link from "next/link"
import Footer from "@/components/Footer/Footer"

export default function Products() {
    return(
        <>
            <Navbar theme="white"/>
            <main className="flex flex-col w-full items-center">
                <section className="lg:pt-[6.5rem] flex flex-col px-5 lg:px-0  lg:grid lg:grid-cols-12 lg:gap-7 lg:max-w-[75rem]">
                    <div className="col-start-1 col-end-7 pt-28">
                        <h2 className="text-[3.5rem] flex flex-col">
                            Notre produit phare
                            <span className="absolute pt-12 pl-6 text-red-600 text-[4.2rem] italic font-extrabold ">the Picta App</span>
                        </h2>
                        <p className="leading-5 pt-20">Notre main product ? Une application qui permet de modifier et d'imprimer des photos en 3 clics, partout aux Etats-Unis. Ensuite, il suffit d'aller les récupérer en magasin en moins d’une heure. It’s that easy!</p>
                        <div className="flex flex-row">
                            <Image className="pt-5" src={verti_bar} alt="verti-bar" />
                            <div className="pl-5 pt-5">
                                <h2 className="font-bold italic text-sm">Best printing app!</h2>
                                <p className="pt-2 italic text-sm w-96">Super quick, no hassle. No sign in required. I’ve use this app for a few years now and it’s always been great.</p>
                                <p className="pt-2 text-sm">Stephen J.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center pt-5 lg:pt-0 lg:col-start-7 lg:col-end-12">
                        <Image className="pl-8 flex w-[55%] align-center lg:w-full" src={gif_iphone} alt="gif-iphone" />
                    </div>
                </section>
                <section className="pt-[11rem] flex flex-col px-5 lg:px-0 lg:grid lg:grid-cols-4 gap-9 lg:max-w-[75rem]">
                    <div>
                        <h2 className="font-bold text-3xl">Mais qu'est ce qu'on fait chez Pictarine en fait ?</h2>
                        <p className="pt-4  leading-5">Et bien c'est simple, on développe une application (iOS, Android et Web) pour imprimer des photos.<br />Oui mais... :</p>
                    </div>
                    <div className="bg-[#e6eef0] p-4 pt-6 pr-5">
                        <h2 className="font-bold text-2xl"><span className="w-7 pr-1 inline-block"><Flag /></span>We are born in the USA!</h2>
                        <p className="pt-4 leading-5 lg:pr-8">So, notre app est seulement disponible aux Etats-Unis (pour l'instant...). Mais la team, elle, est bien installée à Toulouse.</p>
                    </div>
                    <div className="bg-[#e6eef0] p-4 pt-6">
                        <h2 className="font-bold text-2xl"><span className="w-5 pr-1 inline-block"><Phone /></span>Une app par partenaire</h2>
                        <p className="pt-4 leading-5 ">Une pour Walgreens, une pour CVS et une pour Walmart. Et chacune disponible sur Android, iOS et Web. Pour une expérience sur mesure.</p>
                    </div>
                    <div className="bg-[#e6eef0] p-4 pt-6">
                        <h2 className="font-bold text-2xl"><span className="w-6 pr-1 inline-block"><Bag /></span>Click & Collect</h2>
                        <p className="pt-4 leading-5 ">Vos photos sont imprimées en 1 heure et il n'y a plus qu'à les récupérer dans votre magasin Walmart, Walgreens ou CVS le plus proche.</p>
                    </div>
                </section>
                <section className="flex flex-col pt-16 max-w-[75rem] pb-20">
                    <div className="flex justify-center w-full">
                        <h2 className="flex flex-row  text-3xl text-center">
                            <Hello />
                            Viens voir à quoi ça ressemble !
                        </h2>
                    </div>
                    <Link className="flex justify-center" href="https://pictaphoto.com/walgreens"><button className="bg-[#db3753] w-[13rem] h-[3.8rem] rounded-[15px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Notre site web</button></Link>
                </section>
                <section className="bg-[#171717] xl:p-[4rem] p-[2rem] w-full flex justify-center">
                    <div className="flex flex-col max-w-[75rem]">
                        <h2 className="text-[3.5rem] flex flex-col text-white">
                            Recherche & Développement
                            <span className="absolute pt-12 pl-6 text-red-600 text-[4.2rem] italic font-extrabold ">nos explorations</span>
                        </h2>
                        <div className="lg:grid lg:grid-cols-2 pt-40 gap-10">
                            <div>
                                <Image src={puzzle} alt="puzzle" />
                                <h2 className="text-white text-3xl font-bold pt-8">Snack Puzzle</h2>
                                <p className="text-white leading-5 pt-4">Un paquet de chips ? Un sachet de thé ? Des pastilles pour lave vaisselle ? Non... Un puzzle ! Ceci n'est pas un Snack. Fini les interminables puzzles de 1000 pièces ! Un puzzle fun et original pour passer un moment de détente !</p>
                                <Image className="pt-12" src={poster} alt="poster-collective" />
                                <h2 className="text-white text-3xl font-bold pt-8">Poster Collective</h2>
                                <p className="text-white leading-5 pt-4">Un “trou dans la raquette”, une nouvelle opportunité de marché ? On a foncé ! Voici Poster Collective, réalisé en 3 jours seulement.</p>
                            </div>
                            <div>
                                <h2 className="text-white text-3xl text-end pt-36 pb-10">Parce qu'on ne cesse d'innover !</h2>
                                <Image src={wb} alt="wb" />
                                <h2 className="text-white text-3xl font-bold pt-8">Warner Bros.™</h2>
                                <p className="text-white leading-5 pt-4">Grâce à notre partenaire Warner Bros., on a pu lancer l'impression de produits personnalisés dans notre application (posters, canvas, cartes de vœux, d'anniversaire...). Alors plutôt team Pôle Express, Scooby-Doo ou Harry Potter?</p>
                                <p className="text-white text-3xl text-end pt-12"> <span className="inline-block mr-1"><Hello /></span>On a aussi créé pleins d’outils pour faciliter la vie de nos devs !</p>
                                <Link className="flex justify-end" href="/tech"><button className="bg-[#db3753] w-[13rem] h-[3.8rem] rounded-[15px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Par ici les technos</button></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer theme="black"/>
        </>
    )
}