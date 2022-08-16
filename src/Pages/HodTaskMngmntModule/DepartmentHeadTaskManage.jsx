import React from 'react'
import TaskEmployeeTable from '../../Components/TaskTables/TaskEmployeeTable'
import { useNavigate } from 'react-router-dom'

function DepartmentHeadTaskManage() {
  let navigate = useNavigate()
  return (
    <TaskEmployeeTable click={() =>navigate("/hodemployeeindividualtask")}/>
  )
}

export default DepartmentHeadTaskManage