import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const ReviewsCarousel = () => {
  const { t, i18n } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [reviews, setReviews] = useState<
    { name: string; date: string; text: string; rating: number }[]
  >([]);

  useEffect(() => {
    const loadedReviews = t("reviews", {
      returnObjects: true,
    }) as typeof reviews;
    if (Array.isArray(loadedReviews)) {
      setReviews(loadedReviews);
      setCurrent(0); // reset on language switch
    }
  }, [i18n.language, t]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [reviews]);

  if (reviews.length === 0) return null;

  const review = reviews[current];

  return (
    <div className="w-full  flex flex-col justify-center items-center text-white mb-10 lg:mb-0 transition-all">
      <div className="bg-white text-black rounded-lg p-6 w-full max-w-md shadow-lg transition-all duration-500">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-purple-500 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
            {review.name[0]}
          </div>
          <div>
            <h3 className="font-bold">{review.name}</h3>
          </div>
        </div>

        <div className="flex items-center text-yellow-400 mb-2">
          {"★".repeat(review.rating)}
        </div>

        <p className="text-right">{review.text}</p>
      </div>

      {/* <div className="flex gap-2 mt-4">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default ReviewsCarousel;
