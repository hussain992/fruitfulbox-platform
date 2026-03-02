export interface Product {
  category: string;
  slug?: string;
  title: string;
  image: string;
  isAvailable?: boolean;
  price: {
    original: string;
    discounted: string;
  };
  buttonText?: string;
  description?: string;
  seo?: {
    description: string;
  }; 
  stock?: number;
  benefits?: string[];
  reviews?: { user: string; comment: string }[];
  categorySlug?: string;
}