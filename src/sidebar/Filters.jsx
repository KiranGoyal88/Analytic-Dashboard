import { AddCircleOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Filters = () => {
  return (
    <div>
      <Button
        sx={{
          justifyContent: "flex-start",
          color: "#333333",
          borderColor: "#DDDDDD",
          height: "52px",
          marginTop: "10px",
        }}
        fullWidth
        variant="outlined"
        startIcon={<AddCircleOutline />}>
        Add a filter
      </Button>
    </div>
  );
};

export default Filters;
