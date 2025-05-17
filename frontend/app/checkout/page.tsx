"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("โอนผ่านธนาคาร");

  const items = [
    {
      id: 1,
      name: "ไข่ไก่สด",
      price: 100,
      image: "/product1.jpg",
    },
    {
      id: 2,
      name: "ชาดอกไม้รวม",
      price: 120,
      image: "/product2.jpg",
    },
  ];

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-black mb-6">ยืนยันคำสั่งซื้อ</h1>

        {/* Address */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-black mb-2">
            ที่อยู่จัดส่ง
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="ชื่อ - นามสกุล"
              className="border px-3 py-2 rounded bg-gray-50 text-black"
            />
            <input
              type="text"
              placeholder="เบอร์โทรศัพท์"
              className="border px-3 py-2 rounded bg-gray-50 text-black"
            />
            <input
              type="text"
              placeholder="ที่อยู่ บ้านเลขที่ หมู่ ถนน"
              className="border px-3 py-2 rounded bg-gray-50 text-black md:col-span-2"
            />
            <input
              type="text"
              placeholder="ตำบล/แขวง"
              className="border px-3 py-2 rounded bg-gray-50 text-black"
            />
            <input
              type="text"
              placeholder="อำเภอ/เขต"
              className="border px-3 py-2 rounded bg-gray-50 text-black"
            />
            <input
              type="text"
              placeholder="จังหวัด"
              className="border px-3 py-2 rounded bg-gray-50 text-black"
            />
            <input
              type="text"
              placeholder="รหัสไปรษณีย์"
              className="border px-3 py-2 rounded bg-gray-50 text-black"
            />
          </form>
        </div>

        {/* Items */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-black mb-2">
            รายการที่สั่งซื้อ
          </h2>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border p-4 rounded"
              >
                <div className="w-20 h-20 relative rounded overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-black">{item.name}</div>
                  <div className="text-sm text-gray-600">
                    {item.price.toFixed(2)} บาท
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-black mb-2">
            ช่องทางชำระเงิน
          </h2>
          <select
            className="w-full border px-3 py-2 rounded bg-gray-50 text-black"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>โอนผ่านธนาคาร</option>
            <option>พร้อมเพย์</option>
            <option>เก็บเงินปลายทาง</option>
          </select>
        </div>

        {/* Total & Confirm */}
        <div className="border-t pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-lg font-semibold text-black">
            ราคารวมทั้งหมด: {total.toFixed(2)} บาท
          </div>
          <button className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900">
            ยืนยันชำระเงิน
          </button>
        </div>
      </div>
    </div>
  );
}
