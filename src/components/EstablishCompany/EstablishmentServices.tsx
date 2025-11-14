import { useTranslation } from "react-i18next";

const EstablishmentServices = () => {
  const { t } = useTranslation();

  const services = [
    t("servicesSection.reserveTradeName"),
    t("servicesSection.extractCommercialRegisterCompany"),
    t("servicesSection.extractCommercialRegisterEstablishment"),
    t("servicesSection.registerBranchCompany"),
    t("servicesSection.registerBranchEstablishment"),
    t("servicesSection.extractCommercialRegisterForeignBranch"),
    t("servicesSection.renewCommercialRegisterCompany"),
    t("servicesSection.renewCommercialRegisterEstablishment"),
    t("servicesSection.studyNewCompanyArticles"),
    t("servicesSection.amendCommercialRegisterEstablishment"),
    t("servicesSection.transferEstablishmentToCompany"),
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#003462] mb-6">
          {t("servicesSection.title")}
        </h2>
        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          {t("servicesSection.description")}
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-[#003462] font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EstablishmentServices;
