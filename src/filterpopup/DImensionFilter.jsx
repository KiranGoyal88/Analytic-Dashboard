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
            <p style={{ paddingLeft: "10px" }}>{dimensions.operator}</p>
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
