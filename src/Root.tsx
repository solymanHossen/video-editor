import React from 'react';
import { Composition } from 'remotion';
import { CinematicShort } from './CinematicShort';
import { scenes } from './CinematicShort/data';

export const RemotionRoot: React.FC = () => {
  const totalFrames = scenes.reduce((acc, sc) => acc + sc.durationInFrames, 0);

  return (
    <>
      <Composition
        id="CinematicShort"
        component={CinematicShort}
        durationInFrames={totalFrames || 300}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
