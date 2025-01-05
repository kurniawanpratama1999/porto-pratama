import React from "react";
import Container from "../../Components/Container";
import Comp_Image from "./Comp_Image";
import Comp_Profile from "./Comp_Profile";
import Comp_Message from "./Comp_Message";
import Comp_Information from "./Comp_Information";

import { dataAboutMe, profileCollection } from "./Data";

const Page_About = () => {
  const entriesAboutMe = Object.entries(dataAboutMe);
  
  return (
    <Container className="sm:px-[10%] px-[5%] text-gray-300 gap-10">
      <div className="grid sm:grid-cols-[.3fr_auto] justify-center items-center gap-20">
        <Comp_Image />
        <div className="flex flex-col gap-4">
          {profileCollection.map((collect, index) => (
            <Comp_Profile key={index} collect={collect} />
          ))}
        </div>
      </div>
      <Comp_Message message="( Still Looking For a Job )" />
      {entriesAboutMe.map(([key, val], index) => {
        return <Comp_Information key={index} val={val} />;
      })}
    </Container>
  );
};

export default Page_About;
