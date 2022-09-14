import { Button } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';
export default function EditDeleteTrip(props) {
  const {id}=props
    const params=useParams();

    let navigate=useNavigate()

  return (
    <>
         <Button sx={{color:"#4D7297"}} onClick={()=>{navigate("/EditTrips/"+id)}}><EditIcon /></Button>
            <Button sx={{color:"#DE5656"}}><DeleteIcon /></Button>
    </>
  )
}
