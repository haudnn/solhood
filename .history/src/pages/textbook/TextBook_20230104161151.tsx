import React from "react";
import { FaGraduationCap } from "react-icons/fa"
const TextBook = () => {
  return (
    <div className="pt-10 textbook bg-greyligt">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-[1180px] w-full p-5 bg-white rounded-lg">
          <div className="grid">
            <div className="row">
              <div className="col l-6">
                <div className="flex items-center">
                    <div className="flex items-center justify-center w-full h-full gap-x-2">
                        <FaGraduationCap className="h-full text-greyicon"></FaGraduationCap>
                        <span className="text-xl font-bold text-greydark">Textbook</span>
                    </div>
                    <div>

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
