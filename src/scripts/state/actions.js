import keyMirror from 'keymirror';

export const LayoutStyles = keyMirror({
  BLOCK: null,
  FLEX: null
});

export const ActionTypes = keyMirror({
  DYNAMIC_LIST_LAYOUT_CHANGED: null
});

export const ActionCreators = {
  // Protip: if the state you are updating is like a user preference such
  // as this case, you can write the value to cookie/localStorage and read
  // the persisted value in initial-state if/when the page is reloaded.
  // It's much better to do this here than in your reducers (for time-travel
  // purposes).
  dynamicListLayoutChanged: (layoutStyle) => ({ type: ActionTypes.DYNAMIC_LIST_LAYOUT_CHANGED, layoutStyle })
};
