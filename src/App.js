import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import "./App.css";
import { BarChartComponent } from "./components/BarChartComponent";
import { LineChartComponent } from "./components/LineChartComponent";
import { PieChartComponent } from "./components/PieChartComponent";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import GaugeChartComponent from "./components/GaugeChartComponent";
import TabComponent from "./components/TabComponent";
import ResponsiveAppBar from "./components/HeaderComponent";
import StickyHeadTable from "./TableComponent";
import BasicDateRangePicker from "./components/CalenderComponent";
import Sidebar from './components/Sidebar';
import ChartRenderer from './components/ChartRenderer';

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
            <h2>Google Analytics Reports</h2>
          </Grid>
          <Grid item xs={6}>
            <BasicDateRangePicker />
          </Grid>
        </Grid>

        <TabComponent />
        <div>
          <h2> AQUISITION</h2>
          <p style={{ color: "gray" }}> Google Analytics</p>
        </div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} >
            <div style={{
              margin: "1% 2%", border: "1px solid #EFEFEF",
              borderRadius: "8px",
              boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#FFFFFF", display: "flex",
              flexDirection: "column",
            }}>
              <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='LineChart'><LineChartComponent /></ChartRenderer>



            </div>
          </Grid>
          <Grid item xs={6} >
            <div style={{
              margin: "1% 2%", border: "1px solid #EFEFEF",
              borderRadius: "8px",
              boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#FFFFFF"
            }}>
              <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='BarChart'><BarChartComponent /></ChartRenderer>
            </div>
          </Grid>
        </Grid>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: "20px" }}
        >
          <Grid item xs={6} >
            <div style={{
              margin: "1% 2%", border: "1px solid #EFEFEF",
              borderRadius: "8px",
              boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#FFFFFF", display: "flex",
              flexDirection: "column",
            }}>
              <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='PieChart'><PieChartComponent /></ChartRenderer>
            </div>
          </Grid>
          <Grid item container xs={6}>
            {[1, 1, 1, 1].map(() => {
              return (
                <Grid item xs={6} >
                  <div style={{
                    margin: "1% 2%", border: "1px solid #EFEFEF",
                    borderRadius: "8px",
                    boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)",
                    backgroundColor: "#FFFFFF", display: "flex",
                    flexDirection: "column",
                  }}>
                    <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='GaugeChart'><GaugeChartComponent /></ChartRenderer>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        <div style={{ marginLeft: '20px' }}>
          <h3> BEHAVIOUR </h3>
          <p style={{ color: "gray" }}> Google Analytics</p>
        </div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} >
            <div style={{
              margin: "1% 2%", border: "1px solid #EFEFEF",
              borderRadius: "8px",
              boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#FFFFFF", display: "flex",
              flexDirection: "column",
            }}>
              <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='LineChart'><LineChartComponent /></ChartRenderer>
            </div>
          </Grid>
          <Grid item xs={6} >
            <div style={{
              margin: "1% 2%", border: "1px solid #EFEFEF",
              borderRadius: "8px",
              boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)",
              backgroundColor: "#FFFFFF", display: "flex",
              flexDirection: "column",
            }}>
              <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='LineChart'><LineChartComponent /></ChartRenderer>
            </div>
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
                <div style={{
                  margin: "1% 2%", border: "1px solid #EFEFEF",
                  borderRadius: "8px",
                  boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)",
                  backgroundColor: "#FFFFFF", display: "flex",
                  flexDirection: "column",
                }}>
                  <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='GaugeChart'><GaugeChartComponent /></ChartRenderer>
                </div>
              </Grid>
            );
          })}
        </Grid>

        <div>
          <h2> AUDIENCE </h2>
          <p style={{ color: "gray" }}> Google Analytics</p>
        </div>

        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginTop: "20px" }}
        >
          <Grid item xs={6} >
            <div style={{
              margin: "1% 2%", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column"
            }}>
              <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='StickyHeadTable'><StickyHeadTable /></ChartRenderer>
            </div>
            <div style={{
              margin: "1% 2%", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column"
            }}>
              <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='StickyHeadTable'><StickyHeadTable /></ChartRenderer>
            </div>
          </Grid>
          <Grid item xs={6} >
            <div style={{ margin: "1% 2%", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column" }}>
              <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='PieChart'><PieChartComponent /></ChartRenderer>
            </div>
            <div style={{
              margin: "1% 2%", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column"
            }}>
              <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='StickyHeadTable'><StickyHeadTable numRows={3} /></ChartRenderer>
            </div>
            <div style={{
              margin: "1% 2%", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF", display: "flex", flexDirection: "column"
            }}>
              <ChartRenderer setSelectedWidget={setSelectedWidget} chartType='StickyHeadTable'><StickyHeadTable numRows={3} /></ChartRenderer>
            </div>

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
