/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
}

module.exports = nextConfig
