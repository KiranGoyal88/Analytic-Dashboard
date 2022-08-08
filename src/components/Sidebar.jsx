import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";

import "../styles/sidebar.css";
import EditWidget from "./EditWidget";

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
              width: "400px",
              display: "flex",
            }}>
            <EditWidget selectedWidget={selectedWidget} />
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
