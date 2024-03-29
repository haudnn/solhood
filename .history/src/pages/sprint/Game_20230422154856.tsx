import React, { useState } from "react";
import level from "../../assets/imgs/level.png";
const Game = () => {

    const [text, setText] = useState("hi");

    function speak() {
      if (text !== "") {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
      }
    }
  return (
    <div className="game bg-greyligt">
      <div className="flex flex-col items-center justify-center px-5 py-10 md:wrapper-calc md:px-0 md:py-0">
        <div
          style={{
            background: `conic-gradient(#2b788b ${36}deg, #c3dce3 0deg)`,
          }}
          className={`circular-progess before:w-[calc(100%-15px)] before:h-[calc(100%-15px)] w-full aspect-square relative md:w-[500px] rounded-[50%] flex items-center justify-center`}
        >
          <div className="z-10">
            <div>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={speak}>Speak</button>
            </div>
            <div className="flex items-center justify-between mb-5 md:mb-10 ">
              <div className="flex flex-col items-center line-long md:before:-right-[50px] before:-right-[20px]">
                <p className="text-3xl md:text-5xl font-dela">x2</p>
                <p className="text-base font-semibold md:text-lg text-greydark">
                  multiplier
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <p className="text-3xl md:text-5xl font-dela">30</p>
                <p className="text-base font-semibold md:text-lg text-greydark">
                  points
                </p>
              </div>
            </div>
            <div className="mb-5 md:mb-10">
              <div className="flex items-center justify-center gap-x-[10px] md:mb-[10px]">
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
                <p className="md:text-5xl font-dela md:mb-[10px] text-center text-3xl mb-[5px]">
                  negative
                </p>
                <p className="md:text-5xl font-dela md:mb-[10px] text-cyandark text-center text-3xl mb-[5px]">
                  perdre
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center md:gap-x-[10px] gap-x-1">
              <button className="px-5 py-3 rounded-full md:px-10 md:py-3 bg-cyanlight">
                <span className="text-base font-bold md:text-lg text-cyandark">
                  Right
                </span>
              </button>
              <button className="px-5 py-3 rounded-full md:px-10 md:py-3 bg-pinklight">
                <span className="text-base font-bold md:text-lg text-pinkdark">
                  Wrong
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden mt-10 md:block">
          <p className="text-base font-semibold text-greydark">
            *You can also use the {"<-"} or {"->"} keys on the keyboard{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Game;
