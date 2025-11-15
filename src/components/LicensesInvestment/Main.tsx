import { useTranslation } from "react-i18next";
import Contact from "../../assets/liceneces.png";

const Main = ({ scrollToForm }: { scrollToForm: () => void }) => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  return (
    <section
      className="text-white py-24 h-[80vh] relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${Contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: isEnglish ? "scaleX(-1)" : "none", // فقط الخلفية تتقلب
      }}
    >
      <div
        className=" px-8 flex flex-col md:flex-row items-center justify-between h-full relative z-10"
        style={{
          transform: isEnglish ? "scaleX(-1)" : "none", // نعكس تاني الكلام يرجع طبيعي
        }}
      >
        <div className={`text-${isEnglish ? "left" : "right"}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-relaxed whitespace-pre-line">
            {t("licensesHeroTitle")}
          </h2>
          <p className="text-lg w-[50%] text-gray-300 mb-6 leading-loose">
            {t("licensesHeroDescription")}
          </p>
          <button
            onClick={scrollToForm} // اضغط يروح للنموذج
            className="bg-[#5B2C8E] hover:bg-[#4A1E75] text-white font-bold py-3 px-6 w-[30%] rounded-xl transition-all duration-300"
          >
            {t("licensesHeroButton")}
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#57C4B3]"></div>
    </section>
  );
};

export default Main;
