import { FormControl, InputAdornment, Autocomplete, TextField, Typography } from "@mui/material";
import React from "react";
import { IconButton } from "@mui/material";
import { Clear } from "@mui/icons-material";
import GoogleAnalyticsIcon from "../assets/svg/GoogleAnalytics.svg";

const MetricMapper = ({ setMetricMenuState }) => {
  const handleSingleMetricSettings = () => {
    setMetricMenuState(true);
  };
  return (
    <FormControl sx={{ marginTop: "10px", display: "flex", flexDirection: "row" }}>
      <TextField
        onClick={() => handleSingleMetricSettings()}
        sx={{ width: "90%" }}
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
          )
        }}
      />
      <IconButton disableRipple disableFocusRipple aria-label="delete">
        <Clear />
      </IconButton>
    </FormControl>
  );
};

const Metrics = ({ setMetricMenuState }) => {
  return (
    <div>
      <Typography style={{ marginTop: "10px" }} fontSize={13} fontWeight={"600"}>
        Metrics
      </Typography>
      <MetricMapper setMetricMenuState={setMetricMenuState} />
      <Autocomplete
        sx={{ marginTop: "10px", width: "84%" }}
        disablePortal
        id="combo"
        options={sample}
        size="small"
        renderInput={params => <TextField {...params} label="Add new metrics" />}
      />
      {/* 
      <TextField
        style={{ marginTop: "5px" }}
        fullWidth
        id="title"
        label="Sessions"
        variant="outlined"
        size="small"
      /> */}
    </div>
  );
};

export default Metrics;
const sample = [{ label: "Users" }, { label: "Ads" }, { label: "Campaigns" }];
