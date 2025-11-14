import { useTranslation } from "react-i18next";
import TeamImage from "../../assets/team.jpg"; // غيّر المسار حسب مكان الصورة

const Career = () => {
    const { t } = useTranslation();
const paragraphs = t("joinTeam.paragraphs", {
  returnObjects: true,
}) as string[];

  return (
    <section className="bg-white py-16 px-6 md:px-20 text-right text-[#002856]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* المحتوى */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("joinTeam.title")}
          </h2>

          {paragraphs.map((para: string, idx: number) => (
            <p key={idx} className="text-lg text-gray-800 leading-loose mb-4">
              {para}
            </p>
          ))}

          <p className="text-2xl font-bold text-[#002856] mt-6">
            {t("joinTeam.cta")}
          </p>
        </div>
        {/* الصورة */}
        <div className="w-full md:w-1/2">
          <img
            src={TeamImage}
            alt="Teamwork"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Career;
