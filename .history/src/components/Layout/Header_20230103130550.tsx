import React from "react";

const Header = () => {
  return (
      <header className="py-8 border-b border-solid border-[grey-dark]">
        <div className="app-container">
          <div className="grid">
            <div className="row">
              <div className="col l-6">
                <div className="flex items-center gap-x-[60px] h-full">
                  <div className="line">
                    <p className="text-lg text-black font-dela">Solhood</p>
                  </div>
                  <div className="">
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
                          href="/"
                        >
                          Textbook
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-base font-semibold text-greydark"
                          href="/"
                        >
                          Statistics
                        </a>
                      </li>
                      <li className="relative group">
                        <a
                          className="text-base font-semibold text-greydark"
                          href="/"
                        >
                          Games
                        </a>
                        <div className="group-hover:block hidden absolute bg-white rounded-xl shadow-lg w-[215px] p-5 top-10 bridge">
                          <ul>
                            <li className="mb-2 text-base font-semibold text-greydark">
                              <a href="/">Sprint</a>
                            </li>
                            <li>
                              <a href="/" className="text-base font-semibold text-greydark">Audio call</a>
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
