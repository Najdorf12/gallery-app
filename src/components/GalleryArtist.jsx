import { useState } from "react";

const GalleryArtist = ({ obra }) => {
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

        <section className="px-2">
          {/* 01 */}
          <div className="relative w-[200px] bg-blackCustom border-l-[2px] border-grayCustom pl-3 flex flex-col  pt-1 pb-2 rounded-md mt-1">
            <i className="bx bxs-color text-3xl -ml-1 text-redCustom lg:text-4xl"></i>
            <h6 className="text-grayCustom font-text2 text-base mt-7 lg:text-lg">
              Philosophy
            </h6>
            <p className="text-balance pr-6 text-grayCustom font-text2 text-sm lg:text-base">
              {obra?.description?.detail1}
            </p>
          </div>
          {/* 02 */}
          <div className="relative w-[350px] bg-grayCustom border-l-[2px] border-grayCustom pl-3 flex flex-col  pt-1 pb-2 rounded-md mt-1">
            <i className="bx bxs-color text-3xl -ml-1 text-redCustom lg:text-4xl"></i>
            <h6 className="text-whiteCustom font-text2 text-base mt-7 lg:text-lg">
              Anatomy
            </h6>
            <p className="text-balance pr-6 text-zinc-300 font-text2 text-sm lg:text-base">
              {obra?.description?.detail2}
            </p>
          </div>
          {/* 03 */}
          <div className="flex gap-1">
            <div className="relative w-[33.33%] bg-whiteCustom border-l-[2px] border-grayCustom pl-3 flex flex-col  pt-1 pb-2 rounded-md mt-1">
              <i className="bx bxs-color text-3xl -ml-1 text-redCustom lg:text-4xl"></i>
              <h6 className="text-grayCustom font-text2 text-base mt-7 lg:text-lg">
                History
              </h6>
              <p className="text-balance pr-6 text-grayCustom font-text2 text-sm lg:text-base">
                {obra?.description?.detail1}
              </p>
            </div>
            <div className="relative w-[33.33%] bg-blackCustom border-l-[2px] border-grayCustom pl-3 flex flex-col  pt-1 pb-2 rounded-md mt-1">
              <i className="bx bxs-color text-3xl -ml-1 text-redCustom lg:text-4xl"></i>
              <h6 className="text-grayCustom font-text2 text-base mt-7 lg:text-lg">
                History
              </h6>
              <p className="text-balance pr-6 text-grayCustom font-text2 text-sm lg:text-base">
                {obra?.description?.detail4}
              </p>
            </div>
            <div className="relative w-[33.33%] bg-redCustom border-l-[2px] border-grayCustom pl-3 flex flex-col  pt-1 pb-2 rounded-md mt-1">
              <i className="bx bxs-color text-3xl -ml-1 text-redCustom lg:text-4xl"></i>
              <h6 className="text-grayCustom font-text2 text-base mt-7 lg:text-lg">
                History
              </h6>
              <p className="text-balance pr-6 text-grayCustom font-text2 text-sm lg:text-base">
                {obra?.description?.detail5}
              </p>
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
