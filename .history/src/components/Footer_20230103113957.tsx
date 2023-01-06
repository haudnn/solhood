import React from "react";
import {github} from '../static/image/github.png';
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
                        <img src="./assets/img/GT.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img src="./assets/img/youtube.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col l-6">
                  <div className="flex items-center justify-end">
                    <span className="text-xs font-semibold text-greydark ">
                      ©2021 GlobalTalk. Project for GlobalTalk.
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
