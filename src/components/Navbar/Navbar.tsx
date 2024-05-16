"use client"

import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.png"
import langue from "@/assets/langue.png"

export default function Navbar(props: any) {
    if(props.theme === "white") {
        return (
            <header className="bg-[#fcfcfc] flex py-3 lg:py-9 w-full px-5 lg:px-8 justify-center sticky top-0 z-[80]">
                <nav className="flex justify-between w-full lg:w-[75rem]">

                    <span className="w-28 lg:w-[218px] ">
                        <Link href="/"><Image width={800} height={160} alt="logo" src={logo} /></Link>
                    </span>
                    <ul className="hidden lg:flex items-center space-x-5 pr-[0.5rem]">
                        <li>
                            <Link href="/" className="hover:text-red-600 transition duration-200 ">Home</Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-red-600 transition duration-200">Notre Produit</Link>
                        </li>
                        <li>
                            <Link href="/life" className="hover:text-red-600 transition duration-200 ">Picta Life</Link>
                        </li>
                        <li>
                            <Link href="/team" className="hover:text-red-600 transition duration-200">La Team</Link>
                        </li>
                        <li>
                            <Link href="/tech" className="hover:text-red-600 transition duration-200">La Tech</Link>
                        </li>
                        <li>
                            <Link href="/partnership" className="hover:text-red-600 transition duration-200">Partnerships</Link>
                        </li>
                        <li>
                            <Link href="/news-room" className="hover:text-red-600 transition duration-200">News Room</Link>
                        </li>
                        <li>
                            <Link href="/careers" className="hover:text-red-600 transition duration-200">Rejoins-nous</Link>
                        </li>
                        <li>
                            <Image className="w-7" src={langue} width={73} height={63} alt="langues" />
                        </li>
                    </ul>

                    {/* Hamburger Menu */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} role="button" className="space-y-1">
                            <div className="w-6 h-1 bg-black"></div>
                            <div className="w-6 h-1 bg-black"></div>
                            <div className="w-6 h-1 bg-black"></div>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-[1] pl-7 pt-5 pb-5 bg-base-100 w-[98vw] space-y-7 mt-3 text-[1rem]">
                            <li>
                                <Link href="/" className="hover:text-red-600 transition duration-200 ">Home</Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-red-600 transition duration-200">Notre Produit</Link>
                            </li>
                            <li>
                                <Link href="/life" className="hover:text-red-600 transition duration-200 ">Picta Life</Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-red-600 transition duration-200">La Team</Link>
                            </li>
                            <li>
                                <Link href="/tech" className="hover:text-red-600 transition duration-200">La Tech</Link>
                            </li>
                            <li>
                                <Link href="/partnership" className="hover:text-red-600 transition duration-200">Partnerships</Link>
                            </li>
                            <li>
                                <Link href="/news-room" className="hover:text-red-600 transition duration-200">News Room</Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-red-600 transition duration-200">Rejoins-nous</Link>
                            </li>
                            <li className="flex flex-row">
                                <p className="text-sm"><Image className="w-7 inline-block" src={langue} width={73} height={63} alt="langues" /> Passer en version anglaise</p>
                            </li>
                        </ul>
                    </div>
                

                </nav>
            </header>
        )
    }
    if (props.theme === "black") {
        return (
            <header className="bg-[#1c1c1c] flex py-3 lg:py-9 w-full px-5 lg:px-8 justify-center sticky top-0 z-[80]">
                <nav className="flex justify-between w-full lg:w-[75rem] text-white">

                    <span className="w-28 lg:w-[218px] ">
                        <Link href="/"><Image width={800} height={160} alt="logo" src={logo} /></Link>
                    </span>
                    <ul className="hidden lg:flex items-center space-x-5 pr-[0.5rem]">
                        <li>
                            <Link href="/" className="hover:text-red-600 transition duration-200 ">Home</Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-red-600 transition duration-200">Notre Produit</Link>
                        </li>
                        <li>
                            <Link href="/life" className="hover:text-red-600 transition duration-200 ">Picta Life</Link>
                        </li>
                        <li>
                            <Link href="/team" className="hover:text-red-600 transition duration-200">La Team</Link>
                        </li>
                        <li>
                            <Link href="/tech" className="hover:text-red-600 transition duration-200">La Tech</Link>
                        </li>
                        <li>
                            <Link href="/partnership" className="hover:text-red-600 transition duration-200">Partnerships</Link>
                        </li>
                        <li>
                            <Link href="/news-room" className="hover:text-red-600 transition duration-200">News Room</Link>
                        </li>
                        <li>
                            <Link href="/careers" className="hover:text-red-600 transition duration-200">Rejoins-nous</Link>
                        </li>
                        <li>
                            <Image className="w-7" src={langue} width={73} height={63} alt="langues" />
                        </li>
                    </ul>

                    {/* Hamburger Menu */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <div tabIndex={0} role="button" className="space-y-1">
                            <div className="w-6 h-1 bg-white"></div>
                            <div className="w-6 h-1 bg-white"></div>
                            <div className="w-6 h-1 bg-white"></div>
                        </div>
                        <ul tabIndex={0} className="bg-[#1c1c1c] dropdown-content z-[1] pl-7 pt-5 pb-5 w-[98vw] space-y-7 mt-3 text-[1rem]">
                            <li>
                                <Link href="/" className="hover:text-red-600 transition duration-200 ">Home</Link>
                            </li>
                            <li>
                                <Link href="/products" className="hover:text-red-600 transition duration-200">Notre Produit</Link>
                            </li>
                            <li>
                                <Link href="/life" className="hover:text-red-600 transition duration-200 ">Picta Life</Link>
                            </li>
                            <li>
                                <Link href="/team" className="hover:text-red-600 transition duration-200">La Team</Link>
                            </li>
                            <li>
                                <Link href="/tech" className="hover:text-red-600 transition duration-200">La Tech</Link>
                            </li>
                            <li>
                                <Link href="/partnership" className="hover:text-red-600 transition duration-200">Partnerships</Link>
                            </li>
                            <li>
                                <Link href="/news-room" className="hover:text-red-600 transition duration-200">News Room</Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-red-600 transition duration-200">Rejoins-nous</Link>
                            </li>
                            <li className="flex flex-row">
                                <p className="text-sm"><Image className="w-7 inline-block" src={langue} width={73} height={63} alt="langues" /> Passer en version anglaise</p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}