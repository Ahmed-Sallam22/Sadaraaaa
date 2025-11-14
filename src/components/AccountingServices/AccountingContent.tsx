import { useTranslation } from "react-i18next";

const AccountingContent = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto  text-[#002856] bg-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        {t("accountingContent.title")}
      </h2>

      <p className="text-lg text-gray-700 leading-loose mb-8">
        {t("accountingContent.paragraph1")}
      </p>

      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        {t("accountingContent.subtitle")}
      </h3>

      <p className="text-lg text-gray-700 leading-loose mb-6 ">
        {t("accountingContent.paragraph2")}
      </p>

      <ul className="text-gray-700 text-lg leading-loose list-disc pr-5 space-y-3">
        <li>{t("accountingContent.benefits.0")}</li>
        <li>{t("accountingContent.benefits.1")}</li>
        <li>{t("accountingContent.benefits.2")}</li>
        <li>{t("accountingContent.benefits.3")}</li>
      </ul>
    </section>
  );
};

export default AccountingContent;
