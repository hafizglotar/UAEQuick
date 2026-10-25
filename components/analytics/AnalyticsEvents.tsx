'use client';

import { useTrackClicks } from './useTrackClicks';

/** Mounted once in app/layout.tsx; installs the call/WhatsApp click tracking. Renders nothing. */
export function AnalyticsEvents() {
  useTrackClicks();
  return null;
}
