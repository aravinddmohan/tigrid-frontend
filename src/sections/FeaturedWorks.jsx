// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FeaturedCards from "../components/FeaturedCards";
import featuredWorks from "../data/featuredWorks";
import Button from "../components/Button";

const FeaturedWorks = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="bg-black pt-32">

      {/* HEADING */}
      <h2 className="
        font-['DM_Sans'] 
        font-semibold 
        text-[36px] md:text-[50px] 
        leading-[1.4] 
        tracking-[0.2em] 
        text-center 
        text-white 
        mb-24
      ">
        Featured Works
      </h2>

      {/* STACKING CARDS */}
      <div className="relative flex flex-col gap-40">
        {featuredWorks.map((card, index) => {
          const y = useTransform(
            scrollYProgress,
            [index * 0.25, 1.5],
            [0, -140 * index]
          );

          const scale = useTransform(
            scrollYProgress,
            [index * 0.25, 1],
            [1, 0.92]
          );

          return (
            <motion.div
              key={card.id}
              style={{ y, scale }}
              className="sticky top-32"
            >
              <FeaturedCards
                index={card.index}
                title={card.title}
                description={card.description}
                image={card.image}
                tags={card.tags}
              />
            </motion.div>
          );
        })}
      </div>

      {/* VIEW ALL BUTTON */}
      <div className="flex justify-center mt-32 mb-28">
        <Button text="View All" />
      </div>

    </section>
  );
};

export default FeaturedWorks;
