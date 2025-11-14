import { useRef } from "react";
import MainDevelopment from "../../components/MinistryDevelopment/MainDevelopment";
import ContactForm from "../../components/Contact/ContactForm";
import LaborServicesSection from "../../components/MinistryDevelopment/LaborServicesSection";

const MinistryDevelopment = () => {
          const formRef = useRef<HTMLDivElement>(null);
    
    return (
      <div>
        <MainDevelopment
          scrollToForm={() =>
            formRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <LaborServicesSection/>
        <div ref={formRef}>
          <ContactForm />
        </div>
      </div>
    );
}

export default MinistryDevelopment;
