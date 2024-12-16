import TsParticlesBg from "../components/TsParticlesBg";
import Navbar from "../components/Navbar";

const registroData = [
  {
    name: "design",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia magnam recusandae, quod dolor quam similique voluptatibus",
  },
  {
    name: "development",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia magnam recusandae, quod dolor quam similique voluptatibus",
  },
  {
    name: "marketing",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quia magnam recusandae, quod dolor quam similique voluptatibus",
  },
 

];
const Registro = () => {
  return (
    <section className="relative  w-full  lg:h-screen z-40 flex flex-col  bg-blackCustom overflow-hidden pb-32 lg:pb-0 ">
      <TsParticlesBg />
      <Navbar />
      <div className="w-full h-[100dvh]  z-[550] relative flex flex-col mt-14  items-center lg:flex-row lg:mt-0">
        <article className="flex flex-col justify-center items-center relative z-50 px-1 w-full cursor-default max-w-[800px] lg:self-start lg:w-[50%]  lg:mt-24">
          <p className="august-bold text-center text-balance leading-[3.4rem] px-1 text-zinc-300 text-5xl lg:text-7xl lg:leading-[5rem]  2xl:text-8xl 2xl:leading-[6.5rem]">
            Lorem ipsum dolor sit amet{" "}
            <span className="text-redCustom">consectetur adipisicing</span>{" "}
            elit. Nisi facilis tempora est deserunt
          </p>
        </article>
        <ul className="pt-16 flex flex-col justify-center items-center gap-3 px-4 lg:w-[50%]">
          {registroData?.map((data, i) => (
            <li key={i} className=" relative flex flex-col py-6 max-w-[650px] font-text2 xl:max-w-[600px]">
              <p className="text-whiteCustom  pl-2 border py-[2px]">{data?.name}</p>
              <div className="text-grayCustom text-balance mt-5 text-sm">{data?.data}</div>
              <div className="absolute z-50 -bottom-3 right-1 flex gap-3 justify-center items-center md:relative md:self-end text-grayCustom">
                <div className="w-32 h-[2px] bg-whiteCustom"></div>
                {data?.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Registro;
