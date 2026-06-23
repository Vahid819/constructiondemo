"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

function Buttons({
  buttontext,
  bgColor = "#0B2341",
  textColor = "#FFFFFF",
  borderColor,
  borderradious,
}) {
  return (
    <Button
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor || bgColor,
      }}
      className={`
        group
        h-14
        rounded-${borderradious}
        border
        px-8
        text-base
        font-semibold
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        active:scale-95
      `}
    >
      <span>{buttontext}</span>

      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  );
}

function Normalbutton({ buttontext }) {
  return (
    <Button
      className="
        group
        h-14
        rounded-full
        border
        border-[#F4B400]
        bg-[#F4B400]
        px-8
        text-base
        font-semibold
        text-[#0B2341]
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#e5aa00]
        hover:shadow-xl
        active:scale-95
      "
    >
      <span>{buttontext}</span>

      <ArrowRight
        className="
          ml-2
          h-5
          w-5
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      />
    </Button>
  );
}

export { Buttons, Normalbutton };
