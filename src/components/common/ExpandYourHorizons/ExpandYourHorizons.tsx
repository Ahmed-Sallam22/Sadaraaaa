import { useTranslation } from "react-i18next";

const ExpandYourHorizons = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#f6f9fb] py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#002d72] flex items-center justify-center gap-2">
          <span className="text-[#f7941d] text-4xl">#</span>
          {t("expand.title")}
        </h2>
      </div>
    </section>
  );
};

export default ExpandYourHorizons;
