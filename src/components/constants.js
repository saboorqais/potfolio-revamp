import crm from "../assets/video/crm.mp4";
import job from "../assets/video/JobMarketPlace.mp4";
import iconCrm from "../assets/img/blockchain.png";
import { FaBitcoin } from "react-icons/fa";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { RiUserSettingsLine } from "react-icons/ri";
import { TbCoinBitcoin } from "react-icons/tb";
import { BsFilePerson } from "react-icons/bs";
import portfolio from "../assets/video/portfolio.mp4";
import ebos from "../assets/img/Ebos1.jpeg";
import { MdOutlineChair } from "react-icons/md";
import interia from "../assets/video/interia1.mp4";
import { FaPython } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import wolf from "../assets/img/wolf.png";
import apple from "../assets/img/apple.png";
import google from "../assets/img/google.png";
import { TiWeatherCloudy } from "react-icons/ti";
import weather from '../assets/img/weather.png'
import wallet from '../assets/video/wallet.mp4'
import { CiWallet } from "react-icons/ci";

export const webProjects = [
  {
    icon: LiaHandsHelpingSolid,
    name: "CRM",
    description: `Customer Relationship Management Software for beacon tutors pakistan. Focuses on providing a single platform to manage their business and customers.`,
    video: crm,
  },
  {
    icon: TbCoinBitcoin,
    name: "Decentralized Job Market",
    description:
      "Cutting-edge decentralized job marketplace that leverages Blockchain to revolutionize way talent is discovered, verified, and connected with employers.",
    video: job,
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
    video: portfolio,
  },
  {
    icon: FaChartLine,
    name: "Economic Wolf",
    description:
      "Website that facilitates the audience to understand the forces shaping Pakistan's economic system with immersive data visualizations and news that go beyond stats and charts to turn their knowledge into action.",
    image: wolf,
  },
];

export const mobileProject = [
  {
    name: "Interia",
    icon: MdOutlineChair,
    video: interia,
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
  },
  {
    name: "Google Scraper",
    description:
      "Script that scrapes data from google store to be used in Data science projects to visualize trends",
    icon: FaPython,
    image: google,
  }, {
    name: "Weather Station",
    description:"It's An Internet of things(IOT) project where it gets data from ESP8266 which has moisture and Temprature sensor. It then sends data to thinksoft ",
    icon: TiWeatherCloudy,
    image: weather,
  },
  {
    name: "Crypto Wallet",
    description:"Created own Crypto wallet that can generate Transaction to send eth to Account and show History of Transactions",
    icon: CiWallet,
    video: wallet,
  },
];
