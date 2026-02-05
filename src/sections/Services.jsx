import ServiceCard from "../components/ServiceCard";
import Button from "../components/Button";

const Services = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/assets/services/services-bg.jpg')] bg-cover bg-center opacity-50" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-[38px] md:text-[44px] font-semibold tracking-widest text-white">
          What We Do?
        </h2>

        {/* Sub text */}
        <p className="mt-4 text-center text-sm tracking-[0.15em] text-white/80 max-w-4xl mx-auto">
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
<div className="mt-16 flex justify-center">
 <Button 
    text="VIEW ALL" 
  />
</div>

      </div>
    </section>
  );
};

export default Services;
