/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/memo-app/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/memo-app' : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
};

export default nextConfig;
