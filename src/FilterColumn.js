import React, { useState } from 'react';
import "./FilterColumn.css";
import SingleFilterColumn from './SingleFilterColumn';

function FilterColumn() {
  const [isFilterColumnVisible, setFilterColumnVisibility] = useState(true);

  const toggleFilterColumn = () => {
    setFilterColumnVisibility(!isFilterColumnVisible);
  };

  return (
    <div className={`filter-column ${isFilterColumnVisible ? 'visible' : 'hidden'}`}>
      <div className='top-column'>
        <div className='checkbox'></div>
        <p onClick={toggleFilterColumn}>CUSTOMIZBLE</p>
      </div>
      <hr />
      {isFilterColumnVisible && (
        <>
          <SingleFilterColumn title="IDEAL FOR" />
          <SingleFilterColumn title="OCCASION" />
          <SingleFilterColumn title="WORK" />
          <SingleFilterColumn title="FABRIC" />
          <SingleFilterColumn title="SEGMENT" />
          <SingleFilterColumn title="SUITABLE FOR" />
          <SingleFilterColumn title="PATTERN" />
        </>
      )}
    </div>
  );
}

export default FilterColumn;
