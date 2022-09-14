import React from "react";
import Personal from "../../Components/Personal";
import Grid from "@mui/material/Grid";
import AddressCalling from "../../Components/Address/AddressCalling";
import { Paper, Typography } from "@mui/material";
import Btn from "../../Components/Reusablecomponents/Btn";
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../Components/Validation/useForm";
import { Box } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


const initialFvalues = {
  firstname: "",
  lastname: "",
  gender: "male",
  dob: "",
  nationality: "",
  contactnumber: "",
  altcontactnumber: "",
  email: "",
  altemail: "",
  fathername: "",
  fcontactnumber: "",
  mothername: "",
  mcontactnumber: "",
  maritalstatus: "single",
  spousename: "",
  scontactnumber: "",
  e_address: "",
  state: "",
  country: "",
  pincode: "",
  ispermanantequal: "No",
  currentaddress: "",
  currentstate: "",
  currentcountry: "",
  currentpincode: "",
};




function Basic() {
  
  const params=useParams()
    const[base,setBase]=useState({})
  useEffect(()=>{
    if(Object.keys(params).length !== 0)
    {
    axios.get("http://localhost:5000/basics/"+params.basicId)
    .then(function(response){
      // console.log(response.data)
      var obj=response.data;
      ['basic_id','createdAt','deletedAt','document','id','updatedAt'].forEach(e=>delete obj[e])
      setBase(obj)
      if(Object.keys(obj).length!==0)
      {
      setValues(obj)
    }
    else{
      setValues(initialFvalues)
    }

    })
    .catch(function(error){
      console.log(error)
    })
    
  }
  },[])

  // var initial=(Object.keys(base).length!==0)?base:initialFvalues
  // console.log(initial)
  const { values,setValues,errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
    
 
  const {
    nationality,
    fathername,
    fcontactnumber,
    mothername,
    mcontactnumber,
    contactnumber,
    altcontactnumber,
  } = values;
  const regex = /\S+@\S+\.\S+/;
  const regmob = /(0|91)?[7-9][0-9]{9}/;
  const regpin = /^[1-9][0-9]{5}$/;
  const validate = () => {
    let temp = {};
    temp.firstname = values.firstname ? "" : "firstname is required";
    temp.lastname = values.lastname ? "" : "lastname is required";
    temp.dob = values.dob ? "" : "dob is required";
    temp.nationality = values.nationality ? "" : "nationality is required";
    temp.contactnumber = regmob.test(values.contactnumber)
      ? ""
      : "contactnumber requires minimum 9 numbers";
    temp.altcontactnumber = regmob.test(values.altcontactnumber)
      ? ""
      : "contact number requires minimum 9 numbers";
    temp.email = regex.test(values.email) ? "" : "email is not valid";
    temp.altemail = regex.test(values.altemail) ? "" : "email is not valid";
    temp.fathername = values.fathername ? "" : "father's name is required";
    temp.fcontactnumber = regmob.test(values.fcontactnumber)
      ? ""
      : "father's contact is required";
    temp.mothername = values.mothername ? "" : "mother's name is required";
    temp.mcontactnumber = regmob.test(values.mcontactnumber)
      ? ""
      : "mother's contact is required";
    temp.spousename =
      values.maritalstatus === "married"
        ? values.spousename
          ? ""
          : "spouse name is required"
        : "";
    temp.scontactnumber =
      values.maritalstatus === "married"
        ? values.scontactnumber.length > 9
          ? ""
          : "contact number requires minimum 9 numbers"
        : "";
    temp.e_address = values.e_address
      ? ""
      : "This field is required";
    temp.state = values.state ? "" : "This field is required";
    temp.country = values.country
      ? ""
      : "This field is required";
    temp.pincode = regpin.test(values.pincode)
      ? ""
      : "6 digit required";
    temp.currentaddress =
      values.ispermanantequal === "No"
        ? values.currentaddress
          ? ""
          : "this field is required"
        : "";
    temp.currentstate =
      values.ispermanantequal === "No"
        ? values.currentstate
          ? ""
          : "this field is required"
        : "";
    temp.currentcountry =
      values.ispermanantequal === "No"
        ? values.currentcountry
          ? ""
          : "this field is required"
        : "";
    temp.currentpincode =
      values.ispermanantequal === "No"
        ? values.currentpincode.length === 6
          ? ""
          : "6 digit required"
        : "";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const user = {
    firstname: values.firstname,
    lastname: values.lastname,
    gender: values.gender,
    dob: values.dob,
    nationality,
    e_address: values.e_address,
    state: values.state,
    country: values.country,
    pincode: values.pincode,
    currentaddress: values.currentaddress,
    currentstate: values.currentstate,
    currentpincode: values.currentpincode,
    currentcountry: values.currentcountry,
    fathername,
    fcontactnumber,
    mothername,
    mcontactnumber,
    maritalstatus: values.maritalstatus,
    spousename: values.spousename,
    scontactnumber: values.scontactnumber,
    contactnumber,
    altcontactnumber,
    email: values.email,
    altemail: values.altemail,
  };

  const handlesubmit = () => {
    // loging values
    // console.log(values)
    console.log(user);
    if (validate()) {
      axios
        .post("http://localhost:5000/basics", user, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {
          console.log(response);
          let id = response.data.data;
          console.log(id);
          if (response.data.message === "success") {
            window.alert("successfully submited");
            navigate("/upload/" + id);
          }
          else{
            window.alert(response.data.message)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const handleupdate = () => {
    // loging values
    // console.log(values)
    console.log(user);
    if (validate()) {
      axios
        .put("http://localhost:5000/basics/"+params.basicId, user, {
          headers: { "Content-Type": "application/json" },
        })
        .then(function (response) {
          console.log(response);
          if (response.data.message === "Updated successfully") {
            window.alert(response.data.message);
            navigate("/upload/" + params.basicId);
          }
          else{
            window.alert(response.data.message)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  let navigate = useNavigate();
  return (
    <>
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#1565C0", mt: "1%" }}
      >
        Details
      </Typography>
      <Grid container spacing={2} sx={{ p: "1%" }}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Personal
            values={values}
            errors={errors}
            setErrors={setErrors}
            handleInputChange={handleInputChange}    
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <AddressCalling
            values={values}
            errors={errors}
            setErrors={setErrors}
            handleInputChange={handleInputChange}
          />
          <Typography align="right" sx={{ p: "1%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mt: "5%",
                mb: "5%",
              }}
            >{
              Object.keys(base).length!==0?
              <Btn text="Next" click={handleupdate}/>
              :<Btn text="Next" click={handlesubmit} />
              
            }
            </Box>
          
          </Typography>
        </Grid>
      </Grid>
      </>
      
  );
}
export default Basic;
