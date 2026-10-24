/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Serve the static redesign (public/index.html) at the root URL.
  // The previous v0 page now lives at /v0-classic.
  async rewrites() {
    return {
      beforeFiles: [{ source: '/', destination: '/index.html' }],
    }
  },
}

export default nextConfig