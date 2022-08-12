import React, { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Axis from "./Axis";
import Filters from "./Filters";
import Metrics from "./Metrics";
import Dimensions from "./Dimensions";
import TitleInput from "./TitleInput";
import { ArrowBackIosNew } from "@mui/icons-material";
import FilterHeading from "./FilterHeading";
import { FilterPopup } from "../filterpopup/FilterPopup";

export default function EditFunnelChartData() {
  const [modalState, setModalState] = useState(false);
  const [metricMenuState, setMetricMenuState] = useState(false);

  return (
    <div>
      {metricMenuState ? (
        <div>
          <IconButton onClick={() => setMetricMenuState(false)} sx={{ marginRight: "100px", marginLeft: "10px" }}>
            <ArrowBackIosNew fontSize="small" />
          </IconButton>
          <Accordion defaultExpanded={true} sx={{ boxShadow: "none" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography fontSize={14} fontWeight={"600"}>
                Edit chart rows
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ marginLeft: "10px" }}>
              <Dimensions />
              <Metrics />
              <FilterHeading />
              <Filters setModalState={setModalState} />
            </AccordionDetails>
          </Accordion>
        </div>
      ) : (
        <div>
          <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
              sx={{ minHeight: "40px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography fontSize={14} fontWeight={"600"}>
                Edit Title
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ marginLeft: "10px" }}>
              <TitleInput />
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} sx={{ boxShadow: "none" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography fontSize={14} fontWeight={"600"}>
                Edit Widget Data
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ marginLeft: "10px" }}>
              <Metrics setMetricMenuState={setMetricMenuState} />
            </AccordionDetails>
          </Accordion>
        </div>
      )}
      <FilterPopup modalState={modalState} setModalState={setModalState} />
    </div>
  );
}
