import * as React from "react";
import AddNewMetricFilter from "./AddNewMetricFilter";

export default function DimensionFilter({
  tempFilters,
  setTempFilters,
  removeMetricIndex,
  addNewMetricFilter,
}) {
  const filterFieldsRenderer = () => {
    return tempFilters.MetricFilter.map((metrics, index) => {
      return (
        <div key={index}>
          {index > 0 && (
            <p style={{ paddingLeft: "10px" }}>{metrics.operator}</p>
          )}
          <AddNewMetricFilter
            addNewMetricFilter={addNewMetricFilter}
            tempFilters={tempFilters}
            setTempFilters={setTempFilters}
            index={index}
            removeMetricIndex={removeMetricIndex}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <p>Metric Filter</p>
      {filterFieldsRenderer()}
    </div>
  );
}
