import {
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE
} from '../actions/actionTypes';

const initialState = {
  userProfile: "",
  userName: "",
  imageUrl: "",
  error: ""
}

export default (background = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGE_SUCCESS:
      return Object.assign({}, background, {
        userProfile: action.backgroundData.userProfile,
        userName: action.backgroundData.userName,
        imageUrl: action.backgroundData.imageUrl
      });
    case FETCH_IMAGE_FAILURE:
      return Object.assign({}, background, {
        error: action.errorMessage
      });
    default:
      return background;
  }
};
