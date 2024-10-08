/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "loot-assets.s3.us-east-2.amazonaws.com",
          },
          {
            protocol: "https",
            hostname: "static.wixstatic.com",
          },
        ],
      },
};

export default nextConfig;
