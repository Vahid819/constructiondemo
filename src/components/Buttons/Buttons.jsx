'use client'

import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

function Buttons(props) {
  return (
    <div>
      <Button
        className={
          "py-7 text-xl text-black bg-[#F4B400] border-black hover:bg-transparent transition-all hover:border-[#FAF8F5] hover:text-[#FAF8F5] active:scale-50 hover:scale-105"
        }
      >
        {props.buttontext}
        <ArrowRight />
      </Button>
    </div>
  );
}

function Normalbutton(props){
    return (
    <div>
      <Button
        className={
          "py-7 text-xl text-black bg-[#F4B400] border-black hover:bg-transparent transition-all active:scale-50 hover:scale-105"
        }
      >
        {props.buttontext}
        <ArrowRight />
      </Button>
    </div>
  );
}

export {
    Buttons,
    Normalbutton
};
