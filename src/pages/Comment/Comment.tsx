import { useTranslation } from "react-i18next";
import { useBlogStore } from "../../store/blogStore";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";

const Comment = () => {
      const { posts } = useBlogStore();
      const { i18n,t } = useTranslation();
      const isArabic = i18n.language === "ar";
    
    return (
      <div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ✅ العمود الجانبي */}
          <aside className="order-1 lg:order-2 flex-col  ">
            <div className="  p-6 bg-gray-200 rounded-xl shadow-sm space-y-8">
              {/* المدونة */}
              <div>
                <h3 className="text-xl font-bold text-[#002d72] mb-4">
                  {isArabic ? "المدونة" : "Blog"}
                </h3>
                <div className="space-y-4">
                  {posts.slice(0, 3).map((recentPost) => (
                    <Link
                      key={recentPost.id}
                      to={`/blog/${recentPost.id}`}
                      className="flex items-center justify-between gap-4 hover:opacity-80"
                    >
                      <h4
                        className="text-sm text-[#002d72] font-semibold line-clamp-2"
                        dangerouslySetInnerHTML={{
                          __html: recentPost.title.rendered,
                        }}
                      />
                      {recentPost._embedded?.["wp:featuredmedia"]?.[0]
                        ?.source_url && (
                        <img
                          src={
                            recentPost._embedded["wp:featuredmedia"][0]
                              .source_url
                          }
                          alt={recentPost.title.rendered}
                          className="w-25  object-cover "
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="sticky top-2 p-6 mt-10 bg-gray-200 rounded-xl shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-[#002d72] text-center">
                {isArabic ? "تواصل معنا" : "Contact Us"}
              </h3>

              <form className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={t("form.firstName")}
                    className="p-3 rounded bg-white text-black w-full"
                  />
                  <input
                    type="text"
                    placeholder={t("form.lastName")}
                    className="p-3 rounded bg-white text-black w-full"
                  />
                </div>

                <input
                  type="email"
                  placeholder={t("form.email")}
                  className="p-3 rounded bg-white text-black w-full"
                />

                <div className="w-full">
                  <PhoneInput
                    country="eg"
                    containerClass="!w-full"
                    inputClass="!w-full !h-10 !p-3 !text-black !rounded-md"
                    buttonClass="!bg-white"
                    dropdownClass="!text-black"
                    placeholder={t("form.phone")}
                  />
                </div>

                <textarea
                  placeholder={t("form.message")}
                  className="p-3 rounded bg-white text-black w-full"
                  rows={4}
                ></textarea>

                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white p-3 rounded w-full font-bold"
                >
                  {isArabic ? "التقديم" : "Submit"}
                </button>
              </form>
            </div>
          </aside>

          {/* Main content - 2/3 */}
          <div className="order-2 lg:order-1 lg:col-span-2">
            <h1 className="text-3xl font-bold text-[#00246E]">
              {t("tracking.title")}
            </h1>
            <p className="text-sm text-gray-500">{t("tracking.date")}</p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#00246E]">
                {t("tracking.section1Title")}
              </h2>
              <p>{t("tracking.paragraph1")}</p>
              <p>{t("tracking.paragraph2")}</p>
              <p>{t("tracking.paragraph3")}</p>

              <h3 className="font-bold text-lg text-[#00246E]">
                {t("tracking.section1ListTitle")}
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                {(
                  t("tracking.section1List", {
                    returnObjects: true,
                  }) as string[]
                ).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-[#00246E]">
                {t("tracking.section2Title")}
              </h2>
              {(
                t("tracking.section2Paragraphs", {
                  returnObjects: true,
                }) as string[]
              ).map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </section>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-center text-[#002d72] mb-8">
            {isArabic ? "مواضيع ذات صلة" : "Related Articles"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((relatedPost) => (
              <Link
                key={relatedPost.id}
                to={`/blog/${relatedPost.id}`}
                className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
              >
                {relatedPost._embedded?.["wp:featuredmedia"]?.[0]
                  ?.source_url && (
                  <img
                    src={
                      relatedPost._embedded["wp:featuredmedia"][0].source_url
                    }
                    alt={relatedPost.title.rendered}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3
                    className="text-[#002d72] font-semibold text-lg mb-2 line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: relatedPost.title.rendered,
                    }}
                  />
                  <p className="text-sm text-gray-500">
                    {new Date(relatedPost.date).toLocaleDateString(
                      isArabic ? "ar-EG" : "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Comment;
