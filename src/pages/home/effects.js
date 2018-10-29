import { all, put, call, takeEvery, fork } from "redux-saga/effects";
import { writeVideo } from "./actions";
import axios from "axios";
import { getAllVideo, getOneVideo } from "./actions";
import { actionTypes } from './reducer';
import { currentId } from './components/video'

function* fetchVideoByApi() {
  try {
    const data = yield call(() =>
      axios
        .get("http://18.219.216.115:8000/videos")
        .then(res => res.data)
      
    );
    yield put(writeVideo(data));
  } catch (e) {}
}
function* fetchOneVideoByApi() {
  console.log('sdf')
}

function* watchRequestVideo() {
  yield takeEvery(actionTypes.REQUST_VIDEOS, fetchVideoByApi);
}

function* watchRequestOneVideo() {
  yield takeEvery(actionTypes.REQUEST_ONE_VIDEO, fetchOneVideoByApi);
}


export default function*() {
  yield all([
    fork(watchRequestVideo), 
    fork(watchRequestOneVideo)
  ]);
}
