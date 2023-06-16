import React from "react";
import offerone from '../../public/offersection/offerone.png'
import offertwo from '../../public/offersection/offertwo.png'
import offerthree from '../../public/offersection/offerthree.png'

const Bestoffers = () => {
  return (
    <div className="my-10 border-y">
      <div className="font-Inter my-5 text-center">
        <h1 className="text-2xl font-bold text-teal-700">Best Offers</h1>
        <p className="text-sm">Discover the best offers on our services</p>
      </div>
      <div className="my-5 grid lg:grid-cols-4 grid-cols-1 justify-center items-center">
        <img src={offerone} alt="" />
        <img src={offertwo} alt="" />
        <img src={offerthree} alt="" />
        <img src={offerone} alt="" />
      </div>
    </div>
  );
};

export default Bestoffers;
