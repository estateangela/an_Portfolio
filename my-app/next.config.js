/** @type {import('next').NextConfig} */
const nextConfig = {
  // 讓 build 自動做靜態匯出
  output: 'export',

  // 如果想要 URL 後面帶斜線（/about/ 而非 /about.html）
  trailingSlash: true,

  // （可選）如果要在 CI 上忽略 ESLint 錯誤
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
