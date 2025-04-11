import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <>
    
      <HeroSection />
      {/* Add more sections here */}
        {/* Add product cards or other content here */}
        <ProductSection title="Our Products 🍇"/>
        {/* <ProductSection title="Our Fruit Boxes 📦"/>    */}
    </>
  );
}