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

const About = ({ handleButtonClick }) => {
  return (
    <section className="">
      <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default lg:max-w-[60%]">
        <h1 className="august-bold leading-none text-zinc-300 text-7xl lg:text-[8rem] 2xl:text-[10rem]">
          ABOUT
        </h1>
        <div className="w-6 h-[1px] bg-grayCustom mt-3  lg:w-[300px] lg:mt-6"></div>
        <p className="text-sm text-grayCustom font-text2 font-medium text-balance mt-4 lg:text-base lg:mt-6 max-w-[660px] xl:text-lg 2xl:text-xl">
          Discover our unique approach to building robust digital solutions. We
          provide cutting-edge strategies to empower your brand online.
        </p>
        <div className="flex justify-start items-center gap-9 mt-9 lg:gap-10 z-50 relative">
          <button
            onClick={() => handleButtonClick("whatWeDo")}
            className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg"
          >
            WHAT WE DO
            <img src={arrow} alt="arrow" className="w-3" />
          </button>
          <button
            onClick={() => handleButtonClick("project")}
            className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg"
          >
            PROYECTO
            <img src={arrow} alt="arrow" className="w-3" />
          </button>
        </div>
      </article>
      <ul className="flex flex-col gap-1 relative z-50 w-full mt-20">
        {artistsBtns?.map((artist, i) => (
          <li key={i} className="flex  border-b border-grayCustom py-2">
            <p className="august-bold text-zinc-300 text-5xl w-[70%]">{artist?.name.toLocaleUpperCase()}</p>
            <div className="flex flex-col justify-between text-grayCustom text-sm font-text">
              {artist?.data1}
              <div>{artist?.data2}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
