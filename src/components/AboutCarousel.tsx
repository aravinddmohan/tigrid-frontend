import { useState, useEffect } from "react";

const images: string[] = [
  "asset1.webp",
  "asset2.webp",
  "asset3.jpg",
  "asset1.webp",
  "asset2.webp",
  "asset3.jpg",
];

const AboutCarousel = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000); // 3s
    return () => clearInterval(interval);
  }, []);
  const itemCount = images.length;
  const angle = 360 / itemCount;
  const radius =
    window.innerWidth < 640 ? 220 : window.innerWidth < 1024 ? 310 : 340;
  {
    /*depth circle*/
  }

  return (
    <div
      className="relative w-full flex justify-center items-center"
      style={{
        width: "clamp(240px, 60vw, 360px)",
        height: "clamp(240px, 60vw, 360px)",
        perspective: "clamp(600px, 120vw, 1200px)",
      }}
    >
      {/* Scene */}
      <div className="relative h-75 w-75" style={{ perspective: "900px" }}>
        {/* Ring */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${-index * angle}deg)`,
          }}
        >
          {images.map((img: string, i: number) => (
            <div
              key={i}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `
                  rotateY(${i * angle}deg)
                  translateZ(${radius}px)
                `,
              }}
            >
              <div className="w-[220px] h-[160px] sm:w-[260px] sm:h-[200px] md:w-[260px] md:h-[200px] flex items-center justify-center overflow-hidden rounded-xl bg-black/20">
                <img
                  src={`/assets/images/${img}`}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;
