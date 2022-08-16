import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Select, InputLabel, Autocomplete, TextField, InputAdornment, IconButton } from "@mui/material";
import { FormControl } from "@mui/material";
import GoogleAnalyticsIcon from "../assets/svg/GoogleAnalytics.svg";
import { Clear } from "@mui/icons-material";

const Axis = ({ setMetricMenuState, totalMetrics, setSelectedMetric }) => {
  const handleSingleMetricSettings = metricName => {
    setMetricMenuState(true);
    setSelectedMetric(metricName);
  };

  const MetricMapper = ({ metricName = "defaultName" }) => {
    return (
      <FormControl sx={{ marginTop: "10px", display: "flex", flexDirection: "row" }}>
        <TextField
          onClick={() => handleSingleMetricSettings(metricName)}
          sx={{ width: "90%" }}
          id="Analytics"
          label="Google Analytics | Sample data"
          defaultValue={metricName}
          size="small"
          InputProps={{
            readOnly: true,
            startAdornment: (
              <InputAdornment position="start">
                <img height="20px" width="20px" src={GoogleAnalyticsIcon} />
              </InputAdornment>
            )
          }}
        />
        <IconButton disableRipple disableFocusRipple aria-label="delete">
          <Clear />
        </IconButton>
      </FormControl>
    );
  };

  return (
    <div>
      <Typography fontSize={13} fontWeight={"600"}>
        Left Axis
      </Typography>
      {totalMetrics.leftAxis.map(metricName => {
        return <MetricMapper metricName={metricName} />;
      })}
      <Autocomplete
        sx={{ marginTop: "10px", width: "84%" }}
        disablePortal
        id="combo"
        options={sample}
        size="small"
        renderInput={params => <TextField {...params} label="Add new metrics" />}
      />
      <Typography sx={{ marginTop: "20px" }} fontSize={13} fontWeight={"600"}>
        Right Axis
      </Typography>
      {totalMetrics.rightAxis.map(metricName => {
        return <MetricMapper metricName={metricName} />;
      })}
      <Autocomplete
        sx={{ marginTop: "10px", width: "84%" }}
        disablePortal
        id="combo"
        options={sample}
        size="small"
        renderInput={params => <TextField {...params} label="Add new metrics" />}
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
  { label: "What is Lorem Ipsum?" }
];
