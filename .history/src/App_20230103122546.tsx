import "./App.css";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div className="App">
      <div className="app font-montserrat">
        <section className="relative wrapper bg-greyligt">
          <Header/>
          <section className="app-container pt-[40px]">
            <div className="grid">
              <div className="row">
                <div className="col l-6">
                  <div>
                    <p className="text-lg font-bold text-cyandark">
                      E-COURSE PLATFORM
                    </p>
                    <h1 className="mt-6 font-dela text-5xl leading-[60px]">
                      Learning and teaching online, made easy.
                    </h1>
                    <p className="mt-6 max-w-[400px] font-semibold text-greydark text-lg">
                      Practice your English and learn new things with the
                      platform.
                    </p>
                    <button className="flex items-center justify-center p-3 mt-6 text-base font-semibold rounded-full bg-cyanlight text-cyandark">
                      <a href="/">About platform →</a>
                    </button>
                    <div className="flex items-center mt-6">
                      <div className="line-long pr-[60px]">
                        <div className="flex items-center">
                          <div className="w-[24px] h-[30px]">
                            <img
                              src="./assets/img/Vector.png"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="ml-3 text-4xl font-dela">
                            600
                            <span className="text-cyandark">+</span>
                          </div>
                        </div>
                        <p className="font-semibold text-center text-greydark">
                          Popular words
                        </p>
                      </div>
                      <div className="pl-[60px]">
                        <div className="flex items-center">
                          <div className="w-[24px] h-[30px]">
                            <img
                              src="./assets/img/game.png"
                              alt=""
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="ml-3 text-4xl font-dela">
                            2<span className="text-cyandark">+</span>
                          </div>
                        </div>
                        <p className="font-semibold text-center text-greydark">
                          Mini-games
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col l-6">
                  <div className="">
                    <div className="absolute top-[350px] translate-x-[-100px]">
                      <img
                        src="./assets/img/image 6.png"
                        alt="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute">
                      <img
                        src="./assets/img/casual-life-3d-boy-sitting-at-the-desk-with-open-book 9.png"
                        alt="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute translate-x-[300px]">
                      <img src="./assets/img/image 12.png" alt="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="app-container">
          <div className="py-[80px]">
            <div className="grid">
              <div className="row">
                <div className="col l-6">
                  <div>
                    <img
                      src="./assets/img/image 8.png"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="col l-6">
                  <div className="">
                    <p className="text-5xl font-dela">
                      Learn a language in a playful way
                    </p>
                    <p className="py-10 font-semibold text-lg text-greydark max-w-[400px]">
                      Make learning words more fun with mini-games
                    </p>
                    <div className="flex items-center gap-x-5">
                      <div className="w-[130px] h-[112px] bg-pinklight rounded-xl relative">
                        <div className="absolute top-[-20px]">
                          <img
                            src="./assets/img/image 10.svg"
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
                            src="./assets/img/image 11.svg"
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
        </section>
        <section className="bg-greyligt">
          <div className="app-container">
            <div className="p-10">
              <div className="grid">
                <div className="row">
                  <div className="col l-6">
                    <div className="translate-y-[50%]">
                      <p className="text-5xl font-dela">
                        Increase your vocabulary
                      </p>
                      <p className="py-10 font-semibold text-lg text-greydark max-w-[400px]">
                        Traditional and new effective approaches to word study
                      </p>
                      <button className="w-[140px] h-[44px] bg-cyanlight rounded-full text-cyandark font-semibold text-base flex items-center justify-center">
                        <a href="/">Textbook →</a>
                      </button>
                    </div>
                  </div>
                  <div className="col l-6">
                    <div>
                      <img
                        src="./assets/img/image 2.png"
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
        <section className="app-container">
          <div className="py-[80px]">
            <div className="grid">
              <div className="row">
                <div className="col l-6">
                  <div>
                    <img
                      src="./assets/img/image 1.png"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="col l-6">
                  <div className="">
                    <p className="text-5xl font-dela">
                      Watch your progress every day
                    </p>
                    <p className="py-10 font-semibold text-lg text-greydark max-w-[400px]">
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
        <Footer/>
      </div>
    </div>
  );
}

export default App;
