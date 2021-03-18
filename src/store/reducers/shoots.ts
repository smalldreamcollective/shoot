import * as actionTypes from '../action_types';
import { updateObject } from '../../shared/utility';

const initialState = {
  shoots: null,
  isUpdating: false
};

const setShoots = (state = initialState, action: actionTypes.SetShootsActionType) => {
  return updateObject(state, {
    shoots: action.shoots
  });
}

const addShootStart = (state = initialState) => {
  return updateObject(state, {
    isUpdating: true
  });
}

const addShootSuccess = (state = initialState) => {
  return updateObject(state, {
    isUpdating: false
  });
}

const reducer = (state = initialState, action: actionTypes.ShootActionTypes) => {
  console.log(action)
  switch(action.type) {
    case actionTypes.SET_SHOOTS: return setShoots(state, action);
    case actionTypes.ADD_SHOOT_START: return addShootStart(state);
    case actionTypes.ADD_SHOOT_SUCCESS: return addShootSuccess(state);
    default: return state;
  }
};

export default reducer;