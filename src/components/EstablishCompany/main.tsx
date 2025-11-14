import { useTranslation } from "react-i18next";
import misaBackground from "../../assets/misa-bg.png"; // خلي بالك تغير المسار حسب مكان الصورة عندك
const Main = ({ scrollToForm }: { scrollToForm: () => void }) => {
  const { t } = useTranslation();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20 text-white"
      style={{
        backgroundImage: `url(${misaBackground})`,
      }}
    >
      {/* Overlay أحمر شفاف */}
      <div className="absolute inset-0 bg-[#003462] opacity-60"></div>

      {/* Content فوق الطبقة */}
      <div className="relative mx-auto flex flex-col items-start justify-center px-6 text-center ">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug mb-6">
          {t("establish.title")}
        </h2>
        <p className="text-lg md:text-xl text-gray-200  w-[50%]  mb-8 leading-relaxed">
          {t("establish.description")}
        </p>
        <button
          onClick={scrollToForm}
          className="bg-[#f7941d] w-[20%] hover:bg-[#f7951de6] text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
        >
          {t("establish.button")}
        </button>
      </div>

      {/* الخط الأحمر السفلي */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#f7941d]"></div>
    </section>
  );
};

export default Main;
