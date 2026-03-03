import Navbar from "../components/Navbar";
const HeroSection = () => {
  return (
    <section
      className='  w-full h-screen
        bg-[url("/assets/images/bgorange.jpg")]
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center
        text-white
'
    >
      <Navbar />
      <div className="wrapper text-center">
        <p className="font-primary font-normal text-[30px] leading[-1] tracking-widest text-center mb-4">
          Your Gateway To Next-Gen
        </p>

        <h1 className="font-primary font-bold text-4xl md:text-6xl lg:text-7xl tracking-[0.25em]">
          DIGITAL SOLUTIONS
        </h1>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
          <button
  className="
    px-10 py-4
    rounded-[20px]
    bg-[rgba(241,89,37,0.13)]
    shadow-[
      0_-4px_7.7px_rgba(180,67,30,0.3),
      0_2px_6px_rgba(241,89,37,0.2),
      inset_0_4px_16.5px_rgba(221,81,35,0.18)
    ]
    transition-all duration-300
    hover:bg-[rgba(241,89,37,0.18)]
  "
>
  <span
    className="
      font-primary
      font-medium
      text-[18px]
      leading-[1.4]
      tracking-widest
      uppercase
      text-white
    "
  >
    Start a Project
  </span>
</button>


<button className="  px-10 py-4  rounded-[20px] bg-transparent border border-white/40 transition-all duration-300  hover:border-white   hover:bg-white/5">
  <span className="font-primary font-medium  text-[18px] leading-[1.4]  tracking-widest  uppercase text-white">
    View Works
  </span>
</button>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
