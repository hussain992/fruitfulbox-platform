export interface Product {
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