import { useTranslation } from "react-i18next";

const CompanyTypesSection = ({ scrollToForm }: { scrollToForm: () => void }) => {
  const { t } = useTranslation();

  const companyTypes = [
    t("companyTypes.type1"),
    t("companyTypes.type2"),
    t("companyTypes.type3"),
    t("companyTypes.type4"),
    t("companyTypes.type5"),
    t("companyTypes.type6"),
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* العنوان */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#003462] mb-6 text-center`}
        >
          {t("companyTypes.title")}
        </h2>

        {/* الوصف */}
        <p className={`text-[#003462] text-lg text-center mb-10`}>
          {t("companyTypes.subtitle")}
        </p>

        {/* الأنواع */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {companyTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white text-center text-[#003462] font-semibold p-6 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all cursor-pointer"
            >
              {type}
            </div>
          ))}
        </div>

        {/* الزر */}
        <div className="flex justify-center">
          <button
            onClick={scrollToForm}
            className="bg-[#f7941d]  text-white font-bold py-3 px-6 rounded-full transition-all"
          >
            {t("companyTypes.button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompanyTypesSection;
