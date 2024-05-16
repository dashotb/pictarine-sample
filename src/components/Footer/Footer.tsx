import Image from "next/image"
import logo from "@/assets/logo.png"
import langue from "@/assets/langue.png"
import Link from "next/link"
import { Insta, InstaW, LinkedIn, LinkedInW, WTTJ, WTTJW } from "@/assets/tools/svg"


export default function Footer(props: any) {
    if (props.theme === "white") {
        return(
            <footer className="bg-[#fcfcfc] flex py-9 w-full px-8 justify-center">
                <div className="flex flex-col lg:flex-row justify-between w-[75rem] text-black">
                    <div className="w-[218px]">
                        <Link href="/" className="block w-28 lg:w-full"><Image width={800} height={160} alt="logo" src={logo} /></Link>
                        <p className="pt-3">BAT B - 3ème étage</p>
                        <p>46 rue Marco Polo</p>
                        <p>31670 Labège</p>
                        <div className="flex flex-row pt-2 gap-4">
                            <Link href="https://www.instagram.com/pictarine/" className="w-6"><Insta/></Link>
                            <Link href="https://www.linkedin.com/company/pictarine/" className="w-6"><LinkedIn/></Link>
                            <Link href="https://www.welcometothejungle.com/fr/companies/pictarine" className="w-6"><WTTJ/></Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-2 leading-5 pt-5 lg:pt-0">
                        <Link className="hover:text-red-600 transition duration-200 " href="/">Home</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/products">Notre Produit</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/life">Picta Life</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/team">La Team</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/tech">La Tech</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/partnership">Partnerships</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/news-room">News Room</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/career">Rejoins-nous</Link>
                        <div className="col-start-1 col-end-3 flex flex-row"> <Image className="w-7 h-6" src={langue} width={73} height={63} alt="langues" /><p className="text-sm lg:text-base">Passer à la version anglaise</p></div>
                    </div>
                </div>
            </footer>
        )
    }
    if (props.theme === "black") {
        return (
            <footer className="bg-[#171717] flex py-9 w-full px-5 lg:px-8 justify-center">
                <div className="flex flex-col lg:flex-row justify-between w-[75rem] text-white">
                    <div className="w-[218px]">
                        <Link href="/" className="block w-28 lg:w-full"><Image width={800} height={160} alt="logo" src={logo} /></Link>
                        <p className="pt-3">BAT B - 3ème étage</p>
                        <p>46 rue Marco Polo</p>
                        <p>31670 Labège</p>
                        <div className="flex flex-row pt-2 gap-4">
                            <Link href="https://www.instagram.com/pictarine/" className="w-6"><InstaW /></Link>
                            <Link href="https://www.linkedin.com/company/pictarine/" className="w-6"><LinkedInW /></Link>
                            <Link href="https://www.welcometothejungle.com/fr/companies/pictarine" className="w-6"><WTTJW /></Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-2 leading-5 pt-5 lg:pt-0">
                        <Link className="hover:text-red-600 transition duration-200 " href="/">Home</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/products">Notre Produit</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/life">Picta Life</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/team">La Team</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/tech">La Tech</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/partnership">Partnerships</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/news-room">News Room</Link>
                        <Link className="hover:text-red-600 transition duration-200 " href="/career">Rejoins-nous</Link>
                        <div className="col-start-1 col-end-3 flex flex-row"> <Image className="w-7 h-6" src={langue} width={73} height={63} alt="langues" /><p className="text-sm lg:text-base">Passer à la version anglaise</p></div>
                    </div>
                </div>
            </footer>
        )
    }
}