import arrow from "/arrow.png";

const WhatWeDo = ({ handleButtonClick }) => {
  return (
    <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default lg:max-w-[60%] mt-24 2xl:mt-32">
      <h1 className="august-bold leading-none text-zinc-300 text-7xl lg:text-[8rem] 2xl:text-[10rem] ">
        What we <span className="text-redCustom">do</span>?
      </h1>
      <div className="w-9 h-[1px] bg-grayCustom mt-3 lg:w-[300px] lg:mt-6"></div>

      <p className="text-sm  text-grayCustom font-text2 font-medium  text-balance  mt-6 lg:text-base lg:mt-6 max-w-[380px] xl:text-base 2xl:text-lg lg:max-w-[700px] 2xl:max-w-[800px] ">
        Discover our unique approach to building robust digital solutions. We
        provide cutting-edge strategies to empower your brand online. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Facilis eaque
        blanditiis architecto fugiat veritatis voluptatem odit, temporibus, aut
        cumque assumenda cupiditate hic natus laudantium accusamus obcaecati
        pariatur nobis laborum et! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Architecto, nobis.
      </p>
      <div className="flex justify-start items-center gap-9 mt-9 lg:gap-10 z-50 relative">
        <button
          onClick={() => handleButtonClick("about")}
          className="flex justify-center items-center gap-3 text-whiteCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500"
        >
          SOBRE NOSOTROS
          <img src={arrow} alt="arrow" className="w-3" />
        </button>
        <button
          onClick={() => handleButtonClick("project")}
          className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg hover:scale-105 hover:text-whiteCustom duration-500"
        >
          PROYECTO
          <img src={arrow} alt="arrow" className="w-3" />
        </button>
      </div>
    </article>
  );
};

export default WhatWeDo;
