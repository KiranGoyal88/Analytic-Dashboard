import { TextField, Typography } from "@mui/material";
import React from "react";

const Metrics = () => {
  return (
    <div>
      <Typography
        style={{ marginTop: "10px" }}
        fontSize={13}
        fontWeight={"600"}>
        Metrics
      </Typography>
      <TextField
        style={{ marginTop: "5px" }}
        fullWidth
        id="title"
        label="Sessions"
        variant="outlined"
        size="small"
      />
    </div>
  );
};

export default Metrics;
