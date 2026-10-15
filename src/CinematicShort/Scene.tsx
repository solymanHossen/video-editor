import React from 'react';
import {
  Audio,
  Img,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';
import { SceneData } from './types';

export const Scene: React.FC<{ scene: SceneData }> = ({ scene }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const duration = scene.durationInFrames;
  const curSec = frame / fps;

  // ----------------------------------------------------
  // 1. SILKY-SMOOTH CINEMATIC CAMERA MOVEMENT (S-CURVE EASING)
  // ----------------------------------------------------
  const t = frame / duration;
  const ease = 0.5 - 0.5 * Math.cos(t * Math.PI);

  let scale = 1.0;
  let driftX = 0;
  let driftY = 0;
  let originX = '50%';
  let originY = '50%';

  if (scene.motionType === 'smoothZoomIn') {
    scale = 1.02 + 0.14 * ease;
    driftY = -15 * ease;
  } else if (scene.motionType === 'smoothZoomFace') {
    scale = 1.03 + 0.17 * ease;
    originY = '38%';
    driftX = 8 * Math.sin(t * Math.PI * 1.5);
  } else if (scene.motionType === 'smoothMacroPush') {
    scale = 1.02 + 0.16 * ease;
    originY = '62%';
    driftX = 6 * Math.cos(t * Math.PI * 1.8);
  } else if (scene.motionType === 'smoothPanDown') {
    scale = 1.10;
    originY = `${28 + 48 * ease}%`;
  } else if (scene.motionType === 'smoothRiverPull') {
    scale = 1.16 - 0.12 * ease;
    driftX = 10 * Math.sin(t * Math.PI * 1.2);
    driftY = 6 * Math.cos(t * Math.PI * 1.0);
  } else {
    // smoothZoomOut
    scale = 1.15 - 0.12 * ease;
  }

  // Gentle subtle breathing drift (no harsh movement)
  const breatheX = Math.sin((frame / fps) * 1.2) * 4;
  const breatheY = Math.cos((frame / fps) * 1.0) * 3;

  // Soft subtle transition bloom at start (fade-in)
  const softBloom = interpolate(frame, [0, 8], [0.35, 0], {
    extrapolateRight: 'clamp',
  });

  // ----------------------------------------------------
  // 2. DYNAMIC BORDERLESS KARAOKE CAPTIONS
  // ----------------------------------------------------
  const activePhrase = scene.phrases.find(
    (p) => curSec >= p.startSec && curSec < p.endSec
  );

  let activeWordIdx = -1;
  if (activePhrase) {
    const pDur = Math.max(0.1, activePhrase.endSec - activePhrase.startSec);
    const wordProgress = (curSec - activePhrase.startSec) / pDur;
    activeWordIdx = Math.min(
      Math.floor(wordProgress * activePhrase.words.length),
      activePhrase.words.length - 1
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        backgroundColor: '#0a0a0f',
        fontFamily: "'Hind Siliguri', 'Noto Sans Bengali', sans-serif",
      }}
    >
      {/* Silky Smooth Visual Background */}
      <div
        style={{
          width: '100%',
          height: '100%',
          transform: `scale(${scale}) translate(${driftX + breatheX}px, ${driftY + breatheY}px)`,
          transformOrigin: `${originX} ${originY}`,
          transition: 'transform 0.08s ease-out',
        }}
      >
        {scene.image ? (
          <Img
            src={staticFile(scene.image)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #181924 0%, #2b2c3d 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#888',
              fontSize: '36px',
            }}
          >
            Scene {scene.id}
          </div>
        )}
      </div>

      {/* Cinematic Vignette for Depth & Focus */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0) 45%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.88) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Soft Transition Bloom */}
      {softBloom > 0 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: '#fff',
            opacity: softBloom,
            pointerEvents: 'none',
            mixBlendMode: 'screen',
          }}
        />
      )}

      {/* --- PURE BORDERLESS KINETIC TYPOGRAPHY (Hormozi / Vox Modern Style) --- */}
      {activePhrase && (
        <div
          style={{
            position: 'absolute',
            bottom: '240px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            columnGap: '16px',
            rowGap: '8px',
            maxWidth: '92%',
            padding: '10px 20px',
            zIndex: 40,
            pointerEvents: 'none',
          }}
        >
          {activePhrase.words.map((word, idx) => {
            const isActive = idx === activeWordIdx;
            return (
              <span
                key={idx}
                style={{
                  fontSize: isActive ? '58px' : '52px',
                  fontWeight: 800,
                  color: isActive ? '#FFE600' : '#FFFFFF',
                  textShadow: isActive
                    ? '0 0 32px rgba(255, 230, 0, 0.95), 0 4px 18px rgba(0,0,0,1), 0 2px 6px rgba(0,0,0,1)'
                    : '0 4px 18px rgba(0,0,0,0.95), 0 2px 6px rgba(0,0,0,1), 0 0 25px rgba(0,0,0,0.7)',
                  transform: isActive ? 'scale(1.20)' : 'scale(1.0)',
                  transition: 'all 0.10s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  display: 'inline-block',
                  letterSpacing: '0.5px',
                  filter: isActive ? 'drop-shadow(0 0 12px rgba(255, 230, 0, 0.6))' : 'none',
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      )}

      {/* Voiceover Audio */}
      {scene.audio && <Audio src={staticFile(scene.audio)} volume={1.15} />}

      {/* Contextual Foley SFX */}
      {scene.sfx && (
        <Audio
          src={staticFile(scene.sfx)}
          volume={scene.sfxVolume ?? 0.22}
          startFrom={0}
        />
      )}
    </div>
  );
};
