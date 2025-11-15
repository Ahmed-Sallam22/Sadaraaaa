import { useTranslation } from "react-i18next";
import servicesData from "../../Data/servicesData.json";

const ServicesSection = () => {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "en" | "ar";

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#5B2C8E] mb-4">
          {t("services.heading")}
        </h2>
        <p className="text-lg md:text-xl text-[#2E2E2E] mb-2 font-semibold">
          {t("services.subheading")}
        </p>
        <p className="text-[#2E2E2E] max-w-2xl mx-auto mb-12">
          {t("services.description")}
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-6 text-start shadow-sm border-[#5B2C8E]/20 hover:shadow-md transition"
            >
              <h3 className="text-[#5B2C8E] text-lg font-bold  inline-block mb-2">
                {item?.title[lang]}
              </h3>
              <div className="w-20 h-[1.5px] bg-[#57C4B3] mb-2"></div>
              {item.content[lang].split("\n").map((line, index) => (
                <p key={index} className=" text-sm mb-2 text-[#2E2E2E]">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
