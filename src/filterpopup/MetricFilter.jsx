import * as React from "react";
import AddNewMetricFilter from "./AddNewMetricFilter";

export default function MetricFilter({ tempFilters, setTempFilters }) {
  return (
    <div>
      <p>Metric Filter</p>
      <AddNewMetricFilter
        tempFilters={tempFilters}
        setTempFilters={setTempFilters}
      />
    </div>
  );
}
