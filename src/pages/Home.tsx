import HeroSection from "../sections/HeroSection";
import AboutUs from "../sections/AboutUs";
import Brands from "../sections/Brands";
import Services from "../sections/Services";  
import FeaturedWorks from "../sections/FeaturedWorks";
import BlogSection from "../sections/BlogSection";
import TestimonialSection from "../sections/TestimonialSection";
import FAQSection from "../sections/FAQSection";
import CTASection from "../sections/CTASection";
import Footer from "../sections/FooterSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Brands />
      <Services />
      <FeaturedWorks />
      <BlogSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
