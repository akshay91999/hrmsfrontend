import React from "react";
import Box from "@mui/material/Box";
import Btn from "../Btn";
import Typography from "@mui/material/Typography";
import Textfeild from "../Textfield";
import useForm from "../useForm";
const initialFvalues = {
  adrress: "",
  state: "",
  country: "",
  pincode: "",
};

function Address(props) {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);

  const validate = () => {
    let temp = {};
    temp.adrress = values.adrress ? "" : "This field is required";
    temp.state = values.state ? "" : "This field is required";
    temp.country = values.country ? "" : "This field is required";
    temp.pincode = values.pincode.length === 6 ? "" : "6 digit required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) window.alert("testing");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ color: "#1565C0" }}
            >
              {props.text}
            </Typography>
          </legend>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr" },
              gap: 2,
              width: "100%",
              textAlign: "center",
            }}
          >
            <Textfeild
              label="Address"
              name="adrress"
              value={values.adrress}
              onChange={handleInputChange}
              error={errors.adrress}
            />
            <Textfeild
              label="State"
              name="state"
              value={values.state}
              onChange={handleInputChange}
              error={errors.state}
            />
            <Textfeild
              label="Country"
              name="country"
              value={values.country}
              onChange={handleInputChange}
              error={errors.country}
            />
            <Textfeild
              label="PinCode"
              name="pincode"
              value={values.pincode}
              onChange={handleInputChange}
              error={errors.pincode}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", pt: "4%" }}>
            <Btn text="Save" type="submit" />
          </Box>
        </fieldset>
      </form>
    </>
  );
}

export default Address;
