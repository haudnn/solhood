import React from "react";
import audio from "../../assets/imgs/staticAudio.png";
import sprint from "../../assets/imgs/staticSprint.png";
import chart from "../../assets/imgs/point-styling.png";
import noStatis from "../../assets/imgs/nostatis.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
const Statistics = () => {
  return (
    <div className="px-5 pt-5 pb-10 statistics bg-greyligt md:px-0 md:pb-0 md:pt-0">
      <div className="flex items-center justify-center w-full md:wrapper-calc">
        <div className="bg-white rounded-xl max-w-[800px] p-10">
          <div className="grid">
            <div className="row">
              <div className="col l-4 c-12">
                <div className="w-[60px] h-[60px] md:w-full md:h-full">
                  <img
                    src={noStatis}
                    alt="no-statis"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="col l-8 c-12">
                <div className="flex flex-col justify-center w-full h-full">
                  <p className="mb-2 text-3xl font-dela">
                    Sorry, statistics not available 🥺
                  </p>
                  <p className="text-base font-semibold text-greydark">
                    To get statistics and keep track of your results, register
                    or log in to your account
                  </p>
                  <div className="flex items-center mt-10 gap-x-5">
                      <div className="flex items-center gap-x-1" >
                        <a href="/" className="text-base font-bold ">
                            Log In
                        </a>
                        <AiOutlineArrowRight className="text-black"></AiOutlineArrowRight>
                      </div>
                    <button className="py-[14px] px-[22px] flex items-center justify-center rounded-[100px] bg-cyandark">
                      <a href="/" className="text-base font-semibold text-white">
                        Sign Up
                      </a>
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
