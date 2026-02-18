import { useEffect, useRef } from "react";

const FAQItem = ({ item, isOpen, onToggle, onClose }) => {
  const ref = useRef();

  // automatic close
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
        w-full
        rounded-[22px]
        border border-[#F8BF5B]/40
        bg-black/40 backdrop-blur-xl
        px-5 sm:px-6
        py-4 sm:py-5
        transition-all duration-500
      "
    >
      {/* HEADER */}
      <div
        onClick={onToggle}
        className="
          flex items-center justify-between
          cursor-pointer gap-4
        "
      >
        <h4
          className="
            text-white
            tracking-[0.12em]
            text-xs sm:text-sm md:text-[15px]
            leading-relaxed
            pr-4
          "
        >
          {item.q}
        </h4>

        {/* PLUS / CLOSE */}
        <div className="text-white text-xl sm:text-2xl flex-shrink-0">
          {isOpen ? "×" : "+"}
        </div>
      </div>

      {/* ANSWER */}
      <div
        className={`
          overflow-hidden
          transition-all duration-500 ease-in-out
          ${
            isOpen
              ? "max-h-[400px] sm:max-h-[260px] mt-4 opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <p
          className="
            text-white/70
            text-xs sm:text-sm
            leading-relaxed
            tracking-[0.05em]
          "
        >
          {item.a}
        </p>
      </div>
    </div>
  );
};

export default FAQItem;
