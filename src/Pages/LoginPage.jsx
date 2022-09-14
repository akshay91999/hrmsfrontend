import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import LockIcon from "@mui/icons-material/Lock";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Textfield from "../Components/Reusablecomponents/Textfield";
import Dropdownlist from "../Components/Reusablecomponents/Dropdownlist";
import useForm from "../Components/Validation/useForm";
import { getCourseid } from "../Components/Dropdowndata/getDepartmentname";
import axios from "axios";
import {UserContext} from '../App'
import { useContext } from "react";

const initialFvalues = {
  // usertype: "",
  email: "",
  password: "",
};


 

function LoginPage(props) {
  const  {state,dispatch}=useContext(UserContext)
  const {setLoggedIn}=props
  const navigate=useNavigate()
    const options=[{id:1,title:'super admin'}]
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
    const regex = /\S+@\S+\.\S+/;

    const validate=()=>{
        let temp={}
        // temp.usertype=values.usertype?"":"please select an user type"
        temp.email=values.email?(regex.test(values.email)?"":"please enter a valid mail"):"please enter your email id"
        temp.password=values.password?"":"please enter password"
        setErrors({...temp})
        return Object.values(temp).every((x) => x === "");
    }
    const handlesubmit=()=>{
      
        if(validate()){
          axios.post("http://localhost:5000/signin",{email:values.email,password:values.password},{headers:{"Content-Type":"application/json"}})
          .then(function(response){
            console.log(response)
            if(response.data.token)
            {
            localStorage.setItem("jwt",response.data.token)
            localStorage.setItem("user",JSON.stringify(response.data.user))
            dispatch({type:"USER",payload:response.data.user})
            window.alert('signed in successfully')
            setLoggedIn(true)
            navigate("/dashboard")
            }
            else{
              window.alert("please check your emailid or password")
            }

          })
          .catch(function(error){
            console.log(error)
          })
           
        }
    }
  return (
    <>
      <Container component="main" maxWidth="sm">
        {/* {localStorage.setItem('Name','Login')} */}
        <CssBaseline />
        <Card sx={{mt:10,p:"5%"}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
        
          <Avatar sx={{ m: 1, bgcolor: "#1565C0" }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          {/* <FormControl
            sx={{ width:'100%' }}
            size="large"
            margin="normal"
            {...(errors.usertype && { error: true })}
          >
            <InputLabel id="demo-select-small">User Type</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={values.usertype}
              label="User Type"
              name="usertype"
              onChange={handleInputChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {options.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.title}
                </MenuItem>
              ))}
            </Select>
            {errors.usertype && <FormHelperText>{errors.usertype}</FormHelperText>}
          </FormControl> */}
          <TextField
            margin="normal"
            required
            fullWidth
            value={values.email}
            onChange={handleInputChange}
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            {...(errors.email && { error: true, helperText: errors.email })}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={values.password}
            onChange={handleInputChange}
            name="password"
            label="Password"
            type="password"
            
            autoComplete="current-password"
            {...(errors.password && { error: true, helperText: errors.password })}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          

          <Button onClick={handlesubmit} fullWidth variant="contained"  sx={{ background:'linear-gradient(#1565C0,#8B8B8B)', mt: 3, mb: 2 }}>Sign In</Button>

          <Grid container>
            <Grid item xs>
              <Link to="#" variant="body2" underline="none">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
        </Card>
      </Container>
    </>
  );
}

export default LoginPage;
