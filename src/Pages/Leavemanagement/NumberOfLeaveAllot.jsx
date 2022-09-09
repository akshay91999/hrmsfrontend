import React from "react";
import Textfield from "../../Components/Reusablecomponents/Textfield";
import { Paper,Box } from "@mui/material";
import useForm from "../../Components/Validation/useForm";
import Btn from "../../Components/Reusablecomponents/Btn";
import {Typography} from "@mui/material";
import axios from "axios";

const initialFvalues = {
    paidleavenumber: "",
    unpaidleavenumber:''
  };
export default function NumberOfLeaveAllot() {
  // const params=useParams();

    const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
    const validate = () => {
        let temp = {};
        temp.paidleavenumber = values.paidleavenumber ? "" : "This field is required";
        temp.unpaidleavenumber = values.unpaidleavenumber ? "" : "This field is required";
        setErrors({ ...temp });
        return Object.values(temp).every((x) => x === "");
      };

      const user = {
        total_paid: values.paidleavenumber,
        total_unpaid: values.unpaidleavenumber,
      
    
  
      };


      const handlesubmit = () => {
        // loging values
        // console.log(values);
        // if (validate()) {
        //   window.alert("Succesfully Added");
        // }
        console.log(user);
        if (validate()) {
          axios
            .post("http://localhost:5000/leavepackage", user, {
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
    <>
      <Paper sx={{ p:"2%", m: "2%",width:"100%" }}>
      <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Leave Allot
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr" },
            gap: 2,
            width: "100%",
            mt: "2%",
            // textAlign: "center",
          }}
        >
            <Textfield
                        label="Total Number Of Paid Leave"
                        id="paid-leave-number"
                        name="paidleavenumber"
                        value={values.paidleavenumber}
                        error={errors.paidleavenumber}
                        onChange={handleInputChange}
            />
             <Textfield
                        label="Total Number Of UnPaid Leave"
                        id="unpaid-leave-number"
                        name="unpaidleavenumber"
                        value={values.unpaidleavenumber}
                        error={errors.unpaidleavenumber}
                        onChange={handleInputChange}
            />
            <Box sx={{display:"flex",justifyContent:"flex-end",p:"2%"}}>
                    <Btn text="Save" click={handlesubmit}/>
                    </Box>
        </Box>

      </Paper>
    </>
  );
}
