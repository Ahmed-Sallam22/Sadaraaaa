import { useTranslation } from "react-i18next";

export default function LaborServicesSection() {
  const { t } = useTranslation();

  const services = t("mol.servicesList", { returnObjects: true }) as string[];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#5B2C8E] text-center mb-10">
          {t("mol.sectionTitle", "خدمات وزارة العمل والتنمية الاجتماعية")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-right">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2  pb-2 text-[#5B2C8E]"
            >
              <span className="text-red-500">❰</span>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
