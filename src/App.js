import React, { useState } from 'react';
import './App.css';
import Description from './Description';
import Header from './Header';
import Filter from './Filter';
import ProductList from './ProductList';
import Footer from './Footer';

function App() {
  const [isFilterColumnVisible, setFilterColumnVisibility] = useState(true);

  const toggleFilterColumn = () => {
    setFilterColumnVisibility(!isFilterColumnVisible);
  };

  return (
    <div className="app">
      <Header />
      <Description />
      <div className='product'>
        <Filter toggleFilterColumn={toggleFilterColumn} isFilterColumnVisible={isFilterColumnVisible}/>
        <ProductList isFilterColumnVisible={isFilterColumnVisible}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
