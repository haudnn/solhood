import React from "react";
import audio from "../../assets/imgs/staticAudio.png";
import sprint from "../../assets/imgs/staticSprint.png";
import chart from "../../assets/imgs/point-styling.png";
const Statistics = () => {
  return (
    <div className="statistics bg-greyligt">
      <div className="flex items-center justify-center w-full wrapper-calc">
        <div className="bg-white rounded-xl max-w-[800px] p-10">
          <div className="grid">
            <div className="row">
              <div className="col l-4">
                <div>
                  <img
                    src={audio}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="col l-8">
                <div className="flex flex-col justify-center w-full h-full">
                  <div className="flex items-start mb-4 gap-x-3">
                    <p className="text-5xl font-dela">Audio-Call</p>
                    <div className="px-2 mt-3 rounded-md bg-cyanlight">
                      <span className="text-sm font-semibold text-cyandark">
                        audition task
                      </span>
                    </div>
                  </div>
                  <p className="mb-8 text-base font-semibold text-greydark">
                    The Audio-Call training develops vocabulary and improves
                    listening comprehension.
                  </p>
                  <div className="pr-5">
                    <p className="mb-2 text-base font-semibold text-greydark">
                      Choose a level:
                    </p>
                    <div className="flex items-center justify-start mb-10 gap-x-6">
                      <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-greendesign">
                        <span className="text-base font-bold text-greendesign">
                          A1
                        </span>
                      </div>
                      <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-yellowdesign">
                        <span className="text-base font-bold text-yellowdesign">
                          A2
                        </span>
                      </div>
                      <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-orangedesign">
                        <span className="text-base font-bold text-orangedesign">
                          B1
                        </span>
                      </div>
                      <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-reddesign">
                        <span className="text-base font-bold text-reddesign">
                          B2
                        </span>
                      </div>
                      <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-pinkdesign">
                        <span className="text-base font-bold text-pinkdesign">
                          C1
                        </span>
                      </div>
                      <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-cyandesign">
                        <span className="text-base font-bold text-cyandesign">
                          C2
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="w-[132px] h-[44px] flex items-center justify-center rounded-full bg-cyandark">
                      <span className="text-base font-semibold text-white">
                        Get started
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="py-[100px]">
          <div className="flex items-center justify-center pb-10 gap-x-10">
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
                        All-time statistics
                      </h4>
                      <span className="text-base font-semibold text-greydark">
                        Your statistics on all activities
                      </span>
                    </div>
                    <div className="flex items-center justify-around py-5 ">
                      <div className="flex flex-col items-center justify-center w-full line-long">
                        <span className="mb-1 text-5xl font-dela">
                          10<span className="text-cyandark">+</span>
                        </span>
                        <span className="text-lg font-semibold text-greydark">
                          words studied
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-center w-full">
                        <span className="mb-1 text-5xl font-dela">
                          43<span className="text-cyandark">%</span>
                        </span>
                        <span className="text-lg font-semibold text-greydark">
                          correct answers
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-x-5">
                      <div>
                        <img
                          src={sprint}
                          alt="sprint"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-start mb-2 gap-x-3">
                          <p className="text-xl font-dela">Sprint</p>
                          <div className="px-2 py-1 rounded-md bg-cyanlight">
                            <span className="text-sm font-semibold text-cyandark">
                              speed task
                            </span>
                          </div>
                        </div>
                        <p className="font-semibold text-greydark">
                          <span className="text-black">5</span> words studied
                        </p>
                        <p className="font-semibold text-greydark">
                          <span className="text-black">90%</span> correct
                          answers
                        </p>
                        <p className="font-semibold text-greydark">
                          <span className="text-black">7</span> best series of
                          correct answers
                        </p>
                      </div>
                    </div>
                    <div className="my-[18px] w-full h-[2px] bg-greymedium"></div>
                    <div className="flex gap-x-5">
                      <div>
                        <img
                          src={audio}
                          alt="sprint"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-start mb-2 gap-x-3">
                          <p className="text-xl font-dela">Audio-Call</p>
                          <div className="px-2 py-1 rounded-md bg-cyanlight">
                            <span className="text-sm font-semibold text-cyandark">
                              audition task
                            </span>
                          </div>
                        </div>
                        <p className="font-semibold text-greydark">
                          <span className="text-black">5</span> words studied
                        </p>
                        <p className="font-semibold text-greydark">
                          <span className="text-black">90%</span> correct
                          answers
                        </p>
                        <p className="font-semibold text-greydark">
                          <span className="text-black">7</span> best series of
                          correct answers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col l-7">
                  <div className="h-full p-5 bg-white shadow-lg rounded-xl ">
                    <div className="flex items-center justify-center">
                      <div>
                        <img src={chart} alt="chart" className="object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Statistics;
