import * as React from "react";
import { Button, ButtonGroup } from "@mui/material";

export default function OperatorButtons(index, tempFilters, setTempFilters) {
  console.log(tempFilters);

  const addNewDimensionFilter = (operator) => {
    setTempFilters({
      ...tempFilters,
      DimensionFilter: [
        ...tempFilters.DimensionFilter,
        {
          operator: operator,
          filter: "",
          filterParameter: "",
          filterParameterValue: "",
        },
      ],
    });
  };
  return (
    <ButtonGroup
      sx={{ m: 1, borderColor: "#DDDDDD" }}
      color="primary"
      exclusive
      variant="outlined"
      aria-label="outlined primary button group">
      <Button
        sx={{ borderColor: "#DDDDDD", color: "rgba(0, 0, 0, 0.6)" }}
        onClick={() => addNewDimensionFilter("-")}>
        -
      </Button>
      <Button
        sx={{ borderColor: "#DDDDDD", color: "rgba(0, 0, 0, 0.6)" }}
        onClick={() => addNewDimensionFilter("OR")}>
        OR
      </Button>
      <Button
        sx={{ borderColor: "#DDDDDD", color: "rgba(0, 0, 0, 0.6)" }}
        onClick={() => addNewDimensionFilter("AND")}>
        AND
      </Button>
    </ButtonGroup>
  );
}
