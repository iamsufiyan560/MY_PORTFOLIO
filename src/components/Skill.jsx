import {
  BiLogoTailwindCss,
  BiLogoDocker,
  BiLogoTypescript,
  BiLogoNodejs,
  BiLogoJavascript,
} from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { FaBootstrap } from "react-icons/fa";
import {
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoFirebase,
} from "react-icons/io5";
import {
  SiApollographql,
  SiAppwrite,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
} from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const skillsData = [
  { skillName: "React", color: "text-blue-400", icon: IoLogoReact },
  { skillName: "JavaScript", color: "text-yellow-500", icon: BiLogoJavascript },
  { skillName: "CSS", color: "text-blue-500", icon: IoLogoCss3 },
  { skillName: "TailwindCSS", color: "text-sky-500", icon: BiLogoTailwindCss },
  { skillName: "HTML", color: "text-orange-500", icon: IoLogoHtml5 },
  { skillName: "NextJS", color: "text-white", icon: TbBrandNextjs },
  {
    skillName: "Apollo GraphQL",
    color: "text-white-500",
    icon: SiApollographql,
  },
  { skillName: "Git", color: "text-rose-500", icon: BsGit },
  { skillName: "Docker", color: "text-blue-400", icon: BiLogoDocker },
  { skillName: "Typescript", color: "text-sky-500", icon: BiLogoTypescript },
  { skillName: "BootStrap", color: "text-violet-400", icon: FaBootstrap },
  { skillName: "NodeJS", color: "text-lime-500", icon: BiLogoNodejs },
  { skillName: "Redux", color: "text-purple-500", icon: SiRedux },
  { skillName: "AppWrite", color: "text-pink-500", icon: SiAppwrite },
  { skillName: "ExpressJS", color: "text-lime-500", icon: SiExpress },
  { skillName: "Firebase", color: "text-yellow-500", icon: IoLogoFirebase },
  { skillName: "Mongodb", color: "text-green-500", icon: SiMongodb },
  { skillName: "MySql", color: "text-orange-500", icon: SiMysql },
  { skillName: "PostMan", color: "text-orange-500", icon: SiPostman },
];

const Skill = () => {
  return (
    <>
      <div className="lg:pl-8 text-white mt-8 grid grid-cols-2 gap-2 text-sm font-semibold sm:gap-4 sm:text-base md:grid-cols-4 xl:grid-cols-5 ">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex items-center gap-4 p-2">
            <skill.icon
              size={40}
              className={`shrink-0 rounded-md bg-${skill.color}/5 p-1.5 ${skill.color}`}
            />
            <span>{skill.skillName}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skill;
