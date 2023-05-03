/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["picsum.photos"],
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
