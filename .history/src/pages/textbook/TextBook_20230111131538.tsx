import React, { useState } from "react";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import textbookSneaker from ".././../assets/imgs/textbookSneaker.png";
import textbookAudio from ".././../assets/imgs/textbookAudio.png";
import useOnClickOutside from "../../hooks/useClickOutSide";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import noWords from "../../assets/imgs/nowords.png";
import WordItem from "./WordItem";
const TextBook = () => {
  const [isSettings, setIsSettings] = useState<Boolean>(false);
  const ref = React.useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setIsSettings(false));
  const handleShowSettings = () => {
    setIsSettings((prev) => !prev);
  };
  const [checkedList, setCheckedList] = useState([
    {
      id: 0,
      checked: false,
    },
    {
      id: 1,
      checked: false,
    },
  ]);
  const handleChecked = (e: any) => {
    const { value, checked } = e.target;
    const newList = [...checkedList];
    newList[+value].checked = checked;
    setCheckedList(newList);
  };
  return (
    <div className="md:pt-10 pt-5 textbook bg-greyligt md:pb-[100px] px-5 md:px-0 pb-10">
      <div className="flex flex-col items-center max-w-[1180px] m-auto">
        <div className="w-full p-5 bg-white rounded-lg shadow-md ">
          <div className="grid">
            <div className="row">
              <div className="col l-6 c-12">
                <div className="flex items-center w-full h-full ">
                  <div className="flex items-center justify-center h-8 mr-5 cursor-pointer gap-x-2 line-long before:-right-5">
                    <FaGraduationCap className="md:w-8 w-[21px] h-full text-greyicon"></FaGraduationCap>
                    <span className="text-lg font-bold leading-8 text-greydark">
                      Textbook
                    </span>
                  </div>
                  <div className="flex items-center justify-center h-8 ml-5 text-black cursor-pointer gap-x-2">
                    <FaBookOpen className="md:w-8 w-[21px] h-full"></FaBookOpen>
                    <span className="text-lg font-bold leading-8">
                      Dictionary
                    </span>
                  </div>
                </div>
              </div>
              <div className="col l-6 c-12">
                <div
                  ref={ref}
                  className="mt-3 md:mt-0 flex items-center md:justify-end w-full h-full gap-x-[10px] relative "
                >
                  <div className="flex items-center justify-start pr-10 cursor-pointer rounded-xl gap-x-2 bg-pinklight">
                    <img
                      src={textbookSneaker}
                      alt=""
                      className="object-cover"
                    />
                    <span className="text-base font-bold text-pinkdark">
                      Sprint
                    </span>
                  </div>
                  <div className="flex items-center justify-start pr-10 cursor-pointer rounded-xl gap-x-2 bg-cyanlight">
                    <img src={textbookAudio} alt="" className="object-cover" />
                    <span className="text-sm font-bold break-words whitespace-nowrap md:text-base text-cyandark">
                      Audio-Call
                    </span>
                  </div>
                  <div
                    onClick={handleShowSettings}
                    className={`flex items-center justify-center h-full aspect-square max-w-10 max-h-10 rounded-md cursor-pointer ${
                      isSettings ? "bg-cyandark" : "bg-greyligt"
                    }`}
                  >
                    <AiOutlineSetting
                      className={`w-5 h-5 ${
                        isSettings ? "text-white" : "text-greyicon"
                      } t`}
                    ></AiOutlineSetting>
                  </div>
                  {isSettings && (
                    <div className="absolute p-5 bg-white rounded-[14px] shadow-lg top-14 bridge">
                      <div>
                        <div className="flex items-center gap-x-[10px] mb-1">
                          <input
                            checked={checkedList[0].checked}
                            onChange={handleChecked}
                            type="checkbox"
                            id="0"
                            name="0"
                            value="0"
                          />
                          <label
                            htmlFor="0"
                            className={`font-semibold ${
                              checkedList[0].checked
                                ? "text-black"
                                : "text-[#828282]"
                            }`}
                          >
                            Show words in a list
                          </label>
                        </div>
                        <div className="flex items-center gap-x-[10px] mb-1">
                          <input
                            checked={checkedList[1].checked}
                            onChange={handleChecked}
                            type="checkbox"
                            id="1"
                            name="1"
                            value="1"
                          />
                          <label
                            htmlFor="1"
                            className={`font-semibold ${
                              checkedList[1].checked
                                ? "text-black"
                                : "text-[#828282]"
                            }`}
                          >
                            Display the 'Add' and 'Remove' buttons
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 overflow-scroll max-w-[350px] md:flex md:items-center md:justify-center md:max-w-full md:overflow-auto ">
          <div className="flex items-center justify-center gap-x-10 w-fit whitespace-nowrap">
            <div className="cursor-pointer flex items-center justify-center pb-[10px] gap-x-2 border-b-2 border-solid border-black">
              <span className="text-3xl font-dela">A1</span>
              <div className="px-2 py-[2px] rounded-md bg-greendesign">
                <span className="text-xs font-semibold text-white">Easy</span>
              </div>
            </div>
            <div className="cursor-pointer flex items-center justify-center pb-[10px] gap-x-2">
              <span className="text-3xl font-dela text-greydark">A2</span>
              <div className="px-2 py-[2px] rounded-md bg-secondgreendesign">
                <span className="text-xs font-semibold text-greendesign">
                  Easy
                </span>
              </div>
            </div>
            <div className="cursor-pointer flex items-center justify-center pb-[10px] gap-x-2">
              <span className="text-3xl font-dela text-greydark">B1</span>
              <div className="px-2 py-[2px] rounded-md bg-secondyellowdesign">
                <span className="text-xs font-semibold text-yellowdesign">
                  Medium
                </span>
              </div>
            </div>
            <div className="cursor-pointer flex items-center justify-center pb-[10px] gap-x-2">
              <span className="text-3xl font-dela text-greydark">B2</span>
              <div className="px-2 py-[2px] rounded-md bg-secondyellowdesign">
                <span className="text-xs font-semibold text-yellowdesign">
                  Medium
                </span>
              </div>
            </div>
            <div className="cursor-pointer flex items-center justify-center pb-[10px] gap-x-2">
              <span className="text-3xl font-dela text-greydark">C1</span>
              <div className="px-2 py-[2px] rounded-md bg-secondorangedesign">
                <span className="text-xs font-semibold text-orangedesign">
                  Hard
                </span>
              </div>
            </div>
            <div className="cursor-pointer flex items-center justify-center pb-[10px] gap-x-2">
              <span className="text-3xl font-dela text-greydark">C2</span>
              <div className="px-2 py-[2px] rounded-md bg-secondorangedesign">
                <span className="text-xs font-semibold text-orangedesign">
                  Hard
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${checkedList[0].checked ? "max-w-[926px] w-full" : "w-full"} `}>
          <div className="gird">
            <div className="row">
              <WordItem
                isList={checkedList[0].checked}
                isShowButtons={checkedList[1].checked}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="p-10 bg-white rounded-xl max-w-[800px]">
            <div className="grid">
              <div className="row">
                <div className="col l-4">
                  <div>
                    <img
                      src={noWords}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="col l-8">
                  <div className="flex flex-col justify-center w-full h-full">
                    <p className="text-2xl font-dela mb-[14px]">No words in this section yet</p>
                    <p className="mb-8 text-base font-semibold text-greydark">
                      To save difficult words for further study, go to the textbook and select 'add to dictionary'
                    </p>
                    <div>
                      <button className="py-[14px] px-[22px] flex items-center justify-center rounded-[100px] bg-cyandark">
                        <a href="/textbook" className="text-base font-semibold text-white">
                          To Textbook
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden pt-10 gap-x-6 md:flex">
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[50%] border-2 border-solid border-cyandark text-cyandark">
            <AiOutlineArrowLeft className="text-base font-bold"></AiOutlineArrowLeft>
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[50%] border-2 border-solid border-cyandark text-cyandark">
            <span className="text-base font-bold">1</span>
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[50%] border-2 border-solid border-cyandark text-white bg-cyandark">
            <span className="text-base font-bold">2</span>
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[50%] border-2 border-solid border-cyandark text-cyandark">
            <span className="text-base font-bold">3</span>
          </div>
          <div className="h-[48px] flex items-end">
            <span className="text-base font-bold tracking-widest">...</span>
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[50%] border-2 border-solid border-cyandark text-cyandark">
            <span className="text-base font-bold">27</span>
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[50%] border-2 border-solid border-cyandark text-cyandark">
            <span className="text-base font-bold">28</span>
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[50%] border-2 border-solid border-cyandark text-cyandark">
            <span className="text-base font-bold">29</span>
          </div>
          <div className="w-[48px] h-[48px] flex items-center justify-center rounded-[50%] border-2 border-solid border-cyandark text-cyandark">
            <AiOutlineArrowRight className="text-base font-bold"></AiOutlineArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBook;
