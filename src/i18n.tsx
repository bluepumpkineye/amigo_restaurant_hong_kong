import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "zh";

export type Localized = { en: string; zh: string };

/* helper: pick by language from a {en, zh} object */
export const L = (val: Localized, lang: Lang) => val[lang];

/* ------------------------------------------------------------------ */
/* Translation dictionary                                              */
/* ------------------------------------------------------------------ */
export const t = {
  brand: {
    name: "Amigo",
    nameCn: "雅谷",
    tagline: { en: "Classical French Dining", zh: "古典法國餐廳" } as Localized,
    place: { en: "Happy Valley · Hong Kong", zh: "跑馬地 · 香港" } as Localized,
  },

  nav: {
    story: { en: "The House", zh: "本店" } as Localized,
    signatures: { en: "Signatures", zh: "招牌" } as Localized,
    menu: { en: "The Menu", zh: "餐牌" } as Localized,
    gallery: { en: "Gallery", zh: "相集" } as Localized,
    reviews: { en: "Acclaim", zh: "好評" } as Localized,
    visit: { en: "Visit", zh: "到訪" } as Localized,
    reserve: { en: "Reserve", zh: "預約" } as Localized,
    menuToggle: { en: "Open menu", zh: "打開選單" } as Localized,
    close: { en: "Close", zh: "關閉" } as Localized,
    langLabel: { en: "繁體中文", zh: "English" } as Localized,
  },

  hero: {
    eyebrow: { en: "Happy Valley · Hong Kong · Est. 1976", zh: "跑馬地 · 香港 · 創於一九七六年" } as Localized,
    headline: {
      en: "Classical French dining, kept by candlelight.",
      zh: "燭光之下，古典法國菜的半世紀。",
    } as Localized,
    sub: {
      en: "For nearly fifty years, Amigo has been Hong Kong's quiet temple to French gastronomy — Gueridon service at your table, an extraordinary cellar, and live music beneath the chandeliers.",
      zh: "近五十年來，雅谷一直是香港靜謐的法式殿堂——桌邊推車侍膳、珍藏酒窖，以及水晶吊燈下的現場音樂。",
    } as Localized,
    reserve: { en: "Reserve a Table", zh: "預約訂座" } as Localized,
    menu: { en: "View the Menu", zh: "查看餐牌" } as Localized,
    scroll: { en: "Scroll to explore", zh: "向下探索" } as Localized,
  },

  marquee: [
    "Table-side Gueridon service",
    "玫瑰牛油 · Rose-shaped butter",
    "Live guitar & bass nightly",
    "龍蝦湯 · Lobster bisque, flambéed",
    "An extraordinary French cellar",
    "Each lady leaves with a rose",
  ],

  heritage: {
    eyebrow: { en: "The House · Est. 1976", zh: "本店 · 創於一九七六年" } as Localized,
    title: {
      en: "An old-world salon, unchanged in all the ways that matter.",
      zh: "一間老派的法式廳堂——重要的，始終如一。",
    } as Localized,
    p1: {
      en: "Step past the doorman and climb the worn wooden staircase, and Hong Kong falls away. Dark carved panelling, deep velvet banquettes, the low glow of chandeliers and candlelight — Amigo has kept the same quiet, romantic composure for half a century.",
      zh: "穿過門前侍應，踏上磨得發亮的木樓梯，香港的喧囂隨之褪去。深色雕花木板、絲絨卡座、吊燈與燭光的微黃——半個世紀以來，雅谷始終維持著同一份靜謐與浪漫。",
    } as Localized,
    p2: {
      en: "Service is theatre, the old way. Servers in black tie and white gloves carve and flambé at your table from silver trolleys; a small ensemble of guitarists drifts between the rooms. The butter arrives sculpted into roses; every guest is remembered by name.",
      zh: "侍膳如戲，而這是老派的方式。白領結、白手套的侍應推著銀製餐車，在您桌邊現切、現燃；幾位結他手穿梭於廳堂之間。牛油被捏成玫瑰的模樣，每位賓客都被人記住姓名。",
    } as Localized,
    stats: [
      { value: "1976", label: { en: "Opened on Wong Nai Chung Road", zh: "於黃泥涌道開業" } as Localized },
      { value: "4.5", star: true, label: { en: "Average guest rating", zh: "賓客平均評分" } as Localized },
      { value: "7", label: { en: "Days a week · lunch & dinner", zh: "一週七天 · 午晚餐" } as Localized },
      { value: "Gueridon", label: { en: "Table-side service, nightly", zh: "每晚桌邊推車侍膳" } as Localized },
    ],
    quote: {
      text: {
        en: "Entering Amigo is like stepping back in time — white-gloved servers, deep velvets, natural woods. Its old-fashioned appeal has charmed guests for over forty years.",
        zh: "踏進雅谷，恍如回到舊時光——白手套侍應、深邃天鵝絨、溫潤實木。那份老派的魅力，已經迷倒賓客逾四十載。",
      } as Localized,
      source: "Tatler Asia",
    },
  },

  signatures: {
    eyebrow: { en: "From the Kitchen", zh: "廚房推介" } as Localized,
    title: {
      en: "Dishes that have never left the menu.",
      zh: "從未離開過餐牌的招牌。",
    } as Localized,
    intro: {
      en: "Classical French cookery, done the long way. A few signatures we have served for generations.",
      zh: "古典法國菜，以最費工夫的方式呈現。幾道傳承了幾代人的招牌。",
    } as Localized,
  },

  menu: {
    eyebrow: { en: "The Carte", zh: "餐牌" } as Localized,
    title: { en: "The Menu", zh: "餐牌" } as Localized,
    intro: {
      en: "A classical French table — à la carte favourites alongside a seasonal tasting menu. Prices in Hong Kong dollars. À la carte selections and daily specials available; please ask your server.",
      zh: "一張古典的法國餐桌——精選單點與時令嚐味菜單並列。價格以港元計算。另備單點精選及每日特選，歡迎向侍應查詢。",
    } as Localized,
    priceNote: { en: "per person", zh: "每位" } as Localized,
    seasonal: { en: "Seasonal", zh: "時令" } as Localized,
    signature: { en: "Signature", zh: "招牌" } as Localized,
    cta: { en: "Reserve to dine", zh: "訂座享用" } as Localized,
  },

  gallery: {
    eyebrow: { en: "Within these walls", zh: "店內一隅" } as Localized,
    title: { en: "The mood of the room.", zh: "廳堂的氣息。" } as Localized,
    intro: {
      en: "Warm, low-lit and unhurried. A few glimpses of the room we have kept for fifty years.",
      zh: "溫暖、昏黃、不疾不徐。這是我們守了五十年的廳堂，幾個片段。",
    } as Localized,
  },

  reviews: {
    eyebrow: { en: "Acclaim", zh: "好評" } as Localized,
    title: { en: "Loved by Hong Kong for fifty years.", zh: "五十年來，香港人的鍾愛。" } as Localized,
    aggregateRating: "4.5",
    aggregateText: {
      en: "Average across Google, OpenRice & TripAdvisor",
      zh: "Google、OpenRice 及 TripAdvisor 綜合評分",
    } as Localized,
    sinceLabel: { en: "Guest since", zh: "光顧自" } as Localized,
  },

  reserve: {
    eyebrow: { en: "Reservations", zh: "預約" } as Localized,
    title: { en: "Reserve your table.", zh: "預約您的座位。" } as Localized,
    intro: {
      en: "Reservations open one month ahead. Tell us a little about your evening and we will confirm by phone or WhatsApp.",
      zh: "訂座可提前一個月辦理。請簡述您的晚宴安排，我們將以電話或 WhatsApp 與您確認。",
    } as Localized,
    name: { en: "Full name", zh: "姓名" } as Localized,
    phone: { en: "Phone / WhatsApp", zh: "電話 / WhatsApp" } as Localized,
    date: { en: "Date", zh: "日期" } as Localized,
    time: { en: "Time", zh: "時間" } as Localized,
    party: { en: "Guests", zh: "人數" } as Localized,
    occasion: { en: "Occasion", zh: "場合" } as Localized,
    occasionOpts: [
      { en: "Dinner", zh: "晚餐" },
      { en: "Birthday", zh: "生日" },
      { en: "Anniversary", zh: "紀念日" },
      { en: "Business", zh: "商務" },
      { en: "Other", zh: "其他" },
    ] as Localized[],
    notes: { en: "Notes — allergies, seating, cake", zh: "備註 — 敏感、座位、蛋糕" } as Localized,
    submit: { en: "Request by WhatsApp", zh: "經 WhatsApp 預約" } as Localized,
    submitEmail: { en: "Request by Email", zh: "經電郵預約" } as Localized,
    consent: {
      en: "We will never share your details.",
      zh: "我們絕不會外洩您的資料。",
    } as Localized,
    successTitle: { en: "Almost there", zh: "就快完成" } as Localized,
    successBody: {
      en: "Your details are ready. Tap the button below to send your request through WhatsApp — we will confirm shortly.",
      zh: "您的資料已備妥。請點擊下方按鈕，經 WhatsApp 發送預約，我們將盡快確認。",
    } as Localized,
    successAgain: { en: "Edit details", zh: "修改資料" } as Localized,
    whatsappSend: { en: "Send via WhatsApp", zh: "經 WhatsApp 發送" } as Localized,
    required: { en: "Please complete the required fields.", zh: "請填妥所需欄位。" } as Localized,
  },

  visit: {
    eyebrow: { en: "Find us", zh: "聯絡我們" } as Localized,
    title: { en: "Visit Amigo", zh: "到訪雅谷" } as Localized,
    addressLabel: { en: "Address", zh: "地址" } as Localized,
    address: {
      en: "G/F, Amigo Mansion, 79A Wong Nai Chung Road, Happy Valley, Hong Kong",
      zh: "香港跑馬地黃泥涌道79A號 雅谷大厦地下",
    } as Localized,
    hoursLabel: { en: "Hours", zh: "營業時間" } as Localized,
    hoursLunch: { en: "Lunch · daily 12:00 – 15:00", zh: "午餐 · 每日 中午十二時 至 下午三時" } as Localized,
    hoursDinner: { en: "Dinner · daily 18:00 – 00:00", zh: "晚餐 · 每日 晚上六時 至 午夜十二時" } as Localized,
    phoneLabel: { en: "Reservations", zh: "訂座" } as Localized,
    whatsapp: { en: "WhatsApp", zh: "WhatsApp" } as Localized,
    email: { en: "Email", zh: "電郵" } as Localized,
    directions: { en: "Get directions", zh: "查看路線" } as Localized,
  },

  footer: {
    tagline: {
      en: "Classical French dining, kept by candlelight since 1976.",
      zh: "自一九七六年，燭光下的古典法國菜。",
    } as Localized,
    explore: { en: "Explore", zh: "探索" } as Localized,
    contact: { en: "Contact", zh: "聯絡" } as Localized,
    hours: { en: "Hours", zh: "營業時間" } as Localized,
    rights: { en: "All rights reserved.", zh: "版權所有。" } as Localized,
    credit: { en: "Designed with care for the next fifty years.", zh: "為下一個五十年，精心打造。" } as Localized,
  },
} as const;

/* ------------------------------------------------------------------ */
/* Context                                                             */
/* ------------------------------------------------------------------ */
type I18nValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("amigo-lang");
    return saved === "zh" ? "zh" : "en";
  });

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    window.localStorage.setItem("amigo-lang", lang);
  }, [lang]);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang: setLangState,
      toggle: () => setLangState((p) => (p === "en" ? "zh" : "en")),
    }),
    [lang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
