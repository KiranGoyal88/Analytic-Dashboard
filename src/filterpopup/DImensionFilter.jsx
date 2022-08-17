import * as React from "react";
import AddNewDimensionMetric from "./AddNewDimensionMetric";

export default function DimensionFilter({
  tempFilters = [],
  setTempFilters,
  removeDimensionIndex,
  addNewDimensionFilter
}) {
  const filterFieldsRenderer = () => {
    return tempFilters?.DimensionFilter.map((dimensions, index) => {
      return (
        <div key={index}>
          {index > 0 && (
            <div style={{ display: "flex" }}>
              <p style={{ paddingLeft: "10px" }}>{dimensions.operator}</p>
              <span
                style={{
                  width: "89%",
                  height: "0px",
                  left: "10%",
                  marginLeft: "20px",
                  marginTop: "2.2%",
                  border: "0.5px solid rgba(0, 0, 0, 0.1)"
                }}
              ></span>
            </div>
          )}
          <AddNewDimensionMetric
            addNewDimensionFilter={addNewDimensionFilter}
            tempFilters={tempFilters}
            setTempFilters={setTempFilters}
            index={index}
            removeDimensionIndex={removeDimensionIndex}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <p>Dimension Filter</p>
      {filterFieldsRenderer()}
    </div>
  );
}
