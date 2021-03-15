import * as actionTypes from '../action_types';
import { Film } from '../../models/film.model';


export const getFilmList = () => {
  return {
    type: actionTypes.GET_FILM_LIST
  }  
};

export const setFilmList = (filmList: Film[]) => {
  return {
    type: actionTypes.SET_FILM_LIST,
    filmList: filmList
  };
};

export const getFilmListError = () => {
  return {
    type: actionTypes.GET_FILM_LIST_ERROR
  };
};

export const filmListUpdated = () => {
  return {
    type: actionTypes.FILM_LIST_UPDATED
  };
};