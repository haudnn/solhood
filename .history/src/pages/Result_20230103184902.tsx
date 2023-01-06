import React from "react";
import books from "../assets/imgs/books.svg";
const Result = () => {
  return (
    <div className="result bg-greyligt">
      <div className="flex items-center justify-center wrapper-calc">
        <div className="grid">
          <div className="row">
            <div className="col l-6">
              <div className="p-10 bg-white rounded-lg shadow-lg">
                <div className="grid">
                  <div className="row">
                    <div className="col l-6">
                      <div>
                        <img
                          src={books}
                          alt=""
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                    <div className="col l-6">
                      <div>
                        <p className="mb-3 text-4xl font-dela">Your Sprint</p>
                        <p className="mb-3 text-base font-semibold text-greydark">
                          You did pretty good!
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <div style={{ background: `conic-gradient(#2b788b ${270}deg, #c3dce3 0deg)`, }} className="circular-progess-small relative w-[120px] h-[120px] rounded-[50%] flex items-center justify-center">
                              <div className="relative">
                                <div className="text-center">
                                  <p className="text-base font-semibold">
                                    retrieved
                                  </p>
                                  <div className="flex flex-col items-center">
                                    <p className="text-3xl font-dela">240</p>
                                    <p className="text-base font-semibold text-greydark">
                                      points
                                    </p>
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
            </div>
            <div className="col l-6">
              <div className="p-10 bg-white rounded-lg shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
