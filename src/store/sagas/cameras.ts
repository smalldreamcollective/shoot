import { take, put, call } from 'redux-saga/effects';
import { eventChannel, END} from 'redux-saga';

import { db } from '../../firebase-instance';

import { Camera } from '../../models/camera.model';

import * as actions from '../actions';

const ref = db.ref('cameras');

export function createRefChannel(ref:any) {
  return eventChannel(emit => {
    const valueUpdateHandler = (snapshot:any) => emit(snapshot.val());
    const unsubscribe = () => ref.off();

    ref.on('value', valueUpdateHandler);
    return unsubscribe;
  });  
}

export function* getCamerasSaga() {
  try {
    let cameras: Camera[];
    yield ref.once('value').then(snapshot => {
      cameras = snapshot.val();
      put(actions.setCameras(cameras));
    });      
  }
  catch (err) {
    yield put(actions.getCamerasError());
  }
}

export function * camerasUpdatedSaga() {
  const refChannel = yield call(createRefChannel, ref);

  while (true) {
    try {
      const cameras = yield take(refChannel);
      yield put(actions.setCameras(cameras));
    }
    catch(err) {
     yield put(actions.getCamerasError());
    }
  }
  
}