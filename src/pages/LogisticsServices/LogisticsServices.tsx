import { useTranslation } from "react-i18next";
import { useRef } from "react";
import logisticsHeroImage from "../../assets/logestic.jpg";
import {
  FaPlane,
  FaShip,
  FaTruck,
  FaWarehouse,
  FaFileInvoice,
  FaNetworkWired,
} from "react-icons/fa";

const LogisticsServices = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const serviceIcons = [
    FaPlane,
    FaShip,
    FaTruck,
    FaWarehouse,
    FaFileInvoice,
    FaNetworkWired,
  ];

  const services = t("logisticsPage.services", {
    returnObjects: true,
  }) as Array<{ title: string; description: string }>;

  const features = t("logisticsPage.features", {
    returnObjects: true,
  }) as string[];

  return (
    <div className={`min-h-screen ${isArabic ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-start bg-cover bg-center"
        style={{
          backgroundImage: `url(${logisticsHeroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[#5B2C8E]/70 z-0"></div>

        <div className="relative z-10  text-white max-w-6xl mx-auto ">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t("logisticsPage.heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-semibold">
            {t("logisticsPage.heroSubtitle")}
          </p>
      
          <button
            onClick={scrollToForm}
            className="bg-[#57C4B3] hover:bg-[#4A1E75] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t("logisticsPage.heroButton")}
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-[#5B2C8E] mb-6">
              {t("logisticsPage.aboutTitle")}
            </h2>
            <p className="text-lg text-[#2E2E2E] max-w-4xl mx-auto leading-relaxed">
              {t("logisticsPage.aboutDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-6 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#5B2C8E] mb-16">
            {t("logisticsPage.servicesTitle")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[index];
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-[#5B2C8E] rounded-full mb-6 group-hover:bg-[#57C4B3] transition-colors duration-300">
                    <IconComponent className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#5B2C8E] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#2E2E2E] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-[#5B2C8E] mb-16">
            {t("logisticsPage.featuresTitle")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-[#F8F9FA] rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-[#57C4B3] rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-lg text-[#2E2E2E] font-semibold">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={formRef}
        className="py-20 px-6 bg-gradient-to-r from-[#5B2C8E] to-[#4A1E75] text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            {t("logisticsPage.ctaTitle")}
          </h2>
          <a
            href="/contact"
            className="inline-block bg-[#57C4B3] hover:bg-white hover:text-[#5B2C8E] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            {t("logisticsPage.ctaButton")}
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-[#5B2C8E] mb-2">320+</div>
              <p className="text-[#2E2E2E] font-semibold">
                {isArabic ? "مدينة حول العالم" : "Cities Worldwide"}
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#57C4B3] mb-2">24/7</div>
              <p className="text-[#2E2E2E] font-semibold">
                {isArabic ? "دعم العملاء" : "Customer Support"}
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#5B2C8E] mb-2">100%</div>
              <p className="text-[#2E2E2E] font-semibold">
                {isArabic ? "ضمان التسليم" : "Delivery Guarantee"}
              </p>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-[#57C4B3] mb-2">15+</div>
              <p className="text-[#2E2E2E] font-semibold">
                {isArabic ? "سنوات من الخبرة" : "Years of Experience"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogisticsServices;
