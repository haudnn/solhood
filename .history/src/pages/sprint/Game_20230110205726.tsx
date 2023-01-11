import React from "react";
import level from "../../assets/imgs/level.png";
const Game = () => {
  return (
    <div className="game bg-greyligt">
      <div className="flex flex-col items-center justify-center px-5 md:wrapper-calc md:px-0">
        <div style={{background: `conic-gradient(#2b788b ${270}deg, #c3dce3 0deg)`}} className="circular-progess before:w-[322px] before:h-[322px] w-[337px] h-[337px] md:before:w-[485px] md:before:h-[485px] relative md:w-[500px] md:h-[500px] rounded-[50%] flex items-center justify-center">
          <div className="relative">
            <div className="flex items-center justify-between mb-10 ">
              <div className="flex flex-col items-center line-long before:-right-[50px]">
                <p className="text-5xl font-dela">x2</p>
                <p className="text-lg font-semibold text-greydark">
                  multiplier
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <p className="text-5xl font-dela">30</p>
                <p className="text-lg font-semibold text-greydark">points</p>
              </div>
            </div>
            <div className="mb-10">
              <div className="flex items-center justify-center gap-x-[10px] mb-[10px]">
                <div>
                  <img
                    src={level}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <img
                    src={level}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <img
                    src={level}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div>
                <p className="md:text-5xl font-dela mb-[10px] text-center text-3xl">
                  negative
                </p>
                <p className="md:text-5xl font-dela mb-[10px] text-cyandark text-center text-3xl">
                  perdre
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-[10px]">
              <button className="px-10 py-3 rounded-full bg-cyanlight">
                <span className="text-lg font-bold text-cyandark">Right</span>
              </button>
              <button className="px-10 py-3 rounded-full bg-pinklight">
                <span className="text-lg font-bold text-pinkdark">Wrong</span>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden mt-10 md:block">
            <p className="text-base font-semibold text-greydark">*You can also use the {"<-"} or {"->"} keys on the keyboard  </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
