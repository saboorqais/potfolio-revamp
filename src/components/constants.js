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
    video: "https://drive.google.com/uc?id=1I1HDdNKARBN0OwXT9sIEDCOLS013oVbJ",
    link: "https://customer-management-nine.vercel.app/",
  },
  {
    icon: TbCoinBitcoin,
    name: "Decentralized Job Market",
    description:
      "Cutting-edge decentralized job marketplace that leverages Blockchain to revolutionize way talent is discovered, verified, and connected with employers.",
    video: "https://drive.google.com/uc?id=1iKmr1Qh0uvOXQj0pA9RFHeUPsqs4s9Fq",
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
    video: "https://drive.google.com/uc?id=1TsmDf3b4ueHK-l0fNv7klUTsbvvQrs5b",
    link: "https://saboor.vercel.app/",
  },
  {
    icon: FaChartLine,
    name: "Economic Wolf",
    description:
      "Website that facilitates the audience to understand the forces shaping Pakistan's economic system with immersive data visualizations and news that go beyond stats and charts to turn their knowledge into action.",
    image: wolf,
    link: "https://github.com/saboorqais/EconomicWolf",
  },
];

export const mobileProject = [
  {
    name: "Interia",
    icon: MdOutlineChair,
    video: "https://drive.google.com/uc?id=1sKdZkFuBTS3Md8ynmDkDt_DQ9s9Qx3x4",
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
    video: "https://drive.google.com/uc?id=1sKdZkFuBTS3Md8ynmDkDt_DQ9s9Qx3x4",
  },
];
