import Navbar from "@/components/Navbar/Navbar";
import { Title } from "@/components/Title/Title";
import Image from "next/image";
import detente from "@/assets/life/detente-rooftop.jpg"
import jeep from "@/assets/life/jeep-seminaire.jpg"

export default function Life() {
    return(
        <>
            <Navbar theme="white"/>
            <main>
                <section className="px-[22rem] grid grid-cols-12 gap-7 w-full pt-24 overflow-hidden">
                    <div className="col-start-1 col-end-5 content-center">
                        <Title title="C'est ça, la" subtitle="Picta Life" />
                    </div>
                    <div className="col-start-5 col-end-13">
                        <Image src={detente} alt="tranquillou" />
                    </div>
                </section>
                <section className="px-[22rem] grid grid-cols-12 gap-7 w-full pt-48">
                    <div className="col-start-1 col-end-9">
                        <h2 className="text-[2.5rem] font-bold pb-2">Nos plus beaux souvenirs</h2>
                        <h2 className=" text-3xl font-bold pt-8">Notre dernier séminaire</h2>
                        <p className=" leading-5 pt-4">Que Calor ! C'est sous le soleil de Palma de Majorque que nous sommes partis en séminaire en 2022. Montgolfière, catamaran, buggy... mais on en a aussi profité pour réfléchir à nos valeurs et à ce qui fait notre ADN ! Bref, on est rentrés avec des étoiles pleins les yeux, et des souvenirs pleins les coeurs.</p>
                    </div>
                    <div className="col-start-9 col-end-13">
                        <Image src={jeep} alt="jeep-seminaire" />
                    </div>
                </section>
            </main>
        </>
    )
}