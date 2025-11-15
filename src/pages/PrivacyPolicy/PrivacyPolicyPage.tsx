import { useTranslation } from "react-i18next";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();
  const sections = t("privacy.sections", { returnObjects: true }) as {
    heading: string;
    paragraphs: string[];
    list?: string[];
  }[];

  return (
    <section className="  text-right text-[#5B2C8E]">
      <section className="py-12 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            {t("privacy.title")}
          </h1>
        </div>
      </section>

      {sections.map((section, idx) => (
        <div key={idx} className="my-10 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{section.heading}</h2>
          {section.paragraphs.map((p, i) => (
            <p key={i} className="text-[#2E2E2E] text-lg leading-loose mb-4">
              {p}
            </p>
          ))}
          {section.list && (
            <ul className="list-disc pr-5 text-[#2E2E2E] space-y-2 text-lg leading-loose">
              {section.list.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};

export default PrivacyPolicyPage;
