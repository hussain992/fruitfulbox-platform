import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <>
    
      <HeroSection />
      {/* Add more sections here */}
        {/* Add product cards or other content here */}
        <ProductSection title="Our Fruit Boxes 📦"/>   
        <ProductSection title="Our Products 🍇"/>
    </>
  );
}