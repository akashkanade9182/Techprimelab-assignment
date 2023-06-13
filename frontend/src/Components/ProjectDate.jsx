import React from 'react'
import "../Styles/ProjectDate.css"


const ProjectDate = ({startDate,endDate}) => {
const monthArray=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Acto","Nov","Dec"]
const startDay=startDate.split("-");
const endDay=endDate.split("-")
  return (
<h1 className="projectdate">{monthArray[Number(startDay[1])]} {startDay[2]},{startDay[0]} to {monthArray[Number(startDay[1])]} {endDay[2]},{endDay[0]} </h1>
  )
}

export default ProjectDate;