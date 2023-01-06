import React from "react";
import audio from "../../assets/imgs/staticAudio.png";
import sprint from "../../assets/imgs/staticSprint.png";
import chart from "../../assets/imgs/point-styling.png";
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
                  {/* For the day */}
                  {/* <div>
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
                  <div className="flex gap-x-5">
                    <div>
                      <img src={sprint} alt="sprint" className="object-cover" />
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
                        <span className="text-black">0</span> words studied
                      </p>
                      <p className="font-semibold text-greydark">
                        <span className="text-black">0%</span> correct answers
                      </p>
                      <p className="font-semibold text-greydark">
                        <span className="text-black">0</span> best series of
                        correct answers
                      </p>
                    </div>
                  </div>
                  <div className="my-[18px] w-full h-[2px] bg-greymedium"></div>
                  <div className="flex gap-x-5">
                    <div>
                      <img src={audio} alt="sprint" className="object-cover" />
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
                        <span className="text-black">0</span> words studied
                      </p>
                      <p className="font-semibold text-greydark">
                        <span className="text-black">0%</span> correct answers
                      </p>
                      <p className="font-semibold text-greydark">
                        <span className="text-black">0</span> best series of
                        correct answers
                      </p>
                    </div>
                  </div> */}
                  {/* For the time */}
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
                  <div className="flex gap-x-5">
                    <div>
                      <img src={sprint} alt="sprint" className="object-cover" />
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
                        <span className="text-black">0</span> words studied
                      </p>
                      <p className="font-semibold text-greydark">
                        <span className="text-black">0%</span> correct answers
                      </p>
                      <p className="font-semibold text-greydark">
                        <span className="text-black">0</span> best series of
                        correct answers
                      </p>
                    </div>
                  </div>
                  <div className="my-[18px] w-full h-[2px] bg-greymedium"></div>
                  <div className="flex gap-x-5">
                    <div>
                      <img src={audio} alt="sprint" className="object-cover" />
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
                        <span className="text-black">0</span> words studied
                      </p>
                      <p className="font-semibold text-greydark">
                        <span className="text-black">0%</span> correct answers
                      </p>
                      <p className="font-semibold text-greydark">
                        <span className="text-black">0</span> best series of
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
      </div>
    </div>
  );
};

export default Statistics;
