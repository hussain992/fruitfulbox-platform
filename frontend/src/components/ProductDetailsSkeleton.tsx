
export const ProductDetailsSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-80">
      <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
        <div className="w-full h-full bg-gray-300"></div>
        {/* <div className="p-4">
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
          <div className="h-8 bg-gray-300 rounded"></div>
        </div> */}
      </div>
      {/* <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"> */}
        {/* <div className="w-full h-40 bg-gray-300"></div> */}
        <div className="p-4 pt-0">
          <div className="h-8 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-5"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-5"></div>
        </div>
      {/* </div> */}
    </div>
  );
};
