import { SET_CURRENT_USER } from "../actions/types";

// Validation
import isEmpty from "../validation/is-empty";

const initialState = {
  isAuthenticate: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticate: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
