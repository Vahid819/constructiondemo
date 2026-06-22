import React from "react";
import ExpertTeam from "./ExpertTeam";
import Yearsexperience from "./Yearsexperience";
import Projectscompleted from "./Projectscompleted";
import Happyclients from "./Happyclients";

import { Separator } from "../ui/separator";

function Companystatistics() {
  return (
    <div
      className="absolute w-[90%] h-fit px-5 py-7 -top-12 left-[5%] border
border-[#E5E7EB]
shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-2xl bg-[#0B2341] flex justify-around text-white"
    >
      <Yearsexperience />
      <Separator orientation="vertical" className="bg-white" />
      <Projectscompleted />
      <Separator orientation="vertical" className="bg-white" />
      <Happyclients />
      <Separator orientation="vertical" className="bg-white" />
      <ExpertTeam />
    </div>
  );
}

export default Companystatistics;
