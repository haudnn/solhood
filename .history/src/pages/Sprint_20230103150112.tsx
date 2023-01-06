import React from "react";
import sprint from "../assets/imgs/sprint.png";
const Sprint = () => {
  return (
    <div>
      <div className="sprint bg-greyligt">
        <div className="flex items-center justify-center w-full h-full">
          <div className="p-10 bg-white rounded-xl">
            <div className="grid">
              <div className="row">
                <div className="col l-4">
                  <div>
                    <img
                      src={sprint}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="col l-8">
                  <div>
                    <div className="flex items-start mb-4 gap-x-3">
                      <p className="text-5xl font-dela">Sprint</p>
                      <div className="p-1 mt-3 rounded-lg bg-cyanlight">
                        <span className="text-sm font-semibold text-cyandark">
                          speed task
                        </span>
                      </div>
                    </div>
                    <p className="mb-8 text-base font-semibold text-greydark">
                      Trains the skill of fast translation. You have to choose
                      if the translation corresponds to the suggested word.
                    </p>
                    <div>
                        <p className="mb-2 text-base font-semibold text-greydark">Choose a level:</p>
                        <div className="flex items-center justify-between">
                           <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-greendesign">
                             <span className="text-base font-bold text-greendesign">A1</span>
                           </div>
                           <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-yellowdesign">
                             <span className="text-base font-bold text-yellowdesign">A2</span>
                           </div>
                           <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-orangedesign">
                             <span className="text-base font-bold text-orangedesign">B1</span>
                           </div>
                           <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-reddesign">
                             <span className="text-base font-bold text-reddesign">B2</span>
                           </div>
                           <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-pinkdesign">
                             <span className="text-base font-bold text-pinkdesign">C1</span>
                           </div>
                           <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[50%] border-solid border-2 border-cyandesign">
                             <span className="text-base font-bold text-cyandesign">C2</span>
                           </div>
                        </div>
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

export default Sprint;
