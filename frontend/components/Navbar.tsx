"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("ทั้งหมด");
  const router = useRouter();

  const handleSearch = () => {
    console.log(`Searching for: ${search} in ${category}`);
    // ในอนาคตอาจใช้ router.push(`/search?query=${search}&category=${category}`);
  };

  return (
    <nav className="bg-white shadow-sm">
      {/* ชั้นบน: Account + ตะกร้า */}
      <div className="flex justify-end px-4 py-1 text-sm text-gray-600 space-x-6 border-b border-gray-200">
      <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <span>หน้าหลัก</span>
        </div>
      <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => router.push("/job")}
        >
          <span>การจ้างงาน</span>
        </div>
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => router.push("/profile")}
        >
          <span>บัญชีของฉัน</span>
        </div>
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => router.push("/cart")}
        >
          <span>ตะกร้า</span>
        </div>
      </div>

      {/* ชั้นล่าง: Logo + ช่องค้นหา */}
      <div className="flex items-center px-4 py-0 border-b border-gray-200 gap-4">
        {/* Logo */}
        <div className="shrink-0">
          <Image
            src="/vanich-logo.png"
            alt="Vanich Logo"
            width={100}
            height={10}
          />
        </div>

        {/* Search Bar */}
        <div className="flex flex-grow max-w-full">
          <input
            type="text"
            placeholder="Search for..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow px-4 py-2 rounded-l-md border border-gray-300 bg-gray-100 focus:outline-none"
          />
          <select
            className="px-3 py-2 border-t border-b border-gray-300 bg-white text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>ทั้งหมด</option>
            <option>ผัก</option>
            <option>ผลไม้</option>
            <option>ผลิตภัณฑ์แปรรูป</option>
            <option>แฮนด์เมด</option>
            <option>เครื่องแต่งกาย</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-green-800 text-white px-4 py-2 rounded-r-md hover:bg-green-900 focus:outline focus:ring-2 focus:ring-blue-500"
          >
            ค้นหา
          </button>
        </div>
      </div>
    </nav>
  );
}
