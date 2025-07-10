
import ProductCard from "@/components/ProductCard";
import {productData as products} from "@/lib/products"; // adjust path
const CutFruitsPage = () => {
  const cutFruits = Object.values(products).filter((fruit) => fruit.tags.includes('cut-fruit'));

  return (
    <main className="max-w-5xl mx-auto p-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Cut Fruit Boxes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cutFruits.map((product) => (
          <ProductCard key={product.id}
            slug={product.id}
            title={product.title}
            image={product.image} 
            isAvailable={product.isAvailable} />
        ))}
      </div>
    </main>
  );
};
export default CutFruitsPage;
