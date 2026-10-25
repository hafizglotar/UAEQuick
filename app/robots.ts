import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/data/site';

/**
 * robots.txt. AI / answer-engine crawlers are allowed explicitly so the site is
 * eligible for ChatGPT, Claude, Perplexity, Google AI Overviews and Bing/Copilot
 * answers. /api/ (lead endpoint) is the only disallowed path.
 */
export default function robots(): MetadataRoute.Robots {
  const requiredAiBots = ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'Bingbot'];
  const otherAiBots = [
    'OAI-SearchBot',
    'ChatGPT-User',
    'Claude-Web',
    'anthropic-ai',
    'Perplexity-User',
    'Applebot-Extended',
    'CCBot',
  ];

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      { userAgent: requiredAiBots, allow: '/', disallow: ['/api/'] },
      { userAgent: otherAiBots, allow: '/', disallow: ['/api/'] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
