import React from 'react'
import {Routes,Route } from 'react-router-dom' 
import { Box } from '@mui/material'
import Basic from '../Pages/Basic'
import Footer from './Footer'
import Hello from '../Pages/Hello'
import Academic from '../Pages/Academic'
import PageNotfound from '../Pages/PageNotfound'
import Exp from '../Pages/Exp'


function Boxminidrawer() {
  return (
    <>
       <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
        
            <Routes>
                <Route path="/addemployee" element={<Basic/>} />
                <Route path="/" element={<Hello/>} />
                <Route path="/academic" element={<Academic/>} />
                <Route path="/experience" element={<Exp/>} />
                <Route path="/*" element={<PageNotfound/>} />
            </Routes>
        
        <Footer/> 
      </Box>
    </>
  )
}

export default Boxminidrawer
