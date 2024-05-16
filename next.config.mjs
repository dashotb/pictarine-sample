/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'a.storyblok.com',
                    port: '',
                    pathname: '/f/189744/**',
                },
            ],
        },
};

export default nextConfig;
