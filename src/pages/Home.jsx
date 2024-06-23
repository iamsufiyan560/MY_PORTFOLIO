import Hero from "../components/Hero";
import MyContributions from "../components/MyContributions";
import Skill from "../components/Skill";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <section class="pl-8 bg-white dark:bg-gray-900">
        <Hero />

        <Skill />
        <div class="mt-10 relative w-full flex justify-center">
          <hr class="w-[50%] border-yellow-500" />
        </div>

        <MyContributions />
        <AboutMe />
        <Contact />
      </section>
    </>
  );
};

export default Home;
