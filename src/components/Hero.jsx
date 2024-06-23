import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div class="grid max-w-screen-xl py-24   lg:ml-8 lg:gap-8 xl:gap-0  lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-green-500 mb-2  text-2xl ">HELLO, I AM</h1>

          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">
            Chaudhari Sufiyan
          </h1>
          <p class="max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I Build Awesome Stuff On The Web. From Sleek Designs To Smooth
            Functionality. Got A Cool Project In Mind? Let's Chat And Make It
            <br />
            Happen!
          </p>
          <Link
            to="/projects"
            class="mt-1 inline-flex items-center justify-center px-4 py-3 mr-3 text-base font-medium text-center text-white rounded-[50px] bg-green-600 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            View Projects
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
          <a
            href="#about"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-[50px] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            About Me
          </a>
        </div>
      </div>

      <h1 className="lg:pl-8 text-green-400 mt-20  text-xl ">SKILLS</h1>

      <h1 class=" lg:pl-8 mt-2  max-w-2xl mb-4 text-2xl font-semibold tracking-tight  md:text-3xl xl:text-3xl dark:text-white ">
        Techstack For Seamless <br /> Development
      </h1>
      <p class="lg:pl-8 max-w-2xl mb-6 font-medium text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
        I Have Hands-On Experience With A Variety Of Technologies, Which You Can
        Explore In Detail Through My Portfolio.
      </p>
    </>
  );
};

export default Hero;
