import { Paper } from '@mui/material'
import React from 'react'
import EmployeeLeaveForm from './EmployeeLeaveForm'

export default function Leave() {
  return (
    <div>
        <Paper sx={{pl:"3%",m:'2%'}}>
        <EmployeeLeaveForm/>
        </Paper>
    </div>
  )
}
