import { Film } from "../../models/film.model";

export const SET_FILM_LIST = 'SET_FILM_LIST';
export const GET_FILM_LIST = 'GET_FILM_LIST';
export const GET_FILM_LIST_ERROR = 'GET_FILM_LIST_ERROR';
export const FILM_LIST_UPDATED = 'FILM_LIST_UPDATED';

export interface SetFilmListActionType {
  type: typeof SET_FILM_LIST;
  filmList: Film[];
}

export interface GetFilmListActionType {
  type: typeof GET_FILM_LIST;
}

export interface GetFilmListErrorActionType {
  type: typeof GET_FILM_LIST_ERROR;
  error: string;
}

export interface FilmListUpdatedActionType {
  type: typeof FILM_LIST_UPDATED;
}

export type FilmActionTypes = SetFilmListActionType | GetFilmListActionType | GetFilmListErrorActionType | FilmListUpdatedActionType;