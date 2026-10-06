export type CvVariant = "frontend" | "stores" | "full";

const cvDocuments = {
  frontend: {
    path: "/documents/mohab-mohamed-frontend-cv.pdf",
    label: "Download Frontend CV",
  },
  stores: {
    path: "/documents/mohab-mohamed-ecommerce-cv.pdf",
    label: "Download E-commerce CV",
  },
  full: {
    path: "/documents/mohab-mohamed-full-cv.pdf",
    label: "Download Full CV",
  },
} as const;

export function useCvDocument(variant: CvVariant = "full") {
  return cvDocuments[variant];
}
