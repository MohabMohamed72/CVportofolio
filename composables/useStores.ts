export interface PortfolioStore {
  name: string;
  url: string;
  category: string;
  description?: string;
  image?: string;
  featured?: boolean;
}

// Owner-supplied destinations. Featured order is intentional.
export function useStores(): PortfolioStore[] {
  return [
    {
      name: "Prime Story",
      featured: true,
      url: "https://primestoryai.com/ar",
      category: "Personalized stories",
      description:
        "Children become the heroes of stories personalized with their name and photo.",
      image: "/images/stores/prime-story.jpg",
    },
    {
      name: "Bellora",
      featured: true,
      url: "https://thebellora.shop/",
      category: "Beauty & skincare",
      description:
        "A beauty storefront bringing skincare, makeup, fragrances, and beauty accessories together.",
      image: "/images/stores/bellora.jpg",
    },
    {
      name: "BKRJ",
      featured: true,
      url: "https://bkrjsa.com/",
      category: "Coffee",
      description:
        "A coffee storefront with classic crops, infusion collections, and curated boxes.",
      image: "/images/stores/bkrj.jpg",
    },
    {
      name: "Augoo Coffee",
      featured: true,
      url: "https://augoo.coffee/",
      category: "Coffee",
      image: "/images/stores/augoo.jpg",
    },
    {
      name: "Snacko",
      featured: true,
      url: "https://snacko.sa/ar",
      category: "Food",
      description:
        "A storefront for frozen food, from everyday staples to ready-to-prepare favorites.",
      image: "/images/stores/snacko.jpg",
    },
    {
      name: "Tuhfa Fn",
      featured: true,
      url: "https://tuhfafn.com/",
      category: "Wall art",
      description:
        "A wall-art collection spanning abstract, Islamic, and Saudi landmark designs.",
      image: "/images/stores/tuhfa-fn.jpg",
    },
    // {
    //   name: "Family Care UAE",
    //   featured: true,
    //   url: "https://familycare-uae.com/",
    //   category: "Brand website",
    // },
    {
      name: "Striker",
      featured: true,
      url: "https://striker.sa/",
      category: "Cleaning & pest control",
      description:
        "A service website presenting cleaning and pest-control services with a direct contact journey.",
      image: "/images/stores/striker.jpg",
    },
    {
      name: "Ferza",
      featured: true,
      url: "https://ferza.sa/",
      category: "Home & bath",
      description:
        "A towel storefront featuring individual towels and coordinated two- and three-piece sets.",
      image: "/images/stores/ferza.jpg",
    },
    {
      name: "Glam Solutions",
      url: "https://glam-solutions.com/",
      category: "Storefront",
    },
    {
      name: "First Step",
      url: "https://first-step-1.com/",
      category: "Storefront",
    },
    {
      name: "Beauty Noura",
      url: "https://beauty-noura.com/",
      category: "Storefront",
    },
    {
      name: "The Elegant Ring",
      url: "https://the-elegantring.com/",
      category: "Storefront",
    },
    { name: "Rshrsh", url: "https://rshrsh.sa/ar", category: "Storefront" },
    {
      name: "Khashab Alud",
      url: "https://khashabalud.com/ar",
      category: "Storefront",
    },
    {
      name: "Azal Perfumes",
      url: "https://azal-perfumes.com/ar",
      category: "Storefront",
    },
    {
      name: "Coach Maha",
      url: "https://coachmaha1.com/",
      category: "Storefront",
    },
    {
      name: "Bharat Mtyab",
      url: "https://bharatmtyab.com/ar",
      category: "Storefront",
    },
    {
      name: "Symetric",
      url: "https://salla.sa/symetric",
      category: "Storefront",
    },
    {
      name: "Designer Academy",
      url: "https://designeracad.com/",
      category: "Storefront",
    },
    {
      name: "Snafya Store",
      url: "https://snafya-store.com/ar",
      category: "Storefront",
    },
    {
      name: "Bunyan Box",
      url: "https://bunyanbox.com/",
      category: "Storefront",
    },
    {
      name: "Honey Cottage",
      url: "https://honey-cottage.com/ar",
      category: "Storefront",
    },
    { name: "Space TRR", url: "https://spacetrr.com/", category: "Storefront" },
    {
      name: "Golden Era Network",
      url: "https://goldenera-network.com/",
      category: "Storefront",
    },
    {
      name: "Shykha Laslyyen",
      url: "https://shykha-laslyyen.com/",
      category: "Storefront",
    },
    {
      name: "Glasses Mode",
      url: "https://glassesmode.com/ar",
      category: "Storefront",
    },
    { name: "Bannjah", url: "https://bannjah.com/", category: "Storefront" },
    {
      name: "Ahjar Al Tabiea",
      url: "https://ahjaraltabiea.com/",
      category: "Storefront",
    },
    { name: "Dum", url: "https://dum.sa/ar", category: "Storefront" },
    { name: "Swipe", url: "https://swipe-sa.com/", category: "Storefront" },
    { name: "Driblo", url: "https://driblo.sa/#home", category: "Storefront" },
    {
      name: "Ladys Kswa",
      url: "https://ladyskswa.com/",
      category: "Storefront",
    },
    {
      name: "Naf7at Teeb",
      url: "https://naf7atteeb.com/",
      category: "Storefront",
    },
    {
      name: "Elegent Homes",
      url: "https://elegenthomes.com/",
      category: "Storefront",
    },
    {
      name: "Nwadr Mqtnyati",
      url: "https://nwadrmqtnyati.com/",
      category: "Storefront",
    },
    {
      name: "Health Heroes",
      url: "https://healthheroes-ksa.com/ar",
      category: "Storefront",
    },
    {
      name: "Thai Face",
      url: "https://thai-facee.com/",
      category: "Storefront",
    },
  ];
}
