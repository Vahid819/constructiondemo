import React from "react";
import { Buttons } from "../Buttons/Buttons";
import ExpertTeam from "../CompanyStatistics/ExpertTeam";
import Happyclients from "../CompanyStatistics/Happyclients";
import Projectscompleted from "../CompanyStatistics/Projectscompleted";
import Yearsexperience from "../CompanyStatistics/Yearsexperience";

function Counting() {
  return (
    <section className="relative py-24 bg-[#0B2341] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div
          className="
        rounded-[40px]
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-10 lg:p-14
      "
        >
          <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
            {/* Stats */}
            <div>
              <div className="mb-8">
                <span className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
                  Company Statistics
                </span>

                <h2 className="mt-3 text-4xl font-bold text-white">
                  Building Trust Through Results
                </h2>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <Yearsexperience />
                <Projectscompleted />
                <Happyclients />
                <ExpertTeam />
              </div>
            </div>

            {/* CTA */}
            <div
              className="
            flex flex-col justify-center
            rounded-3xl
            bg-gradient-to-br
            from-[#D4AF37]
            to-[#F2BB3D]
            p-10
            shadow-2xl
          "
            >
              <h3 className="text-3xl font-bold text-[#0B2341]">
                Have a Project in Mind?
              </h3>

              <p className="mt-5 leading-8 text-[#0B2341]/80">
                Whether it's residential, commercial, or industrial
                construction, our team is ready to turn your vision into
                reality.
              </p>

              <div className="mt-8">
                <Buttons
                  buttontext="Get A Free Quote"
                  bgColor="#0B2341"
                  textColor="#FFFFFF"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Counting;
