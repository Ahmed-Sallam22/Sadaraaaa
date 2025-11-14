import { useTranslation } from "react-i18next";
import investmentImage from "../../assets/investment.jpg"; // ✨ غير المسار حسب مكان الصورة

const InvestmentOverview = ({ scrollToForm }: { scrollToForm: () => void }) => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-10 px-6">
        {/* النص */}
        <div className="w-full lg:w-1/2 text-center lg:text-start">
          <h2 className="text-3xl font-bold text-[#003462] mb-4 leading-snug">
            {t("investmentOverviewTitle")}
          </h2>
          <p className="text-gray-700 text-lg leading-loose whitespace-pre-line mb-6">
            {t("investmentOverviewDescription")}
          </p>
          <button
            onClick={scrollToForm}
            className="bg-[#f7941d] hover:bg-[#f7951dce] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            {t("investmentOverviewButton")}
          </button>
        </div>
        {/* الصورة */}
        <div className="w-full lg:w-1/2">
          <img
            src={investmentImage}
            alt="Investment in Saudi Arabia"
            className="rounded-lg shadow-lg w-[60%] mx-auto h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default InvestmentOverview;
