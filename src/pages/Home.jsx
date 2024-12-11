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
    <div className="w-full h-[100dvh] lg:h-screen z-50 relative flex flex-col justify-evenly items-center pt-2 gap-6">
      <Navbar />

      <article className="flex flex-col justify-center items-center relative z-50  w-full cursor-default">
        <h1 className="august-bold leading-none text-zinc-600 text-9xl  lg:text-[16rem] xl:text-[19rem] 2xl:text-[23rem] text-transparent bg-gradient-to-b bg-clip-text  from-grayCustom via-grayCustom  to-zinc-700">
          ART GALLERY
        </h1>
        <p className="text-sm  text-grayCustom font-text2 text-center text-pretty px-2 mt-4 lg:text-base lg:text-balance xl:max-w-[1000px] 2xl:max-w-[1300px] xl:text-xl  2xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis
          tempora est deserunt nulla doloremque ipsa molestias quasi magnam
          neque minima suscipit impedit animi labore ipsam, velit dolores
          accusamus iste. Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
      </article>

      <section className="relative z-50  flex flex-wrap   justify-center items-center gap-x-9 gap-y-2 w-full   xl:gap-x-14 2xl:gap-x-20 ">
        {cardsHomeData.map((artist, i) => (
          <a key={i} href="#productDetail">
            <CardsHome  artist={artist} />
          </a>
        ))}
      </section>
    </div>
  );
};

export default Home;
