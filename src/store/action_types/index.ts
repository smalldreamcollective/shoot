import { Camera } from "../../models/camera.model";
import { Film } from "../../models/film.model";
import { Shoot } from "../../models/shoot.model";

export const ADD_CAMERA = 'ADD_CAMERA';
export const ADD_FILM = 'ADD_FILM';
export const ISO_SELECTED = 'ISO_SELECTED';

export interface AddCameraActionType {
  type: typeof ADD_CAMERA;
  camera: Camera;
}

export interface AddFilmActionType {
  type: typeof ADD_FILM;
  film: string;
}

export interface ISOSelectedActionType {
  type: typeof ISO_SELECTED;
  iso: string;
}

export type PlannerActionTypes = AddCameraActionType | AddFilmActionType | ISOSelectedActionType;

export const SET_CAMERAS = 'SET_CAMERAS';
export const GET_CAMERAS = 'GET_CAMERAS';
export const GET_CAMERAS_ERROR = 'GET_CAMERAS_ERROR';
export const CAMERAS_UPDATED = 'CAMERAS_UPDATED';

export interface SetCamerasActionType {
  type: typeof SET_CAMERAS;
  cameras: Camera[];
}

export interface GetCamerasActionType {
  type: typeof GET_CAMERAS;  
}

export interface GetCamerasErrorActionType {
  type: typeof GET_CAMERAS_ERROR;  
  error: string;
}

export interface CamerasUpdatedActionType {
  type: typeof CAMERAS_UPDATED;  
}

export type CamerasActionTypes = SetCamerasActionType | GetCamerasActionType | GetCamerasErrorActionType | CamerasUpdatedActionType;

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

export const GET_SHOOTS = 'GET_SHOOTS';
export const GET_SHOOT = 'GET_SHOOT';
export const SET_SHOOTS = 'SET_SHOOTS';
export const ADD_SHOOT = 'ADD_SHOOT';
export const UPDATE_SHOOT = 'UPDATE_SHOOT';
export const DELETE_SHOOT = 'DELETE_SHOOT';
export const GET_SHOOTS_ERROR = 'GET_SHOOTS_ERROR';
export const SHOOTS_UPDATED = 'SHOOTS_UPDATED';

export interface GetShootsActionType {
  type: typeof GET_SHOOTS;
}

export interface GetShootActionType {
  type: typeof GET_SHOOT;
  id: string;
}

export interface SetShootsActionType {
  type: typeof SET_SHOOTS;
  shoots: Shoot[]
}

export interface AddShootActionType {
  type: typeof ADD_SHOOT;
  shoot: Shoot;
}

export interface UpdateShootActionType {
  type: typeof UPDATE_SHOOT;
  id: string;
  shoot: Shoot;
}

export interface DeleteShootActionType {
  type: typeof DELETE_SHOOT;
  id: string;
}


export interface GetShootsErrorActionType {
  type: typeof GET_SHOOTS_ERROR;
  error: string;
}

export interface ShootsUpdatedActionType {
  type: typeof SHOOTS_UPDATED;
}

export type ShootActionTypes = GetShootsActionType | GetShootActionType | SetShootsActionType| AddShootActionType | UpdateShootActionType | DeleteShootActionType | GetShootsErrorActionType | ShootsUpdatedActionType;