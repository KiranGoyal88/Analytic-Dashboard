import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Select, Autocomplete, TextField, InputAdornment, IconButton } from "@mui/material";
import { FormControl } from "@mui/material";
import GoogleAnalyticsIcon from "../assets/svg/GoogleAnalytics.svg";
import { Clear } from "@mui/icons-material";

const Axis = ({
  setMetricMenuState,
  totalMetrics,
  setSelectedMetric,
  pushMetricToLeftAxis,
  pushMetricToRightAxis,
  removeMetricFromLeftAxis,
  removeMetricFromRightAxis
}) => {
  const [toAddMetricLeft, setToAddMetricLeft] = useState("Add a new metric");
  const [toAddMetricRight, setToAddMetricRight] = useState("Add a new metric");

  const handleSingleMetricSettings = metricName => {
    setMetricMenuState(true);
    setSelectedMetric(metricName);
  };

  const handleToAddMetricLeft = value => {
    pushMetricToLeftAxis(value);
    setToAddMetricLeft("Add a new metric");
  };
  const handleToAddMetricRight = value => {
    pushMetricToRightAxis(value);
    setToAddMetricRight("Add a new metric");
  };

  const MetricMapper = ({ metricName = "defaultName", index, axis }) => {
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
        <IconButton
          onClick={() => {
            if (axis === "left") {
              removeMetricFromLeftAxis(index);
            } else {
              removeMetricFromRightAxis(index);
            }
          }}
          disableRipple
          disableFocusRipple
          aria-label="delete"
        >
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
      {totalMetrics.leftAxis.map((metricName, i) => {
        return <MetricMapper metricName={metricName} index={i} axis={"left"} />;
      })}
      <FormControl fullWidth>
        <Select
          labelId="selectLeftAxis"
          sx={{ marginTop: "10px", width: "87%" }}
          value={toAddMetricLeft}
          onChange={e => handleToAddMetricLeft(e.target.value)}
          inputProps={{ "aria-label": "Without label" }}
          size="small"
        >
          <MenuItem disabled value={"Add a new metric"}>
            {"Add a new metric"}
          </MenuItem>
          {sample.map(m => {
            return (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <Typography sx={{ marginTop: "20px" }} fontSize={13} fontWeight={"600"}>
        Right Axis
      </Typography>
      {totalMetrics.rightAxis.map((metricName, i) => {
        return <MetricMapper metricName={metricName} index={i} axis={"right"} />;
      })}
      <FormControl fullWidth>
        <Select
          labelId="selectRightAxis"
          sx={{ marginTop: "10px", width: "87%" }}
          value={toAddMetricRight}
          onChange={e => handleToAddMetricRight(e.target.value)}
          inputProps={{ "aria-label": "Without label" }}
          size="small"
        >
          <MenuItem disabled value={"Add a new metric"}>
            {"Add a new metric"}
          </MenuItem>
          {sample.map(m => {
            return (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default Axis;

const sample = ["Users", "Adset", "Ads", "NewMetric"];
