"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function RegisterPage() {
  const router = useRouter();

  // เก็บค่าฟอร์ม
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    agree: false,
  });

  // ฟังก์ชันส่งข้อมูล
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("กรุณายอมรับเงื่อนไขการใช้งานก่อน");
      return;
    }

    console.log("API", process.env.NEXT_PUBLIC_API_URL)

    const apiUrl = typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_API_URL || "http://backend:8000" // server-side
      : "http://localhost:8000"; // client-side

    try {
      const res = await fetch(`${apiUrl}/api/register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          agree: formData.agree,
        }),
      });

      if (res.ok) {
        alert("สมัครสมาชิกสำเร็จ");
        router.push("/login");
      } else {
        const data = await res.json();
        alert(`เกิดข้อผิดพลาด: ${data.detail || "ไม่ทราบสาเหตุ"}`);
      }
    } catch (err) {
      alert("ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-12 gap-10 items-start">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/vanich-logo-2.png"
            alt="Vanich Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-extrabold text-black mb-2">สมัครสมาชิก</h1>
          <p className="text-gray-600 mb-6">
            กรุณากรอกข้อมูลเพื่อสมัครสมาชิกในระบบของวานิช
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ชื่อ
                </label>
                <input
                  type="text"
                  placeholder="ชื่อ"
                  className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-50"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
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
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
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
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
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
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
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
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={formData.agree}
                onChange={(e) =>
                  setFormData({ ...formData, agree: e.target.checked })
                }
              />
              <label className="text-sm text-gray-600">
                ยอมรับเงื่อนไขการใช้งานและนโยบายความเป็นส่วนตัว
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900"
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
