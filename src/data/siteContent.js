const SITE_URL = "https://justin.jackiedesign.tw";
const SITE_NAME = "Justin Fitness";
const WEBSITE_ID = `${SITE_URL}#website`;
const WEBPAGE_ID = `${SITE_URL}#webpage`;
const BUSINESS_ID = `${SITE_URL}#business`;
const TRAINER_ID = `${SITE_URL}#trainer`;
const DEFAULT_OG_IMAGE = new URL("/ogImg.png", SITE_URL).toString();

export const siteMeta = {
  siteName: SITE_NAME,
  siteUrl: SITE_URL,
  locale: "zh-Hant-TW",
  title: "Justin Fitness | 台北個人健身教練與客製化一對一訓練課程",
  description:
    "Justin 個人健身教練於台北大同區提供一對一客製化訓練、營養規劃、體態矯正與增肌減脂課程，協助你以安全有效的方式打造理想體態。",
  canonical: SITE_URL,
  ogImage: DEFAULT_OG_IMAGE,
  ogImageAlt: "Justin Fitness 個人健身教練品牌形象與訓練服務展示",
  keywords: [
    "Justin 健身教練",
    "台北健身教練",
    "台北私人教練",
    "大同區健身教練",
    "個人健身教練",
    "私人教練",
    "客製化訓練",
    "體態雕塑",
    "重訓課程",
    "world gym 寧夏店",
    "拳擊訓練",
    "功能性訓練",
    "營養指導",
    "體態矯正",
    "肌力訓練",
    "健身計畫",
    "健康生活",
    "運動表現提升",
    "減脂增肌",
    "健身諮詢",
  ].join(", "),
};

export const heroContent = {
  eyebrow: "Justin Fitness Coaching",
  title: "量身打造你的專屬訓練策略",
  subtitle:
    "從動作評估、訓練課表到飲食調整，Justin 以專業實戰經驗陪你突破每個瓶頸，打造持久而聰明的訓練成果。",
  primaryCta: { label: "預約免費體驗", href: "#contact" },
  secondaryCta: { label: "了解課程方案", href: "#programs" },
  stats: [
    { label: "專業經驗", value: "8+", suffix: "年" },
    { label: "客戶轉型", value: "320+", suffix: "人" },
    { label: "平均滿意度", value: "4.9", suffix: "/5" },
  ],
  backgroundVideo: "/video.mp4",
};

export const programHighlights = [
  {
    name: "一對一精準訓練",
    description:
      "以功能性訓練與科學化週期設計為核心，針對不同體態目標設計個人化課表。",
    icon: "💪",
  },
  {
    name: "體態評估與矯正",
    description:
      "透過姿勢分析與動作拍攝，找出影響表現的根因，搭配矯正訓練重建肌力平衡。",
    icon: "🧭",
  },
  {
    name: "營養與生活管理",
    description:
      "客製化營養策略與睡眠、壓力管理建議，打造能長期維持的健康生活型態。",
    icon: "🥗",
  },
];

export const latestNews = [
  {
    title: "Justin 引進全新力量測試系統，強化運動表現追蹤",
    date: "2024-04-28",
    excerpt:
      "藉由結合智能感測與雲端分析，訓練結果將以數據化呈現，協助會員制定更準確的訓練目標。",
    url: "#news-data-system",
  },
  {
    title: "春季塑形計畫限量開放報名，享有客製營養菜單",
    date: "2024-03-18",
    excerpt:
      "12 週高強度塑形計畫，包含 InBody 分析、飲食追蹤與每週線上回饋，幫助你迎接夏日體態。",
    url: "#news-spring-program",
  },
  {
    title: "企業包班體能訓練合作，打造高效團隊文化",
    date: "2024-02-05",
    excerpt:
      "提供公司團隊量身訂製的訓練課程，結合肌力與壓力調適，提升同仁專注力與健康。",
    url: "#news-corporate-training",
  },
];

export const galleryImages = [
  {
    src: "/images/gallery/S__33718399_0.jpg",
    alt: "Justin 指導學員進行背肌上拉的姿勢調整",
  },
  {
    src: "/images/gallery/S__33718400_0.jpg",
    alt: "Justin 指導學員進行拳擊教學的訓練",
  },
  {
    src: "/images/gallery/S__33718401_0.jpg",
    alt: "Justin 指導學員進行拳擊教學的訓練",
  },
  {
    src: "/images/gallery/S__33718402_0.jpg",
    alt: "Justin 指導學員進行槓鈴胸推的姿勢調整",
  },
  {
    src: "/images/gallery/S__33718403_0.jpg",
    alt: "Justin 指導學員進行拳擊教學的訓練",
  },
  {
    src: "/images/gallery/S__33718404_0.jpg",
    alt: "Justin 指導學員進行拳擊教學的訓練",
  },
];

