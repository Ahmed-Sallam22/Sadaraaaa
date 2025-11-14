import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useBlogStore } from "../../store/blogStore";
import { Link } from "react-router-dom";
import { FaSearch, FaRegSadTear } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import emailjs from "@emailjs/browser";
import "react-phone-input-2/lib/style.css";

const BlogsPage = () => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const { posts, loading, error } = useBlogStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const postsPerPage = 10;

  const filteredPosts = posts.filter((post) =>
    post.title.rendered.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

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

  return (
    <section className="bg-[#f6f9fb] py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 🔍 Sidebar */}

        {/* 📄 Main Articles */}
        <main className="lg:col-span-8">
          <h1 className="text-3xl font-bold text-[#002d72] mb-6">
            {isArabic ? "المقالات" : "Articles"}
          </h1>

          {/* 🌀 Loading */}
          {loading && (
            <div className="flex flex-col items-center justify-center space-y-4 py-10">
              <div className="w-12 h-12 border-4 border-[#002d72] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[#002d72] font-semibold text-lg">
                {isArabic ? "جاري التحميل..." : "Loading..."}
              </p>
            </div>
          )}

          {/* ❌ Error */}
          {error && <p className="text-center text-red-500">{error}</p>}

          {/* 🔍 No Posts */}
          {!loading && filteredPosts.length === 0 && (
            <div className="col-span-full flex flex-col items-center text-gray-500 mt-10">
              <FaRegSadTear className="text-4xl mb-2" />
              <p>
                {isArabic
                  ? "لا توجد مقالات متاحة حالياً."
                  : "No articles available at the moment."}
              </p>
            </div>
          )}

          {/* 🔲 Grid of Articles */}
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
            {paginatedPosts.map((post) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className="bg-white shadow rounded-lg overflow-hidden hover:shadow-md transition"
              >
                {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                  <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-4">
                  <h3
                    className="text-[#002d72] font-bold text-lg mb-2 line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: post.title.rendered,
                    }}
                  />

                  <p className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString(
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

          {/* 📃 Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex justify-center space-x-2 rtl:space-x-reverse">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded font-medium shadow text-sm ${
                    currentPage === index + 1
                      ? "bg-[#002d72] text-white"
                      : "bg-white text-[#002d72]"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </main>
        <aside className="lg:col-span-4 space-y-6">
          {/* Search Box */}
          <div className="flex items-center bg-white rounded overflow-hidden shadow">
            <div className="bg-[#002d72] text-white p-3">
              <FaSearch />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 text-right outline-none"
              placeholder={isArabic ? "...ابحث" : "Search..."}
            />
          </div>

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
      </div>
    </section>
  );
};

export default BlogsPage;
