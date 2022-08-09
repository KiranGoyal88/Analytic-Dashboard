import { Alert } from "@mui/material";
import React from "react";

const FilterMessage = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <Alert
        sx={{
          background: "rgba(242, 242, 242, 0.5)",
        }}
        icon={false}>
        Filter: Channel grouping: Exactly matches Direct
      </Alert>
    </div>
  );
};

export default FilterMessage;
