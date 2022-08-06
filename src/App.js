import { Grid } from '@mui/material';
import './App.css';
import { BarChartComponent } from './components/BarChartComponent';
import { LineChartComponent } from './components/LineChartComponent';
import TabComponent from './components/TabComponent';

function App() {
  return (
    <div>
      <h2>Google Analytics Reports</h2>
      <TabComponent />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <BarChartComponent />
        </Grid>
        <Grid item xs={6}>
          <LineChartComponent />
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
