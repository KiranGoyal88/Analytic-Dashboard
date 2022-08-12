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
import AppliedFilters from "./AppliedFilters";

export default function EditPieChartData() {
  const [modalState, setModalState] = useState(false);
  const [metricMenuState, setMetricMenuState] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    FilterName: "",
    DimensionFilter: [
      {
        operator: "",
        filter: "",
        filterParameter: "",
        filterParameterValue: ""
      }
    ],
    MetricFilter: [
      {
        operator: "",
        filter: "",
        filterParameter: "",
        filterParameterValue: ""
      }
    ]
  });

  const resetDimensionFilter = () => {
    setAppliedFilters({
      ...appliedFilters,
      DimensionFilter: [
        {
          operator: "",
          filter: "",
          filterParameter: "",
          filterParameterValue: ""
        }
      ]
    });
  };

  const resetMetricFilter = () => {
    setAppliedFilters({
      ...appliedFilters,
      MetricFilter: [
        {
          operator: "",
          filter: "",
          filterParameter: "",
          filterParameterValue: ""
        }
      ]
    });
  };

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
              <AppliedFilters
                appliedFilter={appliedFilters}
                resetDimensionFilter={resetDimensionFilter}
                resetMetricFilter={resetMetricFilter}
              />
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
      <FilterPopup
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters}
        modalState={modalState}
        setModalState={setModalState}
      />
      {/* <Accordion defaultExpanded={true} sx={{ boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography fontSize={14} fontWeight={"600"}>
            Edit chart rows
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ marginLeft: "10px" }}>
          <Metrics />
          <Filters />
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
