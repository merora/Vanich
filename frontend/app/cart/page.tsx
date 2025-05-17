"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";


// Type for cart item
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  checked: boolean;
}

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "ไข่ไก่สด",
      price: 100,
      image: "/product1.jpg",
      checked: true,
    },
    {
      id: 2,
      name: "ชาดอกไม้รวม",
      price: 120,
      image: "/product2.jpg",
      checked: true,
    },
  ]);

  const toggleItem = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const total = cartItems
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-black mb-6">ตะกร้าสินค้า</h1>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border p-4 rounded shadow-sm"
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => toggleItem(item.id)}
                className="w-5 h-5"
              />
              <div className="w-24 h-24 relative rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-black">{item.name}</div>
                <div className="text-sm text-gray-500">
                  {item.price.toFixed(2)} บาท
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-8 border-t pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-lg font-semibold text-black">
            ราคารวม: {total.toFixed(2)} บาท
          </div>
          <button
            className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900"
            onClick={() => router.push("/checkout")}
          >
            ยืนยันคำสั่งซื้อ
          </button>
        </div>
      </div>
    </div>
  );
}
