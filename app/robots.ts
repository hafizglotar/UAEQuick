import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/data/site';

export default function robots(): MetadataRoute.Robots {
  // Explicitly welcome the major AI / answer-engine crawlers so the site is
  // eligible for AI Overviews, ChatGPT, Claude, Perplexity and Gemini answers.
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'CCBot',
    'Bingbot',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: aiBots,
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
