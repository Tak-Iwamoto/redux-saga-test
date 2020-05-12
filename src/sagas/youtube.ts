import { call, put, takeLatest } from 'redux-saga/effects';
import * as ActionType from '../actions/youtubeConstants';
import { getVideo } from '../actions/youtube';
import { getVideoFactory } from '../services/youtube/api';

function* runGetVideo(action: ReturnType<typeof getVideo.start>) {
  const { videoId } = action.payload;

  try {
    const api = getVideoFactory();
    const video = yield call(api, videoId);
    yield put(getVideo.succeed(action.payload, { video }));
  } catch (err) {
    yield put(getVideo.fail(action.payload, err));
  }
}

export function* videoSaga() {
  yield takeLatest(ActionType.GET_VIDEO_START, runGetVideo);
}
