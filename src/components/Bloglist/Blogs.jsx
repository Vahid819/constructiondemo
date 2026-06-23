import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Buttons } from "../Buttons/Buttons";

function Blogs() {
  const blogs = [
    {
      title: "5 Modern Construction Trends Shaping the Future",
      category: "Commercial",
      date: "May 15, 2025",
      image: "/project1.jpg",
      featured: true,
    },
    {
      title: "How to Plan Your Dream Construction Project",
      category: "Residential",
      date: "May 10, 2025",
      image: "/project2.jpg",
    },
    {
      title: "Benefits of Green Building in Construction",
      category: "Sustainability",
      date: "May 05, 2025",
      image: "/project3.jpg",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <span className="uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">
                Insights & Articles
              </span>

              <div className="h-[2px] w-12 bg-[#D4AF37]" />
            </div>

            <h2 className="mt-4 max-w-3xl text-5xl font-bold leading-tight text-[#0B2341]">
              Construction Trends,
              <br />
              Industry News & Expert Tips
            </h2>
          </div>

          <Buttons
            buttontext="View All Articles"
            bgColor="#ffffff"
            textColor="#0B2341"
          />
        </div>

        {/* Blog Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Featured Blog */}
          <div className="overflow-hidden rounded-3xl bg-[#0B2341] shadow-xl">
            <div className="grid md:grid-cols-2">
              <Image
                src={blogs[0].image}
                alt={blogs[0].title}
                width={600}
                height={700}
                className="h-full w-full object-cover"
              />

              <div className="flex flex-col justify-center p-10">
                <span className="w-fit rounded-full bg-[#D4AF37] px-4 py-1 text-sm font-medium text-[#0B2341]">
                  {blogs[0].category}
                </span>

                <p className="mt-5 text-slate-300">{blogs[0].date}</p>

                <h3 className="mt-3 text-4xl font-bold leading-tight text-white">
                  {blogs[0].title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  Explore the latest trends shaping the construction industry,
                  from smart buildings to sustainable development practices.
                </p>

                <button className="mt-8 flex items-center gap-2 font-semibold text-[#D4AF37]">
                  Read Article
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side Blogs */}
          <div className="flex flex-col gap-6">
            {blogs.slice(1).map((blog, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="grid grid-cols-[180px_1fr]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={300}
                    height={220}
                    className="h-full w-full object-cover"
                  />

                  <div className="p-6">
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {blog.category}
                    </span>

                    <p className="mt-3 text-sm text-slate-500">
                      {blog.date}
                    </p>

                    <h4 className="mt-2 text-xl font-bold leading-snug text-[#0B2341]">
                      {blog.title}
                    </h4>

                    <button className="mt-4 flex items-center gap-2 font-medium text-[#D4AF37]">
                      Read Article
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blogs;