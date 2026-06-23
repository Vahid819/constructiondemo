import React from "react";
import { Buttons } from "../Buttons/Buttons";
import Projectcard from "./Projectcard";

function Projectlist() {
  return (
    <section className="relative overflow-hidden bg-[#0B2341] py-28">
  {/* Background Accent */}
  <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

  <div className="relative mx-auto max-w-7xl px-6">
    {/* Header */}
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      
      <div className="max-w-3xl">
        {/* Label */}
        <div className="mb-5 flex items-center gap-3">
          <div className="h-[2px] w-12 bg-[#D4AF37]" />
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Our Projects
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          Crafting Landmarks,
          <span className="block text-[#D4AF37]">
            Building Excellence
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Explore our portfolio of residential, commercial, and industrial
          projects delivered with exceptional quality, innovative design,
          and uncompromising attention to detail.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md">
        <Buttons
          buttontext="View All Projects"
          colors="F4B400"
        />
      </div>
    </div>

    {/* Divider */}
    <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    {/* Projects */}
    <div className="mt-16">
      <Projectcard />
    </div>
  </div>
</section>
  );
}

export default Projectlist;
