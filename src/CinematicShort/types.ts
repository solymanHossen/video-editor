export interface Phrase {
  startSec: number;
  endSec: number;
  words: string[];
}

export type SmoothMotionType =
  | 'smoothZoomIn'
  | 'smoothZoomFace'
  | 'smoothPanDown'
  | 'smoothMacroPush'
  | 'smoothZoomOut'
  | 'smoothRiverPull';

export interface SceneData {
  id: number;
  image: string;
  audio: string;
  sfx: string;
  sfxVolume?: number;
  durationInFrames: number;
  motionType: SmoothMotionType;
  phrases: Phrase[];
}
