import { Product } from "@/types";
import Link from "next/dist/client/link";
import Image from "next/image";
// import React, { useState } from 'react';

const ProductList = ({ products }: { products: Product[] }) => {
  //   const [filter] = useState('');

  //   const filteredProducts = products.filter(product =>
  //     product.title.toLowerCase().includes(filter.toLowerCase())
  //   );

  //   const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setFilter(event.target.value);
  //   };

  return (
    <div className="border border-gray-300 rounded-lg shadow-md relative min-h-30 max-h-50 overflow-y-auto p-2">
      <ul className="list-none p-0 m-0">
        {products.map((product) => (
          <li key={product.slug}>
            <Link
              className="flex items-center mb-2 hover:bg-gray-100 rounded transition-colors"
              href={`/${product.category}/${product.slug}`}
            >
              <span className="text-gray-500 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={24}
                  height={24}
                  className="w-12 h-12 object-cover rounded mr-2 border border-gray-300 p-1"
                />
              </span>
              <div>
                <div className="text-gray-900 font-bold mr-2">
                  {product.title}
                </div>
                {/* // add category */}
                <div className="text-green-900 text-xs">in {product.category}
                {product.isAvailable === false && (
                  <span className="text-red-500 text-xs ml-2"> out of stock</span>
                )}
                </div>
              </div>
              {/* // add availability status if needed */}
            </Link>
            {/* Add more product details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
