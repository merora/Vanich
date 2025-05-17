"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Job {
  id: number;
  shop_name: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  type: string;
}

export default function JobDetail() {
  const router = useRouter();
  const [job, setJob] = useState<Job | null>(null);
  
  const { id } = useParams();

  useEffect(() => {
    const fetchJob = async () => {
      const res = await fetch(`http://localhost:8000/api/jobs/${id}/`);
      if (!res.ok) {
        console.error("Failed to fetch jobs");
        return;
      }
      const data = await res.json();
      setJob(data);
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

  if (!job) {
    return <div className="text-center mt-20">กำลังโหลดข้อมูงาน...</div>;
  }


  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div key={job.id} className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Job Image */}
        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
          {/* <Image
            src={job.image_url}
            alt={job.name}
            fill
            className="object-cover"
          /> */}
        </div>

        {/* Right: Job Info */}
        <div>
          <h1 className="text-2xl font-extrabold text-black mb-2">
            {job.name}
          </h1>

          <p className="text-sm text-purple-700 font-medium mb-4">
            หมวดหมู่: {job.category}
          </p>

          {/* Seller Info */}
          <div
            className="flex items-center gap-3 mb-4 cursor-pointer hover:bg-gray-100 p-2 rounded"
            onClick={() => router.push("/shop")}
          >
            <div className="w-10 h-10 relative rounded-full overflow-hidden border">
              <Image src="/avatar.png" alt="Seller" fill className="object-cover" />
            </div>
            <div className="text-sm font-medium text-gray-800">{job.shop_name}</div>
          </div>

          <p className="text-gray-600 mb-6 max-w-xl">
            {job.description}
          </p>

          <div className="text-3xl font-semibold mb-6">ราคาเริ่มต้น {job.price} บาท</div>

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
