import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Select, InputLabel, Autocomplete, TextField } from "@mui/material";
import { FormControl } from "@mui/material";

const Axis = () => {
  const [selectedAxis, setSelectedAxis] = useState("");
  const [leftMetrics, setLeftMetrics] = useState(["users", "ads"]);
  const [rightMetrics, setRightMetrics] = useState(["users"]);

  const handleChange = (event) => {
    setSelectedAxis(event.target.value);
  };

  const MetricMapper = ({ metric }) => {
    return (
      <FormControl sx={{ marginTop: "10px" }} fullWidth>
        <InputLabel id="demo-simple-select-label">Users</InputLabel>
        <Select
          id="demo-simple-select"
          value={selectedAxis}
          label="users"
          size="small"
          onChange={handleChange}>
          <MenuItem value={"users"}>Users</MenuItem>
          <MenuItem value={"ads"}>Ads</MenuItem>
          <MenuItem value={"adset"}>Adset</MenuItem>
        </Select>
      </FormControl>
    );
  };

  return (
    <div>
      <Typography fontSize={13} fontWeight={"600"}>
        Left Axis
      </Typography>
      {leftMetrics.map((metric) => {
        return <MetricMapper />;
      })}
      <Autocomplete
        sx={{ marginTop: "10px" }}
        disablePortal
        id="combo"
        options={sample}
        size="small"
        renderInput={(params) => (
          <TextField {...params} label="Add new metrics" />
        )}
      />
      <Typography sx={{ marginTop: "20px" }} fontSize={13} fontWeight={"600"}>
        Right Axis
      </Typography>
      {rightMetrics.map((metric) => {
        return <MetricMapper />;
      })}
      <Autocomplete
        sx={{ marginTop: "10px" }}
        disablePortal
        id="combo"
        options={sample}
        size="small"
        renderInput={(params) => (
          <TextField {...params} label="Add new metrics" />
        )}
      />
    </div>
  );
};

export default Axis;

const sample = [
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
  { label: "What is Lorem Ipsum?" },
];
