import React from "react";
import Image from "next/image";

import Navbar from "../components/Navbar";
import Content from "./Content";
import Footer from "../components/Footer";

import about1 from "../assets/AboutUs/cukur.jpg";

export default function AboutUs() {
  return (
    <main>
      <Navbar />

      <div className="relative w-full h-[615px] overflow-hidden bg-cover">
        <Image src={about1} alt="cukur" className="object-cover w-full" fill />
      </div>

      <Content />

      <Footer />
    </main>
  );
}
