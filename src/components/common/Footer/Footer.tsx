import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa6";
import Logo2 from "../../../assets/Sadara_Business_Services_page-0001__1_-removebg-preview.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-[#5B2C8E] text-white">
      <div className="px-5 mx-auto  py-12 grid grid-cols-1 max-w-7xl sm:grid-cols-2 md:grid-cols-12 gap-10 ">
        {/* Company Info */}
        <div className="flex flex-col items-center gap-5 col-span-4">
          <Link to="/">
            <img
              src={Logo2}
              alt="Logo"
              className="w-full h-40 bg-amber-50 mx-auto object-contain"
            />
          </Link>

          {/* <h3 className="text-xl font-bold">{t("footer.companyName")}</h3> */}
          <p className=" text-[#ffffffcc]">{t("footer.aboutCompany")}</p>
          <div className="flex items-center gap-4 mt-4">
            <a
              href="#"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 w-9 h-9 flex items-center justify-center rounded-full transition"
            >
              <FaFacebookF className="text-white" />
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 w-9 h-9 flex items-center justify-center rounded-full transition"
            >
              <FaInstagram className="text-white" />
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 w-9 h-9 flex items-center justify-center rounded-full transition"
            >
              <FaLinkedinIn className="text-white" />
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 w-9 h-9 flex items-center justify-center rounded-full transition"
            >
              <FaYoutube className="text-white" />
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 w-9 h-9 flex items-center justify-center rounded-full transition"
            >
              <FaXTwitter className="text-white" />
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-white/10 hover:bg-white/20 w-9 h-9 flex items-center justify-center rounded-full transition"
            >
              <FaTiktok className="text-white" />
            </a>
          </div>
        </div>

        {/* About Links */}
        <div className="flex flex-col gap-4 col-span-2">
          <h3 className="text-lg font-semibold">
            {t("footer.aboutCompanyTitle")}
          </h3>
          <ul className="flex flex-col gap-2 text-[#ffffffcc] text-sm">
            <li>
              <Link to="/licenses-and-investment">
                {t("footer.investmentLicense")}
              </Link>
            </li>
            <li>
              <Link to="/services">{t("footer.ourServices")}</Link>
            </li>
            <li>
              <Link to="/faq">{t("footer.faq")}</Link>
            </li>
            <li>
              <Link to="/blog">{t("footer.blog")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("footer.contactUs")}</Link>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div className="flex flex-col  gap-4 col-span-2">
          <h3 className="text-lg font-semibold">{t("footer.servicesTitle")}</h3>
          <ul className="flex flex-col gap-2 text-[#ffffffcc] text-sm">
            <li>
              <Link to={"/establish-company"}>
                {t("footer.investmentMinistryServices")}
              </Link>
            </li>
            <li>
              <Link to={"/MinistryInvestment"}>
                {t("footer.commerceMinistryServices")}
              </Link>
            </li>

            <li>
              <Link to={"/establish-company"}>
                {t("footer.zakatAuthorityServices")}
              </Link>
            </li>
            <li>
              <Link to={"/MinistryDevelopment"}>
                {t("footer.laborMinistryServices")}
              </Link>
            </li>
            <li>
              <Link to={"/Comment"}>{t("footer.trackingServices")}</Link>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-4 col-span-4 h-full justify-between">
          <div>
            <h3 className="text-lg font-semibold">{t("footer.saudiArabia")}</h3>
            <p className="text-sm text-[#ffffffcc]">{t("footer.address")}</p>
          </div>
          <Link to="#" className="text-white  text-sm">
            {t("footer.getDirections")}
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 w-[90%] mx-auto my-4"></div>

      {/* Bottom Text */}
      <div className="w-full bg-[#5B2C8E] text-[#FFFFFF8F] text-sm py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center  items-center gap-4 px-4 text-center md:text-start">
          {/* Left Side: Copyright */}
          <p>
            © {new Date().getFullYear()} {t("footer.companyName")}.{" "}
            {t("footer.rights")}
          </p>

          {/* Right Side: Links */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm">
            <Link to="/Career" className="hover:underline">
              {t("footer.careers")}
            </Link>
            <span>|</span>
            <Link to="/PrivacyPolicy" className="hover:underline">
              {t("footer.privacyPolicy")}
            </Link>
            <span>|</span>
            <Link to="/Copyright" className="hover:underline">
              {t("footer.copyrightPolicy")}
            </Link>
            <span>|</span>
            <Link to="/Disclaimer" className="hover:underline">
              {t("footer.disclaimer")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
