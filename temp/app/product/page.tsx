"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

export default function ProductPage() {
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
            {Array.from({ length: 12 }).map((_, i) => (
              <Link href="/product/detail" key={i}>
                <ProductCard
                  name={`ชื่อสินค้า ${i + 1}`}
                  price={`100.00 บาท`}
                  image={`/product${i + 1}.jpg`}
                  vendor="ชื่อร้าน / กลุ่มเกษตรกร"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
