/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com"]
    },
    headers: [
        {
            key: "Content-Security-Policy",
            value: "script-src 'self' https://widget.kommunicate.io 'unsafe-inline';",
        },
    ],
};

export default nextConfig;
