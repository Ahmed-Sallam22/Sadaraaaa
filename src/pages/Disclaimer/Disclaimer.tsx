import { useTranslation } from "react-i18next";

const DisclaimerPage = () => {
  const { t } = useTranslation();
  const paragraphs = t("disclaimer.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <section className="py-12 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-3xl font-bold  text-[#5B2C8E]">
            {t("disclaimer.title")}
          </h2>
        </div>
      </section>

        {paragraphs.map((para, index) => (
          <p
            key={index}
            className="text-[#2E2E2E] max-w-7xl mx-auto text-lg leading-loose "
          >
            {para}
          </p>
        ))}

    </>
  );
};

export default DisclaimerPage;
