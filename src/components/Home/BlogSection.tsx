import { useTranslation } from "react-i18next";
import { useBlogStore } from "../../store/blogStore"; // ✅ استورد الستيت
import { Link } from "react-router-dom";

const BlogSection = () => {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // ✅ نقرأ الداتا من الستيت
  const { posts, loading, error } = useBlogStore();

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#5B2C8E] mb-10">
          {isArabic ? "أحدث المدونات" : "Latest Blogs"}
        </h2>

        {loading && (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-[#5B2C8E] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-[#5B2C8E] font-semibold text-lg">
              جاري التحميل...
            </p>
          </div>
        )}
        {error && (
          <p className="text-center text-red-500">
            {isArabic ? "خطأ أثناء تحميل البيانات" : "Error loading posts"}
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-8">
          {/* ✅ هنا بنعرض أول 3 بس */}
          {posts.slice(0, 3).map((post) => (
            <Link
              to={`/blog/${post.id}`}
              key={post.id}
              className="bg-white rounded-xl shadow-sm "
            >
              {/* صورة المقال */}
              {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <div className="relative">
                  <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                    {isArabic ? "خبر" : "News"}
                  </div>
                </div>
              )}

              {/* محتوى المقال */}
              <div className="p-4">
                <h3
                  className="text-[#5B2C8E] font-semibold text-lg mb-2 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <p className="text-gray-500 text-sm">
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

        {/* زر آخر الأخبار */}
        <div className="text-center mt-10">
          <Link
            to={"/blog"}
            className="bg-[#5B2C8E] hover:bg-[#4A1E75] text-white font-semibold py-2 px-6 rounded-full"
          >
            {isArabic ? "آخر الأخبار" : "Latest News"}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
