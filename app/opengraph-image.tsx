import { ImageResponse } from 'next/og';
import { company, PHONE_DISPLAY } from '@/lib/data/site';

export const alt = 'UAE Quick — Same-Day Home Maintenance Services in Dubai';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Default site Open Graph / social image, generated at the edge so every page
 * has a real, branded 1200×630 preview (Next applies this site-wide unless a
 * route sets its own openGraph.images).
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #164B8D 0%, #0e2f5c 100%)',
          padding: '70px',
          color: '#ffffff',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '18px',
              background: '#ffffff',
              color: '#164B8D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '44px',
              fontWeight: 800,
            }}
          >
            U
          </div>
          <div style={{ display: 'flex', fontSize: '40px', fontWeight: 800 }}>
            <span>UAE</span>
            <span style={{ color: '#9fd000' }}>Quick</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: '66px', fontWeight: 800, lineHeight: 1.1 }}>
            Same-Day Home Maintenance
          </div>
          <div style={{ fontSize: '66px', fontWeight: 800, lineHeight: 1.1, color: '#9fd000' }}>
            Services in Dubai
          </div>
          <div style={{ fontSize: '30px', marginTop: '24px', color: '#dbe6f5' }}>
            AC · Plumbing · Handyman · Electrical · Cleaning · Moving
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '28px', color: '#dbe6f5' }}>
          <div style={{ display: 'flex' }}>📞 {PHONE_DISPLAY}</div>
          <div style={{ display: 'flex' }}>
            {`⭐ ${company.rating.value}/5 · ${company.rating.count}+ reviews · 30-day guarantee`}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
