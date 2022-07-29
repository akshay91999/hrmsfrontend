import React from "react"
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Textfeild from "./Textfield";
function Marital() {
    return (
        <div>
            <FormControl>
                <Box
                    component="form"
                    noValidate
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { sm: '1fr 1fr' },
                        gap: 2,
                        width: "100%",
                        textAlign: "center"

                    }}
                >
                    <Textfeild name="Spouse's Name" id="spouse-name" />
                    <Textfeild name="Contact Number" id="spouse-contact" />
                </Box>
            </FormControl>
        </div>
    );
}
export default Marital
