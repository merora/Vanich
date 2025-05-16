"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function JobDetail() {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Job Image */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/job-flower.jpg"
            alt="ทำดอกไม้ลวดกำมะหยี่"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Job Info */}
        <div>
          <h1 className="text-2xl font-extrabold text-black mb-2">
            รับทำดอกไม้ลวดกำมะหยี่ตามสั่ง
          </h1>

          <p className="text-sm text-purple-700 font-medium mb-4">
            หมวดหมู่: งานฝีมือ / งานประดิษฐ์
          </p>

          {/* Seller Info */}
          <div
            className="flex items-center gap-3 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => router.push("/shop")}
          >
            <div className="w-10 h-10 relative rounded-full overflow-hidden border">
              <Image src="/avatar.png" alt="Seller" fill className="object-cover" />
            </div>
            <div className="text-sm font-medium text-gray-800">น้องมดฟาร์มไข่ไก่อารมณ์ดี</div>
          </div>

          <p className="text-gray-600 mb-6 max-w-xl">
            งานฝีมือดอกไม้ลวดกำมะหยี่เหมาะสำหรับของขวัญ ของตกแต่งบ้าน หรืองานพิธีต่าง ๆ
            รับทำตามแบบที่ลูกค้าส่งมา หรือเลือกแบบจากแคตตาล็อกของเราได้
          </p>

          <div className="text-3xl font-semibold mb-6">ราคาเริ่มต้น 150.00 บาท</div>

          <div className="flex space-x-4">
            <button
              onClick={() => router.push("/chat?seller=modfarm")}
              className="bg-pink-700 text-white px-6 py-2 rounded hover:bg-pink-800"
            >
              💬 แชตกับผู้ขาย
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
