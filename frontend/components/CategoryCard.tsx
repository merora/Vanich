import Image from "next/image";

interface CategoryCardProps {
  name: string;
  image: string;
}

export default function CategoryCard({ name, image }: CategoryCardProps) {
  return (
    <div className="relative rounded overflow-hidden shadow hover:shadow-lg transition h-36 w-full">
      <Image src={image} alt={name} fill className="object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <span className="text-white text-lg font-semibold">{name}</span>
      </div>
    </div>
  );
}
