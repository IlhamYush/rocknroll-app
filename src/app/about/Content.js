import React from "react";
import Image from "next/image";

import lokasi from "../assets/AboutUs/lokasi.png";
import gambar1 from "../assets/AboutUs/about1.png";
import bgContent from "../assets/AboutUs/asset MI 1 (1).png";

export default function Content() {
  return (
    <div className="relative w-full overflow-hidden bg-cover z-0">
      <Image
        src={bgContent}
        alt="background Content"
        fill
        className="object-cover"
      />
      <div className="flex items-center justify-between">
        <div className="p-15 w-[120vh]">
          <div className="flex-row space-y-5">
            <div className="space-y-2">
              <p className="text-2xl font-bold text-black">ABOUT US</p>

              <p className="text-md text-black">
                Berdiri sejak <strong>2004</strong>, tidak hanya berpengalaman{" "}
                <strong>
                  <em>Rock N Roll</em>
                </strong>
                {" "}memberikan gaya dan karakter disetiap potongannya. Pelayanan
                yang ramah dan terampil serta fasilitas yang lengkap menjadi
                keunggulan agar konsumen merasa nyaman dan puas.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-2xl font-bold text-black">Location</p>

              <div className="flex items-center gap-3">
                <div className="relative w-full h-[300px] overflow-hidden">
                  <Image
                    src={lokasi}
                    alt="Lokasi lah"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-md text-black">
                  Jl. Tm. Cibeunying Sel. No.1, Cihapit, Kec. Bandung Wetan,
                  Kota Bandung, Jawa Barat 40114
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] w-[400px] overflow-hidden mr-45">
          <Image src={gambar1} alt="Background" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
