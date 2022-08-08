import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, InputLabel, Select, TextField } from "@mui/material";
import { MenuItem } from "@mui/material";

export default function EditDataWidget() {
  const [selectedAxis, setSelectedAxis] = useState("");
  const [leftMetrics, setLeftMetrics] = useState(["users", "ads"]);
  const [rightMetrics, setRightMetrics] = useState(["users"]);

  const handleChange = (event) => {
    setSelectedAxis(event.target.value);
  };

  const MetricMapper = ({ metric }) => {
    return (
      <FormControl sx={{ marginTop: "10px" }} fullWidth>
        <InputLabel id="demo-simple-select-label">Users</InputLabel>
        <Select
          id="demo-simple-select"
          value={selectedAxis}
          label="users"
          size="small"
          onChange={handleChange}>
          <MenuItem value={"users"}>Users</MenuItem>
          <MenuItem value={"ads"}>Ads</MenuItem>
          <MenuItem value={"adset"}>Adset</MenuItem>
        </Select>
      </FormControl>
    );
  };

  return (
    <div>
      <Accordion sx={{ boxShadow: "none" }}>
        <AccordionSummary
          sx={{ minHeight: "40px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography fontSize={14} fontWeight={"600"}>
            Edit Title
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ marginLeft: "10px" }}>
          <TextField
            id="title"
            label="Enter title here"
            variant="outlined"
            size="small"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded={true} sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography fontSize={14} fontWeight={"600"}>
            Edit Data
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ marginLeft: "10px" }}>
          <Typography fontSize={13} fontWeight={"500"}>
            Left Axis
          </Typography>
          {leftMetrics.map((metric) => {
            return <MetricMapper />;
          })}
          <Typography
            sx={{ marginTop: "20px" }}
            fontSize={13}
            fontWeight={"500"}>
            Right Axis
          </Typography>
          {rightMetrics.map((metric) => {
            return <MetricMapper />;
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
