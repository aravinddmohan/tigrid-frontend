import { useState,useEffect } from "react";

const images = [
  "asset1.webp",
  "asset2.webp",
  "asset3.jpg",
  "asset1.webp",
  "asset2.webp",
  "asset3.jpg",
];

const AboutCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => prev + 1);
  }, 3000); // 3s

  return () => clearInterval(interval);
}, []);
  const itemCount = images.length;
  const angle = 360 / itemCount;
  const radius = window.innerWidth < 640 ? 160 : window.innerWidth < 1024 ? 220 : 280;
 // depth of the circle

  return (
    <div className="relative w-full flex justify-center items-center" style={{
    width: "clamp(240px, 60vw, 360px)",
    height: "clamp(240px, 60vw, 360px)",
    perspective: "clamp(600px, 120vw, 1200px)",
  }}>
      {/* Scene */}
      <div
        className="relative h-75 w-75"
        style={{ perspective: "900px" }}
      >
        {/* Ring */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${-index * angle}deg)`,
          }}
        >
          {images.map((img, i) => (
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
              <img
                src={`/assets/images/${img}`}
                alt=""
                className=" h-[160px] sm:h-[200px] md:h-[240px] object-contain rounded-xl"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;
