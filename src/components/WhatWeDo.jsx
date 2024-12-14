import arrow from "/arrow.png";

const WhatWeDo = ({handleButtonClick}) => {
  return (
    <article className="flex flex-col justify-start items-start relative z-50 w-full cursor-default lg:max-w-[60%]">
      <h1 className="august-bold leading-none text-zinc-300 text-7xl lg:text-[8rem] 2xl:text-[10rem]">
        What we do
      </h1>
      <div className="w-80 h-[1px] bg-grayCustom mt-3"></div>
      
      <p className="text-sm  text-grayCustom font-text2 font-medium  text-balance pr-9 mt-6 lg:text-base lg:mt-6 max-w-[380px] xl:text-lg 2xl:text-xl ">
        Discover our unique approach to building robust digital solutions. We
        provide cutting-edge strategies to empower your brand online. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis eaque blanditiis architecto fugiat veritatis voluptatem odit, temporibus, aut cumque assumenda cupiditate hic natus laudantium accusamus obcaecati pariatur nobis laborum et! Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, nobis. At, magnam voluptatum architecto, odio nesciunt possimus hic inventore a incidunt perferendis corporis. Perspiciatis, sit quaerat dolore eaque laudantium voluptatibus! 
      </p>
      <div className="flex justify-start items-center gap-9 mt-9 lg:gap-10 z-50 relative">
        <button
          onClick={() => handleButtonClick("about")}
          className="flex justify-center items-center gap-3 text-grayCustom border-b border-grayCustom pb-1 pl-1 lg:text-lg"
        >
          ABOUT US
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
  );
};

export default WhatWeDo;
