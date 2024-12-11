const CardsHome = ({ artist }) => {
  return (
    <div className="relative z-50 border-l border-b border-grayCustom w-[160px] h-[110px] pl-3 lg:pl-5 lg:w-[200px] lg:h-[135px] 2xl:w-[250px] 2xl:h-[158px]">
      <figure>
        <img src={artist?.icon} alt="icon" className="w-10 lg:w-12 xl:w-16 2xl:w-20" />
      </figure>
      <article className="text-sm mt-4 font-text2 font-normal text-balance lg:text-base 2xl:text-lg">
        <h6 className="text-whiteCustom">{artist?.name}</h6>
        <p  className="text-[12px] text-grayCustom lg:text-sm 2xl:text-base">{artist?.content}</p>
      </article>
    </div>
  );
};

export default CardsHome;
