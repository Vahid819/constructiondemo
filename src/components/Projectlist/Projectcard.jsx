"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Projectcard() {
  const container = useRef();

  const projectlist = [
    {
      url: "/project1.jpg",
      Projecttitle: "Corporate Building",
      Projecttype: "Commercial",
    },
    {
      url: "/project2.jpg",
      Projecttitle: "Modern Villa",
      Projecttype: "Residential",
    },
    {
      url: "/project3.jpg",
      Projecttitle: "Luxury Apartment",
      Projecttype: "Residential",
    },
    {
      url: "/project4.jpg",
      Projecttitle: "Industrial Warehouse",
      Projecttype: "Industrial",
    },
  ];

  useGSAP(
    () => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 100,
        scale: 0.95,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      {projectlist.map((project, index) => (
        <div
          key={index}
          className="
            project-card
            group
            relative
            overflow-hidden
            rounded-3xl
            shadow-xl
            cursor-pointer
          "
        >
          <Image
            src={project.url}
            width={600}
            height={800}
            alt={project.Projecttitle}
            className="
              h-[400px]
              w-full
              object-cover
              transition-all
              duration-700
              group-hover:scale-110
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/90
              via-black/30
              to-transparent
            "
          />

          {/* Content */}
          <div
            className="
              absolute
              bottom-0
              left-0
              p-6
              text-white
            "
          >
            <span
              className="
                rounded-full
                bg-[#D4AF37]
                px-3
                py-1
                text-xs
                font-semibold
                text-black
              "
            >
              {project.Projecttype}
            </span>

            <h3 className="mt-4 text-2xl font-bold">
              {project.Projecttitle}
            </h3>

            <Link
              href="#"
              className="
                mt-3
                inline-flex
                items-center
                gap-2
                text-sm
                font-medium
                text-white/90
                transition-all
                duration-300
                hover:gap-3
              "
            >
              View Project →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projectcard;