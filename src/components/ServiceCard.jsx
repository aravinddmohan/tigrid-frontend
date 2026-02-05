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
    <div className="flex-1 flex gap-10 items-start">

      {/* NUMBER */}
      <div className="pt-1">
        <span className="text-[38px] tracking-[0.05em] text-white/70 leading-none">
          {number}
        </span>
      </div>

      {/* TEXT */}
      <div>
        <h3 className="text-[28px] md:text-[32px] font-semibold tracking-[0.08em] text-white leading-tight">
          {title}
        </h3>

        <ul className="mt-5 space-y-2 text-[15px] text-white/90">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <button className="mt-6 inline-flex items-center gap-3 px-7 py-2 rounded-full border border-white/40 text-sm text-white transition hover:border-white">
          Explore
        </button>
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full md:w-[300px] flex items-center justify-center p-4">
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
