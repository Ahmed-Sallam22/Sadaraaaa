
import { useRef } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import EstablishmentServices from "../../components/EstablishCompany/EstablishmentServices";
import Main from "../../components/EstablishCompany/main";
import MISASection from "../../components/EstablishCompany/MISASection";

const EstablishCompany = () => {
const formRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Main
        scrollToForm={() =>
          formRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <MISASection />
      <EstablishmentServices />
      <div ref={formRef}>
        <ContactForm />
      </div>
    </>
  );
};

export default EstablishCompany;
