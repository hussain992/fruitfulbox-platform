import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
    
      <HeroSection />
      {/* Add more sections here */}
        {/* Add product cards or other content here */}
        <ProductSection title="Seasonal Fruits 🍇"/>
        <ProductSection title="Our Fruit Boxes 📦"/>   
        <div className="mt-12 text-center">
          <Link href="/products" className="text-blue-600 hover:underline">
            More Fruits
          </Link>
        </div>
    </>
  );
}