/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb' // Adjust the size limit as needed
    }
  },
  images: {
    remotePatterns: [{hostname: 'res.cloudinary.com'}]
  }
};

export default nextConfig;
