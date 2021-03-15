import { take, put, call } from 'redux-saga/effects';
import { eventChannel, END} from 'redux-saga';

import { db } from '../../firebase-instance';

import { Shoot } from '../../models/shoot.model';

import * as actions from '../actions';

const ref = db.ref('shoots');

export function createRefChannel(ref:any) {
  return eventChannel(emit => {
    const valueUpdateHandler = (snapshot:any) => emit(snapshot.val());
    const unsubscribe = () => ref.off();

    ref.on('value', valueUpdateHandler);
    return unsubscribe;
  });  
}

export function* getShootsSaga() {
  try {
    let shoots: Shoot[];
    yield ref.once('value').then(snapshot => {
      shoots = snapshot.val();
      console.log('putting action.setShoots')
      put(actions.setShoots(shoots));
    });      
  }
  catch (err) {
    yield put(actions.getShootsError(err));
  }
}

export function * shootsUpdatedSaga() {
  const refChannel = yield call(createRefChannel, ref);

  while (true) {
    try {
      const shoots = yield take(refChannel);
      yield put(actions.setShoots(shoots));
    }
    catch(err) {
     yield put(actions.getShootsError(err));
    }
  }
}  
