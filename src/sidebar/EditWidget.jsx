import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "../styles/editwidget.css";
import { IconButton, Typography, Box, Tab, Tabs } from "@mui/material";
import EditLineChartData from "./EditLineChartData";
import EditPieChartData from "./EditPieChartData";
import EditBarChartData from "./EditBarChartData";
import EditFunnelChartData from "./EditFunnelChartData";
import EditGuageChartData from "./EditGaugeChartData";
import EditTableData from "./EditTableData";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const DataRenderer = ({ selectedWidget }) => {
  switch (selectedWidget) {
    case "LineChart":
      return <EditLineChartData />;
    case "PieChart":
      return <EditPieChartData />;
    case "BarChart":
      return <EditBarChartData />;
    case "FunnelChart":
      return <EditFunnelChartData />;
    case "GaugeChart":
      return <EditGuageChartData />;
    case "Table":
      return <EditTableData />;
  }
};

function EditWidget({ selectedWidget, setSelectedWidget }) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, tab) => {
    setCurrentTab(tab);
  };

  const closeDrawer = () => {
    setSelectedWidget(null);
  };

  return (
    <div className="container">
      <div className="header">
        <IconButton
          onClick={() => closeDrawer()}
          sx={{ marginRight: "100px", marginLeft: "10px" }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>

        <h3 className="header-title">Edit Widget</h3>
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={currentTab}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="Edit Widget">
            <Tab label="Data" />
            <Tab label="Settings" />
          </Tabs>
        </Box>
        <TabPanel value={currentTab} index={0}>
          <DataRenderer selectedWidget={selectedWidget} />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          Settings
        </TabPanel>
      </Box>
    </div>
  );
}

export default EditWidget;
