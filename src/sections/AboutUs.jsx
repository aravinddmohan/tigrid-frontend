import { useEffect, useState } from "react";
import AboutCarousel from "../components/AboutCarousel";

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
  const targets = document.querySelectorAll(".about-sentence");
  const viewportCenter = window.innerHeight * 0.65;

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries.filter(e => e.isIntersecting);
    if (!visible.length) return;

    const closest = visible.reduce((prev, curr) => {
      const prevDist =
        Math.abs(prev.boundingClientRect.top +
        prev.boundingClientRect.height / 2 -
        viewportCenter);

      const currDist =
        Math.abs(curr.boundingClientRect.top +
        curr.boundingClientRect.height / 2 -
        viewportCenter);

      return currDist < prevDist ? curr : prev;
    });

    const index = Number(closest.target.dataset.index);
    setActiveIndex(index);
  },
  {
    threshold: 0.3,
    rootMargin: "-30% 0px -30% 0px"
  }
);


  targets.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}, []);


  return (
    <section className="relative bg-black py-10 text-white overflow-hidden">
      {/* Top background image */}
      <div
        className="
          absolute top-0 left-0 w-full h-125
          bg-[url('/assets/images/retouch.jpg')]
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
        <h2
          className="
            text-[36px] md:text-[50px]
            font-semibold
            tracking-widest
            mb-16
          "
        >
          About Us
        </h2>

        {/* Carousel */}
        <div className="flex justify-center mb-20">
          <AboutCarousel />
        </div>

        {/* Paragraph A + B */}
        <p
          className="
            max-w-300
            mx-auto
            text-[24px] md:text-[38px]
            leading-[1.15]
            mb-16
          "
        >
          <span
            data-index="0"
            className={`
              about-sentence
              transition-opacity-transform duration-800 ease-in-out
              ${activeIndex === 0 ? "opacity-100 " : "opacity-15 scale-100"}
            `}
          >
            We are TIGRID, a trailblazing IT company headquartered in the dynamic hub
            of TechnoPark, Trivandrum. With a visionary and passionate team of experts,
            we proudly stand as the foremost branding and development company in Kerala.
          </span>

          <span
            data-index="1"
            className={`
              about-sentence mt-5
              transition-opacity duration-150 ease-in-out
              ${activeIndex === 1 ? "opacity-100" : "opacity-15"}
            `}
          >
              At TIGRID, we don't just provide services; we craft digital experiences.
            We take pride in continuing to offer technical and digital solutions for
            business worldwide.
          </span>
        </p>

        {/* Paragraph C */}
        <p
          data-index="2"
          className={`
            about-sentence
            max-w-300
            mx-auto
            text-[24px] md:text-[38px]
            leading-[1.15]
            mb-20
            transition-opacity duration-800 ease-in-out
            ${activeIndex ===  2 ? "opacity-100" : "opacity-15"}
          `}
        >
          Choose us as your trusted partner for comprehensive IT services
          that drive success.
        </p>

        {/* ✅ Read More CTA (RESTORED) */}
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
