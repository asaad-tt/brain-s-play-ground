import React from "react";

const Header = () => {
  return (
    <div className="relative px-4 pt-16 mb-5 mx-auto lg:py-20 md:px-8 xl:px-20 sm:max-w-xl md:max-w-full">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-purple-400 uppercase rounded-full bg-teal-accent-400">
                explore quizzes
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Enhance Your Brain capacity
              <br className="hidden md:block" />
              through quizzes{" "}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Brain's Play Ground is a web-based Audience Engagement Cloud
              Platform for hosting interactive trivia quizzes at in-person,
              virtual, and hybrid events.
            </p>
          </div>
          {/* <div className="flex items-center">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div> */}
        </div>
      </div>
      <div className="flex py-10 justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="https://i.ibb.co/nCTLsQn/quiz-game.jpg"
          className=" w-full h-full max-w-xl -mb-16 rounded shadow-2xl  lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
