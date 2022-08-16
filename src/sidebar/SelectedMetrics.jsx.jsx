import { FormControl, InputAdornment, Autocomplete, TextField, Typography } from "@mui/material";
import React from "react";
import GoogleAnalyticsIcon from "../assets/svg/GoogleAnalytics.svg";

const SelectedMetrics = ({ selectedMetric = "MetricNotSelected" }) => {
  return (
    <div>
      <Typography style={{ marginTop: "10px" }} fontSize={13} fontWeight={"600"}>
        Metrics
      </Typography>
      <FormControl sx={{ marginTop: "10px", display: "flex", flexDirection: "row" }}>
        <TextField
          sx={{ width: "90%" }}
          id="Analytics"
          label="Google Analytics | Sample data"
          defaultValue={selectedMetric}
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
      </FormControl>
    </div>
  );
};

export default SelectedMetrics;
