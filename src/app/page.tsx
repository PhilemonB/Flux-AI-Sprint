"use client";

import Link from "next/link";
import { useState } from "react";

const heroImage = "/home hero img.png";

const navLinks = ["About", "Services", "Projects", "News", "Contact"];

const services = [
  {
    name: "Brand Discovery",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/e7f93af3-42ec-4266-91c6-e7e3e716c2ee",
  },
  {
    name: "Web Design & Dev",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/a91471df-0caf-4ba7-93a3-38b69bd3c888",
  },
  {
    name: "Marketing",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/b89362bc-51ce-48c3-adc7-4f9f9e34681a",
  },
  {
    name: "Photography",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "https://www.figma.com/api/mcp/asset/54dec186-0bb8-4264-b9c9-d8578e010994",
  },
];

const projects = [
  {
    title: "Surfers Paradise",
    tags: ["Social Media", "Photography"],
    image: "https://www.figma.com/api/mcp/asset/86b0b7a8-39db-4e45-af2e-ccdc07209290",
  },
  {
    title: "Cyberpunk Caffe",
    tags: ["Social Media", "Photography"],
    image: "https://www.figma.com/api/mcp/asset/8c51dc89-fba2-405f-af75-457a713e454a",
  },
  {
    title: "Agency 976",
    tags: ["Social Media", "Photography"],
    image: "https://www.figma.com/api/mcp/asset/fad95639-835b-4cf9-8fe6-7b4c6d4e47b5",
  },
  {
    title: "Minimal Playground",
    tags: ["Social Media", "Photography"],
    image: "https://www.figma.com/api/mcp/asset/70213a53-d41f-4bd5-ac0b-b039d29cc9cb",
  },
];

const portfolioArrow = "https://www.figma.com/api/mcp/asset/ad672a00-21d6-47ea-9ca6-605da45bc450";
const cornerAssets = {
  tl: "https://www.figma.com/api/mcp/asset/6159a28d-8a60-4f70-a7db-bfd474189ac0",
  bl: "https://www.figma.com/api/mcp/asset/771e764c-d1b7-4ab7-8abd-7c416d435b55",
  tr: "https://www.figma.com/api/mcp/asset/5d2329d9-3c59-4bac-b527-35c7d3755767",
  br: "https://www.figma.com/api/mcp/asset/c9387502-7e30-4743-81a0-81e862c5a9e4",
};

