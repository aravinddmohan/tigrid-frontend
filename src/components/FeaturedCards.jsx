const FeaturedCards = ({ index, title, description, image, tags }) => {
  return (
    <section className="w-full bg-black py-24 flex justify-center">

      {/* GLASS CARD */}
      <div
        className="relative w-[88%] max-w-[1050px] rounded-[40px] backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(153,153,153,0.05))",
          border: "1px solid",
          borderImageSlice: 1,
          borderImageSource:
            "linear-gradient(273deg, rgba(230,170,0,0), rgba(248,191,0,0.65), rgba(248,191,0,0))",
        }}
      >

        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="absolute inset-[26px] w-[calc(100%-52px)] h-[calc(100%-52px)] object-cover rounded-[26px]"
        />

        {/* DARK GRADIENT */}
        <div className="absolute inset-[26px] rounded-[26px] bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* CONTENT LAYER  */}
        <div className="
          relative z-10
          min-h-[480px]
          sm:min-h-[520px]
          lg:min-h-[560px]
        ">

          {/* INDEX */}
          <div className="absolute top-8 left-12 text-white/70 text-sm tracking-wide">
            {index}
          </div>

          {/* BOTTOM CONTENT */}
          <div className="
            absolute 
            bottom-10 sm:bottom-12 lg:bottom-14
            left-9 right-9 sm:left-12 sm:right-12
            flex flex-col lg:flex-row
            gap-6 lg:gap-0
            lg:items-end lg:justify-between
          ">

            {/* LEFT TEXT */}
            <div className="max-w-[92%] sm:max-w-md">
              <h2 className="text-white text-[22px] sm:text-3xl md:text-4xl font-semibold mb-2 sm:mb-3
">
                {title}
              </h2>

              <p className="text-white/80 text-[13px] sm:text-sm md:text-base leading-[1.6]">
                {description}
              </p>
            </div>

            {/* RIGHT TAGS */}
            <div className="flex lg:justify-end w-auto max-w-full">
              <div
                className={`
                  grid w-full sm:w-auto
                  gap-2 sm:gap-3
                  ${tags.length > 2
                    ? "grid-cols-2"
                    : "grid-cols-1 sm:grid-cols-2"}
                `}
              >
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className=" w-fit px-3 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-sm rounded-full backdrop-blur-md bg-black/25 border border-white/15 tracking-wider hover:bg-white/10 transition whitespace-nowrap"
                    >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCards;
