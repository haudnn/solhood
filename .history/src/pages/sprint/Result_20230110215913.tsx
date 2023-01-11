import React from "react";
import books from "../../assets/imgs/books.svg";
import play from "../../assets/imgs/play.png";
const Result = () => {
  return (
    <div className="result bg-greyligt">
      <div className="max-w-[1300px] m-auto wrapper-calc">
        <div className="flex items-center justify-center w-full h-full">
          <div className="grid">
            <div className="row">
              <div className="col l-6 c-12">
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
                              <div
                                style={{
                                  background: `conic-gradient(#2b788b ${270}deg, #c3dce3 0deg)`,
                                }}
                                className="circular-progess-small relative w-[120px] h-[120px] rounded-[50%] flex items-center justify-center"
                              >
                                <div className="relative">
                                  <div className="p-2 text-center ">
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
                            <div>
                              <div
                                style={{
                                  background: `conic-gradient(#639b6d ${360}deg, #c3dce3 0deg)`,
                                }}
                                className="circular-progess-small relative w-[120px] h-[120px] rounded-[50%] flex items-center justify-center"
                              >
                                <div className="relative">
                                  <div className="p-2 text-center">
                                    <p className="text-base font-semibold">
                                      40/
                                    </p>
                                    <div className="flex flex-col items-center">
                                      <p className="text-3xl font-dela">30</p>
                                      <p className="text-base font-semibold text-greydark">
                                        words
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
                  <div className="mt-[30px] flex items-center justify-center gap-x-[30px] mb-[18px]">
                    <div>
                      <a href="/" className="text-lg font-bold">
                        Play it again
                      </a>
                    </div>
                    <div>
                      <a
                        href="/"
                        className="inline-block px-5 py-3 rounded-full bg-cyanlight"
                      >
                        <span className="text-lg font-bold text-cyandark">
                          Go to textbook
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-6 c-12">
                <div className="p-10 bg-white rounded-lg shadow-lg">
                  <div className="grid">
                    <div className="row">
                      <div className="col l-6">
                        <div className="flex items-start mb-4 gap-x-3">
                          <p className="text-2xl font-dela">I know</p>
                          <div className="px-2 rounded-md bg-cyanlight">
                            <span className="text-sm font-semibold text-cyandark">
                              15 words
                            </span>
                          </div>
                        </div>
                        <ul className="scroll overflow-y-scroll max-h-[256px]">
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="col l-6">
                        <div className="flex items-start mb-4 gap-x-3">
                          <p className="text-2xl font-dela">I don't know</p>
                          <div className="px-2 rounded-md bg-pinklight">
                            <span className="text-sm font-semibold text-pinkdark">
                              15 words
                            </span>
                          </div>
                        </div>
                        <ul className="scroll overflow-y-scroll max-h-[256px]">
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                          <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                            <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                              <img src={play} alt="" className="object-cover" />
                            </div>
                            <div className="text-base font-semibold">
                              <span>lone</span>
                              <span className="text-greydark">
                                {" "}
                                {"-"} solitaire
                              </span>
                            </div>
                          </li>
                        </ul>
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

export default Result;
