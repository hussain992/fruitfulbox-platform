import CategoriesSection from "@/components/CategoriesSection";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import ServiceNotice from "@/components/ServiceNotice";

export default function Home() {
  return (
    <>
      <ServiceNotice />
      <HeroSection />
      <CategoriesSection />
      <ProductSection title="Trending Fruits 🍇" />
      <ProductSection title="Fresh Cut Fruits 🥭" />
      <ProductSection title="Our Fruit Boxes 📦" />
    </>
  );
}
