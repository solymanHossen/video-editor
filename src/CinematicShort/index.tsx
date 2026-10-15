import React, { useEffect } from 'react';
import {
  interpolate,
  Series,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { scenes } from './data';
import { Scene } from './Scene';

export const CinematicShort: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Load Bengali font dynamically
  useEffect(() => {
    const font = new FontFace(
      'Hind Siliguri',
      `url(${staticFile('HindSiliguri-Bold.ttf')})`
    );
    font.load().then((loadedFont) => {
      document.fonts.add(loadedFont);
    }).catch(() => {
      // Fallback to system fonts if not found
    });
  }, []);

  // Top Progress Bar
  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
      }}
    >
      {/* Main Scene Series */}

      {/* Top Sleek Minimalist Progress Bar */}
      <div
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '5px',
          backgroundColor: 'rgba(255, 255, 255, 0.12)',
          zIndex: 100,
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background:
              'linear-gradient(90deg, #FFB703 0%, #FFD700 100%)',
            boxShadow: '0 0 10px rgba(255, 215, 0, 0.8)',
          }}
        />
      </div>
    </div>
  );
};
