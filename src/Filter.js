import React, { useState, useEffect } from 'react';
import './Filter.css';
import arrowleft from './images/arrow-left.png';

function Filter({ toggleFilterColumn, isFilterColumnVisible }) {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 760);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 760);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="filter">
      <div className="left-filter">
        {isSmallScreen ? (<h3 className='filter-text'>Filter</h3>) : (
          <>
            <h3>3245 ITEMS</h3>
            <p onClick={toggleFilterColumn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M9.99986 2.72125L5.65319 7.06792C5.13986 7.58125 5.13986 8.42125 5.65319 8.93458L9.99986 13.2812" stroke="#292D32" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              {isFilterColumnVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
            </p>
          </>
        )}
      </div>
      <div className="right-filter">
        <h3>RECOMMENDED <img src={arrowleft} alt="arrow-left" /></h3>
      </div>
    </div>
  );
}

export default Filter;
