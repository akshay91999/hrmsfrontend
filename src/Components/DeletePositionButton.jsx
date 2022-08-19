import { IconButton } from '@mui/material'
import React from 'react'
import DeleteIcon from "@mui/icons-material/Delete";

function DeletePositionButton() {
  return (
    <>
      <IconButton sx={{ color: "#1565C0" }}>
        <DeleteIcon />
      </IconButton>
    </>
  )
}

export default DeletePositionButton
