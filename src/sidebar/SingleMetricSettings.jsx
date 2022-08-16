import { Accordion, AccordionDetails, AccordionSummary, IconButton, Typography } from "@mui/material";
import React from "react";
import Filters from "./Filters";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dimensions from "./Dimensions";
import { ArrowBackIosNew } from "@mui/icons-material";
import FilterHeading from "./FilterHeading";
import AppliedFilters from "./AppliedFilters";
import SelectedMetrics from "./SelectedMetrics.jsx";

const SingleMetricSettings = ({
  setMetricMenuState,
  setModalState,
  appliedFilter,
  resetDimensionFilter,
  resetMetricFilter,
  dateRange,
  selectedMetric,
  setSelectedMetric
}) => {
  return (
    <div>
      <IconButton
        onClick={() => {
          setMetricMenuState(false);
          setSelectedMetric(null);
        }}
        sx={{ marginRight: "100px", marginLeft: "10px" }}
      >
        <ArrowBackIosNew fontSize="small" />
      </IconButton>
      <Accordion defaultExpanded={true} sx={{ boxShadow: "none" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography fontSize={14} fontWeight={"600"}>
            Edit chart rows
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ marginLeft: "10px" }}>
          <Dimensions dateRange={dateRange} />
          <SelectedMetrics selectedMetric={selectedMetric} />
          <FilterHeading />
          <AppliedFilters
            appliedFilter={appliedFilter}
            resetDimensionFilter={resetDimensionFilter}
            resetMetricFilter={resetMetricFilter}
          />
          <Filters setModalState={setModalState} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default SingleMetricSettings;
