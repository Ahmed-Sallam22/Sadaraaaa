import { useTranslation } from "react-i18next";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const services = [
  "Issuance of a P.O. Box address",
  "Drafting the Articles of Association",
  "Legal attestation of company documents in court",
  "Notary Public services",
  "Visa renewal and cancellation services",
  "VIP medical escort services",
  "Issuance of No Objection Certificate (NOC)",
  "Wages Protection System registration",
  "Legal translation services",
  "Opening a business bank account",
  "Trademark registration services",
  "Company deregistration/liquidation",
  "Saudi work visa/invitation letter issuance",
  "Issuance of investor/partner visa",
  "Obtaining governmental approvals",
  "Marketing services",
  "Construction and mechanical works",
];

const servicesAr = [
  "إصدار عنوان صندوق بريد",
  "صياغة عقد التأسيس",
  "التصديق القانوني على وثائق الشركات في المحكمة",
  "خدمات كاتب العدل",
  "خدمات تجديد وإلغاء التأشيرات",
  "خدمات المرافقة الطبية لكبار الشخصيات",
  "إصدار خطاب عدم ممانعة (NOC)",
  "التسجيل في منصة حماية الأجور",
  "خدمات الترجمة القانونية",
  "فتح حساب بنكي تجاري",
  "خدمات تسجيل العلامات التجارية",
  "شطب أو تصفية الشركات",
  "إصدار تأشيرة عمل سعودية أو خطاب دعوة",
  "إصدار تأشيرة مستثمر/شريك",
  "الحصول على الموافقات الحكومية",
  "خدمات التسويق",
  "أعمال الإنشاءات والأعمال الميكانيكية",
];

const ConciergeServices = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const data = isArabic ? servicesAr : services;

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#5B2C8E] mb-4">
          {isArabic
            ? "خدمات التعقيب في المملكة العربية السعودية"
            : "Concierge Services in Saudi Arabia"}
        </h2>
        <p className="text-[#2E2E2E] max-w-3xl mx-auto mb-12">
          {isArabic
            ? "خبرائنا على استعداد لتقديم خدمات تعقيب شاملة ومهنية مع جميع الجهات والمصالح الحكومية، هيئة الاستثمار، الأمانات، البلديات، وجهات استخراج الرخص ومكاتب العمل."
            : "Our experts are ready to provide comprehensive concierge services with professionalism, dealing with all government and municipal entities, the Investment Authority, municipalities, licensing agencies, and labor offices."}
        </p>

        <div className="grid md:grid-cols-3 gap-y-6 gap-x-8 text-start">
          {data.map((service, index) => (
            <div key={index} className="flex items-center gap-2">
              {isArabic ? (
                <BiChevronLeft className="text-[#57C4B3]" size={20} />
              ) : (
                <BiChevronRight className="text-[#57C4B3]" size={20} />
              )}
              {/* Icon */}
              {/* <FaRegCheckCircle className="text-green-600" size={20} /> */}

              {/* Service Text */}
              <p className="text-[#2E2E2E] font-medium border-b border-gray-200 pb-2 inline-block">
                {service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConciergeServices;
