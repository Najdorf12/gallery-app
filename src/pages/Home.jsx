import Navbar from "../components/Navbar";
import CardsHome from "../components/CardsHome";
import {cardsHomeData} from "../data/artists";


import TsParticlesBg from "../components/TsParticlesBg";



const Home = () => {
  return (
    <main className="relative w-full h-[100dvh] lg:h-screen z-50 flex flex-col justify-center items-center  bg-red-700">
      <TsParticlesBg />
      <div className="w-full h-[100dvh] lg:h-screen z-50 relative flex flex-col justify-evenly items-center pt-4 ">
        <Navbar />

        <article className="flex flex-col justify-center items-center relative z-50  w-full cursor-default">
          <h1 className="august-bold leading-none text-transparent bg-gradient-to-b bg-clip-text from-grayCustom via-grayCustom to-grayCustom text-9xl lg:text-[16rem] xl:text-[18rem] 2xl:text-[22rem]">
            ART GALLERY
          </h1>
          <p className="text-sm  text-grayCustom font-text2 font-medium text-center text-pretty px-2 mt-4 lg:text-base lg:text-balance xl:max-w-[1000px] 2xl:max-w-[1300px] xl:text-lg  2xl:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            facilis tempora est deserunt nulla doloremque ipsa molestias quasi
            magnam neque minima suscipit impedit animi labore ipsam, velit
            dolores accusamus iste. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </article>

        <section className="relative z-50  flex flex-wrap mt-2 justify-center items-center gap-x-4 gap-y-5 w-full  lg:gap-x-6 xl:gap-x-9 2xl:gap-x-14 ">
          {cardsHomeData.map((artist, i) => (
              <CardsHome key={i} artist={artist} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
