
import { youtubeService } from '../Services/Youtube.service.';
export const PLAYLIST_REQUEST = 'PLAYLIST_REQUEST';
export const PLAYLIST_SUCCESS = 'PLAYLIST_SUCCESS';
export const PLAYLIST_FAILURE = 'PLAYLIST_FAILURE';

export const youtubeActions = {
  getVideos
}

function getVideos(maxResults) {
  return dispatch => {
    dispatch(request());

    return youtubeService.fetchItems(maxResults)
      .then(
        items => {
          return dispatch(success(items))
        },
        error => {
          return dispatch(failure(error.toString()))
        }
      );
  };
}

function request(items) { return { type: PLAYLIST_REQUEST, items } }
function success(items) { return { type: PLAYLIST_SUCCESS, items } }
function failure(error) { return { type: PLAYLIST_FAILURE, error } }