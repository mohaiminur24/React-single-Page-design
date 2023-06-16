import React from "react";
import blogone from "../../public/ourblog/ourblogone.png";
import blogtwo from "../../public/ourblog/ourblogtwo.png";
import blogthree from "../../public/ourblog/ourblogthree.png";

const OurBlog = () => {
  return (
    <div className="w-full h-96 bg-[#DDF8F3] my-10 flex items-center">
      <div className="grid-cols-3 w-11/12 mx-auto grid gap-5 justify-center items-center">
        <div className="relative">
          <img className="w-full h-full" src={blogone} alt="" />
          <div className="absolute top-0 left-1 h-[calc(100%-10px)] bg-opacity-40 text-white rounded-md px-10 py-5 bg-black">
            <p className="font-semibold">Featured on: Sep 15, 2021</p>
            <h1 className="text-5xl font-Inter">
              Wedding <br /> Photography <br />
              at Goa
            </h1>
          </div>
        </div>
        <div className="relative">
          <img src={blogtwo} alt="" />
          <div className="absolute top-0 left-1 h-[calc(100%-10px)] bg-opacity-40 text-white rounded-md px-10 py-5 bg-black">
            <p className="font-semibold">Featured on: Sep 15, 2021</p>
            <h1 className="text-5xl font-Inter">
              Photography: <br />
              Expectations
              <br />
              vs Reality
            </h1>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between font-Inter mb-3">
            <h1>Treading Now</h1>
            <button className="uppercase">View all</button>
          </div>
          <div className="flex border-b gap-2">
            <img className="w-24" src={blogthree} alt="" />
            <div className="text-xs font-Inter">
              <h1 className="font-semibold mb-2">
                Creative Industries are on the verge of depletion due to
                COVID-19
              </h1>
              <p>
                In a period where many industries remain highly unclear, others
                want to grasp how COVID-19 impact
              </p>
            </div>
          </div>
          <div className="flex border-b gap-2">
            <img className="w-24" src={blogone} alt="" />
            <div className="text-xs font-Inter">
              <h1 className="font-semibold mb-2">
                Creative Industries are on the verge of depletion due to
                COVID-19
              </h1>
              <p>
                In a period where many industries remain highly unclear, others
                want to grasp how COVID-19 impact
              </p>
            </div>
          </div>
          <div className="flex border-b gap-2">
            <img className="w-24" src={blogtwo} alt="" />
            <div className="text-xs font-Inter">
              <h1 className="font-semibold mb-2">
                Creative Industries are on the verge of depletion due to
                COVID-19
              </h1>
              <p>
                In a period where many industries remain highly unclear, others
                want to grasp how COVID-19 impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
