import { Camera } from "../../models/camera.model";

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