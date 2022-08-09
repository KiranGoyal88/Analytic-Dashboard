import { Alert, Typography } from "@mui/material";
import React from "react";

const FilterMessage = () => {
  return (
    <div>
      <Alert
        sx={{
          marginTop: "10px",
          background: "rgba(242, 242, 242, 0.5)",
        }}
        icon={false}>
        Filter: Channel grouping: Exactly matches Direct
      </Alert>
    </div>
  );
};

export default FilterMessage;
