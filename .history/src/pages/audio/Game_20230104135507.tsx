import React from "react";
import playIcon from "../../assets/imgs/play-icon.png";
import { AiFillHeart } from "react-icons/ai";
const Game = () => {
  return (
    <div className="game bg-greyligt">
      <div className="flex flex-col items-center justify-center wrapper-calc">
        <div className="flex flex-col items-center justify-center">
          <div className="hover:bg-cyandark mb-5 flex flex-col items-center justify-center w-[148px] h-[148px] rounded-[50%] border-4 border-solid border-cyandark cursor-pointer">
            <img src={playIcon} alt="" className="object-cover" />
            <span className="text-lg font-bold text-cyandark hover:text-white">Play</span>
          </div>
          <div className="flex gap-x-[10px]">
            <AiFillHeart className="w-8 h-8 text-pinklight" />
            <AiFillHeart className="w-8 h-8 text-pinklight" />
            <AiFillHeart className="w-8 h-8 text-pinklight" />
            <AiFillHeart className="w-8 h-8 text-pinklight" />
            <AiFillHeart className="w-8 h-8 text-pinklight" />
          </div>
          <div className="flex my-10 gap-x-5">
            <div className="hover:border-greydark hover:text-greydark text-greyicon cursor-pointer p-[14px] rounded-full border-4 border-solid border-greyicon flex items-center justify-center">
              <span className="text-lg font-bold">prêt hypothécaire</span>
            </div>
            <div className="hover:border-greydark hover:text-greydark text-greyicon cursor-pointer p-[14px] rounded-full border-4 border-solid border-greyicon flex items-center justify-center">
              <span className="text-lg font-bold">correct</span>
            </div>
            <div className="hover:border-greydark hover:text-greydark text-greyicon cursor-pointer p-[14px] rounded-full border-4 border-solid border-greyicon flex items-center justify-center">
              <span className="text-lg font-bold">selon laquelle</span>
            </div>
            <div className="hover:border-greydark hover:text-greydark text-greyicon cursor-pointer p-[14px] rounded-full border-4 border-solid border-greyicon flex items-center justify-center">
              <span className="text-lg font-bold">citer</span>
            </div>
            <div className="hover:border-greydark hover:text-greydark text-greyicon cursor-pointer p-[14px] rounded-full border-4 border-solid border-greyicon flex items-center justify-center">
              <span className="text-lg font-bold">nourriture</span>
            </div>
          </div>
          <div className="mb-10 text-cyandark cursor-pointer w-[142px] h-[44px] rounded-full bg-cyanlight flex items-center justify-center">
            <span className="text-lg font-bold">I don't know</span>
          </div>
          <div>
            <span className="font-semibold text-greydark">
              <span className="text-pinkdark">*</span>
              You can also use 
              {" "}
              <span className="inline-block px-2 py-1 bg-white rounded-lg">
                1-5
              </span>
              {" "}
              keys on the keyboard
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
