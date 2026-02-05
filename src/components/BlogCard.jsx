const BlogCard = ({ blog }) => {
  return (
    <div className="relative w-full max-w-[460px] h-[400px] rounded-[24px] p-[1px] group transition-all duration-500 cursor-pointer">

      {/* glow */}
      <div className="absolute inset-0 rounded-[26px] bg-gradient-to-b from-orange-500/20 via-zinc-800/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

      {/* body */}
      <div className="relative h-full w-full rounded-[24px] bg-[#0b0b0b] p-5 flex flex-col justify-between border border-white/5">

        {/* image */}
        <div className="w-full flex justify-center pt-4">
          <div className="w-[92%] h-[200px] rounded-[16px] overflow-hidden bg-black">
            <img
              src={blog.image}
              alt="blog"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* text */}
        <div className="mt-4 px-3">
          <h3 className="text-white text-[18px] md:text-[17px] leading-[1.5] font-light tracking-[0.03em]">
            {blog.title}
          </h3>

          <div className="flex gap-6 mt-4 text-white/50 text-[12px] tracking-[0.22em] uppercase">
            <span>{blog.date}</span>
            <span>{blog.read}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;
