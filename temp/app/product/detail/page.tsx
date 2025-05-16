"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductDetail() {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Product Image */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
          <Image
            src="/product3.jpg"
            alt="ชื่อสินค้า"
            fill
            className="object-cover"
          />
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-2xl font-extrabold text-black mb-2">
            ชากุหลาบ ชามะลิ ชาลาเวนเดอร์ ชาเกสรบัว
          </h1>

          <p className="text-sm text-green-700 font-medium mb-4">
            หมวดหมู่: ชาสมุนไพร
          </p>

          <p className="text-gray-600 mb-6 max-w-xl">
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum
            sit nunc in eros scelerisque sed. Commodo in viverra nunc,
            ullamcorper ut. Non, amet, aliquet scelerisque nullam sagittis,
            pulvinar.
          </p>

          <div className="text-3xl font-semibold mb-6">100.00 บาท</div>

          <div className="flex space-x-4">
          <button
              onClick={() => router.push("/checkout")}
  className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900"
>
  ซื้อ
</button>

<button
  onClick={() => router.push("/cart")}
  className="border border-green-800 text-green-800 px-6 py-2 rounded hover:bg-green-100"
>
  ลงจะกล้า
</button>

          </div>
        </div>
      </div>
    </div>
  );
}
