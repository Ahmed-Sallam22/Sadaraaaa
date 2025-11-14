import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import emailjs from "emailjs-com";

import "react-phone-input-2/lib/style.css";
import ReviewsCarousel from "./ReviewsCarousel";
import "./ConsultationSection.css";

const ConsultationSection = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (phone: string) => {
    setFormData({ ...formData, phone });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_7s0mt2e", // ✅ Service ID
        "template_9obl1dq", // ✅ Template ID
        formData, // ✅ بيانات النموذج
        "cxFQOsaSL8GJRvu4U" // ✅ Public Key
      )
      .then(() => {
        alert("✅ تم الإرسال بنجاح!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => {
        alert("❌ حدث خطأ أثناء الإرسال");
      });
  };

  return (
    <section className="consultation-section relative   flex items-center justify-center bg-cover bg-center">
      {/* طبقة شفافة فوق الخلفية */}
      <div className="absolute inset-0 bg-[#003462] opacity-60"></div>

      {/* المحتوى */}
      <div className="relative grid grid-cols-1 md:grid-cols-12 w-full mx-auto items-center gap-4 px-6 ">
        {/* فورم الاستشارة */}
        <div className="md:col-span-7 flex justify-center relative z-40 p-4 order-2 md:order-1">
          <div className="bg-black p-6 rounded-lg w-full max-w-[500px] flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
              {t("form.title")}
            </h2>

            <form className="w-full space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t("form.firstName")}
                  className="p-3 rounded bg-white text-black w-full"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={t("form.lastName")}
                  className="p-3 rounded bg-white text-black w-full"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("form.email")}
                className="p-3 rounded bg-white text-black w-full"
              />

              <PhoneInput
                country={"sa"}
                value={formData.phone}
                onChange={handlePhoneChange}
                containerClass="!w-full"
                inputClass="!w-full !h-12 !p-3 !text-black !rounded-md"
                buttonClass="!bg-white"
                dropdownClass="!text-black"
                placeholder={t("form.phone")}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("form.message")}
                className="p-3 rounded bg-white text-black w-full"
                rows={4}
              ></textarea>

              <button
                type="submit"
                className="bg-[#f7941d] text-white hover:bg-[#f7951de3] p-3 rounded w-full font-bold"
              >
                {t("form.submit")}
              </button>
            </form>
          </div>
        </div>

        {/* الكاروسيل */}
        <div className="md:col-span-5 w-full relative z-40 order-1 md:order-2">
          <ReviewsCarousel />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
