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
                      <div className="p-[5px] rounded-lg bg-cyanlight">
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
                        <div>
                           <div className="p-2 rounded-[50%] border-solid border border-[green]">
                             <span className="text-lg font-semibold text-green">A1</span>
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
