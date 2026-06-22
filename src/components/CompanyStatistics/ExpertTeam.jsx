"use client";

import React, { useRef } from "react";
import { UserRoundArrowLeft } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function ExpertTeam() {
  const countRef = useRef(null);

  useGSAP(() => {
    const counter = { value: 0 };

    gsap.to(counter, {
      value: 8,
      duration: 2,
      ease: "power2.out",
      snap: { value: 1 },

      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = `${counter.value}+`;
        }
      },

      scrollTrigger: {
        trigger: countRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <div className="flex items-center justify-around">
      <UserRoundArrowLeft
        size={30}
        className="text-[#D4AF37]"
      />

      <div className="flex flex-col justify-center px-5">
        <h1
          ref={countRef}
          className="text-3xl font-bold text-white"
        >
          0+
        </h1>

        <h2 className="text-[#afa9a4]">
          Expert Team
        </h2>
      </div>
    </div>
  );
}

export default ExpertTeam;