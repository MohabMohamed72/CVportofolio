export interface PortfolioStore {
  name: string;
  url: string;
  category: string;
  description?: string;
  image?: string;
}

// Owner-supplied destinations. Featured order is intentional.
export function useStores(): PortfolioStore[] {
  return [
    {
      name: "Prime Story",
      url: "https://primestoryai.com/ar",
      category: "Personalized stories",
      description:
        "Children become the heroes of stories personalized with their name and photo.",
      image: "/images/stores/prime-story.jpg",
    },
    {
      name: "BKRJ",
      url: "https://bkrjsa.com/",
      category: "Coffee",
      description:
        "A coffee storefront with classic crops, infusion collections, and curated boxes.",
      image: "/images/stores/bkrj.jpg",
    },
    {
      name: "Augoo Coffee",
      url: "https://augoo.coffee/",
      category: "Coffee",
      image: "/images/stores/augoo.jpg",
    },
    {
      name: "Snacko",
      url: "https://snacko.sa/ar",
      category: "Food",
      description:
        "A storefront for frozen food, from everyday staples to ready-to-prepare favorites.",
      image: "/images/stores/snacko.jpg",
    },
    {
      name: "Tuhfa Fn",
      url: "https://tuhfafn.com/",
      category: "Wall art",
      description:
        "A wall-art collection spanning abstract, Islamic, and Saudi landmark designs.",
      image: "/images/stores/tuhfa-fn.jpg",
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
  ];
}
