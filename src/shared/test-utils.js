// test-utils.js
import { render as rtlRender } from '@testing-library/react'
import { combineReducers,createStore } from 'redux'
import { Provider } from 'react-redux'

import plannerReducer from '../store/reducers/planner';
import filmReducer from '../store/reducers/film';
import camerasReducer from '../store/reducers/cameras';
import shootsReducer from '../store/reducers/shoots';

const rootReducer = combineReducers({
  planner: plannerReducer,
  film: filmReducer,
  cameras: camerasReducer,
  shoots: shootsReducer
});

function render(
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }