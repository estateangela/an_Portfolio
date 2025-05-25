/** @type {import('next').NextConfig} */
const nextConfig = {
    // 之前加的跳過 ESLint 設定
    eslint: {
      ignoreDuringBuilds: true,
    },
    // 其他 NextConfig 你可能有的設定...
  };
  
  export default nextConfig;
