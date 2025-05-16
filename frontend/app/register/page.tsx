"use client";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function RegisterPage() {
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

        {/* Register Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-extrabold text-black mb-2">
            สมัครสมาชิก
          </h1>
          <p className="text-gray-600 mb-6">
            กรุณากรอกข้อมูลเพื่อสมัครสมาชิกในระบบของวานิช
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ชื่อ
                </label>
                <input
                  type="text"
                  placeholder="ชื่อ"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  นามสกุล
                </label>
                <input
                  type="text"
                  placeholder="นามสกุล"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                อีเมล
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                เบอร์โทรศัพท์
              </label>
              <input
                type="tel"
                placeholder="080-123-4567"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                รหัสผ่าน
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <label className="text-sm text-gray-600">
                ยอมรับเงื่อนไขการใช้งานและนโยบายความเป็นส่วนตัว
              </label>
            </div>

            <div className="pt-4">
            <button
      type="button"
      className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900"
      onClick={() => router.push("/login")}
    >
      สมัครสมาชิก
    </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
