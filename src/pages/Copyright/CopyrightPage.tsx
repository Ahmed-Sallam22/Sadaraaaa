import { useTranslation } from "react-i18next";

const CopyrightPage = () => {
  const { t } = useTranslation();
  const paragraphs = t("copyright.paragraphs", {
    returnObjects: true,
  }) as string[];

  return (
    <section className="bg-[#f8fbfd]   text-right text-[#002856]">
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-3xl font-bold  text-[#002d72]">
            {t("disclaimer.title")}
          </h2>
        </div>
      </section>

      {paragraphs.map((para, index) => (
        <p
          key={index}
          className="text-gray-700 max-w-7xl mx-auto text-lg leading-loose mb-6"
          dangerouslySetInnerHTML={{ __html: para }}
        />
      ))}
    </section>
  );
};

export default CopyrightPage;
