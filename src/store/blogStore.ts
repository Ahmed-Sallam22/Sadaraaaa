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

        updatedTitle = updatedTitle
          .replace(/بيزنس لينك/gi, "صدارة")
          .replace(uaeRegex, " السعودية ");

        updatedContent = originalContent
          .replace(/بيزنس لينك/gi, "صدارة")
          .replace(uaeRegex, " السعودية ")
          .replace(uaeRegex2, " info@sadarabusiness.com ")
          .replace(uaeRegex3, " 97143215227 ")
          .replace(uaeRegex4, " https://sadarabusiness.com ")
          .replace(uaeRegex5, " https://sadarabusiness.com ");
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
