import { useTranslation } from "react-i18next";

const LicenseTypesSection = () => {
  const { t } = useTranslation();

  const licenses = [
    t("license.commercial"),
    t("license.industrial"),
    t("license.agricultural"),
    t("license.professionalPartner"),
    t("license.laborAgency"),
    t("license.service"),
    t("license.realEstate"),
    t("license.transport"),
    t("license.technicalOffice"),
    t("license.mining"),
    t("license.media"),
    t("license.printingPublishing"),
  ];

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6 text-center">
        {/* العنوان والوصف */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#5B2C8E] mb-6">
          {t("licenseSection.title")}
        </h2>
        <p className="text-[#2E2E2E] text-lg mb-12 whitespace-pre-line leading-relaxed max-w-4xl mx-auto">
          {t("licenseSection.description")}
        </p>

        {/* الشبكة */}
        <div className="grid gap-4 sm:grid-cols-2 max-w-[90%] mx-auto md:grid-cols-3">
          {licenses.map((license, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 px-2 text-[#5B2C8E] font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              {license}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LicenseTypesSection;
