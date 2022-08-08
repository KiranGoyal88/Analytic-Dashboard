import React from "react";
import { IconButton, ToggleButton, ToggleButtonGroup } from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import MoreVert from "../utils/MoreVert";

function ChartRenderer(props) {
  const [toggleButtons, setToggleButtons] = React.useState("chart");

  const handleAlignment = (event, toggle) => {
    setToggleButtons(toggle);
  };

  return (
    <div
      style={{
        margin: "1% 2%",
        border: "1px solid #EFEFEF",
        borderRadius: "8px",
        boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
      }}>
      <div
        style={{
          alignSelf: "flex-end",
          marginRight: "10px",
          marginTop: "10px",
          display: "flex",
        }}>
        <ToggleButtonGroup
          sx={{ padding: 0 }}
          size="small"
          color="info"
          value={toggleButtons}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment">
          <ToggleButton size="small" value="chart">
            <InsertChartIcon fontSize="small" />
          </ToggleButton>
          <ToggleButton size="small" value="table">
            <TableChartIcon fontSize="small" />
          </ToggleButton>
        </ToggleButtonGroup>
        <MoreVert
          setSelectedWidget={props.setSelectedWidget}
          chartType={props.chartType}
        />
        {/* <IconButton
          aria-label="delete"
          size="medium"
          onClick={() => props.setSelectedWidget(props.chartType)}>
          <MoreVertIcon fontSize="small" />
        </IconButton> */}
      </div>
      {props.children}
    </div>
  );
}

export default ChartRenderer;
