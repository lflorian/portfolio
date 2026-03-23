import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/imprint', '/dont-be-late-privacy'],
    },
    sitemap: 'https://florianlammert.com/sitemap.xml',
  };
}
