import React from "react";
import { Buttons } from "../Buttons/Buttons";
import Projectcard from "./Projectcard";

function Projectlist() {
  return (
    <section className="bg-[#0B2341] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              Our Projects
            </p>

            <h2 className="mt-3 text-5xl font-bold text-white">
              Featured Projects
            </h2>

            <p className="mt-4 max-w-2xl text-slate-300">
              Explore our portfolio of residential, commercial and industrial
              projects delivered with quality and precision.
            </p>
          </div>

          <Buttons buttontext="View All Projects" />
        </div>

        {/* Projects */}
        <div className="mt-16">
          <Projectcard />
        </div>
      </div>
    </section>
  );
}

export default Projectlist;
