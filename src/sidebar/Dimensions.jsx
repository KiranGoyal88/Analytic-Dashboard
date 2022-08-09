import { TextField, Typography } from "@mui/material";
import React from "react";

const Dimensions = () => {
  return (
    <div>
      <Typography fontSize={13} fontWeight={"600"}>
        Dimensions
      </Typography>
      <TextField
        style={{ marginTop: "5px" }}
        fullWidth
        id="title"
        label="Date Range"
        variant="outlined"
        size="small"
      />
    </div>
  );
};

export default Dimensions;
