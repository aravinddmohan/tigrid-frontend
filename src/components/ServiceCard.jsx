import { motion } from "framer-motion";

const ServiceCard = ({ number, title, items, image }) => {
  return (
<motion.div
  initial={{ opacity: 0, x: -24 }}
  whileInView={{ opacity: 1, x: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1, ease: "ease-in-out" }}
  className="
    relative
    bg-[white/2] backdrop-blur-xl
    border border-white/10
    rounded-3xl
    pt-14 pb-12 px-15
    flex flex-col md:flex-row
    items-start gap-12
    transition-all duration-300
  "
>
    {/* LEFT */}
      <div className="flex-1 flex gap-19">
        <div className="pt-1 mr-8">
          <span className="text-[50px] tracking-[0.05em] text-white/80 leading-none">
            {number}
          </span>
        </div>

        <div>
          <h3 className="mt-2 text-[36px] font-semibold tracking-[0.1em] text-white leading-tight">
            {title}
          </h3>

          <ul className="mt-10 space-y-3 text-lg text-white">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <button className="mt-10 inline-flex items-center gap-3 px-10 py-3 rounded-full border border-white/50 text-white transition hover:border-white">
            Explore 
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-[400px] flex items-center justify-center p-8">
        <img
          src={image}
          alt={title}
          className="w-auto max-h-[220px] object-contain"
        />
      </div>
    </motion.div>
  );
};
export default ServiceCard;