import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import logo from "../../assets/1-removebg-preview.png";
import logo2 from "../../assets/2-removebg-preview.png";
import logo3 from "../../assets/3-removebg-preview.png";
import logo4 from "../../assets/4-removebg-preview.png";
import logo5 from "../../assets/5-removebg-preview.png";
import logo6 from "../../assets/6-removebg-preview.png";
import logo7 from "../../assets/7-removebg-preview.png";
import logo8 from "../../assets/8-removebg-preview.png";
import logo9 from "../../assets/9-removebg-preview.png";
import logo10 from "../../assets/10-removebg-preview.png";
import logo11 from "../../assets/11-removebg-preview.png";
import logo12 from "../../assets/12-removebg-preview.png";
import logo13 from "../../assets/13-removebg-preview.png";
import logo14 from "../../assets/14-removebg-preview.png";
import logo15 from "../../assets/15-removebg-preview.png";

const images = [
  logo,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [offsetX, setOffsetX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const visibleSlides = 4;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getVisibleImages = () => {
    const visible = [];
    for (let i = 0; i < visibleSlides; i++) {
      visible.push(images[(currentIndex + i) % images.length]);
    }
    return visible;
  };

  const handleDragStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setDragging(true);
  };

  const handleDragMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!dragging || startX === null) return;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - startX;
    setOffsetX(diff);
  };

  const handleDragEnd = () => {
    if (!dragging) return;

    if (offsetX < -50) {
      nextSlide();
    } else if (offsetX > 50) {
      prevSlide();
    }

    setDragging(false);
    setOffsetX(0);
    setStartX(null);
  };

  return (
    <section className="py-12 max-w-7xl mx-auto bg-white text-center relative">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 text-[#5B2C8E]">
        {isArabic ? "شركاؤنا " : "Our Partners"}
      </h2>

      <div className="relative flex justify-between items-center gap-2.5">
        {/* زر السابق */}
        <div
          onClick={isArabic ? nextSlide : prevSlide}
          className="cursor-pointer p-1.5 rounded-full z-10"
        >
          {!isArabic ? (
            <FaArrowLeft size={15} className="text-gray-200" />
          ) : (
            <FaArrowRight size={15} className="text-gray-200" />
          )}
        </div>

        {/* الصور مع سحب ناعم */}
        <div
          className="flex gap-6 overflow-hidden justify-center"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{
            transform: `translateX(${offsetX}px)`,
            transition: dragging ? "none" : "transform 0.3s ease",
          }}
        >
          {getVisibleImages().map((img, index) => (
            <div
              key={index}
              className="border p-4 rounded-md min-w-[200px] min-h-[120px] flex justify-center items-center shadow-sm bg-white"
            >
              <img
                src={img}
                alt={`Logo ${index}`}
                className="w-full h-40 object-contain"
              />
            </div>
          ))}
        </div>

        {/* زر التالي */}
        <div
          onClick={isArabic ? prevSlide : nextSlide}
          className="cursor-pointer p-1.5 rounded-full z-10"
        >
          {!isArabic ? (
            <FaArrowRight size={20} className="text-gray-200" />
          ) : (
            <FaArrowLeft size={20} className="text-gray-200" />
          )}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
