const CTASection = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden bg-black">

      {/* bg */}
      <img
        src="/assets/images/finalcta-bg.png"
        alt="cta"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div className="relative z-10 max-w-3xl px-6">

        {/* ===== MOBILE TITLE ===== */}
        <h2 className="
          text-white font-bold
          text-[34px] leading-[1.3] tracking-[0.15em]
          mb-10
          md:hidden
        ">
          Ready to Elevate <br/>
          Your <br/>
          Brand With <br/>
          Next-Gen <br/>
          Innovation?
        </h2>

        {/* ===== DESKTOP/TAB TITLE (your original) ===== */}
        <h2 className="
          hidden md:block
          text-white font-bold
          md:text-[42px]
          leading-[1.3] tracking-[0.15em]
          mb-12
        ">
          Ready to Elevate Your Brand <br/>
          with Next-Gen Innovation?
        </h2>

        {/* paragraph */}
        <p className="
          text-white/80 
          text-[12px] md:text-[13px] 
          leading-[1.4] 
          tracking-[0.2em] 
          text-center
          max-w-[560px]
          mx-auto
          mb-12
        ">
          Let’s transform your ideas into powerful digital solutions
          designed for scale, performance, and impact.
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
