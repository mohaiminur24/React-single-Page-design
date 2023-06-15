import React from "react";
import creativeone from "../../public/creativeone.png";
import creativetwo from "../../public/creativetwo.png";
import creativethree from "../../public/creativethree.png";
import creativefour from "../../public/creativefour.png";

const CreativePlatfromSection = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="text-center mt-5">
        <h1 className="text-5xl font-Cinzel font-bold">
          India's Leading Creative Platform
        </h1>
        <p className="text-lg text-gray-400 font-Railway">
          Experience hassle free booking Trusted by 2500+ Customer
        </p>
      </div>
      <div className="flex justify-center my-5">
        <input
          className="border w-4/12 px-5 py-2 text-center font-Railway text-sm rounded-full border-slate-700 outline-none"
          placeholder="Search service, blog and many more"
          type="text"
        />
        <input
          className="border w-44 px-5 py-2 text-center font-Railway text-sm rounded-full border-slate-700 outline-none bg-black text-white -ml-8"
          placeholder="Search service, blog and many more"
          type="submit"
          value="Search"
        />
      </div>
      <div className="my-10 font-Inter grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 grid justify-center items-center">
        <div className="flex justify-center items-center gap-5">
          <img className="w-24" src={creativeone} alt="" />
          <div>
            <h1 className="font-bold text-lg">Verified Reviews</h1>
            <p className="text-xs">For verified Reviewers</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <img className="w-24" src={creativetwo} alt="" />
          <div>
            <h1 className="font-bold text-lg">Top Articles</h1>
            <p className="text-xs">Helps you decide</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img className="w-24" src={creativethree} alt="" />
          <div>
            <h1 className="font-bold text-lg">Write Share Win Contest</h1>
            <p className="text-xs">Earn cash for reviews</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img className="w-24" src={creativefour} alt="" />
          <div>
            <h1 className="font-bold text-lg">MouthShut for Brands</h1>
            <p className="text-xs">Request a Demo</p>
          </div>
        </div>
      </div>
      <hr className="w-4/5 mx-auto border-black" />
    </div>
  );
};

export default CreativePlatfromSection;
