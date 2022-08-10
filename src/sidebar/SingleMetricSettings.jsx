import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import Filters from "./Filters";
import Metrics from "./Metrics";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dimensions from "./Dimensions";
import { ArrowBackIosNew } from "@mui/icons-material";
import FilterHeading from "./FilterHeading";

const SingleMetricSettings = ({ setMetricMenuState, setModalState }) => {
  return (
    <div>
      <IconButton
        onClick={() => setMetricMenuState(false)}
        sx={{ marginRight: "100px", marginLeft: "10px" }}>
        <ArrowBackIosNew fontSize="small" />
      </IconButton>
      <Accordion defaultExpanded={true} sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
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
  );
};

export default SingleMetricSettings;
