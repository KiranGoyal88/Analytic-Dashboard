import React from "react";
import GaugeChart from "react-gauge-chart";

function GaugeChartComponent() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "60%", justifyContent: "flex-start" }}>
        <GaugeChart
          textColor="black"
          id="gauge-chart5"
          nrOfLevels={420}
          needleColor="grey"
          arcsLength={[0.5, 0.3, 0.2, 0.15, 0.1]}
          colors={["#008ac2", "#007aad", "#006b97", "#005c82", "#004d6c"]}
          percent={0.37}
          arcPadding={0.02}
        />
      </div>
      <div style={{ width: "40%", justifyContent: "flex-end" }}>
        <p> Total Sessions</p>
        <p>
          <b>412</b>
        </p>
      </div>
    </div>
  );
}

export default GaugeChartComponent;
