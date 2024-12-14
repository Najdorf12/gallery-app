import Navbar from "../components/Navbar";
import CardsHome from "../components/CardsHome";
import TsParticlesBg from "../components/TsParticlesBg";
import { artistsData } from "../data/artistsData";

const Home = ({ artistData }) => {
  return (
    <main className="relative w-full h-[100dvh] lg:h-screen z-50 flex flex-col justify-center items-center overflow-hidden">
      <TsParticlesBg />
      <div className="w-full h-[100dvh] lg:h-screen z-[550] relative flex flex-col justify-evenly items-center pt-4 ">
        <Navbar />

        <article className="flex flex-col justify-center items-center relative z-50  w-full cursor-default">
          <h1 className="august-bold leading-none text-grayCustom text-9xl lg:text-[16rem] xl:text-[18.2rem] 2xl:text-[22rem]">
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

        <section className="relative z-50  flex flex-wrap mt-3 justify-center items-center gap-x-4 gap-y-5 w-full lg:self-end  lg:gap-x-6 xl:gap-x-9 2xl:gap-x-14 ">
          {artistsData?.map((artist, i) => (
            <CardsHome key={i} artist={artist} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
