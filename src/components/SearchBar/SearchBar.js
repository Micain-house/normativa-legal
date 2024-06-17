import React, { useState } from 'react';
import { lawSearch } from '../../services/lawSearch';
import iconoSearch from '../../assets/search.svg';
import '../SearchBar/SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await lawSearch(searchTerm);
      setResults(data.data);
      console.log(data.data[10].Url)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='search-container'>
      <div className="input-container">
      <img src={iconoSearch} alt="icono-search"/>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Buscar.." 
        className='search-input'
    
      />
      <button onClick={handleSearch} className="btn-input-search">Buscar</button>
      </div>
      {error && <div>Error: {error}</div>}
      {results && (
        <div className="resultados-container">
          <h2>Resultados</h2>
          <ul>
            {results.map((item, index) => (
              <li key={index}>
                <p><strong>ID Norma:</strong> {item.IdNorma}</p>
                <p><strong>Título:</strong> {item.TituloNorma}</p>
                <p><strong>Organismo:</strong> {item.Organismo}</p>
                <p><strong>Fecha de Publicación:</strong> {item.FechaPublicacion}</p>
                <a href=''>{item.Url}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
