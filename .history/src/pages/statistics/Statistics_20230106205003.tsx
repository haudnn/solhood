import React from "react";

const Statistics = () => {
  return (
    <div className="statistics py-[100px] bg-greyligt">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center pb-10 gap-x-10">
          <span className="text-2xl text-black cursor-pointer font-dela">
            For the day
          </span>
          <span className="text-2xl cursor-pointer text-greydark font-dela">
            For all the time
          </span>
        </div>
        <div className="w-full px-[150px]">
          <div className="grid">
            <div className="row">
              <div className="col l-5">
                <div className="p-10 bg-white shadow-lg rounded-xl">
                  <div>
                    <h4 className="pb-2 text-2xl text-black font-dela">
                      Today's statistics
                    </h4>
                    <span className="text-base font-semibold text-greydark">
                      Your statistics on all activities
                    </span>
                  </div>
                  <div className="flex items-center justify-around py-5 ">
                    <div className="flex flex-col items-center justify-center w-full line-long">
                        <span className="mb-1 text-5xl font-dela">0<span className="text-cyandark">+</span></span>
                        <span className="text-lg font-semibold text-greydark">
                            words studied
                        </span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <span className="mb-1 text-5xl font-dela">0<span className="text-cyandark">%</span></span>
                        <span className="text-lg font-semibold text-greydark">
                            correct answers
                        </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div>
                        
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-7">212</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
