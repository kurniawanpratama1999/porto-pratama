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
    <Container className="text-gray-300 px-[20%] justify-center items-center gap-10">
      <h2 className="text-center text-5xl">
        Welcome Netizen DKI Jakarta dan Sekitarnya
      </h2>
      <div className="w-full rounded-xl grid grid-cols-3 gap-4">
        <div className="bg-gray-700 p-2 rounded-md ">
          <p className="text-center">Frontend</p>
          <div className="flex flex-wrap text-7xl justify-center">
            <BiLogoReact />
            <BiLogoTailwindCss />
          </div>
          <p className="text-center">Keterangan</p>
        </div>
        <div className="bg-gray-700 p-2 rounded-md ">
          <p className="text-center">Backend</p>
          <div className="flex flex-wrap text-7xl justify-center">
            <DiMysql />
            <BiLogoNodejs />
            <TbApi />
          </div>
          <p className="text-center">Keterangan</p>
        </div>
        <div className="bg-gray-700 p-2 rounded-md ">
          <p className="text-center">Office</p>
          <div className="flex flex-wrap text-7xl justify-center">
            <PiMicrosoftExcelLogo />
            <PiMicrosoftWordLogo />
            <PiMicrosoftPowerpointLogo />
          </div>
          <p className="text-center">Keterangan</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-3xl">Bersama Kurniawan Pratama</p>
        <p className="text-xl">Sebagai Software Engineer</p>
      </div>
      <div className="w-fit flex mx-auto gap-5 justify-center text-2xl border-t border-gray-600 bg-gray-600 p-2 px-10 rounded-full">
        <FaWhatsapp/>
        <FaInstagram/>
        <FaGithub/>
      </div>
    </Container>
  );
};

export default Page_Home;
