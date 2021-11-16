import {put, call, select, takeEvery} from 'redux-saga/effects';
import {Alert} from 'react-native';
import {RootState} from '@/models/type';
function* testInit() {
  const {showLocation} = yield select(state => state.location);
  yield put({
    type: 'location',
    payload: {
      showLocation: !showLocation,
    },
  });
}
function* rootSaga() {
  yield takeEvery('test', testInit);
}
export default rootSaga;
