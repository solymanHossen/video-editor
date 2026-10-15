import { SceneData } from './types';

export const scenes: SceneData[] = [
  {
    id: 1,
    image: 'images/scene1_ranaghat_station.jpg',
    audio: 'audio/part1.mp3',
    sfx: 'sfx/sfx_train.wav',
    sfxVolume: 0.28,
    durationInFrames: 300,
    motionType: 'smoothZoomIn',
    phrases: [
      {
        startSec: 0.0,
        endSec: 3.4,
        words: ['রানাঘাট', 'স্টেশনের', 'সেই', 'পুরনো', 'ভিড়,'],
      },
      {
        startSec: 3.4,
        endSec: 6.8,
        words: ['ধোঁয়া', 'ওঠা', 'উনুন', 'আর', 'রান্নার', 'সুবাস।'],
      },
      {
        startSec: 6.8,
        endSec: 10.0,
        words: ['এর', 'মধ্যেই', 'লুকিয়ে', 'ছিল', 'এক', 'নিভৃত', 'মহাকাব্য।'],
      },
    ],
  },
  {
    id: 2,
    image: 'images/scene2_hazari_cook.jpg',
    audio: 'audio/part2.mp3',
    sfx: 'sfx/sfx_fire.wav',
    sfxVolume: 0.22,
    durationInFrames: 306,
    motionType: 'smoothZoomFace',
    phrases: [
      {
        startSec: 0.0,
        endSec: 3.5,
        words: ['হাজারি', 'ঠাকুর।', 'স্রেফ', 'একজন', 'সাধারণ', 'রাঁধুনি।'],
      },
      {
        startSec: 3.5,
        endSec: 6.8,
        words: ['উনুনের', 'ধোঁয়ায়', 'ঝাপসা', 'হয়ে', 'যাওয়া...'],
      },
      {
        startSec: 6.8,
        endSec: 10.2,
        words: ['তাঁর', 'চোখের', 'স্বপ্নটা', 'ছিল', 'বিশাল!'],
      },
    ],
  },
  {
    id: 3,
    image: 'images/scene3_padma_scolding.jpg',
    audio: 'audio/part3.mp3',
    sfx: 'sfx/sfx_tense.wav',
    sfxVolume: 0.24,
    durationInFrames: 299,
    motionType: 'smoothZoomIn',
    phrases: [
      {
        startSec: 0.0,
        endSec: 4.5,
        words: ['পদ্মা', 'ঝিয়ের', 'বিষাক্ত', 'গালিগালাজ', 'আর', 'লাঞ্ছনা।'],
      },
      {
        startSec: 4.5,
        endSec: 7.2,
        words: ['কিন্তু', 'প্রতিটা', 'অপমান', 'ছিল—'],
      },
      {
        startSec: 7.2,
        endSec: 10.0,
        words: ['হাজারির', 'জেদ', 'বাড়িয়ে', 'তোলার', 'জ্বালানি!'],
      },
    ],
  },
  {
    id: 4,
    image: 'images/scene4_spices_cooking.jpg',
    audio: 'audio/part4.mp3',
    sfx: 'sfx/sfx_sizzle.wav',
    sfxVolume: 0.26,
    durationInFrames: 333,
    motionType: 'smoothMacroPush',
    phrases: [
      {
        startSec: 0.0,
        endSec: 4.5,
        words: ['তিনি', 'যখন', 'হাতা', 'নাড়তেন,', 'কেবল', 'ভাত', 'রাঁধতেন', 'না।'],
      },
      {
        startSec: 4.5,
        endSec: 7.8,
        words: ['তিনি', 'রাঁধতেন', 'এক', 'অদম্য', 'ভাগ্য...'],
      },
      {
        startSec: 7.8,
        endSec: 11.1,
        words: ['নিজের', 'একটা', 'হোটেল', 'খোলার', 'স্বপ্ন!'],
      },
    ],
  },
  {
    id: 5,
    image: 'images/scene5_adarsha_hotel.jpg',
    audio: 'audio/part5.mp3',
    sfx: 'sfx/sfx_chime.wav',
    sfxVolume: 0.25,
    durationInFrames: 298,
    motionType: 'smoothPanDown',
    phrases: [
      {
        startSec: 0.0,
        endSec: 3.8,
        words: ['শূন্য', 'থেকে', 'শুরু', 'করে', 'একদিন', 'জয়', 'হলো', 'তাঁর।'],
      },
      {
        startSec: 3.8,
        endSec: 6.8,
        words: ['রানাঘাটের', 'বুকে', 'মাথা', 'উঁচু', 'করে', 'দাঁড়ালো—'],
      },
      {
        startSec: 6.8,
        endSec: 9.9,
        words: ['হাজারি', 'ঠাকুরের', '‘আদর্শ', 'হিন্দু', 'হোটেল’!', '🏆'],
      },
    ],
  },
  {
    id: 6,
    image: 'images/scene6_river_sunset.jpg',
    audio: 'audio/part6.mp3',
    sfx: 'sfx/sfx_river.wav',
    sfxVolume: 0.22,
    durationInFrames: 370,
    motionType: 'smoothRiverPull',
    phrases: [
      {
        startSec: 0.0,
        endSec: 4.5,
        words: ['পরিস্থিতি', 'আপনার', 'পরিচয়', 'নয়,', 'স্বপ্নই', 'শেষ', 'কথা।'],
      },
      {
        startSec: 4.5,
        endSec: 8.0,
        words: ['কখনও', 'নিজের', 'স্বপ্নের', 'সাথে', 'আপস', 'করবেন', 'না...'],
      },
      {
        startSec: 8.0,
        endSec: 12.3,
        words: ['আপনার', 'লড়াইয়ের', 'গল্পটি', 'কী?', 'কমেন্টে', 'জানান!'],
      },
    ],
  },
];
