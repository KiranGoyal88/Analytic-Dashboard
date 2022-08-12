import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Axis from "./Axis";
import Filters from "./Filters";
import Metrics from "./Metrics";
import Dimensions from "./Dimensions";
import TitleInput from "./TitleInput";
import FilterHeading from "./FilterHeading";
import { FilterPopup } from "../filterpopup/FilterPopup";

export default function EditGuageChartData() {
  const [modalState, setModalState] = useState(false);
  return (
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
          <Metrics />
          <FilterHeading />
          <Filters setModalState={setModalState} />
        </AccordionDetails>
      </Accordion>
      <FilterPopup modalState={modalState} setModalState={setModalState} />
    </div>
  );
}
