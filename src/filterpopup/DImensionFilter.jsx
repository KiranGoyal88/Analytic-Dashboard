import * as React from "react";
import AddNewMetricFilter from "./AddNewMetricFilter";

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
          {index > 1 && <p>{dimensions.operator}</p>}
          <AddNewMetricFilter
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
