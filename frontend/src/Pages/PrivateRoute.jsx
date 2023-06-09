import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate,useNavigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
     const navigate=useNavigate("/")
 const isAuth=useSelector(store=>store.AuthReducer.isAuth);
 if(!isAuth){
     return  <Navigate to ="/"  />
   }
     return children;

}

export default PrivateRoute