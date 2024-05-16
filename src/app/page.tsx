import Link from "next/link";
import Image from "next/image";
import { team_pictarine, workshop_reunion, team_summerparty, workshop_pictarine2, amphi, event_conf, course, rose, fr_tech, maddyness, maddyness_logo, echos, echos_logo, apple_vision, walgreens_logo, maps, gif_iphone } from "@/assets/images"
import {Hello, Bell} from "@/assets/tools/svg"
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar theme="white" />
      <main className="flex min-h-screen flex-wrap flex-col align-center items-center w-full overflow-hidden">
        <section className="pt-12 lg:pt-[6.5rem] px-5 lg:px-0 flex flex-col lg:grid lg:grid-cols-12 lg:gap-7 lg:max-w-[75rem] w-full">
          
            <div className="lg:col-start-1 lg:col-end-5 flex flex-col content-center justify-center items-center lg:items-start text-left">
              <h2 className="text-[1.6rem] lg:text-[3.5rem] pr-3 lg:pr-0 lg:pl-6 flex flex-col pb-12 lg:pb-20 ">
                Explorateurs
                <span className="absolute pt-5 lg:pt-12 pl-6 text-red-600 text-[2.2rem] lg:text-[4.2rem] italic font-extrabold ">créatifs</span>
              </h2>
              <p className="lg:max-w-[22rem]">Une team exceptionnelle, une pincée d'international, on rajoute une bonne louche de débrouillardise... et on obtient une équipe prête à déplacer des montagnes ! Bienvenue chez Pictarine !</p>
            </div>
          
          <Image className="col-start-5 col-end-13 pt-3" src={team_pictarine} width={3177} height={2116} alt="team pictarine" />
        </section>
        <section className="pt-12 lg:pt-[7.3rem] px-5 lg:px-0 lg:grid lg:grid-cols-12 lg:gap-7 w-full lg:max-w-[75rem]">
          <div className="col-start-1 col-end-9 flex flex-col">
            <Image className="pr-8 hidden lg:block" src={workshop_reunion} width={800} height={363} alt="workshop-reunion" />
            <div className="lg:pl-8 pt-4 flex flex-row">
              <Image className="w-full lg:w-[29.8rem]" src={team_summerparty} width={800} height={588} alt="team-summerparty" />
              <Image className="ml-5 hidden lg:block" src={workshop_pictarine2} width={260} height={538} alt="workshop-pictarine2" />
            </div>
          </div>
          <div className="col-start-9 col-end-13 content-center pl-2 pt-5 mlg:9t-0">
            <h2 className="text-3xl font-bold">La vision de Pictarine, avec des jumelles c'est...</h2>
            <p className="lg:max-w-[21rem] w-full pt-1">...une team bourrée de talents, qui est prête à relever tous les challenges ! Mais c'est avant tout une équipe qui est toujours là les uns pour les autres et qui se serre les coudes.

              Proposer, tester, rater, ajuster... et, bien sûr, recommencer ! Car on a le droit à l'erreur chez Pictarine, et surtout on est jamais seul.e pour se relever.</p>
            <Link href="/life"><button className="bg-[#db3753] lg:w-[16.5rem] w-56 lg:h-[3.8rem] h-10 rounded-[15px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Découvre la Picta Life</button></Link>
          </div>
        </section>
        <section className="pt-12 lg:pt-[7.3rem] px-5 lg:px-0 flex flex-col lg:grid  lg:grid-cols-12  lg:gap-7 w-full  lg:max-w-[75rem]">
          <div className="col-start-1 col-end-9">
            <h2 className="text-[2.5rem] font-bold">Et le business alors ?</h2>
            <p className="leading-5">Chez nous, un seul mot d'ordre : créer et faire évoluer notre application mobile et web pour que nos utilisateurs puissent imprimer leurs meilleurs souvenirs ! Et pour cela, on ne cesse d’innover et d’explorer des nouvelles idées de produits.</p>
            <div className="lg:grid lg:grid-cols-2 flex flex-col">
              <div>
                <p className="absolute text-[6rem] font-bold pt-4 pl-2 text-[#e6eef0] ">4.9</p>
                <div className="pl-[2rem] pt-[7rem]">
                  <p className="text-[1.37rem] font-extrabold relative z-[2]">sur les Apps Store</p>
                  <p className="leading-5 max-w-80">C’est la note moyenne de nos apps sur les stores (Google et Apple)</p>
                </div>
              </div>
              <div>
                <p className="absolute text-[6rem] font-bold pt-4 pl-2 text-[#e6eef0] z-0">20</p>
                <div className="pl-[3rem] pt-[7rem]">
                  <p className="text-[1.37rem] font-extrabold relative z-[2]">millions de téléchargements</p>
                  <p className="leading-5">Nos apps ont été téléchargées par 20M d’utilisateurs depuis 2016.</p>
                </div>
              </div>
              <div>
                <p className="absolute text-[6rem] font-bold pt-8 pl-2 text-[#e6eef0] ">23000</p>
                <div className="pl-[2rem] pt-[8rem]">
                  <p className="text-[1.37rem] font-extrabold relative z-[2]">magasins partenaires</p>
                  <p className="leading-5">C’est le nombre de magasins partenaires qui impriment nos photos aux Etats-Unis : Walgreens, Walmart, CVS confondus.</p>
                </div>
              </div>
              <div>
                <p className="absolute text-[6rem] font-bold pt-8 pl-2 text-[#e6eef0] ">400</p>
                <div className="pl-[3rem] pt-[8rem]">
                  <p className="text-[1.37rem] font-extrabold relative z-[2]">millions d'impressions</p>
                  <p className="leading-5">Depuis 2016, nous avons imprimé 356 millions de photos !</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-9 col-end-13 pt-[2.7rem]">
            <Image src={gif_iphone} alt="gif-iphone" />
          </div>
        </section>
        <section className="flex flex-col px-5 lg:px-0 pt-16 w-full pb-16 max-w-[75rem]">
          <div className="flex justify-center w-full">
            <h2 className="flex flex-row w-[35rem] text-end text-2xl lg:text-3xl lg:text-center pr-8">
              <span className="">
                <Hello />
              </span>
              Découvre nos apps et nos projets d’exploration
            </h2>
          </div>
          <Link className="flex justify-center" href="/products"><button className="bg-[#db3753] w-[10rem] h-[3.8rem] rounded-[15px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">Let's Go !</button></Link>
        </section>
        <section className="pt-8 lg:pt-[7rem] px-5 lg:px-0 bg-[#f8f8f8] max-w-[75rem]">
          <div className="lg:grid lg:grid-cols-2 flex flex-col gap-10">
            <div className="pt-10">
              <h2 className="text-4xl font-bold pb-2">Meetup at Picta</h2>
              <p className="leading-5">On aime recevoir dans notre espace de meetup aménagé avec un amphi et un super grand écran pour les supers grandes présentations.</p>
              <Image className="pt-10" src={amphi} alt="amphi" />
              <h2 className="text-2xl font-bold pt-6 pb-2">Il était une fois deux Design Systems</h2>
              <p className="italic text-base">Juin 2022 chez Pictarine</p>
              <p className="leading-5 pt-2">C’est l’histoire de la conception de deux design systems. D’une part celle de Talan, et d’autre part celle de Pictarine, qui a pu commencer from scratch un design system lors de la refonte technique et design de leur plus grosse appli mobile.</p>
            </div>
            <div>
              <Image src={event_conf} alt="event-conf" />
              <h2 className="text-2xl font-bold pt-6 pb-2">Swift Meetup Toulouse</h2>
              <p className="italic text-base">Mars 2024 chez Pictarine</p>
              <p className="leading-5 pt-2">Venez à la prochaine édition du meetup Swift Toulouse le 14 mars 2024 chez Pictarine où son CTO François Goldgewicht donnera son talk intitulé : 25 ans dans le dev : cartographie d'une carrière atypique.</p>
              <h2 className="text-2xl text-end pt-10 inline-block  w-full ">
                <span className="inline-block mb-6">
                <Bell />
                </span>
                <span className="ml-7">Reste informé des prochains events par mail</span> 
              </h2>
              <div className="flex flex-col items-end inputBox">
                <input type="text" required /><i className="md:ml-16 lg:ml-0 w-full">Adresse mail</i>
                <button className="bg-[#db3753] text-sm w-28 lg:w-[6rem] h-10 lg:h-[3.4rem] rounded-[10px] text-white mt-5 hover:bg-[#fcfcfc] border-red-600 border-2 border-solid hover:text-[#db3753] transition duration-300">S'inscrire</button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#f8f8f8] pt-12 lg:pt-[10rem] px-5 lg:px-0 flex flex-col lg:grid lg:grid-cols-12 lg:gap-7 w-full lg:max-w-[75rem]">
          <div className="col-start-1 col-end-9">
            <Image className="w-[47.2rem] rounded-[5px] hidden lg:block" src={course} alt="course" />
            <div className="flex flex-row pt-4 lg:h-[21.5rem]">
              <Image className="lg:w-[32rem] w-full lg:pl-7 rounded-[5px] " src={rose} alt="or" />
              <Image className="w-72 hidden lg:block rounded-[5px] pl-4" src={fr_tech} alt="french-tech" />
            </div>
          </div>
          <div className="col-start-9 col-end-13 content-center pl-2 pt-3">
            <h2 className="text-3xl font-bold pb-3">Engagés pour les causes qui nous tiennent à coeur</h2>
            <p className="lg:max-w-[24rem] pt-1 leading-5">Une course est organisée pour la recherche contre le cancer ? C'est parti, on lace nos baskets ! <br /><br />

              On trouve ça important de sensibiliser au dépistage du Cancer du Sein ? Tout le monde se mobilise, et pour un habit rose porté on reverse 5 euros de don à la Ligue contre le Cancer du Sein. <br /> <br />

              Besoin de parrains pour le French Tech Tremplin ? On est ravis d'aider des jeunes issus de quartiers difficiles, boursiers ou en situation de handicap, à accéder à l'entreprenariat.</p>
          </div>
        </section>
        <section className="bg-[#f8f8f8] pt-[8rem] pb-[10rem] px-5 flex flex-col lg:px-0 lg:grid lg:grid-cols-12 lg:gap-7 w-full lg:max-w-[75rem]">
          <div className="col-start-1 col-end-13">
            <h2 className="text-3xl font-bold pb-3">On parle de nous</h2>
            <div className="lg:grid lg:grid-cols-3 w-full">
              <Link href="https://www.maddyness.com/2022/12/01/pictarine-photo/">
                <div className="bg-white lg:w-[22.5rem] rounded-[10px]">
                  <Image className="p-3 rounded-[15px]" src={maddyness} alt="maddyness" />
                  <Image className="p-3 w-44" src={maddyness_logo} alt="maddyness-logo" />
                  <p className="p-3">
                    Pictarine, la startup française qui fait 40 millions d’euros de volume d’affaires aux États-Unis et 0€ en France.
                  </p>
                </div>
              </Link>
              <Link href="https://business.lesechos.fr/entrepreneurs/actu/0603883369722-apres-les-etats-unis-pictarine-veut-imprimer-les-photos-en-europe-339640.php">
                <div className="bg-white lg:w-[22.5rem] rounded-[10px]">
                  <Image className="p-3 rounded-[15px]" src={echos} alt="maddyness" />
                  <Image className="p-3 w-44" src={echos_logo} alt="maddyness-logo" />
                  <p className="p-3">
                    Après les Etats-Unis, Pictarine veut imprimer les photos en Europe.
                  </p>
                </div>
              </Link>
              <Link href="https://www.walgreensbootsalliance.com/news-media/press-releases/2024/pictarine-and-walgreens-revolutionize-photo-printing-launch-picta">
                <div className="bg-white lg:w-[22.5rem] rounded-[10px]">
                  <Image className="p-3 rounded-[15px]" src={apple_vision} alt="maddyness" />
                  <Image className="p-3 w-44" src={walgreens_logo} alt="maddyness-logo" />
                  <p className="p-3">
                    Pictarine announces the launch of the Picta Studio app for Apple Vision Pro, created and developed to reinvent the photo ordering experience for printing to Walgreens’ stores.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="pt-[3rem] pb-[10rem] p-5 flex flex-col lg:px-0 lg:grid lg:grid-cols-12 lg:gap-7 w-full lg:max-w-[75rem]">
          {/* les clés API google sont payantes :/ */}
          <div className="col-start-1 col-end-9" >
            <h2 className="text-[2.5rem] font-bold">Retouve-nous</h2>
            <div className="flex lg:flex-row flex-col">
              <Image className="mt-5" src={maps} alt="maps" />
              <div className="flex flex-col pl-7 pt-16">
                <h2 className="text-3xl font-bold">Au calme, à Labège</h2>
                <p className="pt-4">Bat B, 3ème étage <br />
                  46 rue Marco Polo <br />
                  31670 Labège
                </p>
                <p className="pt-4">
                  Ou contactez nous via <br />
                  contact@pictarine.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer theme="white"/>
      </>
    
  );
}
