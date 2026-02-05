const Button = ({ text = "VIEW ALL", className = "", onClick }) => {
  return (
    <div className={`mt-28 flex justify-center ${className}`}>
      <button
        onClick={onClick}
        className="
        px-16 py-4
        rounded-full
        text-sm tracking-[0.2em]
        text-white
        bg-white/5
        backdrop-blur-xl
        border border-[#F15925]/40
        shadow-[0_-4px_7.7px_rgba(180,67,30,0.3),0_2px_6px_rgba(241,89,37,0.2),inset_0_4px_16.5px_rgba(221,81,35,0.18)]
        transition-all duration-300
        hover:shadow-[0_0_40px_rgba(241,89,37,0.35)]
        hover:scale-105
        "
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
