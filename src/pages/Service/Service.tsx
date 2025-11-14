import { useRef } from "react";
import Main from "../../components/Services/Main";
import ContactForm from "../../components/Contact/ContactForm";
import ServicesSection from "../../components/Services/ServicesSection";

const Service = () => {
    const formRef = useRef<HTMLDivElement>(null);
    
    return (
      <div>
        <Main
          scrollToForm={() =>
            formRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />{" "}
        <ServicesSection
          scrollToForm={() =>
            formRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <div ref={formRef}>
          <ContactForm />
        </div>
      </div>
    );
}

export default Service;
