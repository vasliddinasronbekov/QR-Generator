/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://qr.awds.uz", // 🔴 bu yerda domeningni yoz
  generateRobotsTxt: true,           // robots.txt yaratadi
  sitemapSize: 7000,                 // katta saytlar uchun bo‘linadi
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/dsd.txt"],             // kerak bo‘lmagan sahifalar
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private"], // kerak bo‘lsa maxfiy page larni qo‘sh
      },
    ],
    additionalSitemaps: [
      "https://qr.awds.uz/sitemap.xml", // asosiy sitemap
    ],
  },
};
