import { useTranslation } from "react-i18next";
import AccountingBg from "../assets/Acounting.png";

const MainInvestment = ({ scrollToForm }: { scrollToForm: () => void }) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  return (
    <section
      className="text-white py-24 h-[70vh] relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${AccountingBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: isEnglish ? "scaleX(-1)" : "none",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#001a3c]/50 z-0"></div>

      <div className="relative mx-auto flex flex-col items-start  px-6  "
        style={{
          transform: isEnglish ? "scaleX(-1)" : "none",
        }}
      >
        <div className="max-w-6xl me-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-relaxed whitespace-pre-line">
            {t("commerceHeroTitle")}
          </h2>
          <p className="text-sm text-white mb-2 w-[80%]  ">
            {t("commerceHeroSubtitle")}
          </p>
          <button
            onClick={scrollToForm}
            className="bg-[#f7941d] hover:bg-[#f7951dce] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
          >
            {t("accountingHeroButton")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainInvestment;
