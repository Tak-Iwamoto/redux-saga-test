import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as Action from '../actions/youtubeConstants';
import { getVideo } from '../actions/youtube';
import { getVideoFactory } from '../services/youtube/api';

function* runGetVideo(action: ReturnType<typeof getVideo.start>) {
  const { videoId } = action.payload;

  try {
    const api = getVideoFactory();
    const video = yield call(api, videoId);

    yield put(getVideo.succeed({ videoId }, { video }));
  } catch (err) {
    yield put(getVideo.fail({ videoId }, err));
  }
}

export function* watchGetVideo() {
  yield takeLatest(Action.GET_VIDEO_START, runGetVideo);
}

export default function* rootSaga() {
  yield all([fork(watchGetVideo)]);
}
