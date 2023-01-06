import React, { useState } from "react";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import textbookSneaker from ".././../assets/imgs/textbookSneaker.png";
import textbookAudio from ".././../assets/imgs/textbookAudio.png";
import useOnClickOutside from "../../hooks/useClickOutSide";
const TextBook = () => {
  const [isSettings, setIsSettings] = useState<Boolean>(false);
  const ref = React.useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, () => setIsSettings(false));
  const handleShowSettings = () => {
    setIsSettings(true);
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
    <div className="pt-10 textbook bg-greyligt pb-[100px]">
      <div className="flex flex-col items-center justify-center">
        <div className="max-w-[1180px] w-full p-5 bg-white rounded-lg shadow-md">
          <div className="grid">
            <div className="row">
              <div className="col l-6">
                <div className="flex items-center w-full h-full">
                  <div className="flex items-center justify-center h-8 mr-5 cursor-pointer gap-x-2 line-long before:-right-5">
                    <FaGraduationCap className="w-8 h-full text-greyicon"></FaGraduationCap>
                    <span className="text-xl font-bold leading-8 text-greydark">
                      Textbook
                    </span>
                  </div>
                  <div className="flex items-center justify-center h-8 ml-5 text-black cursor-pointer gap-x-2">
                    <FaBookOpen className="w-8 h-full"></FaBookOpen>
                    <span className="text-xl font-bold leading-8">
                      Dictionary
                    </span>
                  </div>
                </div>
              </div>
              <div className="col l-6">
                <div className="flex items-center justify-end w-full h-full gap-x-[10px] relative">
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
                    <span className="text-base font-bold text-cyandark">
                      Audio-Call
                    </span>
                  </div>
                  <div
                    onClick={handleShowSettings}
                    className="flex items-center justify-center w-10 h-10 rounded-md cursor-pointer bg-greyligt"
                  >
                    <AiOutlineSetting className="w-5 h-5 text-greyicon"></AiOutlineSetting>
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
        <div className="flex items-center justify-center my-10 gap-x-10">
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
        <div className="w-[926px]">
          <div className="grid">
            <div className="row">
              <div className="col l-12">
                <div className="mb-10 bg-white rounded-lg shadow-md">
                  <div className="grid">
                    <div className="row">
                      <div className="col l-5">
                        <div
                          style={{
                            backgroundImage: `url(${"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"})`,
                          }}
                          className="relative w-full h-full bg-center bg-no-repeat bg-cover rounded-tl-lg rounded-bl-lg"
                        ></div>
                      </div>
                      <div className="col l-7">
                        <div className="py-10 pl-4 pr-10">
                          <div className="text-2xl text-black font-dela">
                            remark / <span className="text-greydark">note</span>
                          </div>
                          <div className="flex items-center my-5 gap-x-[10px]">
                            <span className="text-lg font-semibold">
                              [rimɑ́ːrk]
                            </span>
                            <div className="px-3 py-1 rounded-md bg-orangedesign">
                              <span className="font-semibold text-white">
                                compound
                              </span>
                            </div>
                          </div>
                          <div className="pb-3 border-b-2 border-solid border-greymedium">
                            <span className="text-base font-semibold text-black">
                              To remark is to say something.
                            </span>
                          </div>
                          <div className="pt-3 pb-5 ">
                            <p className="font-medium text-greydark">
                              The teacher remarked on how quickly the students
                              were learning.
                            </p>
                          </div>
                          <div className="flex items-center gap-x-5">
                            <button className="py-2 px-3 rounded-[100px] bg-greendesign">
                              <span className="text-sm font-semibold text-white">
                                Add to learned
                              </span>
                            </button>
                            <button className="py-2 px-3 rounded-[100px] bg-secondorangedesign">
                              <span className="text-sm font-semibold text-orangedesign">
                                Remove from dictionary
                              </span>
                            </button>
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
  );
};

export default TextBook;
