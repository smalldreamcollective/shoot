import { Shoot } from "../../models/shoot.model";

export const GET_SHOOTS = 'GET_SHOOTS';
export const GET_SHOOT = 'GET_SHOOT';
export const SET_SHOOTS = 'SET_SHOOTS';
export const ADD_SHOOT = 'ADD_SHOOT';
export const ADD_SHOOT_SUCCESS = 'ADD_SHOOT_SUCCESS';
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
  shoots: Shoot[];
}

export interface AddShootActionType {
  type: typeof ADD_SHOOT;
  shoot: Shoot;
}

export interface AddShootSuccessActionType {
  type: typeof ADD_SHOOT_SUCCESS;
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

export type ShootActionTypes = GetShootsActionType | GetShootActionType | SetShootsActionType| AddShootActionType | AddShootSuccessActionType | UpdateShootActionType | DeleteShootActionType | GetShootsActionType | ShootsUpdatedActionType;