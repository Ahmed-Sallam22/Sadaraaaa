import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 bg-green-500 opacity-75 rounded-full custom-ping"></div>
        <a
          href="https://wa.me/+966509990409"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
        >
          <FaWhatsapp size={40} />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
