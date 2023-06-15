import React from "react";
import assone from "../../public/Associate/assone.png";
import asstow from "../../public/Associate/asstow.png";
import assthree from "../../public/Associate/assthree.png";
import assfour from "../../public/Associate/assfour.png";
import assfive from "../../public/Associate/assfive.png";

const AssociateSection = () => {
  return (
    <div className="bg-[#DDF8F3]">
      <div className="py-5 w-11/12 mx-auto flex justify-between">
        <div>
            <h1 className="font-inter font-bold text-2xl">Find Trusted Associate</h1>
            <p className="text-sm font-Inter">Find the best Fliqa Associate for your special day.</p>
        </div>
        <button>See More </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-11/12 mx-auto my-5 py-5">
        <div>
          <img src={assone} alt="" />
        </div>
        <div>
          <img src={asstow} alt="" />
        </div>
        <div>
          <img src={assthree} alt="" />
        </div>
        <div>
          <img src={assfour} alt="" />
        </div>
        <div>
          <img src={assfive} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AssociateSection;
