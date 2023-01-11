import React, {useRef} from "react";
import level from "../../assets/imgs/level.png";
import useResize from "../../hooks/useResize";
const Game = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const { width, height } = useResize(componentRef)
  return (
    <div className="game bg-greyligt">
      <div className="flex flex-col items-center justify-center px-5 md:wrapper-calc md:px-0">
        <div ref={componentRef } style={{background: `conic-gradient(#2b788b ${270}deg, #c3dce3 0deg)`}} className={`circular-progess before:w-[${width - 15}px] before:h-[${width - 15}px] w-full h-[${width}px] md:before:w-[485px] md:before:h-[485px] relative md:w-[500px] md:h-[500px] rounded-[50%] flex items-center justify-center`}>
          <div className="relative">
            <div className="flex items-center justify-between mb-10 ">
              <div className="flex flex-col items-center line-long md:before:-right-[50px] before:-right-[20px]">
                <p className="text-3xl md:text-5xl font-dela">x2</p>
                <p className="text-base font-semibold md:text-lg text-greydark">
                  multiplier
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <p className="text-3xl md:text-5xl font-dela">30</p>
                <p className="text-base font-semibold md:text-lg text-greydark">points</p>
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
              <button className="px-5 py-3 rounded-full md:px-10 md:py-3 bg-cyanlight">
                <span className="text-base font-bold md:text-lg text-cyandark">Right</span>
              </button>
              <button className="px-5 py-3 rounded-full md:px-10 md:py-3 bg-pinklight">
                <span className="text-base font-bold md:text-lg text-pinkdark">Wrong</span>
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
