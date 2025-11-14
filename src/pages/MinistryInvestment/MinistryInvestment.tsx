import { useRef } from 'react';
import ContactForm from '../../components/Contact/ContactForm';
import MainInvestment from '../../components/MainInvestment';
import MoCISection from '../../components/MoCISection';

const MinistryInvestment = () => {
      const formRef = useRef<HTMLDivElement>(null);

      return (
        <div>
          <MainInvestment
            scrollToForm={() =>
              formRef.current?.scrollIntoView({ behavior: "smooth" })
            }
          />
<MoCISection/>
          <div ref={formRef}>
            <ContactForm />
          </div>
        </div>
      );
}

export default MinistryInvestment;
