"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: "me", text: "สนใจงานนี้ครับ 😊" },
    { sender: "seller", text: "ขอบคุณค่ะ สนใจสั่งแบบไหน หรือมีแบบตัวอย่างมั้ยคะ?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "me", text: input }]);
    setInput("");
  };

  useEffect(() => {
    const container = document.getElementById("chat-scroll");
    if (container) container.scrollTop = container.scrollHeight;
  }, [messages]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="flex-1 px-4 py-6 flex flex-col">
          <h1 className="text-xl font-bold mb-4 text-black">💬 แชตกับ น้องมดฟาร์มไข่ไก่อารมณ์ดี</h1>

          {/* Chat Box */}
          <div
            id="chat-scroll"
            className="flex-1 bg-white rounded-lg p-4 overflow-y-auto border text-black"
            style={{ maxHeight: "500px" }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-3 flex ${
                  msg.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                <div
  className={`px-4 py-2 rounded-xl max-w-xs ${
    msg.sender === "me"
      ? "bg-green-100 text-black text-right"
      : "bg-pink-100 text-black text-left"
  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="text"
              className="flex-1 px-4 py-2 border rounded-lg"
              placeholder="พิมพ์ข้อความ..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <button
              onClick={sendMessage}
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
            >
              ส่ง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
