import React from "react";
import {ArrowBigLeft, ArrowRight, CircleCheck} from 'lucide-react'
import { Button } from "../ui/button";
import {Normalbutton} from "../Buttons/Buttons";

function Abouttext() {
  return (
    <div className="w-[50%] h-full flex flex-col items-center justify-center px-20">
      <div className="w-full">
        <h1 className="text-xl text-[#F4B400] uppercase">About us</h1>
      </div>
      <h1 className="text-5xl mt-3">We Build With Passion Deliverr with Pride</h1>
      <div className="mt-5">
        <p className="leading-tight">At Yama Constructions, we trun ideas into reality, With overa a decade of experience, We have succefully delivered residential, commercial, and industrial project with unmatched quality and timely execution.</p>
      </div>
      <div className="w-full mt-3 gap-2 flex flex-col">
        <div className="flex w-full items-center gap-2" >
            <CircleCheck size={18} className="text-[#F4B400]"/> <h4>Quality Construction</h4>
        </div>
        <div className="flex w-full items-center gap-2" >
            <CircleCheck size={18} className="text-[#F4B400]"/> <h4>Timely Completion</h4>
        </div>
        <div className="flex w-full items-center gap-2" >
            <CircleCheck size={18} className="text-[#F4B400]"/> <h4>Client Satisfactin</h4>
        </div>
      </div>
      <div className="w-full mt-2">
        <Normalbutton buttontext="Read More About Us" />
      </div>
    </div>
  );
}

export default Abouttext;
