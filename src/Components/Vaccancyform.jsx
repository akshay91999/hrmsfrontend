import { Box, Typography } from "@mui/material";
import React from "react";
import Dropdownlist from "./Reusablecomponents/Dropdownlist";
import useForm from "./Validation/useForm";
import { getDepartmentname } from "./Dropdowndata/getDepartmentname";
import Textfield from "./Reusablecomponents/Textfield";
import Btn from "./Reusablecomponents/Btn";
import Calender from "./Reusablecomponents/Calender";

const initialFvalues = {
  departmentname: "",
  position: "",
  vaccancynumber: "",
  yoeneeded: "",
  neededwithin: "",
};

function Vaccancyform() {
  const { values,setValues ,errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
  const validate = () => {
    const temp = {};
    temp.departmentname = values.departmentname
      ? ""
      : "please select a department";
    temp.position = values.position ? "" : "please enter a department";
    temp.vaccancynumber = values.vaccancynumber
      ? ""
      : "please enter the vaccancy number";
    temp.yoeneeded = values.yoeneeded
      ? ""
      : "please enter the year of experience number";
    temp.neededwithin = values.neededwithin
      ? ""
      : "please enter the year of experience number";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };
  const handlesubmit = () => {
    if (validate()) {
      window.alert("successfully updated");
    }
  };
  const handleclear = () => {
    setValues({
      departmentname:'',
      position:'',
      vaccancynumber:'',
      yoeneeded:'',
      neededwithin:''
    }
    )
  };

  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", pb: "2%" }}
      >
        Vacancy Report
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr" },
          gap: 2,
          width: "100%",
          pl: "5%",
        }}
      >
        <Dropdownlist
          name="departmentname"
          label="departmentname"
          value={values.departmentname}
          handleInputChange={handleInputChange}
          options={getDepartmentname()}
          error={errors.departmentname}
        />

        <Textfield
          label="Position"
          name="position"
          value={values.position}
          onChange={handleInputChange}
          error={errors.position}
        />
        <Textfield
          label="Number of vaccancies"
          name="vaccancynumber"
          value={values.vaccancynumber}
          onChange={handleInputChange}
          error={errors.position}
        />
        <Textfield
          label="Year Of Experience Needed"
          name="yoeneeded"
          value={values.yoeneeded}
          onChange={handleInputChange}
          error={errors.yoeneeded}
        />
        <Calender
          text="needed with in"
          name="neededwithin"
          value={values.neededwithin}
          onChange={handleInputChange}
          error={errors.neededwithin}
        />
      </Box>
      <Box sx={{  display: "flex", justifyContent: "flex-end", gap: 2,p:'1%'  }}>
        <Btn text="Submit" click={handlesubmit} />
        <Btn text="Clear" click={handleclear}/>
      </Box>
    </>
  );
}

export default Vaccancyform;
