import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "../styles/editwidget.css";
import { IconButton, Typography, Box, Tab, Tabs } from "@mui/material";
import EditDataWidget from "./EditDataWidget";

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

function EditWidget({ selectedWidget }) {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="container">
      <div className="header">
        <IconButton sx={{ marginRight: "100px", marginLeft: "10px" }}>
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
          <EditDataWidget />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          Settings
        </TabPanel>
      </Box>
    </div>
  );
}

export default EditWidget;
