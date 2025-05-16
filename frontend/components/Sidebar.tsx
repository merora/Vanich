import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside className="w-56 h-[calc(100vh-64px)] bg-white rounded shadow flex flex-col justify-between p-4 text-sm text-gray-900">
      {/* เมนูด้านบน */}
      <div className="divide-y divide-gray-200">
        <div
          className="py-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          หน้าหลัก
        </div>
        <div
          className="py-2 cursor-pointer"
          onClick={() => router.push("/profile")}
        >
          โปรไฟล์
        </div>
        <div
          className="py-2 cursor-pointer"
          onClick={() => router.push("/job")}
        >
          งาน
        </div>
        <div
          className="py-2 cursor-pointer"
          onClick={() => router.push("/shop/overview")}
        >
          ร้านค้าของฉัน
        </div>
        <div
          className="py-2 cursor-pointer"
          onClick={() => router.push("/contact")}
        >
          ติดต่อ
        </div>
      </div>
      {/* ปุ่มล่างสุด */}
      <button
        className="bg-green-800 text-white py-2 rounded w-full"
        onClick={() => router.push("/login")}
      >
        ออกจากระบบ
      </button>
    </aside>
  );
}
