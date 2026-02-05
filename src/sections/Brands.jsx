import Marquee from "react-fast-marquee";

const brands = [
  "/assets/brands/airport 2.svg",
  "/assets/brands/cghs2.svg",
  "/assets/brands/jacca 2.svg",
  "/assets/brands/metro 2.svg",
  "/assets/brands/mhfw.svg",
  "/assets/brands/dbuilders.png",
  "/assets/brands/oktobr.png",
];

const Brands = () => {
  return (
    <section className="relative bg-black py-28 overflow-hidden">

      {/* title */}
      <h3 className="text-center text-sm tracking-[0.35em] uppercase text-white/70 mb-16">
        Brands we work with
      </h3>

      {/* wrapper */}
      <div className="relative">

        {/*  CENTER BRIGHTNESS LAYER  */}
<div
  className="pointer-events-none absolute inset-0 z-20"
  style={{
    background:
      "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 25%, rgba(255,255,255,0.25) 50%, rgba(0,0,0,0.85) 72%, rgba(0,0,0,0.95) 100%)",
    mixBlendMode: "overlay",
  }}
/>


        {/*  mask smooth fade */}
        <div
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, white 20%, white 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, white 20%, white 80%, transparent 100%)",
          }}
        >
          <Marquee speed={60} gradient={true} pauseOnHover={true}>
            {brands.map((src, i) => (
              <div key={i} className="mx-20">
                <img
                  src={src}
                  alt="brand"
                  className="h-14 w-auto object-contain opacity-70"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Brands;
