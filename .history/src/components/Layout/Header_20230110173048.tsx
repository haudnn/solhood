import React from "react";
import { BsJustifyLeft } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  return (
    <header className="py-[18px] md:py-5 border-b border-solid border-[grey-dark] bg-greyligt ">
      <div className="px-5 app-container md:px-0">
        <div className="grid">
          <div className="row">
            <div className="col c-4 md:hidden">
              <div className="flex items-center h-10 cursor-pointer">
                <BsJustifyLeft className="w-6 h-6"></BsJustifyLeft>
              </div>
              <div className=""> 
                <div className="fixed top-[77px] bottom-0 left-0 right-0 z-50 w-full max-w-full bg-white">
                  <div className="flex items-center justify-center w-full h-full">
                    <ul className="flex flex-col items-center justify-center gap-y-5">
                      <li>
                        <a
                          className="text-base font-semibold text-cyandark"
                          href="/"
                        >
                          Main
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-base font-semibold text-greydark"
                          href="/textbook"
                        >
                          Textbook
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-base font-semibold text-greydark"
                          href="/statistics"
                        >
                          Statistics
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-base font-semibold text-greydark"
                          href="/statistics"
                        >
                          Sprint
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-base font-semibold text-greydark"
                          href="/statistics"
                        >
                          Audio-call
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-6 c-4">
              <div className="flex items-center md:gap-x-[60px] md:h-full">
                <div className="w-full text-center line before:border-r-0 md:before:border-r-2 md:w-fit">
                  <a
                    href="/"
                    className="block text-lg text-black font-dela leading-[40px] md:leading-none"
                  >
                    Solhood
                  </a>
                </div>
                <div className="hidden md:block">
                  <ul className="flex items-center gap-x-[30px]">
                    <li>
                      <a
                        className="text-base font-semibold text-black"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-base font-semibold text-greydark"
                        href="/textbook"
                      >
                        Textbook
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-base font-semibold text-greydark"
                        href="/statistics"
                      >
                        Statistics
                      </a>
                    </li>
                    <li className="relative group">
                      <p className="text-base font-semibold cursor-default text-greydark">
                        Games
                      </p>
                      <div className="z-10 group-hover:block hidden absolute bg-white rounded-xl shadow-lg w-[215px] p-5 top-10 bridge">
                        <ul>
                          <li className="mb-2 text-base font-semibold text-greydark">
                            <a href="/sprint">Sprint</a>
                          </li>
                          <li>
                            <a
                              href="/audio"
                              className="text-base font-semibold text-greydark"
                            >
                              Audio call
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col l-6 c-4">
              <div className="flex justify-end">
                <div className="flex items-center mr-5 gap-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-[50%] bg-cyanlight">
                    <span className="text-base font-semibold text-cyandark">
                      A
                    </span>
                  </div>
                  <span className="text-base font-semibold text-greydark">
                    Alex
                  </span>
                </div>
                <div className="items-center hidden md:flex">
                  <a href="/" className="text-base font-semibold text-black">
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
