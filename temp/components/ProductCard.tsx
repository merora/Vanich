import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  vendor: string;
}

export default function ProductCard({
  name,
  price,
  image,
  vendor,
}: ProductCardProps) {
  return (
    <div className="border rounded shadow hover:shadow-lg transition overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <div className="font-bold text-lg">{name}</div>
        <div className="text-sm text-gray-700">{price}</div>
        <div className="text-xs text-gray-500 mt-1">{vendor}</div>
      </div>
    </div>
  );
}
