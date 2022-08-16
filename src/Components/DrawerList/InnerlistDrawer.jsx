import React from "react";
import { createElement } from "react";
import { List } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import NormallistDrawer from "./NormallistDrawer";

function InnerlistDrawer({
  click,
  click1,
  click2,
  click3,
  name,
  icon,
  innericon1,
  innername1,
  innericon2,
  innername2,
  innericon3,
  innername3,
}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{createElement(icon)}</ListItemIcon>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 1 }}>
          <NormallistDrawer
            click={click1}
            name={innername1}
            icon={innericon1}
          />
          <NormallistDrawer
            click={click2}
            name={innername2}
            icon={innericon2}
          />
          {/* <NormallistDrawer
            click={click3}
            name={innername3}
            icon={innericon3}
          /> */}
        </List>
      </Collapse>
    </>
  );
}

export default InnerlistDrawer;
