import { AxiosError } from 'axios';

import { VideoType } from '../services/youtube/models';
import * as ActionType from './youtubeConstants';

interface GetVideoParams {
  videoId: string;
}
interface GetMembersResult {
  video: VideoType;
}

export const getVideo = {
  start: (params: GetVideoParams) => ({
    type: ActionType.GET_VIDEO_START as typeof ActionType.GET_VIDEO_START,
    payload: params,
  }),

  succeed: (params: GetVideoParams, result: GetMembersResult) => ({
    type: ActionType.GET_VIDEO_SUCCEED as typeof ActionType.GET_VIDEO_SUCCEED,
    payload: { params, result },
  }),

  fail: (params: GetVideoParams, error: AxiosError) => ({
    type: ActionType.GET_VIDEO_FAIL as typeof ActionType.GET_VIDEO_FAIL,
    payload: { params, error },
    error: true,
  }),
};

export type YoutubeAction =
  | ReturnType<typeof getVideo.start>
  | ReturnType<typeof getVideo.succeed>
  | ReturnType<typeof getVideo.fail>;
