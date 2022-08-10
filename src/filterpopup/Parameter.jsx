import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const values = ["Segments", "Channel grouping", "Direct"];

export default function Parameter() {
  const [current, setCurrent] = React.useState(values[0]);

  const handleChange = (event) => {
    setCurrent(event.target.value);
  };

  return (
    <div>
      <p>Parameters</p>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <Select
          id="demo-select-small"
          value={current}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}>
          {values.map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
