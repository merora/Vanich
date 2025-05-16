"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const myShops = [
  {
    name: "ร้านผักสดบ้านไร่",
    cover: "/shop-cover-1.jpg",
    path: "/shop/settings"
  },
  {
    name: "แฮนด์เมดสุขใจ",
    cover: "/shop-cover-2.jpg",
    path: "/shop/settings"
  }
];

export default function ShopOverviewPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-black mb-6">ร้านค้าของฉัน</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {myShops.map((shop, i) => (
            <Link href={shop.path} key={i} className="block bg-white rounded shadow overflow-hidden hover:shadow-md transition">
              <div className="relative w-full h-40">
                <Image src={shop.cover} alt={shop.name} fill className="object-cover" />
              </div>
              <div className="p-4 text-center font-semibold text-gray-800">{shop.name}</div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/shop/create"
            className="inline-block bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900"
          >
            ➕ เพิ่มร้านค้าใหม่
          </Link>
        </div>
      </div>
    </div>
  );
}