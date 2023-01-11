import React from "react";
import noStatis from "../assets/imgs/nostatis.svg";
const Me = () => {
  return (
    <div className="px-5 pt-5 pb-10 statistics bg-greyligt md:px-0 md:pb-0 md:pt-0">
      <div className="flex items-center justify-center w-full md:wrapper-calc">
        <div className="bg-white rounded-xl max-w-[800px] md:p-10 p-5">
          <div className="grid">
            <div className="row">
              <div className="col l-4 c-12">
                <div className="flex items-center justify-center w-full md:block">
                  <div className="w-[60px] h-[60px] md:w-full md:h-full ">
                    <img
                      src={noStatis}
                      alt="no-statis"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
              <div className="col l-8 c-12">
                <div className="flex flex-col justify-center w-full h-full">
                  <p className="mb-1 text-2xl text-center md:mb-2 md:text-3xl font-dela md:text-start">
                    Sorry, statistics not available 🥺
                  </p>
                  <p className="text-base font-semibold text-center text-greydark md:text-start">
                    To get statistics and keep track of your results, register
                    or log in to your account
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Me;
