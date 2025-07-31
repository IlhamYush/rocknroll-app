import React from "react";
import Image from "next/image";

import logo from "../assets/rnrLogo.png";

export default function Navbar() {
  return (
    <nav className="flex items-center p-5 bg-[#252525]">
      <div className="flex items-center mr-10">
        <a href="/">
          <Image src={logo} alt="website logo" className="h-20 w-50 mb-1" />
        </a>
      </div>

      <div className="flex w-full justify-between px-25">
        {[
          { href: "/", label: "Home" },
          { href: "/about", label: "About Us" },
          { href: "/collection", label: "Top Collections Cut" },
          { href: "/testimoni", label: "Testimoni" },
        ].map((item) => (
          <div key={item.href} className="nav-item relative">
            <a href={item.href} className="text-white">
              {item.label}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}
