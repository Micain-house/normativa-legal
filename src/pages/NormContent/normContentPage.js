import React, { useEffect, useState } from 'react';
import './normContentPage.css';
import { useParams } from 'react-router-dom';
import { normContent } from '../../services/normContent';
import Dropdown from '../../components/Layout/DropDown/dropdown';
import ToggleButton from '../../components/Layout/ToggleButton/toggleButton';
import Micropanel from '../../components/Layout/MicroPanel/microPanel';
import Loading from '../../components/Layout/Loading/loading';

const NormContentPage = () => {
  const { idNorma } = useParams();
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [hoveredArticle, setHoveredArticle] = useState(null);
  const [isMicropanelHovered, setIsMicropanelHovered] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const data = await normContent(idNorma);
        setContent(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    };

    if (idNorma) {
      fetchContent();
    }
  }, [idNorma]);

  const cleanImageLabels = (text) => {
    const regex = /[A-Za-z0-9-]+\.(jpeg|jpg|png|gif)[^ ]*/g;
    return text.replace(regex, '');
  };

  const toCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const parseXmlToReact = (xmlString) => {
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

      const articleClassName = hoveredArticle === index ? 'articulo-container highlight' : 'articulo-container';

      elements.push(
        <div
          className="article-wrapper"
          key={`estructura-wrapper-${index}`}
        >
          <div
            className={articleClassName}
            key={`estructura-${index}`}
            onMouseEnter={() => setHoveredArticle(index)}
            onMouseLeave={() => !isMicropanelHovered && setHoveredArticle(null)}
          >
            {articuloElements}
          </div>
          {hoveredArticle === index && (
            <Micropanel
              content="Este es el micropanel"
              onMouseEnter={() => setIsMicropanelHovered(true)}
              onMouseLeave={() => {
                setIsMicropanelHovered(false);
                setHoveredArticle(null);
              }}
            />
          )}
        </div>
      );
    });

    return elements;
  };

  const renderTitleAndOrganisms = (content) => {
    const parser = new DOMParser();
    const xml = parser.parseFromString(content, 'text/xml');

    const decretoNorma = xml.querySelector('TipoNumero');
    const tituloNorma = xml.querySelector('TituloNorma');
    if (tituloNorma) {
      const organismos = xml.querySelectorAll('Organismos > Organismo');
      let organismoElements = [];
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

  return (
    <div className='norma'>
      <div className='header-norma'>
        <Dropdown />
        <ToggleButton />
      </div>
      {error && <div>Error: {error}</div>}
      {content ? (
        <>
          <div className="norma-title">
            {renderTitleAndOrganisms(content)}
          </div>
          <div className="norma-content">
            {parseXmlToReact(content)}
          </div>
        </>
      ) : (
        <div className="loading-message"><Loading />Cargando..</div>
      )}
    </div>
  );
};

export default NormContentPage;
