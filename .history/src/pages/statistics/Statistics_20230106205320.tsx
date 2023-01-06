import React from "react";
import audiogame from "../../assets/imgs/audiogame.svg";
import sprint from "../../assets/imgs/sprint.png";
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
                      <span className="mb-1 text-5xl font-dela">
                        0<span className="text-cyandark">+</span>
                      </span>
                      <span className="text-lg font-semibold text-greydark">
                        words studied
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                      <span className="mb-1 text-5xl font-dela">
                        0<span className="text-cyandark">%</span>
                      </span>
                      <span className="text-lg font-semibold text-greydark">
                        correct answers
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div>
                      <img src={sprint} alt="sprint" className="object-cover" />
                    </div>
                    <div>
                      <div className="flex items-start mb-4 gap-x-3">
                        <p className="text-3xl font-dela">Audio-Call</p>
                        <div className="px-2 mt-3 rounded-md bg-cyanlight">
                          <span className="text-sm font-semibold text-cyandark">
                            audition task
                          </span>
                        </div>
                      </div>
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
