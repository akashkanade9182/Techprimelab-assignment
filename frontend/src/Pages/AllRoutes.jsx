import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from './Dashboard'
import Formpage from './Formpage'
import Projectlist from './Projectlist'
import Login from './Login'
import Sidebar from '../Components/Sidebar'
import PrivateRoute from './PrivateRoute'
const AllRoutes = () => {
  return (
     <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/dashboard" element={<PrivateRoute><Sidebar><Dashboard/></Sidebar></PrivateRoute>} />
     <Route path="/formpage" element={<PrivateRoute><Sidebar><Formpage /></Sidebar></PrivateRoute>} />
     <Route path="/projects" element={<PrivateRoute><Sidebar><Projectlist/></Sidebar></PrivateRoute>} />


</Routes>
  )
}

export default AllRoutes