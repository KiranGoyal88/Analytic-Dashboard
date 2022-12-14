import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Clear, Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import GoogleAnalyticsIcon from "../assets/svg/GoogleAnalytics.svg";

import "../styles/filterpopup.css";
import { TextField } from "@mui/material";
import Parameter from "./Parameter";
import DimensionFilter from "./DImensionFilter";
import { Button } from "@mui/material";
import MetricFilter from "./MetricFilter";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column"

  // p: 4,
};

const headerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.05)`
};

const bodyStyle = {
  display: "flex",
  flexDirection: "column",
  p: 3
};

const defaultFilter = {
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
};

export const FilterPopup = ({ modalState, setModalState, appliedFilters = defaultFilter, setAppliedFilters }) => {
  const [tempFilters, setTempFilters] = useState(appliedFilters);

  const saveTempToAppliedFilters = () => {
    setAppliedFilters(tempFilters);
    setModalState(false);
  };

  const cancelFilterChange = () => {
    setTempFilters(appliedFilters);
    setModalState(false);
  };

  const handleClose = () => setModalState(false);

  const removeDimensionIndex = index => {
    if (tempFilters.DimensionFilter.length > 1) {
      setTempFilters({
        ...tempFilters,
        DimensionFilter: [
          ...tempFilters.DimensionFilter.slice(0, index),
          ...tempFilters.DimensionFilter.slice(index + 1)
        ]
      });
    }
  };
  const removeMetricIndex = index => {
    if (tempFilters.MetricFilter.length > 1) {
      setTempFilters({
        ...tempFilters,
        MetricFilter: [...tempFilters.MetricFilter.slice(0, index), ...tempFilters.MetricFilter.slice(index + 1)]
      });
    }
  };

  const updateFilterName = name => {
    setTempFilters({
      ...tempFilters,
      FilterName: name
    });
  };

  const addNewDimensionFilter = operator => {
    setTempFilters({
      ...tempFilters,
      DimensionFilter: [
        ...tempFilters.DimensionFilter,
        {
          operator: operator,
          filter: "",
          filterParameter: "",
          filterParameterValue: ""
        }
      ]
    });
  };

  const addNewMetricFilter = operator => {
    setTempFilters({
      ...tempFilters,
      MetricFilter: [
        ...tempFilters.MetricFilter,
        {
          operator: operator,
          filter: "",
          filterParameter: "",
          filterParameterValue: ""
        }
      ]
    });
  };

  const clearFilter = () => {
    setTempFilters(defaultFilter);
  };

  const clearDimensionFilter = () => {
    setTempFilters({
      ...tempFilters,
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

  const clearMetricFilter = () => {
    setTempFilters({
      ...tempFilters,
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
      <Modal
        open={modalState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={headerStyle}>
            <IconButton onClick={() => setModalState(false)} sx={{ marginRight: "10px" }} aria-label="delete">
              <Clear fontSize="large" onClick={() => cancelFilterChange()} />
            </IconButton>
          </Box>
          <Box sx={bodyStyle}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap"
              }}
            >
              <img height="30px" width="30px" src={GoogleAnalyticsIcon} />

              <span className="heading">Lorum Ipsum</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                marginTop: "10px"
              }}
            >
              <Edit sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Filter name"
                variant="standard"
                value={tempFilters.FilterName}
                onChange={e => updateFilterName(e.target.value)}
              />
            </Box>
            <Box
              sx={{
                marginTop: "20px",
                padding: "10px",
                paddingTop: "5px",
                border: "1px solid #DDDDDD",
                borderRadius: "4px"
              }}
            >
              <Parameter />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "10px"
                }}
              >
                Clear Filter
              </Button>
            </Box>
            <Box
              sx={{
                padding: "10px",
                paddingTop: "5px",
                border: "1px solid #DDDDDD",
                borderRadius: "4px"
              }}
            >
              <DimensionFilter
                addNewDimensionFilter={addNewDimensionFilter}
                tempFilters={tempFilters}
                setTempFilters={setTempFilters}
                removeDimensionIndex={removeDimensionIndex}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "10px"
                }}
                onClick={() => clearDimensionFilter()}
              >
                Clear Filter
              </Button>
            </Box>
            <Box
              sx={{
                padding: "10px",
                paddingTop: "5px",
                border: "1px solid #DDDDDD",
                borderRadius: "4px"
              }}
            >
              <MetricFilter
                tempFilters={tempFilters}
                setTempFilters={setTempFilters}
                removeMetricIndex={removeMetricIndex}
                addNewMetricFilter={addNewMetricFilter}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "10px"
                }}
                onClick={() => clearMetricFilter()}
              >
                Clear Filter
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px"
              }}
            >
              <Button onClick={() => cancelFilterChange()}>Cancel</Button>
              <Button onClick={() => saveTempToAppliedFilters()} variant="contained">
                Apply Filter
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
