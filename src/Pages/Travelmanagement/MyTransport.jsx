import { Grid, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
const arr = [
  { id: 1, name: "12/03/2022" },
  { id: 2, name: "13/03/2022" },
  { id: 3, name: "14/03/2022" }
];
export default function MyTransport() {
    let navigate=useNavigate()
    const [items, setItems] = React.useState(arr);

    const deleteItem = (index) => () =>
      setItems((items) => items.filter((_, i) => i !== index));
  return (
    <>
        <Paper sx={{ pl: "3%", m: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Your Trasport Status 
        </Typography>

        {/* <Box sx={{ width: 320,display:"flex",justifyContent:"center"}}> */}

    <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gap: 2,
            width: "100%",          
            textAlign: "center"
          }}
        >
 {/* <Typography variant='h6'>12/03/2022</Typography>
 <IconButton color="primary" onClick={()=>{navigate("/")}} ><EditIcon /></IconButton>
 <IconButton color="primary" ><DeleteIcon /></IconButton>   
 <Typography variant='h6'>19/03/2022</Typography>
 <IconButton color="primary" onClick={()=>{navigate("/")}} ><EditIcon /></IconButton>
 <IconButton color="primary" ><DeleteIcon /></IconButton>  
 <Typography variant='h6'>02/03/2022</Typography>
 <IconButton color="primary" onClick={()=>{navigate("/")}} ><EditIcon /></IconButton>
 <IconButton color="primary" ><DeleteIcon /></IconButton>   */}
      {items.map((it, index) => {
        return (
          <div key={it.id}>
            {it.name} 
            {/* <button onClick={deleteItem(index)}>delete</button> */}
            <IconButton color="primary" onClick={()=>{navigate("/BookTrips")}} ><EditIcon /></IconButton>
            <IconButton color="primary" onClick={deleteItem(index)} ><DeleteIcon /></IconButton> 
          </div>
        );
      })}
        </Box>
        {/* </Box> */}
        </Paper>
    </>
  )
}
