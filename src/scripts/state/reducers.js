import combineReducers from 'redux/lib/combineReducers';
import initialState from './initial-state';
import { ActionTypes } from './actions';

function dynamicListLayout(state = initialState.dynamicListLayout, action) {
  switch (action.type) {
    case ActionTypes.DYNAMIC_LIST_LAYOUT_CHANGED:
      return action.layoutStyle;
    default:
      return state;
  }
}

export default combineReducers({
  dynamicListLayout
});
