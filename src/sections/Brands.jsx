import { useState,useEffect,useRef } from "react";
const brands = [
    "/assets/brands/airport 2.svg",
    "/assets/brands/cghs2.svg",
    "/assets/brands/jacca 2.svg",
    "/assets/brands/metro 2.svg",
    "/assets/brands/mhfw.svg",
    "/assets/brands/dbuilders.png",
    "/assets/brands/oktobr.png",
]
const Brands = () => {

  return (
    <section className="relative bg-black py-32 overflow-hidden">
      
      {/* Title */}
      <h3 className="text-center text-sm tracking-[0.35em] uppercase text-white/80 mb-16">
        Brands we work with
      </h3>

      {/* Fade overlays */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-150 bg-linear-to-r from-black to-transparent z-20" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-150 bg-linear-to-l from-black to-transparent z-20" />

      {/* Marquee */}
      <div className="relative">
        <div className="flex w-max marquee">
          {[...brands, ...brands].map((src, i) => (
            <div
              key={i}
              className="
                mx-20
                flex items-center
                opacity-70
                hover:opacity-100
                transition-opacity duration-300
              "
            >
              <img
                src={src}
                alt="Brand logo"
                className="h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands