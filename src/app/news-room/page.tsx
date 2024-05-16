import { maddyness, maddyness_logo, echos, echos_logo, apple_vision, walgreens_logo } from "@/assets/images";
import { Bell, Hello } from "@/assets/tools/svg";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function News() {
    return(
        <>
            <Navbar theme="black"/>
            <main className="bg-[#1c1c1c] flex min-h-screen flex-wrap flex-col align-center items-center w-full overflow-hidden">
                <section className="flex flex-col max-w-[75rem] text-white">
                    <div className="flex flex-col self-start ">
                        <h2 className="text-[3.5rem]  flex flex-col pb-20">
                            News Room
                            <span className="multiColor absolute pt-12 pl-6 text-[4.2rem] italic font-extrabold">Press Releases</span>
                        </h2>
                    </div>
                    <Image className="self-center pt-56" src="https://a.storyblok.com/f/189744/4802x775/bf71235f6e/pictarinexwalgreens.png/m/1200x0" width={520} height={800} alt="wlg-picta" />
                    <p className="leading-5 text-xs font-bold pt-5">February 2, 2024</p>
                    <h2 className="text-[2rem] font-bold leading-10">Pictarine Partners with Walgreens to Revolutionize Photo Printing with Launch of Picta Studio on Apple Vision Pro.</h2>
                    <Image className="pt-10" src="https://a.storyblok.com/f/189744/5220x3551/b032cee9ad/apple-vision-pro-picta-studio.png/m/1200x0" alt="apple-vision-pro" width={2000} height={1000}/>
                    <p className="leading-5 font-bold pt-8">Customers can artistically curate and visualize photos in an immersive three-dimensional space, and transform digital memories into personalized wall art and canvases using Apple Vision Pro</p>
                </section>
                <section className="flex flex-col max-w-[75rem] text-white pt-12 pb-24">
                    <h2 className="text-2xl font-bold">Bringing a New Dimension to Photo Printing Experiences</h2>
                    <p className="leading-5 pt-5">The Picta Studio app, designed specifically for Apple Vision Pro and visionOS, allows users to artistically curate and visualize their photos in an immersive three-dimensional space. This app takes advantage of the unique capabilities of spatial computing to enable customers to effortlessly transform their digital memories into personalized wall art, including metal, wood, and bamboo panels, as well as canvases.</p>
                    <div className="pt-5 grid grid-cols-12 gap-10">
                        <div className="col-start-1 col-end-9">
                            <Image src="https://a.storyblok.com/f/189744/5220x2936/6fdcbb2c4d/apple-vision-pro-picta-studio-1.jpg/m/1200x0" alt="vision-pro-studio" width={2000} height={2000}/>
                        </div>
                        <div className="col-start-9 col-end-13">
                            <p className="leading-5">What sets Picta Studio apart is the seamless integration of Apple’s advanced technology and visionOS with Walgreens' swift 1-hour printing service, allowing customers a whole new way to visualize their photo creation experience and then make it physical with Same Day pickup from any of Walgreens’ store locations.</p>
                        </div>
                    </div>
                    <p className="pt-10 leading-5">The Pictarine development team has skillfully harnessed the latest Apple technology to develop a user-friendly, innovative application. This partnership between Walgreens and Pictarine represents a significant advancement in spatial computing apps and photo printing technology, set to redefine the industry standard.</p>
                    <p className="pt-5 leading-5"><span className="font-bold">“We are delighted to take our longstanding photo-printing partnership with Walgreens to a whole new level with the Picta Studio app for Apple Vision Pro,"</span>says François Goldgewicht, CTO at Pictarine. <span className="font-bold">"We hope to provide users with a captivating and immersive photo printing experience where they can appreciate their personal photos in an entirely new way by combining both the Apple Vision Pro cutting-edge technology with the convenience of Walgreens' 1-hour printing service” </span></p>
                    <p className="pt-5 leading-5">Drew Schweinfurth, Senior Product Manager of Store Innovation Transformation at Walgreens, adds,<br /><span className="font-bold">“This collaboration is a testament to our commitment of innovation and customer convenience. The integration of spatial computing for photo printing is just the beginning of a new era in personalized customer experiences that we look forward to exploring with Pictarine. Applications and partnerships like Walgreens has with Pictarine are the reason we continue to showcase the Walgreens Developer Program because we know mind-blowing experiences like the Picta Studio app for Apple Vision Pro are what come from enabling partners with Open APIs.” </span></p>
                    <h2 className="text-2xl font-bold pt-10">About Walgreens</h2>
                    <p className="pt-5 leading-5">Walgreens (www.walgreens.com) is included in the U.S. Retail Pharmacy and U.S. Healthcare segments of Walgreens Boots Alliance, Inc. (Nasdaq: WBA), an integrated healthcare, pharmacy and retail leader with a 170-year heritage of caring for communities. WBA’s purpose is to create more joyful lives through better health. Operating nearly 9,000 retail locations across America, Puerto Rico and the U.S. Virgin Islands, Walgreens is proud to be a neighborhood health destination serving nearly 10 million customers each day. Walgreens pharmacists play a critical role in the U.S. healthcare system by providing a wide range of pharmacy and healthcare services, including those that drive equitable access to care for the nation’s underserved populations. To best meet the needs of customers and patients, Walgreens offers a true omnichannel experience, with fully integrated physical and digital platforms supported by the latest technology to deliver high-quality products and services in communities nationwide.</p>
                    <h2 className="text-2xl font-bold pt-12">About Pictarine</h2>
                    <p className="pt-5 leading-5">Pictarine is at the forefront of digital photo technology, specializing in innovative applications and websites that enhance the photo printing experience. Known for their user-friendly and creative applications, Pictarine has consistently pushed the boundaries of the mobile and web photo printing experience, making it more accessible and engaging for consumers. Their decade-long collaboration with industry giants like Walgreens underscores their commitment to bringing cutting-edge technology and creativity together in the photo printing world.</p>
                    <div className="flex flex-row pt-24 justify-between text-center">
                        <div className="justify-center items-center w-[50%]">
                            <p>Walgreens Developer Program<br />-<br />apibizdev@walgreens.com</p>
                        </div>
                        <div className="justify-center items-center w-[50%]">
                            <p>François Goldgewicht<br />CTO Pictarine<br />-<br />apibizdev@walgreens.com</p>
                        </div>
                    </div>
                    <div className="flex flex-row pt-48 ">
                        <div className="flex flex-col w-[50%] items-start">
                            <div>
                                <p className="absolute text-[6rem] font-bold pt-8 pl-2 text-[#6d7c88] ">400</p>
                                <div className="pl-[3rem] pt-[8rem]">
                                    <p className=" text-[1.37rem] font-extrabold relative z-[2]">million photos printed</p>
                                    <p className=" leading-5">That’s 11 photos per second per year!</p>
                                </div>
                            </div>
                            <div>
                                <p className="absolute text-[6rem] font-bold  pl-2 text-[#6d7c88] ">20</p>
                                <div className="pl-[3rem] pt-[6rem]">
                                    <p className=" text-[1.37rem] font-extrabold relative z-[2]">million downloads</p>
                                    <p className=" leading-5">Since 2016, our apps have been downloaded 16M times … and counting!</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-[50%]">
                            <div className="pt-12 col-start-3 col-end-5">
                                <p className="text-white font-bold text-[1.9rem]  pt-8 "><span className="inline-block mr-10 mb-7"><Bell /></span>Receive our press releases by mail!</p>
                                <div className="flex pt-10 justify-end">
                                    <input type="text" placeholder="email" className=" rounded-[10px] border border-[#cbd6e2] border-solid w-[26.5rem] bg-[#f5f8fa] py-3.5 px-4" />
                                </div>
                                <Link className="flex justify-end" href="/life"><button className="bg-[#db3753] w-28 h-[3.2rem] rounded-[10px] text-white text-sm mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Suivez-nous</button></Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-[#f8f8f8] flex w-full justify-center">
                    <div className="pt-[8rem] pb-[10rem] flex flex-col max-w-[75rem]">
                        
                            <h2 className="text-3xl font-bold pb-3">On parle de nous</h2>
                            <div className="grid grid-cols-3 gap-10 w-full">
                                <Link href="https://www.maddyness.com/2022/12/01/pictarine-photo/">
                                    <div className="bg-white w-[22.5rem] rounded-[10px]">
                                        <Image className="p-3 rounded-[15px]" src={maddyness} alt="maddyness" />
                                        <Image className="p-3 w-44" src={maddyness_logo} alt="maddyness-logo" />
                                        <p className="p-3">
                                            Pictarine, la startup française qui fait 40 millions d’euros de volume d’affaires aux États-Unis et 0€ en France.
                                        </p>
                                    </div>
                                </Link>
                                <Link href="https://business.lesechos.fr/entrepreneurs/actu/0603883369722-apres-les-etats-unis-pictarine-veut-imprimer-les-photos-en-europe-339640.php">
                                    <div className="bg-white w-[22.5rem] rounded-[10px]">
                                        <Image className="p-3 rounded-[15px]" src={echos} alt="maddyness" />
                                        <Image className="p-3 w-44" src={echos_logo} alt="echos-logo" />
                                        <p className="p-3">
                                            Après les Etats-Unis, Pictarine veut imprimer les photos en Europe.
                                        </p>
                                    </div>
                                </Link>
                                <Link href="https://www.walgreensbootsalliance.com/news-media/press-releases/2024/pictarine-and-walgreens-revolutionize-photo-printing-launch-picta">
                                    <div className="bg-white w-[22.5rem] rounded-[10px]">
                                        <Image className="p-3 rounded-[15px]" src="https://a.storyblok.com/f/189744/1504x1000/92ab60a8d0/searchads-pictarine.jpg/m/800x0" width={1000} height={1000} alt="maddyness" />
                                        <Image className="p-3 w-56" src="https://a.storyblok.com/f/189744/854x120/884a0ae8bb/homepage_logo-1.png" width={1000} height={1000} alt="maddyness-logo" />
                                        <p className="p-3">
                                            Customers print memories. Pictarine grows conversions. 
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        
                    </div>
                </section>
            </main>
        </>
    )
}