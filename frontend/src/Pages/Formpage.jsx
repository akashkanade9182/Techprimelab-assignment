import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import Sidebar from '../Components/Sidebar'
import "../Styles/Formpage.css"
import { Input, Select, FormHelperText, FormErrorMessage, FormLabel, FormControl, InputGroup, InputRightElement, Box, Button, Hide } from '@chakra-ui/react'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import axios from "axios"
import {format,parse} from "date-fns"


const postData=(payload)=>{
     return axios.post("https://rich-erin-sturgeon-suit.cyclic.app/project/add",payload)
}



const Formpage = () => {
     const[load,setLoad]=useState(false)
     const [istitle, setisTitle] = useState(false);
     const [title, setTitle] = useState("");
     const [startDate, setStartDate] = useState("");
     const [endDate, setEndDate] = useState("");
     const [isendDate,setisEndDate]=useState(false);
     const [reason, setReason] = useState("");
     const [type, setType] = useState("");
     const [division, setDivision] = useState("");
     const [category, setCategory] = useState("");
     const [priority, setPriority] = useState("");
     const [department, setDepartment] = useState("");
     const [location, setLocation] = useState("");




     const handleTitleChange = (e) => {
          if (e.target.value !== "") {
               setisTitle(false);
               setTitle(e.target.value)
          } else {
               setTitle(e.target.value)
          }
     }

     const handleStartDateChange = (e) => {
        setStartDate(e.target.value)
     }

     const handleEndDateChange = (e) => {
          if(startDate<e.target.value){
               setisEndDate(false)
               setEndDate(e.target.value)
               
          }
          else{
               setisEndDate(true)
          }
     }

     const handleSubmit=()=>{
          if(istitle===""){
               setisTitle(true)
          }
          else{
               setLoad(true);
               if(startDate){
                    var sdate = parse(startDate, 'yyyy-MM-dd', new Date());
                    var modeStartdate=format(sdate, 'MMMM d, yyyy');
               }
               if(endDate){
                    var edate = parse(endDate, 'yyyy-MM-dd', new Date());
                    var modeEnddate=format(edate, 'MMMM d, yyyy');
     
               }
              let data={
               title,
               reason,type,division,
               category,priority,department,
               startDate:modeStartdate,
               endDate:modeEnddate,
               location
              }
            

              postData(data).then((r)=>{
               setLoad(false)
               alert("project added successfully");
               setTitle("");
               setReason("");
               setType("")
               setDivision("");
                setCategory("");
                setPriority("");
                setStartDate("");
                setEndDate("");
                setLocation("")
               
              })
              .catch((e)=>{
               setLoad(false)
               console.log(e);
               alert("error in project adding")
              })        
          }
          
     }


     return (
          <div className="formpage">
               <div className="title-box">
                    <FormControl  w={["100%","60%","60%","60%"]}  mt="30px" isInvalid={istitle}>
                         <Input value={title}  border="0.5px solid #8a8a8a" h="70px" placeholder="Enter Project Theme" type='email' value={title} onChange={handleTitleChange} />
                         {!istitle ? (
                              <FormHelperText h="10px" >
                              </FormHelperText>
                         ) : (
                              <FormErrorMessage color="red">Project Theme required.</FormErrorMessage>
                         )}
                    </FormControl>
                    {
                         load?<div className="custom-loader"></div>:<button onClick={handleSubmit} className="project-save-btn">Save Project</button>

                    }
               </div>

               <div className="form-grid-box">
                    <div>
                         <FormLabel fontSize="15px" color="#8a8a8a">Reason</FormLabel>
                         <Select value={reason} h="50px" border="0.5px solid #8a8a8a" onChange={(e) => setReason(e.target.value)} placeholder='Select option'>
                              <option value='Buisness'>For Buisness</option>
                              <option value='Dealership'>Dealership</option>
                              <option value='Transport'>Transport</option>
                         </Select>
                    </div>
                    <div>
                         <FormLabel fontSize="15px" color="#8a8a8a">Type</FormLabel>
                         <Select value={type} h="50px" border="0.5px solid #8a8a8a" onChange={(e) => setType(e.target.value)} placeholder='Select option'>
                              <option value='Internal'>Internal</option>
                              <option value='External'>External</option>
                              <option value='Vendor'>Vendor</option>
                         </Select>
                    </div>
                    <div>
                         <FormLabel fontSize="15px" color="#8a8a8a">Division</FormLabel>
                         <Select value={division} h="50px" border="0.5px solid #8a8a8a" onChange={(e) => setDivision(e.target.value)} placeholder='Select option'>
                              <option value='buisness'>For Buisness</option>
                              <option value='Compressor'>Compressor</option>
                              <option value='Filters'>Filters</option>
                              <option value='Pumps'>Pumps</option>
                              <option value='Glass'>Glass</option>
                         </Select>
                    </div>
                    <div>
                         <FormLabel fontSize="15px" color="#8a8a8a">Category</FormLabel>
                         <Select value={category} h="50px" border="0.5px solid #8a8a8a" onChange={(e) => setCategory(e.target.value)} placeholder='Select option'>
                              <option value='Qaulity A'>Qaulity A</option>
                              <option value='Qaulity B'>Qaulity B</option>
                              <option value='Qaulity C'>Qaulity C</option>
                              <option value='Qaulity D'>Qaulity D</option>
                         </Select>
                    </div>
                    <div>
                         <FormLabel fontSize="15px" color="#8a8a8a">Priority</FormLabel>
                         <Select value={priority} h="50px" border="0.5px solid #8a8a8a" onChange={(e) => setPriority(e.target.value)} placeholder='Select option'>
                              <option value='High'>High</option>
                              <option value='Medium'>Medium</option>
                              <option value='Low'>Low</option>
                         </Select>
                    </div>
                    <div>
                         <FormLabel fontSize="15px" color="#8a8a8a">Department</FormLabel>
                         <Select value={department} h="50px" border="0.5px solid #8a8a8a" onChange={(e) => setDepartment(e.target.value)} placeholder='Select option'>
                              <option value='Strategy'>Strategy</option>
                              <option value='Hr'>Hr</option>
                              <option value='Finance'>Finance</option>
                              <option value='Quality'>Quality</option>
                              <option value='Stores'>Production</option>
                              <option value='Production'>Production</option>
                              <option value='Maintenance'>Maintenance</option>
                         </Select>
                    </div>
                    <div>
                         <FormLabel fontSize="15px" color="#8a8a8a">Start Date as per Project Plan</FormLabel>
                         <Input className="date-picker" value={startDate} 
                         h="50px" border="0.5px solid #8a8a8a"
                          type="date" onChange={handleStartDateChange} />
                    </div>
                    <div>
                    <FormControl  isInvalid={isendDate}>

                         <FormLabel fontSize="15px" color="#8a8a8a">End Date as per Project Plan</FormLabel>
                         <Input className="date-picker" value={endDate} type="date" border="0.5px solid #8a8a8a" h="50px" onChange={handleEndDateChange} />
                         {!isendDate ? (
                              <FormHelperText h="10px" >
                              </FormHelperText>
                         ) : (
                              <FormErrorMessage color="red">Please Select Date greater than Start Date</FormErrorMessage>
                         )}
                         </FormControl>
                    </div>
                    <div>
                         <FormLabel fontSize="15px" color="#8a8a8a">Location</FormLabel>
                         <Select value={location} h="50px" border="0.5px solid #8a8a8a" onChange={(e) => setLocation(e.target.value)} placeholder='Select option'>
                              <option value='Pune'>Pune</option>
                              <option value='Mumbai'>Mumbai</option>
                              <option value='Delhi'>Delhi</option>
                              <option value='Hydrabad'>Hydrabad</option>
                              <option value='Banglore'>Banglore</option>
                         </Select>
                    </div>

               </div>

               <div className='small-gridbox'>
                    <div></div>
                    <div></div>
                    <div style={{ display: "flex", justifyContent: "flex-start" }}>
                         <h1><span style={{ color: "#8a8a8a" }}>Status: </span><span >Registered</span></h1>
                    </div>
               </div>
               <div>
                    <button className='bottom-save-btn'>Save Project</button>
               </div>
          </div>
     )
}

export default Formpage