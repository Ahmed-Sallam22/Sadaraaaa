import { useTranslation } from "react-i18next";

const MISASection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003462] mb-6">
          {t("misaSection.title")}
        </h2>
        <p className="text-gray-600  mb-4 leading-relaxed">
          {t("misaSection.paragraph1")}
        </p>
        <p className="text-gray-600  leading-relaxed">
          {t("misaSection.paragraph2")}
        </p>
      </div>
    </section>
  );
};

export default MISASection;
