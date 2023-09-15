/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 // Comment the lines 6, 7 and 8 to run the environment in a local statement
  // basePath: 'https://cryptospace.global/',
  // trailingSlash: true,
  // output: 'export',
  env: {
    COLLECTION: "ETHEREUM:0xee7f09d6444316ee3df063fa43a5ad9d682a0ca2",
    API_RARIBLE: "https://api.rarible.org/v0.1",
    BLOCKCHAIN: "ETHEREUM",
    API_RARIBLE_KEY: "2f66bcde-3967-407c-b47f-c15ddc9c28eb",
    TARGET_DATE: "2023-09-01T00:00:00",
    URL_CONTENT_VIDEO: "https://fragosautomotive.com/multimedia/videos/", //rutas temporales
    URL_CONTENT_AUDIO: "https://fragosautomotive.com/multimedia/audios/", //rutas temporales
    URL_COMIC: "https://fragosautomotive.com/multimedia/comic/", //ruta de COMIC
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.io',
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
}

module.exports = nextConfig

/*
  URL_CONTENT_VIDEO: "https://cryptomexapp.file.core.windows.net/video/", //rutas de prueba
  URL_CONTENT_AUDIO: "https://cryptomexapp-internetrouting.file.core.windows.net/audio/", //rutas de prueba
*/