import { useTranslation } from "react-i18next";

const AccountingServicesGrid = () => {
  const { t } = useTranslation();
const items: string[] = t("accountingServicesGrid.cards.0.points", {
  returnObjects: true,
}) as string[];

  return (
    <section className="bg-[#f8fbfd] py-20 px-6 md:px-20 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002856] mb-4">
        {t("accountingServicesGrid.title")}
      </h2>
      <p className="text-gray-700 text-lg text-center mb-12">
        {t("accountingServicesGrid.description")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* الاستشارات المالية */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg text-[#002856] mb-4">
            {t("accountingServicesGrid.cards.0.title")}
          </h3>
          <ul className="text-gray-700 space-y-2 list-decimal pr-5">
            {items.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* إمساك الدفاتر */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg text-[#002856] mb-4">
            {t("accountingServicesGrid.cards.1.title")}
          </h3>
          <ul className="text-gray-700 space-y-2 list-decimal pr-5">
            {items.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* الزكاة والضريبة */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg text-[#002856] mb-4">
            {t("accountingServicesGrid.cards.2.title")}
          </h3>
          <ul className="text-gray-700 space-y-2 list-decimal pr-5">
            {items.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* الدفتر العام والميزانية */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg text-[#002856] mb-4">
            {t("accountingServicesGrid.cards.3.title")}
          </h3>
          <ul className="text-gray-700 space-y-2 list-decimal pr-5">
            {items.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AccountingServicesGrid;
