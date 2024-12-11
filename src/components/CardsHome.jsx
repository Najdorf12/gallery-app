const CardsHome = ({ artist }) => {
  return (
    <div className="relative z-50 border-l-[2px] border-b-[2px] border-zinc-600 w-[160px] rounded-sm h-[110px] pl-3 pt-1 lg:pl-3 lg:w-[220px] lg:h-[135px] xl:w-[237px] xl:h-[140px]  2xl:w-[250px] 2xl:h-[160px] hover:border-white duration-500 cursor-pointer">
      <figure>
        <img src={artist?.icon} alt="icon" className="w-9 lg:w-12 xl:w-12 2xl:w-16" />
      </figure>
      <article className="text-sm mt-4 font-text2 font-normal text-balance lg:text-base xl:text-lg lg:mt-6 2xl:text-lg">
        <h6 className="text-whiteCustom">{artist?.name}</h6>
        <p  className="text-[12px] text-grayCustom lg:text-base 2xl:text-base">{artist?.content}</p>
      </article>
    </div>
  );
};

export default CardsHome;
