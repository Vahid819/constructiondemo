"use client";

import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Building } from "lucide-react";
import { FaHouseUser } from "react-icons/fa";
import { SiRenovate } from "react-icons/si";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { PiKeyhole } from "react-icons/pi";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Cards() {
  const container = useRef(null);

  const servicedata = [
    {
      icon: Building,
      Title: "Residential Construction",
      discription:
        "Building beautiful and strong homes tailored to your lifestyle.",
      link: "#",
    },
    {
      icon: FaHouseUser,
      Title: "Commercial Construction",
      discription: "Create functional and modern commercial spaces.",
      link: "#",
    },
    {
      icon: SiRenovate,
      Title: "Renovation & Remodeling",
      discription: "Transforming existing spaces with innovative solutions.",
      link: "#",
    },
    {
      icon: LiaProjectDiagramSolid,
      Title: "Project Management",
      discription:
        "End-to-end management ensuring quality and timely delivery.",
      link: "#",
    },
    {
      icon: PiKeyhole,
      Title: "Turnkey Solutions",
      discription: "Complete turnkey construction solutions under one roof.",
      link: "#",
    },
  ];

  useGSAP(() => {
  const slider = container.current;

  const animation = gsap.to(slider, {
    x: () => -(slider.scrollWidth / 2),
    duration: 25,
    ease: "none",
    repeat: -1,
  });

  const handleEnter = () => animation.pause();
  const handleLeave = () => animation.resume();

  slider.addEventListener("mouseenter", handleEnter);
  slider.addEventListener("mouseleave", handleLeave);

  return () => {
    slider.removeEventListener("mouseenter", handleEnter);
    slider.removeEventListener("mouseleave", handleLeave);
    animation.kill();
  };
}, []);

  return (
  <div className="w-full overflow-hidden">
    <div
      ref={container}
      className="flex gap-8 w-max py-4"
    >
      {[...servicedata, ...servicedata].map((elem, index) => (
        <Link
          href={elem.link}
          key={index}
          className="block"
        >
          <Card
            className="
              w-[380px]
              min-h-[340px]
              flex-shrink-0
              group
              rounded-[32px]
              border
              border-slate-200
              bg-white
              p-8
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-[#D4AF37]/40
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]
            "
          >
            {/* Icon */}
            <div
              className="
                mx-auto
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-3xl
                bg-green-50
                transition-all
                duration-500
                group-hover:bg-[#D4AF37]
              "
            >
              <elem.icon
                size={36}
                className="
                  text-[#1B4332]
                  transition-all
                  duration-500
                  group-hover:text-white
                "
              />
            </div>

            {/* Title */}
            <CardHeader className="p-0">
              <CardTitle
                className="
                  min-h-[70px]
                  text-center
                  text-2xl
                  font-bold
                  leading-tight
                  text-slate-900
                "
              >
                {elem.Title}
              </CardTitle>
            </CardHeader>

            {/* Description */}
            <CardContent className="pt-4 flex-1 p-0">
              <p
                className="
                  text-center
                  text-slate-600
                  leading-7
                "
              >
                {elem.discription}
              </p>
            </CardContent>

            {/* Footer */}
            <CardFooter className="mt-auto justify-center p-0 pt-6">
              <span
                className="
                  flex
                  items-center
                  gap-2
                  font-medium
                  text-[#1B4332]
                  transition-all
                  duration-300
                  group-hover:gap-4
                "
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  </div>
);
}

export default Cards;
