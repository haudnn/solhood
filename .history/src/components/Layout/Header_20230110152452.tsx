import React from "react";

const Header = () => {
  return (
    <header className="py-8 border-b border-solid border-[grey-dark] bg-greyligt max-h-[90px]">
      <div className="px-5 app-container md:px-0">
        <div className="grid">
          <div className="row">
            <div className="col l-6">
              <div className="flex items-center gap-x-[60px] h-full">
                <div className="line before:border-r-0 md:before:border-r-2">
                  <a href="/" className="text-lg text-black font-dela">
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
            <div className="col l-6">
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
                <div className="flex items-center">
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
