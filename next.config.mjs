/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dynamic-media-cdn.tripadvisor.com', 'static.tacdn.com'], // ✅ Combine both
  },
};

export default nextConfig;
