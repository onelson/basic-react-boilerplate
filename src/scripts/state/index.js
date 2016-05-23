import createStore from 'redux/lib/createStore';
import initialState from './initial-state';
import rootReducer from './reducers';

export default function configureStore() {
  const devTools = (process.env.NODE_ENV === 'development' && global.devToolsExtension
      ? global.devToolsExtension()
      : undefined);
  return createStore(rootReducer, initialState, devTools);

}
