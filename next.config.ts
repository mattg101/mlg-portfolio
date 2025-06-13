
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www-robotics.jpl.nasa.gov',
        port: '',
        pathname: '/media/images/**',
      },
    ],
  },
};

export default nextConfig;
