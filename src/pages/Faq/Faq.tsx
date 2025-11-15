import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ استورد الترجمة

const faqs = [
  { questionKey: "faqs.q1", answerKey: "faqs.a1" },
  { questionKey: "faqs.q2", answerKey: "faqs.a2" },
  { questionKey: "faqs.q3", answerKey: "faqs.a3" },
  { questionKey: "faqs.q4", answerKey: "faqs.a4" },
  { questionKey: "faqs.q5", answerKey: "faqs.a5" },
  { questionKey: "faqs.q6", answerKey: "faqs.a6" },
  { questionKey: "faqs.q7", answerKey: "faqs.a7" },
  { questionKey: "faqs.q8", answerKey: "faqs.a8" },
  { questionKey: "faqs.q9", answerKey: "faqs.a9" },
  { questionKey: "faqs.q10", answerKey: "faqs.a10" },
  { questionKey: "faqs.q11", answerKey: "faqs.a11" },
  { questionKey: "faqs.q12", answerKey: "faqs.a12" },
  { questionKey: "faqs.q13", answerKey: "faqs.a13" },
  { questionKey: "faqs.q14", answerKey: "faqs.a14" },
  { questionKey: "faqs.q15", answerKey: "faqs.a15" },
];

const FAQSection = () => {
  const { t } = useTranslation(); // ✅ استخدم الترجمة
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="py-12 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-[#5B2C8E]">
            {t("faqs.title")}
          </h2>
        </div>
      </section>
      <div className="bg-white max-w-5xl mx-auto py-14 px-4 rounded-lg overflow-hidden ">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center p-4 text-right text-[#5B2C8E] font-semibold focus:outline-none transition-colors duration-300 hover:bg-[#F8F9FA]"
            >
              <span className="ml-2 text-xl">
                {openIndex === index ? "–" : "+"}
              </span>
              {t(faq.questionKey)}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden text-[#2E2E2E] text-sm bg-gray-50"
                >
                  <div className="p-4 text-[15px]">{t(faq.answerKey)}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQSection;
