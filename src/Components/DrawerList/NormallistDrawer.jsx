import React from 'react'
import { createElement } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


function NormallistDrawer({click,name,icon}) {
 
  return (
    <>
      <ListItemButton onClick={click}>
                <ListItemIcon>
                    {createElement(icon)}
                </ListItemIcon>
                <ListItemText primary={name} />
            </ListItemButton>
    </>
  )
}

export default NormallistDrawer
