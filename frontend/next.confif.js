/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'], // ✅ สำคัญ!
  },
  experimental: {
    turbo: false, // 🔧 ปิด turbopack ไปด้วยถ้าอยากชัวร์
  },
}

module.exports = nextConfig;
