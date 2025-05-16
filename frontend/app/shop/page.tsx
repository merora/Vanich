"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

const products = [
  { id: 1, name: "ไข่ไก่อารมณ์ดี", image: "/product1.jpg", price: "100 บาท" },
  { id: 2, name: "ไข่ไก่สดแพ็ค 30", image: "/product2.jpg", price: "250 บาท" },
];

const jobs = [
  { id: 1, name: "จัดทริปเยี่ยมฟาร์ม", image: "/job1.jpg" },
  { id: 2, name: "เปิดคาเฟ่วันหยุด", image: "/job2.jpg" },
];

export default function ShopPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex mt-4">
        <Sidebar />

        <div className="flex-1 px-4">
          {/* Cover */}
          <div className="relative w-full h-64 md:h-80 bg-gray-200">
            <Image src="/shop-cover.jpg" alt="Shop Cover" fill className="object-cover" />
            <div className="absolute bottom-4 left-4 flex items-center gap-4">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white relative">
                <Image src="/avatar.png" alt="Profile" fill className="object-cover" />
              </div>
              <div className="text-white">
                <h2 className="text-xl font-bold">น้องมดฟาร์มไข่ไก่อารมณ์ดี</h2>
                <p className="text-sm">เจ้าของฟาร์มและคาเฟ่</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-5xl mx-auto py-6">
            <p className="text-gray-800 text-md">
              ยินดีต้อนรับสู่ <strong>น้องมดฟาร์มไข่ไก่อารมณ์ดี</strong> เราเลี้ยงไก่แบบปล่อยอิสระด้วยธรรมชาติ 100%
              พร้อมทั้งมีคาเฟ่ให้คุณและครอบครัวแวะเที่ยว พักผ่อน และเรียนรู้เรื่องฟาร์มไข่ไก่ได้ที่นี่ ต.สุขใจ อ.เมือง จ.สุขสันต์
            </p>
          </div>

          {/* Products */}
          <div className="max-w-5xl mx-auto py-6">
            <h3 className="text-lg font-semibold text-black mb-4">สินค้า</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((item) => (
                <Link key={item.id} href={`/product/detail?id=${item.id}`}>
                  <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
                    <div className="relative w-full h-40">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-black">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Jobs */}
          <div className="max-w-5xl mx-auto py-6">
            <h3 className="text-lg font-semibold text-black mb-4">งาน / คอมมิชชัน</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {jobs.map((item) => (
                <Link key={item.id} href={`/job/detail?id=${item.id}`}>
                  <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
                    <div className="relative w-full h-40">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium text-black">{item.name}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
