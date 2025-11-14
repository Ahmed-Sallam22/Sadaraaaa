import { useTranslation } from "react-i18next";
import videoplayback from "../../assets/videoplayback.mp4";
import GoogleReviewBadge from "./GoogleReviewBadge";
interface MainProps {
  scrollToConsultation: () => void;
}
const Main = ({ scrollToConsultation }: MainProps) => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-[110vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoplayback}
        autoPlay
        muted
        loop
        playsInline
      >
        Your browser does not support the video tag.
      </video>
      <div className="bg-[#003462] inset-0 absolute top-0 opacity-60"></div>

      {/* Overlay Text */}
      <div className="relative z-10 flex flex-col items-start w-[85%] mx-auto justify-center h-full ">
        <h1 className="text-3xl text-white md:text-5xl font-bold mb-4">
          {t("mainTitle")}
        </h1>
        <p className="text-lg text-white mb-6  max-w-2xl">
          {t("mainDescription")}
        </p>
        <button
          onClick={scrollToConsultation}
          className="bg-[#f7941d] hover:bg-[#f7781d]  mb-6 cursor-pointer text-sm text-white font-bold py-1.5 px-6 rounded-md"
        >
          {t("mainButton")}
        </button>
        <GoogleReviewBadge />
      </div>
    </div>
  );
};

export default Main;
