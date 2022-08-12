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
import FilterMessage from "./FilterMessage";
import FilterHeading from "./FilterHeading";
import { FilterPopup } from "../filterpopup/FilterPopup";
import SingleMetricSettings from "./SingleMetricSettings";

export default function EditBarChartData() {
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
        <SingleMetricSettings
          appliedFilter={appliedFilters}
          setModalState={setModalState}
          setMetricMenuState={setMetricMenuState}
          resetDimensionFilter={resetDimensionFilter}
          resetMetricFilter={resetMetricFilter}
        />
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
              <Axis setMetricMenuState={setMetricMenuState} />
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
    </div>
  );
}
