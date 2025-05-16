import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

export default function Home() {
  const categories = [
    { name: "ผัก", image: "/veg.jpg" },
    { name: "ผลไม้", image: "/fruit.jpg" },
    { name: "ผลิตภัณฑ์แปรรูป", image: "/processed.jpeg" },
    { name: "แฮนด์เมด", image: "/handmade.jpg" },
    { name: "เครื่องแต่งกาย", image: "/clothing.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Banner */}
      <div className="w-full h-64 relative">
        <Image src="/banner.png" alt="banner" layout="fill" objectFit="cover" />
      </div>
      {/* Menu */}
      <nav className="bg-[#1A5139] py-2 px-4 text-sm text-white">
        <div className="max-w-7xl mx-auto flex space-x-4">
          <div>เมนู</div>
          <div>โปรโมชั่น</div>
          <div>ร้านค้ายอดฮิต</div>
        </div>
      </nav>
      {/* Category Main Section */}
      <section className="py-2 max-w-7xl mx-auto px-1 md:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* รูปที่ 1: สินค้า */}
          <Link href="/product" className="block">
            <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/basket.png"
                alt="สินค้า"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-center text-3xl font-medium text-gray-700">สินค้า</div>
          </Link>

          {/* รูปที่ 2: งานและคอมมิชชัน */}
          <Link href="/job" className="block">
            <div className="relative h-48 md:h-64 w-full overflow-hidden rounded-lg">
              <Image
                src="/craft.png"
                alt="งานและคอมมิชชัน"
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-center text-3xl font-medium text-gray-700">งานและคอมมิชชัน</div>
          </Link>
        </div>

        <section className="py-10">
          <h2 className="text-xl font-bold mb-4 px-4">หมวดหมู่สินค้า</h2>

          {/* Full-width grid section */}
          <div className="w-full px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {categories.map((category, i) => (
                <CategoryCard
                  key={i}
                  name={category.name}
                  image={category.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* สินค้าแบบ dynamic เตรียมข้อมูลในอนาคต */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Link href="/product/detail" key={i}>
              <ProductCard
                name={`ชื่อสินค้า ${i + 1}`}
                price="100.00 บาท"
                image={`/product${(i % 4) + 1}.jpg`}
                vendor="ชื่อร้าน / กลุ่มเกษตรกร"
              />
            </Link>
          ))}
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-green-900 text-white text-center py-4 mt-10">
        วานิช © 2025. All rights reserved.
      </footer>
    </div>
  );
}
