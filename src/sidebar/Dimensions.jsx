import {
  FormControl,
  InputAdornment,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Dimensions = ({ dateRange = "DateRange" }) => {
  return (
    <div>
      <Typography fontSize={13} fontWeight={"600"}>
        Dimensions
      </Typography>
      <FormControl
        sx={{ marginTop: "10px", display: "flex", flexDirection: "row" }}>
        <TextField
          sx={{ width: "90%", cursor: "pointer" }}
          id="Analytics"
          defaultValue={`${dateRange.startDate} - ${dateRange.endDate}`}
          size="small"
          InputProps={{
            readOnly: true,
          }}
        />
      </FormControl>
    </div>
  );
};

export default Dimensions;
