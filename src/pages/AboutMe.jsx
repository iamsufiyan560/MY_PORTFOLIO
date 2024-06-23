import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";

const AboutMe = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const data = [
    {
      question: "Who Are You?",
      answer: "Hello 👋, I'm Sufiyan Chaudhari.",
    },
    {
      question: "What Do You Do?",
      answer:
        "I'm a full-stack developer specializing in modern web technologies.",
    },
    {
      question: "Where Are You From?",
      answer: "I'm from Mumbai, India.",
    },
    {
      question: "How Can I Contact You?",
      answer: "You can contact me via email at msufiyanhusen@gmail.com.",
    },
  ];

  return (
    <>
      <div id="about" className="mb-12">
        <p class="text-sm font-medium uppercase tracking-[0.17188rem] text-emeraldCustom sm:text-base">
          ABOUT ME
        </p>
        <h1 class="text-white font-bold capitalize text-3xl sm:text-4xl">
          Know Me More
        </h1>
        <p class="mt-2 max-w-lg capitalize text-zinc-300">
          Have Questions About Me, Here Are Some General Ones.
        </p>
      </div>
      {/* Accorioan  */}
      <div className="w-4/4 mr-8  text-white grid lg:grid-cols-2 gap-2 md:grid-cols-1 md:gap-2 ">
        {data.map((item, index) => (
          <div
            key={index}
            className={`mb-4 rounded-lg ${
              openIndex === index ? "border border-slate-700" : ""
            }`}
          >
            <div
              className="bg-slate-700 rounded-t-md px-2 py-1 font-semibold flex justify-between items-center cursor-pointer  "
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.question}</span>
              <button>
                {openIndex === index ? (
                  <RiArrowDropDownLine size={40} />
                ) : (
                  <RiArrowDropRightLine size={40} />
                )}
              </button>
            </div>
            {openIndex === index && (
              <div className="px-4 py-4 bg-slate-800 rounded-b-md">
                <span>{item.answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutMe;
