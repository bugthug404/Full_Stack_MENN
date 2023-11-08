/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // allow "https://pbs.twimg.com/profile_images/1287562748562309122/4RLk5A_U_x96.jpg"
    domains: ["pbs.twimg.com"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
