/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                port: '',
                pathname: '/**',
            },
        ],
    },
    // async headers() {
    //     return [
    //         {
    //             source: "/api/send-email",
    //             headers: [
    //                 {
    //                     key: "Allow",
    //                     value: "POST",
    //                 },
    //             ],
    //         },
    //     ];
    // },
    // async redirects() {
    //     return [
    //         {
    //             source: "/api/send-email",
    //             destination: "/",
    //             permanent: true,
    //         },
    //     ];
    // },
};

module.exports = nextConfig;
