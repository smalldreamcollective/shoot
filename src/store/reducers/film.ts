import * as actionTypes from '../action_types';
import { updateObject } from '../../shared/utility';

const initialState = {
  filmList: null
};

const setFilmList = (state = initialState, action: actionTypes.SetFilmListActionType) => {
  const updatedState = {
    filmList: action.filmList
  };

  return updateObject(state, updatedState);
};

const getFilmListError = (state = initialState) => {
  return updateObject(state, {
    error: true
  });
};

const reducer = (state = initialState, action: actionTypes.FilmActionTypes) => {
  switch(action.type) {
    case actionTypes.SET_FILM_LIST: return setFilmList(state, action);
    case actionTypes.GET_FILM_LIST_ERROR: return getFilmListError(state);
    default: return state;
  }
};

export default reducer;


