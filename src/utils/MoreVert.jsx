import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ReactComponent as MoreVertIcon } from "../assets/svg/morevert.svg";

export default function MoreVert(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onEditClick = () => {
    setAnchorEl(null);
    props.setSelectedWidget(props.chartType);
  };

  return (
    <div>
      <Button
        sx={{ height: "100%", minWidth: "30px" }}
        size="small"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon fontSize="small" />
      </Button>
      <Menu
        id="basic-menu"
        elevation={0}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button"
        }}
      >
        <MenuItem onClick={() => onEditClick()}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Export</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
