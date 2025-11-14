import { useRef } from "react";
import Main from "../../components/LicensesInvestment/Main";
import InvestmentOverview from "../../components/LicensesInvestment/InvestmentOverview";
import LicenseTypesSection from "../../components/LicensesInvestment/LicenseTypesSection";
import LicensingDocumentsSection from "../../components/LicensesInvestment/LicensingDocumentsSection";
import CompanyTypesSection from "../../components/LicensesInvestment/CompanyTypesSection";
import ContactForm from "../../components/Contact/ContactForm";

const LicensesInvestment = () => {
const formRef = useRef<HTMLDivElement>(null);

    return (
      <div>
        <Main
          scrollToForm={() =>
            formRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <InvestmentOverview
          scrollToForm={() =>
            formRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <LicenseTypesSection />
        <LicensingDocumentsSection />
        <CompanyTypesSection
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

export default LicensesInvestment;
