export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-[var(--color-card)] rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-40 bg-[var(--color-muted)]"></div>
      <div className="p-4">
        <div className="h-4 bg-[var(--color-muted)] rounded mb-2"></div>
        <div className="h-4 bg-[var(--color-muted)] rounded w-3/4 mb-3"></div>
        <div className="h-8 bg-[var(--color-muted)] rounded"></div>
      </div>
    </div>
  );
};

export const ProductGridSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};
