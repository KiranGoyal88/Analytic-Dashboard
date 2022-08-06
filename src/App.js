import { Grid } from '@mui/material';
import './App.css';
import { BarChartComponent } from './components/BarChartComponent';
import { LineChartComponent } from './components/LineChartComponent';
import { PieChartComponent } from './components/PieChartComponent';
import GaugeChartComponent from './components/GaugeChartComponent';
import TabComponent from './components/TabComponent';
import ResponsiveAppBar from './components/HeaderComponent';
import StickyHeadTable from './TableComponent';
import BasicDateRangePicker from './components/CalenderComponent';

function App() {
  return (
    <div className="Grid" style={{ backgroundColor: "#F5F5F5" }}>
      <ResponsiveAppBar />
      <div style={{ margin: "0% 5%" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ margin: "5% 0%" }}>
          <Grid item xs={5.5} >
            <h2>Google Analytics Reports</h2>
          </Grid>
          <Grid item xs={5.5} >

            <BasicDateRangePicker />
          </Grid>

        </Grid>

        <TabComponent />
        <div>
          <h2> AQUISITION</h2>
          <p style={{ color: "gray" }}> Google Analytics</p>
        </div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid item xs={5.5} style={{ marginLeft: "40px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>
            <LineChartComponent />
          </Grid>
          <Grid item xs={5.5} style={{ marginLeft: "20px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>

            <BarChartComponent />
          </Grid>

        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: "20px" }}>
          <Grid item xs={5.5} style={{ marginLeft: "40px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF", padding: "0% 10%" }}>

            <PieChartComponent />

          </Grid>
          <Grid item container xs={5.5}>
            {[1, 1, 1, 1].map(() => {
              return (
                <Grid item xs={5.5} style={{ marginLeft: "20px", marginBottom: "10px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF", padding: "0% 10%" }}>

                  {/* <div style={{ height: '20%', width: '60%', padding: "0% 20%", marginTop: "5%" }}> */}
                  <PieChartComponent />
                  {/* </div> */}
                </Grid>
              )
            })}
          </Grid>

        </Grid>

        <div>
          <h2> BEHAVIOUR </h2>
          <p style={{ color: "gray" }}> Google Analytics</p>
        </div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={5.5} style={{ marginLeft: "40px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>
            <LineChartComponent />
          </Grid>
          <Grid item xs={5.5} style={{ marginLeft: "40px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>
            <LineChartComponent />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: "20px" }}>
          <Grid item xs={2.5} style={{ marginLeft: "40px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>
            <GaugeChartComponent />
          </Grid>
          <Grid item xs={2.5} style={{ marginLeft: "50px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>
            <LineChartComponent />
          </Grid>
          <Grid item xs={2.5} style={{ marginLeft: "40px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>
            <BarChartComponent />
          </Grid>
          <Grid item xs={2.5} style={{ marginLeft: "50px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>
            <LineChartComponent />
          </Grid>
        </Grid>

        <div>
          <h2> AUDIENCE </h2>
          <p style={{ color: "gray" }}> Google Analytics</p>
        </div>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: "20px" }}>
          <Grid item xs={5.5} style={{ marginLeft: "40px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>
            <StickyHeadTable />
          </Grid>
          <Grid item xs={5.5} style={{ marginLeft: "40px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>
            <PieChartComponent />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        </Grid>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: "20px" }}>
          <Grid item xs={5.5} style={{ marginLeft: "40px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>
            <StickyHeadTable />
          </Grid>
          <Grid item xs={5.5} style={{ marginLeft: "40px", border: "1px solid #EFEFEF", borderRadius: "8px", boxShadow: "0px 10px 18px -8.74282px rgba(0, 0, 0, 0.04)", backgroundColor: "#FFFFFF" }}>
            <LineChartComponent />
          </Grid>
        </Grid>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        </Grid>

      </div>
    </div>
  );
}

export default App;
