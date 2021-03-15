import { combineReducers } from 'redux';
import plannerReducer from './planner';
import filmReducer from './film';
import camerasReducer from './cameras';
import shootsReducer from './shoots';

const rootReducer = combineReducers({
  planner: plannerReducer,
  film: filmReducer,
  cameras: camerasReducer,
  shoots: shootsReducer
});

export type RootState = ReturnType<typeof rootReducer>;