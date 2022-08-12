import * as React from "react";
import { Button, ButtonGroup } from "@mui/material";

export default function OperatorButtonsMetrics({
  index,
  tempFilters,
  addNewMetricFilter,
}) {
  const [disabled, setDisabled] = React.useState(true);

  React.useEffect(() => {
    if (tempFilters.MetricFilter.length - 1 === index) {
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
      aria-label="outlined primary button group">
      <Button
        sx={{ borderColor: "#DDDDDD", color: "rgba(0, 0, 0, 0.6)" }}
        onClick={() => addNewMetricFilter("-")}>
        -
      </Button>
      <Button
        sx={{ borderColor: "#DDDDDD", color: "rgba(0, 0, 0, 0.6)" }}
        onClick={() => addNewMetricFilter("OR")}>
        OR
      </Button>
      <Button
        sx={{ borderColor: "#DDDDDD", color: "rgba(0, 0, 0, 0.6)" }}
        onClick={() => addNewMetricFilter("AND")}>
        AND
      </Button>
    </ButtonGroup>
  );
}
