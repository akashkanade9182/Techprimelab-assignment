import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from './Dashboard'
import Formpage from './Formpage'
import Projectlist from './Projectlist'
import Login from './Login'
import Sidebar from '../Components/Sidebar'
const AllRoutes = () => {
  return (
     <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/dashboard" element={<Sidebar><Dashboard/></Sidebar>} />
     <Route path="/formpage" element={<Sidebar><Formpage /></Sidebar>} />
     <Route path="/projects" element={<Sidebar><Projectlist/></Sidebar>} />


</Routes>
  )
}

export default AllRoutes