import React from "react";
import banner from "../../public/Discoversection/background.png";
import frameone from "../../public/Discoversection/frameone.png";
import frametwo from "../../public/Discoversection/frametwo.png";
import framethree from "../../public/Discoversection/framethree.png";
import framefour from "../../public/Discoversection/framefour.png";

const DiscoverSection = () => {
  return (
    <div className="my-10">
      <div className="w-full h-96 relative">
        <img className="w-full h-full" src={banner} alt="" />
        <div className="absolute top-10 left-10">
          <div className="text-white font-Railway grid grid-cols-2 overflow-hidden">
            <div>
              <h1 className="text-5xl font-bold">
                <span className="font-normal">Discover</span>
                <br />
                Graphic Design Ideas <br />
                and services
              </h1>
              <h2 className="text-lg uppercase mt-3">
                From branding to marketing
              </h2>
              <div className="flex mt-5">
                <input
                  className="bg-white w-80 outline-none rounded-full px-5 py-2 text-xs font-Cinzel text-black"
                  placeholder="what kind of design you are looking for?"
                  type="text"
                />
                <button className="px-10 -ml-8 py-2 bg-stone-800 rounded-full">
                  submit
                </button>
              </div>
            </div>
            <div className="flex justify-end items-center gap-5">
                <img className="border-black border-4 mt-10 w-40" src={frameone} alt="" />
                <img className="border-black border-4 mb-20 w-40" src={frametwo} alt="" />
                <img className="border-black border-4 mt-8 w-40" src={framethree} alt="" />
                <img className="border-black border-4 mb-10 w-40" src={framefour} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;
