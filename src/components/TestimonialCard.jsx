const TestimonialCard = ({ t }) => {
  return (
  <div
  className="
  relative   w-[360px] md:w-[420px] flex-shrink-0 rounded-[28px] mx-4">

      {/* gradient border */}
      <div
        className="
        absolute inset-0 rounded-[28px] border border-image
        bg-[linear-gradient(274deg,rgba(248,191,91,0.25)_12%,rgba(248,191,91,0.8)_55%,rgba(248,191,91,0.05)_75%)]
        opacity-3
        "
      ></div>

      {/* card body */}
      <div
        className="
        relative rounded-[28px]
        backdrop-blur-xl
        py-6 px-6
        bg-gradient-to-b from-white/[0.01] via-white/[0.02] to-transparent
        border border-white/10
        shadow-[0_0_40px_rgba(0,0,0,0.6)]"
      >
        {/* top */}
        <div className="flex items-start gap-4">
          {/* avatar */}
          <div className="w-12 h-12 rounded-full bg-white/20 overflow-hidden">
            <img
              src={t.image}
              alt={t.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* name + role */}
          <div>
            <h4 className="text-white tracking-[0.15em] text-[15px]">
              {t.name}
            </h4>

            <p className="text-white/60 text-[12px] tracking-[0.12em]">
              {t.role}
            </p>

            {/* stars */}
            <div className="flex mt-2 gap-1">
              {[...Array(t.rating)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/icons/star.svg"
                  alt="star"
                  className="w-4 h-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="border-t border-dashed border-[#F8BF5B]/40 my-5"></div>

        {/* text */}
        <p className="
        text-white/80 
        leading-[1.75] 
        tracking-[0.07em] 
        text-[13px] 
        max-w-[85%]
        ">
          {t.text}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
