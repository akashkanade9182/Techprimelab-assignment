import React, { useEffect,useState } from 'react'
import "../Styles/Sidebar.css"
import { Link, useParams, useLocation } from "react-router-dom"
import { ReactComponent as Logouticon } from '../assets/Logout.svg';
import { ReactComponent as Dashboardicon } from '../assets/Dashboard.svg';
import { ReactComponent as DashboardActiveicon } from '../assets/Dashboard-active.svg';
import { ReactComponent as Listicon } from '../assets/Project-list.svg';
import { ReactComponent as ListActiveicon } from '../assets/Project-list-active.svg';
import { ReactComponent as Createicon } from "../assets/create-project.svg";
import { ReactComponent as CreateActiveicon } from "../assets/create-project-active.svg";
import { ChevronLeftIcon } from "@chakra-ui/icons"
import { ReactComponent as Logoicon } from '../assets/Logo.svg';


const pathname = ["/dashboard", "/projects", "/formpage"];
const title = ["Dashboard", "Project Listing", "Create Project"]

const Sidebar = ({ children }) => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const [page,setPage]=useState(currentUrl.split("/")[1])
 


useEffect(()=>{

},[])

  return (
    <div className='sidebar'>
      <div className='sidebar-box'>
        <div className="iconpad-box">
          <div className="iconpad">
            <div onClick={()=>setPage("dashboard")}>
              <Link to="/dashboard">
              {
                  page==="dashboard"?<DashboardActiveicon/>:<Dashboardicon/>
              }
                </Link>
            </div>
            <div onClick={()=>setPage("projects")}>
              <Link to="/projects">
                {
                  page==="projects"?<ListActiveicon/>:<Listicon/>
                }
              
                </Link>
            </div>
            <div onClick={()=>setPage("formpage")}>
           
              <Link to="/formpage">
              {
                  page==="formpage"?<CreateActiveicon/>:<Createicon/>
              }
              </Link>
            </div>

          </div>

        </div>
        <div className="logout-box">
          <Logouticon />
        </div>

      </div>
      <div className='child-box'>
        <header className='sidebar-header'>
          <div className="page-heading-box">
            <h1 className='page-heading'><ChevronLeftIcon boxSize="1.5em" />  {title[pathname.indexOf(currentUrl)]}</h1>

          </div>
          <div className="sidebar-logo">
            <div className='sidebar-logo-box'></div>
            <div className="top-logout-box">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
  <path d="M9 12h12l-3 -3" />
  <path d="M18 15l3 -3" />
</svg>
            </div>
          </div>
        </header>
        <div className='mainbox'>
        {children}
        </div>
        
      </div>



    </div>
  );
}

export default Sidebar
