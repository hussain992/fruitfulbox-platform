// components/ui/ProductTag.tsx
interface ProductTagProps {
  label: string;
  color?: 'green' | 'blue' | 'red';
}

export const ProductTag = ({ label, color = 'green' }: ProductTagProps) => {
  const colorMap = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    red: 'bg-red-500',
  };

  return (
    <span
      className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-full ${colorMap[color]}`}
    >
      {label}
    </span>
  );
};
