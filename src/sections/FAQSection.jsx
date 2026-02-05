import { useState } from "react";
import FAQItem from "../components/FAQitem";

const faqs = [
  {
    q: "What Services Does TIGRID Provide?",
    a: "TIGRID delivers end-to-end digital solutions including UI/UX design, web and app development, branding, and product strategy.",
  },
  {
    q: "How Long Does A Project Take?",
    a: "Project timelines depend on scope, but most design and development projects take between 4–12 weeks.",
  },
  {
    q: "Do You Offer Branding Services?",
    a: "Yes. We provide full branding including identity design, brand strategy, and visual systems.",
  },
  {
    q: "Do You Work With Startups?",
    a: "Absolutely. We specialize in working with startups and scaling companies.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-black py-32 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-start">

        {/* left */}
        <div>
          <h2 className="text-white text-5xl font-semibold tracking-[0.15em] mb-6">
            Frequently Asked<br />Questions
          </h2>

          <p className="text-white/70 max-w-md tracking-[0.01em] capitalize">
            Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
          </p>
        </div>

        {/* right */}
        <div className="flex flex-col gap-6 capitalize">
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
