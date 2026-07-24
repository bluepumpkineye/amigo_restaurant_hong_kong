import type { Localized } from "./i18n";

/* ================================================================== */
/* SIGNATURE DISHES                                                    */
/* ================================================================== */
export type Signature = {
  id: string;
  image: string;
  name: Localized;
  desc: Localized;
};

export const signatures: Signature[] = [
  {
    id: "bisque",
    image: "/images/dish-bisque.jpg",
    name: { en: "Lobster Bisque", zh: "龍蝦湯" },
    desc: {
      en: "Australian lobster simmered slow into a deep coral bisque, finished with a pour of warm cognac and a flame lit at your table.",
      zh: "澳洲龍蝦慢熬成濃郁橙紅的龍蝦湯，臨上桌時注入溫熱干邑，於您面前燃起火光。",
    },
  },
  {
    id: "beef",
    image: "/images/dish-steak.jpg",
    name: { en: "Fillet de Boeuf 'Mongolian'", zh: "蒙古牛柳" },
    desc: {
      en: "Prime beef tenderloin grilled over charcoal and gilded with a truffle jus — our most-ordered main for decades.",
      zh: "頂級牛柳以炭火燒烤，淋上松露濃汁——數十年來最叫座的主菜。",
    },
  },
  {
    id: "foie",
    image: "/images/dish-foiegras.jpg",
    name: { en: "Pan-Seared Duck Liver", zh: "香煎法國鮮鴨肝" },
    desc: {
      en: "Thick-cut foie gras, crusted golden and melting within, lifted by a thread of aged balsamic.",
      zh: "厚切鴨肝，外層金黃香脆、內裡柔滑即融，以陳年意式黑醋輕輕提味。",
    },
  },
  {
    id: "crepe",
    image: "/images/dish-crepe.jpg",
    name: { en: "Crêpes Suzette", zh: "橙酒班戟" },
    desc: {
      en: "Thin crêpes folded into a buttery orange and Grand Marnier sauce, set alight at the guéridon.",
      zh: "薄身班戟浸於牛油橙汁與 Grand Marnier 之中，於餐車旁即席燃焰。",
    },
  },
];

/* ================================================================== */
/* THE MENU                                                            */
/* ================================================================== */
export type MenuItem = {
  name: Localized;
  desc?: Localized;
  price?: string;
  tags?: Array<"signature" | "seasonal">;
};

