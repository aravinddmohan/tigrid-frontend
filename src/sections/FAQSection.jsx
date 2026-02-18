import { useState } from "react";
import FAQItem from "../components/FAQitem";

const faqs = [
  {
    q: "What Services Does TIGRID technologies offer?",
    a: "TIGRID delivers end-to-end digital solutions including UI/UX design, web and app development, branding, and product strategy.",
  },
  {
    q: "What will be the esitimated duration of project completion?",
    a: "Project timelines depend on scope, but most design and development projects take between 4–12 weeks.",
  },
  {
    q: "Do You Offer Branding Services?",
    a: "Yes. We provide full branding including identity design, brand strategy, and visual systems.",
  },
  {
    q: "Are you approachable in working with Startups?",
    a: "Absolutely. We specialize in working with startups and scaling companies.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black py-32 px-10 sm:py-28 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">

        {/* left */}
        <div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[0.12em] sm:tracking-[0.15em] mb-5 sm:mb-6">
            Frequently Asked<br />Questions
          </h2>

          <p className="text-white/70 text-sm sm:text-base md:text-[15px] tracking-[0.03em] capitalize">
            Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
          </p>
        </div>

        {/* right */}
        <div className="flex flex-col gap-5 sm:gap-6 mt-8 xl:mt-0 capitalize">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              onClose={() => setOpenIndex(null)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
