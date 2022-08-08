import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";

import "../styles/sidebar.css";
import Box from "@mui/material/Box";

export default function Sidebar({ selectedWidget, setSelectedWidget }) {
  const [open, setopen] = useState(false);

  useEffect(() => {
    if (selectedWidget !== null) {
      setopen(true);
    } else {
      setopen(false);
    }
  }, [selectedWidget]);

  const closeDrawer = () => {
    setSelectedWidget(null);
  };

  return (
    <div>
      <React.Fragment>
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={open}
          onClose={() => closeDrawer()}>
          <div
            style={{
              width: "240px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <h3>Edit {selectedWidget}</h3>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
