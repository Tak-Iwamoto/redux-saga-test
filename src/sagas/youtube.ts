import { all, call, fork, put, takeLatest } from 'redux-saga/effects';

import * as ActionType from '../actions/youtubeConstants';
import { getVideo } from '../actions/youtube';
import { getVideoFactory } from '../services/youtube/api';

function* runGetVideo(action: ReturnType<typeof getVideo.start>) {
  console.log('run');
  const { videoId } = action.payload;

  try {
    const api = getVideoFactory();
    const video = yield call(api, videoId);
    console.log(video);
    console.log('get!');

    yield put(getVideo.succeed(action.payload, { video }));
  } catch (err) {
    yield put(getVideo.fail(action.payload, err));
  }
}

export function* watchGetVideo() {
  console.log('watch!');
  yield takeLatest(ActionType.GET_VIDEO_START, runGetVideo);
}

export default function* rootSaga() {
  console.log('root');
  yield all([fork(watchGetVideo)]);
}
