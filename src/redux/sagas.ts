import { all, AllEffect } from 'redux-saga/effects';

export default function* rootSaga(): Generator<AllEffect<never>> {
  yield all([]);
}
