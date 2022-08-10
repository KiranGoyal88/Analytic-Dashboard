import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ButtonGroup() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      sx={{ m: 1 }}
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      size="small">
      <ToggleButton value="-">-</ToggleButton>
      <ToggleButton value="OR">OR</ToggleButton>
      <ToggleButton value="AND">AND</ToggleButton>
    </ToggleButtonGroup>
  );
}
