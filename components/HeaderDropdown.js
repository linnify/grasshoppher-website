import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {header} from "../constants/header";

export const HeaderDropdown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClick = (nav) => {
    window.location.href = nav;
    handleClose()
  };

  const displayMenuItems = header.map((item, index) => {
    return <MenuItem key={index} onClick={() => onClick(item.link)} id={"menu-item"}>{item.menu}</MenuItem>
  })

  return(
    <div>
      <IconButton
        onClick={handleClick} id={"dropdown-icon-button"} className={`${anchorEl && "active-menu"}`}>
        About <div id={"icon-arrow"}><ExpandMoreIcon/></div>
      </IconButton>


      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {displayMenuItems}
      </Menu>


    </div>
  )
}
