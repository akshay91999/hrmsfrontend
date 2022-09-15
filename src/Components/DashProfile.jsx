import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogContent, IconButton } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { CoPresentOutlined } from "@mui/icons-material";

function DashProfile() {
  const [state, setState] = useState(true);
  const [open, setOpen] = useState(false);
  const [photo,setPhoto]=useState(null)
  const user = JSON.parse(localStorage.getItem("user"));
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.id)
    axios
      .get("http://localhost:5000/upload/" +user.id)
      .then(function (response) {
        console.log(response);
        var arr = [];
        arr = response.data.uploads;
        var result = arr.find((item) => item.doc_type === "photo");
        console.log(result);
        setPhoto(result.document);
      })
      .catch(function (error) {
       console.log(error);
      });
  }, []);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  const handleclick1 = () => {
    setState(!state);
    setOpen(true);
  };
  const handleclick2 = () => {
    // <Canteen/>
    setState(!state);
  };
  return (
    <>
      <Card sx={{ borderRadius: "10px", minHeight: "255px" }}>
        {/* <CardActionArea> */}
        <CardMedia sx={{ display: "flex", justifyContent: "center", m: "2%" }}>
          <Avatar
            alt="Remy Sharp"
            src={"http://localhost:5000/"+photo}
            sx={{ width: 86, height: 86, border: "3px solid #1565C0" }}
          />
        </CardMedia>
        <CardContent>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {user.name}
          </Typography>

          <Typography variant="h6" sx={{ textAlign: "center" }}>
            UI/UX Designer
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {console.log(state)}
            {state ? (
              // <Canteen/>
              <Button
                variant="outlined"
                size="large"
                sx={{ color: "#00ff00", borderRadius: "30px" }}
                onClick={() => {
                  handleclick1();
                }}
              >
                CHECK IN
              </Button>
            ) : (
              // <Canteen/>
              <div>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ color: "#ff0000", borderRadius: "30px" }}
                  onClick={handleclick2}
                >
                  CHECK OUT
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"Lunch"}</DialogTitle>
                  <DialogContent>
                    <Typography> Do you Need Lunch Today?</Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Yes</Button>
                    <Button onClick={handleClose}>NO</Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
          </Box>
        </CardContent>
        {/* </CardActionArea> */}
      </Card>
      {/* <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 86, height: 86 }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Nevina Acantaza
              </Typography>
             */}
    </>
  );
}

export default DashProfile;
