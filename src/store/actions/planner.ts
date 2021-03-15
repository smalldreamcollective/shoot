import * as actionTypes from '../action_types';
import { Camera } from '../../models/camera.model';

export const addCamera = (camera: Camera) => {
  return {
    type: actionTypes.ADD_CAMERA,
    camera: camera
  }
};

export const addFilm = (filmName: string) => {
  return {
    type: actionTypes.ADD_FILM,
    film: filmName
  }  
};

export const isoSelected = (iso: string) => {
  return {
    type: actionTypes.ISO_SELECTED,
    iso: iso
  };
}