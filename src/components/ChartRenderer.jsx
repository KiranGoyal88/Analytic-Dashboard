import React from "react";
import { IconButton, ToggleButton, ToggleButtonGroup } from "@mui/material";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import MoreVert from "../utils/MoreVert";
import { ReactComponent as GraphIcon } from "../assets/svg/graph.svg";
import { ReactComponent as ActiveGraphIcon } from "../assets/svg/activeGraph.svg";
import { ReactComponent as TableIcon } from "../assets/svg/table.svg";
import { ReactComponent as ActiveTableIcon } from "../assets/svg/activeTable.svg";

function ChartRenderer(props) {
  const [toggleButtons, setToggleButtons] = React.useState("chart");

  const handleAlignment = (event, toggle) => {
    setToggleButtons(toggle);
  };

  return (
    <div
      style={{
        margin: "1% 2%",
        padding: "2% 2%",
        border: "1px solid #EFEFEF",
        borderRadius: "8px",
        boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {props.chartType !== "GaugeChart" ? (
        <div
          style={{
            alignSelf: "flex-end",
            marginRight: "10px",
            marginTop: "10px",
            display: "flex"
          }}
        >
          <ToggleButtonGroup
            sx={{ padding: 0 }}
            size="small"
            color="info"
            value={toggleButtons}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton size="small" value="chart">
              {toggleButtons === "chart" ? <ActiveGraphIcon /> : <GraphIcon />}
            </ToggleButton>
            <ToggleButton size="small" value="table">
              {toggleButtons === "table" ? <ActiveTableIcon /> : <TableIcon />}
            </ToggleButton>
          </ToggleButtonGroup>
          <MoreVert setSelectedWidget={props.setSelectedWidget} chartType={props.chartType} />
          {/* <IconButton
          aria-label="delete"
          size="medium"
          onClick={() => props.setSelectedWidget(props.chartType)}>
          <MoreVertIcon fontSize="small" />
        </IconButton> */}
        </div>
      ) : null}
      {props.children}
    </div>
  );
}

export default ChartRenderer;
