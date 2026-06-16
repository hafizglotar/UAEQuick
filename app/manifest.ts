import type { MetadataRoute } from 'next';
import { company } from '@/lib/data/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.name} - Home Maintenance Services in Dubai`,
    short_name: company.name,
    description: company.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#164B8D',
    lang: 'en-AE',
    categories: ['business', 'utilities', 'lifestyle'],
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  };
}
