import React from "react";
import Image from "next/image";

import { Instagram, MailOutlineRounded, WhatsApp } from "@mui/icons-material";
import logoFooter from "../assets/rnrLogo.png";

export default function OurService() {
  return (
    <footer className="w-full bg-[#252525] text-white p-5">
      <div className="grid grid-cols-4 gap-4 w-full items-center ml-5">
        <div className="overflow-hidden">
          <Image src={logoFooter} alt="Footer Logo" className="h-20 w-50" />
        </div>

        <div className="flex-row space-y-3">
          <p className="font-bold text-lg">Follow Us</p>
          <div className="flex items-center gap-1">
            <Instagram />
            <p className="text-md">@rnrhaircutting</p>
          </div>
        </div>

        <div className="flex-row space-y-3">
          <div className="font-bold text-lg">Contact Us</div>
          <div className="flex items-center gap-1">
            <MailOutlineRounded />
            <p className="text-md">Rnrhaircut@gmail.com</p>
          </div>
          <div className="flex items-center gap-1">
            <WhatsApp />
            <p className="text-md">+62 851-7978-5109</p>
          </div>
        </div>

        <div>
          <p className="font-bold text-md">
            © 2025 Rock N Roll Haircutting. <br /> All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
