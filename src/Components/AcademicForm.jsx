import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Textfield from "./Reusablecomponents/Textfield";
import Calender from "./Reusablecomponents/Calender";
import Box from "@mui/material/Box";
import { useState } from "react";
import Btn from "./Reusablecomponents/Btn";
import useForm from "./Validation/useForm";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  FormHelperText,
} from "@mui/material";
import {
  getBranchid,
  getBranchtype,
  getCourseid,
  getMarkid,
} from "./Dropdowndata/getDepartmentname";
import Dropdownlist from "./Reusablecomponents/Dropdownlist";
import Upload from "./Upload";

const initialFvalues = {
  school: "",
  board: "",
  courseid: "",
  branchid: "",
  coursetype: "",
  score: "",
  markid: "",
  durtnfrm: "",
  durtnto: "",
};

function AcademicForm() {
  const { values, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);

  const validate = () => {
    let temp = {};
    temp.school = values.school ? "" : "This field is required";
    temp.board = values.board ? "" : "This field is required";
    temp.courseid = values.courseid ? "" : "This field is required";
    temp.branchid = values.branchid ? "" : "this field is required";
    temp.coursetype = values.coursetype ? "" : "This field is required";
    temp.score = values.score ? "" : "This field is required";
    temp.durtnfrm = values.durtnfrm ? "" : "This field is required";
    temp.durtnto = values.durtnfrm ? "" : "This field is required";
    temp.coursetype = values.coursetype ? "" : "this field is required";
    temp.markid = values.markid ? "" : "this field is required";
    setErrors({
      ...temp,
    });
    return Object.values(temp).every((x) => x === "");
  };

  const handlesubmit = () => {
    if (validate()) {
      // logging values
      console.log(values);
      window.alert("successfully submited");
    }
  };

  const [add, setAdd] = useState(false);

  const addfield = () => {
    if (validate()) {
      // logging values
      setAdd(true);
      console.log(values);
      window.alert("successfully saved");
    }
  };
  const removefield = () => {
    setAdd(false);
    setOpen(false);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr" },
          gap: 2,
          width: "100%",
        }}
      >
        <Textfield
          label="School/Institution"
          name="school"
          id="scl"
          value={values.school}
          error={errors.school}
          onChange={handleInputChange}
        />
        <Textfield
          label="Board/University"
          name="board"
          id="scl"
          value={values.board}
          error={errors.board}
          onChange={handleInputChange}
        />
        <Dropdownlist
          name="courseid"
          label="course"
          value={values.courseid}
          handleInputChange={handleInputChange}
          options={getCourseid()}
          error={errors.courseid}
        />

        <Dropdownlist
          name="branchid"
          label="branch"
          value={values.branchid}
          handleInputChange={handleInputChange}
          options={getBranchid()}
          error={errors.branchid}
        />
        <Dropdownlist
          name="coursetype"
          label="type"
          value={values.coursetype}
          handleInputChange={handleInputChange}
          options={getBranchtype()}
          error={errors.coursetype}
        />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            maxWidth: "95%",
            // mt: "2%",
          }}
        >
          <Textfield
            label="Score"
            name="score"
            id="score"
            value={values.score}
            error={errors.school}
            onChange={handleInputChange}
          />
          <Dropdownlist
            name="markid"
            label="type"
            value={values.markid}
            handleInputChange={handleInputChange}
            options={getMarkid()}
            error={errors.markid}
          />
        </Box>
        <Calender
          text=" Duration From"
          name="durtnfrm"
          value={values.durtnfrm}
          onChange={handleInputChange}
          error={errors.durtnfrm}
        />
        <Calender
          text="Duration To"
          name="durtnto"
          value={values.durtnto}
          onChange={handleInputChange}
          error={errors.durtnto}
        />
        <Box sx={{ width: "100%" }}>
          Upload a file:
          <input
            type="file"
            style={{ marginLeft: "1%", paddingBottom: "2%" }}
          />
          <Button
            variant="contained"
            sx={{ background: "linear-gradient(#1565C0,#8B8B8B)" }}
          >
            Upload!
          </Button>
        </Box>
      </Box>
      {add?null:(
      <Box sx={{ pt: "2%" }}>
        <Btn text="Save" click={handlesubmit} />
      </Box>
      )}
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", gap: 2, pb: "2%" }}
      >
        {add ? null: (
          <Box sx={{ pt: "2%" }}>
            <Btn text="Add" click={addfield} />
          </Box>
        ) }
        {add ? (
          <Box sx={{ pt: "2%" }}>
            <Btn text="Remove" click={handleClickOpen} />
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Are you sure do you want to remove this field"}
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={removefield} autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        ) : null}
      </Box>

      {add ? <AcademicForm /> : null}
    </>
  );
}

export default AcademicForm;
