import * as types from "./actionTypes"



const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,

};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
     
        isError: false

      };
    case types.LOGIN_FAILURE:
      return {
        isAuth: false,
        isLoading: false,
        isError: true,
    
      }
 

    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: false,
       
      }
    default: return state;
  }


};

export { reducer };
