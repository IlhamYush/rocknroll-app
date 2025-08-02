import React from "react";
import Image from "next/image";

import male from "../assets/OurService/cwo.png";
import female from "../assets/OurService/cw.png";
import hairWash from "../assets/OurService/air.png";
import Styling from "../assets/OurService/styw.png";

export default function OurService() {
  return (
    <div className="p-10">
      <div className="flex justify-center">
        <div className="rounded-[23px] bg-[#660000] p-4 w-[15%]">
          <p className="font-bold text-2xl text-center text-white">Our Services</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 py-25">
        <div className="flex flex-col items-center">
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden bg-[#222222] flex items-center justify-center">
            <Image
              src={male}
              alt="Male Image"
              className="w-[110px] object-contain"
            />
          </div>
          <p className="text-center text-lg font-bold mt-5 text-black">
            MALE HAIRCUT
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden bg-[#222222] flex items-center justify-center">
            <Image
              src={female}
              alt="Male Image"
              className="w-[110px] object-contain"
            />
          </div>
          <p className="text-center text-lg font-bold mt-5 text-black">
            FEMALE HAIRCUT
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden bg-[#222222] flex items-center justify-center">
            <Image
              src={hairWash}
              alt="Male Image"
              className="w-[110px] object-contain"
            />
          </div>
          <p className="text-center text-lg font-bold mt-5 text-black">
            HAIR WASH
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden bg-[#222222] flex items-center justify-center">
            <Image
              src={Styling}
              alt="Male Image"
              className="w-[110px] object-contain"
            />
          </div>
          <p className="text-center text-lg font-bold mt-5 text-black">
            HAIR STYLING
          </p>
        </div>
      </div>
    </div>
  );
}
