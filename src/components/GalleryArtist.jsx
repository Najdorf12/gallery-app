const GalleryArtist = ({images}) => {
  return (
    <section>
      <figure className="w-full px-2">
        <img
           src={images[0]} 
          alt="img-gallery"
          className="object-cover object-center w-full h-full"
        />
      </figure>
      <div className="flex flex-wrap justify-center items-center gap-2 ">
        <div className="border border-stone-500 h-[200px] w-[45%]">Anatomy</div>
        <div className="border border-stone-500 h-[200px] w-[45%]">History</div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2 ">
        <div className="border border-stone-500 h-[200px] w-[45%]">
          Astronomy
        </div>
        <div className="border border-stone-500 h-[200px] w-[45%]">
          Philoshophy
        </div>
      </div>
    </section>
  );
};

export default GalleryArtist;
