'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

type DisplayProps = {
  slot: string;
  format?: string;
  responsive?: string;
  style?: any;
};

export const Display = ({ slot, format = 'auto', responsive = 'true', style }: DisplayProps) => {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  });


  return (
    <div
      style={{ maxWidth: '100%' }}
      className="FirstAd"
    >
      <p>
        
      </p>
      <ins
        className="adsbygoogle"
        style={{ display: 'flex', justifyContent: 'center', width: '100%', ...style }}
        data-ad-client={`ca-pub-${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}`}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};
