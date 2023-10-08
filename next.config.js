/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    experimental:{
        appDir:true,
    },
    images: {
        domains: ['links.papareact.com'], // Add the domain(s) you want to allow
    },
}

module.exports = nextConfig
