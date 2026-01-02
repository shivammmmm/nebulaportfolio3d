"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Linkedin } from "lucide-react";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glass Navbar */}
      <nav className="h-[68px] bg-[#03001466] backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(112,66,248,0.45)]">
        <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="#about-me" className="flex items-center gap-3 group">
            <Image
              src="bgr.png"
              alt="Shivam Kurmi Logo"
              width={48}
              height={48}
              draggable={false}
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden md:block text-gray-200 font-semibold tracking-wide">
              Shivam Kurmi
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6 px-6 py-2 rounded-full bg-[#030014aa] border border-white/10 shadow-inner">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="text-gray-300 hover:text-[#7042f8] transition-all duration-300 hover:-translate-y-[1px]"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {SOCIALS.map(({ link, name, icon: Icon }) => (
                <Link
                  key={name}
                  href={link}
                  target="_blank"
                  className="p-2 rounded-full bg-[#030014aa] border border-white/10
                             hover:shadow-[0_0_20px_rgba(112,66,248,0.6)]
                             hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </Link>
              ))}

              {/* LinkedIn Icon */}
              <Link
                href="https://www.linkedin.com/in/shivam-kurmi/"
                target="_blank"
                className="p-2 rounded-full bg-[#030014aa] border border-white/10
                           hover:shadow-[0_0_20px_rgba(10,102,194,0.7)]
                           hover:-translate-y-1 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
            aria-label="Toggle Menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-[#030014f2] backdrop-blur-xl
        transition-all duration-300 origin-top
        ${open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center py-6 gap-5">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              onClick={() => setOpen(false)}
              className="text-gray-300 text-lg hover:text-[#7042f8] transition"
            >
              {item.title}
            </Link>
          ))}

          <div className="flex gap-6 mt-4">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link key={name} href={link} target="_blank">
                <Icon className="w-6 h-6 text-white" />
              </Link>
            ))}
            <Linkedin className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
};