function ProjectCard({ title, tags, image, heightClass }: {
  title: string;
  tags: string[];
  image: string;
  heightClass: string;
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className={`relative w-full ${heightClass} overflow-hidden`}>
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute bottom-4 left-4 flex gap-3">
          {tags.map((tag) => (
            <span key={tag} className="backdrop-blur-sm bg-white/30 px-2 py-1 rounded-full text-[0.875rem] font-medium text-[#111] tracking-[-0.035em] whitespace-nowrap">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="font-black uppercase text-black tracking-[-0.04em] leading-[1.1] text-[1.5rem] md:text-[2.25rem]">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 shrink-0">
          <img src={portfolioArrow} alt="" className="w-8 h-8 -rotate-90" />
        </div>
      </div>
    </div>
  );
}

function CtaBox() {
  return (
    <div className="flex gap-3 items-stretch">
      <div className="flex flex-col justify-between w-6 shrink-0">
        <img src={cornerAssets.tl} alt="" className="w-4 h-4" />
        <img src={cornerAssets.bl} alt="" className="w-4 h-4 -rotate-90" />
      </div>
      <div className="flex flex-col gap-[10px] flex-1 min-w-0 py-3">
        <p className="text-[0.875rem] text-[#1f1f1f] italic leading-[1.3] tracking-[-0.035em]">
          Discover how my creativity transforms ideas into impactful digital experiences — schedule a call with me to get started.
        </p>
        <button className="self-start bg-black text-white text-[0.875rem] font-medium tracking-[-0.035em] px-4 py-3 rounded-full hover:opacity-80 transition-opacity">
          Let&apos;s talk
        </button>
      </div>
      <div className="flex flex-col justify-between items-end w-6 shrink-0">
        <img src={cornerAssets.tr} alt="" className="w-4 h-4 rotate-90" />
        <img src={cornerAssets.br} alt="" className="w-4 h-4 rotate-180" />
      </div>
    </div>
  );
}

// em values are relative to the title's font-size (clamp 4rem→12.375rem).
// At 1440px (198px font): title top-left ≈ (150px, 384px) from section origin.
// leftEm = (card_x - 150) / 198,  topEm = (card_y - 384) / 198
const testimonials = [
  {
    logo: { src: "https://www.figma.com/api/mcp/asset/efa8133e-f833-4db5-9871-f0286a3b943d", w: 143, h: 19 },
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
    desktop: { leftEm: -0.24, topEm: -1.22, rotate: "-6.85deg", zClass: "z-20" },
    mobileRotate: "-3.5deg",
  },
  {
    logo: { src: "https://www.figma.com/api/mcp/asset/b7f7c7bc-7842-42a2-894b-41e071e352f5", w: 138, h: 19 },
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    author: "Lukas Weber",
    desktop: { leftEm: 2.66, topEm: -0.57, rotate: "2.9deg", zClass: "z-0" },
    mobileRotate: "2deg",
  },
  {
    logo: { src: "https://www.figma.com/api/mcp/asset/4797a220-7726-47db-806b-e993fa6131a9", w: 109, h: 31 },
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    author: "Sarah Jenkins",
    desktop: { leftEm: 0.78, topEm: 0.85, rotate: "2.23deg", zClass: "z-20" },
    mobileRotate: "-3.5deg",
  },
  {
    logo: { src: "https://www.figma.com/api/mcp/asset/7abfbb19-2897-4642-841d-de430ca282e9", w: 81, h: 36 },
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    author: "Sofia Martínez",
    desktop: { leftEm: 4.23, topEm: 0.82, rotate: "-4.15deg", zClass: "z-20" },
    mobileRotate: "2deg",
  },
];

const newsItems = [
  { image: "https://www.figma.com/api/mcp/asset/43384be8-dceb-47f9-931d-a6ec0955dfe7" },
  { image: "https://www.figma.com/api/mcp/asset/c9673ae6-86fc-4409-ab0d-aa004925b99d" },
  { image: "https://www.figma.com/api/mcp/asset/3c71bd9c-7e05-40c8-876a-fb903573a504" },
];
const newsArrow = "https://www.figma.com/api/mcp/asset/f0452c25-e819-4e0a-ad5d-cc23775ef78f";

function TestimonialCard({
  logo,
  quote,
  author,
  widthClass = "w-[353px]",
}: {
  logo: { src: string; w: number; h: number };
  quote: string;
  author: string;
  widthClass?: string;
}) {
  return (
    <div className={`bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 ${widthClass}`}>
      <img src={logo.src} alt="" style={{ width: logo.w, height: logo.h, objectFit: "contain" }} />
      <p className="text-[1.125rem] text-[#1f1f1f] leading-[1.3] tracking-[-0.04em]">{quote}</p>
      <p className="font-black text-[1rem] text-black tracking-[-0.04em] uppercase leading-[1.1]">{author}</p>
    </div>
  );
}

function NewsCard({ image, imageHeightClass = "h-[469px]" }: {
  image: string;
  imageHeightClass?: string;
}) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className={`relative w-full ${imageHeightClass} shrink-0`}>
        <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      </div>
      <p className="text-[0.875rem] leading-[1.3] tracking-[-0.035em] text-[#1f1f1f] flex-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="border-b border-black flex gap-[10px] items-center py-1 self-start shrink-0">
        <span className="text-[0.875rem] font-medium tracking-[-0.04em] text-black whitespace-nowrap">Read more</span>
        <div className="relative size-[18px] flex-none">
          <img src={newsArrow} alt="" className="absolute inset-0 block size-full -rotate-90" />
        </div>
      </div>
    </div>
  );
}

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
    {/* Full-bleed photo section */}
    <section className="font-inter w-full h-screen max-h-[35.3125rem] md:max-h-[56.25rem] overflow-hidden relative">
      <img
        src="https://www.figma.com/api/mcp/asset/2b1de1c4-8050-4e98-8530-199cd260b530"
        alt="Photographer at work"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
    </section>

    {/* Services section */}
    <section id="services" className="font-inter bg-black w-full px-6 md:px-8 py-12 md:py-20">
      <div className="w-full max-w-[110rem] mx-auto flex flex-col gap-8 md:gap-12">

        {/* [ services ] */}
        <p className="font-mono text-[0.875rem] text-white uppercase leading-[1.1]">
          [ services ]
        </p>

        {/* [4] Deliverables */}
        <div className="flex items-center justify-between font-light text-white uppercase leading-none tracking-[-0.08em] text-[clamp(1.5rem,5.5vw,6rem)] whitespace-nowrap">
          <span>[4]</span>
          <span>Deliverables</span>
        </div>

        {/* Service rows */}
        <div className="flex flex-col gap-12">
          {services.map((s, i) => (
            <div key={s.name} className="flex flex-col gap-3 md:gap-[9px]">
              {/* Number + divider */}
              <div className="flex flex-col gap-[9px]">
                <p className="font-mono text-[0.875rem] text-white uppercase leading-[1.1]">
                  [ {i + 1} ]
                </p>
                <div className="w-full h-px bg-white" />
              </div>

              {/* Desktop: name left, desc+img right. Mobile: stacked */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-6 pt-1">
                <p className="font-bold italic text-[clamp(1.5rem,4.5vw,2.25rem)] text-white tracking-[-0.04em] uppercase leading-[1.1]">
                  {s.name}
                </p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start min-w-0">
                  <p className="text-[0.875rem] text-white leading-[1.3] tracking-[-0.035em] max-w-[24.5625rem] min-w-0">
                    {s.description}
                  </p>
                  <div className="relative w-[9.4375rem] h-[9.4375rem] shrink-0 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

    {/* Portfolio / Selected Work section */}
    <section id="projects" className="font-inter bg-white w-full px-6 md:px-8 py-12 md:py-20">
      <div className="w-full max-w-[110rem] mx-auto flex flex-col gap-6 md:gap-[3.8125rem]">

        {/* Mobile header */}
        <div className="flex flex-col gap-4 uppercase md:hidden">
          <p className="font-mono text-[0.875rem] text-[#1f1f1f] leading-[1.1]">[ portfolio ]</p>
          <div className="flex items-start justify-between">
            <p className="font-light text-[2rem] text-black tracking-[-0.08em] leading-[0.86]">
              Selected<br />Work
            </p>
            <p className="font-mono text-[0.875rem] text-[#1f1f1f] leading-[1.1]">004</p>
          </div>
        </div>

        {/* Desktop header */}
        <div className="hidden md:flex items-center justify-between uppercase">
          <div className="flex gap-[10px] items-start">
            <div className="font-light text-[6rem] text-black tracking-[-0.08em] leading-[0.86]">
              <p>Selected</p>
              <p>Work</p>
            </div>
            <p className="font-mono text-[0.875rem] text-[#1f1f1f] leading-[1.1] mt-1">004</p>
          </div>
          <div className="flex h-[110px] w-[15px] items-center justify-center overflow-visible">
            <p className="font-mono text-[0.875rem] text-[#1f1f1f] uppercase -rotate-90 whitespace-nowrap leading-[1.1]">[ portfolio ]</p>
          </div>
        </div>

        {/* Mobile: single column */}
        <div className="flex flex-col gap-6 md:hidden">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} tags={p.tags} image={p.image} heightClass="h-[390px]" />
          ))}
          <CtaBox />
        </div>

        {/* Desktop: two columns, right offset 240px */}
        <div className="hidden md:flex gap-6 items-end">
          <div className="flex-1 flex flex-col gap-[7.3125rem]">
            <ProjectCard {...projects[0]} heightClass="h-[744px]" />
            <ProjectCard {...projects[1]} heightClass="h-[699px]" />
            <CtaBox />
          </div>
          <div className="flex-1 flex flex-col gap-[7.3125rem] pt-[240px]">
            <ProjectCard {...projects[2]} heightClass="h-[699px]" />
            <ProjectCard {...projects[3]} heightClass="h-[744px]" />
          </div>
        </div>

      </div>
    </section>
    {/* Testimonials section */}
    <section className="font-inter bg-white w-full overflow-hidden">

      {/* Mobile: title then horizontal scroll of cards */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <p className="font-medium text-[4rem] text-black tracking-[-0.07em] leading-[0.8] capitalize text-center">
          Testimonials
        </p>
        <div className="overflow-x-auto overflow-y-hidden -mx-4">
          <div className="flex items-start px-4 pt-6 pb-3" style={{ width: "max-content" }}>
            {testimonials.map((t, i) => (
              <div
                key={t.author}
                className="shrink-0"
                style={{
                  transform: `rotate(${t.mobileRotate})`,
                  marginRight: i < testimonials.length - 1 ? "-10px" : "0",
                }}
              >
                <TestimonialCard logo={t.logo} quote={t.quote} author={t.author} widthClass="w-[260px]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: big centered text with scattered absolute cards */}
      {/* Outer div centres the title wrapper and provides section height */}
      <div className="hidden md:flex items-center justify-center px-8 py-[7.5rem] min-h-[61.6875rem]">
        {/* Title is the relative parent — cards use em offsets from its font-size */}
        <div
          className="relative"
          style={{ fontSize: "clamp(4rem, 13.75vw, 12.375rem)" }}
        >
          <p className="text-[1em] font-medium text-black tracking-[-0.07em] leading-[1.1] capitalize text-center relative z-10">
            Testimonials
          </p>
          {testimonials.map((t) => (
            <div
              key={t.author}
              className={`absolute ${t.desktop.zClass} origin-top-left xl:scale-100 lg:scale-[0.75] md:scale-[0.55]`}
              style={{
                left: `${t.desktop.leftEm}em`,
                top: `${t.desktop.topEm}em`,
              }}
            >
              <div style={{ transform: `rotate(${t.desktop.rotate})` }}>
                <TestimonialCard logo={t.logo} quote={t.quote} author={t.author} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>

    {/* News / Latest section */}
    <section className="font-inter bg-[#f3f3f3] w-full">

      {/* Mobile/tablet: title + horizontal scroll */}
      <div className="lg:hidden px-4 py-16 flex flex-col gap-8">
        <p className="font-light text-[2rem] text-black tracking-[-0.08em] uppercase leading-[0.86] py-2">
          Keep up with my latest news &amp; achievements
        </p>
        <div className="overflow-x-auto overflow-y-hidden -mx-4">
          <div className="flex gap-4 px-4 pb-2" style={{ width: "max-content" }}>
            {newsItems.map((item, i) => (
              <div key={i} className="w-[300px] shrink-0">
                <NewsCard image={item.image} imageHeightClass="h-[398px]" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: vertical heading + 3-column staggered cards */}
      <div className="hidden lg:flex items-end px-8 py-[7.5rem] gap-[3.125rem] xl:gap-[15.37rem]">
        {/* Vertical heading — rotated -90deg, centred inside a thin column */}
        <div className="shrink-0 w-[110px] self-stretch flex items-center justify-center">
          <div className="-rotate-90 flex-none flex flex-col font-light text-[4rem] text-black tracking-[-0.08em] uppercase leading-[0.86] whitespace-nowrap">
            <span>Keep up with my latest</span>
            <span>news &amp; achievements</span>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-1 items-start min-w-0 gap-[31px]">
          <div className="flex-1 min-w-0">
            <NewsCard image={newsItems[0].image} />
          </div>
          <div className="w-px self-stretch bg-black shrink-0" />
          {/* Middle card is offset 120px down to match the staggered Figma layout */}
          <div className="flex-1 min-w-0 pt-[7.5rem]">
            <NewsCard image={newsItems[1].image} />
          </div>
          <div className="w-px self-stretch bg-black shrink-0" />
          <div className="flex-1 min-w-0">
            <NewsCard image={newsItems[2].image} />
          </div>
        </div>
      </div>

    </section>
    </>
  );
}
