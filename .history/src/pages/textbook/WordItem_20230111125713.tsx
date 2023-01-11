import React from "react";
interface Props {
  isList: Boolean;
  isShowButtons: Boolean;
}
const WordItem = ({ isList, isShowButtons }: Props) => {
  if (isList)
    return (
      <div className="col l-12 c-12">
        <div className="mb-10 bg-white rounded-lg shadow-md">
          <div className="grid">
            <div className="row">
              <div className="col l-5 c-12">
                <div
                  style={{
                    backgroundImage: `url(${"https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg"})`,
                  }}
                  className="relative w-full max-h-[137px] md:max-h-full md:h-full bg-center bg-no-repeat bg-cover rounded-tl-lg rounded-tr-lg aspect-square md:rounded-bl-lg md:rounded-tr-none md:aspect-auto"
                ></div>
              </div>
              <div className="col l-7 c-12">
                <div className="py-5 pl-4 pr-10 md:py-10">
                  <div className="text-2xl text-black font-dela">
                    remark / <span className="text-greydark">note</span>
                  </div>
                  <div className="flex items-center my-5 gap-x-[10px]">
                    <span className="text-lg font-semibold">[rimɑ́ːrk]</span>
                    <div className="px-3 py-1 rounded-md bg-orangedesign">
                      <span className="font-semibold text-white">compound</span>
                    </div>
                  </div>
                  <div className="pb-3 border-b-2 border-solid border-greymedium">
                    <span className="text-base font-semibold text-black">
                      To remark is to say something.
                    </span>
                  </div>
                  <div className="pt-3 pb-5 ">
                    <p className="font-medium text-greydark">
                      The teacher remarked on how quickly the students were
                      learning.
                    </p>
                  </div>
                  {isShowButtons && (
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="col l-4 c-12">
      <div className="bg-white rounded-[14px] shadow-lg mb-6">
        <div
          style={{
            backgroundImage: `url(${"https://res.edu.vn/wp-content/uploads/2021/12/unit-46-topic-food.jpeg"})`,
          }}
          className="relative w-full max-h-[137px] md:max-h-[250px] bg-center bg-no-repeat bg-cover rounded-tl-lg rounded-tr-lg aspect-square"
        ></div>
        <div className="p-5 md:p-10">
          <div className="text-2xl text-black font-dela">
            <p className="text-black">remark</p>
            <p className="text-greydark">note</p>
          </div>
          <div className="flex items-center my-5 gap-x-[10px]">
            <span className="text-lg font-semibold">[rimɑ́ːrk]</span>
            <div className="px-3 py-1 rounded-md bg-orangedesign">
              <span className="font-semibold text-white">compound</span>
            </div>
          </div>
          <div className="pb-3 border-b-2 border-solid border-greymedium">
            <span className="text-base font-semibold text-black">
              To remark is to say something.
            </span>
          </div>
          <div className="pt-3 pb-5 ">
            <p className="font-medium text-greydark">
              The teacher remarked on how quickly the students were learning.
            </p>
          </div>
          {isShowButtons && (
            <div>
              <button className="py-[6px] px-5 rounded-[100px] bg-greendesign inline-block mb-2">
                <span className="text-sm font-semibold text-white">
                  Add to learned
                </span>
              </button>
              <button className="py-[6px] px-5 rounded-[100px] bg-secondorangedesign">
                <span className="text-sm font-semibold text-orangedesign">
                  Remove from dictionary
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WordItem;
