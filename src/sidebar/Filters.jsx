import React from "react";
import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";

const Filters = () => {
  return (
    <div>
      <Typography
        style={{ marginTop: "10px" }}
        fontSize={13}
        fontWeight={"600"}>
        Filters
      </Typography>

      <Autocomplete
        sx={{ marginTop: "10px" }}
        disablePortal
        id="combo"
        options={sample}
        size="small"
        renderInput={(params) => <TextField {...params} label="Add a filter" />}
      />
    </div>
  );
};

export default Filters;

const sample = [
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
];
