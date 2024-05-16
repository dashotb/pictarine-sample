import { verti_bar } from "@/assets/images";
import { BlueLetter, Chat, Gear, Hello } from "@/assets/tools/svg";
import Navbar from "@/components/Navbar/Navbar";
import { Title } from "@/components/Title/Title";
import Image from "next/image";
import Link from "next/link";

export default function Partnership() {
    return(
        <>
            <Navbar theme="white" />
            <main className="flex min-h-screen flex-wrap flex-col align-center items-center w-full">
                <section className="grid grid-cols-2 gap-10 pt-24 max-w-[75rem]">
                    <div className="content-center">
                        <Title title="Être partenaire" subtitle="de Pictarine" />
                        <p className="leading-5 pt-2">Concevoir, construire et développer des applications uniques : ce n'est que la partie émergée de l'iceberg. Être partenaire de Pictarine, c'est exploiter de nouvelles opportunités de croissance. Que vous soyez distributeur, licensor, fabricant, marketeur... il n'y a pas de limite à ce que nous pouvons faire avec nos partenaires. </p>
                        <p className="pt-2">Rejoignez-nous et construisons ensemble votre prochain axe de croissance !</p>
                              <Link className="flex pt-2" href="/careers"><button className="bg-[#db3753] w-[14.3rem] h-[3.9rem] rounded-[15px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Contactez-nous !</button></Link>
                    </div> 
                    <div className="flex justify-end">
                        <Image src="https://a.storyblok.com/f/189744/2648x2252/641e690db8/partnership-at-cvs.jpg" width={595} height={800} alt="partnership-at-cvs"/>
                    </div>   
                </section>
                <section className="pt-24 max-w-[75rem]">
                    <h2 className="text-[2.5rem] font-bold">Nos Partenaires</h2>
                    <p className="pt-2">Quelques unes des plus grandes entreprises du classement Fortune 500 nous font confiance chaque jour.  Et vous ?</p>
                    <p className="pt-2 leading-5">Nos équipes fournissent les meilleures expériences pour vos clients en utilisant les technologies les plus récentes, un UX et des designs sur-mesure pour notre éternelle recherche de perfection.</p>
                    <div className="grid grid-cols-3 pt-12 gap-[1.25rem] gap-y-12">
                        <Image src="https://a.storyblok.com/f/189744/1329x272/240ad92cee/cvs.png/m/1200x0" alt="cvs" width={400} height={100}/>
                        <Image src="https://a.storyblok.com/f/189744/1330x272/c784ae5162/wg.png/m/1200x0" alt="wg" width={400} height={100} />
                        <Image src="https://a.storyblok.com/f/189744/1329x272/5247dbdda1/wb-1.png/m/1200x0" alt="wb" width={400} height={100}/>
                        <Image src="https://a.storyblok.com/f/189744/1329x272/4cac6ae5c6/district.png/m/1200x0" alt="district" width={400} height={100}/>
                        <Image src="https://a.storyblok.com/f/189744/1330x272/c27910f8e3/wm.png/m/1200x0" alt="wm" width={400} height={100}/>
                        <Image src="https://a.storyblok.com/f/189744/1329x272/4a48742519/ravensburger-1.png/m/1200x0" alt="ravensburger" width={400} height={100}/>
                        <Image src="https://a.storyblok.com/f/189744/1475x558/13b1b28276/strawberry.png/m/1200x0" alt="strawberry" width={400} height={100}/>
                        <Image src="https://a.storyblok.com/f/189744/1475x557/9421eac635/smurfs.png/m/1200x0" alt="smurfs" width={400} height={100}/>
                        <Image src="https://a.storyblok.com/f/189744/1475x558/fdb0abe7b9/jim-henson.png/m/1200x0" alt="jim-henson" width={400} height={100}/>
                        <Image src="https://a.storyblok.com/f/189744/1475x557/18270b4019/annirolls.png/m/1200x0" alt="anirollz" width={400} height={100}/>
                        <Image src="https://a.storyblok.com/f/189744/1475x558/29d8b1078e/tat-prod.png/m/1200x0" alt="tat" width={400} height={100}/>
                        <Image src="https://a.storyblok.com/f/189744/1475x558/b8cf6f07a8/zoonicorn.png/m/1200x0" alt="zoonicorn" width={400} height={100}/>
                    </div>
                </section>
                <section className="pt-24 max-w-[75rem]">
                    <h2 className="text-[2.5rem] font-bold">Quelques chiffres</h2>
                    <div className="grid grid-cols-4 gap-10 pt-16">

                        <div className="pt-12 content-center p-2">
                            <h2 className="text-2xl font-bold">Notre devise : Rien n'est impossible !</h2>
                            <p className="text-[0.95rem] leading-5 pt-4">La porte est fermée ? Essayons la fenêtre, puis le toit ! Chez Pictarine, on porte les idées jusqu'au bout !</p>
                        </div>

                        <div className="bg-[#e6eef0] p-[35px]  flex flex-col flex-wrap content-center items-center justify-center text-center ">
                            <div className="w-[50%]">
                                <Image src="https://a.storyblok.com/f/189744/493x405/894ece520f/photo-printed.png/m/1200x0" alt="key" width={100} height={80} />
                                <h2 className="text-2xl font-bold self-center pt-5">+ 400M</h2>
                                <p className="text-base leading-5 pt-2 ">Photos imprimées en 6 ans</p>
                            </div>
                        </div>
                        <div className="bg-[#e6eef0] p-[35px]  flex flex-col flex-wrap content-center items-center justify-center text-center ">
                            <div className="w-[50%]">
                                <Image src="https://a.storyblok.com/f/189744/362x360/ef351feb6b/stat-sales.png/m/1200x0" alt="key" width={100} height={80} />
                                <h2 className="text-2xl font-bold self-center pt-3">$4 M</h2>
                                <p className="text-base leading-5 pt-2">Ventes moyennes par mois</p>
                            </div>
                        </div>
                        <div className="bg-[#e6eef0] p-[35px]  flex flex-col flex-wrap content-center items-center justify-center text-center ">
                            <div className="w-[50%]">
                                <Image src="https://a.storyblok.com/f/189744/350x334/203008069f/star-rate.png/m/1200x0" alt="key" width={100} height={80} />
                                <h2 className="text-2xl font-bold self-center pt-5">4.9 / 5</h2>
                                <p className="text-base leading-5 pt-2">Note moyenne sur les stores</p>
                            </div>
                        </div>
                        <div className="bg-[#e6eef0] p-[35px]  flex flex-col flex-wrap content-center items-center justify-center text-center ">
                            <div className="w-[50%]">
                                <Image src="https://a.storyblok.com/f/189744/304x324/140679fa4f/download.png/m/1200x0" alt="key" width={100} height={80} />
                                <h2 className="text-2xl font-bold self-center pt-3">20 M</h2>
                                <p className="text-base leading-5 pt-3">Downloads</p>
                            </div>
                        </div>
                        <div className="bg-[#e6eef0] p-[35px]  flex flex-col flex-wrap content-center items-center justify-center text-center ">
                            <div className="w-[50%]">
                                <Image src="https://a.storyblok.com/f/189744/405x304/f0e164b52a/store.png/m/1200x0" alt="key" width={100} height={80} />
                                <h2 className="text-2xl font-bold self-center pt-3">23 000</h2>
                                <p className="text-base leading-5 pt-5">Magasins partenaires</p>
                            </div>
                        </div>
                        <div className="pt-12 col-start-3 col-end-5">
                            <p className="text-black text-[1.5rem] text-end pt-8 pl-28"> <span className="inline-block mr-1"><Hello /></span>Découvrez en plus sur notre produit !</p>
                            <Link className="flex justify-end" href="/products"><button className="bg-[#db3753] w-48 h-[3.8rem] rounded-[15px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Notre Produit</button></Link>
                        </div>
                    </div>
                </section>
                <section className="bg-[#f8f8f8] xl:p-[4rem] p-[2rem] w-full flex justify-center mt-32">
                    <div className="flex flex-col max-w-[75rem] pt-12 items-center pb-16">
                        <div className="text-center w-[80%]">
                            <h2 className="text-[2.5rem] font-bold">Pourquoi être notre partenaire ?</h2>
                            <p className="leading-5">Parce que nous avons des années d'expertise dans l'impression rapide et facile de photos pour des millions de clients dans les magasins de nos partenaires à travers les US. Chez Pictarine, nous sommes toujours avides d'idées, de défis et... de nouveaux partenariats !</p>
                        </div>
                        <div className="grid grid-cols-2 gap-10 pt-10">
                            <Image src="https://a.storyblok.com/f/189744/2544x1740/90f796e7c3/teampartnership.png/m/1200x0" alt="team-partnership" width={800} height={800}/>
                            <div className="bg-[#fff] h-fit p-8 self-center">
                                <h2 className="text-3xl font-bold">Le mot de l'équipe</h2>
                                <div className="flex flex-row">
                                    <Image className="pt-5 h-24 w-1" src={verti_bar} alt="verti-bar" />
                                    <div className="pl-5 pt-3">
                                        <p className="pt-2 italic text-sm">Tout est possible ! Partagez nous vos idées de partenariat les plus folles : qu'il s'agisse de courtes collaborations ou de projets à long terme, nous sommes à l'écoute. N'hésitez pas à nous contacter et à nous faire part de vos idées !</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-10 pt-16">
                            <div>
                                <Image src="https://a.storyblok.com/f/189744/210x208/cad4b4dcd4/stat-business.png/m/1200x0" alt="stat" width={50} height={50}/>
                                <h2 className="text-2xl font-bold pt-3">Scalez votre business</h2>
                                <p className="leading-5 pt-3">Élargissez votre clientèle, augmentez votre chiffre d'affaires et maximisez votre visibilité</p>
                            </div>
                            <div>
                                <Image src="https://a.storyblok.com/f/189744/193x241/6b97592bb9/no-limit-moon.png/m/1200x0" alt="moon" width={50} height={50} />
                                <h2 className="text-2xl font-bold ">N'ayez pas de limites</h2>
                                <p className="leading-5 pt-2">Transformez des idées audacieuses en succès rentables</p>
                            </div>
                            <div>
                                <Image src="https://a.storyblok.com/f/189744/205x157/4df18b6095/talk-bubble-little.png/m/1200x0" alt="chat" width={50} height={50} />
                                <h2 className="text-2xl font-bold pt-2">Développons ensemble</h2>
                                <p className="leading-5 pt-2">Chez Pictarine, nous créons des relations fortes avec nos partenaires, fondées sur la confiance et des valeurs communes</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col max-w-[75rem]">
                    <h2 className="text-[2.5rem] font-bold text-center pt-12">Contactez-nous</h2>
                    <div className="flex justify-center">
                        <div className="bg-[#6d7c88] w-[40%] h-[0.15rem] absolute mt-14 z-[-1]"></div>
                        <div className="grid grid-cols-3 gap-32 pt-8 w-[80%]">
                            <div className="bg-[#fff] flex flex-col items-center">
                                <div className="w-14">
                                    <BlueLetter/>
                                </div>
                                <p className="text-center pt-8 leading-5">Remplissez le formulaire ci-dessous</p>
                            </div>
                            <div className="bg-[#fff] flex flex-col items-center">
                                <div className="w-14">
                                    <Gear />
                                </div>
                                <p className="text-center pt-8 leading-5">On étudie chaque demande avec attention</p>
                            </div>
                            <div className="bg-[#fff] flex flex-col items-center">
                                <div className="w-14">
                                    <Chat />
                                </div>
                                <p className="text-center pt-8 leading-5">On vous contacte pour les prochaines étapes !</p>
                            </div>
                        </div>
                    </div>
                    <form className="w-[60%] flex flex-col self-center pt-12" action="">
                        <label className="text-sm pt-4" htmlFor="name">Votre nom<span className="text-red-600">*</span></label>
                        <div className="pt-2 rounded-[20px]">
                            <input required type="text" className=" rounded-[15px] border border-[#cbd6e2] border-solid w-full bg-[#f5f8fa] py-2 px-3"/>
                        </div>
                        <label className="text-sm pt-4" htmlFor="name">Votre prénom<span className="text-red-600">*</span></label>
                        <div className="pt-2 rounded-[20px]">
                            <input required type="text" className=" rounded-[15px] border border-[#cbd6e2] border-solid w-full bg-[#f5f8fa] py-2 px-3" />
                        </div>
                        <label className="text-sm pt-4" htmlFor="email">Votre email<span className="text-red-600">*</span></label>
                        <div className="pt-2 rounded-[20px]">
                            <input required type="text" className=" rounded-[15px] border border-[#cbd6e2] border-solid w-full bg-[#f5f8fa] py-2 px-3" />
                        </div>
                        <label className="text-sm pt-4" htmlFor="name">Nom de votre entreprise<span className="text-red-600">*</span></label>
                        <div className="pt-2 rounded-[20px]">
                            <input required type="text" className=" rounded-[15px] border border-[#cbd6e2] border-solid w-full bg-[#f5f8fa] py-2 px-3" />
                        </div>
                        <label className="text-sm pt-4" htmlFor="phone">Votre téléphone<span className="text-red-600">*</span></label>
                        <div className="pt-2 rounded-[20px]">
                            <input required type="text" className=" rounded-[15px] border border-[#cbd6e2] border-solid w-full bg-[#f5f8fa] py-2 px-3" />
                        </div>
                        <label className="text-sm pt-4" htmlFor="name">Type de partenariat</label>
                        <div className="pt-2 rounded-[20px]">
                            <select className=" rounded-[15px] border border-[#cbd6e2] border-solid w-full bg-[#f5f8fa] py-2 px-3" name="selectionner" id="">
                                <option value="none">Selectionner</option>
                                <option value="Retailer">Retailer</option>
                                <option value="Print Lab">Print Lab</option>
                                <option value="Affiliate">Affiliate</option>
                                <option value="Designer">Designer</option>
                                <option value="Licensor">Licensor</option>
                                <option value="Gaming Merchandising">Gaming Merchandising</option>
                                <option value="New Tech">New Tech</option>
                                <option value="Package Insert Agencies">Package Insert Agencies</option>
                                <option value="Package Insert Program">Package Insert Program</option>
                            </select>
                        </div>
                        <label className="text-sm pt-4" htmlFor="name">Dans quel domaine travaillez vous?</label>
                        <div className="pt-2 rounded-[20px]">
                            <textarea id="what-business" className=" rounded-[15px] border border-[#cbd6e2] border-solid w-full bg-[#f5f8fa] py-2 px-3" />
                        </div>
                        <label className="text-sm pt-4" htmlFor="name">D'où venez vous?</label>
                        <div className="pt-2 rounded-[20px]">
                            <input type="text" className=" rounded-[15px] border border-[#cbd6e2] border-solid w-full bg-[#f5f8fa] py-2 px-3" />
                        </div>
                        <label className="text-sm pt-4" htmlFor="name">Partagez votre idée</label>
                        <div className="pt-2 pb-8 rounded-[20px]">
                            <textarea id="what-business" className=" rounded-[15px] border border-[#cbd6e2] border-solid w-full bg-[#f5f8fa] py-2 px-3" />
                        </div>
                    <button className="self-start bg-[#ff7a59] text-white text-sm font-bold p-2 px-5 rounded-[15px] hover:bg-[#ff7a59c7]">Valider</button>
                    </form>
                </section>
                
            </main>
        </>
    )
}

                