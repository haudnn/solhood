import React, { useState } from "react";
import playIcon from "../../assets/imgs/play-icon.png";
import playIconHover from "../../assets/imgs/play-icon-hover.png";
import { AiFillHeart } from "react-icons/ai";
import play from "../../assets/imgs/play.png";
const Game = () => {
  const [isResulted, setIsResulted] = useState<Boolean>(false);
  const handleResult = () => {
    setIsResulted((prev) => !prev);
  };
  return (
    <div className="game bg-greyligt">
      <div className="flex flex-col items-center justify-center md:wrapper-calc">
        <div className="flex flex-col items-center justify-center">
          {isResulted ? (
            <div className="flex flex-col items-center mb-5">
              <div
                style={{
                  backgroundImage: `url(${"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"})`,
                }}
                onClick={handleResult}
                className="bg-center bg-cover bg-no-repeat md:w-[148px] md:h-[148px] w-[100px] h-[100px] rounded-[50%] cursor-pointer"
              ></div>
              <div className="-translate-y-[20px] flex items-center px-5 py-2 bg-white rounded-full shadow-lg flex-start gap-x-3">
                <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                  <img src={play} alt="" className="object-cover" />
                </div>
                <div className="text-base font-semibold">
                  <span>food</span>
                  <span className="text-greydark"> {"-"} nourriture</span>
                </div>
              </div>
            </div>
          ) : (
            <div
              onClick={handleResult}
              className="transition group text-cyandark hover:bg-cyandark hover:text-white mb-5 flex flex-col items-center justify-center md:w-[148px] md:h-[148px] w-[100px] h-[100px] rounded-[50%] border-4 border-solid border-cyandark cursor-pointer"
            >
              <img
                src={playIcon}
                alt=""
                className="block object-cover group-hover:hidden md:w-[48px] md:h-[48px] w-10 h-10"
              />
              <img
                src={playIconHover}
                alt=""
                className="hidden object-cover group-hover:block w-10 h-10 md:w-[48px] md:h-[48px]"
              />
              <span className="text-sm font-bold md:text-lg ">Play</span>
            </div>
          )}
          <div className="flex gap-x-[10px]">
            {/* <AiFillHeart className="w-8 h-8 text-pinklight" /> */}
            <AiFillHeart className="w-8 h-8 text-pinkdark" />
            <AiFillHeart className="w-8 h-8 text-pinklight" />
            <AiFillHeart className="w-8 h-8 text-pinklight" />
            <AiFillHeart className="w-8 h-8 text-pinklight" />
            <AiFillHeart className="w-8 h-8 text-pinklight" />
          </div>
          <div className="flex flex-col my-10 gap-x-5 md:flex-row ">
            <div className="hover:border-greydark hover:text-greydark text-greyicon cursor-pointer md:p-[14px] rounded-full border-4 border-solid border-greyicon flex items-center justify-center">
              <span className="text-lg font-bold">prêt hypothécaire</span>
            </div>
            <div className="hover:border-greydark hover:text-greydark text-greyicon cursor-pointer md:p-[14px] rounded-full border-4 border-solid border-greyicon flex items-center justify-center">
              <span className="text-lg font-bold">correct</span>
            </div>
            {/* The word was selected */}
            <div className=" text-pinkdark cursor-pointer md:p-[14px] rounded-full border-4 border-solid border-pinkdark flex items-center justify-center">
              <span className="text-lg font-bold">selon laquelle</span>
            </div>
            {/* <div className="hover:border-greydark hover:text-greydark text-greyicon cursor-pointer md:p-[14px] rounded-full border-4 border-solid border-greyicon flex items-center justify-center">
              <span className="text-lg font-bold">selon laquelle</span>
            </div> */}
            <div className="hover:border-greydark hover:text-greydark text-greyicon cursor-pointer md:p-[14px] rounded-full border-4 border-solid border-greyicon flex items-center justify-center">
              <span className="text-lg font-bold">citer</span>
            </div>
            {/* The word correct */}
            <div className=" text-cyandark cursor-pointer md:p-[14px] rounded-full border-4 border-solid border-cyandark flex items-center justify-center">
              <span className="text-lg font-bold">nourriture</span>
            </div>
            {/* <div className="hover:border-greydark hover:text-greydark text-greyicon cursor-pointer md:p-[14px] rounded-full border-4 border-solid border-greyicon flex items-center justify-center">
              <span className="text-lg font-bold">nourriture</span>
            </div> */}
          </div>
          <div className="mb-10 text-cyandark cursor-pointer p-[15px] rounded-full bg-cyanlight flex items-center justify-center">
            {/* If have the result */}
            {/* <span className="text-lg font-bold">Next</span> */}
            <span className="text-lg font-bold">I don't know</span>
          </div>
          <div className="hidden md:block">
            <span className="font-semibold text-greydark">
              <span className="text-pinkdark">*</span>
              You can also use{" "}
              <span className="inline-block px-2 py-1 bg-white rounded-lg">
                1-5
              </span>{" "}
              keys on the keyboard
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
