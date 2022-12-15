/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['links.papareact.com'],
  },
  env:{
    mapbox_key:'pk.eyJ1IjoicmlzaGFicmIiLCJhIjoiY2tpZm5oeGU1MWExajJxcnN0amlpZXNlNCJ9.lWBjIY6NgJoPCLqs2T47VQ'
  }
}

module.exports = nextConfig
