/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

 // Add basePath
  basePath: 'https://cryptospace.global/',
  trailingSlash: true,
  output: 'export',
  env: {
    COLLECTION: "ETHEREUM:0xee7f09d6444316ee3df063fa43a5ad9d682a0ca2",
    API_RARIBLE: "https://api.rarible.org/v0.1",
    BLOCKCHAIN: "ETHEREUM",
    API_RARIBLE_KEY: "2f66bcde-3967-407c-b47f-c15ddc9c28eb",
    TARGET_DATE: "2023-09-01T00:00:00",
    URL_CONTENT_API: "https://fragosautomotive.com/db-cryptospace/nft.php", //rutas de prueba
    URL_CONTENT_VIDEO: "https://fragosautomotive.com/multimedia/videos/", //rutas de prueba
    URL_CONTENT_AUDIO: "https://fragosautomotive.com/multimedia/audios/", //rutas de prueba
  }
}

module.exports = nextConfig