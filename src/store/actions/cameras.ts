import * as actionTypes from '../action_types';
import { Camera } from '../../models/camera.model';

export const getCameras = () => {
  return {
    type: actionTypes.GET_CAMERAS
  }  
};

export const setCameras = (cameras: Camera[]) => {
  return {
    type: actionTypes.SET_CAMERAS,
    cameras: cameras
  };
};

export const getCamerasError = () => {
  return {
    type: actionTypes.GET_CAMERAS_ERROR
  };
};

export const camerasUpdated = () => {
  return {
    type: actionTypes.CAMERAS_UPDATED
  };
};