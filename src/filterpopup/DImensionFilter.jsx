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
            <div>
              <p style={{ paddingLeft: "10px" }}>{dimensions.operator}</p>
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
