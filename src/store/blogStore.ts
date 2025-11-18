// src/store/blogStore.ts
import { create } from "zustand";
import axios from "axios";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic4 from "../assets/pic4.png";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic8 from "../assets/pic8.png";
import pic3 from "../assets/pic3.png";
import pic9 from "../assets/pic9.png";
import pic7 from "../assets/pic7.jpg";

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  slug: string;
  yoast_head_json?: {
    og_locale?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string;
    }[];
  };
}

interface BlogState {
  posts: Post[];
  allPosts: Post[];
  loading: boolean;
  error: string;
  timestamp: number | null;
  fetchPosts: (lang: string) => Promise<void>;
  filterPosts: (lang: string) => void;
}

const isArabicText = (text: string) => {
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text);
};

export const useBlogStore = create<BlogState>((set, get) => ({
  posts: [],
  allPosts: [],
  loading: false,
  error: "",
  timestamp: null,

  fetchPosts: async (lang: string) => {
    const { timestamp } = get();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;

    if (timestamp && Date.now() - timestamp < oneWeek) {
      console.log("✅ Using cached data");
      get().filterPosts(lang);
      return;
    }

    set({ loading: true, error: "" });

    try {
      const response = await axios.get(
        `https://www.businesslink.sa/wp-json/wp/v2/posts?_embed&per_page=100`
      );
      const allPosts = response.data;

      console.log("🌐 Fetched new data from API");

      set({ allPosts, timestamp: Date.now() });
      get().filterPosts(lang);
    } catch (error) {
      console.log(error);
      set({ error: "Failed to load posts" });
    } finally {
      set({ loading: false });
    }
  },

  filterPosts: (lang: string) => {
    const { allPosts } = get();

    const filtered = allPosts
      .filter((post: Post) => {
        const title = post.title?.rendered || "";
        return lang === "ar" ? isArabicText(title) : !isArabicText(title);
      })
      .map((post) => {
        const originalTitle = post.title?.rendered || "";
        const originalContent = post.content?.rendered || "";

        let updatedTitle = originalTitle;
        let updatedContent = originalContent;

        switch (post.id) {
          case 59337:
            updatedTitle = "اصدار الاقامات وتجديدها للشركات والأفراد";
              post._embedded = {
              ...post._embedded,
              "wp:featuredmedia": [{ source_url: pic9 }],
            };
            break;
          case 58816:
            post._embedded = {
              ...post._embedded,
              "wp:featuredmedia": [{ source_url: pic6 }],
            };
            break;
          case 58847:
            post._embedded = {
              ...post._embedded,
              "wp:featuredmedia": [{ source_url: pic7 }],
            };
            break;
          case 59316:
            updatedTitle = "استخراج السجل تجاري وشهادة تسجيل الضريبة";
            break;
          case 58771:
            updatedTitle =
              "استخراج التراخيص الخاصة بتأجير السيارات والنقل واللوجستي";
            break;
          case 58396:
            updatedTitle = "تأسيس شركات التموين والمطاعم في السعودية";
            post._embedded = {
              ...post._embedded,
              "wp:featuredmedia": [{ source_url: pic2 }],
            };
            break;
          case 58763:
            post._embedded = {
              ...post._embedded,
              "wp:featuredmedia": [{ source_url: pic3 }],
            };
            break;
          case 58752:
            post._embedded = {
              ...post._embedded,
              "wp:featuredmedia": [{ source_url: pic4 }],
            };
            break;
          case 58643:
            updatedTitle =
              "مشاريع المطاعم وتأسيسها في السعودية وفتح فروع للعلامات التجارية";
            post._embedded = {
              ...post._embedded,
              "wp:featuredmedia": [{ source_url: pic8 }],
            };
            break;
          case 58835:
            post._embedded = {
              ...post._embedded,
              "wp:featuredmedia": [{ source_url: pic5 }],
            };
            break;
          case 58316:
            updatedTitle =
              "موانئ السعودية تبدأ انشاء أكبر منطقة لوجستية في السعودية";
            post._embedded = {
              ...post._embedded,
              "wp:featuredmedia": [{ source_url: pic1 }],
            };
            break;
        }

        // التعديلات العامة
        const uaeRegex =
          /([\s?|،-]?)(موانئ دبي|دبي|دبى|أبوظبي|ابوظبي|الامارات|الإمارات)([\s?|،-]?)/gi;
        const uaeRegex2 = /([\s?|،-]?)(info@businesslinkuae.com)([\s?|،-]?)/gi;
        const uaeRegex3 = /([\s?|،-]?)(97143215227)([\s?|،-]?)/gi;
        const uaeRegex4 =
          /([\s?|،-]?)(https:\/\/www.businesslinkuae.com\/ar\/)([\s?|،-]?)/gi;
    
        const uaeRegex5 =
          /([\s?|،-]?)(www.businesslink.sa)([\s?|،-]?)/gi;
   const removeLinksButKeepText = (html: string): string => {
          return html
            // Remove broken HTML attributes like " data-end="3046">
            // .replace(/"\s*data-[a-z]+="[\d]+"\s*>/gi, '')
            // .replace(/"\s*data-[a-z-]+\s*=\s*"[^"]*"[^>]*>/gi, '')
            // Remove standalone broken tags
            // .replace(/[">]{2,}/gi, '')
            // Remove opening <a> tags that are NOT email or phone links (keep the text inside)
            // .replace(/<a\s+(?![^>]*href=["'](mailto:|tel:))[^>]*>/gi, '')
            // Remove closing </a> tags (but text remains)
            .replace(/<\/a>/gi, '')
            // Remove all other HTML tags except <p>, <br>, and email/tel links
            .replace(/href=["']/gi, '')
            // Clean <p> tags to remove any attributes, keep only <p> and </p>
            // .replace(/<p[^>]*>/gi, '<p>')
            // Convert <br> tags to proper format
            // .replace(/<br[^>]*>/gi, '<br />');
   };

        const priceRegex1 = /(?:\d+|[٠-٩]+)[\s,،]*(?:ألف|الf|آلاف|الاف|مليون|ملايين)[\s,،]*(?:ريال|ريالاً|ريالا|دولار|درهم|سعودي)/gi;
        const priceRegex2 = /(?:\d+|[٠-٩]+)[\s,،]*(?:ريال|ريالاً|ريالا|دولار|درهم|سعودي)/gi;
        
        // Remove "X آلاف ريال" or "X الف ريال" patterns - يزيل: ٥ آلاف ريال، ٧ آلاف ريال
        const arabicThousandsRegex = /(?:\d+|[٠-٩]+)[\s,،]*(?:آلاف|الاف|ألف|الف)[\s,،]*(?:ريال|ريالاً|ريالا|دولار|درهم|سعودي)?/gi;
        
        // Remove price ranges: "بين X إلى Y", "من X إلى Y" - يزيل: بين ٣٠ إلى سعودي
        const priceRangeRegex = /(?:بين|من)[\s,،]+(?:\d+|[٠-٩]+)[\s,،]*(?:إلى|الى|-)[\s,،]*(?:\d+|[٠-٩]+)?[\s,،]*(?:ألف|الف|آلاف|الاف|مليون|ملايين)?[\s,،]*(?:ريال|ريالاً|ريالا|دولار|درهم|سعودي)?/gi;
        
        // Remove bank guarantee mentions - يزيل: ضمان بنكي، ضمانات بنكية
        // const bankGuaranteeRegex = /(?:ضمان بنكي|ضمانات بنكية|ضمان مالي|كفالة بنكية|ضمانات مالية|رسوم ضمان)/;

        updatedTitle = updatedTitle
          .replace(/بيزنس لينك/gi, "رابتشر للاعمال")
          .replace(uaeRegex, " السعودية ");

        // First, remove all links except email and phone
        updatedContent = removeLinksButKeepText(originalContent);
        
        updatedContent = updatedContent
          .replace(/بيزنس لينك/gi, "رابتشر للاعمال")
          .replace(uaeRegex, " السعودية ")
          .replace(uaeRegex2, " info@rapbuss.com ")
          .replace(uaeRegex3, " 966920035150 ")
          .replace(uaeRegex4, " https://rapbuss.com ")
          .replace(uaeRegex5, " https://rapbuss.com ")
          // .replace(bankGuaranteeRegex, " ") // Remove bank guarantee mentions
          .replace(priceRangeRegex, " ") // Remove price ranges
          .replace(arabicThousandsRegex, " ") // Remove Arabic thousands patterns
          .replace(priceRegex1, " ") // Remove X ألف ريال patterns
          .replace(priceRegex2, " ") // Remove X ريال patterns
          // Clean up multiple spaces and punctuation
          // .replace(/\s{2,}/g, " ")
          // .replace(/\s+([،,.])/g, "$1")
          // .replace(/([،,.])\s*([،,.])/g, "$1")
          // .replace(/^\s*[.،,]\s*/gm, ""/) // Remove lines starting with punctuation
      
        return {
          ...post,
          title: {
            ...post.title,
            rendered: updatedTitle.trim(),
          },
          content: {
            ...post.content,
            rendered: updatedContent.trim(),
          },
        };
      });

    set({ posts: filtered });
  },
}));
