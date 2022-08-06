import React, { useEffect } from "react";
// import "../styles.css";

// import GaugeChart from "react-gauge-chart";

const GaugeChart = require("gauge-chart");
// Element inside which you want to see the chart
let element = document.querySelector("#gaugeArea");

// Properties of the gauge
let gaugeOptions = {
  hasNeedle: true,
  needleColor: "gray",
  needleUpdateSpeed: 1000,
  arcColors: ["rgb(44, 151, 222)", "lightgray"],
  arcDelimiters: [30],
  rangeLabel: ["0", "100"],
  centralLabel: "50"
};

export default function GaugeChartComponent() {
  useEffect(() => {
    GaugeChart.gaugeChart(element, 200, gaugeOptions).updateNeedle(50);
    console.log("Reloaded");
  });
  // Drawing and updating the chart
  //   GaugeChart.gaugeChart(element, 200, gaugeOptions).updateNeedle(50);

  return <div id="gaugeArea"></div>;
  //   const [bmi, setBmi] = React.useState(0);

  //   const handleChangeBmi = event => setBmi(event.target.value);

  //   const gageCalc = bmi => {
  //     var result = 0;
  //     if (bmi >= 16 && bmi <= 18.5) {
  //       result = getPercentage(bmi, 16, 18.5, 0);
  //     } else if (bmi > 18.5 && bmi < 25) {
  //       result = getPercentage(bmi, 18.5, 25, 0.33);
  //     } else if (bmi >= 25 && bmi <= 30) {
  //       result = getPercentage(bmi, 25, 30, 0.66);
  //     }
  //     return result;
  //   };

  //   function getPercentage(bmi, lowerBound, upperBound, segmentAdjustment) {
  //     return (bmi - lowerBound) / (upperBound - lowerBound) / 3 + segmentAdjustment;
  //   }

  //   return (
  //     <div>
  //       <input value={bmi} onChange={handleChangeBmi} />
  //       <GaugeChart id="gauge-chart" percent={gageCalc(bmi)} nrOfLevels={3} colors={["#FFFF00", "#228B22", "#FF0000"]} />
  //     </div>
  //   );
}
