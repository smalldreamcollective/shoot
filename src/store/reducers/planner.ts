import * as actionTypes from '../action_types';
import { updateObject } from '../../shared/utility';

const initialState = {
  camera: null,
  film: null,
  iso: null
};

const addCamera = (state = initialState, action: actionTypes.AddCameraActionType) => {
  const updatedState = {
    camera: action.camera
  };
  
  return updateObject(state, updatedState);
};

const addFilm = (state = initialState, action: actionTypes.AddFilmActionType) => {
  const updatedState = {
    film: action.film
  };

  return updateObject(state, updatedState);
};

const isoSelected = (state =initialState, action: actionTypes.ISOSelectedActionType) => {
  const updatedState = {
    iso: action.iso
  };
  
  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action: actionTypes.PlannerActionTypes) => {
  switch(action.type) {
    case actionTypes.ADD_CAMERA: return addCamera(state, action);
    case actionTypes.ADD_FILM: return addFilm(state, action);
    case actionTypes.ISO_SELECTED: return isoSelected(state, action);
    default: return state;
  }
};

export default reducer;