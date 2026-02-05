import Marquee from "react-fast-marquee";
import TestimonialCard from "../components/TestimonialCard";

/* dummy data */
const testimonials = [
  {
    id: 1,
    name: "Ajmal Ansar",
    role: "Tea Treat",
    rating: 5,
    text: "Tigrid team's expertise and dedication played a pivotal role in achieving our goals. The methodologies used by Tigrid brought us fast results. They always put their user knowledge, business understanding, and industry trends to the table.",
    image: "/assets/icons/avatar.png",
  },
  {
    id: 2,
    name: "Rahul Menon",
    role: "Zyra Technologies",
    rating: 4,
    text: "The team delivered beyond expectations. Their strategic thinking and technical expertise helped scale our product smoothly.",
    image: "/assets/icons/avatar.png",
  },
  {
    id: 3,
    name: "Nisha Varghese",
    role: "Brandify",
    rating: 5,
    text: "Working with Tigrid was seamless. Their attention to detail and user-first mindset made a huge impact on our digital presence.",
    image: "/assets/icons/avatar.png",
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="
      relative py-32 overflow-hidden
      bg-[url('/assets/images/testimonials-bg.jpg')]
      bg-cover bg-center bg-no-repeat
      "
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10">

        {/* heading */}
        <div className="text-center mb-20 px-6">
          <h2 className="text-white text-[42px] md:text-[50px] font-semibold tracking-[0.12em] mb-6">
            What our clients say
          </h2>

          <p className="text-white/70 text-[14px] md:text-[16px] tracking-[0.15em] max-w-4xl mx-auto">
            Explore the influence of our services by delving into the heartfelt testimonials of our satisfied customers.
          </p>
        </div>

        {/* marquee */}
        <Marquee
          pauseOnHover
          speed={30}
          gradient={false}>
        <div className="flex gap-1 items-stretch">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}

          {/* udplicate infinite loop */}
          {testimonials.map((t) => (
            <TestimonialCard key={`dup-${t.id}`} t={t} />
          ))}
        </div>
        </Marquee>

      </div>
    </section>
  );
};

export default TestimonialSection;
