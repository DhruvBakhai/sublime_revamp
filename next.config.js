/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "sublimedatasys.com",
    //     port: "3000",
    //     pathname: "wp-content/uploads/2019/07/logo.png",
    //   },
    // ],
    domains: ["sublimedatasys.com"],
  },
};

module.exports = nextConfig;
// https://sublimedatasys.com/wp-content/uploads/2019/07/logo.png
