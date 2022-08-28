import React from 'react'
import { Paper } from "@mui/material";
import AllotingTrainerForm from './AllotingTrainerForm';

export default function AllotingTrainer() {
  return (
          <div>
            <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
              <AllotingTrainerForm />
            </Paper>
          </div>
        );
      }
      
 