// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { lawSearch } from '../../services/lawSearch';
// import iconoSearch from '../../assets/search.svg';
// import iconDate from '../../assets/calendar-days.svg';
// import iconoDelete from '../../assets/delete-input.svg';
// import '../SearchBar/SearchBar.css';

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [results, setResults] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSearch = async () => {
//     try {
//       const data = await lawSearch(searchTerm);
//       setResults(data.data);
//       console.log(data.data[16]);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleDelete = () => {
//     setSearchTerm('');
//     setResults(null);
//     setError(null);
//   };

//   const handleSelect = (idNorma) => {
//     window.open(`/normativa/norm-content/${idNorma}`, '_blank');
//   };

//   const truncateText = (text, maxLength) => {
//     if (text.length > maxLength) {
//       return text.slice(0, maxLength) + '...';
//     }
//     return text;
//   };

//   return (
//     <div className="search">
//       <div className="search-container">
//         <div className="input-container">
//           <img src={iconoSearch} alt="icono-search" className="input-icon" />
//           <input 
//             type="text" 
//             value={searchTerm} 
//             onChange={(e) => setSearchTerm(e.target.value)} 
//             placeholder="Buscar.." 
//             className="search-input"
//           />
//           {searchTerm && (
//             <img 
//               src={iconoDelete} 
//               alt="icono-delete" 
//               className="delete-icon" 
//               onClick={handleDelete} 
//             />
//           )}
//           <button onClick={handleSearch} className="btn-input-search">Buscar</button>
//         </div>
//         {error && <div>Error: {error}</div>}
//         {results && (
//           <div className="container-results">
//             <ul>
//               <p>Se han encontrado <span>32.567</span> resultados.</p>
//               {results.map((item, index) => (
//                 <li key={index} className="law-results" onClick={() => handleSelect(item.IdNorma)}>
//                   <p className="law-date"><img src={iconDate} alt="iconDate" />{item.FechaPublicacion}</p>
//                   <p className="law-title"><strong></strong> {item.TituloNorma}</p>
//                   <p className="law-resumen"><strong></strong> {truncateText(item.Resumen, 400)}</p>
//                   <div className="law-organism">
//                     {Array.isArray(item.Organismo) ? (
//                       item.Organismo.map((org, index) => (<p key={index}>{org}</p>))
//                     ) : 
//                     (
//                       <p>{item.Organismo}</p>
//                     )}
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
import React, { useState } from 'react';
import { lawSearch } from '../../services/lawSearch';
import iconoSearch from '../../assets/search.svg';
import iconDate from '../../assets/calendar-days.svg';
import iconoDelete from '../../assets/delete-input.svg';
import Loading from '../Layout/Loading/loading'; // Asegúrate de que la ruta sea correcta
import '../SearchBar/SearchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError('El término de búsqueda no puede estar vacío');
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const data = await lawSearch(searchTerm);
      setResults(data.data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const handleDelete = () => {
    setSearchTerm('');
    setResults(null);
    setError(null);
  };

  const handleSelect = (idNorma) => {
    window.open(`/Chile/${idNorma}`, '_blank');
  };
  const toCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return toCapitalize(text.slice(0, maxLength)) + '...';
    }
    return toCapitalize(text);
  };

  return (
    <div className="search">
      <div className="search-container">
        <div className="input-container">
          <img src={iconoSearch} alt="icono-search" className="input-icon" />
          <input 
            type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            placeholder="Busca la normativa que necesitas" 
            className="search-input"
          />
          {searchTerm && (
            <img 
              src={iconoDelete} 
              alt="icono-delete" 
              className="delete-icon" 
              onClick={handleDelete} 
            />
          )}
          <button onClick={handleSearch} className="btn-input-search">Buscar</button>
        </div>
        {error && <div className="error-message">Error: {error}</div>}
        {isLoading && <div className="loading-message"><Loading/>Cargando..</div>}
        {results && !isLoading && (
          <div className="container-results">
            <ul>
              <p>Se han encontrado <span>{results.length}</span> resultados.</p>
              {results.map((item, index) => (
                <li key={index} className="law-results" onClick={() => handleSelect(item.IdNorma)}>
                  <p className="law-date"><img src={iconDate} alt="iconDate" />{toCapitalize(item.FechaPublicacion)}</p>
                  <p className="law-title"><strong></strong> {item.TituloNorma.length > 100 ? `${toCapitalize(item.TituloNorma.substring(0, 100))}...` : toCapitalize(item.TituloNorma)}</p>
                  <p className="law-resumen"><strong></strong> {truncateText(item.Resumen, 400)}</p>
                  <div className="law-organism">
                    {item.Organismo ? (
                      Array.isArray(item.Organismo) ? (
                        item.Organismo.map((org, index) => (<p key={index}>{toCapitalize(org)}</p>))
                      ) : (
                        <p>{toCapitalize(item.Organismo)}</p>
                      )
                    ) : (
                      <p>No hay información del organismo.</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
