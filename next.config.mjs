/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "geotherm.sirv.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
