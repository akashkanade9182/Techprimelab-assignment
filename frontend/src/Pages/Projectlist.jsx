import React, { useState, useEffect } from 'react'
import "../Styles/Projectlist.css"
import { Select, Box, Text } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux"

import { getProject,getSearch,updateProject } from "../Redux/AppReducer/action"
import Load from '../Components/Load'
import PageBox from '../Components/PageBox'
import DrawerBox from '../Components/DrawerBox'

const Projectlist = () => {
  const [sort, setSort] = useState("");
  const currentPage=useSelector(store=>store.AppReducer.currentPage)
  const [page,setPage]=useState(currentPage)
  const[word,setWord]=useState("")
  const dispatch = useDispatch();
  const data = useSelector(store => store.AppReducer.data)
  const isLoading = useSelector(store => store.AppReducer.isLoading)



const handleChange=(e)=>{
  setWord(e.target.value)
let query={};
query.searchtext=word;
sort && (query.sort=sort);
page &&(query.page=page)
console.log(query)
setTimeout(()=>{
  dispatch(getSearch(query))
},1500)
}

const handleSort=(payload)=>{
  console.log("sort start")

    setSort(payload);
    let query={};
  query.sort=payload;
  word && (query.searchtext=word);
  page &&(query.page=page)
  console.log("dispatch start")
    dispatch(getSearch(query))
 


}

const handleUpdate=(id,payload)=>{
  let query={};
  sort && (query.sort=sort);
  word && (query.searchtext=word);
  page &&(query.page=page)
dispatch(updateProject(id,payload,query))
}


  useEffect(() => {
    dispatch(getProject(page));
    console.log("pagelistpage",page)
  }, [setPage,page])


  return (
    <div className="project-list">
      <div className="pp-box">
      <div className="feature-box">
        <div className="search-box">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2.5" stroke="#b9bcbf" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input type="search" onChange={(e)=>handleChange(e)} className="searchbar" placeholder="search" />
        </div>
        <div className="sort-box">
          <Text> Sort By : </Text>
          <Select w="auto" id="sort-select" value={sort} onChange={(e) => handleSort(e.target.value)}>
          <option value="">select option</option>
            <option value="priority">Priority</option>
            <option value="location">Locaton</option>
            <option value="reason">Reason</option>
            <option value="title">Project name</option>
            <option value="type">Type</option>
            <option value="division">Division</option>
            <option value="category">category</option>
            <option value="department">Department</option>

          </Select>
        </div>
        <DrawerBox handleSort={handleSort} setSort={setSort} />
      </div>
      <div className="tabel-box">
        <div className="heading-box">
          <div className="head-column">Project Name</div>
          <div className="head-column">Reason</div>
          <div className="head-column">Type</div>
          <div className="head-column">Division</div>
          <div className="head-column">Category</div>
          <div className="head-column">Priority</div>
          <div className="head-column">Department</div>
          <div className="head-column">Location</div>
          <div className="head-column">Status</div>
          <div className="head-column"></div>
        </div>
        <div className="body-box">
          {
            isLoading ? <Load /> : data.length === 0 ? <h1>  . . . No Project </h1> : data.map((ele, index) => (
              <div key={ele._id} className="card">
                <div className="card-column">
                  <h1 className="projecttitle">{ele.title}</h1>
                  <h1 className="projectdate">{ele.startDate} to {ele.endDate}</h1>
                </div>
                <div className="card-column" id="status-column-first">{ele.status}</div>

                <div className="card-column"><span className="title-span">Reason : </span>{ele.reason}</div>
                <div className="card-column"><span className="title-span">Type : </span>{ele.type}</div>
                <div className="card-column"><span className="title-span">Division : </span>{ele.division}</div>
                <div className="card-column"><span className="title-span">Category : </span>{ele.category}</div>
                <div className="card-column"><span className="title-span">Priority : </span>{ele.priority}</div>
                <div className="card-column"><span className="title-span">Department : </span>{ele.department}</div>
                <div className="card-column"><span className="title-span">Location : </span>{ele.location}</div>
                <div className="card-column" id="status-column-second"><span className="title-span">Status</span>{ele.status}</div>
                <div className="card-column">
                  <button onClick={()=>handleUpdate(ele._id,{status:"Start"})} className={ele.status==="Start"? "statusbtnactive" : "statusbtn"}>Start</button>
                  <button onClick={()=>handleUpdate(ele._id,{status:"Close"})} className={ele.status==="Close"? "statusbtnactive" : "statusbtn"}>Close</button>
                  <button onClick={()=>handleUpdate(ele._id,{status:"Cancel"})} className={ele.status==="Cancel"? "statusbtnactive" : "statusbtn"}>Cancel</button>
                </div>
              </div>
            ))
          }
        </div>
        <div className="page-component">
          <PageBox setPage={setPage}/>

        </div>
      </div>
      </div>
    </div>
  )
}

export default Projectlist