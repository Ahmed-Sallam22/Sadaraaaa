import { useState } from "react";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactForm = () => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false); // 🌀 حالة التحميل

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true); // بدأ التحميل

    emailjs
      .send(
        "service_7s0mt2e",
        "template_9obl1dq",
        formData,
        "cxFQOsaSL8GJRvu4U"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ تم إرسال الرسالة بنجاح!");

          // ✅ تصفير النموذج
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text);
          alert("❌ حدث خطأ أثناء الإرسال.");
        }
      )
      .finally(() => {
        setIsSending(false); // إيقاف التحميل
      });
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#57C4B3] mb-8">
          {isArabic ? "تواصل معنا" : "Contact Us"}
        </h2>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder={isArabic ? "الاسم الأول" : "First Name"}
            onChange={handleChange}
            className="border border-[#5B2C8E] rounded px-4 py-3 focus:outline-none"
            required
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder={isArabic ? "اسم العائلة" : "Last Name"}
            onChange={handleChange}
            className="border border-[#5B2C8E] rounded px-4 py-3 focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder={isArabic ? "معرف البريد الإلكتروني" : "Email Address"}
            onChange={handleChange}
            className="border border-[#5B2C8E] rounded px-4 py-3 focus:outline-none md:col-span-2"
            required
          />
          <div className="md:col-span-2">
            <PhoneInput
              country={"sa"}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputProps={{ name: "phone", required: true }}
              containerClass="!w-full !flex"
              inputClass="!w-full !h-12 !p-3 !text-black !rounded-md !border !border-[#5B2C8E]"
              buttonClass="!bg-white !border-r !border-[#5B2C8E]"
              dropdownClass="!text-black"
              placeholder={t("form.phone")}
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            placeholder={
              isArabic ? "اكتب رسالتك هنا..." : "Write your message..."
            }
            onChange={handleChange}
            className="border border-[#5B2C8E] rounded px-4 py-3 focus:outline-none md:col-span-2 h-32 resize-none"
            required
          ></textarea>

          <button
            type="submit"
            disabled={isSending}
            className={`flex justify-center items-center gap-2 bg-[#5B2C8E] hover:bg-[#f7951de2] text-white font-bold py-3 px-6 rounded w-full md:col-span-2 transition-all duration-300 ${
              isSending ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSending ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  />
                </svg>
                {isArabic ? "جاري الإرسال..." : "Sending..."}
              </>
            ) : isArabic ? (
              "التقديم"
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
