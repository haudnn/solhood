import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app font-montserrat">
        <section className="relative wrapper bg-greyligt">
          <section className="py-6 border-b border-solid border-[grey-dark]">
            <div className="app-container">
              <header className="grid">
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
                          <li>
                            <a
                              className="text-base font-semibold text-greydark"
                              href="/"
                            >
                              Games
                            </a>
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
                        <a
                          href="/"
                          className="text-base font-semibold text-black"
                        >
                          Sign Out
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </header>
            </div>
          </section>
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
                            <img src="./assets/img/github.png" alt="" />
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
      </div>
    </div>
  );
}

export default App;
