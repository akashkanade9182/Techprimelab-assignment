import axios from "axios"
import * as types from "./actionType"

const getProject = (page) => (dispatch) => {
  dispatch({ type: types.GET_PROJECT_REQUEST })
  return axios.get("https://rich-erin-sturgeon-suit.cyclic.app/project/getall",{params:{page}}).then((r) => {
    dispatch({ type: types.GET_PROJECT_SUCCESS, payload: r.data })

  }).catch((e) => {
    dispatch({ type: types.GET_PROJECT_FAILURE })
  })
}


const getSearch=(payload)=>(dispatch)=>{
  dispatch({type:types.GET_SEARCH_REQUEST})
  return axios.get("https://rich-erin-sturgeon-suit.cyclic.app/project/search",{params:payload}).then((r) => {
    dispatch({ type: types.GET_PROJECT_SUCCESS, payload: r.data })
     console.log("work")
  }).catch((e) => {
    console.log(e)
    dispatch({ type: types.GET_PROJECT_FAILURE })
  })

}

const sortProject=(payload)=>(dispatch)=>{
  dispatch({type:types.GET_SEARCH_REQUEST})
  return axios.get("https://rich-erin-sturgeon-suit.cyclic.app/project/sorting",{params:payload}).then((r) => {
    dispatch({ type: types.GET_PROJECT_SUCCESS, payload: r.data })
  }).catch((e) => {
    console.log(e)
    dispatch({ type: types.GET_PROJECT_FAILURE })
  })
}



const updateProject=(id,payload,query)=>(dispatch)=>{

  // dispatch({type:types.UPDATE_PROJECT_REQUEST})
  return axios.patch(`https://rich-erin-sturgeon-suit.cyclic.app/project/update/${id}`,payload,{params:query}).then((r) => {

    dispatch({ type: types.UPDATE_PROJECT_SUCCESS, payload: r.data })

  }).catch((e) => {
    console.log(e)
    dispatch({ type: types.UPDATE_PROJECT_FAILURE })
  })

}


// const getTransection = (id) => (dispatch) => {
//   console.log(id)
//   dispatch({ type: types.GET_PROJECT_REQUEST });
//   return axios.get(`https://odd-ruby-angelfish-wear.cyclic.app/account/gettransection/${id}`).then((r) => {
//     dispatch({ type: types.GET_PROJECT_SUCCESS, payload: r.data })
//   })
//     .catch((e) => {
//       dispatch({ type: types.GET_PROJECT_FAILURE })
//       console.log(e)
//     })
// }

// const getAccounts = (token) => (dispatch) => {

//   const options = {
//     url: 'https://odd-ruby-angelfish-wear.cyclic.app/user/getalluser',
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json;charset=UTF-8',
//       'Authorization': `bearer ${token}`
//     },

//   };
//   dispatch({ type: types.GET_PROJECT_REQUEST });
//   return axios(options).then((r) => {
//     dispatch({ type: types.GET_PROJECT_SUCCESS, payload: r.data })
//   })
//     .catch((e) => {
//       dispatch({ type: types.GET_PROJECT_FAILURE })
//       console.log(e)
//     })
// }

export { getProject,getSearch,updateProject}
