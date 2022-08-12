import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, IconButton, InputLabel, TextField } from "@mui/material";
import { Clear } from "@mui/icons-material";
import OperatorButtonsMetrics from "./OperatorButtonsMetrics";

const filters = ["Metrics", "Total", "Average"];
const values = ["= Equals", "= Does not equal", "> Is more", "> Is more or equals", "< Is less", "< Is less or equal"];

export default function AddNewMetricFilter({
  tempFilters,
  setTempFilters,
  index,
  removeMetricIndex,
  addNewMetricFilter
}) {
  return (
    <div>
      {tempFilters && index >= 0 && (
        <Box style={{ display: "flex" }}>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Select Filter</InputLabel>
            <Select
              labelId="demo-filter-small"
              id="demo-filter-small"
              value={tempFilters.MetricFilter[index].filter}
              label="Select Value"
              onChange={e =>
                setTempFilters({
                  ...tempFilters,
                  MetricFilter: [
                    ...tempFilters.MetricFilter.slice(0, index),
                    {
                      ...tempFilters.MetricFilter[index],
                      filter: e.target.value
                    },
                    ...tempFilters.MetricFilter.slice(index + 1)
                  ]
                })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {filters.map(filter => (
                <MenuItem key={filter} value={filter}>
                  {filter}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small">Select Value</InputLabel>
            <Select
              labelId="demo-value-small"
              id="demo-value-small"
              value={tempFilters.MetricFilter[index].filterParameter}
              label="Select Value"
              onChange={e =>
                setTempFilters({
                  ...tempFilters,
                  MetricFilter: [
                    ...tempFilters.MetricFilter.slice(0, index),
                    {
                      ...tempFilters.MetricFilter[index],
                      filterParameter: e.target.value
                    },
                    ...tempFilters.MetricFilter.slice(index + 1)
                  ]
                })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {values.map(value => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            sx={{ m: 1, minWidth: 200 }}
            id="standard-basic"
            variant="outlined"
            size="small"
            value={tempFilters.MetricFilter[index].filterParameterValue}
            onChange={e =>
              setTempFilters({
                ...tempFilters,
                MetricFilter: [
                  ...tempFilters.MetricFilter.slice(0, index),
                  {
                    ...tempFilters.MetricFilter[index],
                    filterParameterValue: e.target.value
                  },
                  ...tempFilters.MetricFilter.slice(index + 1)
                ]
              })
            }
          />

          <div style={{ marginLeft: "auto" }}>
            <OperatorButtonsMetrics
              tempFilters={tempFilters}
              index={index}
              setTempFilters={setTempFilters}
              addNewMetricFilter={addNewMetricFilter}
            />
            <IconButton onClick={() => removeMetricIndex(index)} sx={{ marginRight: "10px" }} aria-label="delete">
              <Clear />
            </IconButton>
          </div>
        </Box>
      )}
    </div>
  );
}
