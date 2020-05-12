import { all, fork } from 'redux-saga/effects';
import { videoSaga } from './youtube';

export default function* rootSaga() {
  yield all([fork(videoSaga)]);
}
