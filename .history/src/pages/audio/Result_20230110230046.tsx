import React from "react";
import books from "../../assets/imgs/books.svg";
import play from "../../assets/imgs/play.png";
import { AiFillHeart } from "react-icons/ai";
import sprintResultMobile from "../../assets/imgs/sprintResultMobile.svg";
const Result = () => {
  return (
    <div className="result bg-greyligt">
      <div className="md:max-w-[1300px] md:m-auto md:wrapper-calc">
        <div className="flex items-center justify-center w-full h-full px-5 pt-10 md:px-0 md:pt-0">
          <div className="grid">
            <div className="row">
              <div className="col l-6 c-12">
                <div className="p-10 mb-5 bg-white rounded-lg shadow-lg md:mb-0">
                  <div className="grid">
                    <div className="row">
                      <div className="col l-6 c-12">
                        <div className="hidden md:block">
                          <img
                            src={books}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex items-center justify-center md:hidden">
                          <img
                            src={sprintResultMobile}
                            alt=""
                            className="object-cover w-[80px] h-[80px]"
                          />
                        </div>
                      </div>
                      <div className="col l-6 c-12">
                        <div>
                          <p className="text-2xl text-center md:mb-3 md:text-4xl font-dela md:text-start">
                            Your Sprint
                          </p>
                          <p className="text-base font-semibold text-center md:mb-3 text-greydark md:text-start">
                            You did pretty good!
                          </p>
                          <div className="flex items-center justify-center my-3 md:justify-between gap-x-5 md:gap-x-0 md:my-0">
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
                                      remains
                                    </p>
                                    <div className="flex flex-col items-center">
                                      <div className="flex items-center justify-center w-full h-full">
                                        <AiFillHeart className="inline-block w-full h-full text-pinkdark"></AiFillHeart>
                                        <p className="w-full h-full text-3xl font-dela">
                                          4
                                        </p>
                                      </div>
                                      <p className="text-base font-semibold text-greydark">
                                        lives
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
                  <div className="mt-[30px] flex items-center justify-center gap-x-[30px] mb-[18px] flex-col md:flex-row">
                    <div className="mb-2">
                      <a href="/" className="text-base font-bold md:text-lg">
                        Play it again
                      </a>
                    </div>
                    <div>
                      <a
                        href="/"
                        className="inline-block px-5 py-3 rounded-full bg-cyanlight"
                      >
                        <span className="text-base font-bold md:text-lg text-cyandark">
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
                      <div className="col l-6 c-12">
                        <div className="mb-10 md:mb-0">
                          <div className="flex items-start mb-4 gap-x-3">
                            <p className="text-xl md:text-2xl font-dela">
                              I know
                            </p>
                            <div className="px-2 rounded-md bg-cyanlight">
                              <span className="text-xs font-semibold md:text-sm text-cyandark">
                                15 words
                              </span>
                            </div>
                          </div>
                          <ul className="scroll overflow-y-scroll max-h-[256px]">
                            <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                              <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
                      <div className="col l-6 c-12">
                        <div>
                          <div className="flex items-start mb-4 gap-x-3">
                            <p className="text-xl md:text-2xl font-dela">
                              I don't know
                            </p>
                            <div className="px-2 rounded-md bg-pinklight">
                              <span className="text-xs font-semibold md:text-sm text-pinkdark">
                                15 words
                              </span>
                            </div>
                          </div>
                          <ul className="scroll overflow-y-scroll max-h-[256px]">
                            <li className="flex items-center flex-start gap-x-3 mb-[14px]">
                              <div className="flex items-center justify-center w-[40px] h-[40px] bg-greyligt cursor-pointer">
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
                                <img
                                  src={play}
                                  alt=""
                                  className="object-cover"
                                />
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
    </div>
  );
};

export default Result;
