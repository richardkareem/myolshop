/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['spaces.ilfen.co', 'images.tokopedia.net']
    },
    experimental: {
        workerThreads: false,
        cpus: 1,
    },
};

export default nextConfig;
