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
    <section className="relative  w-full min-h-screen z-40 flex flex-col  bg-blackCustom overflow-hidden pb-12">
      <TsParticlesBg />
      <Navbar />
      <div className="w-full h-[100dvh]  z-[550] relative flex flex-col mt-20 pt-4  items-center">
        <article className="flex flex-col justify-center items-center relative z-50 px-1 w-full cursor-default max-w-[800px]">
          <p className="august-bold text-center text-balance leading-[4rem] text-zinc-300 text-6xl ">
            Lorem ipsum dolor sit amet{" "}
            <span className="text-redCustom">consectetur adipisicing</span>{" "}
            elit. Nisi facilis tempora est deserunt
          </p>
        </article>
        <ul className=" py-12 flex flex-col justify-center items-center gap-2 px-2">
          {registroData?.map((data, i) => (
            <li key={i} className=" relative flex flex-col py-6 max-w-[650px] font-text2">
              <p className="text-whiteCustom  pl-2 border">{data?.name}</p>
              <div className="text-grayCustom text-balance mt-3">{data?.data}</div>
              <div className="absolute z-50 -bottom-5 right-1 flex gap-3 justify-center items-center md:relative md:self-end text-grayCustom">
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
