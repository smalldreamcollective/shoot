import { Camera } from "../../models/camera.model";

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
