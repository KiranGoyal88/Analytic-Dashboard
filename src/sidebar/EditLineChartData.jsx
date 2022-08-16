import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Axis from "./Axis";

import TitleInput from "./TitleInput";
import { FilterPopup } from "../filterpopup/FilterPopup";
import SingleMetricSettings from "./SingleMetricSettings";
import AppliedFilters from "./AppliedFilters";
import FilterHeading from "./FilterHeading";

export default function EditLineChartData({ dateRange }) {
  const [modalState, setModalState] = useState(false);
  const [metricMenuState, setMetricMenuState] = useState(false);

  const [appliedFilters, setAppliedFilters] = useState({
    FilterName: "Filter1",
    DimensionFilter: [
      {
        operator: "",
        filter: "Dimensions",
        filterParameter: "Contains",
        filterParameterValue: "Direct",
      },
    ],
    MetricFilter: [
      {
        operator: "",
        filter: "Metrics",
        filterParameter: "> Is more",
        filterParameterValue: "200",
      },
    ],
  });

  const resetDimensionFilter = () => {
    setAppliedFilters({
      ...appliedFilters,
      DimensionFilter: [
        {
          operator: "",
          filter: "",
          filterParameter: "",
          filterParameterValue: "",
        },
      ],
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
          filterParameterValue: "",
        },
      ],
    });
  };

  return (
    <div>
      {metricMenuState ? (
        <SingleMetricSettings
          dateRange={dateRange}
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
              id="panel1a-header">
              <Typography fontSize={14} fontWeight={"600"}>
                Edit Title
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ marginLeft: "10px" }}>
              <TitleInput />
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} sx={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <Typography fontSize={14} fontWeight={"600"}>
                Edit Widget Data
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ marginLeft: "10px" }}>
              <Axis setMetricMenuState={setMetricMenuState} />
              <FilterHeading />
              <AppliedFilters
                appliedFilter={appliedFilters}
                showRemove={false}
              />
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
