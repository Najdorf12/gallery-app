import Navbar from "../components/Navbar";
import CardsHome from "../components/CardsHome";
import icon1 from "/icons/icon1.jpeg";
import icon2 from "/icons/icon2.jpeg";
import icon3 from "/icons/icon3.jpeg";
import icon4 from "/icons/icon4.jpeg";
import icon5 from "/icons/icon3.jpeg";
import TsParticlesBg from "../components/TsParticlesBg";

const cardsHomeData = [

  {
    id: "LauraAguirre",
    icon: icon2,
    name: "Laura Aguirre",
    content: "Lorem ipsum dolor sit",
  },
  {
    id: "ClaudioAlvarex",
    icon: icon3,
    name: "Claudio Alvarex",
    content: "Osos Poéticos filosóficos",
  },
  {
    id: "EduardoHinojosa",
    icon: icon1,
    name: "Eduardo Hinojosa",
    content: "Lorem ipsum dolor sit",
  },
  {
    id: "VarasMackenzie",
    icon: icon4,
    name: "Varas Mackenzie",
    content: "Lorem ipsum dolor sit",
  },
  {
    id: "BisyLorem",
    icon: icon5,
    name: "Bisy Lorem",
    content: "Lorem ipsum dolor sit",
  },
];

const Home = () => {
  return (
    <main className="relative w-full h-[100dvh] lg:h-screen z-50 flex flex-col justify-center items-center bg-red-700">
      <TsParticlesBg />
      <div className="w-full h-[100dvh] lg:h-screen z-50 relative flex flex-col justify-evenly items-center pt-2 ">
        <Navbar />

        <article className="flex flex-col justify-center items-center relative z-50  w-full cursor-default">
          <h1 className="august-bold leading-none text-transparent bg-gradient-to-b bg-clip-text from-grayCustom via-grayCustom to-zinc-700 text-9xl lg:text-[16rem] xl:text-[18rem] 2xl:text-[22rem]">
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

        <section className="relative z-50  flex flex-wrap   justify-center items-center gap-x-9 gap-y-2 w-full  xl:gap-x-10 2xl:gap-x-14 ">
          {cardsHomeData.map((artist, i) => (
              <CardsHome key={i} artist={artist} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Home;
