import React from "react";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Textfeild from "./Reusablecomponents/Textfield";

function Marital(props) {
  const { values, errors,  handleInputChange } = props;
  return (
    <div>
      <FormControl>
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
            label="Spouse's Name"
            id="spouse-name"
            name="spousename"
            value={values.spousename}
            error={errors.spousename}
            onChange={handleInputChange}
          />
          <Textfeild
            label="Contact Number"
            id="spouse-contact"
            name="scontactnumber"
            value={values.scontactnumber}
            error={errors.scontactnumber}
            onChange={handleInputChange}
          />
        </Box>
      </FormControl>
    </div>
  );
}
export default Marital;
