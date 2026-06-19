import React from "react";
import { ArrowUpRight } from 'lucide-react'
import { CiFacebook, CiLinkedin, CiTwitter, CiInstagram   } from "react-icons/ci";
import { Separator } from "../ui/separator";
import { TfiLineDotted } from "react-icons/tfi";


function SmallIntroduction() {
  return (
    <div className="w-full h-screen z-50 absolute text-white">
      <section
        id="title-intor"
        className="w-[50%] h-screen flex"
      >
        <div className="w-[20%] border h-screen flex flex-col justify-center items-center gap-3">
          {/* logo */}
          <CiFacebook size={30} />
          <CiLinkedin size={30} />
          <CiTwitter size={30}  />
          <CiInstagram size={30} />
            <Separator orientation="vertical" className="w-7" />
        </div>
        <div className="w-full h-screen flex flex-col justify-center gap-1.5">
          {/* Introduction Title */}
          <h1 className="text-8xl mx-9">
            We Creating Reality From Your Vision
          </h1>
          <p className="mx-9">
            We developed landmark real estate projects that deliver lasting
            value to investors and communities.{" "}
          </p>
          <div className="uppercase flex items-center gap-7 w-fit px-5 py-4 border border-black rounded-full bg-orange-400 mx-8">
            Get Startd
            <ArrowUpRight width={30} height={30} className="border border-black rounded-full bg-black"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmallIntroduction;
