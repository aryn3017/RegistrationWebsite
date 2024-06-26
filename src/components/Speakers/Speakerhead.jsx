import React from "react";
import Navbar from "../Header/Navbar";
import Carousel from "../Carousel/Carousel";
import UnOrderedList5 from "./Listspeaker";
import UnOrderedList9 from "./Listspeaker2";

function Speakerhead() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              Speakers Sessions will be delivered by:{" "}
            </h1>
          </div>
          <Carousel />
          <div className="llg:mt-20 mt-10 ">
            <div className=" flex flex-row justify-center sm:flex-col ">
              <div className=" mr-5">
                <p className=" text-3xl sm:text-2xl sm:text-center font-bold mb-5 ">Key Notes : </p>
                <UnOrderedList5 />
              </div>
              <div className=" sm:mt-5">
                <p className=" text-3xl sm:text-2xl sm:text-center font-bold mb-5">Case Studies by Young Modellers:</p>
                <UnOrderedList9 />
              </div>
            </div>
          </div>
          <div className="mt-10 border-2 rounded-lg border-blue-900">
            <p className=" text-2xl text-center bg-green-400 p-5 text-blue-800 font-mono font-bold rounded-t-lg">
              WHO CAN ATTEND :{" "}
            </p>
            <p className=" text-2xl text-center bg-green-200 p-5 font-thin rounded-b-lg ">
              Professionals, researchers, and policy analyst working in energy
              domain, climate change, and decarbonising strategies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Speakerhead;
