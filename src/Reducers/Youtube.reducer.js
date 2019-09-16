import { PLAYLIST_REQUEST, PLAYLIST_SUCCESS } from '../Actions/Youtube.actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case PLAYLIST_REQUEST:
      return { ...state, loading: true };
    case PLAYLIST_SUCCESS:
      const { items, pageInfo } = action.items;
      return { ...state, items: items, pageInfo: pageInfo.totalResults, loading: false };
    default:
      return state;
  }
};

export default reducer;

