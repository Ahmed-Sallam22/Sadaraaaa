import { useTranslation } from "react-i18next";

const ExpandYourHorizons = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#F8F9FA] py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#5B2C8E] flex items-center justify-center gap-2">
          <span className="text-[#57C4B3] text-4xl">#</span>
          {t("expand.title")}
        </h2>
      </div>
    </section>
  );
};

export default ExpandYourHorizons;
