import React, { useEffect, useState } from "react";
import { FormControl, InputAdornment, TextField } from "@mui/material";
import { Clear } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const filterValueGenerator = (FilterName, DimensionFilter) => {
  let FilterValue = "";
  DimensionFilter.map((filterData) => {
    const { filter, filterParameter, filterParameterValue, operator } =
      filterData;
    if (operator === "") {
      FilterValue =
        FilterValue +
        `${FilterName}: ${filter}: ${filterParameter} ${filterParameterValue} `;
    } else {
      FilterValue =
        FilterValue +
        `${operator} ${filter}: ${filterParameter} ${filterParameterValue}`;
    }
  });

  return FilterValue;
};

const AppliedFilters = ({
  appliedFilter,
  resetDimensionFilter,
  resetMetricFilter,
}) => {
  const [filterDimensionValue, setFilterDimensionValue] = useState("");
  const [filterMetricValue, setFilterMetricValue] = useState("");

  useEffect(() => {
    setFilterDimensionValue(
      filterValueGenerator(
        appliedFilter.FilterName,
        appliedFilter.DimensionFilter
      )
    );
    setFilterMetricValue(
      filterValueGenerator(appliedFilter.FilterName, appliedFilter.MetricFilter)
    );
  }, [appliedFilter]);

  useEffect(() => {
    console.log(filterDimensionValue);
  }, [filterDimensionValue]);

  return (
    <div>
      {filterDimensionValue.length > 0 &&
        appliedFilter.DimensionFilter[0].filter !== "" && (
          <FormControl
            sx={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
            }}>
            <TextField
              sx={{
                width: "90%",
                fontSize: "12px",
                background: "rgba(221, 221, 221, 0.1)",
              }}
              id="Analytics"
              value={filterDimensionValue}
              size="small"
              inputProps={{ readOnly: true }}
            />
            <IconButton
              onClick={() => resetDimensionFilter()}
              disableRipple
              disableFocusRipple
              aria-label="delete">
              <Clear />
            </IconButton>
          </FormControl>
        )}
      {filterMetricValue.length > 0 &&
        appliedFilter.MetricFilter[0].filter !== "" && (
          <FormControl
            sx={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
            }}>
            <TextField
              sx={{
                width: "90%",
                fontSize: "12px",
                background: "rgba(221, 221, 221, 0.1)",
              }}
              id="Analytics"
              value={filterMetricValue}
              size="small"
              inputProps={{ readOnly: true }}
            />
            <IconButton
              onClick={() => resetMetricFilter()}
              disableRipple
              disableFocusRipple
              aria-label="delete">
              <Clear />
            </IconButton>
          </FormControl>
        )}
    </div>
  );
};

export default AppliedFilters;
