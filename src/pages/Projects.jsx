import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import axios from "axios";
import Loader from "../components/Loader";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(projects);
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://next-auth-by-sufiyan.vercel.app/api/projects"
        );
        setProjects(response.data.projects);
      } catch (error) {
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="relative isolate mb-16 sm:mb-12 px-4 py-4 md:px-8 pt-24">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.17188rem] text-emeraldCustom sm:text-base">
              Projects
            </p>
            <h1 className="text-white font-bold capitalize text-4xl sm:text-6xl">
              All Projects
            </h1>
            <p className="mt-2 max-w-lg capitalize text-zinc-300">
              Checkout every project of mine from simple to complex and personal
              to business use.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="rounded-t-lg w-full h-48 object-cover"
                    src={project.imageSrc}
                    alt={project.name}
                  />
                </a>
                <div className="flex flex-wrap p-2">
                  {project.lang.split(" ").map((language, index) => (
                    <a
                      key={index}
                      href="#"
                      className="border border-green-500 inline-flex items-center mt-2 ml-2 px-2 py-1 font-bold text-center text-emerald-600 rounded-[50px] bg-gray-700 text-[12px]"
                    >
                      {language.toUpperCase()}
                    </a>
                  ))}
                </div>
                <div className="p-5">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {project.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="flex">
                    <a
                      href={project.githubLink}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-[50px] bg-gray-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className="mr-2 text-white-500" />
                      Github
                    </a>
                    <a
                      href={project.liveLink}
                      className="inline-flex ml-4 items-center px-3 py-2 text-sm font-medium text-center text-white rounded-[50px] bg-green-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Project{" "}
                      <MdOutlineArrowOutward className="ml-1" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
