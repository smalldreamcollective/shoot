import * as actionTypes from '../action_types';
import { Shoot } from '../../models/shoot.model';

export const getShoots = () => {
  console.log('GET shoots')
  return {
    type: actionTypes.GET_SHOOTS
  };
};

export const getShoot = (shoot_id: string) => {
  return {
    type: actionTypes.GET_SHOOT,
    id: shoot_id
  }; 
};

export const setShoots = (shoots: Shoot[]) => {
  console.log('SET shoots')
  console.log(shoots)
  return {
    type: actionTypes.SET_SHOOTS,
    shoots: shoots
  }
}

export const addShoot = (shoot: Shoot) => {
  return {
    type: actionTypes.ADD_SHOOT,
    shoot: shoot
  };
};

export const updateShoot = (shoot_id: string, shoot: Shoot) => {
  return {
    type: actionTypes.UPDATE_SHOOT,
    id: shoot_id,
    shoot: shoot
  };
};

export const deleteShoot = (shoot_id: string) => {
  return {
    type: actionTypes.DELETE_SHOOT,
    id: shoot_id
  };
};

export const getShootsError = (error: string) => {
  return {
    type: actionTypes.GET_SHOOTS_ERROR,
    error: error
  };
};

export const shootsUpdated = () => {
  console.log('shoots UPDATED')
  return {
    type: actionTypes.SHOOTS_UPDATED
  };
};
