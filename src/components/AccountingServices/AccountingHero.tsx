import { useTranslation } from "react-i18next";
import AccountingBg from "../../assets/Acounting.png";

const AccountingHero = ({ scrollToForm }: { scrollToForm: () => void }) => {
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
      <div className="absolute inset-0 bg-[#5B2C8E]/80 z-0"></div>

      <div className="relative mx-auto flex flex-col items-start px-6 "
        style={{
          transform: isEnglish ? "scaleX(-1)" : "none",
        }}
      >
        <div className="max-w-2xl me-auto">
          <p className="text-sm text-gray-300 mb-2">
            {t("accountingHeroSubtitle")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-relaxed whitespace-pre-line">
            {t("accountingHeroTitle")}
          </h2>
          <button
            onClick={scrollToForm}
            className="bg-[#57C4B3] hover:bg-[#4A1E75] text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
          >
            {t("accountingHeroButton")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default AccountingHero;
