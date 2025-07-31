import React from "react";

import Image from "next/image";

import bgTestimoni from "../assets/AboutUs/asset MI 1 (1).png";
import test1 from "../assets/Testimony/org1.png";
import test2 from "../assets/Testimony/org2.png";
import test3 from "../assets/Testimony/org3.png";

export default function Testimoni() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={bgTestimoni}
          alt="Background Testimoni"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative grid grid-cols-2 gap-25 p-20 z-10">
        <div className="flex items-center gap-10">
          <div className="relative w-[800px] h-[200px] overflow-hidden">
            <Image src={test1} alt="Testing 1" fill className="object-cover" />
          </div>
          <div className="space-y-3">
            <p className="text-black text-lg">
              <strong>Erwin</strong> (The Panas Dalam)
            </p>
            <div className="bg-[#D9D9D9] rounded-lg p-5">
              <p className="text-black text-md">
                Cukur di Rock n Roll Haircutting itu seperti jatuh cinta...
                tiba-tiba dan tak terelakkan. Saya masuk dengan kepala penuh
                pikiran, keluar dengan kepala penuh gaya. Tukangnya tahu persis
                perbedaan antara potongan &quot;galau&quot; dan &quot;move
                on&quot;.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="relative w-[900px] h-[200px] overflow-hidden">
            <Image src={test2} alt="Testing 2" fill className="object-cover" />
          </div>
          <div className="space-y-3">
            <p className="text-black text-lg">
              <strong>Roy</strong> (The Panas Dalam)
            </p>
            <div className="bg-[#D9D9D9] rounded-lg p-5">
              <p className="text-black text-md">
                &quot;Saya datang dengan rambut kayak headphone kusut. Tapi
                setelah dicukur, saya merasa seperti drummer band Inggris yang
                baru pulang dari Grammy. Cepat, rapi, tapi tetap rock n roll.
                Saya suka tempat ini karena mereka nggak cuma potong rambut,
                tapi juga ego.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="relative w-[660px] h-[200px] overflow-hidden">
            <Image src={test3} alt="Testing 3" fill className="object-cover" />
          </div>
          <div className="space-y-3">
            <p className="text-black text-lg">
              <strong>Boiq</strong> (The Panas Dalam)
            </p>
            <div className="bg-[#D9D9D9] rounded-lg p-5">
              <p className="text-black text-md">
                &quot;Saya pernah potong di tempat lain, hasilnya kayak habis
                ribut sama tukang cukur. Tapi di Rock n Roll Haircutting?
                Potongannya harmonis, simetris, dan ada improvisasi kayak solo
                gitar. Respect!&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="text-3xl text-black font-bold flex items-center justify-center mt-7">
          WHAT THEY SAID ABOUT US
        </div>
      </div>
    </div>
  );
}
