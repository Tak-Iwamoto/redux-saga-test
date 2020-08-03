import {call, put, takeLatest} from 'redux-saga/effects';
import * as ActionType from '../actions/youtubeConstants';
import {getVideo} from '../actions/youtube';
import {getVideoApi} from '../services/youtube/api';

function* runGetVideo(action: ReturnType<typeof getVideo.start>) {
  const {videoId} = action.payload;

  try {
    const video = yield call(getVideoApi, videoId);
    yield put(getVideo.succeed(action.payload, {video}));
  } catch (err) {
    yield put(getVideo.fail(action.payload, err));
  }
}

export function* videoSaga() {
  yield takeLatest(ActionType.GET_VIDEO_START, runGetVideo);
}
