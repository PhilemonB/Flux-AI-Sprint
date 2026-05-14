"use client";

import Link from "next/link";
import { useState } from "react";

const heroImage = "/home hero img.png";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <section className="font-inter relative h-screen overflow-hidden bg-[#fafafa] flex flex-col">
      {/* Background photo — full cover, centered, no resize gaps */}
      <img
        src={heroImage}
        alt="Harvey Specter"
        className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
      />

      {/* Frosted-glass bar — direct child of section, always full page width */}
      <div className="absolute bottom-0 inset-x-0 h-[41%] backdrop-blur-[10px] bg-[rgba(217,217,217,0.01)] [mask-image:linear-gradient(to_bottom,transparent,black_40%)]" />

      {/* Mobile nav overlay */}
      <div
        className={`
          fixed inset-0 z-50 bg-white flex flex-col px-6 py-6
          transition-opacity duration-300
          md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-semibold text-[1rem] tracking-[-0.04em] text-black capitalize"
          >
            H.Studio
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="flex flex-col items-center justify-center w-8 h-8 relative"
          >
            <span className="block w-6 h-[1.5px] bg-black rotate-45 absolute" />
            <span className="block w-6 h-[1.5px] bg-black -rotate-45 absolute" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-[2rem] tracking-[-0.04em] text-black capitalize leading-none hover:opacity-60 transition-opacity"
            >
              {link}
            </a>
          ))}
        </nav>

        <button className="self-start bg-black text-white text-[0.875rem] font-medium tracking-[-0.04em] px-5 py-3 rounded-full hover:opacity-80 transition-opacity mb-4">
          Let&apos;s talk
        </button>
      </div>

      {/* Content — flex-1 so it stretches to fill the section */}
      <div className="relative flex-1 min-h-0 flex flex-col px-6 md:px-8">
        <div className="w-full max-w-[110rem] mx-auto flex-1 min-h-0 flex flex-col">

          {/* Nav */}
          <nav className="flex items-center justify-between py-6">
            <Link
              href="/"
              className="font-semibold text-[1rem] tracking-[-0.04em] text-black capitalize"
            >
              H.Studio
            </Link>

            <div className="hidden md:flex items-center gap-14 font-semibold text-[1rem] tracking-[-0.04em] text-black capitalize">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="hover:opacity-60 transition-opacity"
                >
                  {link}
                </a>
              ))}
            </div>

            <button className="hidden md:flex items-center justify-center bg-black text-white text-[0.875rem] font-medium tracking-[-0.04em] px-4 py-3 rounded-full hover:opacity-80 transition-opacity">
              Let&apos;s talk
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex flex-col gap-[0.3125rem]"
              aria-label="Open menu"
            >
              <span className="block w-6 h-[1.5px] bg-black" />
              <span className="block w-6 h-[1.5px] bg-black" />
              <span className="block w-6 h-[1.5px] bg-black" />
            </button>
          </nav>

          {/* Hero content — vertically centered in the space below the nav */}
          <div className="flex-1 min-h-0 flex items-end pb-8 md:items-center md:pb-0 overflow-y-auto">
            <div className="flex flex-col w-full">
              {/* [ Hello i'm ] — centered mobile, left desktop */}
              <p className="font-mono text-[0.875rem] text-white uppercase mix-blend-overlay leading-[1.1] whitespace-nowrap mb-1 text-center md:text-left">
                [ Hello i&apos;m ]
              </p>

              {/* Mobile: words stack left-aligned. Desktop: same row, space-between */}
              <h1
                className="
                  flex flex-col gap-3 md:flex-row md:gap-0 md:justify-between
                  font-medium capitalize text-white mix-blend-overlay
                  leading-[0.9] tracking-[-0.07em] w-full
                  text-[clamp(2rem,22vw,8rem)] md:text-[clamp(4rem,11vw,12.375rem)]
                "
              >
                <span>Harvey</span>
                <span>Specter</span>
              </h1>

              {/* Description + CTA — full-width left on mobile, right-box on desktop */}
              <div className="flex w-full justify-start md:justify-end mt-8 md:mt-6">
                <div className="flex flex-col gap-[1.0625rem] w-full md:w-[18.375rem]">
                  <p className="font-bold italic text-[0.875rem] text-[#1f1f1f] tracking-[-0.04em] uppercase leading-[1.1]">
                    <span>H.Studio is a </span>
                    <span className="font-normal not-italic">full-service</span>
                    <span> creative studio creating beautiful digital experiences and products. We are an </span>
                    <span className="font-normal not-italic">award winning</span>
                    <span> desing and art group specializing in branding, web design and engineering.</span>
                  </p>
                  <button className="self-start bg-black text-white text-[0.875rem] font-medium tracking-[-0.04em] px-4 py-3 rounded-full hover:opacity-80 transition-opacity">
                    Let&apos;s talk
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* About section */}
    <section className="font-inter bg-white w-full px-6 md:px-8 py-12 md:py-[7.5rem]">
      <div className="w-full max-w-[110rem] mx-auto flex flex-col gap-6">

        {/* [ 8+ years in industry ] + divider */}
        <div className="flex flex-col gap-3 items-end">
          <p className="font-mono text-[0.875rem] text-[#1f1f1f] uppercase leading-[1.1] text-right">
            [ 8+ years in industry ]
          </p>
          <div className="w-full h-px bg-[#1f1f1f]" />
        </div>

        {/* Staggered display type */}
        <div className="flex flex-col gap-2 uppercase">

          {/* 001 label — mobile only, above first line */}
          <p className="md:hidden font-mono text-[0.875rem] text-[#1f1f1f] leading-[1.1] text-center">001</p>

          {/* Line 1: A creative director / */}
          <div className="flex items-start gap-3 justify-center md:justify-start">
            <p className="font-light text-black text-[clamp(2rem,6.7vw,6rem)] leading-[0.84] tracking-[-0.08em] whitespace-nowrap">
              A creative director&nbsp;&nbsp;&nbsp;/
            </p>
            <span className="hidden md:block font-mono text-[0.875rem] text-[#1f1f1f] leading-[1.1] mt-1 shrink-0">001</span>
          </div>

          {/* Line 2: Photographer — ~15% indent desktop (214px / 1440px canvas) */}
          <p className="font-light text-black text-[clamp(2rem,6.7vw,6rem)] leading-[0.84] tracking-[-0.08em] whitespace-nowrap text-center md:text-left md:pl-[15%]">
            Photographer
          </p>

          {/* Line 3: Born & raised — ~42% indent desktop (610px / 1440px canvas) */}
          <p className="font-light text-black text-[clamp(2rem,6.7vw,6rem)] leading-[0.84] tracking-[-0.08em] whitespace-nowrap text-center md:text-left md:pl-[42%]">
            Born{" "}
            <span style={{ fontFamily: "var(--font-playfair)", fontStyle: "italic", fontWeight: "400" }}>&amp;</span>
            {" "}raised
          </p>

          {/* Line 4: On the south side — left aligned */}
          <p className="font-light text-black text-[clamp(2rem,6.7vw,6rem)] leading-[0.84] tracking-[-0.08em] whitespace-nowrap text-center md:text-left">
            on the south side
          </p>

          {/* Line 5: Of Chicago — ~42% indent desktop */}
          <p className="font-light text-black text-[clamp(2rem,6.7vw,6rem)] leading-[0.84] tracking-[-0.08em] whitespace-nowrap text-center md:text-left md:pl-[42%]">
            of chicago.
          </p>

        </div>

        {/* [ creative freelancer ] — below the text block */}
        <p className="font-mono text-[0.875rem] text-[#1f1f1f] leading-[1.1] whitespace-nowrap text-center md:text-right">
          [ CREATIVE FREELANCER ]
        </p>
      </div>
    </section>

    {/* Section 002 — About */}
    <section className="font-inter bg-white w-full px-6 md:px-8 py-12 md:py-20">
      <div className="w-full max-w-[110rem] mx-auto">

        {/* Mobile layout */}
        <div className="flex flex-col gap-5 md:hidden">
          <p className="font-mono text-[0.875rem] text-[#1f1f1f] uppercase leading-[1.1]">002</p>
          <p className="font-mono text-[0.875rem] text-[#1f1f1f] uppercase leading-[1.1]">[ About ]</p>
          <div className="flex items-stretch gap-3">
            <div className="flex flex-col justify-between shrink-0">
              <div className="w-4 h-4 border-t border-l border-[#1f1f1f]" />
              <div className="w-4 h-4 border-b border-l border-[#1f1f1f]" />
            </div>
            <p className="flex-1 text-[0.875rem] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em] py-3">
              Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
            </p>
            <div className="flex flex-col justify-between shrink-0">
              <div className="w-4 h-4 border-t border-r border-[#1f1f1f]" />
              <div className="w-4 h-4 border-b border-r border-[#1f1f1f]" />
            </div>
          </div>
          <div className="w-full aspect-[422/594] overflow-hidden relative">
            <img
              src="https://www.figma.com/api/mcp/asset/fc81c8e9-e261-4b98-b325-ed5619b5bdad"
              alt="Portrait"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:flex items-stretch justify-between gap-8">
          {/* Left column: [ About ] at top, text block at bottom */}
          <div className="flex flex-col justify-between flex-1 min-w-0">
            <p className="font-mono text-[0.875rem] text-[#1f1f1f] uppercase leading-[1.1]">
              [ About ]
            </p>
            <div className="flex items-stretch gap-3 max-w-[35rem] ml-auto">
              <div className="flex flex-col justify-between shrink-0">
                <div className="w-4 h-4 border-t border-l border-[#1f1f1f]" />
                <div className="w-4 h-4 border-b border-l border-[#1f1f1f]" />
              </div>
              <p className="flex-1 text-[0.875rem] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em] py-3">
                Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
              </p>
              <div className="flex flex-col justify-between shrink-0">
                <div className="w-4 h-4 border-t border-r border-[#1f1f1f]" />
                <div className="w-4 h-4 border-b border-r border-[#1f1f1f]" />
              </div>
            </div>
          </div>
          {/* Right column: 002 + Portrait */}
          <div className="flex gap-6 items-start shrink-0">
            <p className="font-mono text-[0.875rem] text-[#1f1f1f] leading-[1.1]">002</p>
            <div className="w-[30vw] max-w-[436px] aspect-[422/594] overflow-hidden relative">
              <img
                src="https://www.figma.com/api/mcp/asset/fc81c8e9-e261-4b98-b325-ed5619b5bdad"
                alt="Portrait"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
