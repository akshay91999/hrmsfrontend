import React from "react";
import { Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import Expdtl from "./Expdtl";
import { useNavigate, useParams } from "react-router-dom";
import Btn from "../../Components/Reusablecomponents/Btn";
function Exp() {
  const params=useParams()
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const formOpen = () => {setOpen(true);};
  const formClose = () => {
    setOpen("");
  };
  return (
    <>
      <fieldset style={{ margin:'1%' }}>
        <legend>
          <Typography variant="h6" gutterBottom component="div">
            Experience Details
          </Typography>
        </legend>
        <Box>
          <FormControl sx={{ ml: "2%" }}>
            <label id="demo-row-radio-buttons-group-label">
              Do you have any relevant work experience?
            </label>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="single"
                control={<Radio />}
                label="Yes"
                onClick={formOpen}
              />
              <FormControlLabel
                value="married"
                control={<Radio />}
                label="No"
                onClick={formClose}
              />
            </RadioGroup>
          </FormControl>

          {open ? <Expdtl /> : null}

         
        </Box>
      </fieldset>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2,p:'1%',m:'2%' }}>
            <Btn text="Back" click={() => navigate(-1)} />
            <Btn text='Next'click={()=>{navigate("/skill/"+params.basicId)}}/>
          </Box>
    </>
  );
}

export default Exp;
