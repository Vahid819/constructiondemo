import Image from "next/image";
import React from "react";

function Aboutimage() {
  return (
    <div className="w-[50%] flex justify-center items-center">
      {/* <div className="w-[70%] h-[40%] rounded-2xl"> */}
        <Image
          src={"/aboutcompany.jpg"}
          width={650}
          height={650}
          alt="About Yama Construction"
          className=" overflow-hidden w-auto h-auto object-contain rounded-2xl"
        />
      {/* </div> */}
    </div>
  );
}

export default Aboutimage;
