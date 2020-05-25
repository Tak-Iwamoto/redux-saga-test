import { Reducer } from 'redux';
import { AxiosError } from 'axios';

import { YoutubeAction } from '../actions/youtube';
import * as ActionType from '../actions/youtubeConstants';
import { VideoType } from '../services/youtube/models';

export interface VideoState {
  video: VideoType;
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: VideoState = {
  video: {},
  isLoading: false,
};

const videoReducer: Reducer<VideoState, YoutubeAction> = (
  state: VideoState = initialState,
  action: YoutubeAction,
): VideoState => {
  switch (action.type) {
    case ActionType.GET_VIDEO_START:
      return {
        ...state,
        video: {},
        isLoading: true,
      };
    case ActionType.GET_VIDEO_SUCCEED:
      return {
        ...state,
        video: action.payload.result.video,
        isLoading: false,
      };
    case ActionType.GET_VIDEO_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;
      return state;
    }
  }
};

export default videoReducer;
