import React, { useState } from "react";
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
  flexDirection: "column",
  // p: 4,
};

const headerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  boxShadow: `0px 2px 4px rgba(0, 0, 0, 0.05)`,
};

const bodyStyle = {
  display: "flex",
  flexDirection: "column",
  p: 4,
};

export const FilterPopup = ({ modalState, setModalState }) => {
  const handleClose = () => setModalState(false);

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box sx={headerStyle}>
            <IconButton sx={{ marginRight: "10px" }} aria-label="delete">
              <Clear fontSize="large" />
            </IconButton>
          </Box>
          <Box sx={bodyStyle}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}>
              <img height="30px" width="30px" src={GoogleAnalyticsIcon} />

              <span className="heading">Lorum Ipsum</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                marginTop: "10px",
              }}>
              <Edit sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Filter name"
                variant="standard"
              />
            </Box>
            <Box
              sx={{
                marginTop: "20px",
                padding: "10px",
                paddingTop: "5px",
                border: "1px solid #DDDDDD",
                borderRadius: "4px",
              }}>
              <Parameter />
            </Box>
            <Box>
              <Button
                sx={{
                  display: "flex",
                  justifyContent: "right",
                  marginTop: "10px",
                }}>
                Clear Filter
              </Button>
            </Box>
            <Box
              sx={{
                marginTop: "20px",
                padding: "10px",
                paddingTop: "5px",
                border: "1px solid #DDDDDD",
                borderRadius: "4px",
              }}>
              <DimensionFilter />
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
