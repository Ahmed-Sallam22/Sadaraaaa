import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaChevronDown,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Topbar = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  const formatPhoneNumber = (number: string | number) => {
    if (!number) return "";
    number = number.toString().replace(/\D/g, "");
    if (!number.startsWith("966")) {
      number = "966" + number;
    }
    return `+${number.slice(0, 3)} ${number.slice(3, 5)} ${number.slice(
      5,
      8
    )} ${number.slice(8)}`;
  };
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#5B2C8E] text-white text-sm py-2 px-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center relative">
        {/* Language Selector */}
        <div
          className="relative flex flex-col items-center cursor-pointer"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          onClick={() => setOpen(!open)}
        >
          <div className="flex items-center gap-1">
            <span>{i18n.language === "ar" ? "العربية" : "English"}</span>
            <FaChevronDown size={14} className="pt-1" />
          </div>

          {/* Dropdown */}
          {open && (
            <div className="absolute top-full right-0 flex flex-col bg-white text-[#5B2C8E] shadow-lg rounded-md py-2 w-24 text-center z-10">
              <div
                onClick={toggleLanguage}
                className="px-4 py-2 hover:bg-[#F8F9FA] cursor-pointer"
              >
                {i18n.language === "ar" ? "English" : "العربية"}
              </div>
            </div>
          )}
        </div>
        {/* Contact Info */}
        <div className="flex gap-4 items-center text-white ">
          {/* Phone */}
          <a href="tel:+9660112414891" className="flex items-center gap-2">
            <FaPhoneAlt size={18} />
            <span className="hidden md:inline" dir="ltr">
              {formatPhoneNumber("112414891")}
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+966509990409"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <FaWhatsapp size={18} />
            <span className="hidden md:inline" dir="ltr">
              {formatPhoneNumber("509990409")}
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@rapbuss.com.com"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FaEnvelope size={18} />
            <span className="hidden md:inline">info@rapbuss.com.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
