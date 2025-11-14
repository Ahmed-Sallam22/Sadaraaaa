import { useParams, Link } from "react-router-dom";
import { useBlogStore } from "../../store/blogStore";
import { useTranslation } from "react-i18next";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, loading } = useBlogStore();
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_7s0mt2e", // ✅ Service ID
        "template_9obl1dq", // ✅ Template ID
        formData, // ✅ بيانات النموذج
        "cxFQOsaSL8GJRvu4U" // ✅ Public Key
      )
      .then(() => {
        alert("✅ تم الإرسال بنجاح!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch(() => {
        alert("❌ حدث خطأ أثناء الإرسال");
      });
  };

  const post = posts.find((p) => p.id.toString() === id);
  if (loading)
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#002d72] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-[#002d72] font-semibold text-lg">
            جاري التحميل...
          </p>
        </div>
      </div>
    );

  if (!post)
    return <div className="text-center py-20">لم يتم العثور على المقال</div>;

  return (
    <section className="py-16 bg-[#f6f9fb]">
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
                          recentPost._embedded["wp:featuredmedia"][0].source_url
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

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  placeholder={t("form.firstName")}
                  onChange={handleChange}
                  className="p-3 rounded bg-white text-black w-full"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  placeholder={t("form.lastName")}
                  onChange={handleChange}
                  className="p-3 rounded bg-white text-black w-full"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder={t("form.email")}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black w-full"
                required
              />

              <div className="w-full">
                <PhoneInput
                  country="eg"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{ name: "phone", required: true }}
                  containerClass="!w-full"
                  inputClass="!w-full !h-10 !p-3 !text-black !rounded-md"
                  buttonClass="!bg-white"
                  dropdownClass="!text-black"
                  placeholder={t("form.phone")}
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                placeholder={t("form.message")}
                onChange={handleChange}
                className="p-3 rounded bg-white text-black w-full"
                rows={4}
                required
              ></textarea>

              <button
                type="submit"
                className="bg-[#f7941d] hover:bg-[#f7951de8] text-white p-3 rounded w-full font-bold"
              >
                {isArabic ? "التقديم" : "Submit"}
              </button>
            </form>
          </div>
        </aside>

        {/* ✅ تفاصيل المقال */}
        <main className="order-2 lg:order-1 lg:col-span-2">
          {/* العنوان */}
          <div className="text-sm text-[#002d72] mb-4">
            <Link to="/" className="hover:underline text-sm">
              {t("home")}
            </Link>
            <span className="mx-1">«</span>
            <span
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </div>
          <h1
            className="text-3xl font-bold text-[#002d72] mb-2"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* التاريخ */}
          <p className="text-gray-400 text-sm mb-4">
            {new Date(post.date).toLocaleDateString(
              isArabic ? "ar-EG" : "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </p>

          {/* الصورة */}
          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
            <img
              src={post._embedded["wp:featuredmedia"][0].source_url}
              alt={post.title.rendered}
              className="w-full  object-cover rounded-lg mb-8"
            />
          )}

          {/* نص المقال */}
          <article
            className="prose prose-lg text-xl max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </main>
      </div>
      {/* 🔗 Related Posts */}
      <div className="max-w-7xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center text-[#002d72] mb-8">
          {isArabic ? "مواضيع ذات صلة" : "Related Articles"}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts
            .filter((p) => p.id !== post.id)
            .slice(0, 3)
            .map((relatedPost) => (
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
    </section>
  );
};

export default BlogDetails;
