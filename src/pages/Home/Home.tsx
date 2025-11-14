import { useRef } from "react";
import BlogSection from "../../components/Home/BlogSection";
import Carousel from "../../components/Home/Carousel";
import ConciergeServices from "../../components/Home/ConciergeServices";
import ConsultationSection from "../../components/Home/ConsultationSection";
import Main from "../../components/Home/Main";
import ServicesSection from "../../components/Home/Service";

const Home = () => {
  const consultationRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Main
        scrollToConsultation={() =>
          consultationRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <ServicesSection />
      <ConciergeServices />
      <div ref={consultationRef}>
        <ConsultationSection />
      </div>
      <Carousel />
      <BlogSection />
    </div>
  );
};

export default Home;
