/* eslint-disable no-useless-catch */
import axios from 'axios';
import { VideoType } from './models';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';
axios.defaults.headers.common = {
  Authorization: `bearer ${process.env.REACT_APP_YOUTUBE_API_KEY}`,
};

export const getVideoApi = async (videoId: string) => {
  try {
    const res = await axios.get(
      `/videos/?part=id,snippet,contentDetails&id=${videoId}`,
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
