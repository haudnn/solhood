import React from "react";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa"
import { AiOutlineSetting } from "react-icons/ai"
import textbookSneaker from ".././../assets/imgs/textbookSneaker.png"
import textbookAudio from ".././../assets/imgs/textbookAudio.png"

const TextBook = () => {
  return (
    <div className="pt-10 textbook bg-greyligt">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-[1180px] w-full p-5 bg-white rounded-lg shadow-md">
          <div className="grid">
            <div className="row">
              <div className="col l-6">
                <div className="flex items-center w-full h-full">
                    <div className="flex items-center justify-center h-8 mr-5 cursor-pointer gap-x-2 line-long before:-right-5">
                        <FaGraduationCap className="w-8 h-full text-greyicon"></FaGraduationCap>
                        <span className="text-xl font-bold leading-8 text-greydark">Textbook</span>
                    </div>
                    <div className="flex items-center justify-center h-8 ml-5 text-black cursor-pointer gap-x-2">
                        <FaBookOpen className="w-8 h-full"></FaBookOpen>
                        <span className="text-xl font-bold leading-8">Dictionary</span>
                    </div>
                </div>
              </div>
              <div className="col l-6">
                <div className="flex items-center justify-end w-full h-full gap-x-[10px]">
                    <div className="flex items-center justify-start pr-10 cursor-pointer rounded-xl gap-x-2 bg-pinklight">
                        <img src={textbookSneaker} alt="" className="object-cover" />
                        <span className="text-base font-bold text-pinkdark">Sprint</span>
                    </div>
                    <div className="flex items-center justify-start pr-10 cursor-pointer rounded-xl gap-x-2 bg-cyanlight">
                        <img src={textbookAudio} alt="" className="object-cover" />
                        <span className="text-base font-bold text-cyandark">Audio-Call</span>
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer bg-greyligt">
                        <AiOutlineSetting className="w-5 h-5 text-greyicon"></AiOutlineSetting>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-10 gap-x-10">
            <div className="flex items-center justify-center pb-[10px] gap-x-2 border-b-2 border-solid border-black">
                <span className="text-2xl font-dela">A1</span>
                <div className="px-2 py-[2px] rounded-md bg-greendesign">
                    <span className="text-xs font-semibold text-white">Easy</span>
                </div>
            </div>
            <div className="flex items-center justify-center pb-[10px] gap-x-2 border-b-2 border-solid border-black">
                <span className="text-2xl font-dela">A2</span>
                <div className="px-2 py-[2px] rounded-md bg-greendesign">
                    <span className="text-xs font-semibold text-greendesign">Easy</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TextBook;
