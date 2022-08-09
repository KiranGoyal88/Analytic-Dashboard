import React from "react";
import { PieChart } from "react-minimal-pie-chart";
const defaultLabelStyle = {
  fontSize: "25%",
  fontFamily: "sans-serif"
};

export function PieChartComponent2() {
  return (
    <div style={{ padding: "0% 20%" }}>
      <PieChart
        data={[
          { title: "Product 1", value: 10, color: "#82ca9d" },
          { title: "Product 2", value: 15, color: "#FF8042" },
          { title: "Product 3", value: 20, color: "#8884d8" }
        ]}
        label={({ dataEntry }) => {
          let label = dataEntry.title + " : " + `${Math.round(dataEntry.percentage)} %`;
          return label;
        }}
        labelPosition="50"
        labelStyle={{
          ...defaultLabelStyle
        }}
      />
    </div>
  );
}
