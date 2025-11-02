import { IconType } from "react-icons";
import { SiTailwindcss } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import {
  FaGolang,
  FaJava,
  FaReact,
  FaSquareGithub,
  FaSquareInstagram,
} from "react-icons/fa6";
import { BiLogoJavascript } from "react-icons/bi";
import { PiFileSql } from "react-icons/pi";
import {
  SiApachekafka,
  SiC,
  SiGit,
  SiJetbrains,
  SiJquery,
  SiMicrosoftsqlserver,
  SiSpring,
  SiSwagger,
  SiVisualstudio,
  SiVisualstudiocode,
  SiRedux,
  SiJenkins,
} from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { RxLinkedinLogo } from "react-icons/rx";

export interface Idata {
  label: string;
  value: string;
}

export interface IEducate {
  title: string;
  subtitle: string;
  time: string;
}

interface Iicon {
  name: string;
  icon: IconType;
}

export interface ISkill {
  name: string;
  icons: Iicon[];
}

interface ILink {
  name: string;
  icon: IconType;
  url: string;
}

export const skills: ISkill[] = [
  {
    name: "Languages",
    icons: [
      { name: "Go", icon: FaGolang },
      { name: "Java", icon: FaJava },
      { name: "Javascript", icon: BiLogoJavascript },
      { name: "C#", icon: SiC },
      { name: "SQL", icon: PiFileSql },
    ],
  },
  {
    name: "Frameworks & Libraries",
    icons: [
      { name: "React JS", icon: FaReact },
      { name: "Spring", icon: SiSpring },
      { name: ".Net", icon: SiDotnet },
      { name: "Angular JS", icon: FaAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Kafka", icon: SiApachekafka },
      { name: "JQuery", icon: SiJquery },
      { name: "Swagger", icon: SiSwagger },
      { name: "Redux", icon: SiRedux },
      { name: "Jenkins", icon: SiJenkins },
    ],
  },
  {
    name: "Tools & Platforms",
    icons: [
      { name: "Jetbrains IDEA", icon: SiJetbrains },
      { name: "Visual Studio Code", icon: SiVisualstudiocode },
      { name: "Microsoft Visual Studio", icon: SiVisualstudio },
      { name: "SQL Server Studio", icon: SiMicrosoftsqlserver },
      { name: "GIT", icon: SiGit },
    ],
  },
];

export const educations: IEducate[] = [
  {
    title: "Bank OCBC Indonesia",
    subtitle:
      "Working as a software engineer building with internal company applications with good and standardized architecture. Working on Go, Java, .Net, React Js and Angular JS Projects.",
    time: "2024 - Present",
  },
  {
    title: "Refactory Software House",
    subtitle:
      "Complete an intensive pairing program, learn and dive into real work in web programming. Work with React TypeScript, Go Lang, and Flutter as a mobile application.",
    time: "Mar 2023 - Aug 2023",
  },
  {
    title: "Enigma Camp",
    subtitle:
      "Complete the challenge of learning as a full stack web developer by exploring React Js and React native as front end, Java Spring Boot as backend and Basics of Devops",
    time: "Aug 2023 - Des 2023",
  },
];

export const links: ILink[] = [
  {
    name: "linkedin",
    icon: RxLinkedinLogo,
    url: "https://www.linkedin.com/in/haris-priantury-673951250/",
  },
  {
    name: "github",
    icon: FaSquareGithub,
    url: "https://github.com/harispriantury",
  },
  {
    name: "instagram",
    icon: FaSquareInstagram,
    url: "https://www.instagram.com/haris_priantury/",
  },
];

export const cores: string[] = [
  "Problem Solving",
  "Teamwork",
  "Communication",
  "Adaptability",
  "Agile Methodology",
];

export const datas: Idata[] = [
  {
    label: "Full Name",
    value: "Haris Priantury",
  },
  {
    label: "Age",
    value: "23 years old",
  },
  {
    label: "Address",
    value: "Seliling, Alian, Kebumen Jateng Indonesia",
  },
  {
    label: "Status",
    value: "Single",
  },
];
