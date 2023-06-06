import * as types from "./actionTypes"
import axios from "axios"
import { useNavigate } from 'react-router-dom';



const getLogin = (payload, navigate) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST })

  return axios.post("http://localhost:7000/projectuser/login", payload).then((r) => {
    dispatch({type:types.LOGIN_SUCCESS})
    if(r.data.Success===true){
      navigate("/dashboard")
    }
    else{
      alert(`${r.data.Message}`)
      dispatch({type:types.LOGIN_FAILURE})
    }

  }).catch((e) => {
    console.log(e)
    dispatch({ type: types.LOGIN_FAILURE })
    alert("error in login")
   
  })
}



const handleLogout =()=>(dispatch) => {
  dispatch({ type: types.LOGOUT_SUCCESS })
}






export { getLogin, handleLogout };