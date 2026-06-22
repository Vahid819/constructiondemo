"use client";

import React, { useRef } from "react";
import { Search, ArrowUpRight, Grip } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Searchs() {
  const navsearch = useRef();
  var tl = gsap.timeline();

  gsap.registerPlugin(useGSAP);

  useGSAP(()=>{
      tl.from(navsearch.current.children,{
        y:-30,
        opacity:0,
        duration:0.80,
        delay:0.20,
        stagger:0.15
      })
    })

  return (
    <div className="flex items-center gap-2" ref={navsearch}>
      <div className="text-[#FAF8F5]">
        <Search />
      </div>
      <div className="flex gap-5 border items-center px-3 py-2 rounded-full bg-[#F4B400]">
        <h4 className="uppercase font-Pliant ">Get a quote</h4>
        <ArrowUpRight
          width={30}
          height={30}
          className="border border-black rounded-full hover:p-1 hover:transition-all bg-black text-white hover:shadow-xl hover:shadow-white"
        />
      </div>
      <div className="border border-black rounded-full p-1 bg-black text-white">
        <Grip width={30} height={30} />
      </div>
    </div>
  );
}

export default Searchs;
