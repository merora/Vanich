"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ShopSettingsPage() {
  const [admins, setAdmins] = useState<string[]>(["คุณสมชาย สมหวัง"]);
  const [newAdmin, setNewAdmin] = useState("");
  const router = useRouter();

  const handleAddAdmin = () => {
    if (newAdmin.trim()) {
      setAdmins([...admins, newAdmin.trim()]);
      setNewAdmin("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/shop");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="flex px-0 mt-4">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 ml-4 max-w-7xl px-4">
          {/* Cover image */}
          <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-6">
            <Image
              src="/shop-cover.jpg"
              alt="Shop Cover"
              fill
              className="object-cover"
            />
            <div className="absolute top-2 right-2 z-10">
              <button className="bg-white px-4 py-1 rounded shadow text-sm font-medium">
                เปลี่ยนรูปหน้าร้าน
              </button>
            </div>
          </div>

          {/* Shop Profile Section */}
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <div className="flex items-center gap-6">
              <div className="relative w-28 h-28 rounded-full overflow-hidden border">
                <Image
                  src="/avatar.png"
                  alt="Shop Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-black">
                  ชื่อร้าน: วานิชฟาร์มสุขใจ
                </h2>
                <p className="text-gray-700 text-sm">
                  ที่อยู่: 123 หมู่ 5 ต.บ้านสุข อ.เมือง จ.สุขสันต์ 12000
                </p>
                <p className="text-gray-700 text-sm">เจ้าของร้าน / แอดมิน:</p>
                <ul className="list-disc pl-5 text-sm text-gray-800">
                  {admins.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Form to edit */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-black mb-4">
              แก้ไขข้อมูลร้าน
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ชื่อร้าน
                </label>
                <input
                  type="text"
                  placeholder="ชื่อร้าน"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ที่อยู่ร้าน
                </label>
                <textarea
                  rows={3}
                  placeholder="ที่อยู่ร้าน"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 text-black"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  เพิ่มผู้ดูแลร้าน
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newAdmin}
                    onChange={(e) => setNewAdmin(e.target.value)}
                    placeholder="ชื่อผู้ดูแลใหม่"
                    className="flex-1 border border-gray-300 rounded px-3 py-2 bg-gray-50 text-black"
                  />
                  <button
                    type="button"
                    onClick={handleAddAdmin}
                    className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-900"
                  >
                    เพิ่ม
                  </button>
                </div>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900"
                >
                  บันทึกการเปลี่ยนแปลง
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}