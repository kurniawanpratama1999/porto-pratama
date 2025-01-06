import Container from "../../Components/Container";
import React from "react";
import { BiLogoNodejs, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  PiMicrosoftExcelLogo,
  PiMicrosoftPowerpointLogo,
  PiMicrosoftWordLogo,
} from "react-icons/pi";
import { TbApi } from "react-icons/tb";

const Page_Home = () => {
  return (
    <Container className="text-gray-300 px-[10%] sm:px-[10%] justify-center items-center gap-10">
      <h2 className="text-center text-2xl md:text-4xl xl:text-5xl">
        Welcome Netizen DKI Jakarta dan Sekitarnya
      </h2>
      <div className="w-full rounded-xl max-lg:flex max-lg:flex-col lg:grid lg:grid-cols-3 gap-4">
        <div className="bg-zinc-800 py-2 px-4 rounded-md ">
          <p className="text-center">Frontend</p>
          <div className="flex flex-wrap text-7xl justify-center">
            <BiLogoReact />
            <BiLogoTailwindCss />
          </div>
        </div>
        <div className="bg-zinc-800 py-2 px-4 rounded-md ">
          <p className="text-center">Backend</p>
          <div className="flex flex-wrap text-7xl justify-center">
            <DiMysql />
            <BiLogoNodejs />
            <TbApi />
          </div>
        </div>
        <div className="bg-zinc-800 py-2 px-4 rounded-md ">
          <p className="text-center">Office</p>
          <div className="flex flex-wrap text-7xl justify-center relative">
            <PiMicrosoftExcelLogo />
            <PiMicrosoftWordLogo />
            <PiMicrosoftPowerpointLogo />
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl sm:text-3xl">Bersama Kurniawan Pratama</p>
        <p className="text-md sm:text-xl">Sebagai Software Engineer</p>
      </div>
      <button className="px-5 py-2 bg-amber-700 rounded-full">Reach Me</button>
      <div className="w-fit flex mx-auto gap-5 justify-center text-2xl border-t border-gray-600 bg-zinc-800 p-2 px-10 rounded-full">
        <a target="_blank" href="https://wa.me/6283827221096"><FaWhatsapp/></a>
        <a target="_blank" href="https://instagram.com/its.about.tofu"><FaInstagram/></a>
        <a target="_blank" href="https://github.com/kurniawanpratama1999"><FaGithub/></a>
      </div>
    </Container>
  );
};

export default Page_Home;
