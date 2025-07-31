import React from "react";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "./Carousel";

import bgCollection from "../assets/CollectionCut/topcut.jpg";

export default function Collections() {
  return (
    <main>
      <Navbar />

      <div className="relative w-full h-[615px] overflow-hidden bg-cover z-0">
        <Image
          src={bgCollection}
          alt="backgroundkoleksi"
          className="object-cover"
          fill
        />
      </div>

      <div className="flex justify-center p-10">
        <Carousel />
      </div>

      <Footer />
    </main>
  );
}
