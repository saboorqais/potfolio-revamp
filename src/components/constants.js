import { LiaHandsHelpingSolid } from "react-icons/lia";
import { RiUserSettingsLine } from "react-icons/ri";
import { TbCoinBitcoin } from "react-icons/tb";
import { BsFilePerson } from "react-icons/bs";

import ebos from "../assets/img/Ebos1.jpeg";
import { MdOutlineChair } from "react-icons/md";

import { FaPython } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import wolf from "../assets/img/wolf.png";
import apple from "../assets/img/apple.png";
import google from "../assets/img/google.png";
import { TiWeatherCloudy } from "react-icons/ti";
import weather from "../assets/img/weather.png";
import { CiWallet } from "react-icons/ci";
export const webProjects = [
  {
    icon: LiaHandsHelpingSolid,
    name: "CRM",
    description: `Customer Relationship Management Software for beacon tutors pakistan. Focuses on providing a single platform to manage their business and customers.`,
    video: "https://mega.nz/embed/aAoWjD7R#Xg201mFMPlzSkR0jNDyAA1I80SJCKS8Py7EOJ2c0Xvs",
    link: "https://customer-management-nine.vercel.app/",
  },
  {
    icon: TbCoinBitcoin,
    name: "Decentralized Job Market",
    description:
      "Cutting-edge decentralized job marketplace that leverages Blockchain to revolutionize way talent is discovered, verified, and connected with employers.",
    video: "https://mega.nz/embed/HBYDBRZY#1tUlXByo5PK50dELJGyct0uMzhmF3P5uw0ZcttCCVqo",
  },
  {
    icon: RiUserSettingsLine,
    name: "Aiems",
    description:
      "Financial Ledger Application that implement's validation rules and data entry controls to ensure accurate and compliant financial data input",
    image: ebos,
  },
  {
    icon: BsFilePerson,
    name: "Portfolio Website",
    description:
      "Our website is a curated collection of projects and experiences, offering a glimpse into the journey of a dedicated professional",
    video: "https://mega.nz/embed/6YxT1BAa#Np7zT4ASXRRSSw0VZxypOr-3tloHhkzoBQIR3-Zd1kU",
    link: "https://saboor.vercel.app/",
  },
  {
    icon: FaChartLine,
    name: "Economic Wolf",
    description:
      "Website that facilitates the audience to understand the forces shaping Pakistan's economic system with immersive data visualizations and news",
    image: wolf,
    link: "https://github.com/saboorqais/EconomicWolf",
  },
];

export const mobileProject = [
  {
    name: "Interia",
    icon: MdOutlineChair,
    video: "https://mega.nz/embed/udR30AaJ#4txGYtGVjwebgEex_Re76gVfk_Y47_EO_qxlK7NhSCc",
    link: "https://github.com/saboorqais/Inertia-FrontEnd",
    description:
      "A Mobile Application that can help visualize the furniture in your Home and Buy from the Ecomerce Platform",
  },
];
export const randomProjects = [
  {
    name: "Apple Scraper",
    description:
      "Script that scrapes data from apple store to be used in Data science projects to visualize trends",
    icon: FaPython,
    image: apple,

    link: "https://github.com/saboorqais/AppleStore-Scraper",
  },
  {
    name: "Google Scraper",
    description:
      "Script that scrapes data from google store to be used in Data science projects to visualize trends",
    icon: FaPython,
    image: google,
    link: "https://github.com/saboorqais/Googlestore-scraper",
  },
  {
    name: "Weather Station",
    description:
      "It's An Internet of things(IOT) project where it gets data from ESP8266 which has moisture and Temprature sensor. It then sends data to thinksoft ",
    icon: TiWeatherCloudy,
    image: weather,
    link: "https://github.com/saboorqais/WeatherStation",
  },
  {
    name: "Crypto Wallet",
    description:
      "Created own Crypto wallet that can generate Transaction to send eth to Account and show History of Transactions with extra added encryption",
    icon: CiWallet,
    video: "https://mega.nz/embed/iFhyzbCZ#9J7JvIKHFrtr3w0oCebQeHMm6ipILjuQ9Kh7p7QETqE",
  },
];
