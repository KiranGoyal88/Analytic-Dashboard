import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ChartRenderer(props) {
  return (
    <div
      style={{
        margin: "1% 2%",
        border: "1px solid #EFEFEF",
        borderRadius: "8px",
        boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div style={{ alignSelf: "flex-end", marginRight: "10px" }}>
        <IconButton aria-label="delete" size="small">
          <DeleteForeverIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
          <InsertChartIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="small" onClick={() => props.setSelectedWidget(props.chartType)}>
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </div>
      {props.children}
    </div>
  );
}

export default ChartRenderer;
