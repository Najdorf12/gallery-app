import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";
import arrow from "/arrow.png";
import imgPlano1 from "/planos/00.jpg"
import imgPlano2 from "/planos/01.jpg"
import imgPlano3 from "/planos/02.jpg"

const planosBtns = [
  {
    name: "01 - LOREM IMPSUM",
    data1: "Lorem impsum dolor sit amet concsectur. Some random text",
    data2: "Lorem impsum",
    img: imgPlano1
  },
  {
    name: "02 - LOREM IMSUM",
    data1: "Lorem impsum dolor sit amet concsectur. Some random text",
    data2: "Lorem impsum",
    img: imgPlano2
  },
  {
    name: "03 - LOREM IMSUM ",
    data1: "Lorem impsum dolor sit amet concsectur. Some random text",
    data2: "Lorem impsum",
    img: imgPlano3
  },

];

const Plano = () => {
  return (
    <section className="flex flex-col bg-blackCustom lg:flex-row lg:items-center  overflow-hidden pb-12 lg:h-screen lg:pb-0 lg:justify-center" >
      <TsParticlesBg />
      <Navbar />
      <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default mt-14 lg:max-w-[60%] lg:self-start lg:mt-28 lg:pl-[5%] px-3">
        <h1 className="august-bold leading-none text-zinc-300  text-8xl lg:text-[8rem] xl:text-[10rem] 2xl:tsext-[12rem]">
          PLANO
        </h1>
        <div className="w-12 h-[1px] bg-grayCustom mt-3  lg:w-[300px] lg:mt-6"></div>
        <p className="text-sm text-grayCustom font-text2 font-medium text-balance mt-4 lg:text-base lg:mt-6 max-w-[660px] xl:text-lg 2xl:text-xl 2xl:max-w-[700px]">
          Discover our unique approach to building robust digital solutions. We
          provide cutting-edge strategies to empower your brand online.
          Discover our unique approach to building robust digital solutions. We
          provide cutting-edge strategies to empower your brand online.
        </p>
       
      </article>
      <ul className="flex flex-col gap-3 relative z-50 w-full mt-12 px-5  lg: ">
        {planosBtns?.map((plano, i) => (
          <li
            key={i}
            className="flex flex-col  border-b border-grayCustom py-3 max-w-[500px]  xl:max-w-[600px] rounded-br-md border-r pl-3"
          >
            <img src={plano?.img} alt="" />
            <p className="august-bold text-zinc-300 text-5xl w-[70%] lg:text-6xl  2xl:text-7xl">
              {plano?.name.toLocaleUpperCase()}
            </p>
            <div className=" text-grayCustom text-balance mt-3 text-sm font-text xl:text-base">
              {plano?.data1}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Plano;
