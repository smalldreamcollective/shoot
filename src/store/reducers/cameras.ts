import * as actionTypes from '../action_types';
import { updateObject } from '../../shared/utility';

const initialState = {
  cameras: null
};

const setCameras = (state = initialState, action: actionTypes.SetCamerasActionType) => {
  const updatedState = {
    cameras: action.cameras
  };
  return updateObject(state, updatedState);
};

const getCamerasError = (state = initialState) => {
  return updateObject(state, {
    error: true
  });
};

const reducer = (state = initialState, action: actionTypes.CamerasActionTypes) => {
  switch(action.type) {
    case actionTypes.SET_CAMERAS: return setCameras(state, action);
    case actionTypes.GET_CAMERAS_ERROR: return getCamerasError(state);
    default: return state;
  }
};


export default reducer;