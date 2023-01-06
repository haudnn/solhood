import React from "react";
import github from '../../assets/imgs/github.png';
import GT from '../../assets/imgs/GT.png'
import youtube from '../../assets/imgs/youtube.png'
const Footer = () => {
  return (
    <footer>
      <div className="bg-greyligt py-[40px]">
        <div className="app-container">
          <div className="pb-4 border-b border-solid boder-[greymedium]">
            <div className="grid">
              <div className="row">
                <div className="col l-6">
                  <ul className="flex items-center gap-x-10">
                    <li>
                      <a
                        className="text-sm font-semibold text-greydark"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm font-semibold text-greydark"
                        href="/"
                      >
                        Textbook
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm font-semibold text-greydark"
                        href="/"
                      >
                        Statistics
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm font-semibold text-greydark"
                        href="/"
                      >
                        Sprint
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm font-semibold text-greydark"
                        href="/"
                      >
                        Audio-call
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col l-6">
                  <ul className="flex items-center justify-end gap-x-10">
                    <li>
                      <a
                        className="text-sm font-semibold text-greydark"
                        href="/"
                      >
                        Alex
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm font-semibold text-greydark"
                        href="/"
                      >
                        Gabriel
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-sm font-semibold text-greydark"
                        href="/"
                      >
                        Marcus
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="grid">
              <div className="row">
                <div className="col l-6">
                  <ul className="flex items-center gap-x-10">
                    <li>
                      <a href="/">
                        <img src={github} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={GT} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src={youtube} alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col l-6">
                  <div className="flex items-center justify-end">
                    <span className="text-xs font-semibold text-greydark ">
                      ©2023 Solhood. Project for Solhood.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
