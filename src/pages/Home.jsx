import Navbar from "../components/Navbar";
import CardsHome from "../components/CardsHome";
import icon1 from "/icons/art1.png";
import icon2 from "/icons/art2.png";
import icon3 from "/icons/art3.png";
import icon4 from "/icons/comic.png";
import icon5 from "/icons/graff.png";

const cardsHomeData = [
  {
    icon: icon1,
    name: "Eduardo Hinojosa",
    content: "Lorem ipsum dolor sit",
  },
  {
    icon: icon2,
    name: "Laura Aguirre",
    content: "Lorem ipsum dolor sit",
  },
  {
    icon: icon3,
    name: "Claudio Alvarex",
    content: "Osos Poéticos filosóficos",
  },
  {
    icon: icon4,
    name: "Bisy Lorem",
    content: "Lorem ipsum dolor sit",
  },
  {
    icon: icon5,
    name: "Varas Lorem",
    content: "Lorem ipsum dolor sit",
  },
];

const Home = () => {
  return (
    <div className="w-full h-[100dvh] lg:h-screen z-50 relative flex flex-col justify-evenly items-center gap-2">
     
      <Navbar />
     
      <article className="flex flex-col justify-center items-center relative z-50  w-full cursor-default">
        <h1 className="august-bold leading-none text-grayCustom text-8xl  md:text-8xl  lg:text-[16rem] xl:text-[18rem] 2xl:text-[20rem]">
          ART GALLERY
        </h1>
        <p className="text-sm  text-grayCustom font-text2 text-center text-pretty px-2 mt-4 lg:text-base xl:max-w-[1000px] 2xl:max-w-[1400px] xl:text-xl  2xl:text-xl">
          Conecta con la creatividad de artistas emergentes y explora sus obras.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae
          blanditiis cupiditate iusto ducimus reprehenderit
        </p>
      </article>

      <section className="relative z-50  flex flex-wrap   justify-center items-center gap-x-6 gap-y-6 w-full   xl:gap-x-14 2xl:gap-x-20 ">
        {cardsHomeData.map((artist, i) => (
          <CardsHome key={i} artist={artist} />
        ))}
      </section>
    </div>
  );
};

export default Home;
