"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ShopCreatePage() {
  const [admins, setAdmins] = useState<string[]>([]);
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
    // ทำการ submit จริงในอนาคต เช่น POST ไปยัง backend
    router.push("/shop");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="flex px-0 mt-4">
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 ml-4 max-w-7xl px-4">
          {/* Create Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-black">สร้างร้านค้าใหม่</h1>
            <p className="text-gray-600 mt-1">กรอกข้อมูลร้านใหม่ของคุณเพื่อเริ่มต้นธุรกิจ</p>
          </div>

          {/* Form to create */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-black mb-4">ข้อมูลร้านค้า</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อร้าน</label>
                <input
                  type="text"
                  placeholder="ชื่อร้าน"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 text-black"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ที่อยู่ร้าน</label>
                <textarea
                  rows={3}
                  placeholder="ที่อยู่ร้าน"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 text-black"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">เพิ่มผู้ดูแลร้าน</label>
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
                <ul className="list-disc pl-5 pt-2 text-sm text-gray-800">
                  {admins.map((name, index) => (
                    <li key={index}>{name}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900"
                >
                  สร้างร้านค้า
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
