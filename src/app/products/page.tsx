import ProductCard from "@/components/ProductCard";
import ServiceNotice from "@/components/ServiceNotice";
import {productData as products} from "@/lib/products"; // assuming you export your common product data here
// import useStore, { IsearchSlice } from "@/lib/store";

const ProductListPage = () => {
  // const {search} = useStore((state: IsearchSlice) => state);
  // console.log("Object.entries(products)", );
  const sortedProducts = Object.entries(products).sort((a, b) => a[1].isAvailable === b[1].isAvailable ? 0 : a[1].isAvailable ? -1 : 1)
  return (<>
    <ServiceNotice />
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Fruits</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map(([slug, product]) => (
          <ProductCard
            key={slug}
            slug={slug}
            title={product.title}
            image={product.image} 
            isAvailable={product.isAvailable}
            // price={product.price}
          />
        ))}
      </div>
    </main>
      </>
  );
};

export default ProductListPage;