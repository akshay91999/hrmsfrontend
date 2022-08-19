import React from 'react'
import {Routes,Route } from 'react-router-dom' 
import { Box } from '@mui/material'
import Basic from '../../Pages/Addemployee/Basic'
import Footer from '../Footer/Footer'
import Hello from '../../Pages/Hello'
import Academic from '../../Pages/Addemployee/Academic'
import PageNotfound from '../../Pages/PageNotfound'
import Exp from '../../Pages/Addemployee/Exp'
import Upld from '../../Pages/Addemployee/Upld'
import Skills from '../../Pages/Addemployee/Skills'
import Job from '../../Pages/Addemployee/Job'
import EmployeeList from '../../Pages/Viewemployee/EmployeeList'
import EmployeeDetail from '../../Pages/Viewemployee/EmployeeDetail'
import Register from '../../Pages/Addemployee/Register'
import Vaccancy from '../../Pages/Recruitmentmanagement.jsx/Departmenthead/Vaccancy'
import Vaccancyview from '../../Pages/Recruitmentmanagement.jsx/HR/Vaccancyview'
import Datagridfilter from '../../Pages/Recruitmentmanagement.jsx/Departmenthead/Gatagridfilter'
import HrTaskManage from '../../Pages/HrtaskmgmntModule/HrTaskManage'
import HrEmployeeIndividualTask from '../../Pages/HrtaskmgmntModule/HrEmployeeIndividualTask'
import DepartmentHeadTaskManage from '../../Pages/HodTaskMngmntModule/DepartmentHeadTaskManage'
import HodEmployeeIndividualTask from '../../Pages/HodTaskMngmntModule/HodEmployeeIndividualTask'
import DepartmentHeadAssignTaskForm from '../../Pages/HodTaskMngmntModule/DepartmentHeadAssignTaskForm'
import TotalTaskTable from '../../Components/TaskTables/TotalTaskTable'
import MyTask from '../../Pages/MyTaskMngmntModule/MyTask'
import PopUp from '../../Components/Reusablecomponents/PopUp'
import CompletedTaskTable from '../../Components/TaskTables/CompletedTaskTable'
import OngoingTaskTable from '../../Components/TaskTables/OngoingTaskTable'
import MyAssignedTaskTable from '../../Pages/MyTaskMngmntModule/MyAssignedTaskTable'
import DashboardEmploy from '../../Pages/Employee/Dashboard/DashboardEmploy'
import Tableshortlisted from '../../Pages/Recruitmentmanagement.jsx/Recruiters/Tableshortlisted'
import TableSelectedCandidate from '../../Pages/Recruitmentmanagement.jsx/Recruiters/TableSelectedCandidate'
import DashLeaveUsedRemainInDetail from '../LeaveUsedRemainInDetail'
import LeaveUsedRemainInDetail from '../LeaveUsedRemainInDetail'
import TableSelectedList from '../../Pages/Recruitmentmanagement.jsx/HR/TableSelectedList'
import AddCandidate from '../../Pages/Recruitmentmanagement.jsx/Recruiters/AddCandidate'
import Vacancytofilled from '../../Pages/Recruitmentmanagement.jsx/HR/Vacancytofilled'
import VacancyToBeFilled from '../../Pages/Recruitmentmanagement.jsx/Departmenthead/VacancyToBeFilled'


function Boxminidrawer() {
  return (
    <>
     <Box sx={{width:'100%' }}>
       <Box className='content-container' component="main" sx={{ flexGrow: 1, pt: 8,minHeight:'95vh'}}>
        
            <Routes>
                <Route path="/addemployee" element={<Basic/>} />
                {/* dashboard employee */}
                <Route path="/" element={<DashboardEmploy/>} />
                <Route path="/academic" element={<Academic/>} />
                <Route path="/experience" element={<Exp/>} />
                <Route path="/upload" element={<Upld/>} />
                <Route path="/skill" element={<Skills/>} />
                <Route path="/jobdetails" element={<Job/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/viewemployee" element={<EmployeeDetail/>} />
                <Route path="/employeelist" element={<EmployeeList/>} />

                {/* Recruitment management */}
                <Route path="/addvaccancy" element={<Vaccancy/>} />
                <Route path="/viewvaccancy" element={<Vaccancyview/>} />
                <Route path="/candidatelist" element={<Tableshortlisted/>} />
                <Route path="/selectedcandidatelist" element={<TableSelectedCandidate/>} />
                <Route path="/selectedlist" element={<TableSelectedList/>} />
                <Route path="/addcandidate" element={<AddCandidate/>} />
                <Route path="/vacancytobefilled" element={<Vacancytofilled/>} />
                <Route path="/vacancytobefilledrecruiters" element={<VacancyToBeFilled/>} />
                <Route path="/*" element={<PageNotfound/>} />

              {/* Task management */}
                <Route path='/hrtaskmange' element={<HrTaskManage />} />
                <Route path='/hremployeeindividualtask' element={<HrEmployeeIndividualTask />} />
                <Route path='/departmentheadtaskmanage' element={<DepartmentHeadTaskManage />} />
                <Route path='/hodemployeeindividualtask' element={<HodEmployeeIndividualTask />} />
                <Route path='/departmentheadtaskassign' element={<DepartmentHeadAssignTaskForm />} />
                <Route path='/mytask' element={<MyTask />} />
                <Route path='/popup' element={<PopUp />} />

                <Route path='/totaltasktable' element={<TotalTaskTable />} />
                <Route path='/completedtasktable' element={<CompletedTaskTable />} />
                <Route path='/ongoingtasktable' element={<OngoingTaskTable />} />
                <Route path='/myassignedtasktable' element={<MyAssignedTaskTable />} />
                {/* check  in check out */}
                {/* <Route path='/' element={<CheckInCheckOut />} /> */}

              {/* leaveused remain */}
                <Route path="//LeaveUsedRemainInDetail" element={<LeaveUsedRemainInDetail/>} />
                  </Routes>
              
        {/* <Footer/>  */}
      </Box>
      <Footer/> 
      </Box>
    </>
  )
}

export default Boxminidrawer