export type MenuSection = {
  id: string;
  title: Localized;
  subtitle?: Localized;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "sets",
    title: { en: "Le Menu — Set Dinners", zh: "套餐" },
    subtitle: {
      en: "A complete progression, with a glass of wine, bread, and our finishing chocolates.",
      zh: "完整的用餐流程，配一杯餐酒、麵包及雅谷朱古力。",
    },
    items: [
      {
        name: { en: "Le Déjeuner — Four-Course Lunch", zh: "午市套餐 · 四道菜" },
        desc: { en: "Appetiser, soup, main, dessert & coffee or tea", zh: "前菜、湯、主菜、甜品及咖啡或茶" },
        price: "HK$ 890",
      },
      {
        name: { en: "Le Dîner — Seasonal Tasting", zh: "晚市嚐味套餐" },
        desc: { en: "A revolving seasonal menu, our chef's choice", zh: "隨時令更替的廚師精選" },
        price: "HK$ 1,280",
        tags: ["seasonal"],
      },
    ],
  },
  {
    id: "starters",
    title: { en: "Hors-d'œuvre", zh: "頭盤" },
    items: [
      {
        name: { en: "Mongolian Beef Tartare", zh: "蒙古生牛肉他他" },
        desc: { en: "Hand-sliced raw beef, prepared table-side with house mustard & cream", zh: "手切生牛肉，桌邊以自家芥末忌廉即席拌製" },
        price: "HK$ 320",
        tags: ["signature"],
      },
      {
        name: { en: "Pan-Seared French Duck Liver", zh: "香煎法國鮮鴨肝" },
        desc: { en: "Golden-crusted, aged balsamic, kumquat jelly", zh: "金黃香脆 · 陳年黑醋 · 金桔啫喱" },
        price: "HK$ 360",
      },
      {
        name: { en: "Escargots, Stuffed Mushroom & Bacon", zh: "釀蘑菇煙肉焗田螺" },
        price: "HK$ 240",
      },
      {
        name: { en: "Scottish Smoked Salmon", zh: "蘇格蘭煙三文魚" },
        price: "HK$ 260",
      },
      {
        name: { en: "House Salad — Avocado, Heart of Palm", zh: "雅谷沙律 · 牛油果、棕櫚芯" },
        desc: { en: "Tossed in our French dressing", zh: "以法式沙律汁拌勻" },
        price: "HK$ 180",
      },
    ],
  },
  {
    id: "soups",
    title: { en: "Soupes", zh: "湯品" },
    items: [
      {
        name: { en: "Lobster Bisque, flambéed", zh: "龍蝦湯 · 燃焰" },
        desc: { en: "Australian lobster, finished with warm cognac", zh: "澳洲龍蝦，以溫熱干邑收尾" },
        price: "HK$ 220",
        tags: ["signature"],
      },
      {
        name: { en: "Ox-Tail Consommé", zh: "牛尾清湯" },
        desc: { en: "Carrot & zucchini, a whisper of sherry, shaved truffle", zh: "甘筍翠玉瓜 · 絲莉酒香 · 現刨松露" },
        price: "HK$ 160",
      },
      {
        name: { en: "Cherry-Stone Clam Chowder", zh: "蜆肉周打湯" },
        desc: { en: "Fresh Boston clams, thick and creamy", zh: "新鮮波士頓蜆肉，濃稠幼滑" },
        price: "HK$ 150",
      },
    ],
  },
  {
    id: "seafood",
    title: { en: "Poissons & Crustacés", zh: "海鮮" },
    items: [
      {
        name: { en: "Dover Sole, Oyster & Parma Ham", zh: "多寶魚 · 釀生蠔帕爾馬火腿" },
        desc: { en: "Lightly pan-fried, pine-nut butter sauce", zh: "輕煎 · 松子牛油汁" },
        price: "HK$ 620",
        tags: ["signature"],
      },
      {
        name: { en: "Australian Lobster with Truffle", zh: "松露澳洲龍蝦" },
        price: "HK$ 720",
        tags: ["seasonal"],
      },
      {
        name: { en: "Hokkaido Scallop Vol-au-Vent", zh: "北海道帶子酥皮盒" },
        desc: { en: "Creamy scallop, lobster espuma", zh: "忌廉帶子 · 龍蝦泡沫" },
        price: "HK$ 380",
      },
    ],
  },
  {
    id: "mains",
    title: { en: "Viandes", zh: "主菜" },
    items: [
      {
        name: { en: "Fillet de Boeuf 'Mongolian'", zh: "蒙古牛柳" },
        desc: { en: "Charcoal-grilled tenderloin, truffle jus", zh: "炭燒牛柳 · 松露濃汁" },
        price: "HK$ 560",
        tags: ["signature"],
      },
      {
        name: { en: "Steak Diane", zh: "戴安娜牛柳" },
        desc: { en: "Flambéed table-side, mushroom cream", zh: "桌邊燃焰 · 蘑菇忌廉" },
        price: "HK$ 520",
        tags: ["signature"],
      },
      {
        name: { en: "Beef Tenderloin, Goose Liver & Truffle", zh: "牛柳鵝肝松露" },
        price: "HK$ 640",
      },
      {
        name: { en: "Wagyu Beef Cheek, Braised", zh: "慢燉和牛面頰" },
        desc: { en: "Hours-slow, rich meat jus", zh: "慢燉多時 · 濃郁肉汁" },
        price: "HK$ 480",
      },
      {
        name: { en: "Carré d'Agneau — Lamb Rack", zh: "紐西蘭羊架" },
        desc: { en: "Rosemary jus", zh: "迷迭香燒汁" },
        price: "HK$ 520",
      },
      {
        name: { en: "Rib-Eye, Three-Pepper Sauce", zh: "美國西冷 · 三椒汁" },
        price: "HK$ 460",
      },
      {
        name: { en: "Goose-Fat French Chicken Breast", zh: "鵝油法國雞胸" },
        price: "HK$ 380",
      },
    ],
  },
  {
    id: "desserts",
    title: { en: "Desserts", zh: "甜品" },
    items: [
      {
        name: { en: "Crêpes Suzette, flambéed", zh: "橙酒班戟 · 燃焰" },
        price: "HK$ 180",
        tags: ["signature"],
      },
      {
        name: { en: "Soufflé — Grand Marnier or Chocolate", zh: "梳乎厘 · 橙酒或朱古力" },
        price: "HK$ 160",
        tags: ["seasonal"],
      },
      {
        name: { en: "Vanilla Crème Brûlée", zh: "香草焦糖燉蛋" },
        price: "HK$ 130",
      },
      {
        name: { en: "Wine-Poached Pear", zh: "紅酒燴梨" },
        price: "HK$ 140",
      },
      {
        name: { en: "Mille-Feuille", zh: "拿破崙" },
        price: "HK$ 150",
      },
      {
        name: { en: "Amigo's Chocolate", zh: "雅谷朱古力" },
        desc: { en: "Our signature — a frozen chocolate shell hiding ice cream", zh: "招牌——冰凍朱古力脆殼裹著雪糕" },
        price: "HK$ 110",
        tags: ["signature"],
      },
    ],
  },
];

