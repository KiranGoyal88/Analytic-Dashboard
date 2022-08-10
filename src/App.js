import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import "./App.css";
import { BarChartComponent } from "./components/BarChartComponent";
import LineChartComponent from "./components/LineChartComponent";
// import { PieChartComponent } from "./components/PieChartComponent";
import PieChartComponent from "./components/PieChartComponent";
import { PieChartComponent2 } from "./components/PieChartComponent2";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GaugeChartComponent from "./components/GaugeChartComponent";
import { FunnelChartComponent } from "./components/FunnelChartComponent";
import TabComponent from "./components/TabComponent";
import ResponsiveAppBar from "./components/HeaderComponent";
import StickyHeadTable from "./TableComponent";
import BasicDateRangePicker from "./components/CalenderComponent";
import Sidebar from './sidebar/Sidebar';
import ChartRenderer from './components/ChartRenderer';
import { ReactComponent as LogsIcon } from "./assets/svg/logs.svg";

function App() {

  const [selectedWidget, setSelectedWidget] = useState(null);


  return (
    <div className="Grid" style={{ backgroundColor: "#F5F5F5" }}>
      <ResponsiveAppBar />
      <Sidebar selectedWidget={selectedWidget} setSelectedWidget={setSelectedWidget} />
      <div style={{ margin: "0% 5%" }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ margin: "5% 0%" }}
        >
          <Grid item xs={6}>
            {/* <LogsIcon /> */}
            <div style={{
              fontSize: "36px",
              letterSpacing: "-0.02em"
            }}>Google Analytics Report</div>
          </Grid>
          <Grid item xs={6}>
            <BasicDateRangePicker />
          </Grid>
        </Grid>

        <TabComponent />
        <div style={{ marginLeft: '2%' }}>
          <h3> AQUISITION</h3>
          <p style={{ color: "gray" }}> Google Analytics</p>
        </div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} >
            <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='LineChart'><LineChartComponent /></ChartRenderer>
          </Grid>
          <Grid item xs={6} >
            <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='BarChart'><BarChartComponent /></ChartRenderer>
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: "20px" }}
        >
          <Grid item xs={6} >
            <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='PieChart'><PieChartComponent /></ChartRenderer>
          </Grid>
          <Grid item container xs={6}>
            {[1, 1, 1, 1].map(() => {
              return (
                <Grid item xs={6} >
                  <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='GaugeChart'><GaugeChartComponent /></ChartRenderer>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <div style={{ marginLeft: '2%' }}>
          <h3> BEHAVIOUR </h3>
          <p style={{ color: "gray" }}> Google Analytics</p>
        </div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} >
            <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='LineChart'><LineChartComponent /></ChartRenderer>
          </Grid>
          <Grid item xs={6} >
            <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='LineChart'><LineChartComponent /></ChartRenderer>
          </Grid>
        </Grid>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        ></Grid>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: "20px" }}
        >
          {[1, 1, 1, 1].map(() => {
            return (
              <Grid item xs={3} >
                <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='GaugeChart'><GaugeChartComponent /></ChartRenderer>
              </Grid>
            );
          })}
        </Grid>

        <div style={{ marginLeft: '2%' }}>
          <h3> AUDIENCE </h3>
          <p style={{ color: "gray" }}> Google Analytics</p>
        </div>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: "20px" }}
        >
          <Grid item xs={6} >
            <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='StickyHeadTable'><StickyHeadTable /></ChartRenderer>
            <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='FunnelChart'><FunnelChartComponent /></ChartRenderer>
          </Grid>
          <Grid item xs={6} >
            <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='PieChart'><PieChartComponent /></ChartRenderer>
            <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='StickyHeadTable'><StickyHeadTable numRows={3} /></ChartRenderer>
            <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='StickyHeadTable'><StickyHeadTable numRows={3} /></ChartRenderer>
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        ></Grid>


      </div>
    </div>
  );
}

export default App;
