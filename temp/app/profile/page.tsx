"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";

export default function UserProfilePage() {
  const [name, setName] = useState("อาปอย");
  const [email, setEmail] = useState("apoy@example.com");
  const [address, setAddress] = useState(
    "123 หมู่ 5 ต.สุขใจ อ.เมือง จ.สุขสันต์ 12000"
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex mt-4">
        <Sidebar />

        <div className="flex-1 ml-4 max-w-5xl px-4">
          <h1 className="text-2xl font-bold text-black mb-6">ข้อมูลผู้ใช้</h1>

          {/* Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex items-center gap-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border">
                <Image
                  src="/avatar.png"
                  alt="User Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm text-gray-700 mb-1">
                  ชื่อผู้ใช้งาน
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-50 text-black"
                />
              </div>
            </div>
          </div>

          {/* Order & Cart Status */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold text-black mb-4">
              สถานะคำสั่งซื้อและตะกร้าสินค้า
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-green-100 rounded p-4 text-center">
                <div className="text-xl font-bold text-green-800">3</div>
                <div className="text-sm text-gray-700">ในตะกร้า</div>
              </div>
              <div className="bg-yellow-100 rounded p-4 text-center">
                <div className="text-xl font-bold text-yellow-700">2</div>
                <div className="text-sm text-gray-700">รอดำเนินการ</div>
              </div>
              <div className="bg-blue-100 rounded p-4 text-center">
                <div className="text-xl font-bold text-blue-800">5</div>
                <div className="text-sm text-gray-700">จัดส่งแล้ว</div>
              </div>
              <div className="bg-gray-100 rounded p-4 text-center">
                <div className="text-xl font-bold text-gray-700">12</div>
                <div className="text-sm text-gray-700">รวมทั้งหมด</div>
              </div>
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-black mb-4">
              ข้อมูลส่วนตัว
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  อีเมล
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-50 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ที่อยู่
                </label>
                <textarea
                  rows={3}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded bg-gray-50 text-black"
                ></textarea>
              </div>
              <div className="pt-2">
                <button className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900">
                  บันทึกการเปลี่ยนแปลง
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
