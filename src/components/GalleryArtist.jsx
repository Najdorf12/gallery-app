import { useState } from "react";

const GalleryArtist = ({ obra }) => {
  console.log(obra);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="flex flex-col gap-12 lg:flex-row py-1">
        <figure
          className="w-full px-2 flex justify-center items-center lg:w-1/2"
          onClick={() => handleImageClick(obra?.image)}
        >
          <img
            src={obra?.image}
            alt="img-gallery"
            className="object-contain object-center w-full h-full max-w-[500px] xl:max-w-[550px] cursor-pointer"
          />
        </figure>

        <section className="">
          <div className="grid grid-cols-2 grid-rows-3 gap-1 text-balance px-3 ">
            <div className="relative w-full bg-blackCustom border-l-[2px] border-grayCustom pl-3 flex flex-col  pt-1 pb-2 rounded-md">
              <i className="bx bxs-color text-3xl -ml-1 text-redCustom"></i>
              <h6 className="text-grayCustom font-text2 text-base mt-7">
                Philosophy
              </h6>
              <p className="text-grayCustom font-text2 text-sm">
                {obra?.description?.detail1}
              </p>
            </div>
           
            <div className="col-span-2 w-full bg-blackCustom border-l-[2px] border-grayCustom pl-3 font-text2 flex items-end text-grayCustom">
              {obra?.description?.detail5}
            </div>
          </div>
        </section>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 w-full  bg-black bg-opacity-85 flex justify-center items-center z-50 overflow-hidden">
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={closeModal}
          >
            ✕
          </button>
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-[98vw] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryArtist;
