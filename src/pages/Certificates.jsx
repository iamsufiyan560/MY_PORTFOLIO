import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Certificates = () => {
  const certifications = [
    {
      id: 1,
      imgSrc: "https://www.kgcoding.in/share-certificate?serialno=WOLRNWEA",
      name: "ReactJS For Beginners",
      description:
        "This certificate is issued by KG CODING  on Feb 15, 2024 for completing React and Redux Basics course.",
      link: "https://www.kgcoding.in/share-certificate?serialno=WOLRNWEA",
    },
    {
      id: 2,
      imgSrc: "https://www.kgcoding.in/share-certificate?serialno=DXPKEL9N",
      name: "Introduction To Javascript",
      description:
        "This certificate is issued by KG CODING  on Dec 29, 2023 for completing Javascript Basics course.",
      link: "https://www.kgcoding.in/share-certificate?serialno=DXPKEL9N",
    },
    {
      id: 3,
      imgSrc: "/download.png",
      name: "Frontend Developer (React) ",
      description:
        "This certificate is issued by HackerRank  on May 28, 2024 for completing  React, CSS, and JavaScript..",
      link: "https://www.hackerrank.com/certificates/56a66da1dbe5",
    },
  ];
  return (
    <>
      <section class=" relative isolate mb-16 sm:mb-12 px-4 py-4 md:px-8 pt-24">
        <div className="mb-12  ">
          <p class="text-sm font-medium uppercase tracking-[0.17188rem] text-emeraldCustom sm:text-base">
            CERTIFICATIONS
          </p>
          <h1 class="text-white font-bold capitalize text-4xl sm:text-6xl">
            All Certifications
          </h1>
          <p class="mt-2 max-w-lg capitalize text-zinc-300">
            Displaying A Collection Of Earned Certificates Showcasing My
            Proficiency In Various Technologies.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {certifications.map((certification) => (
            <div
              key={certification.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={certification.imgSrc}
                  alt={certification.name}
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {certification.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {certification.description}
                </p>
                <div className=" ">
                  <a
                    href={certification.link}
                    target="_blank"
                    className=" inline-flex  items-center px-4 py-2 text-sm font-medium text-center text-white rounded-[50px] bg-gray-700 cursor-pointer"
                  >
                    Verify Certificates
                    <MdOutlineArrowOutward
                      className="ml-1 mt- items-center"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certificates;
