import { SET_USER, CLEAR_USER } from '../actions/actionTypes';

const initialState = {
  user: null,
  userId: null,
  userName: null,
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        userId: action.payload.user.id,
        userName: action.payload.user.user_metadata.full_name, // Assuming the user name is stored in user_metadata
        isAuthenticated: true,
      };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        userId: null,
        userName: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