export const blogPosts = [
  {
    title: "減脂停滯期該怎麼突破？Justin 教練以科學化分析給你答案",
    date: "2025-10-12",
    category: "體態管理",
    description:
      "了解熱量缺口、訓練刺激與恢復曲線的關係，並掌握 4 個關鍵調整策略，讓減脂過程更有效率。",
    readingTime: "6 分鐘",
    url: "https://justin-fitness-life.blogspot.com/2025/10/blog-post.html",
  },
  {
    title: "從零開始的硬舉指南：保持脊椎安全、提升力量表現",
    date: "2025-10-12",
    category: "重量訓練",
    description:
      "掌握起始姿勢、握距與呼吸控制，搭配進階訓練模板，打造穩定安全的硬舉動作基本功。",
    readingTime: "8 分鐘",
    url: "https://justin-fitness-life.blogspot.com/2025/10/blog-post_11.html",
  },
  {
    title: "忙碌上班族的一日高效營養攝取範例",
    date: "2025-10-12",
    category: "營養飲食",
    description:
      "拆解早餐、午餐、晚餐與加餐的實際案例，提供可快速準備又兼顧營養密度的飲食建議。",
    readingTime: "5 分鐘",
    url: "https://justin-fitness-life.blogspot.com/2025/10/blog-post_75.html",
  },
];

export const googleReviews = [
  {
    reviewer: "Grace Chen",
    rating: 5,
    content:
      "教練會詳細記錄每次訓練狀況，並依照我的膝蓋問題調整強度。三個月下來體脂降了 6%，體能差很多！",
    date: "2024-03-30",
    profileInitials: "GC",
  },
  {
    reviewer: "Eric Lin",
    rating: 5,
    content:
      "一直以來都有肩頸痠痛，Justin 從動作模式著手調整，現在重量增加了還更有精神，超推薦！",
    date: "2024-02-14",
    profileInitials: "EL",
  },
  {
    reviewer: "Vivian Wu",
    rating: 4.8,
    content:
      "教練非常懂飲食策略，會讓我每週提供餐點照片並給建議。最棒的是不會要求極端飲食！",
    date: "2024-01-09",
    profileInitials: "VW",
  },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/_justin1204/",
    handle: "Justin的IG",
  },
  // { label: "Facebook", href: "https://facebook.com/justinfitness", handle: "Justin Fitness" },
  // { label: "YouTube", href: "https://youtube.com/@justinfitness", handle: "Justin Fitness" },
  { label: "LINE", href: "http://line.me/ti/p/justin120404", handle: "Justin的LINE" },
];

export const contactInfo = {
  phone: "0928434740",
  email: "justine120404@gmail.com",
  address: "台北市大同區寧夏路 11 號 B1 (WG寧夏店)",
  googleMaps: "https://share.google/N4gCXKsRH9Az8K4DF",
  businessHours: [
    { label: "週二至週六", value: "06:00 – 24:00" },
    { label: "週日", value: "公休（預約制）" },
    { label: "週一", value: "公休（預約制）" },
  ],
};

const averageRating = (
  googleReviews.reduce((sum, review) => sum + review.rating, 0) / googleReviews.length
).toFixed(1);

const homeLastModified = [...latestNews, ...blogPosts, ...googleReviews]
  .map((item) => item.date)
  .sort()
  .at(-1);

export const sitemapEntries = [
  {
    path: "/",
    lastModified: homeLastModified,
    changeFrequency: "weekly",
    priority: "1.0",
  },
];

export const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: siteMeta.siteName,
    url: siteMeta.siteUrl,
    description: siteMeta.description,
    inLanguage: siteMeta.locale,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": WEBPAGE_ID,
    url: siteMeta.canonical,
    name: siteMeta.title,
    description: siteMeta.description,
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: {
      "@id": TRAINER_ID,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: siteMeta.ogImage,
    },
    inLanguage: siteMeta.locale,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: siteMeta.siteName,
    image: siteMeta.ogImage,
    url: siteMeta.canonical,
    description: siteMeta.description,
    telephone: contactInfo.phone,
    email: contactInfo.email,
    hasMap: contactInfo.googleMaps,
    address: {
      "@type": "PostalAddress",
      streetAddress: "寧夏路 11 號 B1",
      addressLocality: "大同區",
      addressRegion: "台北市",
      postalCode: "103",
      addressCountry: "TW",
    },
    areaServed: {
      "@type": "City",
      name: "Taipei",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "06:00",
        closes: "23:59",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating,
      reviewCount: String(googleReviews.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: googleReviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.reviewer,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(review.rating),
        bestRating: "5",
      },
      reviewBody: review.content,
      datePublished: review.date,
    })),
    makesOffer: programHighlights.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: item.name,
        description: item.description,
      },
    })),
    sameAs: socialLinks.map((link) => link.href),
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": TRAINER_ID,
    name: "Justin",
    jobTitle: "個人健身教練",
    description:
      "Justin 為台北一對一健身教練，提供客製化訓練、體態評估、矯正運動與營養指導服務。",
    worksFor: {
      "@id": BUSINESS_ID,
    },
    knowsAbout: [
      "一對一健身訓練",
      "體態矯正",
      "重量訓練",
      "增肌減脂",
      "營養規劃",
      "功能性訓練",
    ],
    sameAs: socialLinks.map((link) => link.href),
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Justin Fitness 訓練服務",
    itemListElement: programHighlights.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      description: item.description,
    })),
  },
];
