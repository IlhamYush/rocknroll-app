import React from "react";
import Image from "next/image";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import backgroundImage from "./assets/pintuWA.jpg";
import OurService from "./components/OurService";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="relative w-full h-[615px] overflow-hidden bg-cover z-0">
        <Image
          src={backgroundImage}
          alt="Background Image"
          fill
          className="object-cover"
        />
      </div>

      <OurService />

      <Footer />
    </main>
  );
}
