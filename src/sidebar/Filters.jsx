import { AddCircleOutline } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";

const Filters = ({ setModalState }) => {
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
        size="small"
        startIcon={<AddCircleOutline />}
        onClick={() => setModalState(true)}>
        Add a filter
      </Button>
    </div>
  );
};

export default Filters;
