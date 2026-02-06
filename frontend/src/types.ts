export interface Product {
  category: string;
  slug: string;
  title: string;
  image: string;
  isAvailable?: boolean;
  price: {
    original: string;
    discounted?: string;
  };
  buttonText?: string;
}