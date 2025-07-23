import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import ServiceNotice from "@/components/ServiceNotice";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ServiceNotice />
      <HeroSection />
      {/* Add more sections here */}
        {/* Add product cards or other content here */}
        <ProductSection title="Seasonal Fruits 🍇"/>
        <ProductSection title="Fresh Cut Fruits 🥭"/> 
        <ProductSection title="Our Fruit Boxes 📦"/>  
        <div className="mt-12 text-center">
          <Link href="/products" className="text-blue-600 hover:underline">
            More Fruits
          </Link>
        </div>
    </>
  );
}