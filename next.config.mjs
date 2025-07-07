/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: 'https',
                hostname : 'ap-south-1.graphassets.com'
            }
        ],
        // Comment out this line unless you are using static export builds
        // unoptimized: true,
    },
}

export default nextConfig
