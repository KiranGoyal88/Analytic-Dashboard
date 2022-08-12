import * as React from "react";
import { Button, ButtonGroup } from "@mui/material";

export default function OperatorButtons({ index, tempFilters, addNewDimensionFilter }) {
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    if (tempFilters.DimensionFilter.length - 1 === index) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [tempFilters]);

  return (
    <ButtonGroup
      sx={{ m: 1, borderColor: "#DDDDDD" }}
      color="primary"
      disabled={disabled}
      exclusive
      variant="outlined"
      aria-label="outlined primary button group"
    >
      <Button
        disabled="true"
        sx={{ borderColor: "#DDDDDD", color: "rgba(0, 0, 0, 0.6)" }}
        onClick={() => addNewDimensionFilter("-")}
      >
        -
      </Button>
      <Button sx={{ borderColor: "#DDDDDD", color: "rgba(0, 0, 0, 0.6)" }} onClick={() => addNewDimensionFilter("OR")}>
        OR
      </Button>
      <Button sx={{ borderColor: "#DDDDDD", color: "rgba(0, 0, 0, 0.6)" }} onClick={() => addNewDimensionFilter("AND")}>
        AND
      </Button>
    </ButtonGroup>
  );
}
