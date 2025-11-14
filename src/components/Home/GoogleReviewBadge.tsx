import { useTranslation } from "react-i18next";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"; // 🌟 أيقونة جوجل جاهزة بالألوان الرسمية

const GoogleReviewBadge = () => {
  const { t } = useTranslation(); // ✅ نادينا الفنكشن

  return (
    <div className="flex items-center gap-2 bg-white px-2 py-1.5 rounded-md shadow-md w-max">
      {/* Text */}
      <span className="text-[14px] text-black">
        {t("googleReview.excellent")}
      </span>
      {/* Stars */}
      <div className="flex items-center text-yellow-400">
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStar size={15} />
        <FaStarHalfAlt size={15} />
      </div>
      <FcGoogle size={28} /> {/* هنا حجم الأيقونة 28 زي الصورة بالظبط */}
      {/* Google Logo */}
      {/* <img src={googleLogo} alt="Google" className="h-6 object-contain" /> */}
    </div>
  );
};

export default GoogleReviewBadge;
