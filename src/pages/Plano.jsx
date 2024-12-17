import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";
import arrow from "/arrow4.png";
import imgPlano1 from "/planos/00.jpg";
import imgPlano2 from "/planos/01.jpg";
import imgPlano3 from "/planos/02.jpg";

const planosBtns = [
  {
    name: "01 - LOREM IMPSUM",
    data1: "Lorem impsum dolor sit amet concsectur. Some random text",
    data2: "Lorem impsum",
    img: imgPlano1,
  },
  {
    name: "02 - LOREM IMSUM",
    data1: "Lorem impsum dolor sit amet concsectur. Some random text",
    data2: "Lorem impsum",
    img: imgPlano2,
  },
  {
    name: "03 - LOREM IMSUM ",
    data1: "Lorem impsum dolor sit amet concsectur. Some random text",
    data2: "Lorem impsum",
    img: imgPlano3,
  },
];

const Plano = () => {
  return (
    <section className="flex flex-col bg-blackCustom overflow-hidden pb-12 lg:h-screen lg:pb-0 lg:justify-center gap-2">
      <TsParticlesBg />
      <Navbar />
      <article className="flex flex-col px-3 justify-start items-start relative z-50 w-full cursor-default mt-14  lg:items-center lg:justify-evenly lg:mt-10 lg:w-full lg:flex-row">
        <div className="">
          <h1 className="august-bold leading-none text-zinc-300  text-8xl  lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[12rem]">
            PLANO
          </h1>
          <div className="w-12 h-[1px] bg-grayCustom mt-3  lg:w-[300px] lg:mt-6"></div>
        </div>
        <p className="text-sm relative text-grayCustom font-text2 font-medium text-balance mt-4 lg:text-base lg:mt-6 max-w-[660px]  2xl:text-lg 2xl:max-w-[700px]">
          Galería Invisible y su exposición colectiva, está compuesta de 25
          obras plásticas de formato bidimensional. Entre ellas, pintura al óleo
          y acrílicos, grabado, litografía, serigrafia, ilustración en tinta,
          acuarelas y fotografía. Todas las obras alineadas en una poética
          localista, de perfiles urbanos, con un indiscutible discurso social,
          estético y poético que refleja el imaginario porteño y sudamericano
          del arte actual.
        </p>
      </article>
      <ul className="flex flex-col gap-6 relative z-50 w-full mt-12 px-3 justify-center lg:flex-row  lg:px-4">
        {planosBtns?.map((plano, i) => (
          <li
            key={i}
            className="flex flex-col border-b pb-4 max-w-[500px] 2xl:max-w-[550px] border-stone-600   rounded-tr-lg rounded-br-md border-r "
          >
            <img
              className="w-full h-full object-cover rounded-t-lg "
              src={plano?.img}
              alt="plano-img"
            />
            <p className="august-bold text-zinc-300 mt-5 pl-2 text-5xl w-[70%] lg:text-6xl  2xl:text-7xl">
              {plano?.name.toLocaleUpperCase()}
            </p>
            <div className=" text-grayCustom text-balance mt-3 px-2 text-sm font-text xl:text-lg xl:mt-4">
              {plano?.data1}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Plano;
