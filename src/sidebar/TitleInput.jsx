import { TextField } from "@mui/material";
import React from "react";

const TitleInput = () => {
  return (
    <div>
      <TextField
        fullWidth
        id="title"
        label="Enter title here"
        variant="outlined"
        size="small"
      />
    </div>
  );
};

export default TitleInput;
