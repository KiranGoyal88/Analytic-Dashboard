import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ChartRenderer(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ alignSelf: "flex-end", marginRight: "10px" }}>
        <IconButton aria-label="delete" size="small">
          <DeleteForeverIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <InsertChartIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="small"
          onClick={() => props.setSelectedWidget(props.chartType)}>
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </div>
      {props.children}
    </div>
  );
}

export default ChartRenderer;
