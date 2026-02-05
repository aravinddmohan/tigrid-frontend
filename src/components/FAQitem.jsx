import { useEffect, useRef } from "react";

const FAQItem = ({ item, isOpen, onToggle, onClose }) => {
  const ref = useRef();

  useEffect(() => {
    const handleMove = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousemove", handleMove);
    }

    return () => document.removeEventListener("mousemove", handleMove);
  }, [isOpen, onClose]);

  return (
    <div
      ref={ref}
      className="
      w-[520px]
      rounded-[22px]
      border border-[#F8BF5B]/40
      bg-black/40 backdrop-blur-xl
      px-6 py-5
      transition-all duration-500
      "
    >
      {/* header */}
      <div
        onClick={onToggle}
        className="flex items-center justify-between cursor-pointer"
      >
        <h4 className="text-white tracking-[0.18em] text-sm">
          {item.q}
        </h4>

        {/* close */}
        <div className="text-white text-2xl">
          {isOpen ? "×" : "+"}
        </div>
      </div>

      {/* answer */}
      <div
        className={`
        overflow-hidden transition-all duration-500
        ${isOpen ? "max-h-[200px] mt-4 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-white/70 text-sm leading-relaxed tracking-[0.1em]">
          {item.a}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
