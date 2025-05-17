"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:8000/api/products/");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="flex px-0 mt-4">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 ml-4 max-w-7xl px-4 mx-auto">
          {/* Subnav */}
          <div className="bg-[#E6ECE8] px-4 py-2 rounded flex items-center justify-between text-sm font-medium mb-4">
            <div className="flex space-x-4">
              <div>เมนู</div>
              <div>โปรโมชั่น</div>
              <div>ร้านค้ายอดฮิต</div>
            </div>
            <div className="text-gray-600 cursor-pointer">ติดต่อ</div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product: any) => (
              <Link href={`/product/detail/${product.id}`} key={product.id}>
                <ProductCard
                  name={product.name}
                  price={`${product.price} บาท`}
                  // image={product.image_url}
                  vendor={product.shop_name || "ไม่ทราบผู้ขาย"}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
