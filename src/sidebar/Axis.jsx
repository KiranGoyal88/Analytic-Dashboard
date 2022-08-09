import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import {
  Select,
  InputLabel,
  Autocomplete,
  TextField,
  InputAdornment,
} from "@mui/material";
import { FormControl } from "@mui/material";
import GoogleAnalyticsIcon from "../assets/svg/GoogleAnalytics.svg";

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
        {/* <InputLabel style={{ fontSize: "12px" }} id="demo-simple-select-label">
          Google Analytics | Sample data
        </InputLabel> */}
        <TextField
          id="Analytics"
          label="Google Analytics | Sample data"
          defaultValue="Users"
          size="small"
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <img height="20px" width="20px" src={GoogleAnalyticsIcon} />
              </InputAdornment>
            ),
          }}
        />
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
