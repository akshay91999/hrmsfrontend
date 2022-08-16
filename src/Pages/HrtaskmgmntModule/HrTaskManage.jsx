import React from 'react'
import { useNavigate } from 'react-router-dom'
import TaskEmployeeTable from '../../Components/TaskTables/TaskEmployeeTable'
function HrTaskManage() {
    let navigate = useNavigate()
  return (
    <div>
        <TaskEmployeeTable click={() =>navigate("/hremployeeindividualtask")}/>
        
    </div>
  )
}

export default HrTaskManage