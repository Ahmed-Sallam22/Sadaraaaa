import { useTranslation } from "react-i18next";
import documents from "../../assets/documents.png"; // ✨ غير المسار حسب مكان الصورة

const LicensingDocumentsSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <section className="max-w-7xl mx-auto px-6 my-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
      {/* الصورة */}
      <div className="flex justify-center">
        <img
          src={documents} // 👈 ضع هنا مسار الصورة أو استوردها
          alt="Documents"
          className="rounded-lg object-cover max-w-full h-auto"
        />
      </div>
      {/* النصوص */}
      <div className="flex flex-col justify-center">
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#003462] mb-6 leading-relaxed ${
            isArabic ? "text-center lg:text-right" : "text-center lg:text-left"
          }`}
        >
          {t("licenseDocuments.title")}
        </h2>

        <p
          className={`text-[#003462] text-lg mb-6 ${
            isArabic ? "text-center lg:text-right" : "text-center lg:text-left"
          }`}
        >
          {t("licenseDocuments.subtitle")}
        </p>

        <ul
          className={`text-[#003462] text-lg list-disc ${
            isArabic ? "pr-6" : "pl-6"
          } mb-6 ${isArabic ? "text-right" : "text-left"}`}
        >
          <li className="mb-2">{t("licenseDocuments.point1")}</li>
          <li>{t("licenseDocuments.point2")}</li>
        </ul>

        <p
          className={`text-red-600 text-sm ${
            isArabic ? "text-center lg:text-right" : "text-center lg:text-left"
          }`}
        >
          {t("licenseDocuments.note")}
        </p>
      </div>
    </section>
  );
};

export default LicensingDocumentsSection;
