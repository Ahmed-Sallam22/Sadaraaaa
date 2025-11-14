import { useRef } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import Main from "../../components/Contact/main";

const Contact = () => {
const formRef = useRef<HTMLDivElement>(null);

    return (
      <div>
        <Main
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

export default Contact;
