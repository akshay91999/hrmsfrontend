import { Box } from "@mui/system";
import React from "react";
import Textfield from "../../Components/Reusablecomponents/Textfield";
import VisitorCard from "./VisitorCard";
import { Typography } from "@mui/material";
import useForm from "../../Components/Validation/useForm";
import Btn from "../../Components/Reusablecomponents/Btn";
const initialFvalues = {
  passnumber: "",
};
export default function VisitorCheckOut() {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    let temp = {};
    temp.passnumber = values.passnumber ? "" : "This field is required";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const handlesubmit = () => {
    // loging values
    console.log(values);
    if (validate()) {
      window.alert("visitor check outed");
      // navigate('/VisitorCard')
    }
  };
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Visitor Check Out
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            // width: "100%",
            pb: "1%",
            pl: "20%",
          }}
        >
          <Textfield
            label="Pass Number"
            id="pass-number"
            name="passnumber"
            value={values.passnumber}
            error={errors.passnumber}
            onChange={handleInputChange}
          />
        </Box>
        <VisitorCard />
        <Box sx={{ display: "flex", justifyContent: "center", pt: "1%" }}>
          <Btn text="Check Out" click={handlesubmit} />
        </Box>
      </Box>
    </>
  );
}
