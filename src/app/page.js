import About from "@/components/About/About";
import Companystatistics from "@/components/CompanyStatistics/Companystatistics";
import Title from "@/components/Hero/Title";
import Projectlist from "@/components/Projectlist/Projectlist";
import Servicessection from "@/components/Servicessection/Servicessection";
import React from "react";

function page() {
  return (
    <div className="w-full h-screen">
      <section className="relative h-screen overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/introvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 h-full w-full object-cover bg-gradient-to-r from-black/90 via-black/75 to-black/20"></div>
        {/* <SmallIntroduction /> */}
        <Title />
      </section>
      <div className="relative w-full h-[80%]">
        <Companystatistics />
        <About />
      </div>
      <div className="w-full h-[70%]">
        <Servicessection />
      </div>
      <div className="w-full h-[60%]">
        <Projectlist />
      </div>
    </div>
  );
}

export default page;
