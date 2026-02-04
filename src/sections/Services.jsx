import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/assets/services/services-bg.jpg')] bg-cover bg-center opacity-50" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-[50px] font-semibold tracking-widest text-white">
          What We Do?
        </h2>

        {/* Sub text */}
        <p className="mt-6 text-center text-sm tracking-[0.15em] text-white/80 max-w-4xl mx-auto">
          We provide customized digital solutions that enhance business performance,
          strengthen brand identity, and streamline operations with precision and expertise.
        </p>

        {/* Service Cards */}
        <div className="mt-24 space-y-20">
          <ServiceCard
            number="01"
            title="Application Development"
            items={["Web App", "Mobile App", "Hybrid App"]}
            image="/assets/services/app-dev.png"
          />

          <ServiceCard
            number="02"
            title="Website Development"
            items={["Custom Website", "E-Commerce Website", "CMS Website"]}
            image="/assets/services/web-dev.png"
          />

          <ServiceCard
            number="03"
            title="Branding & Designing"
            items={["Web App", "Mobile App", "Hybrid App"]}
            image="/assets/services/branding.png"
          />

          <ServiceCard
            number="04"
            title="Digital Marketing"
            items={["SEO", "Social Media Marketing", "Video Advertising"]}
            image="/assets/services/marketing.png"
          />
        </div>
           {/* View All Button */}
<div className="mt-28 flex justify-center">
  <button className=" px-16 py-4
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
  ">
    VIEW ALL
  </button>
</div>

      </div>
    </section>
  );
};

export default Services;
