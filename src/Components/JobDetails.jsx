import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Textfield from "./Reusablecomponents/Textfield";
import Calender from "./Reusablecomponents/Calender";
import Btn from "./Reusablecomponents/Btn";
import { FormHelperText } from "@mui/material";
import useForm from "./Validation/useForm";
import {
  getBranchtype,
  getDepartmentname,
  getPosition,
  getUsertype,
} from "./Dropdowndata/getDepartmentname";
import Dropdownlist from "./Reusablecomponents/Dropdownlist";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const initialFvalues = {
  position: "",
  departmentname:"",
  usertype: "",
  package: "",
  jobtype: "",
  doj: "",
};
function JobDetails() {
  const params = useParams();
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);

  const [depart, setDepart] = useState([]);
  const [position, setPosition] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/depart")
      .then(function (response) {
        console.log(response);
        let dep = response.data.viewAlldep;
        const newdep = dep.map(
          ({ dp_id: id, departmentname: title, ...rest }) => ({
            id,
            title,
            ...rest,
          })
        );
        setDepart(newdep);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if(values.departmentname==="")
    {
      setPosition([])
    }
    else{
      axios
        .get("http://localhost:5000/depart/" + values.departmentname)
        .then(function (response) {
          console.log(response.data.viewDesignation);
          let des = response.data.viewDesignation;
          const newdes = des.map(
            ({ ds_id: id, designation: title, ...rest }) => ({
              id,
              title,
              ...rest,
            })
          );
          setPosition(newdes)
        });
      }
    
  }, [values.departmentname]);

  const validate = () => {
    let temp = {};
    temp.position = values.position ? "" : "This field is required";
    temp.departmentname = values.departmentname ? "" : "This field is required";
    temp.usertype = values.usertype ? "" : "This field is required";
    temp.package = values.package ? "" : "This field is required";
    temp.jobtype = values.jobtype ? "" : "This field is required";
    temp.doj = values.doj ? "" : "This field is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     console.log(values);
  //     window.alert("testing");
  //   }
  // };

  const user = {
    ds_id: values.position,
    dp_id: values.departmentname,
    user_type: values.usertype,
    package: values.package,
    jobtype: values.jobtype,
    doj: values.doj,
  };

  const handlesubmit = () => {
    console.log(user);
    if (validate()) {
      axios
        .post("http://localhost:5000/job/" + params.basicId, user, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {
          console.log(response);

          // let id = response.data.data;
          // console.log(id);
          // if (response.data.message === "success") {
          window.alert("successfully submited");
          //   navigate("/jobdetails/" + id);
          // }
          // else{
          //   window.alert(response.data.message)
          // }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div>
      {/* <form onSubmit={handleSubmit}> */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr" },
          gap: 2,
          width: "100%",
        }}
      >
        

        <Dropdownlist
          name="departmentname"
          label="Department Name"
          value={values.departmentname}
          handleInputChange={handleInputChange}
          options={depart}
          error={errors.departmentname}
        />
        <Dropdownlist
          name="position"
          label="Position"
          value={values.position}
          handleInputChange={handleInputChange}
          options={position}
          error={errors.position}
        />
        <Dropdownlist
          name="usertype"
          label="User Type"
          value={values.usertype}
          handleInputChange={handleInputChange}
          options={getUsertype()}
          error={errors.usertype}
        />
        {/* <Textfield
            label="Branch"
            name="branch"
            value={values.branch}
            error={errors.branch}
            onChange={handleInputChange}
          /> */}
        <Textfield
          label="Package"
          name="package"
          value={values.package}
          error={errors.package}
          onChange={handleInputChange}
        />
        <Dropdownlist
          name="jobtype"
          label="Type"
          value={values.jobtype}
          handleInputChange={handleInputChange}
          options={getBranchtype()}
          error={errors.jobtype}
        />

        <Calender
          text="Date Of Joining"
          name="doj"
          value={values.doj}
          error={errors.doj}
          onChange={handleInputChange}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", m: "1%" }}>
        <Btn text="Save" click={handlesubmit} />
      </Box>
      {/* </form> */}
    </div>
  );
}

export default JobDetails;
