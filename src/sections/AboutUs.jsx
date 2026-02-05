import { useEffect, useState, useRef } from "react";
import AboutCarousel from "../components/AboutCarousel";

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const paragraphRef = useRef(null);

  const paragraphOne =
    "We are TIGRID, a trailblazing IT company headquartered in the dynamic hub of TechnoPark, Trivandrum. With a visionary and passionate team of experts, we proudly stand as the foremost branding and development company in Kerala. At TIGRID, we don't just provide services; we craft digital experiences. We take pride in continuing to offer technical and digital solutions for business worldwide.";

  const paragraphTwo =
    "Choose us as your trusted partner for comprehensive IT services that drive success.";

  const words = paragraphOne.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!paragraphRef.current) return;

      const rect = paragraphRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Define scroll window offset
      const start = viewportHeight * 1.5;
      const end = viewportHeight * 0.1;

      const progress =
        (start - rect.top) / (rect.height + start - end);

      // Clamp 0 → 1
      const clamped = Math.min(Math.max(progress, 0), 1);

      // Map progress to word index
      const index = Math.floor(clamped * words.length);

      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <section className="relative bg-black py-10 text-white overflow-hidden">
      {/* Top background image */}
      <div
        className="
          absolute top-0 left-0 w-full h-125
          fill-black
          bg-cover
          bg-position-[50%_35%]
          z-0
        "
      />

      {/* Bottom gradient overlay */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-187.5
          bg-linear-to-t
          from-black
          via-black/80
          to-transparent
          z-10
        "
      />

      {/* Content */}
      <div className="relative z-20 wrapper text-center">
        {/* Title */}
        <h2 className="text-[36px] md:text-[50px] font-semibold tracking-widest mb-16">
          About Us
        </h2>

        {/* Carousel */}
        <div className="flex justify-center mb-20">
          <AboutCarousel />
        </div>

        {/* PARAGRAPH 1 */}
        <p
          ref={paragraphRef}
          className="
            max-w-300
            mx-auto
            text-[24px] md:text-[38px]
            leading-[1.15]
            mb-10
            flex flex-wrap justify-center gap-x-2
          "
        >
          {words.map((word, i) => (
            <span
              key={i}
              className={`
                transition-all duration-300 ease-out
                ${i <= activeIndex ? "opacity-100" : "opacity-20"}
              `}
            >
              {word}
            </span>
          ))}
        </p>

        {/* PARAGRAPH 2 */}
        <p
          className={`
            max-w-300
            mx-auto
            text-[24px] md:text-[38px]
            leading-[1.15]
            transition-opacity duration-500 ease-out
            ${
              activeIndex >= words.length - 1
                ? "opacity-100"
                : "opacity-0"
            }
          `}
        >
          {paragraphTwo}
        </p>

        {/* CTA */}
        <button
          className="
            mt-20
            px-10 py-4
            rounded-[20px]
            bg-[rgba(241,89,37,0.13)]
            shadow-[
              0_-4px_7.7px_rgba(180,67,30,0.3),
              0_2px_6px_rgba(241,89,37,0.2),
              inset_0_4px_16.5px_rgba(221,81,35,0.18)
            ]
            text-[18px]
            tracking-[0.2em]
            uppercase
            hover:bg-[rgba(241,89,37,0.2)]
            transition
          "
        >
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
