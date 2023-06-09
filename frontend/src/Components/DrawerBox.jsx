import React from 'react'
import {
     Drawer,
     DrawerBody,
     DrawerFooter,
     DrawerHeader,
     DrawerOverlay,
     DrawerContent,
     DrawerCloseButton,useDisclosure,Button
   } from '@chakra-ui/react'
import { BsFilterLeft } from "react-icons/bs";
import "../Styles/DrawerBox.css"




const DrawerBox = ({setSort,handleSort}) => {
     const { isOpen, onOpen, onClose } = useDisclosure()

     const handleClick=(e)=>{
          handleSort(e.target.id)
          console.log(e.target.id)
          onClose()
     }


  return (
   <>
    <button  className="drawer-btn" colorScheme='teal' onClick={onOpen}>
    <BsFilterLeft size={"30px"} />
      </button>
      <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
        p="20px 20px"
      >
        <DrawerOverlay />
        <DrawerContent  p="20px 20px">
        <h1 style={{fontSize:"20px",fontWeight:"bold"}}>Sort Project By</h1>
          <DrawerCloseButton />

          <DrawerBody className="drawer-body">
          <div   style={{marginTop:"10px",cursor:"pointer"}}  onClick={(e)=>handleClick(e)} id="priority">Priority</div>
            <div  style={{marginTop:"10px",cursor:"pointer"}}  onClick={(e)=>handleClick(e)} id="location">Locaton</div>
            <div  style={{marginTop:"10px",cursor:"pointer"}} onClick={(e)=>handleClick(e)}  id="reason">Reason</div>
            <div style={{marginTop:"10px",cursor:"pointer"}}  onClick={(e)=>handleClick(e)}  id="title">Project name</div>
            <div style={{marginTop:"10px",cursor:"pointer"}}  onClick={(e)=>handleClick(e)}  id="type">Type</div>
            <div  style={{marginTop:"10px",cursor:"pointer"}} onClick={(e)=>handleClick(e)}  id="division">Division</div>
            <div  style={{marginTop:"10px",cursor:"pointer"}} onClick={(e)=>handleClick(e)}  id="category">category</div>
            <div  style={{marginTop:"10px",cursor:"pointer"}}  onClick={(e)=>handleClick(e)} id="department">Department</div>
               
          </DrawerBody>

          
        </DrawerContent>
      </Drawer></>
  )
}

export default DrawerBox;