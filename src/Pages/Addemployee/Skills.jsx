import React from "react";
import { useNavigate } from "react-router-dom";
import Softskill from "../../Components/Softskill";
import Btn from "../../Components/Reusablecomponents/Btn";
import { Typography } from "@mui/material";
import Hardskill from "../../Components/Hradskill";
import {Box} from "@mui/material";

function Skills() {
    let navigate=useNavigate()
  return (
    <>
      <fieldset>
        <legend>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ color: "#1565C0" }}
          >
            skills
          </Typography>
        </legend>
        <fieldset>
          <legend>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ color: "#1565C0" }}
            >
              softskills
            </Typography>
          </legend>
          <Softskill />
        </fieldset>
        <fieldset>
          <legend>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ color: "#1565C0" }}
            >
              hardskills
            </Typography>
          </legend>
          <Hardskill />
        </fieldset>
        

        <Box
          sx={{ display: "flex", justifyContent: "flex-end", gap: 2, p: "1%" }}
        >
          <Btn text="Back" click={() => navigate(-1)} />
          <Btn
            text="Next"
            click={() => {
              navigate("/jobdetails");
            }}
          />
        </Box>
      </fieldset>
    </>
  );
}

export default Skills;
