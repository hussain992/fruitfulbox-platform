import { notFound } from "next/navigation";
import ProductDetailsView from "@/components/ProductDetailsView";

const ProductDetails = async ({ slug }: { slug: string }) => {
  let product = null;

  try {
    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";
    const res = await fetch(`${apiBaseUrl}/products/${slug}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      notFound();
    }

    const data = await res.json();
    product = Array.isArray(data) ? data[0] : data;

    if (!product) {
      notFound();
    }
  } catch (err) {
    console.error("Error fetching product details:", err);
    notFound();
  }

  if (!product) {
    notFound();
  }

  return <ProductDetailsView product={product} />;
};

export default ProductDetails;
