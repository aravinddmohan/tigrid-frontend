// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ServiceCard = ({ number, title, items, image }) => {
  return (
<motion.div
  initial={{ opacity: 0, x: -24 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="
    relative
    bg-[white/2] backdrop-blur-xl
    border border-white/10
    rounded-3xl
    pt-10 pb-9 px-10
    flex flex-col md:flex-row
    items-center
    gap-8
    transition-all duration-300
  "
>
    {/* LEFT */}
    <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-14 lg:gap-20">

      {/* NUMBER */}
      <div className="pt-1 md:mr-12">
        <span className="text-[38px] tracking-[0.05em] text-white/70 leading-none">
          {number}
        </span>
      </div>

      {/* TEXT */}
      <div className=" flex flex-col items-start">
        <h3 className="text-[28px] md:text-[32px] font-semibold tracking-[0.08em] text-white leading-tight">
          {title}
        </h3>

        <ul className="mt-5 space-y-2 text-[15px] text-white/90">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        {/* IMAGE for mobile */}

        <div className="w-full flex justify-center my-8 md:hidden">
          <img
            src={image}
            alt={title}
            className="max-h-[150px] object-contain"
          />
        </div>

        <button className="mt-6 group relative inline-flex items-center justify-center w-[150px] h-[34px] text-[13px]   md:w-full max-w-[220px] h-[40px] rounded-full border border-white/40  text-white text-[16px] tracking-wide transition-all duration-300 hover:border-white">
          Explore
          <span className="absolute right-6 text-[22px] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0 hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] ">↗</span>
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="hidden md:flex md:w-[300px] items-center justify-center p-4">
      <img
        src={image}
        alt={title}
        className="w-auto max-h-[160px] object-contain"
      />
    </div>
</motion.div>
  );
};

export default ServiceCard;
