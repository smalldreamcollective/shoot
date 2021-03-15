import { take, put, call } from 'redux-saga/effects';
import { eventChannel, END} from 'redux-saga';

import { db } from '../../firebase-instance';

import * as actions from '../actions';

const ref = db.ref('film');

export function createRefChannel(ref: any) {
  return eventChannel(emit => {
    const valueUpdateHandler = (snapshot: any) => emit(snapshot.val());
    const unsubscribe = () => ref.off();

    ref.on('value', valueUpdateHandler);
    return unsubscribe;
  });  
}

export function* getFilmListSaga() {
  try {
    let filmList;
    yield ref.once('value').then(snapshot => {
      filmList = snapshot.val();
      put(actions.setFilmList(filmList));
    });  
    yield 
  }
  catch (err) {
    yield put(actions.getFilmListError());
  }
}

export function * filmListUpdatedSaga() {
  const refChannel = yield call(createRefChannel, ref);

  while (true) {
    try {
      const filmList = yield take(refChannel);
      yield put(actions.setFilmList(filmList));
    }
    catch(err) {
     yield put(actions.getFilmListError());
    }
  }
  
}