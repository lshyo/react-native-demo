import {put, call, select, takeEvery} from 'redux-saga/effects';
function* showLocationConfig() {
  const {showLocation} = yield select(state => state.location);
  yield put({
    type: 'location',
    payload: {
      showLocation: !showLocation,
    },
  });
}
function* rootSaga() {
  yield takeEvery('toggleLocationConfig', showLocationConfig);
}
export default rootSaga;
