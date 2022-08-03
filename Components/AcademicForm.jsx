import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Textfield from "../Components/Textfield";
import Calender from "../Components/Calender";
import Box from "@mui/material/Box";
import { useState } from "react";
import Btn from './Btn';



function AcademicForm() {

    const [courses, setCourses] = useState('');
    const courseChange = (event) => {
      setCourses(event.target.value);
    };
    const [branch, setBranch] = useState('');
    const branchChange = (event) => {
      setBranch(event.target.value);
    };
    const [type, setType] = useState('');
    const typeChange = (event) => {
      setType(event.target.value);
    };
    
    const [mark, setMark] = useState('');
    const markChange = (event) => {
      setMark(event.target.value);
    };

  const [add, setAdd] = useState(false);

  const addfield = () => {
    setAdd(true);
  };
  const removefield = () => {
    setAdd(false);
  };
  return (
    <>
      <Box component="form"
          noValidate
          sx={{
            display: 'grid',
            gridTemplateColumns: { sm: '1fr 1fr' },
            gap: 2,
            width: "100%",
          }}>
          <Textfield sx={{}} name="School/Institution" id="scl" />
          <Textfield name="Board/University" id="brd" />
          <FormControl sx={{
            // mt: 1,
            // mb: 1,
            width: "90%",
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#1565C0',
              },
              '&:hover fieldset': {
                borderColor: 'brown',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1565C0',
              },

            },
          }} size="small">
            <InputLabel id="demo-select-small" >courses</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={courses}
              label="courses"
              onChange={courseChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"MCA"}>Master of  Computer Application</MenuItem>
              <MenuItem value={"BCA"}>Bachelor of Computer Application</MenuItem>
              <MenuItem value={"Bsc"}>Bachelor of Science</MenuItem>
              <MenuItem value={"Msc"}>Master of Science</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{
            // mt: 1,
            // mb: 1,
            width: "90%",
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#1565C0',
              },
              '&:hover fieldset': {
                borderColor: 'brown',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1565C0',
              },

            },
          }} size="small">
            <InputLabel id="demo-select-small"  >Branch</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={branch}
              label="Branch"
              onChange={branchChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"CS"}>Computer Science</MenuItem>
              <MenuItem value={"Ele"}>Electronics</MenuItem>
              <MenuItem value={"IT"}>Infotmation and Technology</MenuItem>
              <MenuItem value={"SE"}>Software Engineering</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{
            // mt: 1,
            // mb: 1,
            width: "90%",
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#1565C0',
              },
              '&:hover fieldset': {
                borderColor: 'brown',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1565C0',
              },

            },
          }} size="small">
            <InputLabel id="demo-select-small"  >Type</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={type}
              label="Type"
              onChange={typeChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"pt"}>Part time</MenuItem>
              <MenuItem value={"ft"}>Full time</MenuItem>
            </Select>
          </FormControl>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { sm: '1fr 1fr' },
              // mt: "2%",
            }}>
            <Textfield name="Score" id="score" />
            <FormControl sx={{
              width: "80%", '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#1565C0',
                },
                '&:hover fieldset': {
                  borderColor: 'brown',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#1565C0',
                },

              },
            }} size="small">
              <InputLabel id="demo-select-small" ></InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={mark}
                label=""
                onChange={markChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"cgpa"}>CGPA</MenuItem>
                <MenuItem value={"per"}>%</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Calender text=" Duration From" />
          <Calender text="Duration To" />
          <input type="file"/>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2 ,pb:'2%'}}>
          <Box sx={{ pt: "2%" }}>
            <Btn text="Add" click={addfield} />
          </Box>
          <Box sx={{ pt: "2%" }}>
            <Btn text="Remove" click={removefield} />
          </Box>
        </Box>

        {add ? <AcademicForm/> : null}
    </>
  )
}

export default AcademicForm
