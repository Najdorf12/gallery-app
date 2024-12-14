import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";
import arrow from "/arrow.png";

const artistsBtns = [
  {
    name: "Laura Aguirre",
    data1: "Lorem impsum",
    data2: "Lorem impsum",
  },
  {
    name: "Claudio Alvarez",
    data1: "Lorem impsum",
    data2: "Lorem impsum",
  },
  {
    name: "Eduardo Hinojosa",
    data1: "Lorem impsum",
    data2: "Lorem impsum",
  },
  {
    name: "Sebastian Varas",
    data1: "Lorem impsum",
    data2: "Lorem impsum",
  },
  {
    name: "Bisy Lorem",
    data1: "Lorem impsum",
    data2: "Lorem impsum",
  },
];

const Plano = () => {
  return (
    <section className="flex flex-col  h-screen justify-evenly lg:flex-row lg:items-center px-3">
      <TsParticlesBg />
      <Navbar />
      <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default lg:max-w-[60%] lg:self-start lg:mt-28 lg:pl-[5%]">
        <h1 className="august-bold leading-none text-zinc-300 text-8xl lg:text-[8rem] xl:text-[10rem] 2xl:text-[12rem]">
          PLANO
        </h1>
        <div className="w-12 h-[1px] bg-grayCustom mt-3  lg:w-[300px] lg:mt-6"></div>
        <p className="text-sm text-grayCustom font-text2 font-medium text-balance mt-4 lg:text-base lg:mt-6 max-w-[660px] xl:text-lg 2xl:text-xl 2xl:max-w-[700px]">
          Discover our unique approach to building robust digital solutions. We
          provide cutting-edge strategies to empower your brand online.
        </p>
        
      </article>
      <ul className="flex flex-col gap-1 relative z-50 w-full mt-6 lg:self-end lg:pb-3">
        {artistsBtns?.map((artist, i) => (
          <li
            key={i}
            className="flex  border-b border-grayCustom py-2 max-w-[500px] lg:max-w-[700px]"
          >
            <p className="august-bold text-zinc-300 text-5xl w-[70%] lg:text-6xl xl:text-7xl 2xl:text-8xl">
              {artist?.name.toLocaleUpperCase()}
            </p>
            <div className="flex flex-col justify-between text-grayCustom text-sm font-text xl:text-base">
              {artist?.data1}
              <div>{artist?.data2}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Plano;
