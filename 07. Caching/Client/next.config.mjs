/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb' // Adjust the size limit as needed
    }
  }
};

export default nextConfig;
