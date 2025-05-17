"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category_id: number;
  image_url: string;
  type: string;
}

export default function ProductDetail() {
  const router = useRouter();
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:8000/api/products/${id}/`);
      if (!res.ok) {
        console.error("Failed to fetch product");
        return;
      }
      const data = await res.json();
      setProduct(data);
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (!product) {
    return <div className="text-center mt-20">กำลังโหลดข้อมูลสินค้า...</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
{/*           <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-cover"
          /> */}
        </div>
        <div>
          <h1 className="text-2xl font-extrabold text-black mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-6 max-w-xl">{product.description}</p>
          <div className="text-3xl font-semibold mb-6">
            {product.price} บาท
          </div>
          <div className="flex space-x-4">
            <button onClick={() => router.push("/checkout")}
                className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900">
                ซื้อ
            </button>

            <button
              onClick={() => router.push("/cart")}
              className="border border-green-800 text-green-800 px-6 py-2 rounded hover:bg-green-100"
            >
              ลงจะกล้า
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}