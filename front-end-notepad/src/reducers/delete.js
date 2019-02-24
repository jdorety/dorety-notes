import { WAIT_ON_DELETE, DELETE_SUCCESS, DELETE_FAILURE } from "../actions";

const initialState = {
  deleteError: "",
  deleteInProgress: false,
  deleteSuccess: false
};

export const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case WAIT_ON_DELETE:
      return {
        ...state,
        deleteInProgress: true,
        deleteSuccess: false,
        deleteError: ""
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        deleteInProgress: false,
        deleteSuccess: true,
        deleteError: ""
      };
    case DELETE_FAILURE:
      return {
        ...state,
        deleteInProgress: false,
        deleteSuccess: false,
        deleteError: action.error
      };
    default:
      return state;
  }
};
