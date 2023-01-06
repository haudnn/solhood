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
                <div className="flex items-center">
                    <div className="flex items-center justify-center h-8 mr-5 gap-x-2 line-long before:-right-5">
                        <FaGraduationCap className="w-8 h-full text-greyicon"></FaGraduationCap>
                        <span className="text-xl font-bold leading-8 text-greydark">Textbook</span>
                    </div>
                    <div className="flex items-center justify-center h-8 ml-5 text-black gap-x-2">
                        <FaBookOpen className="w-8 h-full"></FaBookOpen>
                        <span className="text-xl font-bold leading-8">Dictionary</span>
                    </div>
                </div>
              </div>
              <div className="col l-6">
                <div className="flex justify-end w-full h-full">
                    
                    113
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBook;
