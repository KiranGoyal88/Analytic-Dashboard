import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Axis from "./Axis";
import Filters from "./Filters";
import Metrics from "./Metrics";
import TitleInput from "./TitleInput";
import FilterHeading from "./FilterHeading";
import { FilterPopup } from "../filterpopup/FilterPopup";
import AppliedFilters from "./AppliedFilters";
import DimensionsTable from "./DimensionsTable";

export default function EditTableData() {
  const [modalState, setModalState] = useState(false);
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
          <DimensionsTable />
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
