import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import heroImg from "../../assets/serivce-1.jpg";
import card1 from "../../assets/serivce-2.jpg";
import card2 from "../../assets/serivce-3.jpg";
import card3 from "../../assets/serivce-4.webp";


const MechanicalServicesPage = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.dir() === "rtl";
    const images = [card1, card2, card3];

    const services = t("mech.services", { returnObjects: true }) as {
      title: string;
      desc: string;
      img: string;
    }[];

    const whys = t("mech.whys", { returnObjects: true }) as string[];
    const steps = t("mech.steps", { returnObjects: true }) as string[];
  return (
    <main dir={i18n.dir()} className="text-[#231E31]">
      {/* HERO */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[56vh] flex items-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-[#003462]/90" />
        <div className="relative container mx-auto px-6 lg:px-12 py-16">
          <div
            className={`max-w-3xl ${
              isRTL ? "text-right" : "text-left"
            } text-white`}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              {t("mech.hero.title")}
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-100 leading-relaxed">
              {t("mech.hero.subtitle")}
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                to="/contact"
                className="bg-white/10 hover:bg-white/20 border border-white/40 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                {t("mech.hero.secondary")}
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#f7941d]" />
      </section>

      {/* INTRO */}
      <section className="container mx-auto px-6 lg:px-12 py-12">
        <div
          className={`mx-auto ${isRTL ? "text-right" : "text-left"} max-w-4xl`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#111]">
            {t("mech.intro.title")}
          </h2>
          <p className="mt-3 text-[15px] font-semibold leading-relaxed text-[#2B2B2B]">
            {t("mech.intro.body")}
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#F8F9FC] py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h3
            className={`text-xl md:text-2xl font-bold ${
              isRTL ? "text-right" : "text-left"
            } text-[#111]`}
          >
            {t("mech.servicesTitle")}
          </h3>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <img
                  src={images[i]}
                  alt={s.title}
                  className="w-full  aspect-[4/3] object-cover "
                />
                <div className={`p-5 ${isRTL ? "text-right" : "text-left"}`}>
                  <h4 className="font-semibold text-xl text-[#111]">
                    {s.title}
                  </h4>
                  <p className="text-md  text-[#616161] mt-2 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="container mx-auto px-6 lg:px-12 py-12">
        <div className={`max-w-5xl ${isRTL ? "text-right" : "text-left"}`}>
          <h3 className="text-xl md:text-2xl font-bold text-[#111]">
            {t("mech.whyTitle")}
          </h3>
          <ul className="mt-4 grid md:grid-cols-2 gap-3">
            {whys.map((w, i) => (
              <li
                key={i}
                className="bg-[#F8F5ED] border border-[#B69947]/40 rounded-xl px-4 py-3"
              >
                <span className="font-semibold text-[#B69947]">• </span>
                <span className="text-[#2B2B2B]">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <h3
            className={`text-xl md:text-2xl font-bold ${
              isRTL ? "text-right" : "text-left"
            } text-[#111]`}
          >
            {t("mech.stepsTitle")}
          </h3>

          <ol className="mt-6 grid md:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4">
            {steps.map((s, i) => (
              <li
                key={i}
                className="bg-[#fff] rounded-2xl border border-gray-100 shadow-sm p-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#f7941d] text-white flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <p className="mt-3 text-md text-[#2B2B2B] leading-relaxed">
                  {s}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="bg-[#583B97] hover:bg-[#483b63] text-white px-7 py-3 rounded-full font-semibold transition"
            >
              {t("mech.ctaBottom")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MechanicalServicesPage;
