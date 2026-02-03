import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const AboutCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <div className="relative group">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {["asset1.webp", "asset2.webp", "asset3.jpg"].map((img, i) => (
            <div
              key={i}
              className="flex-[0_0_100%] flex justify-center"
            >
              <img
                src={`/assets/images/${img}`}
                className="h-105 md:h-115"
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          opacity-0 -translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300
          bg-black/40 hover:bg-black/60
          text-white text-2xl
          w-10 h-10 rounded-full
          flex items-center justify-center
        "
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => emblaApi && emblaApi.scrollNext()}
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          opacity-0 translate-x-2
          group-hover:opacity-100 group-hover:translate-x-0
          transition-all duration-300
          bg-black/40 hover:bg-black/60
          text-white text-2xl
          w-10 h-10 rounded-full
          flex items-center justify-center
        "
      >
        ›
      </button>
    </div>
  );
};

export default AboutCarousel;
