

import * as types from "./actionType"


const initialState = {
  data: {},
  datasetOne: [],
  datasetTwo: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
        datasetOne: payload.datasetOne,
        datasetTwo: payload.datasetTwo,
        isError: false
      }
   
  
    default: return state;
  }

};


export { reducer }