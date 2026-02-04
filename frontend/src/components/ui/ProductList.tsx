import { Product } from '@/types';
import React, { useState } from 'react';

const ProductList = ({  products }: { products: Product[] }) => {
  const [filter, setFilter] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(filter.toLowerCase())
  );

//   const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFilter(event.target.value);
//   };

  return (
    <div>
      <div className="border border-gray-300 rounded-lg shadow-md relative h-40 overflow-y-auto p-4">
        <ul className="list-none p-0 m-0">
          {filteredProducts.map(product => (
            <li key={product.slug} className="flex items-center mb-2">
              <span className="text-gray-900 font-bold mr-2">{product.title}</span>
              {/* Add more product details as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;