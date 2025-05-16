"use client";

import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-12 gap-10 items-start">
        {/* Logo Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/vanich-logo-2.png"
            alt="Vanich Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Login Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-extrabold text-black mb-2">
            เข้าสู่ระบบ
          </h1>
          <p className="text-gray-600 mb-6">
            กรุณากรอกอีเมลและรหัสผ่านของคุณเพื่อเข้าสู่ระบบ
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                อีเมล
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                รหัสผ่าน
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50 text-black"
              />
            </div>

            <div className="pt-4">
              <button
                type="button" // ไม่ให้ form submit จริง
                className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900 w-full"
                onClick={() => router.push("/profile")}
              >
                เข้าสู่ระบบ
              </button>
            </div>

            <div className="text-sm text-center text-gray-600 pt-4">
              ยังไม่มีบัญชี?{" "}
              <a
                href="/register"
                className="text-green-800 font-semibold hover:underline"
              >
                สมัครสมาชิก
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
