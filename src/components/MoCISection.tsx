import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import inves from "../assets/inves.png";

export default function MoCISection() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-10">
        {/* ✅ Content */}
        <div className="w-full lg:w-1/2 text-right">
          <h2 className="text-2xl md:text-3xl font-bold text-[#00246E] mb-4 leading-relaxed">
            {t("moci.title")}
          </h2>
          <p className="text-gray-700 mb-4 leading-loose">
            {t("moci.description1")}
          </p>
          <p className="text-gray-700 mb-4 leading-loose">
            {t("moci.description2")}
          </p>
          <Link to={'/Comment'} className="text-blue-700 font-bold underline cursor-pointer hover:text-blue-900">
            {t("moci.readMore")}
          </Link>

          {/* ✅ خدمات وزارة التجارة */}
          <div className="mt-6 text-sm text-[#555] leading-loose">
            <h3 className="text-lg font-semibold text-[#00246E] mb-3">
              {t("moci.servicesTitle")}
            </h3>
            <ul className="list-disc pr-5 space-y-2">
              {(
                t("moci.servicesList", { returnObjects: true }) as string[]
              ).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <Link
            to="/contact"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-bold mt-6"
          >
            {t("moci.cta")}
          </Link>
        </div>

        {/* ✅ Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={inves}
            alt={t("moci.imageAlt")}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* ✅ Bottom CTA */}
      <div className="max-w-5xl mx-auto text-center mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-sky-700 mb-4">
          {t("moci.bottomTitle")}
        </h3>
        <p className="text-blue-500 leading-relaxed max-w-3xl mx-auto">
          {t("moci.bottomText")}
        </p>
      </div>
    </section>
  );
}
