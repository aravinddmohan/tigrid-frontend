import BlogCard from "../components/BlogCard";
import Button from "../components/Button";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const blogs = [
  {
    id: 1,
    title: "The Digital Renaissance: Mastering Human-Centric Tech",
    date: "April 10, 2024",
    read: "5 Min Read",
    image: "/assets/blogs/blog1.png",
  },
  {
    id: 2,
    title: "The Digital Renaissance: Mastering Human-Centric Tech",
    date: "April 10, 2024",
    read: "5 Min Read",
    image: "/assets/blogs/blog1.png",
  },
  {
    id: 3,
    title: "The Digital Renaissance: Mastering Human-Centric Tech",
    date: "April 10, 2024",
    read: "5 Min Read",
    image: "/assets/blogs/blog1.png",
  },
    {
    id: 4,
    title: "The Digital Renaissance: Mastering Human-Centric Tech",
    date: "April 10, 2024",
    read: "5 Min Read",
    image: "/assets/blogs/blog1.png",
  },
  {
    id: 5,
    title: "The Digital Renaissance: Mastering Human-Centric Tech",
    date: "April 10, 2024",
    read: "5 Min Read",
    image: "/assets/blogs/blog1.png",         
  },
  {
    id: 6,
    title: "The Digital Renaissance: Mastering Human-Centric Tech",
    date: "April 10, 2024",
    read: "5 Min Read",
    image: "/assets/blogs/blog1.png",
  }
    
];

const BlogSection = () => {
  return (
    <section className="bg-black py-28 overflow-hidden">

      {/* heading */}
      <div className="text-center mb-20">
        <h2 className="text-white text-[42px] md:text-[50px] font-semibold tracking-[0.10em] leading-[1.4] mb-6">
          Blog
        </h2>
        <p className="text-white/70 text-[14px] md:text-[16px] tracking-[0.15em] leading-[1.6] max-w-[1100px] mx-auto capitalize">
          Stay up-to-date with the latest digital trends and innovations by reading our blogs.Dive into the forefront of the digital world with us
        </p>
      </div>

      {/* SWIPER */}
      <div className="px-10 overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          loop={true}
          loopFillGroupWithBlank={true}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 3 },
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* button */}
      <div className="flex justify-center mt-16">
        <Button text="View All" />
      </div>

    </section>
  );
};

export default BlogSection;
