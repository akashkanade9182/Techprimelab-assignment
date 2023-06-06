

import * as types from "./actionType"


const initialState = {
  data: [],
  totalPages: "",
  totalCount: "",
  currentPage: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PROJECT_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_PROJECT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
        totalPages: payload.totalPages,
        totalCount: payload.totalCount,
        currentPage: payload.currentPage,
        isError: false
      }
    case types.GET_PROJECT_FAILURE:
      return {
        isLoading: false,
        data: [],
        totalPages: "",
        totalCount: "",
        currentPage: "",
        isError: true
      }
      case types.UPDATE_PROJECT_REQUEST:
        return {
          ...state,
          isLoading: true
        }
      case types.UPDATE_PROJECT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: payload.data,
          totalPages: payload.totalPages,
          totalCount: payload.totalCount,
          currentPage:payload.currentPage,
          isError: false
        }
      case types.UPDATE_PROJECT_FAILURE:
        return {
          isLoading: false,
          data: [],
          totalPages: "",
          totalCount: "",
          isError: true
        }
  
    default: return state;
  }

};


export { reducer }