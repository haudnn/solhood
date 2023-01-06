import React from "react";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa"
const TextBook = () => {
  return (
    <div className="pt-10 textbook bg-greyligt">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-[1180px] w-full p-5 bg-white rounded-lg">
          <div className="grid">
            <div className="row">
              <div className="col l-6">
                <div className="flex items-center gap-x-5">
                    <div className="flex items-center justify-center h-8 gap-x-2 line-long">
                        <FaGraduationCap className="w-8 h-full text-greyicon"></FaGraduationCap>
                        <span className="text-xl font-bold leading-8 text-greydark">Textbook</span>
                    </div>
                    <div className="flex items-center justify-center h-8 text-black gap-x-2">
                        <FaBookOpen className="w-8 h-full"></FaBookOpen>
                        <span className="text-xl font-bold leading-8">Dictionary</span>
                    </div>
                </div>
              </div>
              <div className="col l-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBook;
