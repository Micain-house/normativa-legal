export const parseArticleTitles = (xmlString) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlString, 'text/xml');
    const textNodes = xml.querySelectorAll('Texto');
    return Array.from(textNodes).map((node, index) => ({
      title: node.textContent.slice(0, 30),
      id: index
    }));
  };
  
  export const cleanImageLabels = (text) => {
    const regex = /[A-Za-z0-9-]+\.(jpeg|jpg|png|gif)[^ ]*/g;
    return text.replace(regex, '');
  };
  
  export const toCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  
  export const parseXmlToReact = (xmlString) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlString, 'text/xml');
    let elements = [];
  
    const estructurasFuncionales = xml.querySelectorAll('EstructuraFuncional');
    estructurasFuncionales.forEach((ef, index) => {
      let articuloElements = [];
      const articuloTexto = ef.querySelector('Texto');
  
      if (articuloTexto) {
        let textoArticulo = articuloTexto.textContent;
  
        const archivosBinarios = ef.querySelectorAll('ArchivoBinario');
        archivosBinarios.forEach((archivoBinario, i) => {
          const tipoContenido = archivoBinario.querySelector('TipoContenido').textContent;
          const dataCodificada = archivoBinario.querySelector('DataCodificada').textContent;
  
          if (dataCodificada) {
            const imgUrl = `data:${tipoContenido};base64,${dataCodificada}`;
            articuloElements.push(
              <img key={`imagen-${index}-${i}`} src={imgUrl} style={{ maxWidth: '100%', height: 'auto' }} alt="Imagen de la norma" />
            );
  
            textoArticulo = textoArticulo.replace(dataCodificada, '');
          }
        });
  
        textoArticulo = cleanImageLabels(textoArticulo);
        articuloElements.unshift(
          <p key={`articulo-texto-${index}`}>{toCapitalize(textoArticulo)}</p>
        );
      }
  
      elements.push(
        <div className="article-wrapper" id={`article-${index}`} key={`estructura-wrapper-${index}`}>
          <div className="articulo-container" key={`estructura-${index}`}>
            {articuloElements}
          </div>
        </div>
      );
    });
  
    return elements;
  };
  
  export const renderTitleAndOrganisms = (xmlContent) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(xmlContent, 'text/xml');
  
    const decretoNorma = xml.querySelector('TipoNumero');
    const tituloNorma = xml.querySelector('TituloNorma');
    let organismoElements = [];
    
    if (tituloNorma) {
      const organismos = xml.querySelectorAll('Organismos > Organismo');
      if (organismos.length > 0) {
        organismos.forEach((organismo, index) => {
          organismoElements.push(
            <p key={`organismo-${index}`} className='organismo-norma'>{toCapitalize(organismo.textContent)}</p>
          );
        });
      }
  
      return (
        <div className='titulo-container' key="titulo-container">
          <h3 key="titulo">
            <span key="decreto">{decretoNorma ? toCapitalize(decretoNorma.textContent) : ''}</span>{toCapitalize(tituloNorma.textContent)}
          </h3>
          {organismoElements.length > 0 && (
            <div key="organismos-container" className='organismos-container'>
              {organismoElements}
            </div>
          )}
        </div>
      );
    }
    return null;
  };
  