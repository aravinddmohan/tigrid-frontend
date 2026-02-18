import Marquee from "react-fast-marquee";

const brands = [
  "/assets/brands/airport2.png",
  "/assets/brands/cghs2.png",
  "/assets/brands/jacca2.svg",
  "/assets/brands/metro2.png",
  "/assets/brands/mhfw.png",
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
  className="pointer-events-none absolute inset-0 z-10 flex justify-center">
    <div className="w-[40%] h-full bg-white/10 blur-3xl opacity-20" />
</div>


        {/*  mask smooth fade */}
        <div>
          <Marquee speed={60} gradient={false} pauseOnHover={true}>
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
