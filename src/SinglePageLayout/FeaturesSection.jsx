import React from "react";
import fetone from "../../public/Features/fetone.png";
import fettwo from "../../public/Features/fettwo.png";
import fetthree from "../../public/Features/fetthree.png";
import fetfour from "../../public/Features/fetfour.png";

const FeaturesSection = () => {
  return (
    <div className="my-10">
        <div className="w-11/12 mx-auto font-Inter mt-14 mb-10">
            <h1 className="text-2xl font-bold">Our Featured Services</h1>
            <p className="text-sm">Discover the range of services provided by FliqaIndia</p>
        </div>
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div className="shadow-md text-center space-y-2 font-Inter">
          <img className="w-full" src={fetone} alt="" />
          <div className="p-5">
            <h1 className="text-lg font-bold">Pre Wedding Photoshoot</h1>
            <hr className="w-4/5 mx-auto" />
            <p className="text-sm">Starting at 25,000 (One Day)</p>
            <button className="px-5 py-1 bg-[#4C696D] rounded-md text-sm text-white">
              Know more
            </button>
          </div>
        </div>
        <div className="shadow-md text-center space-y-2 font-Inter">
          <img className="w-full" src={fettwo} alt="" />
          <div className="p-5">
            <h1 className="text-lg font-bold">Pre Wedding Photoshoot</h1>
            <hr className="w-4/5 mx-auto" />
            <p className="text-sm">Starting at 25,000 (One Day)</p>
            <button className="px-5 py-1 bg-[#4C696D] rounded-md text-sm text-white">
              Know more
            </button>
          </div>
        </div>
        <div className="shadow-md text-center space-y-2 font-Inter">
          <img className="w-full" src={fetthree} alt="" />
          <div className="p-5">
            <h1 className="text-lg font-bold">Pre Wedding Photoshoot</h1>
            <hr className="w-4/5 mx-auto" />
            <p className="text-sm">Starting at 25,000 (One Day)</p>
            <button className="px-5 py-1 bg-[#4C696D] rounded-md text-sm text-white">
              Know more
            </button>
          </div>
        </div>
        <div className="shadow-md text-center space-y-2 font-Inter">
          <img className="w-full" src={fetfour} alt="" />
          <div className="p-5">
            <h1 className="text-lg font-bold">Pre Wedding Photoshoot</h1>
            <hr className="w-4/5 mx-auto" />
            <p className="text-sm">Starting at 25,000 (One Day)</p>
            <button className="px-5 py-1 bg-[#4C696D] rounded-md text-sm text-white">
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
