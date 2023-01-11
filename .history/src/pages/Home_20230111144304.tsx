import game from "../assets/imgs/game.png";
import flash from "../assets/imgs/Vector.png";
import bg1 from "../assets/imgs/bg1.png";
import bg2 from "../assets/imgs/bg2.png";
import bg3 from "../assets/imgs/bg3.png";
import mbbg from "../assets/imgs/mbbg.png";
import learn from "../assets/imgs/learn.png";
import watch from "../assets/imgs/watch.png";
import vocabulary from "../assets/imgs/vocabulary.png";
import audio from "../assets/imgs/audio.svg";
import sneaker from "../assets/imgs/sneaker.svg";
const Home = () => {
  return (
    <div>
      <div className="relative pb-5 md:wrapper bg-greyligt">
        <section className="app-container pt-[40px] px-5 md:px-0">
          <div className="grid">
            <div className="row">
              <div className="col l-6 c-12">
                <div className="flex flex-col items-center justify-center md:block">
                  <p className="text-lg font-bold text-cyandark ">
                    E-COURSE PLATFORM
                  </p>
                  <h1 className="md:mt-6 mt-2 font-dela md:text-5xl md:leading-[60px] text-center md:text-start text-3xl">
                    Learning and teaching online, made easy.
                  </h1>
                  <p className="mt-3 text-lg font-semibold text-center md:mt-6 text-greydark md:text-start">
                    Practice your English and learn new things with the
                    platform.
                  </p>
                  <button className="flex items-center justify-center p-3 mt-6 text-base font-semibold rounded-full bg-cyanlight text-cyandark">
                    <a href="/">About platform →</a>
                  </button>
                  <div className="flex items-center w-full mt-6 md:justify-start">
                    <div className="flex-1 line-long md:flex-none">
                      <div className="flex items-center justify-center md:justify-start">
                        <div>
                          <img
                            src={flash}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="md:ml-3 md:text-4xl font-dela">
                          600
                          <span className="text-cyandark">+</span>
                        </div>
                      </div>
                      <p className="font-semibold text-center text-greydark md:text-start">
                        Popular words
                      </p>
                    </div>
                    <div className="flex-1 md:flex-none">
                      <div className="flex items-center justify-center md:justify-start">
                        <div>
                          <img
                            src={game}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="md:ml-3 md:text-4xl font-dela">
                          2<span className="text-cyandark">+</span>
                        </div>
                      </div>
                      <p className="font-semibold text-center md:text-start text-greydark">
                        Mini-games
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden col l-6 c-12 md:block">
                <div className="mt-5">
                  <div className="absolute top-[350px] translate-x-[-100px] ">
                    <img src={bg1} alt="w-full h-full object-cover" />
                  </div>
                  <div className="absolute">
                    <img src={bg2} alt="w-full h-full object-cover" />
                  </div>
                  <div className="absolute translate-x-[300px]">
                    <img src={bg3} alt="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="px-5 app-container md:px-0">
        <div className="py-[80px]">
          <div className="grid">
            <div className="row">
              <div className="col l-6">
                <div>
                  <img
                    src={learn}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="col l-6">
                <div className="flex flex-col items-center w-full md:items-start">
                  <p className="text-3xl text-center font-dela md:text-start md:text-5xl">
                    Learn a language in a playful way
                  </p>
                  <p className="md:py-10  pt-2 font-semibold text-lg text-greydark max-w-[400px] text-center md:text-start">
                    Make learning words more fun with mini-games
                  </p>
                  <div className="mt-10 md:mt-0">
                    <div className="flex items-center md:mt-0 gap-x-5">
                      <div className="w-[130px] h-[112px] bg-pinklight rounded-xl relative">
                        <div className="absolute top-[-20px]">
                          <img
                            src={sneaker}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <a
                          href="/"
                          className="flex items-end justify-center w-full h-full pb-2 text-base font-bold text-pinkdark"
                        >
                          Sprint
                        </a>
                      </div>
                      <div className="w-[170px] h-[112px] bg-cyanlight rounded-xl relative">
                        <div className="absolute top-[-30px] left-[30px]">
                          <img
                            src={audio}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <a
                          href="/"
                          className="flex items-end justify-center w-full h-full pb-2 text-base font-bold text-cyandark"
                        >
                          Audio call{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-greyligt">
        <div className="app-container">
          <div className="px-5 pt-10 md:px-0 md:p-10 ">
            <div className="grid">
              <div className="row">
                <div className="col l-6">
                  <div className="md:translate-y-[30%] flex items-center flex-col md:items-start">
                    <p className="text-3xl text-center font-dela md:text-start md:text-5xl">
                      Increase your vocabulary
                    </p>
                    <p className="mt-2 font-semibold text-lg text-greydark max-w-[400px] text-center md:text-start md:py-10">
                      Traditional and new effective approaches to word study
                    </p>
                    <button className="mt-4 w-[140px] h-[44px] bg-cyanlight rounded-full text-cyandark font-semibold text-base flex items-center justify-center">
                      <a href="/">Textbook →</a>
                    </button>
                  </div>
                </div>
                <div className="col l-6">
                  <div className="flex flex-col items-center justify-center text-center">
                    <img
                      src={vocabulary}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-5 app-container md:px-0">
        <div className="py-[80px]">
          <div className="grid">
            <div className="row">
              <div className="col l-6">
                <div className="">
                  <img
                    src={watch}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="col l-6">
                <div className="flex flex-col items-center justify-center md:items-start">
                  <p className="text-3xl text-center font-dela md:text-start md:text-5xl">
                    Watch your progress every day
                  </p>
                  <p className="md:py-10 pb-4 pt-2 font-semibold text-lg text-greydark max-w-[400px] text-center md:text-start">
                    Save statistics on your achievements, words learned, and
                    mistakes
                  </p>
                  <button className="w-[140px] h-[44px] bg-cyanlight rounded-full text-cyandark font-semibold text-base flex items-center justify-center">
                    <a href="/">Statistics →</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
