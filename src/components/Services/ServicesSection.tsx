import { useTranslation } from "react-i18next";
import PersonImage from "../../assets/investment.jpg";

const ServicesSection = ({ scrollToForm }: { scrollToForm: () => void }) => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-16 py-16 px-6 md:px-16 max-w-7xl mx-auto">
      {/* الصورة */}

      {/* المحتوى */}
      <div className="w-full md:w-1/2 text-right">
        <h2 className="text-3xl md:text-4xl font-bold text-[#002856] mb-6">
          {t("ksaServicesTitle")}
        </h2>

        <p className="text-gray-700 mb-6 leading-loose">
          {t("ksaServicesIntro")}
        </p>

        <ul className="space-y-4 mb-6">
          <li className="flex items-center gap-2 text-[#f7941d] font-semibold">
            <span>◀</span> {t("ksaMainland")}
          </li>
          <li className="flex items-center gap-2 text-[#f7941d] font-semibold">
            <span>◀</span> {t("ksaFreezone")}
          </li>
          <li className="flex items-center gap-2 text-[#f7941d] font-semibold">
            <span>◀</span> {t("ksaFreezone2")}
          </li>
          <li className="flex items-center gap-2 text-[#f7941d] font-semibold">
            <span>◀</span> {t("ksaOffshore")}
          </li>
        </ul>

        <p className="text-gray-700 mb-4 leading-loose">
          {t("ksaServicesDetails1")}
        </p>
        <p className="text-gray-700 mb-6 leading-loose">
          {t("ksaServicesDetails2")}
        </p>

        <button
          onClick={scrollToForm}
          className="bg-[#f7941d] hover:bg-[#f7941dd4] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
        >
          {t("ksaServicesCTA")}
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img
          src={PersonImage}
          alt="Investment in Saudi Arabia"
          className="rounded-lg shadow-lg w-[70%] mx-auto h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default ServicesSection;
