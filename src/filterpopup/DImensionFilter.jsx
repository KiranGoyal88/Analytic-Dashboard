import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, IconButton, InputLabel, TextField } from "@mui/material";
import ButtonGroup from "./ButtonGroup";
import { Clear } from "@mui/icons-material";

const filters = ["Dimensions"];
const values = [
  "Contains",
  "Does not contain",
  "Exactly matches",
  "Does not exactly match",
  "Starts with",
  "Does not start with",
  "Ends with",
  "Does not end with"
];

export default function DimensionFilter() {
  const [selectedFilter, setSelectedFilter] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleFilterChange = event => {
    setSelectedFilter(event.target.value);
  };
  const handleValueChange = event => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <p>DimensionFilter</p>
      <Box>
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="demo-select-small">Select Filter</InputLabel>
          <Select
            labelId="demo-filter-small"
            id="demo-filter-small"
            value={selectedFilter}
            label="Select Value"
            onChange={handleFilterChange}
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
            value={selectedValue}
            label="Select Value"
            onChange={handleValueChange}
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
        <TextField sx={{ m: 1, minWidth: 200 }} id="standard-basic" variant="outlined" size="small" />

        <ButtonGroup />
        <IconButton sx={{ marginRight: "10px" }} aria-label="delete">
          <Clear />
        </IconButton>
      </Box>
    </div>
  );
}
