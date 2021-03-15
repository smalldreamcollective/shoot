import { takeEvery } from 'redux-saga/effects';

import * as actionTypes from '../action_types';

import { getFilmListSaga, filmListUpdatedSaga } from './film';
import { getCamerasSaga, camerasUpdatedSaga } from './cameras';
import { getShootsSaga, shootsUpdatedSaga } from './shoots'

export function* watchFilmList() {
  yield takeEvery(actionTypes.GET_FILM_LIST, getFilmListSaga);
  yield takeEvery(actionTypes.FILM_LIST_UPDATED, filmListUpdatedSaga);
}

export function* watchCameras() {
  yield takeEvery(actionTypes.GET_CAMERAS, getCamerasSaga);
  yield takeEvery(actionTypes.CAMERAS_UPDATED, camerasUpdatedSaga);
}

export function* watchShoots() {
  yield takeEvery(actionTypes.GET_SHOOTS, getShootsSaga);
  yield takeEvery(actionTypes.SHOOTS_UPDATED, shootsUpdatedSaga);
}