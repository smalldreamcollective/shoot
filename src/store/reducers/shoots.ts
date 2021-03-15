import * as actionTypes from '../action_types';
import { updateObject } from '../../shared/utility';

const initialState = {
  shoots: null
};


const setShoots = (state = initialState, action: actionTypes.SetShootsActionType) => {
  const updatedState = {
    shoots: action.shoots
  };
  console.log(action)

  return updateObject(state, updatedState);
}

const reducer = (state = initialState, action: actionTypes.ShootActionTypes) => {
  switch(action.type) {
    case actionTypes.SET_SHOOTS: return setShoots(state, action);
    default: return state;
  }
};

export default reducer;