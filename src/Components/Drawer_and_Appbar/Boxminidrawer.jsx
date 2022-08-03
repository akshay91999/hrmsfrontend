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


function Boxminidrawer() {
  return (
    <>
       <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        
            <Routes>
                <Route path="/addemployee" element={<Basic/>} />
                <Route path="/" element={<Hello/>} />
                <Route path="/academic" element={<Academic/>} />
                <Route path="/experience" element={<Exp/>} />
                <Route path="/upload" element={<Upld/>} />
                <Route path="/skill" element={<Skills/>} />
                <Route path="/jobdetails" element={<Job/>} />
                <Route path="/*" element={<PageNotfound/>} />
            </Routes>
        
        <Footer/> 
      </Box>
    </>
  )
}

export default Boxminidrawer
