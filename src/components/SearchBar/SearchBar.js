import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', query);
    // Aquí puedes añadir la lógica para manejar la búsqueda
  };

  return (
    <>
    <div className='search'>
    <div className="search-container">
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Buscar</button>
    </div>
    </div>

    </>  
  );
};

export default SearchBar;