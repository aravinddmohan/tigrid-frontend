const CTASection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden bg-black">

      {/* background image */}
      <img
        src="/assets/images/finalcta-bg.png" 
        alt="cta"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div className="relative z-10 max-w-3xl px-6">

        <h2 className="
          text-white 
          font-semibold
          text-[75px] md:text-[42px] 
          leading-[1.3] 
          tracking-[0.15em] 
          font-light 
          mb-12
        ">
          Ready to Elevate Your Brand <br/>
          with Next-Gen Innovation?
        </h2>

        <p className="
          text-white/80 
          text-[11px] md:text-[13px] 
          leading-[1.3] 
          tracking-[0.22em] 
          text-center
          max-w-[560px]
          mx-auto
          mb-13
        ">
          Let’s Transform Your Ideas Into Powerful Digital Solutions
          Designed For Scale, Performance, And Impact.
        </p>

        {/* button */}
        <button className="
          px-10 py-4 
          rounded-full 
          border border-orange-400/50
          text-white tracking-[0.25em] text-sm
          bg-orange-500/10
          backdrop-blur-md
          transition-all duration-300
          hover:bg-orange-500 hover:text-white
          hover:shadow-[0_0_25px_rgba(255,120,0,0.6)]
        ">
          CONTACT US
        </button>

      </div>
    </section>
  );
};

export default CTASection;