/* ================================================================== */
/* REVIEWS                                                             */
/* ================================================================== */
export type Review = {
  quote: Localized;
  author: string;
  source: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    quote: {
      en: "Stepping into Amigo is like stepping back in time. White-gloved servers, a three-piece band drifting between the tables, and a lobster bisque flambéed at your side — the kind of evening Hong Kong has almost forgotten how to give you.",
      zh: "踏進雅谷，恍如回到舊時光。白手套侍應、穿梭各桌的三人樂隊，還有在您身旁燃焰的龍蝦湯——這樣的夜晚，香港幾乎已忘記如何為您呈現。",
    },
    author: "Reviewed on TripAdvisor",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    quote: {
      en: "I passed this restaurant every day as a child. Decades and many Michelin stars later, I finally came to discover its magic — and understood why it has lasted fifty years.",
      zh: "小時候每天經過這間餐廳。幾十年、無數米芝蓮星之後，我終於來一探它的魔力——也終於明白，它為何能屹立五十年。",
    },
    author: "Reviewed on TripAdvisor",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    quote: {
      en: "The décor, the rose-shaped butter, the silver engraved 'Amigo' — every detail is deliberate. Classical French service the way it used to be done, and barely exists anymore.",
      zh: "裝潢、玫瑰牛油、刻著「雅谷」的銀器——每個細節都用心。那是昔日的古典法式侍膳，如今已近乎絕跡。",
    },
    author: "Reviewed on OpenRice",
    source: "OpenRice",
    rating: 4.5,
  },
  {
    quote: {
      en: "A unique, quiet setting beside the racecourse. The classical décor is remarkable, and the staff in black tie and tails looked after us all evening. Don't miss the crêpes Suzette.",
      zh: "賽馬場旁，一個獨特而寧靜的角落。古典裝潢令人驚豔，燕尾服侍應整晚悉心照料。千萬別錯過橙酒班戟。",
    },
    author: "Reviewed on TripAdvisor",
    source: "TripAdvisor",
    rating: 5,
  },
  {
    quote: {
      en: "Fifty years old and still full on a weekday lunch — that tells you everything. Old-school European charm, rose butter, live music. A place to celebrate.",
      zh: "開業五十年，平日午餐依然坐滿——這已說明一切。老派歐陸風情、玫瑰牛油、現場音樂。一個值得慶祝的地方。",
    },
    author: "Reviewed on OpenRice",
    source: "OpenRice",
    rating: 4.5,
  },
];

/* ================================================================== */
/* CONTACT                                                             */
/* ================================================================== */
export const contact = {
  phoneDisplay: "+852 2577 2202",
  phoneHref: "tel:+85225772202",
  whatsappHref: "https://wa.me/85225772202",
  email: "reservation@amigo.com.hk",
  emailHref: "mailto:reservation@amigo.com.hk",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Amigo+Restaurant+79A+Wong+Nai+Chung+Road+Happy+Valley",
  addressEn: "G/F, Amigo Mansion, 79A Wong Nai Chung Road, Happy Valley, Hong Kong",
};
