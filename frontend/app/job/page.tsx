"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Job {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  type: string;
}


export default function JobPage() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await fetch("http://localhost:8000/api/jobs/");
      const data = await res.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const categories = [
    { name: "รับตัดต้นไม้", image: "/job-cat-1.jpg" },
    { name: "ผู้เชี่ยวชาญที่ให้ความรู้เฉพาะด้าน", image: "/job-cat-2.jpg" },
    { name: "รับจ้างทำความสะอาด", image: "/job-cat-3.jpg" },
    { name: "ดูดวง", image: "/job-cat-4.jpg" },
    { name: "รับจ้างทำบุญ", image: "/job-cat-5.jpeg" },
    { name: "รับจัดงานเลี้ยง", image: "/job-cat-6.jpg" },
    { name: "ร้านแฮนด์เมด", image: "/job-cat-7.jpg" },
    { name: "รับปลูกต้นไม้", image: "/job-cat-8.jpg" },
    { name: "เช่าเครื่องดนตรี", image: "/job-cat-9.jpg" },
    { name: "รับจัดงานบุญ", image: "/job-cat-10.webp" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Banner */}
      <div className="w-full h-80 relative">
        <Image
          src="/job-banner.png"
          alt="งานและคอมมิชชัน"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-4">
          <div className="bg-white rounded-lg shadow flex overflow-hidden">
            <input
              type="text"
              placeholder="หางานที่ต้องการ..."
              className="flex-grow px-4 py-2 rounded-l-lg outline-none"
            />
            <button className="bg-green-800 text-white px-6 py-2 rounded-r-lg hover:bg-green-900">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-[#1A5139] py-2 px-4 text-sm text-white">
        <div className="max-w-7xl mx-auto flex space-x-2">
          <div>เมนู</div>
          <div>โปรโมชั่น</div>
          <div>ร้านค้ายอดฮิต</div>
        </div>
      </div>

      {/* หมวดหมู่ที่น่าสนใจ */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-lg font-bold mb-4">หมวดหมู่งานที่น่าสนใจ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative h-24 rounded overflow-hidden shadow"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-semibold text-sm text-center px-2">
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </section>

{/* งานล่าสุด */}
<section className="bg-gray-50 py-8 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-lg font-bold mb-4">งานล่าสุด</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {jobs.slice(0, 4).map((job) => (
        <Link href={`/job/detail/${job.id}`} key={job.id}>
          <div className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-md transition">
            {/* <Image
              src={job.image_url}
              alt={job.name}
              width={400}
              height={200}
              className="w-full h-40 object-cover"
            /> */}
            <div className="p-4">
              <h3 className="font-semibold">{job.name}</h3>
              <p className="text-sm text-gray-500">
                {job.description.slice(0, 40)}...
              </p>
              <p className="text-sm text-gray-600 mt-2">
                กลุ่ม: {job.category || "ไม่ทราบ"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>

{/* งานแนะนำจากหมวดหมู่ */}
<section className="py-8 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-lg font-bold mb-4">งานจากหมวดหมู่ งานแฮนด์เมด</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {jobs
        .filter((job) => job.category === "งานแฮนด์เมด")
        .slice(0, 4)
        .map((job) => (
          <Link href={`/job/detail/${job.id}`} key={job.id}>
            <div className="bg-white rounded-lg shadow overflow-hidden cursor-pointer hover:shadow-md transition">
              {/* <Image
                src={job.image_url}
                alt={job.name}
                width={400}
                height={200}
                className="w-full h-40 object-cover"
              /> */}
              <div className="p-4">
                <h3 className="font-semibold">{job.name}</h3>
                <p className="text-sm text-gray-500">{job.category}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-green-900 text-white text-center py-4 mt-10">
        วานิช © 2025. All rights reserved.
      </footer>
    </div>
  );
}
