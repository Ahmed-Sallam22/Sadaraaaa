import { useRef } from "react";
import AccountingHero from "../../components/AccountingServices/AccountingHero";
import ContactForm from "../../components/Contact/ContactForm";
import AccountingContent from "../../components/AccountingServices/AccountingContent";
import AccountingServicesGrid from "../../components/AccountingServices/AccountingServicesGrid";

const AccountingServices = () => {
        const formRef = useRef<HTMLDivElement>(null);
    
    return (
      <div>
        <AccountingHero
          scrollToForm={() =>
            formRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <AccountingContent />
        <AccountingServicesGrid/>
        <div ref={formRef}>
          <ContactForm />
        </div>
      </div>
    );
}

export default AccountingServices;
