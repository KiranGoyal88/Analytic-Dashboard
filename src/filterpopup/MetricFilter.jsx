import * as React from "react";
import AddNewMetricFilter from "./AddNewMetricFilter";

export default function DimensionFilter({ tempFilters, setTempFilters, removeMetricIndex, addNewMetricFilter }) {
  const filterFieldsRenderer = () => {
    return tempFilters.MetricFilter.map((metrics, index) => {
      return (
        <div key={index}>
          {index > 0 && (
            <div>
              <p style={{ paddingLeft: "10px" }}>{metrics.operator}</p>
              <span
                style={{
                  position: "absolute",
                  width: "80%",
                  height: "0px",
                  left: "10%",
                  marginTop: "-2%",
                  border: "1px solid rgba(0, 0, 0, 0.1)"
                }}
              ></span>
            </div>
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
