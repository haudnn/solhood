import React from "react";
import sprint from "../../assets/imgs/sprint.png";
import sprintMobile from "../../assets/imgs/sprintMobile.svg";
const Sprint = () => {
  return (
    <div className="sprint bg-greyligt">
      <div className="flex items-center justify-center px-5 md:wrapper-calc md:px-0">
        <div className="bg-white rounded-xl max-w-[800px] p-5 md:p-0">
          <div className="grid">
            <div className="row">
              <div className="col l-4 c-12">
                <div className="hidden md:block">
                  <img
                    src={sprint}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="flex items-center justify-center md:hidden">
                    <img
                      src={sprintMobile}
                      alt=""
                      className="object-cover w-[80px] h-[80px]"
                    />
                  </div>
              </div>
              <div className="col l-8 c-12">
                <div className="flex flex-col justify-center w-full h-full">
                  <div className="flex items-start justify-center mb-4 gap-x-3 md:justify-start">
                    <p className="text-3xl md:text-5xl font-dela">Sprint</p>
                    <div className="px-2 mt-1 rounded-md md:mt-3 bg-cyanlight">
                      <span className="text-sm font-semibold text-cyandark">
                        speed task
                      </span>
                    </div>
                  </div>
                  <p className="mb-8 text-base font-semibold text-center text-greydark md:text-start">
                    Trains the skill of fast translation. You have to choose if
                    the translation corresponds to the suggested word.
                  </p>
                  <div className="pr-5">
                    <p className="mb-2 text-base font-semibold text-greydark">
                      Choose a level:
                    </p>
                    <div className="flex items-center justify-between mb-10 md:justify-start md:gap-x-6">
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
                  <div className="flex items-center justify-center md:justify-start">
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
      </div>
    </div>
  );
};

export default Sprint;
