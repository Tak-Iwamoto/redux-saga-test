/* eslint-disable no-useless-catch */
import axios from 'axios';
import { VideoType } from './models';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: 'https://www.googleapis.com/youtube/v3',
  timeout: 7000,
};

export const getVideoFactory = (optionConfig?: ApiConfig) => {
  const config = {
    ...DEFAULT_API_CONFIG,
    ...optionConfig,
  };
  const instance = axios.create(config);

  const getVideo = async (videoId: string) => {
    try {
      const res = await instance.get(
        `/videos/?part=id,snippet,contentDetails&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`,
      );
      if (res.status !== 200) {
        throw new Error('Server Error');
      }
      const resVideo: VideoType = res.data.items[0].snippet;
      return resVideo;
    } catch (err) {
      throw err;
    }
  };

  return getVideo;
};
