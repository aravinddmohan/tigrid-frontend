const FeaturedCards = ({ index, title, description, image, tags }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="relative w-[1574px] h-[838px] rounded-[50px] backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(153,153,153,0.04))",
          borderImage:
            "linear-gradient(274.55deg, rgba(248,191,91,0.2) 12.74%, rgba(248,191,91,0.2) 32.81%, rgba(248,191,91,0.3) 47.79%, rgba(248,191,91,0.8) 55.93%, rgba(248,191,91,0.03) 75.05%) 1",
          borderWidth: "1px",
        }}
      >
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-[70px] w-[1434px] h-[698px] object-cover rounded-[50px]"
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-[70px]">
          {/* Index */}
          <div className="text-white/80 text-sm tracking-wide">
            {index}
          </div>

          {/* Text */}
          <div className="max-w-[594px]">
            <h2 className="text-white text-4xl font-semibold mb-4">
              {title}
            </h2>
            <p className="text-white/80 text-base leading-[21px]">
              {description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex gap-4 self-end">
            {tags.map((tag) => (
              <button
                key={tag}
                className="w-[196px] h-[43px] rounded-[20px] backdrop-blur-md bg-black/5 border border-white/10 text-white text-[16px] tracking-[0.15em] capitalize hover:bg-white/10 transition"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;
